"""KitchenBuilder — orchestrate spec → Blender scene → render → quality.

Pipeline (12 steps):
    [0]  validate spec (kitchen_validator)
    [1]  ensure HB addon enabled + default style
    [2]  clear HB scene
    [3]  build walls + floor
    [4]  build doors
    [5]  build windows
    [6]  ensure corner sizes (HB.2 workaround)
    [7]  build cabinets (straight + corner + island + panel filler)
    [8]  build appliances
    [9]  apply style (cabinet_style + door_style + pull_finish)
    [10] add countertops + sink cutouts
    [11] apply scene materials + workarounds (HB.3 modifiers)
    [12] setup camera + lighting
    [13] configure render engine + seed (ADR-013)
    [14] hide+restore for render → render to PNG
    [15] embed metadata (ADR-013) + run quality Layer 1 (ADR-014)
"""

from __future__ import annotations

import logging
from dataclasses import dataclass
from datetime import UTC, datetime
from pathlib import Path
from typing import TYPE_CHECKING, Any

from worker import __version__ as _worker_version
from worker.builders.appliance_builder import ApplianceBuilder
from worker.builders.backsplash_builder import BacksplashBuilder
from worker.builders.cabinet_builder import CabinetBuilder
from worker.builders.constants import CORNER_TYPES
from worker.builders.countertop_builder import CountertopBuilder
from worker.builders.opening_builder import OpeningBuilder
from worker.builders.soffit_builder import SoffitBuilder
from worker.builders.style_builder import StyleBuilder
from worker.builders.wall_builder import WallBuilder
from worker.errors import BuildError, CabinetBuildError
from worker.hb.scene import clear_hb_scene
from worker.hb.workarounds import (
    apply_modifiers_for_appliances,
    ensure_corner_sizes,
)
from worker.renderer.determinism import (
    RenderMetadata,
    compute_render_seed,
    compute_spec_hash,
    embed_metadata,
)
from worker.renderer.lighting import setup_lighting
from worker.renderer.materials import apply_all_scene_materials
from worker.renderer.post_process import HideForRender
from worker.renderer.quality import QualityReport, run_quality_layer_1
from worker.renderer.render_engine import configure_render, render_to_path

if TYPE_CHECKING:
    from kitchen_spec import Cabinet, KitchenSpec

logger = logging.getLogger(__name__)


# Map PANEL_* cabinet types → underlying base cabinet type.
PANEL_BASE_TYPE: dict[str, str] = {
    "PANEL_BASE": "BASE",
    "PANEL_UPPER": "UPPER",
    "PANEL_TALL": "TALL",
}
PANEL_TYPES = frozenset(PANEL_BASE_TYPE.keys())

# Default depth (m) for a corner filler so it sits flush with the adjacent
# cabinet body front. HB defaults: base=0.587, upper=0.330, tall=0.610.
_PANEL_DEFAULT_DEPTH: dict[str, float] = {
    "BASE": 0.587,
    "UPPER": 0.330,
    "TALL": 0.610,
}

# Default height (m) for fillers. HB's Panel class always uses base height
# (0.876) regardless of cabinet_type, so we force the dim via the script's
# height param. Base/upper fillers can stay at their HB defaults.
_PANEL_DEFAULT_HEIGHT: dict[str, float] = {
    "BASE": 0.0,    # 0 → HB default (base_cabinet_height ≈ 0.876)
    "UPPER": 0.0,   # 0 → HB default
    "TALL": 2.134,  # 84" — tall_cabinet_height
}


@dataclass
class RenderResult:
    """Outcome of a build_and_render() call."""

    output_path: Path
    spec_hash: str
    render_seed: int
    quality_report: QualityReport
    quality_warning: bool
    metadata: RenderMetadata
    walls_built: int
    cabinets_built: int
    appliances_built: int
    fronts_styled: int
    backsplashes_built: int = 0
    soffits_built: int = 0


