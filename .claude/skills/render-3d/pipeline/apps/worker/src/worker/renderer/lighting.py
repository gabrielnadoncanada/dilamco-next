"""Lighting setup — HDRI Polyhaven + sun directional.

Setup is deterministic (no time-based decisions) per ADR-013.
Falls back to plain sun-only if HDRI is missing (FM-W-05 / S.5).
"""

from __future__ import annotations

import logging
import math
from pathlib import Path
from typing import TYPE_CHECKING, Any

if TYPE_CHECKING:
    from kitchen_spec import RenderConfig

logger = logging.getLogger(__name__)


def setup_world_hdri(
    cfg: RenderConfig,
    bpy_module: Any = None,
    *,
    fallback_to_sun_on_missing: bool = True,
) -> bool:
    """Set up world environment with HDRI from cfg.hdri_path / hdri_name.

    Returns True if HDRI was applied, False if we fell back to plain world.
    """
    if bpy_module is None:  # pragma: no cover
        import bpy

        bpy_module = bpy

    # Path resolution: try cfg.hdri_path/cfg.hdri_name.exr first
    hdri_path: Path | None = None
    if cfg.hdri_path and cfg.hdri_name:
        candidate = Path(cfg.hdri_path) / f"{cfg.hdri_name}.exr"
        if candidate.exists():
            hdri_path = candidate
        else:
            # Try .hdr
            alt = Path(cfg.hdri_path) / f"{cfg.hdri_name}.hdr"
            if alt.exists():
                hdri_path = alt

    if hdri_path is None:
        msg = f"HDRI not found at {cfg.hdri_path}/{cfg.hdri_name}, falling back to plain world"
        if fallback_to_sun_on_missing:
            logger.warning(msg)
            return False
        raise FileNotFoundError(msg)

    world = bpy_module.context.scene.world
    if world is None:
        world = bpy_module.data.worlds.new(name="World")
        bpy_module.context.scene.world = world
    world.use_nodes = True
    nt = world.node_tree

    # Clear existing nodes
    for node in list(nt.nodes):
        nt.nodes.remove(node)

    output = nt.nodes.new("ShaderNodeOutputWorld")
    bg = nt.nodes.new("ShaderNodeBackground")
    env = nt.nodes.new("ShaderNodeTexEnvironment")
    mapping = nt.nodes.new("ShaderNodeMapping")
    coord = nt.nodes.new("ShaderNodeTexCoord")

    env.image = bpy_module.data.images.load(str(hdri_path), check_existing=True)
    bg.inputs["Strength"].default_value = float(cfg.hdri_strength)
    mapping.inputs["Rotation"].default_value[2] = math.radians(cfg.hdri_rotation)

    nt.links.new(coord.outputs["Generated"], mapping.inputs["Vector"])
    nt.links.new(mapping.outputs["Vector"], env.inputs["Vector"])
    nt.links.new(env.outputs["Color"], bg.inputs["Color"])
    nt.links.new(bg.outputs["Background"], output.inputs["Surface"])

    logger.info(
        "HDRI %s applied (strength=%.2f rot=%.0f°)",
        hdri_path.name,
        cfg.hdri_strength,
        cfg.hdri_rotation,
    )
    return True


def setup_sun_light(
    cfg: RenderConfig,
    bpy_module: Any = None,
    *,
    name: str = "Dilamco_Sun",
) -> Any:
    """Create or update a directional sun light. Returns the sun object."""
    if bpy_module is None:  # pragma: no cover
        import bpy

        bpy_module = bpy

    sun = bpy_module.data.objects.get(name)
    if sun is None or sun.type != "LIGHT":
        light_data = bpy_module.data.lights.new(name=f"{name}_data", type="SUN")
        sun = bpy_module.data.objects.new(name=name, object_data=light_data)
        bpy_module.context.collection.objects.link(sun)

    sun.data.energy = float(cfg.sun_energy)

    # rotation_euler from sun_angle_deg = (elevation, azimuth) deg
    elevation_deg, azimuth_deg = cfg.sun_angle_deg
    sun.rotation_euler = (
        math.radians(90.0 - elevation_deg),  # X: tilt from zenith
        0.0,
        math.radians(azimuth_deg),  # Z: azimuth
    )

    logger.info(
        "Sun light energy=%.2f elev=%.0f° az=%.0f°",
        cfg.sun_energy,
        elevation_deg,
        azimuth_deg,
    )
    return sun


def setup_lighting(
    cfg: RenderConfig,
    bpy_module: Any = None,
) -> dict[str, Any]:
    """Set up complete lighting (HDRI + sun). Returns summary dict."""
    hdri_ok = setup_world_hdri(cfg, bpy_module=bpy_module)
    sun_obj = setup_sun_light(cfg, bpy_module=bpy_module)
    return {
        "hdri_applied": hdri_ok,
        "sun": sun_obj,
    }
