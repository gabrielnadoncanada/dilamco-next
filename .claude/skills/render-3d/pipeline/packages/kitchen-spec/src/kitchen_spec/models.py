"""Pydantic models for KitchenSpec.

Le format est défini dans `kitchen_spec.schema.json` à la racine du repo.
"""

from __future__ import annotations

from typing import Literal

from pydantic import BaseModel, ConfigDict, Field

# ─── Type aliases ─────────────────────────────────────────────────────────────

Point2D = tuple[float, float]
"""[x, y] en mètres dans le plan du sol."""

Color4 = tuple[float, float, float, float]
"""[R, G, B, A] linéaires (Blender)."""

Vec3 = tuple[float, float, float]
Vec2int = tuple[int, int]


# ─── Enums ────────────────────────────────────────────────────────────────────

CabinetType = Literal[
    "BASE",
    "UPPER",
    "TALL",
    "CORNER_BASE_DIAGONAL",
    "CORNER_BASE_PIE",
    "CORNER_TALL_DIAGONAL",
    "CORNER_TALL_PIE",
    "CORNER_UPPER_DIAGONAL",
    "CORNER_UPPER_PIE",
    "PANEL_BASE",
    "PANEL_UPPER",
    "PANEL_TALL",
]

ApplianceType = Literal[
    "RANGE",
    "COOKTOP",
    "WALL_OVEN",
    "DISHWASHER",
    "REFRIGERATOR",
    "MICROWAVE",
    "HOOD",
    "SINK",
    "WASHING_MACHINE",
    "DRYER",
]

CornerSide = Literal["start", "end"]

Engine = Literal["CYCLES", "BLENDER_EEVEE_NEXT", "BLENDER_EEVEE"]

BacksplashType = Literal["subway", "slab", "mosaic", "stone", "none"]
"""Surface treatment for the backsplash plane."""

BacksplashHeight = Literal["standard", "to_ceiling"]
"""standard = ~0.6m between countertop and uppers; to_ceiling = full height."""


# ─── Strict base config ───────────────────────────────────────────────────────


class _StrictBase(BaseModel):
    """Base class with strict mode (no extra fields, no coercion)."""

    model_config = ConfigDict(
        extra="forbid",
        strict=False,  # allow some coercion (str→int) for JSON convenience
        arbitrary_types_allowed=False,
    )


# ─── Models ───────────────────────────────────────────────────────────────────


class Room(_StrictBase):
    points: list[Point2D] = Field(..., min_length=3)
    height: float = 2.4
    thickness: float = 0.1
    close_loop: bool = True


class Door(_StrictBase):
    wall_idx: int = Field(..., ge=0)
    offset: float = Field(..., ge=0)
    width: float = Field(..., ge=0.3)
    height: float = Field(..., ge=1.5)


class Window(_StrictBase):
    wall_idx: int = Field(..., ge=0)
    offset: float = Field(..., ge=0)
    width: float = Field(..., ge=0.2)
    height: float = Field(..., ge=0.2)
    sill: float = Field(..., ge=0.0)


class Backsplash(_StrictBase):
    """A backsplash surface mounted between the countertop top and the uppers.

    Default `mode='standard'` covers the gap from countertop top (~0.914m)
    to upper bottom (~1.372m) on the named wall. `mode='to_ceiling'` extends
    from countertop to ceiling.
    """

    wall_idx: int = Field(..., ge=0)
    type: BacksplashType = "subway"
    mode: BacksplashHeight = "standard"
    color: str = "Arctic White"
    """Color name (must match Worker palette) or hex string."""

    # Optional explicit height override (meters). Overrides `mode` if set.
    height: float | None = Field(None, gt=0, le=3.0)

    # Range along the wall (offset_start..offset_end). If both None, spans
    # the whole wall.
    offset_start: float | None = Field(None, ge=0)
    offset_end: float | None = Field(None, ge=0)


class Soffit(_StrictBase):
    """A bulkhead / soffit dropped from the ceiling along a wall.

    Phase 4.5.4 — common in condos to hide HVAC ducting above upper cabinets.
    `depth` is how far it protrudes from the wall into the room.
    `height` is how far it drops from the ceiling.
    """

    wall_idx: int = Field(..., ge=0)
    depth: float = Field(0.30, gt=0, le=2.0)
    height: float = Field(0.40, gt=0, le=1.0)


