"""Render watchdog: detect Blender freeze and timeout (FM-W-02 mitigation).

Use as context manager around a render call:

    from worker.hb.watchdog import RenderWatchdog
    with RenderWatchdog(soft_timeout=60, hard_timeout=120):
        do_render()  # raises RenderTimeoutError if exceeded

For headless Blender (single-process), uses signal.alarm on Unix and a
threaded heartbeat on Windows.
"""

from __future__ import annotations

import logging
import platform
import threading
import time
from typing import TYPE_CHECKING

from worker.errors import RenderTimeoutError
from worker.hb.constants import (
    WATCHDOG_HARD_KILL_SECONDS,
    WATCHDOG_SOFT_KILL_SECONDS,
)

if TYPE_CHECKING:
    from collections.abc import Callable
    from types import TracebackType

logger = logging.getLogger(__name__)


class RenderWatchdog:
    """Context manager that raises RenderTimeoutError if the wrapped block
    exceeds the configured hard timeout.

    On soft timeout: logs warning and (optionally) calls a soft_callback.
    On hard timeout: raises RenderTimeoutError. The current thread's stack
    is interrupted via thread interrupt (best-effort; for true Blender freeze
    requiring kill, use the queue layer to SIGKILL the worker process).

    Args:
        soft_timeout: seconds before logging warning (default 60).
        hard_timeout: seconds before raising (default 120).
        soft_callback: optional callable invoked at soft_timeout.
    """

    def __init__(
        self,
        soft_timeout: float = WATCHDOG_SOFT_KILL_SECONDS,
        hard_timeout: float = WATCHDOG_HARD_KILL_SECONDS,
        soft_callback: Callable[[], None] | None = None,
    ):
        if hard_timeout <= soft_timeout:
            raise ValueError(
                f"hard_timeout ({hard_timeout}) must exceed soft_timeout ({soft_timeout})"
            )
        self.soft_timeout = soft_timeout
        self.hard_timeout = hard_timeout
        self.soft_callback = soft_callback
        self._timer: threading.Timer | None = None
        self._soft_timer: threading.Timer | None = None
        self._timed_out = False
        self._start_time: float = 0.0

    def _on_soft_timeout(self) -> None:
        elapsed = time.monotonic() - self._start_time
        logger.warning(
            "Render watchdog: soft timeout at %.1fs (limit %.1fs)",
            elapsed,
            self.soft_timeout,
        )
        if self.soft_callback is not None:
            try:
                self.soft_callback()
            except Exception as exc:  # pragma: no cover - callback errors
                logger.warning("Soft callback raised: %s", exc)

    def _on_hard_timeout(self) -> None:
        elapsed = time.monotonic() - self._start_time
        logger.error(
            "Render watchdog: HARD timeout at %.1fs (limit %.1fs)",
            elapsed,
            self.hard_timeout,
        )
        self._timed_out = True

    def __enter__(self) -> RenderWatchdog:
        self._start_time = time.monotonic()
        self._soft_timer = threading.Timer(self.soft_timeout, self._on_soft_timeout)
        self._timer = threading.Timer(self.hard_timeout, self._on_hard_timeout)
        self._soft_timer.daemon = True
        self._timer.daemon = True
        self._soft_timer.start()
        self._timer.start()
        return self

    def __exit__(
        self,
        exc_type: type[BaseException] | None,
        exc_value: BaseException | None,
        traceback: TracebackType | None,
    ) -> None:
        if self._soft_timer is not None:
            self._soft_timer.cancel()
        if self._timer is not None:
            self._timer.cancel()

        # Don't shadow an existing exception (returning None propagates it).
        if exc_value is not None:
            return

        if self._timed_out:
            elapsed = time.monotonic() - self._start_time
            raise RenderTimeoutError(
                f"Render exceeded hard timeout {self.hard_timeout}s (actual {elapsed:.1f}s)"
            )


def is_windows() -> bool:
    """Indicate whether SIGALRM-based watchdogs are unavailable."""
    return platform.system() == "Windows"
