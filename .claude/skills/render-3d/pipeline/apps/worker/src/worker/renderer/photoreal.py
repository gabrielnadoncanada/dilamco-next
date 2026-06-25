"""Phase 8 — photoreal preset.

Upgrades the default render config with :
- HDRI world (Polyhaven `studio_small_03_4k` or fallback procedural sky)
- Procedural PBR materials :
  * White quartz countertop with subtle veining
  * Engineered wood plank floor
  * Satin paint walls
  * Anthracite stainless appliance
- Cycles engine with denoising
- 35mm interior camera at human eye height, 3/4 view
- AgX view transform + slight color grading

Apply via :
    from worker.renderer.photoreal import apply_photoreal_preset
    apply_photoreal_preset(spec, bpy_module=bpy)
    # then run normal pipeline build_and_render

All node-graph creation is bpy-only; tested in MCP at runtime.
"""

from __future__ import annotations

import logging
import math
from typing import TYPE_CHECKING, Any

if TYPE_CHECKING:
    from kitchen_spec import KitchenSpec, RenderConfig

logger = logging.getLogger(__name__)


# ─── Node-graph helpers ───────────────────────────────────────────────────────


def _clear_nodes(mat: Any) -> tuple[Any, Any]:
    """Wipe a material's node graph; return (nodes, links) collections."""
    mat.use_nodes = True
    nodes = mat.node_tree.nodes
    links = mat.node_tree.links
    for node in list(nodes):
        nodes.remove(node)
    return nodes, links


def _output_node(nodes: Any) -> Any:
    return nodes.new(type="ShaderNodeOutputMaterial")


# ─── Materials ────────────────────────────────────────────────────────────────


def make_quartz_countertop(name: str = "Dilamco_Quartz_Countertop", *, bpy_module: Any) -> Any:
    """White quartz with subtle grey veining + satin reflection."""
    mat = bpy_module.data.materials.get(name) or bpy_module.data.materials.new(name)
    nodes, links = _clear_nodes(mat)

    bsdf = nodes.new(type="ShaderNodeBsdfPrincipled")
    # Veining via noise texture mixed with white base
    tex_coord = nodes.new(type="ShaderNodeTexCoord")
    mapping = nodes.new(type="ShaderNodeMapping")
    mapping.inputs["Scale"].default_value = (8.0, 8.0, 8.0)
    noise = nodes.new(type="ShaderNodeTexNoise")
    noise.inputs["Scale"].default_value = 6.0
    noise.inputs["Detail"].default_value = 12.0
    noise.inputs["Roughness"].default_value = 0.6
    color_ramp = nodes.new(type="ShaderNodeValToRGB")
    # Sharp transition: mostly white with thin grey vein
    color_ramp.color_ramp.elements[0].position = 0.50
    color_ramp.color_ramp.elements[0].color = (0.97, 0.96, 0.94, 1.0)  # pure quartz white
    color_ramp.color_ramp.elements[1].position = 0.58
    color_ramp.color_ramp.elements[1].color = (0.68, 0.66, 0.64, 1.0)  # subtle vein grey

    links.new(tex_coord.outputs["Generated"], mapping.inputs["Vector"])
    links.new(mapping.outputs["Vector"], noise.inputs["Vector"])
    links.new(noise.outputs["Fac"], color_ramp.inputs["Fac"])
    links.new(color_ramp.outputs["Color"], bsdf.inputs["Base Color"])

    bsdf.inputs["Roughness"].default_value = 0.12  # satin-polished
    if "Specular IOR Level" in bsdf.inputs:
        bsdf.inputs["Specular IOR Level"].default_value = 0.7
    if "IOR" in bsdf.inputs:
        bsdf.inputs["IOR"].default_value = 1.48
    output = _output_node(nodes)
    links.new(bsdf.outputs["BSDF"], output.inputs["Surface"])
    return mat


