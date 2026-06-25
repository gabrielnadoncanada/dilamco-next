"""Home Builder addon lifecycle: enable, health check, default style.

Mitigations covered:
- FM-W-06 (HB plugin not enabled) — addon health check on startup
"""

from __future__ import annotations

import logging
from typing import TYPE_CHECKING, Any

from worker.errors import BlenderUnavailableError
from worker.hb.constants import ADDON_NAME

if TYPE_CHECKING:
    from collections.abc import Callable

logger = logging.getLogger(__name__)


def _import_addon_utils() -> Any:
    """Import bpy.addon_utils, raise BlenderUnavailableError if bpy missing."""
    try:
        import addon_utils
    except ImportError as exc:  # pragma: no cover - requires real Blender
        raise BlenderUnavailableError(
            "addon_utils unavailable; this code must run inside Blender"
        ) from exc
    return addon_utils


def is_addon_enabled(addon_utils: Any = None) -> bool:
    """Return True if the Home Builder addon is currently enabled."""
    utils = addon_utils or _import_addon_utils()
    _, loaded_state = utils.check(ADDON_NAME)
    return bool(loaded_state)


def enable_addon(
    addon_utils: Any = None,
    addon_enable_op: Callable[..., object] | None = None,
) -> None:
    """Enable the Home Builder addon if not already enabled.

    Args are injectable for testing without bpy.
    """
    utils = addon_utils or _import_addon_utils()
    if is_addon_enabled(utils):
        logger.debug("HB addon %s already enabled", ADDON_NAME)
        return

    if addon_enable_op is None:  # pragma: no cover - requires bpy
        import bpy

        addon_enable_op = bpy.ops.preferences.addon_enable

    addon_enable_op(module=ADDON_NAME)
    logger.info("HB addon %s enabled", ADDON_NAME)

    if not is_addon_enabled(utils):
        raise BlenderUnavailableError(
            f"Failed to enable HB addon {ADDON_NAME!r}; is the plugin vendored in addons_contrib?"
        )


def ensure_default_style(hb_project: Any = None) -> Any:
    """Trigger the load_post equivalent: ensure_main_scene + default style.

    HB's load_post handler does not auto-fire under --factory-startup, so we
    call it explicitly here. Returns the main scene.
    """
    if hb_project is None:  # pragma: no cover - requires bpy
        from bl_ext.blender_org.home_builder_5 import hb_project as _hp

        hb_project = _hp

    main_scene = hb_project.ensure_main_scene()
    main_scene.hb_frameless.ensure_default_style()
    logger.info("Default HB style ensured on scene %s", main_scene.name)
    return main_scene


def health_check(
    addon_utils: Any = None,
    hb_project: Any = None,
) -> dict[str, bool]:
    """Verify the HB stack is healthy. Used as container readiness probe.

    Returns a dict of check_name -> bool. Caller decides what to do on failure.
    """
    checks: dict[str, bool] = {
        "addon_importable": False,
        "addon_enabled": False,
        "default_style_present": False,
    }

    try:
        utils = addon_utils or _import_addon_utils()
        checks["addon_importable"] = True
    except BlenderUnavailableError:
        return checks

    checks["addon_enabled"] = is_addon_enabled(utils)
    if not checks["addon_enabled"]:
        return checks

    try:  # pragma: no cover - requires bpy
        if hb_project is None:
            from bl_ext.blender_org.home_builder_5 import hb_project as _hp

            hb_project = _hp
        main_scene = hb_project.ensure_main_scene()
        checks["default_style_present"] = bool(main_scene.hb_frameless.cabinet_styles)
    except Exception as exc:  # pragma: no cover
        logger.warning("Default style check failed: %s", exc)

    return checks
