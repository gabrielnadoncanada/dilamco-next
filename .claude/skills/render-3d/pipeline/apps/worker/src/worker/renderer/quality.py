"""Render quality verification — Layer 1 statistical checks (ADR-014).

Catches obviously-broken renders before serving them:
- Mostly black (lighting failed)
- Mostly white (overexposure / missing materials)
- Low color variance (monochrome flat)
- NaN values (mesh corruption)
- Pure-white/black pixel ratio too high (missing textures)

Layer 2 (reference comparison) and Layer 3 (semantic LLM) are Phase 10.
"""

from __future__ import annotations

from dataclasses import dataclass, field
from typing import TYPE_CHECKING, Any

import numpy as np

if TYPE_CHECKING:
    from pathlib import Path

    from numpy.typing import NDArray


# Thresholds calibrated for typical kitchen renders (will refine in Phase 10
# after collecting first 1000 production renders).
DEFAULT_MIN_BRIGHTNESS = 0.15  # mean luminance below = mostly dark
DEFAULT_MAX_BRIGHTNESS = 0.95  # mean luminance above = blown out
DEFAULT_MIN_LAB_STDDEV = 5.0  # below = monochrome flat
DEFAULT_MIN_DYNAMIC_RANGE = 100  # max-min < 100 (uint8) = no contrast
DEFAULT_MAX_PURE_PIXEL_RATIO = 0.30  # >30% pure-white-or-black = missing textures


@dataclass
class QualityCheck:
    """Result of a single statistical check."""

    name: str
    passed: bool
    measured_value: float | None
    threshold: float | None
    description: str


@dataclass
class QualityReport:
    """Aggregate result of all Layer 1 checks on a render."""

    passed: bool
    checks: list[QualityCheck] = field(default_factory=list)

    @property
    def failed_checks(self) -> list[QualityCheck]:
        return [c for c in self.checks if not c.passed]

    def format_summary(self) -> str:
        lines = [f"Quality: {'PASSED' if self.passed else 'FAILED'}"]
        for check in self.checks:
            mark = "✓" if check.passed else "✗"
            measured = f"{check.measured_value:.3f}" if check.measured_value is not None else "—"
            lines.append(f"  {mark} {check.name}: measured={measured} ({check.description})")
        return "\n".join(lines)


def _to_rgb_array(image: NDArray[Any] | Path) -> NDArray[Any]:
    """Coerce input to a (H, W, 3) uint8 numpy array.

    Accepts an ndarray or a path to a PNG. Strips alpha channel if present.
    """
    from pathlib import Path as _Path

    if isinstance(image, _Path):
        from PIL import Image as PILImage

        img = PILImage.open(image).convert("RGB")
        arr_loaded: NDArray[Any] = np.array(img, dtype=np.uint8)
        return arr_loaded

    arr = np.asarray(image)
    if arr.ndim == 2:  # grayscale
        arr = np.stack([arr, arr, arr], axis=-1)
    if arr.ndim != 3:
        raise ValueError(f"Expected 2D or 3D array, got {arr.ndim}D")
    if arr.shape[2] == 4:
        arr = arr[:, :, :3]
    if arr.shape[2] != 3:
        raise ValueError(f"Expected RGB (3 channels) or RGBA (4), got {arr.shape[2]}")
    if arr.dtype != np.uint8:
        # Float in [0,1] → uint8.
        if arr.dtype.kind == "f":
            if arr.max() <= 1.0:
                arr = (arr * 255).astype(np.uint8)
            else:
                arr = np.clip(arr, 0, 255).astype(np.uint8)
        else:
            arr = arr.astype(np.uint8)
    return arr


def check_nan(image: NDArray[Any] | Path) -> QualityCheck:
    """Catch render artifacts where the GPU produced NaN values (S.13)."""
    from pathlib import Path as _Path

    arr = np.asarray(image) if not isinstance(image, _Path) else _to_rgb_array(image)
    has_nan = bool(np.isnan(arr).any()) if arr.dtype.kind == "f" else False
    return QualityCheck(
        name="no_nan_values",
        passed=not has_nan,
        measured_value=1.0 if has_nan else 0.0,
        threshold=0.0,
        description="presence of NaN values",
    )


