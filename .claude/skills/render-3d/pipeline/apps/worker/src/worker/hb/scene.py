"""Scene-level operations: clear HB objects, find walls, get main scene.

Pure logic that operates on `bpy.data` collections. We accept the bpy module
as parameter to enable testing without Blender.
"""

from __future__ import annotations

import logging
from typing import Any

from worker.hb.constants import HB_BLUEPRINT_KEYS

logger = logging.getLogger(__name__)


def _resolve_bpy(bpy_module: Any) -> Any:
    if bpy_module is not None:
        return bpy_module
    import bpy  # pragma: no cover

    return bpy  # pragma: no cover


def get_main_scene(bpy_module: Any = None) -> Any:
    """Return the HB main scene (tagged IS_MAIN_SCENE), fallback to first scene."""
    bpy = _resolve_bpy(bpy_module)
    for scene in bpy.data.scenes:
        if scene.get("IS_MAIN_SCENE"):
            return scene
    if bpy.data.scenes:
        return bpy.data.scenes[0]
    return None


def get_walls_in_creation_order(bpy_module: Any = None) -> list[Any]:
    """Return all HB walls sorted by name (Wall, Wall.001, Wall.002...).

    HB names walls sequentially so this matches the user-intended order.
    Sorted by (name length, name) so 'Wall' comes before 'Wall.001'.
    """
    bpy = _resolve_bpy(bpy_module)
    walls = [obj for obj in bpy.data.objects if obj.get("IS_WALL_BP")]
    walls.sort(key=lambda w: (len(w.name), w.name))
    return walls


def find_hb_objects(bpy_module: Any = None) -> list[Any]:
    """Return all objects tagged with any HB blueprint key."""
    bpy = _resolve_bpy(bpy_module)
    return [obj for obj in bpy.data.objects if any(obj.get(key) for key in HB_BLUEPRINT_KEYS)]


def clear_hb_scene(bpy_module: Any = None) -> int:
    """Delete all HB blueprint objects and their descendants.

    Returns the number of objects deleted. Used between renders to ensure a
    clean slate (no leftover walls from previous spec).
    """
    bpy = _resolve_bpy(bpy_module)
    bp_objs = find_hb_objects(bpy)
    bp_names = {obj.name for obj in bp_objs}

    to_delete: set[str] = set(bp_names)
    for blueprint in bp_objs:
        for child in blueprint.children_recursive:
            to_delete.add(child.name)

    # Also pick up orphan Panel parts (corner fillers). HB's Panel class
    # creates a root-level object tagged PART_TYPE=PANEL that is NOT a
    # cabinet cage and NOT a child of any blueprint, so it survives the
    # blueprint sweep and accumulates across rebuilds.
    for obj in bpy.data.objects:
        if obj.name in to_delete:
            continue
        if obj.get("PART_TYPE") == "PANEL" and obj.parent is None:
            to_delete.add(obj.name)
            for child in obj.children_recursive:
                to_delete.add(child.name)

    deleted = 0
    for name in to_delete:
        obj = bpy.data.objects.get(name)
        if obj is not None:
            bpy.data.objects.remove(obj, do_unlink=True)
            deleted += 1

    logger.info("Cleared %d HB objects", deleted)
    return deleted
