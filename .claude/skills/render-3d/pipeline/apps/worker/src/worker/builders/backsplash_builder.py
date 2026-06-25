"""BacksplashBuilder — generate backsplash plane meshes along walls.

Creates a thin vertical rectangular slab between the countertop top
(z = 0.954m, countertop top + 4cm thickness) and either the upper-cabinet
bottom (1.372m, mode=standard) or the ceiling (room.height, mode=to_ceiling).

The resulting meshes are tagged `IS_BACKSPLASH=True` and parented at the
inside face of the host wall. A Principled BSDF material is applied per
(type, color) combination.
"""

from __future__ import annotations

import contextlib
import logging
from typing import TYPE_CHECKING, Any

from worker.builders.constants import CABINET_DEFAULT_HEIGHT, CABINET_DEFAULT_Z_BOTTOM
from worker.errors import BuildError
from worker.hb.helpers import get_wall_axes, get_wall_length
from worker.renderer.materials import assign_material, make_principled_material

if TYPE_CHECKING:
    from kitchen_spec import Backsplash, KitchenSpec

logger = logging.getLogger(__name__)


# Vertical extents (meters).
COUNTERTOP_THICKNESS_M = 0.040
COUNTERTOP_TOP_Z = (
    CABINET_DEFAULT_Z_BOTTOM["BASE"] + CABINET_DEFAULT_HEIGHT["BASE"] + COUNTERTOP_THICKNESS_M
)  # 0.000 + 0.914 + 0.040 = 0.954
UPPER_BOTTOM_Z = CABINET_DEFAULT_Z_BOTTOM["UPPER"]  # 1.372

# Backsplash plane physical thickness (5 mm) — sits flush against wall
# inside face, protruding into the room.
BACKSPLASH_THICKNESS_M = 0.005

# Color palette for backsplashes. Defaults to a neutral light grey if the
# requested color isn't in the dict.
BACKSPLASH_PALETTE: dict[str, tuple[float, float, float, float]] = {
    "Arctic White": (0.96, 0.96, 0.95, 1.0),
    "Naval": (0.10, 0.20, 0.35, 1.0),
    "Tricorn Black": (0.10, 0.10, 0.10, 1.0),
    "Calacatta": (0.95, 0.95, 0.92, 1.0),
}
DEFAULT_COLOR: tuple[float, float, float, float] = (0.85, 0.85, 0.85, 1.0)