class KitchenBuilder:
    """Orchestrate the full build → render pipeline.

    All collaborators are injectable for testing without bpy/Blender.
    """

    def __init__(
        self,
        *,
        wall_builder: WallBuilder | None = None,
        opening_builder: OpeningBuilder | None = None,
        cabinet_builder: CabinetBuilder | None = None,
        appliance_builder: ApplianceBuilder | None = None,
        countertop_builder: CountertopBuilder | None = None,
        style_builder: StyleBuilder | None = None,
        backsplash_builder: BacksplashBuilder | None = None,
        soffit_builder: SoffitBuilder | None = None,
        plugin_version: str = "hb5-2026.05.01",
    ) -> None:
        self._walls = wall_builder or WallBuilder()
        self._openings = opening_builder or OpeningBuilder()
        self._cabinets = cabinet_builder or CabinetBuilder()
        self._appliances = appliance_builder or ApplianceBuilder(self._cabinets)
        self._countertops = countertop_builder or CountertopBuilder()
        self._styles = style_builder or StyleBuilder()
        self._backsplashes = backsplash_builder or BacksplashBuilder()
        self._soffits = soffit_builder or SoffitBuilder()
        self._plugin_version = plugin_version

    def build_and_render(
        self,
        spec: KitchenSpec,
        output_path: Path,
        *,
        dsl_source: str = "",
        dsl_version: str = "1.0",
        quality_preset: str = "standard",
        bpy_module: Any = None,
        setup_lighting_fn: Any = None,
        setup_camera_fn: Any = None,
        configure_render_fn: Any = None,
        render_fn: Any = None,
        clear_scene_fn: Any = None,
        ensure_corner_sizes_fn: Any = None,
        apply_modifiers_fn: Any = None,
        apply_materials_fn: Any = None,
        run_quality_fn: Any = None,
        embed_metadata_fn: Any = None,
        hide_for_render_factory: Any = None,
    ) -> RenderResult:
        """Build the scene from spec and render to PNG. Returns RenderResult.

        All `*_fn` parameters are injection points for tests. Production code
        passes only `spec`, `output_path`, `dsl_source`, `dsl_version`.
        """
        output_path = Path(output_path)

        # ─── Determinism + metadata setup ─────────────────────────────────
        spec_hash = compute_spec_hash(dsl_source=dsl_source, dsl_version=dsl_version)
        seed = compute_render_seed(dsl_source=dsl_source, dsl_version=dsl_version)
        metadata = RenderMetadata(
            spec_hash=spec_hash,
            dsl_version=dsl_version,
            worker_version=_worker_version,
            plugin_version=self._plugin_version,
            render_seed=seed,
            render_date=datetime.now(UTC).isoformat(timespec="seconds"),
            quality_preset=quality_preset,
        )

        # ─── Resolve injectable functions ─────────────────────────────────
        clear_fn = clear_scene_fn or (lambda: clear_hb_scene(bpy_module))
        ensure_corners_fn = ensure_corner_sizes_fn or (
            lambda: ensure_corner_sizes(bpy_module=bpy_module)
        )
        appl_modifiers_fn = apply_modifiers_fn or (
            lambda: apply_modifiers_for_appliances(bpy_module=bpy_module)
        )
        apply_mats_fn = apply_materials_fn or (
            lambda: apply_all_scene_materials(spec.render, bpy_module=bpy_module)
        )
        light_fn = setup_lighting_fn or (lambda: setup_lighting(spec.render, bpy_module=bpy_module))
        cam_fn = setup_camera_fn or self._default_camera_fn(spec, bpy_module)
        cfg_fn = configure_render_fn or (
            lambda: configure_render(spec.render, seed=seed, bpy_module=bpy_module)
        )
        render = render_fn or (lambda: render_to_path(output_path, bpy_module=bpy_module))
        quality_fn = run_quality_fn or (lambda path: run_quality_layer_1(path))
        embed_fn = embed_metadata_fn or (lambda path, md: embed_metadata(path, md))
        hide_factory = hide_for_render_factory or (
            lambda walls: HideForRender(spec.render, walls=walls, bpy_module=bpy_module)
        )

        # ─── [2] Clear scene ──────────────────────────────────────────────
        clear_fn()

        # ─── [3-5] Walls + floor + doors + windows ───────────────────────
        walls = self._walls.build_walls(spec.room, bpy_module=bpy_module)
        self._openings.build_doors(spec.doors, walls, bpy_module=bpy_module)
        self._openings.build_windows(spec.windows, walls, bpy_module=bpy_module)

        # ─── [6] HB.2 corner alignment workaround ─────────────────────────
        ensure_corners_fn()

        # ─── [7] Cabinets ─────────────────────────────────────────────────
        cabinets_built = 0
        for cab in spec.cabinets:
            self._dispatch_cabinet(cab, walls, bpy_module=bpy_module)
            cabinets_built += 1

        # ─── [8] Appliances ───────────────────────────────────────────────
        for app in spec.appliances:
            self._appliances.place(app, walls, bpy_module=bpy_module)

        # ─── [9] Style + fronts ───────────────────────────────────────────
        style_summary = self._styles.apply(spec.style, bpy_module=bpy_module)

        # ─── [10] Countertops + sink cutouts ──────────────────────────────
        self._countertops.add_countertops(bpy_module=bpy_module)
        self._countertops.apply_sink_cutouts(bpy_module=bpy_module)

        # ─── [10.5] Soffits + backsplashes (DSL v1.5 primitives) ─────────
        # Soffits drop from the ceiling above the uppers; backsplashes
        # cover the gap between countertop top and the soffit/uppers/
        # ceiling. Build soffits first so backsplash height computations
        # could reference them later (currently independent).
        soffits = self._soffits.build(spec, walls, bpy_module=bpy_module)
        backsplashes = self._backsplashes.build(spec, walls, bpy_module=bpy_module)

        # ─── [11] HB.3 modifiers + scene materials ────────────────────────
        appl_modifiers_fn()
        apply_mats_fn()

        # ─── [12] Camera + lighting ───────────────────────────────────────
        light_fn()
        cam_fn()

        # ─── [13] Render engine config (with deterministic seed) ──────────
        cfg_fn()

        # ─── [14] Hide + render + restore ────────────────────────────────
        with hide_factory(walls):
            render()

        # ─── [15] Embed metadata + quality check ──────────────────────────
        embed_fn(output_path, metadata)
        quality_report = quality_fn(output_path)
        if not quality_report.passed:
            logger.warning(
                "Quality Layer 1 FAILED for %s: %s",
                output_path,
                [c.name for c in quality_report.failed_checks],
            )

        return RenderResult(
            output_path=output_path,
            spec_hash=spec_hash,
            render_seed=seed,
            quality_report=quality_report,
            quality_warning=not quality_report.passed,
            metadata=metadata,
            walls_built=len(walls),
            cabinets_built=cabinets_built,
            appliances_built=len(spec.appliances),
            fronts_styled=style_summary.get("fronts", 0),
            backsplashes_built=len(backsplashes),
            soffits_built=len(soffits),
        )

    def _dispatch_cabinet(
        self,
        cab: Cabinet,
        walls: list[Any],
        *,
        bpy_module: Any = None,
    ) -> None:
        """Route a Cabinet to the correct CabinetBuilder method."""
        ctype = cab.type
        name = cab.name or "Base Door"

        # Corner cabinets — corner_side required (validator catches missing)
        if ctype in CORNER_TYPES:
            if cab.wall_idx is None or cab.corner_side is None:
                raise CabinetBuildError(
                    f"Corner cabinet {ctype} requires wall_idx + corner_side "
                    f"(got wall_idx={cab.wall_idx}, corner_side={cab.corner_side})"
                )
            self._validate_wall_idx(cab.wall_idx, walls, ctype)
            self._cabinets.place_corner(
                wall=walls[cab.wall_idx],
                corner_side=cab.corner_side,
                cabinet_type=ctype,
                name=cab.name,
                bpy_module=bpy_module,
            )
            return

        # Panel filler — same dispatch as straight, but with PANEL→BASE mapping
        effective_type = PANEL_BASE_TYPE.get(ctype, ctype)
        effective_name = "Panel" if ctype in PANEL_TYPES else name

        # HB Panel class defaults to 19mm depth — fine for a face-strip but the
        # filler ends up flush against the wall instead of flush with the
        # adjacent cabinet front. For corner fillers we want it to project the
        # full cabinet body depth so it visually closes the gap. Use the
        # explicit cab.depth if set; otherwise fall back to the default body
        # depth for the cabinet zone (BASE=0.587, UPPER=0.330, TALL=0.610).
        if ctype in PANEL_TYPES and cab.depth is None:
            effective_depth = _PANEL_DEFAULT_DEPTH.get(effective_type, 0.0)
        else:
            effective_depth = cab.depth or 0.0
        if ctype in PANEL_TYPES and cab.height is None:
            effective_height = _PANEL_DEFAULT_HEIGHT.get(effective_type, 0.0)
        else:
            effective_height = cab.height or 0.0

        if cab.wall_idx is not None:
            if cab.width is None or cab.offset is None:
                raise CabinetBuildError(
                    f"Wall-relative cabinet {effective_name!r} requires width and offset"
                )
            self._validate_wall_idx(cab.wall_idx, walls, ctype)
            self._cabinets.place_straight(
                wall=walls[cab.wall_idx],
                offset_along=cab.offset,
                width=cab.width,
                cabinet_name=effective_name,
                cabinet_type=effective_type,
                z_loc=cab.z_offset or 0.0,
                depth=effective_depth,
                height=effective_height,
                bpy_module=bpy_module,
            )
        else:
            # Island — x and y required
            if cab.x is None or cab.y is None or cab.width is None:
                raise CabinetBuildError(
                    f"Island cabinet {effective_name!r} requires x, y, width "
                    f"(got x={cab.x}, y={cab.y}, width={cab.width})"
                )
            self._cabinets.place_island(
                cabinet_name=effective_name,
                cabinet_type=effective_type,
                width=cab.width,
                x=cab.x,
                y=cab.y,
                rotation_deg=cab.rotation_deg or 0.0,
                z_loc=cab.z_offset or 0.0,
                bpy_module=bpy_module,
            )

    @staticmethod
    def _validate_wall_idx(idx: int, walls: list[Any], ctype: str) -> None:
        """LLM.2 mitigation: explicit error for wall_idx out of range."""
        if idx < 0 or idx >= len(walls):
            raise BuildError(
                f"Cabinet type={ctype} wall_idx={idx} out of range "
                f"(have {len(walls)} walls; valid 0..{len(walls) - 1})"
            )

    @staticmethod
    def _default_camera_fn(spec: KitchenSpec, bpy_module: Any) -> Any:
        from worker.renderer.camera import setup_camera

        return lambda: setup_camera(spec.render, bpy_module=bpy_module)
