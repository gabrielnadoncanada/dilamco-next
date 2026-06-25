"""StyleBuilder — apply cabinet_style + door_style + pull_finish via HB ops.

Reads a Pydantic Style and applies HB's built-in style attributes (wood_species,
paint_color, door_type, etc.) to all frameless cabinets in the scene.
"""

from __future__ import annotations

import logging
from typing import TYPE_CHECKING, Any

from worker.errors import BuildError
from worker.hb.scene import get_main_scene

if TYPE_CHECKING:
    from collections.abc import Callable

    from kitchen_spec import Style

logger = logging.getLogger(__name__)


# Style enum keys passed through to HB cabinet_style.
CABINET_STYLE_ENUM_KEYS = (
    "wood_species",
    "paint_color",
    "interior_material_type",
    "door_overlay_type",
    "edge_banding",
)


class StyleBuilder:
    """Applies a Style to all cabinets in the scene."""

    def apply(
        self,
        style: Style,
        bpy_module: Any = None,
        *,
        assign_cabinet_style_op: Callable[..., Any] | None = None,
        update_materials_op: Callable[..., Any] | None = None,
        update_fronts_op: Callable[..., Any] | None = None,
        update_pull_finish_op: Callable[..., Any] | None = None,
    ) -> dict[str, Any]:
        """Apply the style and return summary dict.

        Returns:
            {"cabinets": int, "fronts": int, "cabinet_style": str, "door_style": str, "pull_finish": str | None}
        """
        if bpy_module is None:  # pragma: no cover
            import bpy

            bpy_module = bpy

        main_scene = get_main_scene(bpy_module)
        if main_scene is None:
            raise BuildError("Cannot apply style: no main HB scene")

        ops = self._resolve_ops(
            bpy_module,
            assign_cabinet_style_op,
            update_materials_op,
            update_fronts_op,
            update_pull_finish_op,
        )

        cabinets = [obj for obj in bpy_module.data.objects if obj.get("IS_FRAMELESS_CABINET_CAGE")]
        if not cabinets:
            logger.warning("No cabinets found — style is a no-op")
            return {
                "cabinets": 0,
                "fronts": 0,
                "cabinet_style": None,
                "door_style": None,
                "pull_finish": None,
            }

        cs_name = self._configure_cabinet_style(main_scene, style)
        for cab in cabinets:
            ops["assign_cabinet_style"](cabinet_name=cab.name)
        ops["update_materials"]()

        ds_name, n_fronts = self._configure_door_style(main_scene, style, cabinets)
        ops["update_fronts"]()

        if style.pull_finish:
            main_scene.hb_frameless.pull_finish = style.pull_finish
            ops["update_pull_finish"]()

        logger.info(
            "Style applied: cabinet=%s door=%s pull=%s on %d cabinets, %d fronts",
            cs_name,
            ds_name,
            style.pull_finish,
            len(cabinets),
            n_fronts,
        )
        return {
            "cabinets": len(cabinets),
            "fronts": n_fronts,
            "cabinet_style": cs_name,
            "door_style": ds_name,
            "pull_finish": style.pull_finish,
        }

    @staticmethod
    def _configure_cabinet_style(main_scene: Any, style: Style) -> str:
        """Configure HB cabinet_style enums. Returns the resolved style name.

        Falls back to first available style if requested name not found.
        """
        cabinet_styles = main_scene.hb_frameless.cabinet_styles
        cs_idx: int | None = None
        if style.cabinet_style:
            cs_idx = next(
                (i for i, cs in enumerate(cabinet_styles) if cs.name == style.cabinet_style),
                None,
            )

        if cs_idx is None:
            if not cabinet_styles:
                raise BuildError(
                    "No cabinet_styles available; ensure_default_style() must run first"
                )
            cs_idx = 0
            logger.warning(
                "Cabinet style %r not found; using fallback %r",
                style.cabinet_style,
                cabinet_styles[0].name,
            )

        cs = cabinet_styles[cs_idx]
        for key in CABINET_STYLE_ENUM_KEYS:
            value = getattr(style, key, None)
            if value is None:
                continue
            try:
                setattr(cs, key, value)
            except (AttributeError, TypeError, ValueError) as exc:
                logger.warning("Cabinet style.%s=%r refused: %s", key, value, exc)

        main_scene.hb_frameless.active_cabinet_style_index = cs_idx
        return str(cs.name)

    @staticmethod
    def _configure_door_style(
        main_scene: Any, style: Style, cabinets: list[Any]
    ) -> tuple[str, int]:
        """Configure HB door_style + door_type + rails. Returns (style_name, n_fronts)."""
        door_styles = main_scene.hb_frameless.door_styles
        ds_idx: int | None = None
        if style.door_style:
            ds_idx = next(
                (i for i, ds in enumerate(door_styles) if ds.name == style.door_style),
                None,
            )

        if ds_idx is None:
            if not door_styles:
                main_scene.hb_frameless.ensure_default_door_style()
                door_styles = main_scene.hb_frameless.door_styles
            ds_idx = 0
            logger.warning(
                "Door style %r not found; using fallback %r",
                style.door_style,
                door_styles[0].name,
            )

        ds = door_styles[ds_idx]
        if style.door_type:
            try:
                ds.door_type = style.door_type
            except (AttributeError, TypeError, ValueError) as exc:
                logger.warning("door_type=%r refused: %s", style.door_type, exc)

        rw = style.shaker_rail_width
        if rw and rw > 0:
            ds.rail_width = rw
            ds.stile_width = rw
            if hasattr(ds, "mid_rail_width"):
                ds.mid_rail_width = rw

        main_scene.hb_frameless.active_door_style_index = ds_idx
        n_fronts = 0
        for cab in cabinets:
            for child in cab.children_recursive:
                if child.get("IS_DOOR_FRONT") or child.get("IS_DRAWER_FRONT"):
                    child["DOOR_STYLE_INDEX"] = ds_idx
                    n_fronts += 1

        return str(ds.name), n_fronts

    @staticmethod
    def _resolve_ops(
        bpy_module: Any,
        assign_cabinet_style_op: Callable[..., Any] | None,
        update_materials_op: Callable[..., Any] | None,
        update_fronts_op: Callable[..., Any] | None,
        update_pull_finish_op: Callable[..., Any] | None,
    ) -> dict[str, Callable[..., Any]]:
        all_provided = all(
            op is not None
            for op in (
                assign_cabinet_style_op,
                update_materials_op,
                update_fronts_op,
                update_pull_finish_op,
            )
        )
        if not all_provided:  # pragma: no cover - production path
            ns = bpy_module.ops.hb_frameless
            assign_cabinet_style_op = assign_cabinet_style_op or ns.assign_cabinet_style
            update_materials_op = update_materials_op or ns.update_cabinet_materials
            update_fronts_op = update_fronts_op or ns.update_fronts_from_style
            update_pull_finish_op = update_pull_finish_op or ns.update_pull_finish
        assert assign_cabinet_style_op is not None
        assert update_materials_op is not None
        assert update_fronts_op is not None
        assert update_pull_finish_op is not None
        return {
            "assign_cabinet_style": assign_cabinet_style_op,
            "update_materials": update_materials_op,
            "update_fronts": update_fronts_op,
            "update_pull_finish": update_pull_finish_op,
        }