class BacksplashBuilder:
    """Builds rectangular backsplash slabs along walls based on spec."""

    def build(
        self,
        spec: KitchenSpec,
        walls: list[Any],
        bpy_module: Any = None,
        mesh_op: Any = None,
    ) -> list[Any]:
        """Generate backsplash objects for every entry in ``spec.backsplashes``.

        Returns the list of created backsplash objects (may be empty).
        """
        if not spec.backsplashes:
            return []

        if bpy_module is None:  # pragma: no cover - requires bpy
            import bpy

            bpy_module = bpy

        ceiling_z = float(spec.room.height)
        created: list[Any] = []
        for bs in spec.backsplashes:
            if bs.type == "none":
                # Explicit "no backsplash" — skip silently.
                continue
            if bs.wall_idx >= len(walls):
                raise BuildError(
                    f"Backsplash wall_idx={bs.wall_idx} out of range "
                    f"(have {len(walls)} walls; valid 0..{len(walls) - 1})"
                )
            wall = walls[bs.wall_idx]
            obj = self._build_one(
                bs,
                wall,
                ceiling_z=ceiling_z,
                bpy_module=bpy_module,
                mesh_op=mesh_op,
            )
            if obj is not None:
                created.append(obj)
        logger.info("Built %d backsplashes", len(created))
        return created

    # ─── Internal ──────────────────────────────────────────────────────────

    def _build_one(
        self,
        bs: Backsplash,
        wall: Any,
        *,
        ceiling_z: float,
        bpy_module: Any,
        mesh_op: Any = None,
    ) -> Any | None:
        wall_length = get_wall_length(wall)
        if wall_length <= 0:
            logger.warning(
                "Backsplash skipped: wall %s has zero length", getattr(wall, "name", "?")
            )
            return None

        # Determine span along the wall.
        start = float(bs.offset_start) if bs.offset_start is not None else 0.0
        end = float(bs.offset_end) if bs.offset_end is not None else wall_length
        # Clamp to wall length and ensure positive span.
        start = max(0.0, min(start, wall_length))
        end = max(0.0, min(end, wall_length))
        if end <= start:
            logger.warning(
                "Backsplash skipped: empty span on wall %s (start=%.3f end=%.3f)",
                getattr(wall, "name", "?"),
                start,
                end,
            )
            return None

        # Determine vertical extent.
        z_bottom = COUNTERTOP_TOP_Z
        if bs.height is not None:
            z_top = z_bottom + float(bs.height)
        elif bs.mode == "to_ceiling":
            z_top = ceiling_z
        else:  # standard
            z_top = UPPER_BOTTOM_Z
        if z_top <= z_bottom:
            logger.warning(
                "Backsplash skipped: non-positive height on wall %s (z_bottom=%.3f z_top=%.3f)",
                getattr(wall, "name", "?"),
                z_bottom,
                z_top,
            )
            return None

        # Compute world-space vertices. The backsplash sits on the inside
        # face of the wall, so y_axis (into the room) is offset by
        # `thickness`. The slab itself is `BACKSPLASH_THICKNESS_M` thick,
        # protruding further into the room.
        axes = get_wall_axes(wall)
        ox, oy, _oz = axes.origin
        ax, ay, _ = axes.x_axis
        bx, by, _ = axes.y_axis
        inside_offset = axes.thickness  # distance from wall origin to inside face
        outside_y = inside_offset
        front_y = inside_offset + BACKSPLASH_THICKNESS_M

        def _v(along: float, across: float, z: float) -> tuple[float, float, float]:
            return (
                ox + along * ax + across * bx,
                oy + along * ay + across * by,
                z,
            )

        # 8 verts of a thin box (back face flush with wall inside).
        verts = [
            _v(start, outside_y, z_bottom),  # 0 back-bottom-left
            _v(end, outside_y, z_bottom),  # 1 back-bottom-right
            _v(end, outside_y, z_top),  # 2 back-top-right
            _v(start, outside_y, z_top),  # 3 back-top-left
            _v(start, front_y, z_bottom),  # 4 front-bottom-left
            _v(end, front_y, z_bottom),  # 5 front-bottom-right
            _v(end, front_y, z_top),  # 6 front-top-right
            _v(start, front_y, z_top),  # 7 front-top-left
        ]
        faces = [
            (0, 1, 2, 3),  # back (against wall)
            (4, 7, 6, 5),  # front
            (0, 3, 7, 4),  # left
            (1, 5, 6, 2),  # right
            (3, 2, 6, 7),  # top
            (0, 4, 5, 1),  # bottom
        ]

        wall_name = getattr(wall, "name", f"wall{bs.wall_idx}")
        mesh_name = f"Backsplash_{wall_name}"
        obj_name = mesh_name

        mesh = mesh_op(mesh_name) if mesh_op is not None else bpy_module.data.meshes.new(mesh_name)
        mesh.from_pydata(verts, [], faces)
        mesh.update()

        obj = bpy_module.data.objects.new(obj_name, mesh)
        # Tag for material lookup + cleanup.
        obj["IS_BACKSPLASH"] = True
        obj["BACKSPLASH_TYPE"] = bs.type
        obj["BACKSPLASH_COLOR"] = bs.color
        obj["BACKSPLASH_WALL_IDX"] = int(bs.wall_idx)

        # Link into the active collection so it shows up in the scene.
        # Older API or missing context (tests) — degrade gracefully.
        with contextlib.suppress(AttributeError, RuntimeError):
            bpy_module.context.collection.objects.link(obj)

        # Apply material.
        color = BACKSPLASH_PALETTE.get(bs.color, DEFAULT_COLOR)
        mat_name = f"Dilamco_Backsplash_{bs.type}_{bs.color}"
        roughness = self._roughness_for(bs.type)
        mat = make_principled_material(
            mat_name,
            color=color,
            roughness=roughness,
            bpy_module=bpy_module,
        )
        assign_material(obj, mat)

        logger.debug(
            "Backsplash on wall %s span=[%.2f, %.2f] z=[%.3f, %.3f] type=%s color=%s",
            wall_name,
            start,
            end,
            z_bottom,
            z_top,
            bs.type,
            bs.color,
        )
        return obj

    @staticmethod
    def _roughness_for(bs_type: str) -> float:
        """Return a sensible roughness for each backsplash surface."""
        return {
            "subway": 0.30,
            "slab": 0.20,
            "mosaic": 0.45,
            "stone": 0.55,
            "none": 0.50,
        }.get(bs_type, 0.40)
