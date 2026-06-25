"""CountertopBuilder — generate countertops and apply sink/cooktop cutouts.

HB has native add_countertops + countertop_boolean_cut_script (patched). This
module orchestrates them per spec.
"""

from __future__ import annotations

import logging
from typing import TYPE_CHECKING, Any

from worker.errors import BuildError

if TYPE_CHECKING:
    from collections.abc import Callable

logger = logging.getLogger(__name__)


SINK_CUTTING_TYPES = frozenset({"SINK", "COOKTOP"})


class CountertopBuilder:
    """Generates countertops on selected base cabinets, then cuts holes for
    sink/cooktop appliances using nearest-XY assignment.
    """

    def add_countertops(
        self,
        bpy_module: Any = None,
        add_countertops_op: Callable[..., Any] | None = None,
        select_op: Callable[..., Any] | None = None,
    ) -> None:
        """Generate countertops on all base cabinets via HB native operator.

        HB's add_countertops works on selected BASE cabinets only.
        """
        if add_countertops_op is None or select_op is None:  # pragma: no cover
            if bpy_module is None:
                import bpy

                bpy_module = bpy
            if add_countertops_op is None:
                add_countertops_op = bpy_module.ops.hb_frameless.add_countertops
            if select_op is None:
                select_op = bpy_module.ops.object.select_all

        try:
            select_op(action="DESELECT")
            # Find base cabinets and select them
            self._select_base_cabinets(bpy_module)
            add_countertops_op()
        except Exception as exc:
            raise BuildError(f"add_countertops failed: {exc}") from exc

        logger.info("Countertops added")

    def apply_sink_cutouts(
        self,
        bpy_module: Any = None,
        cut_op: Callable[..., Any] | None = None,
    ) -> int:
        """For each SINK/COOKTOP appliance, find nearest countertop in XY and
        apply boolean cut. Returns number of cuts applied.
        """
        if cut_op is None:  # pragma: no cover
            if bpy_module is None:
                import bpy

                bpy_module = bpy
            cut_op = bpy_module.ops.hb_frameless.countertop_boolean_cut_script

        if bpy_module is None:  # pragma: no cover
            import bpy

            bpy_module = bpy

        countertops = [obj for obj in bpy_module.data.objects if obj.get("IS_COUNTERTOP")]
        if not countertops:
            logger.warning("No countertops found, skipping sink cutouts")
            return 0

        cutters = [
            obj
            for obj in bpy_module.data.objects
            if obj.get("IS_APPLIANCE")
            and obj.get("APPLIANCE_TYPE") in SINK_CUTTING_TYPES
            and not obj.get("IS_CUTTING_OBJ")
        ]
        if not cutters:
            return 0

        n_cuts = 0
        for cutter in cutters:
            cx, cy = float(cutter.location.x), float(cutter.location.y)
            nearest = min(
                countertops,
                key=lambda ct: (float(ct.location.x) - cx) ** 2 + (float(ct.location.y) - cy) ** 2,
            )
            try:
                cut_op(countertop_name=nearest.name, cutter_name=cutter.name)
                n_cuts += 1
                logger.debug(
                    "Cut %s ← %s (%s)",
                    nearest.name,
                    cutter.name,
                    cutter.get("APPLIANCE_TYPE"),
                )
            except Exception as exc:
                logger.warning("countertop_boolean_cut_script failed for %s: %s", cutter.name, exc)
        return n_cuts

    @staticmethod
    def _select_base_cabinets(bpy_module: Any) -> int:
        """Select all BASE cabinet cages so add_countertops can find them.

        Returns count of selected base cabinets.
        """
        count = 0
        for obj in bpy_module.data.objects:
            if not obj.get("IS_FRAMELESS_CABINET_CAGE"):
                continue
            # HB stores type string as custom prop on the cage.
            cab_type = obj.get("cabinet_type") or ""
            if cab_type == "BASE":
                obj.select_set(True)
                count += 1
        logger.debug("Selected %d base cabinets for countertop generation", count)
        return count
