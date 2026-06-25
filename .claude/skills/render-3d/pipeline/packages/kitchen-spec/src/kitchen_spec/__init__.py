"""KitchenSpec — Pydantic schemas pour le format intermédiaire du Kitchen Designer.

Format produit par le DSL compiler (kitchen-dsl) ou le CSP solver (kitchen-solver),
consommé par le validator (kitchen-validator) puis le Blender Worker.
"""

from kitchen_spec.models import (
    Appliance,
    ApplianceType,
    Backsplash,
    BacksplashHeight,
    BacksplashType,
    Cabinet,
    CabinetStyleOverride,
    CabinetType,
    Constraints,
    Door,
    FrontLayout,
    KitchenSpec,
    Point2D,
    RenderConfig,
    Room,
    Soffit,
    Style,
    Window,
)

__all__ = [
    "Appliance",
    "ApplianceType",
    "Backsplash",
    "BacksplashHeight",
    "BacksplashType",
    "Cabinet",
    "CabinetStyleOverride",
    "CabinetType",
    "Constraints",
    "Door",
    "FrontLayout",
    "KitchenSpec",
    "Point2D",
    "RenderConfig",
    "Room",
    "Soffit",
    "Style",
    "Window",
]

__version__ = "0.1.0"
