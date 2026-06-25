"""OpeningBuilder — place doors and windows on walls.

Wraps the patched HB operators place_door_script and place_window_script.
"""

from __future__ import annotations

import logging
from typing import TYPE_CHECKING, Any

from worker.errors import BuildError

if TYPE_CHECKING:
    from collections.abc import Callable, Iterable

    from kitchen_spec import Door, Window

logger = logging.getLogger(__name__)


class OpeningBuilder:
    """Places doors and windows. Walls passed in must come from WallBuilder."""

    def build_doors(
        self,
        doors: Iterable[Door],
        walls: list[Any],
        bpy_module: Any = None,
        place_door_op: Callable[..., Any] | None = None,
    ) -> int:
        if place_door_op is None:  # pragma: no cover
            if bpy_module is None:
                import bpy

                bpy_module = bpy
            place_door_op = bpy_module.ops.home_builder_doors_windows.place_door_script

        count = 0
        for door in doors:
            self._validate_wall_idx(door.wall_idx, walls, kind="door")
            wall = walls[door.wall_idx]
            try:
                place_door_op(
                    wall_name=wall.name,
                    offset=float(door.offset),
                    width=float(door.width),
                    height=float(door.height),
                )
            except Exception as exc:
                raise BuildError(f"place_door_script failed on wall {wall.name}: {exc}") from exc
            count += 1
            logger.debug(
                "Placed door on %s offset=%.3f w=%.3f h=%.3f",
                wall.name,
                door.offset,
                door.width,
                door.height,
            )
        logger.info("Placed %d doors", count)
        return count

    def build_windows(
        self,
        windows: Iterable[Window],
        walls: list[Any],
        bpy_module: Any = None,
        place_window_op: Callable[..., Any] | None = None,
    ) -> int:
        if place_window_op is None:  # pragma: no cover
            if bpy_module is None:
                import bpy

                bpy_module = bpy
            place_window_op = bpy_module.ops.home_builder_doors_windows.place_window_script

        count = 0
        for window in windows:
            self._validate_wall_idx(window.wall_idx, walls, kind="window")
            wall = walls[window.wall_idx]
            try:
                place_window_op(
                    wall_name=wall.name,
                    offset=float(window.offset),
                    width=float(window.width),
                    height=float(window.height),
                    sill_height=float(window.sill),
                )
            except Exception as exc:
                raise BuildError(f"place_window_script failed on wall {wall.name}: {exc}") from exc
            count += 1
            logger.debug(
                "Placed window on %s offset=%.3f w=%.3f sill=%.3f",
                wall.name,
                window.offset,
                window.width,
                window.sill,
            )
        logger.info("Placed %d windows", count)
        return count

    @staticmethod
    def _validate_wall_idx(idx: int, walls: list[Any], *, kind: str) -> None:
        """LLM.2 mitigation: catch wall_idx out-of-range explicitly."""
        if idx < 0 or idx >= len(walls):
            raise BuildError(
                f"{kind}.wall_idx={idx} out of range "
                f"(have {len(walls)} walls; valid 0..{len(walls) - 1})"
            )