def check_brightness_in_range(
    image: NDArray[Any] | Path,
    *,
    min_brightness: float = DEFAULT_MIN_BRIGHTNESS,
    max_brightness: float = DEFAULT_MAX_BRIGHTNESS,
) -> tuple[QualityCheck, QualityCheck]:
    """Detect mostly-black or mostly-white renders.

    Returns (too_dark_check, too_bright_check). Mean luminance is computed
    using ITU-R BT.709 weights.
    """
    arr = _to_rgb_array(image).astype(np.float32) / 255.0
    luminance = 0.2126 * arr[:, :, 0] + 0.7152 * arr[:, :, 1] + 0.0722 * arr[:, :, 2]
    mean = float(luminance.mean())
    return (
        QualityCheck(
            name="brightness_not_too_dark",
            passed=mean >= min_brightness,
            measured_value=mean,
            threshold=min_brightness,
            description=f"mean luminance ≥ {min_brightness}",
        ),
        QualityCheck(
            name="brightness_not_too_bright",
            passed=mean <= max_brightness,
            measured_value=mean,
            threshold=max_brightness,
            description=f"mean luminance ≤ {max_brightness}",
        ),
    )


def check_color_variance(
    image: NDArray[Any] | Path,
    *,
    min_stddev: float = DEFAULT_MIN_LAB_STDDEV,
) -> QualityCheck:
    """Detect monochrome / flat renders by checking RGB stddev."""
    arr = _to_rgb_array(image).astype(np.float32)
    stddev = float(arr.std())
    return QualityCheck(
        name="color_variance_sufficient",
        passed=stddev >= min_stddev,
        measured_value=stddev,
        threshold=min_stddev,
        description=f"RGB stddev ≥ {min_stddev}",
    )


def check_dynamic_range(
    image: NDArray[Any] | Path,
    *,
    min_range: float = DEFAULT_MIN_DYNAMIC_RANGE,
) -> QualityCheck:
    """Detect renders with no contrast (e.g., midtone fog only)."""
    arr = _to_rgb_array(image).astype(np.float32)
    drange = float(arr.max() - arr.min())
    return QualityCheck(
        name="dynamic_range_sufficient",
        passed=drange >= min_range,
        measured_value=drange,
        threshold=min_range,
        description=f"max - min ≥ {min_range}",
    )


def check_pure_pixel_ratio(
    image: NDArray[Any] | Path,
    *,
    max_ratio: float = DEFAULT_MAX_PURE_PIXEL_RATIO,
) -> QualityCheck:
    """Detect missing textures by counting pure-white + pure-black pixels.

    Surfaces with no material assigned often render as flat (0,0,0) or
    (255,255,255). > max_ratio pure pixels = suspicious.
    """
    arr = _to_rgb_array(image)
    is_pure_black = np.all(arr == 0, axis=-1)
    is_pure_white = np.all(arr == 255, axis=-1)
    total_pure = int(is_pure_black.sum() + is_pure_white.sum())
    ratio = total_pure / float(arr.shape[0] * arr.shape[1])
    return QualityCheck(
        name="pure_pixel_ratio_low",
        passed=ratio <= max_ratio,
        measured_value=ratio,
        threshold=max_ratio,
        description=f"pure white+black pixels ≤ {max_ratio}",
    )


def run_quality_layer_1(
    image: NDArray[Any] | Path,
    *,
    min_brightness: float = DEFAULT_MIN_BRIGHTNESS,
    max_brightness: float = DEFAULT_MAX_BRIGHTNESS,
    min_stddev: float = DEFAULT_MIN_LAB_STDDEV,
    min_range: float = DEFAULT_MIN_DYNAMIC_RANGE,
    max_pure_ratio: float = DEFAULT_MAX_PURE_PIXEL_RATIO,
) -> QualityReport:
    """Run all Layer 1 statistical checks on a render. Returns aggregate report.

    Use as the first gate before serving a render: if QualityReport.passed
    is False, retry once and escalate to human if still failing.
    """
    checks: list[QualityCheck] = []
    checks.append(check_nan(image))
    dark_check, bright_check = check_brightness_in_range(
        image, min_brightness=min_brightness, max_brightness=max_brightness
    )
    checks.append(dark_check)
    checks.append(bright_check)
    checks.append(check_color_variance(image, min_stddev=min_stddev))
    checks.append(check_dynamic_range(image, min_range=min_range))
    checks.append(check_pure_pixel_ratio(image, max_ratio=max_pure_ratio))
    overall = all(c.passed for c in checks)
    return QualityReport(passed=overall, checks=checks)
