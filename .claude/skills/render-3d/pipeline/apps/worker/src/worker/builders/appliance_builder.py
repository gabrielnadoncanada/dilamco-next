"""ApplianceBuilder — wall-relative or island appliance placement.

Reuses CabinetBuilder.place_straight()/place_island() with is_appliance=True
and the right z_offset/width defaults per appliance type.
"""

from __future__ import annotations

import logging
from typing import TYPE_CHECKING, Any

from worker.builders.cabinet_builder import CabinetBuilder
from worker.builders.constants import (
    APPLIANCE_DEFAULT_WIDTH,
    APPLIANCE_DEFAULT_Z_BOTTOM,
    APPLIANCE_TYPES,
)
from worker.errors import ApplianceBuildError

if TYPE_CHECKING:
    from collections.abc import Callable

    from kitchen_spec import Appliance

logger = logging.getLogger(__name__)


class ApplianceBuilder:
    """Places appliances using HB cabinet operator with is_appliance=True.

    HB switches the geonode class via appliance_type string; default widths
    and Z offsets come from worker.builders.constants.
    """

    def __init__(self, cabinet_builder: CabinetBuilder | None = None) -> None:
        self._cabinets = cabinet_builder or CabinetBuilder()

    def place(
        self,
        appliance: Appliance,
        walls: list[Any],
        *,
        bpy_module: Any = None,
        place_op: Callable[..., Any] | None = None,
    ) -> None:
        atype = appliance.type
        if atype not in APPLIANCE_TYPES:
            raise ApplianceBuildError(
                f"Unknown appliance type {atype!r} (expected one of {sorted(APPLIANCE_TYPES)})"
            )

        name = appliance.name or atype.replace("_", " ").title()
        width = appliance.width if appliance.width is not None else APPLIANCE_DEFAULT_WIDTH[atype]
        z_loc = (
            appliance.z_offset
            if appliance.z_offset is not None
            else APPLIANCE_DEFAULT_Z_BOTTOM[atype]
        )

        if appliance.wall_idx is not None:
            self._validate_wall_idx(appliance.wall_idx, walls)
            wall = walls[appliance.wall_idx]
            offset = appliance.offset if appliance.offset is not None else 0.0
            self._cabinets.place_straight(
                wall=wall,
                offset_along=float(offset),
                width=float(width),
                cabinet_name=name,
                cabinet_type="BASE",  # HB will override based on appliance class
                z_loc=float(z_loc),
                is_appliance=True,
                appliance_type=atype,
                bpy_module=bpy_module,
                place_op=place_op,
            )
        else:
            self._validate_island(appliance)
            assert appliance.x is not None and appliance.y is not None
            rot = appliance.rotation_deg if appliance.rotation_deg is not None else 0.0
            self._cabinets.place_island(
                cabinet_name=name,
                cabinet_type="BASE",
                width=float(width),
                x=float(appliance.x),
                y=float(appliance.y),
                rotation_deg=float(rot),
                z_loc=float(z_loc),
                is_appliance=True,
                appliance_type=atype,
                bpy_module=bpy_module,
                place_op=place_op,
            )

        logger.debug("Placed appliance %s [%s] (z=%.3f, w=%.3f)", name, atype, z_loc, width)

    @staticmethod
    def _validate_wall_idx(idx: int, walls: list[Any]) -> None:
        """LLM.2 mitigation."""
        if idx < 0 or idx >= len(walls):
            raise ApplianceBuildError(
                f"appliance.wall_idx={idx} out of range "
                f"(have {len(walls)} walls; valid 0..{len(walls) - 1})"
            )

    @staticmethod
    def _validate_island(app: Appliance) -> None:
        if app.x is None or app.y is None:
            raise ApplianceBuildError(
                f"island appliance {app.type!r} requires both x and y "
                f"(got x={app.x!r}, y={app.y!r})"
            )
