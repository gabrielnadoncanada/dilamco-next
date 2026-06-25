"""Material assignment — floor, walls, countertops, appliances.

We use simple Principled BSDF materials. HB plugin already creates cabinet
materials via cabinet_style + paint_color. This module covers the rest of
the scene.
"""

from __future__ import annotations

import logging
from typing import TYPE_CHECKING, Any

if TYPE_CHECKING:
    from collections.abc import Iterable

    from kitchen_spec import RenderConfig

logger = logging.getLogger(__name__)


Color4 = tuple[float, float, float, float]


def make_principled_material(
    name: str,
    *,
    color: Color4,
    roughness: float = 0.5,
    specular: float = 0.5,
    bpy_module: Any = None,
) -> Any:
    """Create or get a Principled BSDF material with the given parameters.

    Returns the bpy.types.Material. Idempotent: re-creating with same name
    overwrites the existing material's parameters.
    """
    if bpy_module is None:  # pragma: no cover
        import bpy

        bpy_module = bpy

    mat = bpy_module.data.materials.get(name)
    if mat is None:
        mat = bpy_module.data.materials.new(name=name)
    mat.use_nodes = True

    # Wipe existing nodes and rebuild a minimal graph.
    nodes = mat.node_tree.nodes
    links = mat.node_tree.links
    for node in list(nodes):
        nodes.remove(node)

    output = nodes.new(type="ShaderNodeOutputMaterial")
    bsdf = nodes.new(type="ShaderNodeBsdfPrincipled")
    bsdf.inputs["Base Color"].default_value = color
    bsdf.inputs["Roughness"].default_value = roughness
    if "Specular IOR Level" in bsdf.inputs:
        bsdf.inputs["Specular IOR Level"].default_value = specular
    elif "Specular" in bsdf.inputs:  # older Blender API
        bsdf.inputs["Specular"].default_value = specular
    links.new(bsdf.outputs["BSDF"], output.inputs["Surface"])

    logger.debug("Created material %s color=%s rough=%.2f", name, color, roughness)
    return mat


def assign_material(obj: Any, mat: Any) -> None:
    """Assign a material to obj, replacing slot 0 or creating it."""
    if obj.data is None:
        return
    if obj.data.materials:
        obj.data.materials[0] = mat
    else:
        obj.data.materials.append(mat)


def apply_floor_material(
    cfg: RenderConfig,
    bpy_module: Any = None,
    objects: Iterable[Any] | None = None,
) -> int:
    """Assign floor material to all IS_FLOOR_BP objects."""
    if bpy_module is None:  # pragma: no cover
        import bpy

        bpy_module = bpy

    mat = make_principled_material(
        "Dilamco_Floor",
        color=cfg.floor_color,
        roughness=cfg.floor_roughness,
        bpy_module=bpy_module,
    )
    targets = list(objects) if objects is not None else list(bpy_module.data.objects)
    count = 0
    for obj in targets:
        if obj.get("IS_FLOOR_BP"):
            assign_material(obj, mat)
            count += 1
    logger.info("Applied floor material to %d objects", count)
    return count


def apply_wall_material(
    cfg: RenderConfig,
    bpy_module: Any = None,
    objects: Iterable[Any] | None = None,
) -> int:
    """Assign wall material to all IS_WALL_BP objects."""
    if bpy_module is None:  # pragma: no cover
        import bpy

        bpy_module = bpy

    mat = make_principled_material(
        "Dilamco_Wall",
        color=cfg.wall_color,
        roughness=cfg.wall_roughness,
        bpy_module=bpy_module,
    )
    targets = list(objects) if objects is not None else list(bpy_module.data.objects)
    count = 0
    for obj in targets:
        if obj.get("IS_WALL_BP"):
            assign_material(obj, mat)
            count += 1
    logger.info("Applied wall material to %d objects", count)
    return count


def apply_countertop_material(
    cfg: RenderConfig,
    bpy_module: Any = None,
    objects: Iterable[Any] | None = None,
) -> int:
    """Assign countertop material to all IS_COUNTERTOP objects."""
    if bpy_module is None:  # pragma: no cover
        import bpy

        bpy_module = bpy

    mat = make_principled_material(
        "Dilamco_Countertop",
        color=cfg.counter_color,
        roughness=cfg.counter_roughness,
        specular=cfg.counter_specular,
        bpy_module=bpy_module,
    )
    targets = list(objects) if objects is not None else list(bpy_module.data.objects)
    count = 0
    for obj in targets:
        if obj.get("IS_COUNTERTOP"):
            assign_material(obj, mat)
            count += 1
    logger.info("Applied countertop material to %d objects", count)
    return count


def apply_appliance_material(
    cfg: RenderConfig,
    bpy_module: Any = None,
    objects: Iterable[Any] | None = None,
) -> int:
    """Assign generic appliance (anthracite) material to all IS_APPLIANCE objects.

    Note: HB ships no real appliance meshes (just GeoNodeCage cubes). This
    sets a flat anthracite color so they at least look intentional. For
    photorealistic appliances we'd need to import branded models (Phase 8+).
    """
    if bpy_module is None:  # pragma: no cover
        import bpy

        bpy_module = bpy

    mat = make_principled_material(
        "Dilamco_Appliance",
        color=cfg.appliance_color,
        roughness=cfg.appliance_roughness,
        bpy_module=bpy_module,
    )
    targets = list(objects) if objects is not None else list(bpy_module.data.objects)
    count = 0
    for obj in targets:
        if obj.get("IS_APPLIANCE"):
            assign_material(obj, mat)
            count += 1
    logger.info("Applied appliance material to %d objects", count)
    return count


def apply_all_scene_materials(
    cfg: RenderConfig,
    bpy_module: Any = None,
) -> dict[str, int]:
    """Apply floor, wall, countertop, appliance materials in one shot.

    Returns counts per category.
    """
    return {
        "floor": apply_floor_material(cfg, bpy_module=bpy_module),
        "wall": apply_wall_material(cfg, bpy_module=bpy_module),
        "countertop": apply_countertop_material(cfg, bpy_module=bpy_module),
        "appliance": apply_appliance_material(cfg, bpy_module=bpy_module),
    }