class Cabinet(_StrictBase):
    type: CabinetType
    name: str | None = None

    # Dimensions overrides (sinon defaults par type).
    # Min 0.025m (1") for narrow PANEL_* fillers, but the validator/worker
    # also flags non-PANEL cabinets below 0.15m (6") as nonsensical.
    width: float | None = Field(None, ge=0.025)
    depth: float | None = Field(None, gt=0)
    height: float | None = Field(None, gt=0)
    z_offset: float | None = None

    # Wall-relative placement
    wall_idx: int | None = Field(None, ge=0)
    offset: float | None = Field(None, ge=0)

    # Corner placement
    corner_side: CornerSide | None = None
    left_depth: float | None = Field(None, ge=0)
    right_depth: float | None = Field(None, ge=0)

    # Island placement
    x: float | None = None
    y: float | None = None
    rotation_deg: float | None = None

    # Phase 4.6.A — Countertop overhang per side (meters). Default = use the
    # global countertop_overhang_front from constraints. Useful for bar seating
    # on islands (typically 0.30-0.38m / 12-15").
    overhang_back: float | None = Field(None, ge=0.0, le=0.5)
    overhang_left: float | None = Field(None, ge=0.0, le=0.5)
    overhang_right: float | None = Field(None, ge=0.0, le=0.5)
    overhang_front: float | None = Field(None, ge=0.0, le=0.5)

    # Phase 4.6.B — Per-cabinet style override (overrides global Style).
    style_override: CabinetStyleOverride | None = None

    # Phase 4.6.C — Front layout (door/drawer configuration).
    front_layout: FrontLayout | None = None


FrontLayout = Literal[
    "one_door",
    "two_doors",
    "single_drawer",
    "drawer_stack_2",
    "drawer_stack_3",
    "drawer_stack_4",
    "door_below_drawer",
    "doors_below_drawer",
    "false_front_door_below",
    "false_front_doors_below",
    "open_shelf",
    "glass_door",
    "glass_doors",
]
"""Front configuration for a cabinet.

Layouts and their typical width ranges (validated at compile time):
- one_door           : 0.30-0.61m (1 hinged door)
- two_doors          : 0.61-1.07m (pair of hinged doors)
- single_drawer      : 0.30-0.51m (one large drawer)
- drawer_stack_2/3/4 : 0.30-0.91m (stacked drawers)
- door_below_drawer  : 0.46-0.91m (drawer top + door)
- doors_below_drawer : 0.61-1.07m (drawer + 2 doors)
- false_front_*      : sink bases only, 0.61-0.91m
- open_shelf         : any width, no door (open cabinet)
- glass_door(s)      : same widths as solid door variants, but with glass insert
"""


class CabinetStyleOverride(_StrictBase):
    """Per-cabinet style override. All fields optional — only what's set
    overrides the global Style.

    Used to express things like "this island is walnut while the rest is
    white shaker", which can't be expressed via the global two-tone fields.
    """

    color: str | None = None
    paint_color: str | None = None
    wood_species: str | None = None
    door_type: str | None = None
    pull_finish: str | None = None


class Appliance(_StrictBase):
    type: ApplianceType
    name: str | None = None

    width: float | None = Field(None, ge=0.1)
    depth: float | None = Field(None, gt=0)
    height: float | None = Field(None, gt=0)
    z_offset: float | None = None

    wall_idx: int | None = Field(None, ge=0)
    offset: float | None = Field(None, ge=0)
    x: float | None = None
    y: float | None = None
    rotation_deg: float | None = None

    # Phase audit fix #11 — fuel type & CFM for ventilation rule.
    # Used by NKBA24 to verify total CFM ≥ minimum-per-fuel.
    fuel: Literal["electric", "gas", "induction", "dual"] | None = None
    """Cooking fuel for RANGE/COOKTOP. None defaults to 'electric'."""

    cfm: float | None = Field(None, ge=0)
    """Hood CFM rating (for HOOD/MICROWAVE appliances)."""

    btu_kh: float | None = Field(None, ge=0)
    """Total cooking BTU/hr (in thousands). Triggers higher CFM if ≥ 30."""


