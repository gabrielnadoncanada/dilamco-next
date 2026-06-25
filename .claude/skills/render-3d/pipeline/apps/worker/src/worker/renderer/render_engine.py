"""Render engine setup — Cycles + AgX color transform + samples.

ADR-013 determinism: we set the cycles seed explicitly so two renders of the
same spec produce the same PNG.
"""

from __future__ import annotations

import logging
from pathlib import Path
from typing import TYPE_CHECKING, Any

if TYPE_CHECKING:
    from kitchen_spec import RenderConfig

logger = logging.getLogger(__name__)


def configure_render(
    cfg: RenderConfig,
    *,
    seed: int,
    bpy_module: Any = None,
) -> None:
    """Configure scene render settings: engine, samples, seed, color management.

    `seed` is the deterministic Cycles seed (computed by determinism.compute_render_seed).
    """
    if bpy_module is None:  # pragma: no cover
        import bpy

        bpy_module = bpy

    scene = bpy_module.context.scene
    scene.render.engine = cfg.engine
    scene.render.resolution_x, scene.render.resolution_y = cfg.resolution

    # Deterministic seed (Cycles only — Eevee Next is also deterministic but
    # has its own quirks; we don't ship Eevee for production).
    if cfg.engine == "CYCLES":
        scene.cycles.samples = int(cfg.samples)
        # Cycles wants int32 signed. Clamp via 31-bit mask to stay in [0, 2^31-1].
        scene.cycles.seed = int(seed) & 0x7FFFFFFF
        # Disable adaptive sampling for snapshot determinism (Phase 8 may
        # re-enable with explicit threshold).
        scene.cycles.use_adaptive_sampling = False

    # Color management
    scene.view_settings.view_transform = cfg.view_transform
    if cfg.look:
        scene.view_settings.look = cfg.look
    scene.view_settings.exposure = float(cfg.exposure)

    logger.info(
        "Render configured: engine=%s res=%dx%d samples=%d seed=%d view_transform=%s",
        cfg.engine,
        cfg.resolution[0],
        cfg.resolution[1],
        cfg.samples,
        seed,
        cfg.view_transform,
    )


def render_to_path(
    output_path: Path,
    bpy_module: Any = None,
    *,
    render_op: Any = None,
) -> Path:
    """Render the current scene to PNG at output_path.

    Returns the output path on success. Raises if render fails.
    """
    if bpy_module is None:  # pragma: no cover
        import bpy

        bpy_module = bpy
    if render_op is None:  # pragma: no cover
        render_op = bpy_module.ops.render.render

    output_path = Path(output_path)
    output_path.parent.mkdir(parents=True, exist_ok=True)

    bpy_module.context.scene.render.image_settings.file_format = "PNG"
    bpy_module.context.scene.render.filepath = str(output_path)

    render_op(write_still=True)

    if not output_path.exists():
        raise RuntimeError(f"Render completed but {output_path} was not written")

    logger.info("Rendered to %s", output_path)
    return output_path
