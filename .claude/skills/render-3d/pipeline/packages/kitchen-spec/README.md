# kitchen-spec

Schemas Pydantic pour `KitchenSpec` (le format intermédiaire de la cuisine, entre DSL compiler et Blender Worker).

**Status** : 📦 Phase 1

## Public API

```python
from kitchen_spec import KitchenSpec, Cabinet, Appliance, Wall, Door, Window

spec = KitchenSpec.parse_file("spec.json")
spec = KitchenSpec(
    room=Room(points=[[0,0],[6,0],[6,4.5],[0,4.5]]),
    cabinets=[
        Cabinet(type="BASE", wall_idx=1, offset=1.0, width=0.6, name="Base Drawer"),
        ...
    ],
    appliances=[...],
    style=Style(...),
)
spec.json(indent=2)
```

## Schemas Pydantic

```python
class KitchenSpec(BaseModel):
    version: int = 1
    room: Room
    doors: list[Door] = []
    windows: list[Window] = []
    cabinets: list[Cabinet] = []
    appliances: list[Appliance] = []
    style: Style
    constraints: Constraints = Constraints()
    render: RenderConfig = RenderConfig()

class Room(BaseModel):
    points: list[Point2D]  # at least 3
    height: float = 2.4
    thickness: float = 0.1
    close_loop: bool = True

class Cabinet(BaseModel):
    type: CabinetType
    name: str | None = None
    width: float | None = None
    depth: float | None = None
    height: float | None = None
    z_offset: float | None = None
    
    # wall-relative placement
    wall_idx: int | None = None
    offset: float | None = None
    
    # corner placement
    corner_side: Literal["start", "end"] | None = None
    left_depth: float | None = None
    right_depth: float | None = None
    
    # island placement
    x: float | None = None
    y: float | None = None
    rotation_deg: float | None = None

class Appliance(BaseModel):
    type: ApplianceType
    name: str | None = None
    width: float | None = None
    depth: float | None = None
    height: float | None = None
    z_offset: float | None = None
    
    wall_idx: int | None = None
    offset: float | None = None
    x: float | None = None
    y: float | None = None
    rotation_deg: float | None = None

# Etc.
```

## Validation Pydantic strict mode

- `model_config = ConfigDict(strict=True, extra='forbid')`
- Aucun champ inconnu accepté
- Coercion désactivée (str ne devient pas int automatiquement)

## Generated artifacts

À partir de Pydantic, on génère :
- `kitchen_spec.schema.json` (existing) — JSON Schema pour validation et documentation
- `apps/web/src/types/kitchen_spec.d.ts` — TypeScript types pour le frontend

```bash
kitchen-spec generate-json-schema > kitchen_spec.schema.json
kitchen-spec generate-typescript > apps/web/src/types/kitchen_spec.d.ts
```

## Dependencies

```toml
[project]
name = "kitchen-spec"
version = "0.1.0"
requires-python = ">=3.12"
dependencies = [
    "pydantic>=2.0",
]

[project.scripts]
kitchen-spec = "kitchen_spec.cli:main"
```

## Voir aussi

- [`kitchen_spec.schema.json`](../../kitchen_spec.schema.json) — schema actuel JSON
- [`example_spec.json`](../../example_spec.json) — exemple
- [`spec_full_demo.json`](../../spec_full_demo.json) — demo complet 6×4.5m
