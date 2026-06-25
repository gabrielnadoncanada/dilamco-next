"""Cabinet and appliance constants — defaults for HB placement.

Values in meters (HB conventions), validated against actual HB renders.
"""

from __future__ import annotations

# Cabinet straight defaults (sans corner, sans appliance) — meters
CABINET_DEFAULT_DEPTH: dict[str, float] = {
    "BASE": 0.610,
    "UPPER": 0.330,
    "TALL": 0.610,
}
CABINET_DEFAULT_HEIGHT: dict[str, float] = {
    "BASE": 0.914,
    "UPPER": 0.762,
    "TALL": 2.134,
}
CABINET_DEFAULT_Z_BOTTOM: dict[str, float] = {
    "BASE": 0.000,
    "UPPER": 1.372,
    "TALL": 0.000,
}

# Map corner cabinet type → underlying base type (for HB placement script).
CORNER_BASE_TYPE: dict[str, str] = {
    "CORNER_BASE_DIAGONAL": "BASE",
    "CORNER_BASE_PIE": "BASE",
    "CORNER_TALL_DIAGONAL": "TALL",
    "CORNER_TALL_PIE": "TALL",
    "CORNER_UPPER_DIAGONAL": "UPPER",
    "CORNER_UPPER_PIE": "UPPER",
}

# Cabinet name string passed to place_cabinet_script — HB uses substring
# matching ("Diagonal Corner", "Pie Cut Corner") in get_cabinet_class().
CORNER_NAME_BY_TYPE: dict[str, str] = {
    "CORNER_BASE_DIAGONAL": "Diagonal Corner Base",
    "CORNER_BASE_PIE": "Pie Cut Corner Base",
    "CORNER_TALL_DIAGONAL": "Diagonal Corner Tall",
    "CORNER_TALL_PIE": "Pie Cut Corner Tall",
    "CORNER_UPPER_DIAGONAL": "Diagonal Corner Upper",
    "CORNER_UPPER_PIE": "Pie Cut Corner Upper",
}

CORNER_TYPES: frozenset[str] = frozenset(CORNER_BASE_TYPE.keys())

# Appliance defaults — meters
APPLIANCE_DEFAULT_WIDTH: dict[str, float] = {
    "RANGE": 0.762,
    "COOKTOP": 0.762,
    "WALL_OVEN": 0.762,
    "DISHWASHER": 0.610,
    "REFRIGERATOR": 0.914,
    "MICROWAVE": 0.610,
    "HOOD": 0.762,
    "SINK": 0.838,
    "WASHING_MACHINE": 0.686,
    "DRYER": 0.686,
}

APPLIANCE_DEFAULT_Z_BOTTOM: dict[str, float] = {
    "RANGE": 0.000,
    "COOKTOP": 0.914,
    "WALL_OVEN": 0.737,
    "DISHWASHER": 0.000,
    "REFRIGERATOR": 0.000,
    "MICROWAVE": 1.372,
    "HOOD": 1.372,
    "SINK": 0.914,
    "WASHING_MACHINE": 0.000,
    "DRYER": 0.000,
}

APPLIANCE_TYPES: frozenset[str] = frozenset(APPLIANCE_DEFAULT_WIDTH.keys())
