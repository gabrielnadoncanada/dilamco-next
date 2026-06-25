"""Worker-specific exceptions.

Hierarchy:
    WorkerError
    ├── BlenderUnavailableError  - bpy not importable / addon not enabled
    ├── BlenderCrashError        - Blender process died mid-build/render
    ├── RenderTimeoutError       - render exceeded configured budget
    ├── BuildError               - failed to build scene from spec
    │   ├── WallBuildError
    │   ├── CabinetBuildError
    │   └── ApplianceBuildError
    └── OutputError              - writing PNG failed (disk full, permissions)
"""

from __future__ import annotations


class WorkerError(Exception):
    """Base exception for all worker errors."""


class BlenderUnavailableError(WorkerError):
    """Blender / bpy / Home Builder addon is not available."""


class BlenderCrashError(WorkerError):
    """Blender process crashed during build or render."""


class RenderTimeoutError(WorkerError):
    """Render took longer than the configured budget."""


class BuildError(WorkerError):
    """Failed to build scene from spec."""


class WallBuildError(BuildError):
    """Failed to build walls."""


class CabinetBuildError(BuildError):
    """Failed to place a cabinet."""


class ApplianceBuildError(BuildError):
    """Failed to place an appliance."""


class OutputError(WorkerError):
    """Failed to write render output."""
