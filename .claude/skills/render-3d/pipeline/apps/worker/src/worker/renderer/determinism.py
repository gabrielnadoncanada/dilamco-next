"""Render determinism — seeded Cycles + PNG metadata stamps (ADR-013).

Determinism contract:
    Given (DSL source, DSL version, worker version, plugin version, asset version),
    the render PNG hash is identical (within ΔE tolerance for snapshot tests).

Functions:
- compute_render_seed(): derive a deterministic seed from spec + version pins
- embed_metadata(): write PNG_TEXT chunks identifying spec + tooling versions
- read_metadata(): read embedded metadata from a rendered PNG
"""

from __future__ import annotations

import hashlib
import json
from dataclasses import asdict, dataclass
from typing import TYPE_CHECKING, Any

if TYPE_CHECKING:
    from pathlib import Path

# Cycles uses int seeds in [0, 2**32 - 1]. We trim our hash to that range.
_CYCLES_SEED_MASK = (1 << 32) - 1


def compute_render_seed(*, dsl_source: str, dsl_version: str = "1.0") -> int:
    """Derive a deterministic Cycles seed from the spec source.

    Uses SHA-256 → first 4 bytes interpreted as uint32. Same spec + version
    always yields the same seed.
    """
    if not isinstance(dsl_source, str):
        raise TypeError(f"dsl_source must be str, got {type(dsl_source).__name__}")
    payload = f"{dsl_version}\n{dsl_source}".encode()
    digest = hashlib.sha256(payload).digest()
    return int.from_bytes(digest[:4], byteorder="big") & _CYCLES_SEED_MASK


def compute_spec_hash(*, dsl_source: str, dsl_version: str = "1.0") -> str:
    """Return a hex-encoded SHA-256 hash of the spec for cache keys + audit."""
    payload = f"{dsl_version}\n{dsl_source}".encode()
    return hashlib.sha256(payload).hexdigest()


@dataclass(frozen=True)
class RenderMetadata:
    """Metadata embedded in every PNG output for traceability + reproducibility.

    All fields except `render_date` are part of the determinism contract:
    rendering the same spec_hash with the same versions must produce the same
    PNG (modulo ΔE tolerance). render_date is informative only.
    """

    spec_hash: str
    dsl_version: str
    worker_version: str
    plugin_version: str
    render_seed: int
    render_date: str  # ISO8601, informative only
    quality_preset: str = "standard"

    def as_png_text_chunks(self) -> dict[str, str]:
        """Convert to PNG tEXt chunks (key→value, all str)."""
        return {
            "Software": "dilamco-worker",
            "Version": self.worker_version,
            "DSL_Version": self.dsl_version,
            "Plugin_Version": self.plugin_version,
            "Spec_Hash": self.spec_hash,
            "Render_Seed": str(self.render_seed),
            "Render_Date": self.render_date,
            "Quality_Preset": self.quality_preset,
        }

    def to_json(self) -> str:
        return json.dumps(asdict(self), sort_keys=True)


def embed_metadata(png_path: Path, metadata: RenderMetadata) -> None:
    """Embed RenderMetadata as PNG tEXt chunks. Mutates the file in-place.

    Uses Pillow. Raises FileNotFoundError if png_path doesn't exist.
    """
    from PIL import Image, PngImagePlugin

    if not png_path.exists():
        raise FileNotFoundError(f"Cannot embed metadata: {png_path} does not exist")

    img = Image.open(png_path)
    info = PngImagePlugin.PngInfo()
    for key, value in metadata.as_png_text_chunks().items():
        info.add_text(key, value)
    img.save(png_path, "PNG", pnginfo=info)


def read_metadata(png_path: Path) -> dict[str, str]:
    """Read PNG tEXt chunks. Returns dict of key→value (only str values)."""
    from PIL import Image

    img = Image.open(png_path)
    return {str(k): v for k, v in img.info.items() if isinstance(v, str) and isinstance(k, str)}


def is_deterministic_match(metadata_a: dict[str, str], metadata_b: dict[str, str]) -> bool:
    """Check whether two PNGs were rendered from same spec with same versions.

    Compares the determinism contract fields: Spec_Hash, DSL_Version,
    Plugin_Version, Render_Seed. Ignores Render_Date.
    """
    contract_keys = {"Spec_Hash", "DSL_Version", "Plugin_Version", "Render_Seed"}
    a = {k: metadata_a.get(k) for k in contract_keys}
    b = {k: metadata_b.get(k) for k in contract_keys}
    return a == b and all(v is not None for v in a.values())


def coerce_to_metadata(payload: dict[str, Any]) -> RenderMetadata:
    """Build a RenderMetadata from a free-form dict (e.g. from JSON).

    Useful for tests and replay scenarios.
    """
    return RenderMetadata(
        spec_hash=str(payload["spec_hash"]),
        dsl_version=str(payload.get("dsl_version", "1.0")),
        worker_version=str(payload["worker_version"]),
        plugin_version=str(payload["plugin_version"]),
        render_seed=int(payload["render_seed"]),
        render_date=str(payload["render_date"]),
        quality_preset=str(payload.get("quality_preset", "standard")),
    )
