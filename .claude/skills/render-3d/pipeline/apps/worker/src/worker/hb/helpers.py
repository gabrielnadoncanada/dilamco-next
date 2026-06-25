"""Pure helper functions for wall geometry.

These read parameters from HB walls' geonode modifiers. Pure logic, mockable.
"""

from __future__ import annotations

import math
from dataclasses import dataclass
from typing import Any

from worker.hb.constants import DEFAULT_WALL_THICKNESS_M


@dataclass(frozen=True)
class WallAxes:
    """Local-to-world axes for a wall.

    Attributes:
        origin: world position of the wall's start point (3D vector tuple).
        x_axis: unit vector along the wall (start → end direction).
        y_axis: unit vector from outside-face to inside-face (into the room).
        thickness: wall thickness in meters.
    """

    origin: tuple[float, float, float]
    x_axis: tuple[float, float, float]
    y_axis: tuple[float, float, float]
    thickness: float


def get_wall_thickness(wall: Any) -> float:
    """Read the Thickness parameter from a wall's geonode modifier.

    Falls back to DEFAULT_WALL_THICKNESS_M (0.1m) if no geonode is found.
    """
    for mod in getattr(wall, "modifiers", []):
        if getattr(mod, "type", None) != "NODES":
            continue
        node_group = getattr(mod, "node_group", None)
        if node_group is None:
            continue
        try:
            tree = node_group.interface.items_tree
        except AttributeError:
            continue
        if "Thickness" in tree:
            return float(mod[tree["Thickness"].identifier])
    return DEFAULT_WALL_THICKNESS_M


def get_wall_length(wall: Any) -> float:
    """Read the Length parameter from a wall's geonode modifier.

    Falls back to bounding-box X dimension if no geonode is found.
    """
    for mod in getattr(wall, "modifiers", []):
        if getattr(mod, "type", None) != "NODES":
            continue
        node_group = getattr(mod, "node_group", None)
        if node_group is None:
            continue
        try:
            tree = node_group.interface.items_tree
        except AttributeError:
            continue
        for key in ("Length", "Wall Length"):
            if key in tree:
                return float(mod[tree[key].identifier])

    # Fallback: bounding-box from mesh data.
    try:
        verts = wall.data.vertices
    except AttributeError:
        return 0.0
    if not verts:
        return 0.0
    return float(max(v.co.x for v in verts))


def get_wall_axes(wall: Any) -> WallAxes:
    """Compute world-space axes for a wall.

    The wall's rotation_euler.z gives the angle of the X-axis along the wall.
    Y-axis is the perpendicular direction pointing into the room.
    """
    theta = float(wall.rotation_euler.z)
    cos_t, sin_t = math.cos(theta), math.sin(theta)
    x_axis = (cos_t, sin_t, 0.0)
    y_axis = (-sin_t, cos_t, 0.0)
    location = wall.location
    origin = (float(location.x), float(location.y), float(location.z))
    return WallAxes(
        origin=origin,
        x_axis=x_axis,
        y_axis=y_axis,
        thickness=get_wall_thickness(wall),
    )


def vec_add(
    a: tuple[float, float, float],
    b: tuple[float, float, float],
    scale: float = 1.0,
) -> tuple[float, float, float]:
    """Return a + scale*b for 3D tuples. Helpful for placement calculations."""
    return (a[0] + scale * b[0], a[1] + scale * b[1], a[2] + scale * b[2])
