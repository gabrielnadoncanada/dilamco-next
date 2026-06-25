"""CabinetBuilder — place straight + corner cabinets and islands.

Methods:
- place_straight()  — wall-relative cabinet (BASE/UPPER/TALL)
- place_corner()    — corner cabinet at start/end of a wall
- place_island()    — standalone cabinet (no wall)

Wall-relative math (HB convention validated empirically):
- Cabinet origin = back-left-bottom corner
- Cabinet body = local +X (width), -Y (depth), +Z (height)
- "Front faces -Y" → cabinet rotates by wall_rot + 180° to face into the room
- Origin world = wall.origin + (offset + width) * wall_x + thickness * wall_y

Corner placement:
- corner_side="start": origin = wall.start, rotation aligns local +X with wall_y
- corner_side="end":   origin = wall.start + length*wall_x, rotation aligns local +X with -wall_x
"""

from __future__ import annotations

import logging
import math
from typing import TYPE_CHECKING, Any

from worker.builders.constants import (
    CORNER_BASE_TYPE,
    CORNER_NAME_BY_TYPE,
    CORNER_TYPES,
)
from worker.errors import CabinetBuildError
from worker.hb.helpers import get_wall_axes, get_wall_length, vec_add

if TYPE_CHECKING:
    from collections.abc import Callable

logger = logging.getLogger(__name__)

CABINET_STRAIGHT_TYPES = frozenset({"BASE", "UPPER", "TALL"})