def make_wood_floor(name: str = "Dilamco_Wood_Floor", *, bpy_module: Any) -> Any:
    """Engineered oak plank floor — warm brown with grain via noise."""
    mat = bpy_module.data.materials.get(name) or bpy_module.data.materials.new(name)
    nodes, links = _clear_nodes(mat)

    bsdf = nodes.new(type="ShaderNodeBsdfPrincipled")
    tex_coord = nodes.new(type="ShaderNodeTexCoord")
    mapping = nodes.new(type="ShaderNodeMapping")
    # Stretch the noise along X for plank-grain feel.
    mapping.inputs["Scale"].default_value = (20.0, 2.0, 2.0)

    # Two-layer noise: large strokes + fine grain
    noise_large = nodes.new(type="ShaderNodeTexNoise")
    noise_large.inputs["Scale"].default_value = 3.0
    noise_large.inputs["Detail"].default_value = 4.0

    noise_fine = nodes.new(type="ShaderNodeTexNoise")
    noise_fine.inputs["Scale"].default_value = 40.0
    noise_fine.inputs["Detail"].default_value = 8.0

    mix_fac = nodes.new(type="ShaderNodeMath")
    mix_fac.operation = "MULTIPLY"

    color_ramp = nodes.new(type="ShaderNodeValToRGB")
    color_ramp.color_ramp.elements[0].position = 0.30
    color_ramp.color_ramp.elements[0].color = (0.32, 0.20, 0.12, 1.0)  # warm dark oak
    color_ramp.color_ramp.elements[1].position = 0.70
    color_ramp.color_ramp.elements[1].color = (0.55, 0.38, 0.22, 1.0)  # warm light oak

    links.new(tex_coord.outputs["Generated"], mapping.inputs["Vector"])
    links.new(mapping.outputs["Vector"], noise_large.inputs["Vector"])
    links.new(mapping.outputs["Vector"], noise_fine.inputs["Vector"])
    links.new(noise_large.outputs["Fac"], mix_fac.inputs[0])
    links.new(noise_fine.outputs["Fac"], mix_fac.inputs[1])
    links.new(mix_fac.outputs["Value"], color_ramp.inputs["Fac"])
    links.new(color_ramp.outputs["Color"], bsdf.inputs["Base Color"])

    bsdf.inputs["Roughness"].default_value = 0.45  # satin lacquer
    output = _output_node(nodes)
    links.new(bsdf.outputs["BSDF"], output.inputs["Surface"])
    return mat


def make_satin_wall_paint(
    name: str = "Dilamco_Wall_Paint",
    *,
    color: tuple[float, float, float, float] = (0.94, 0.92, 0.88, 1.0),
    bpy_module: Any,
) -> Any:
    """Modern satin wall paint — warm off-white with slight micro-roughness."""
    mat = bpy_module.data.materials.get(name) or bpy_module.data.materials.new(name)
    nodes, links = _clear_nodes(mat)

    bsdf = nodes.new(type="ShaderNodeBsdfPrincipled")
    bsdf.inputs["Base Color"].default_value = color
    bsdf.inputs["Roughness"].default_value = 0.65
    # Subtle micro-bumps via noise normal
    noise = nodes.new(type="ShaderNodeTexNoise")
    noise.inputs["Scale"].default_value = 200.0
    noise.inputs["Detail"].default_value = 2.0
    bump = nodes.new(type="ShaderNodeBump")
    bump.inputs["Strength"].default_value = 0.05
    links.new(noise.outputs["Fac"], bump.inputs["Height"])
    links.new(bump.outputs["Normal"], bsdf.inputs["Normal"])

    output = _output_node(nodes)
    links.new(bsdf.outputs["BSDF"], output.inputs["Surface"])
    return mat


def make_stainless_appliance(name: str = "Dilamco_Stainless", *, bpy_module: Any) -> Any:
    """Brushed stainless steel appliance — metallic with anisotropic feel via noise."""
    mat = bpy_module.data.materials.get(name) or bpy_module.data.materials.new(name)
    nodes, links = _clear_nodes(mat)

    bsdf = nodes.new(type="ShaderNodeBsdfPrincipled")
    bsdf.inputs["Base Color"].default_value = (0.78, 0.79, 0.80, 1.0)
    bsdf.inputs["Metallic"].default_value = 0.95
    bsdf.inputs["Roughness"].default_value = 0.30
    if "Anisotropic" in bsdf.inputs:
        bsdf.inputs["Anisotropic"].default_value = 0.8
    output = _output_node(nodes)
    links.new(bsdf.outputs["BSDF"], output.inputs["Surface"])
    return mat


# ─── Material assignment ──────────────────────────────────────────────────────


def _assign(obj: Any, mat: Any) -> None:
    if obj.data is None:
        return
    if obj.data.materials:
        obj.data.materials[0] = mat
    else:
        obj.data.materials.append(mat)


