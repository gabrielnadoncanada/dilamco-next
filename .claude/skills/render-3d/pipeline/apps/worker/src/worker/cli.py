"""CLI entry point for the worker.

Usage:
    python -m worker render --dsl path/to/file.dsl --output out.png
    python -m worker render --spec path/to/spec.json --output out.png
    python -m worker info
"""

from __future__ import annotations

import argparse
import json
import logging
import sys
from pathlib import Path
from typing import TYPE_CHECKING

from worker.errors import WorkerError

if TYPE_CHECKING:
    from collections.abc import Sequence

    from kitchen_spec import KitchenSpec

logger = logging.getLogger(__name__)


# Sample preset → cycles samples mapping (fed into RenderConfig.samples).
QUALITY_SAMPLES = {
    "preview": 32,
    "standard": 128,
    "final": 256,
    "hero": 512,
}


def build_parser() -> argparse.ArgumentParser:
    parser = argparse.ArgumentParser(
        prog="worker",
        description="Dilamco Blender render worker",
    )
    sub = parser.add_subparsers(dest="command", required=True)

    render = sub.add_parser("render", help="Render a kitchen spec to PNG")
    src = render.add_mutually_exclusive_group(required=True)
    src.add_argument("--dsl", type=str, help="Path to a .dsl file")
    src.add_argument("--spec", type=str, help="Path to a kitchen spec JSON")
    render.add_argument("--output", "-o", type=str, required=True, help="Output PNG path")
    render.add_argument(
        "--quality",
        choices=["preview", "standard", "final", "hero"],
        default="standard",
    )
    render.add_argument("--verbose", "-v", action="store_true", help="Enable DEBUG logging")
    render.add_argument(
        "--ignore-validation",
        action="store_true",
        help="Render even if validator reports errors (dev/debug). Demotes errors to warnings.",
    )

    sub.add_parser("info", help="Print worker version and environment info")

    return parser


def _setup_logging(verbose: bool) -> None:
    level = logging.DEBUG if verbose else logging.INFO
    logging.basicConfig(
        level=level,
        format="%(asctime)s %(levelname)s %(name)s: %(message)s",
        datefmt="%H:%M:%S",
    )


def _load_dsl(path: Path) -> tuple[KitchenSpec, str, str]:
    """Load + compile a .dsl file. Returns (spec, dsl_source, dsl_version)."""
    from kitchen_dsl import compile_dsl

    source = path.read_text(encoding="utf-8")
    spec = compile_dsl(source)
    # DSL version: parse header if present, else default 1.0
    dsl_version = "1.0"
    for line in source.splitlines()[:5]:
        line = line.strip()
        if line.startswith("# DSL_VERSION "):
            dsl_version = line.split("# DSL_VERSION ", 1)[1].strip()
            break
    return spec, source, dsl_version


def _load_spec_json(path: Path) -> tuple[KitchenSpec, str, str]:
    """Load a Kitchen spec JSON file. Returns (spec, dsl_source='', dsl_version='1.0')."""
    from kitchen_spec import KitchenSpec

    data = json.loads(path.read_text(encoding="utf-8"))
    data.pop("_comment", None)
    spec = KitchenSpec.model_validate(data)
    # No DSL source available; use canonical JSON as the determinism input.
    canonical = json.dumps(data, sort_keys=True)
    return spec, canonical, "1.0"


def _validate_spec(spec: KitchenSpec) -> None:
    """Run kitchen_validator. Raises WorkerError if violations are errors."""
    from kitchen_validator import Validator

    result = Validator().validate(spec)
    if not result.ok:
        errors = [v for v in result.violations if v.severity == "error"]
        if errors:
            messages = "\n".join(f"  - {v.rule_id}: {v.message}" for v in errors)
            raise WorkerError(f"Spec validation failed with {len(errors)} errors:\n{messages}")


def cmd_render(args: argparse.Namespace) -> int:
    """Execute the render subcommand. Returns exit code."""
    from worker.pipeline import KitchenBuilder

    _setup_logging(args.verbose)
    output_path = Path(args.output)

    # Load spec from DSL or JSON
    try:
        if args.dsl:
            spec, source, dsl_version = _load_dsl(Path(args.dsl))
        else:
            spec, source, dsl_version = _load_spec_json(Path(args.spec))
    except (FileNotFoundError, ValueError, json.JSONDecodeError) as exc:
        print(f"error: failed to load spec: {exc}", file=sys.stderr)
        return 2

    # Validate
    try:
        _validate_spec(spec)
    except WorkerError as exc:
        if args.ignore_validation:
            print(f"warning (--ignore-validation): {exc}", file=sys.stderr)
        else:
            print(f"error: {exc}", file=sys.stderr)
            return 3

    # Override samples per quality preset
    spec_with_quality = spec.model_copy(
        update={"render": spec.render.model_copy(update={"samples": QUALITY_SAMPLES[args.quality]})}
    )

    # Build & render
    try:
        builder = KitchenBuilder()
        result = builder.build_and_render(
            spec_with_quality,
            output_path,
            dsl_source=source,
            dsl_version=dsl_version,
            quality_preset=args.quality,
        )
    except WorkerError as exc:
        print(f"error: render failed: {exc}", file=sys.stderr)
        return 4

    # Report
    print(
        f"OK rendered to {result.output_path} "
        f"(walls={result.walls_built} cabinets={result.cabinets_built} "
        f"appliances={result.appliances_built} fronts={result.fronts_styled})"
    )
    print(f"   spec_hash={result.spec_hash[:12]}... seed={result.render_seed}")
    if result.quality_warning:
        print(
            f"WARNING: quality check flagged this render: "
            f"{[c.name for c in result.quality_report.failed_checks]}",
            file=sys.stderr,
        )
        return 5
    return 0


def main(argv: Sequence[str] | None = None) -> int:
    parser = build_parser()
    args = parser.parse_args(argv)

    if args.command == "info":
        from worker import __version__

        print(f"dilamco worker {__version__}")
        return 0

    if args.command == "render":
        return cmd_render(args)

    return 1
