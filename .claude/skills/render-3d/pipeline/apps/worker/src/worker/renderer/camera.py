"""Camera setup — interior camera with optional DOF.

Default: an automatic interior view that frames the whole kitchen.
Can be overridden via cfg.camera_loc / camera_target.
"""

from __future__ import annotations

import logging
import math
from typing import TYPE_CHECKING, Any

if TYPE_CHECKING:
    from kitchen_spec import RenderConfig

logger = logging.getLogger(__name__)


def setup_camera(
    cfg: RenderConfig,
    bpy_module: Any = None,
    *,
    name: str = "Dilamco_Camera",
) -> Any:
    """Create or update the render camera.

    If cfg.camera_loc / camera_target are set, use them. Otherwise place at
    (4, -2, 1.6) looking at (2, 2, 1.0) — a generic 3/4 view.
    """
    if bpy_module is None:  # pragma: no cover
        import bpy

        bpy_module = bpy

    cam = bpy_module.data.objects.get(name)
    if cam is None or cam.type != "CAMERA":
        cam_data = bpy_module.data.cameras.new(name=f"{name}_data")
        cam = bpy_module.data.objects.new(name=name, object_data=cam_data)
        bpy_module.context.collection.objects.link(cam)

    loc = cfg.camera_loc if cfg.camera_loc is not None else (4.0, -2.0, 1.6)
    target = cfg.camera_target if cfg.camera_target is not None else (2.0, 2.0, 1.0)

    cam.location = loc
    cam.rotation_euler = _look_at_rotation(loc, target)
    cam.data.lens = float(cfg.camera_lens_mm) if cfg.camera_lens_mm is not None else 28.0

    if cfg.camera_fstop is not None:
        cam.data.dof.use_dof = True
        cam.data.dof.aperture_fstop = float(cfg.camera_fstop)
    else:
        cam.data.dof.use_dof = False

    bpy_module.context.scene.camera = cam
    logger.info(
        "Camera at %s looking at %s lens=%.1fmm fstop=%s",
        loc,
        target,
        cam.data.lens,
        cfg.camera_fstop,
    )
    return cam


def _look_at_rotation(
    location: tuple[float, float, float],
    target: tuple[float, float, float],
) -> tuple[float, float, float]:
    """Compute Euler rotation (X, Y, Z) for a camera at `location` looking at `target`.

    Blender camera convention: -Z faces forward, +Y is up.
    """
    dx = target[0] - location[0]
    dy = target[1] - location[1]
    dz = target[2] - location[2]
    distance_xy = math.sqrt(dx * dx + dy * dy)

    rot_z = math.atan2(dy, dx) - math.pi / 2  # camera Y → +X-axis target
    rot_x = math.atan2(distance_xy, -dz)  # tilt down/up from horizontal
    return (rot_x, 0.0, rot_z)