class CabinetBuilder:
    """Places straight (non-corner) cabinets via the HB place_cabinet_script
    operator.

    All public methods accept `bpy_module` and `place_op` for testability. In
    production, both default to the live bpy.ops.hb_frameless.place_cabinet_script.
    """

    def place_straight(
        self,
        *,
        wall: Any,
        offset_along: float,
        width: float,
        cabinet_name: str,
        cabinet_type: str,
        z_loc: float = 0.0,
        is_appliance: bool = False,
        appliance_type: str = "",
        depth: float = 0.0,
        height: float = 0.0,
        bpy_module: Any = None,
        place_op: Callable[..., Any] | None = None,
    ) -> tuple[float, float, float]:
        """Place a wall-relative straight cabinet.

        Returns the cabinet's world XY position (z_loc) for assertions in tests.
        """
        if cabinet_type not in CABINET_STRAIGHT_TYPES and not is_appliance:
            # Appliances pass cabinet_type='BASE' but have is_appliance=True;
            # genuine cabinet types must be straight here.
            raise CabinetBuildError(
                f"place_straight rejects type={cabinet_type!r} "
                f"(expected one of {sorted(CABINET_STRAIGHT_TYPES)} or is_appliance=True)"
            )
        if width <= 0:
            raise CabinetBuildError(f"width must be positive (got {width})")
        if offset_along < 0:
            raise CabinetBuildError(f"offset_along must be ≥ 0 (got {offset_along})")

        place = self._resolve_place_op(bpy_module, place_op)

        axes = get_wall_axes(wall)
        # pos_world = origin + (offset + width) * x_axis + thickness * y_axis
        shifted_x = vec_add(axes.origin, axes.x_axis, scale=offset_along + width)
        pos = vec_add(shifted_x, axes.y_axis, scale=axes.thickness)

        theta_z = self._heading_z_from_axes(axes.x_axis)

        try:
            place(
                cabinet_name=cabinet_name,
                cabinet_type=cabinet_type,
                width=float(width),
                depth=float(depth),
                height=float(height),
                location_x=float(pos[0]),
                location_y=float(pos[1]),
                location_z=float(z_loc),
                rotation_z_deg=float(math.degrees(theta_z) + 180.0),
                quantity=1,
                is_appliance=bool(is_appliance),
                appliance_type=appliance_type,
            )
        except Exception as exc:
            raise CabinetBuildError(
                f"place_cabinet_script failed for {cabinet_name!r} on {wall.name}: {exc}"
            ) from exc

        logger.debug(
            "Placed %s [%s] on %s offset=%.3f w=%.3f at (%.2f,%.2f,%.2f)",
            cabinet_name,
            cabinet_type,
            wall.name,
            offset_along,
            width,
            pos[0],
            pos[1],
            z_loc,
        )
        return (pos[0], pos[1], z_loc)

    def place_island(
        self,
        *,
        cabinet_name: str,
        cabinet_type: str,
        width: float,
        x: float,
        y: float,
        rotation_deg: float = 0.0,
        z_loc: float = 0.0,
        is_appliance: bool = False,
        appliance_type: str = "",
        bpy_module: Any = None,
        place_op: Callable[..., Any] | None = None,
    ) -> None:
        """Place a standalone (no wall) cabinet — used for islands."""
        if width <= 0:
            raise CabinetBuildError(f"island width must be positive (got {width})")
        place = self._resolve_place_op(bpy_module, place_op)

        try:
            place(
                cabinet_name=cabinet_name,
                cabinet_type=cabinet_type,
                width=float(width),
                location_x=float(x),
                location_y=float(y),
                location_z=float(z_loc),
                rotation_z_deg=float(rotation_deg),
                quantity=1,
                is_appliance=bool(is_appliance),
                appliance_type=appliance_type,
            )
        except Exception as exc:
            raise CabinetBuildError(
                f"place_cabinet_script (island) failed for {cabinet_name!r}: {exc}"
            ) from exc

        logger.debug(
            "Placed island %s [%s] at (%.2f,%.2f,%.2f) rot=%.0f° w=%.3f",
            cabinet_name,
            cabinet_type,
            x,
            y,
            z_loc,
            rotation_deg,
            width,
        )

    def place_corner(
        self,
        *,
        wall: Any,
        corner_side: str,
        cabinet_type: str,
        name: str | None = None,
        bpy_module: Any = None,
        place_op: Callable[..., Any] | None = None,
    ) -> tuple[float, float, float]:
        """Place a corner cabinet at start/end of a wall.

        HB CornerCabinet body is placed with both backs flush against the two
        adjacent walls and front L pointing into the room. Width=0 tells HB
        to use its inside_corner_size scene prop (typically 36" / 0.914m,
        normalized via worker.hb.workarounds.ensure_corner_sizes).

        IMPORTANT: HB's `get_cabinet_class()` selects the cabinet class by
        substring-matching the `cabinet_name` ("Pie Cut Corner Base",
        "Diagonal Corner Tall", etc.). If we pass a custom user-provided name
        ("Corner pie_base", "island", ...), HB falls back to the regular
        BaseCabinet class and we end up with a plain box at the corner instead
        of an L-shaped pie/diagonal carcass. So `name` here is a user-facing
        label only — HB always receives the canonical name. The user's label
        is stored as a `CABINET_LABEL` custom prop on the resulting object
        for downstream symbol resolution.

        Returns the cabinet's world XY position.
        """
        if cabinet_type not in CORNER_TYPES:
            raise CabinetBuildError(
                f"place_corner rejects type={cabinet_type!r} "
                f"(expected one of {sorted(CORNER_TYPES)})"
            )
        if corner_side not in ("start", "end"):
            raise CabinetBuildError(f"corner_side must be 'start' or 'end' (got {corner_side!r})")

        place = self._resolve_place_op(bpy_module, place_op)
        base_type = CORNER_BASE_TYPE[cabinet_type]
        # HB requires the canonical name to dispatch to the right corner class.
        cabinet_name = CORNER_NAME_BY_TYPE[cabinet_type]
        user_label = name
        axes = get_wall_axes(wall)

        # Shift by wall thickness in BOTH perpendicular directions so the
        # cabinet's back-left corner sits at the wall *inside* faces (not
        # the outside corner of the room polygon). Without this offset, the
        # corner cabinet's front face ends up recessed by `thickness`
        # compared to adjacent straight cabinets, breaking visual alignment.
        thk = axes.thickness
        if corner_side == "start":
            # Origin = wall.start, shifted in along the wall + into the room
            base = vec_add(axes.origin, axes.x_axis, scale=thk)
            pos = vec_add(base, axes.y_axis, scale=thk)
            rot_deg = math.degrees(math.atan2(axes.y_axis[1], axes.y_axis[0]))
        else:  # "end"
            length = get_wall_length(wall)
            tip = vec_add(axes.origin, axes.x_axis, scale=length - thk)
            pos = vec_add(tip, axes.y_axis, scale=thk)
            rot_deg = math.degrees(math.atan2(-axes.x_axis[1], -axes.x_axis[0]))

        try:
            place(
                cabinet_name=cabinet_name,
                cabinet_type=base_type,
                width=0.0,  # 0 → HB uses inside_corner_size scene prop
                location_x=float(pos[0]),
                location_y=float(pos[1]),
                location_z=0.0,
                rotation_z_deg=float(rot_deg),
                quantity=1,
                is_appliance=False,
                appliance_type="",
            )
        except Exception as exc:
            raise CabinetBuildError(
                f"place_cabinet_script (corner) failed for {cabinet_name!r} "
                f"on {wall.name} side={corner_side}: {exc}"
            ) from exc

        logger.debug(
            "Placed corner %s (label=%r) [%s] on %s side=%s at (%.2f,%.2f) rot=%.1f°",
            cabinet_name,
            user_label,
            cabinet_type,
            wall.name,
            corner_side,
            pos[0],
            pos[1],
            rot_deg,
        )
        return (pos[0], pos[1], 0.0)

    @staticmethod
    def _resolve_place_op(
        bpy_module: Any, place_op: Callable[..., Any] | None
    ) -> Callable[..., Any]:
        if place_op is not None:
            return place_op
        if bpy_module is None:  # pragma: no cover - requires bpy
            import bpy

            bpy_module = bpy
        op: Callable[..., Any] = (
            bpy_module.ops.hb_frameless.place_cabinet_script
        )  # pragma: no cover
        return op  # pragma: no cover

    @staticmethod
    def _heading_z_from_axes(x_axis: tuple[float, float, float]) -> float:
        """Return the Z rotation angle (radians) corresponding to a wall x-axis."""
        return math.atan2(x_axis[1], x_axis[0])
