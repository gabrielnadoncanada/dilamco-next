"""Pre/post-render hide+restore — walls/ceiling/annotations.

Some objects need to be hidden during the render (e.g., the wall in front of
the camera, ceiling, HB text annotations). This module captures their state,
hides them, and restores after.

Used as a context manager to guarantee restoration even on render failure.
"""

from __future__ import annotations

import logging
from typing import TYPE_CHECKING, Any

from worker.hb.workarounds import hide_text_annotations

if TYPE_CHECKING:
    from collections.abc import Iterable

    from kitchen_spec import RenderConfig

logger = logging.getLogger(__name__)


class HideForRender:
    """Context manager that hides specific objects for the duration of a render.

    Hides:
    - walls listed in cfg.hide_walls_idx
    - ceiling if cfg.hide_ceiling is True
    - HB text annotations if cfg.hide_annotations is True

    On __exit__, restores the original hide_render state of each touched obj.
    """

    def __init__(
        self,
        cfg: RenderConfig,
        walls: Iterable[Any] | None = None,
        bpy_module: Any = None,
    ) -> None:
        self._cfg = cfg
        self._walls = list(walls) if walls is not None else None
        self._bpy = bpy_module
        self._restore: list[tuple[Any, bool]] = []

    def __enter__(self) -> HideForRender:
        bpy = self._resolve_bpy()
        self._restore = []

        # Hide configured walls
        walls = self._walls
        if walls is None:
            walls = [obj for obj in bpy.data.objects if obj.get("IS_WALL_BP")]
            walls.sort(key=lambda w: (len(w.name), w.name))

        for idx in self._cfg.hide_walls_idx:
            if 0 <= idx < len(walls):
                wall = walls[idx]
                self._restore.append((wall, wall.hide_render))
                wall.hide_render = True

        # Hide ceiling
        if self._cfg.hide_ceiling:
            for obj in bpy.data.objects:
                if obj.get("IS_CEILING_BP"):
                    self._restore.append((obj, obj.hide_render))
                    obj.hide_render = True

        # Hide annotations (HB.4 workaround)
        if self._cfg.hide_annotations:
            # We don't track these for restore — they should stay hidden.
            hide_text_annotations(bpy_module=bpy)

        logger.debug("Hid %d objects for render", len(self._restore))
        return self

    def __exit__(
        self,
        exc_type: type[BaseException] | None,
        exc_value: BaseException | None,
        traceback: Any,
    ) -> None:
        # Restore even on exception.
        import contextlib

        for obj, original in self._restore:
            with contextlib.suppress(AttributeError, ReferenceError):
                # object may have been deleted between hide and restore
                obj.hide_render = original
        logger.debug("Restored %d objects after render", len(self._restore))

    def _resolve_bpy(self) -> Any:
        if self._bpy is not None:
            return self._bpy
        import bpy  # pragma: no cover

        return bpy  # pragma: no cover