def apply_photoreal_materials(bpy_module: Any) -> dict[str, int]:
    """Build photoreal PBR materials and assign to scene objects."""
    quartz = make_quartz_countertop(bpy_module=bpy_module)
    wood = make_wood_floor(bpy_module=bpy_module)
    wall = make_satin_wall_paint(bpy_module=bpy_module)
    metal = make_stainless_appliance(bpy_module=bpy_module)

    counts = {"countertop": 0, "floor": 0, "wall": 0, "appliance": 0}
    for obj in bpy_module.data.objects:
        if obj.get("IS_COUNTERTOP"):
            _assign(obj, quartz)
            counts["countertop"] += 1
        elif obj.get("IS_FLOOR_BP"):
            _assign(obj, wood)
            counts["floor"] += 1
        elif obj.get("IS_WALL_BP"):
            _assign(obj, wall)
            counts["wall"] += 1
        elif obj.get("IS_APPLIANCE"):
            _assign(obj, metal)
            counts["appliance"] += 1
    logger.info("Photoreal materials applied: %s", counts)
    return counts


# ─── World HDRI ───────────────────────────────────────────────────────────────


def setup_world_hdri_or_procedural(
    *,
    bpy_module: Any,
    hdri_path: str | None = None,
    strength: float = 1.0,
    rotation_deg: float = 0.0,
) -> Any:
    """Set up world environment with an HDRI image or a procedural sky fallback.

    Returns the world data-block.
    """
    world = bpy_module.context.scene.world
    if world is None:
        world = bpy_module.data.worlds.new("Dilamco_World")
        bpy_module.context.scene.world = world
    world.use_nodes = True
    nodes = world.node_tree.nodes
    links = world.node_tree.links
    for node in list(nodes):
        nodes.remove(node)

    output = nodes.new(type="ShaderNodeOutputWorld")
    background = nodes.new(type="ShaderNodeBackground")
    background.inputs["Strength"].default_value = strength

    if hdri_path:
        env = nodes.new(type="ShaderNodeTexEnvironment")
        try:
            env.image = bpy_module.data.images.load(hdri_path, check_existing=True)
        except (RuntimeError, OSError) as exc:
            logger.warning("HDRI load failed (%s) — falling back to sky", exc)
            return _setup_procedural_sky(world, background, output, links, nodes, rotation_deg)
        mapping = nodes.new(type="ShaderNodeMapping")
        mapping.inputs["Rotation"].default_value = (0.0, 0.0, math.radians(rotation_deg))
        tex_coord = nodes.new(type="ShaderNodeTexCoord")
        links.new(tex_coord.outputs["Generated"], mapping.inputs["Vector"])
        links.new(mapping.outputs["Vector"], env.inputs["Vector"])
        links.new(env.outputs["Color"], background.inputs["Color"])
        links.new(background.outputs["Background"], output.inputs["Surface"])
        logger.info("World HDRI loaded: %s strength=%.2f", hdri_path, strength)
        return world

    return _setup_procedural_sky(world, background, output, links, nodes, rotation_deg)


def _setup_procedural_sky(
    world: Any, background: Any, output: Any, links: Any, nodes: Any, rotation_deg: float
) -> Any:
    """Fallback : Nishita procedural sky for studio-like lighting."""
    sky = nodes.new(type="ShaderNodeTexSky")
    sky.sky_type = "NISHITA"
    sky.sun_elevation = math.radians(35.0)
    sky.sun_rotation = math.radians(rotation_deg)
    sky.sun_size = math.radians(2.0)
    sky.altitude = 0.0
    sky.air_density = 1.0
    sky.dust_density = 1.0
    links.new(sky.outputs["Color"], background.inputs["Color"])
    links.new(background.outputs["Background"], output.inputs["Surface"])
    logger.info("World sky procedural Nishita applied")
    return world


# ─── Camera ────────────────────────────────────────────────────────────────────


