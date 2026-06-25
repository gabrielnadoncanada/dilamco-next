"""Apply per-cabinet front layouts (1-door vs 2-doors, drawer stacks, etc.)
by calling HB's `change_bay_opening` operator on each cabinet's bay.

The compiler annotates each Cabinet with `front_layout` (from width when not
specified explicitly): `one_door`, `two_doors`, `single_drawer`, etc. HB's
internal enum uses different names (`RIGHT_DOOR`, `DOUBLE_DOORS`, etc.), so
this module translates and dispatches.
"""

from __future__ import annotations

import logging
from typing import TYPE_CHECKING, Any

if TYPE_CHECKING:
    from kitchen_spec import KitchenSpec

logger = logging.getLogger(__name__)


# Maps our `front_layout` (kitchen-spec) to HB's `opening_type` enum.
# `RIGHT_DOOR` is a single-door swinging from the right hinge — the safe
# default for `one_door` (HB also has `LEFT_DOOR`; either works visually,
# the user can flip via `flip_door_hand` later).
FRONT_LAYOUT_TO_HB: dict[str, str] = {
    "one_door": "RIGHT_DOOR",
    "two_doors": "DOUBLE_DOORS",
    "single_drawer": "SINGLE_DRAWER",
    "drawer_stack_2": "2_DRAWER_STACK",
    "drawer_stack_3": "3_DRAWER_STACK",
    "drawer_stack_4": "4_DRAWER_STACK",
    "door_below_drawer": "DOOR_DRAWER",
    "doors_below_drawer": "1_DRAWER_2_DOOR",
    "glass_door": "RIGHT_DOOR",  # glass effect comes from door style, not bay type
    "glass_doors": "DOUBLE_DOORS",
    # "open_shelf" intentionally omitted — needs a separate HB op
    # "false_front_*" intentionally omitted — applied via different operator
}


def apply_cabinet_front_layouts(
    spec: KitchenSpec,
    bpy_module: Any = None,
) -> dict[str, int]:
    """Apply `front_layout` from spec.cabinets onto the corresponding HB bays.

    Returns a summary dict {layout_name: count}. Cabinets without a
    `front_layout` are left alone (default HB layout = double doors).
    """
    if bpy_module is None:  # pragma: no cover
        import bpy

        bpy_module = bpy

    summary: dict[str, int] = {}

    # Build a map from cabinet name → list of Cabinet objects in the scene that
    # match. The worker places each Cabinet via HB's place_cabinet_script with
    # `cabinet_name=cab.name`; HB then adds a `.NNN` suffix when names collide.
    cab_cages = [o for o in bpy_module.data.objects if o.get("IS_FRAMELESS_CABINET_CAGE")]

    # Walk through spec.cabinets in order. We match HB cage → spec by the same
    # order (HB creates them in the order we call place_cabinet_script).
    # `placed` index lets us skip cages already consumed.
    placed_used: set[str] = set()

    for cab in spec.cabinets:
        layout = cab.front_layout
        if not layout:
            continue
        op_type = FRONT_LAYOUT_TO_HB.get(layout)
        if op_type is None:
            logger.warning(
                "front_layout=%r has no HB mapping — leaving cabinet %r as default",
                layout, cab.name,
            )
            continue

        # Find a not-yet-consumed cage with the same base name.
        target_cage = None
        for cage in cab_cages:
            if cage.name in placed_used:
                continue
            if _cage_matches_spec_name(cage.name, cab.name):
                target_cage = cage
                placed_used.add(cage.name)
                break

        if target_cage is None:
            logger.debug(
                "front_layout=%r requested for %r but no matching cage in scene",
                layout, cab.name,
            )
            continue

        # Find the bay child(ren). For a straight cabinet there's typically one
        # bay. We change opening_type on each.
        bays = [c for c in target_cage.children_recursive if c.get("IS_FRAMELESS_BAY_CAGE")]
        if not bays:
            logger.debug("Cabinet %r has no bay; skipping front_layout", cab.name)
            continue

        for bay in bays:
            _select_only(bay, bpy_module)
            try:
                bpy_module.ops.hb_frameless.change_bay_opening(opening_type=op_type)
                summary[layout] = summary.get(layout, 0) + 1
            except RuntimeError as exc:
                # Some opening types fail on the wrong cabinet type (e.g. 4_DRAWER
                # on TALL). Skip silently — validator already flags incompatible
                # combos at compile time.
                logger.warning(
                    "change_bay_opening(%s) failed on %s: %s",
                    op_type, target_cage.name, exc,
                )

    if summary:
        logger.info(
            "Front layouts applied: %s",
            ", ".join(f"{k}×{v}" for k, v in sorted(summary.items())),
        )
    return summary


def _cage_matches_spec_name(cage_name: str, spec_name: str | None) -> bool:
    """HB rewrites our `cabinet_name` slightly (capitalisation, suffix .NNN
    when duplicates). Accept any cage whose name starts with our spec name."""
    if not spec_name:
        return cage_name == "Cabinet" or cage_name.startswith("Cabinet.")
    # Strip Blender's auto .NNN suffix
    base = cage_name.rsplit(".", 1)[0] if cage_name.count(".") and cage_name.rsplit(".", 1)[1].isdigit() else cage_name
    return base == spec_name


def _select_only(obj: Any, bpy_module: Any) -> None:
    """Deselect everything and select `obj` (the active object too)."""
    for o in bpy_module.data.objects:
        o.select_set(False)
    obj.select_set(True)
    bpy_module.context.view_layer.objects.active = obj
