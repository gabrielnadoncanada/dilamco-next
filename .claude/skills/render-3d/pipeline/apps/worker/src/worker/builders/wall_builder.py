"""WallBuilder — translate Room spec to HB walls + floor.

Wraps the patched HB operators `draw_walls_script` and `add_floor`.
"""

from __future__ import annotations

import json
import logging
from typing import TYPE_CHECKING, Any

from worker.errors import WallBuildError
from worker.hb.scene import get_walls_in_creation_order

if TYPE_CHECKING:
    from collections.abc import Callable

    from kitchen_spec import Room

logger = logging.getLogger(__name__)


class WallBuilder:
    """Builds walls and floor from a Room spec.

    Args of build_walls():
        room: kitchen_spec.Room with points, height, thickness, close_loop.
        bpy_module: optional bpy module (injected for testing).
        draw_walls_op: optional override of HB draw_walls_script operator.
        add_floor_op: optional override of HB add_floor operator.

    Returns:
        list of wall objects in creation order.
    """

    def build_walls(
        self,
        room: Room,
        bpy_module: Any = None,
        draw_walls_op: Callable[..., Any] | None = None,
        add_floor_op: Callable[..., Any] | None = None,
    ) -> list[Any]:
        if not room.points or len(room.points) < 3:
            raise WallBuildError(f"Room must have at least 3 points (got {len(room.points)})")

        if bpy_module is None:  # pragma: no cover - requires bpy
            import bpy

            bpy_module = bpy

        if draw_walls_op is None:  # pragma: no cover
            draw_walls_op = bpy_module.ops.home_builder_walls.draw_walls_script
        if add_floor_op is None:  # pragma: no cover
            add_floor_op = bpy_module.ops.home_builder_walls.add_floor

        points_list = [list(p) for p in room.points]
        try:
            draw_walls_op(
                points_json=json.dumps(points_list),
                height=float(room.height),
                thickness=float(room.thickness),
                close_loop=bool(room.close_loop),
            )
        except Exception as exc:
            raise WallBuildError(f"draw_walls_script failed: {exc}") from exc

        try:
            add_floor_op()
        except Exception as exc:
            raise WallBuildError(f"add_floor failed: {exc}") from exc

        walls = get_walls_in_creation_order(bpy_module)
        if not walls:
            raise WallBuildError("Wall creation produced 0 walls")

        logger.info(
            "Built %d walls from %d points (closed=%s)",
            len(walls),
            len(points_list),
            room.close_loop,
        )
        return walls
