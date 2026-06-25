"""Constants used across the HB integration layer."""

from __future__ import annotations

ADDON_NAME = "bl_ext.blender_org.home_builder_5"

# Custom properties HB attaches to its blueprint objects. Used for object
# discovery (e.g. clear_hb_scene, find walls/cabinets).
HB_BLUEPRINT_KEYS: tuple[str, ...] = (
    "IS_WALL_BP",
    "IS_ENTRY_DOOR_BP",
    "IS_WINDOW_BP",
    "IS_FRAMELESS_CABINET_CAGE",
    "IS_FLOOR_BP",
    "IS_CEILING_BP",
    "IS_APPLIANCE",
    "IS_COUNTERTOP",
    "IS_CUTTING_OBJ",
)

# Default fallback values for missing geonode parameters.
DEFAULT_WALL_THICKNESS_M = 0.1

# Workaround HB.2 — align upper_inside_corner_size with base default
# to avoid empty wedge between corner upper and corner base.
DEFAULT_UPPER_CORNER_SIZE_M = 0.914  # 36 inches

# Render watchdog defaults (FM-W-02 mitigation).
WATCHDOG_SOFT_KILL_SECONDS = 60.0
WATCHDOG_HARD_KILL_SECONDS = 120.0
