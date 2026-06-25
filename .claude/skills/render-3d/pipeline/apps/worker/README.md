# apps/worker — Blender headless render worker

Service qui consomme `KitchenSpec` JSON et produit des renders PNG via Blender 5.1 headless. Phase 7 du projet (✅ livrée).

## Structure

```
apps/worker/
├── Dockerfile                # multi-stage CUDA + Blender + HB + uv workspace
├── pyproject.toml
├── src/worker/
│   ├── __main__.py           # python -m worker
│   ├── cli.py                # `render`, `info`
│   ├── pipeline.py           # KitchenBuilder — 15-step orchestration
│   ├── errors.py
│   ├── builders/             # wall, opening, cabinet, appliance, countertop,
│   │                         #   backsplash, soffit, style
│   ├── hb/                   # addon loader, helpers, scene, watchdog, workarounds
│   ├── renderer/             # camera, lighting, materials, photoreal,
│   │                         #   post_process, quality (ADR-014),
│   │                         #   determinism (ADR-013), render_engine
│   └── queue/                # RQ consumer (skeleton — Phase 5)
└── tests/                    # 28 fichiers, ~6000 LOC tests, ~96% coverage
    ├── unit/
    ├── integration/
    ├── snapshot/
    └── adversarial/
```

## Quick start

```bash
cd D:\dilamco_render
uv sync
uv run pytest apps/worker/ -v

# CLI
uv run python -m worker info
uv run python -m worker render --dsl path/to/file.dsl --output out.png
uv run python -m worker render --spec path/to/spec.json --output out.png --quality final
```

> ⚠️ Le module fait `import bpy` dans les builders → ne tourne que dans un environnement avec `bpy` accessible (Blender embarqué ou `bpy` PyPI). Le Dockerfile fournit cette configuration pour la prod.

## Pipeline (KitchenBuilder)

15 étapes orchestrées dans `pipeline.py` :

1. validate spec (`kitchen_validator`)
2. enable HB addon + default style
3. clear HB scene
4. build walls + floor
5. build doors
6. build windows
7. ensure corner sizes (workaround HB.2)
8. build cabinets (straight + corner + island + panel filler)
9. build appliances
10. apply style (cabinet_style + door_style + pull_finish)
11. add countertops + sink cutouts
12. apply scene materials + workarounds (HB.3 modifiers)
13. setup camera + lighting
14. configure render engine + seed (ADR-013)
15. hide+restore for render → render to PNG
16. embed metadata (ADR-013) + run quality Layer 1 (ADR-014)

## Quality presets

| Preset | Samples | Use case |
|---|---|---|
| `preview` | 32 | Refinement loop |
| `standard` | 128 | Default sessions |
| `final` | 256 | Quote PDF, marketing |
| `hero` | 512 | Premium showcases |

Résolution + render engine config dans `renderer/render_engine.py`.

## Worker job contract (à venir Phase 5)

Le squelette RQ est dans `queue/`. Phase 5 (Backend FastAPI) ajoutera l'enqueue côté API. Format attendu :

```python
{
    "spec": KitchenSpec,
    "render_quality": "preview | standard | final | hero",
    "camera_angles": ["default"],
    "session_id": str,
    "user_id": str,
    "callback_url": str,
}
```

## Determinism (ADR-013)

- Spec hash + render seed dérivés du source DSL et embeddés en metadata PNG
- HDRI versions pinned via `hdris/assets-manifest.json`
- Re-render du même spec produit le même PNG (modulo Cycles GPU/CPU determinism)

## Quality verification (ADR-014)

`renderer/quality.py` exécute des checks Layer 1 post-render :
- pas de frame entièrement noire/blanche
- distribution luminance plausible
- pas d'objet HB orphan visible (instance source non-cachée)

## HB plugin workarounds

Documentés dans [`docs/hb-bugs.md`](../../docs/hb-bugs.md), implémentés dans `hb/workarounds.py` :
- Bug #2 : `ensure_corner_sizes(0.914)` avant placement
- Bug #3 : `apply_modifier` pour materials appliances
- Bug #4 : hide GeoNodeText annotations
- (+ 4 autres)

## Voir aussi

- [`docs/phases/phase-7-plan.md`](../../docs/phases/phase-7-plan.md)
- [`docs/decisions/adr-013-determinism-guarantees.md`](../../docs/decisions/adr-013-determinism-guarantees.md)
- [`docs/decisions/adr-014-render-quality-verification.md`](../../docs/decisions/adr-014-render-quality-verification.md)
- [`docs/hb-bugs.md`](../../docs/hb-bugs.md)