class Style(_StrictBase):
    cabinet_style: str | None = None
    wood_species: str | None = None
    paint_color: str | None = None
    stain_color: str | None = None
    interior_material_type: str | None = None
    door_overlay_type: str | None = None
    door_style: str | None = None
    door_type: str | None = None
    shaker_rail_width: float | None = None
    pull_finish: str | None = None

    # Two-tone overrides — applied per cabinet category. If unset, fall back
    # to the global paint_color / wood_species / door_type above.
    bases_color: str | None = None
    """Override paint_color for BASE/TALL cabinets."""

    uppers_color: str | None = None
    """Override paint_color for UPPER cabinets."""

    bases_wood_species: str | None = None
    """Override wood_species for BASE/TALL cabinets."""

    uppers_wood_species: str | None = None
    """Override wood_species for UPPER cabinets."""

    bases_door_type: str | None = None
    """Override door_type for BASE/TALL cabinets (e.g., 5_PIECE)."""

    uppers_door_type: str | None = None
    """Override door_type for UPPER cabinets (e.g., SLAB for glass-front uppers)."""

    @property
    def is_two_tone(self) -> bool:
        """True if any uppers_* or bases_* override is set."""
        return any(
            v is not None
            for v in (
                self.bases_color,
                self.uppers_color,
                self.bases_wood_species,
                self.uppers_wood_species,
                self.bases_door_type,
                self.uppers_door_type,
            )
        )


class Constraints(_StrictBase):
    """Overrides des seuils par défaut du validator."""

    island_aisle_min: float = 1.067
    countertop_overhang_front: float = 0.0254
    corner_filler_min: float = 0.076
    """Minimum filler width between a corner cabinet wing and the first
    adjacent non-corner cabinet/appliance (G9). 76mm = 3" (NKBA Rule 14
    extended). Set to 0 to disable corner-filler auto-insertion in FILL."""

    fridge_clearance_min: float = 0.0254
    """Minimum PANEL_TALL filler width on each side of a refrigerator. 25mm
    = 1" — industry standard for door swing clearance + ventilation. The
    DSL `PLACE fridge` primitive auto-inserts these fillers; the validator
    rule NKBA_FRIDGE_CLEARANCE flags missing ones. Set to 0 to disable."""

    # Phase audit fix #14 — strict mode promotes warnings to errors.
    strict_warnings: bool = False
    """If True, all warning-severity violations are promoted to errors
    (compile fails on `VALIDATE strict`). Default False for backward compat."""

    # Phase audit fix #10 — accessibility.
    accessibility_level: Literal["none", "aging_in_place", "wheelchair"] = "none"
    """Trigger ADA/CSA B651 checks: lower counters, knee clearance under
    sink, turning radius. 'none' = no accessibility enforcement."""

    # Phase audit fix #2 — distance metric for NKBA26 work triangle.
    work_triangle_metric: Literal["euclidean", "wall_walk"] = "wall_walk"
    """How to measure triangle legs:
    - 'euclidean' : straight-line XY (overly optimistic for U/L shapes)
    - 'wall_walk' : sum of wall-following segments (realistic walking dist)
    """


class RenderConfig(_StrictBase):
    """Configuration du Blender Worker. Optionnel — défaults sensibles."""

    camera_loc: Vec3 | None = None
    camera_target: Vec3 | None = None
    camera_lens_mm: float | None = None
    camera_fstop: float | None = None
    engine: Engine = "CYCLES"
    samples: int = Field(128, ge=1)
    resolution: Vec2int = (1600, 1000)
    view_transform: str = "AgX"
    look: str | None = None
    exposure: float = 0.0
    output_path: str | None = None

    hdri_path: str | None = None
    hdri_name: str | None = None
    hdri_strength: float = 1.0
    hdri_rotation: float = 0.0
    sun_energy: float = 2.0
    sun_angle_deg: tuple[float, float] = (35.0, -135.0)

    hide_walls_idx: list[int] = Field(default_factory=list)
    hide_ceiling: bool = True
    hide_annotations: bool = True

    floor_color: Color4 = (0.55, 0.40, 0.25, 1.0)
    floor_roughness: float = 0.55
    wall_color: Color4 = (0.92, 0.90, 0.86, 1.0)
    wall_roughness: float = 0.85
    counter_color: Color4 = (0.94, 0.94, 0.92, 1.0)
    counter_roughness: float = 0.15
    counter_specular: float = 0.6
    appliance_color: Color4 = (0.18, 0.18, 0.20, 1.0)
    appliance_roughness: float = 0.45


class KitchenSpec(_StrictBase):
    """Top-level spec d'une cuisine. Format intermédiaire du pipeline Dilamco."""

    version: int = 1
    room: Room
    doors: list[Door] = Field(default_factory=list)
    windows: list[Window] = Field(default_factory=list)
    cabinets: list[Cabinet] = Field(default_factory=list)
    appliances: list[Appliance] = Field(default_factory=list)
    backsplashes: list[Backsplash] = Field(default_factory=list)
    soffits: list[Soffit] = Field(default_factory=list)
    style: Style = Field(default_factory=Style)
    constraints: Constraints = Field(default_factory=Constraints)
    render: RenderConfig = Field(default_factory=RenderConfig)