def setup_photoreal_camera(
    spec: KitchenSpec, *, bpy_module: Any, name: str = "Dilamco_Camera"
) -> Any:
    """35mm interior camera, 3/4 view from kitchen front-corner.

    Positions the camera at human eye height (1.65m), slightly inside the
    room facing the diagonal corner so all 3 active walls are visible.
    """
    points = spec.room.points
    xs = [p[0] for p in points]
    ys = [p[1] for p in points]
    room_w = max(xs) - min(xs)
    room_d = max(ys) - min(ys)

    # Camera at the open-end corner, looking diagonally to the back-far corner
    cam_x = max(xs) - 0.5
    cam_y = min(ys) + 0.5
    cam_z = 1.65  # eye height
    target_x = min(xs) + room_w * 0.35
    target_y = max(ys) - 0.5
    target_z = 1.0

    cam_data = bpy_module.data.cameras.get(name) or bpy_module.data.cameras.new(name)
    cam_obj = bpy_module.data.objects.get(name) or bpy_module.data.objects.new(name, cam_data)
    if cam_obj.name not in bpy_module.context.scene.collection.objects:
        bpy_module.context.scene.collection.objects.link(cam_obj)

    cam_data.lens = 28.0  # slightly wide — full kitchen in frame
    cam_data.sensor_width = 36.0  # full-frame
    cam_data.clip_start = 0.1
    cam_data.clip_end = 100.0
    cam_data.dof.use_dof = False  # off for arch viz clarity

    import mathutils
    cam_obj.location = (cam_x, cam_y, cam_z)
    direction = mathutils.Vector(
        (target_x - cam_x, target_y - cam_y, target_z - cam_z)
    )
    rot_quat = direction.to_track_quat("-Z", "Y")
    cam_obj.rotation_mode = "QUATERNION"
    cam_obj.rotation_quaternion = rot_quat
    cam_obj.rotation_mode = "XYZ"

    bpy_module.context.scene.camera = cam_obj
    logger.info(
        "Photoreal camera at (%.2f,%.2f,%.2f) looking at (%.2f,%.2f,%.2f) lens=%.0fmm",
        cam_x, cam_y, cam_z, target_x, target_y, target_z, cam_data.lens,
    )
    return cam_obj


# ─── Cycles engine ────────────────────────────────────────────────────────────


def configure_photoreal_cycles(
    *,
    bpy_module: Any,
    samples: int = 256,
    resolution: tuple[int, int] = (1920, 1200),
    use_denoise: bool = True,
    use_gpu: bool = True,
) -> None:
    """Switch render engine to Cycles with denoising + AgX color management."""
    scene = bpy_module.context.scene
    scene.render.engine = "CYCLES"
    scene.render.resolution_x = resolution[0]
    scene.render.resolution_y = resolution[1]
    scene.render.resolution_percentage = 100

    cycles = scene.cycles
    cycles.samples = samples
    cycles.use_denoising = use_denoise
    cycles.denoiser = "OPENIMAGEDENOISE"
    cycles.preview_samples = 16
    cycles.max_bounces = 12
    cycles.diffuse_bounces = 4
    cycles.glossy_bounces = 4
    cycles.transmission_bounces = 8
    cycles.caustics_reflective = False  # speed
    cycles.caustics_refractive = False

    if use_gpu:
        try:
            cycles.device = "GPU"
        except (AttributeError, TypeError):
            pass

    # AgX color management — modern, photoreal default
    scene.view_settings.view_transform = "AgX"
    scene.view_settings.look = "AgX - Medium High Contrast"
    scene.view_settings.exposure = 0.0
    scene.view_settings.gamma = 1.0
    scene.display_settings.display_device = "sRGB"

    logger.info("Cycles configured: %d samples, %dx%d, denoise=%s, gpu=%s",
                samples, resolution[0], resolution[1], use_denoise, use_gpu)


# ─── Top-level apply ──────────────────────────────────────────────────────────


def apply_photoreal_preset(
    spec: KitchenSpec,
    *,
    bpy_module: Any,
    samples: int = 256,
    resolution: tuple[int, int] | None = None,
    hdri_path: str | None = None,
) -> dict[str, Any]:
    """One-call setup: Cycles + camera + world HDRI + photoreal materials.

    Call AFTER the scene is built (cabinets/walls/etc placed). Then render
    to the desired output_path.

    Returns a dict summary of what was applied.
    """
    res = resolution or spec.render.resolution

    # Hide ceiling + the front wall for interior shot
    for o in bpy_module.data.objects:
        if o.get("IS_CEILING_BP") or "Ceiling" in o.name:
            o.hide_render = True
        # Hide wall 0 (front) so camera can see into the kitchen
        wall_idx = o.get("WALL_INDEX") if o.get("IS_WALL_BP") else None
        if o.get("IS_WALL_BP") and o.name == "Wall":  # wall index 0
            o.hide_render = True

    setup_world_hdri_or_procedural(
        bpy_module=bpy_module, hdri_path=hdri_path, strength=1.2,
    )
    mat_counts = apply_photoreal_materials(bpy_module=bpy_module)
    setup_photoreal_camera(spec, bpy_module=bpy_module)
    configure_photoreal_cycles(
        bpy_module=bpy_module, samples=samples, resolution=res,
    )

    return {
        "materials": mat_counts,
        "engine": "CYCLES",
        "samples": samples,
        "resolution": res,
    }
