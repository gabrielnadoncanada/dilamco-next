"""SoffitBuilder — generate soffit (bulkhead) box meshes dropped from the ceiling.

Soffits are common in condos to hide HVAC ducting above the upper cabinets.
Each soffit is a rectangular prism running the full length of the host wall,
sitting flush against the inside face and protruding `depth` into the room
from `ceiling - height` up to `ceiling`.

Tagged `IS_SOFFIT=True` and shares the `Dilamco_Wall` material so it visually
disappears into the wall.
"""

from __future__ import annotations

import contextlib
import logging
from typing import TYPE_CHECKING, Any

from worker.errors import BuildError
from worker.hb.helpers import get_wall_axes, get_wall_length
from worker.renderer.materials import assign_material, make_principled_material

if TYPE_CHECKING:
    from kitchen_spec import KitchenSpec, Soffit

logger = logging.getLogger(__name__)


class SoffitBuilder:
    """Builds rectangular soffit prisms along walls based on spec."""

    def build(
        self,
        spec: KitchenSpec,
        walls: list[Any],
        bpy_module: Any = None,
    ) -> list[Any]:
        """Generate soffit objects for every entry in ``spec.soffits``.

        Returns the list of created soffit objects (may be empty).
        """
        if not spec.soffits:
            return []

        if bpy_module is None:  # pragma: no cover - requires bpy
            import bpy

            bpy_module = bpy

        ceiling_z = float(spec.room.height)
        wall_color = spec.render.wall_color
        wall_roughness = spec.render.wall_roughness

        # Reuse a single Dilamco_Wall material across walls + soffits so the
        # soffit blends visually with the wall surface.
        mat = make_principled_material(
            "Dilamco_Wall",
            color=wall_color,
            roughness=wall_roughness,
            bpy_module=bpy_module,
        )

        created: list[Any] = []
        for sf in spec.soffits:
            if sf.wall_idx >= len(walls):
                raise BuildError(
                    f"Soffit wall_idx={sf.wall_idx} out of range "
                    f"(have {len(walls)} walls; valid 0..{len(walls) - 1})"
                )
            wall = walls[sf.wall_idx]
            obj = self._build_one(
                sf,
                wall,
                ceiling_z=ceiling_z,
                bpy_module=bpy_module,
                material=mat,
            )
            if obj is not None:
                created.append(obj)
        logger.info("Built %d soffits", len(created))
        return created

    # ─── Internal ──────────────────────────────────────────────────────────

    def _build_one(
        self,
        sf: Soffit,
        wall: Any,
        *,
        ceiling_z: float,
        bpy_module: Any,
        material: Any,
    ) -> Any | None:
        wall_length = get_wall_length(wall)
        if wall_length <= 0:
            logger.warning("Soffit skipped: wall %s has zero length", getattr(wall, "name", "?"))
            return None

        z_top = ceiling_z
        z_bottom = ceiling_z - float(sf.height)
        if z_bottom < 0.0:
            z_bottom = 0.0
        if z_top <= z_bottom:
            logger.warning(
                "Soffit skipped: non-positive height on wall %s",
                getattr(wall, "name", "?"),
            )
            return None

        axes = get_wall_axes(wall)
        ox, oy, _oz = axes.origin
        ax, ay, _ = axes.x_axis
        bx, by, _ = axes.y_axis
        inside_offset = axes.thickness  # distance from wall origin to inside face
        front_y = inside_offset + float(sf.depth)

        def _v(along: float, across: float, z: float) -> tuple[float, float, float]:
            return (
                ox + along * ax + across * bx,
                oy + along * ay + across * by,
                z,
            )

        verts = [
            _v(0.0, inside_offset, z_bottom),  # 0 back-bottom-left
            _v(wall_length, inside_offset, z_bottom),  # 1 back-bottom-right
            _v(wall_length, inside_offset, z_top),  # 2 back-top-right
            _v(0.0, inside_offset, z_top),  # 3 back-top-left
            _v(0.0, front_y, z_bottom),  # 4 front-bottom-left
            _v(wall_length, front_y, z_bottom),  # 5 front-bottom-right
            _v(wall_length, front_y, z_top),  # 6 front-top-right
            _v(0.0, front_y, z_top),  # 7 front-top-left
        ]
        faces = [
            (0, 1, 2, 3),  # back (against wall)
            (4, 7, 6, 5),  # front
            (0, 3, 7, 4),  # left
            (1, 5, 6, 2),  # right
            (3, 2, 6, 7),  # top (touching ceiling)
            (0, 4, 5, 1),  # bottom
        ]

        wall_name = getattr(wall, "name", f"wall{sf.wall_idx}")
        mesh_name = f"Soffit_{wall_name}"
        mesh = bpy_module.data.meshes.new(mesh_name)
        mesh.from_pydata(verts, [], faces)
        mesh.update()

        obj = bpy_module.data.objects.new(mesh_name, mesh)
        obj["IS_SOFFIT"] = True
        obj["SOFFIT_WALL_IDX"] = int(sf.wall_idx)
        obj["SOFFIT_DEPTH"] = float(sf.depth)
        obj["SOFFIT_HEIGHT"] = float(sf.height)

        with contextlib.suppress(AttributeError, RuntimeError):
            bpy_module.context.collection.objects.link(obj)

        assign_material(obj, material)

        logger.debug(
            "Soffit on wall %s length=%.3f depth=%.3f z=[%.3f, %.3f]",
            wall_name,
            wall_length,
            float(sf.depth),
            z_bottom,
            z_top,
        )
        return obj
