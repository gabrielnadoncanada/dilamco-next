"""Workarounds for known Home Builder plugin bugs.

References:
- HB.1 (DiagonalCornerUpper broken) — handled at spec level: use CORNER_UPPER_PIE
- HB.2 (Upper inside corner size mismatch) — ensure_corner_sizes()
- HB.3 (Appliances invisible without apply_modifier) — apply_modifiers_for_appliances()
- HB.4 (GeoNodeText annotations leak) — hide_text_annotations() in renderer
"""

from __future__ import annotations

import logging
from typing import Any

from worker.hb.constants import DEFAULT_UPPER_CORNER_SIZE_M
from worker.hb.scene import get_main_scene

logger = logging.getLogger(__name__)


def ensure_corner_sizes(
    target: float = DEFAULT_UPPER_CORNER_SIZE_M,
    bpy_module: Any = None,
) -> bool:
    """Workaround HB.2: align upper_inside_corner_size with base default.

    HB defaults : 24" upper / 36" base, which leaves an empty wedge between
    a corner upper and the corner base below it. Force them equal.

    Also forces HB's base/upper/tall cabinet_depth to match the validator's
    NKBA-standard values (TYPE_DEPTH in kitchen-validator constants).
    Without this, HB Frameless places base cabinets at 23.25" = 0.591m while
    the validator computes AABBs at 24" = 0.610m → 19mm drift causes
    false G3_COLLISION_3D violations on adjacent items (audit fix #20).

    Returns True on success, False if main scene unavailable or attribute set fails.
    """
    main = get_main_scene(bpy_module)
    if main is None:
        logger.warning("Cannot ensure corner sizes: no main scene found")
        return False
    try:
        main.hb_frameless.upper_inside_corner_size = target
        # Audit fix #20 — align cabinet_depth with NKBA validator constants.
        # 24" base, 13" upper, 25.5" tall — the values used in TYPE_DEPTH.
        main.hb_frameless.base_cabinet_depth = 0.610
        main.hb_frameless.upper_cabinet_depth = 0.330
        main.hb_frameless.tall_cabinet_depth = 0.610
        return True
    except (AttributeError, RuntimeError) as exc:
        logger.warning("Failed to align HB defaults: %s", exc)
        return False


def apply_modifiers_for_appliances(
    bpy_module: Any = None,
    apply_modifier_op: Any = None,
) -> int:
    """Workaround HB.3: bake geonode modifiers on appliance objects.

    HB Appliance class inherits GeoNodeCage which generates a runtime cube
    that does NOT expose `material_slots[0]` materials at render time. Baking
    the modifier converts the geonode output to raw mesh, which then renders
    correctly with the slot's material.

    Returns the number of appliances processed.
    """
    if bpy_module is None:  # pragma: no cover - requires bpy
        import bpy

        bpy_module = bpy
    if apply_modifier_op is None:  # pragma: no cover - requires bpy
        apply_modifier_op = bpy_module.ops.object.modifier_apply

    bpy = bpy_module
    appliances = [obj for obj in bpy.data.objects if obj.get("IS_APPLIANCE")]
    processed = 0
    for app in appliances:
        # Each appliance object has a geonode modifier we want to apply.
        for mod in list(getattr(app, "modifiers", [])):
            if getattr(mod, "type", None) != "NODES":
                continue
            try:
                # Set active object so modifier_apply knows the target.
                bpy.context.view_layer.objects.active = app
                apply_modifier_op(modifier=mod.name)
                processed += 1
            except Exception as exc:  # pragma: no cover - bpy runtime error
                logger.warning("Failed to apply modifier %s on %s: %s", mod.name, app.name, exc)
    logger.info("Applied modifiers on %d appliance objects", processed)
    return processed


def hide_text_annotations(bpy_module: Any = None) -> int:
    """Workaround HB.4: hide HB GeoNodeText annotations from renders.

    HB creates dimension/text annotation objects that render as dark glyphs
    overlay. They have IS_2D_ANNOTATION custom prop. Hide them for camera.

    Returns the number hidden.
    """
    if bpy_module is None:  # pragma: no cover - requires bpy
        import bpy

        bpy_module = bpy

    bpy = bpy_module
    annotations = [
        obj for obj in bpy.data.objects if obj.get("IS_2D_ANNOTATION") or obj.get("IS_DETAIL_LINE")
    ]
    for obj in annotations:
        obj.hide_render = True
    logger.debug("Hid %d HB text annotations from render", len(annotations))
    return len(annotations)
