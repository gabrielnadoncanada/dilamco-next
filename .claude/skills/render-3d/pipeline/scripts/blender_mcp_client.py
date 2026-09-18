from __future__ import annotations

import json
import socket
from pathlib import Path
from typing import Any


DEFAULT_HOST = "localhost"
DEFAULT_PORT = 9876


def is_running(host: str = DEFAULT_HOST, port: int = DEFAULT_PORT, timeout: float = 0.4) -> bool:
    try:
        with socket.create_connection((host, port), timeout=timeout):
            return True
    except OSError:
        return False


def send_command(
    command: dict[str, Any],
    host: str = DEFAULT_HOST,
    port: int = DEFAULT_PORT,
    timeout: float = 20.0,
) -> dict[str, Any]:
    payload = json.dumps(command).encode("utf-8")
    with socket.create_connection((host, port), timeout=timeout) as sock:
        sock.settimeout(timeout)
        sock.sendall(payload)
        chunks: list[bytes] = []
        while True:
            chunk = sock.recv(8192)
            if not chunk:
                break
            chunks.append(chunk)
            try:
                return json.loads(b"".join(chunks).decode("utf-8"))
            except json.JSONDecodeError:
                continue
    if not chunks:
        raise RuntimeError("BlenderMCP closed the connection without a response.")
    return json.loads(b"".join(chunks).decode("utf-8"))


def execute_code(
    code: str,
    host: str = DEFAULT_HOST,
    port: int = DEFAULT_PORT,
    timeout: float = 20.0,
) -> dict[str, Any]:
    return send_command(
        {"type": "execute_code", "params": {"code": code}},
        host=host,
        port=port,
        timeout=timeout,
    )


def open_blend(
    blend_path: str | Path,
    host: str = DEFAULT_HOST,
    port: int = DEFAULT_PORT,
    timeout: float = 30.0,
) -> dict[str, Any]:
    path = Path(blend_path).resolve()
    code = (
        "import bpy\n"
        f"bpy.ops.wm.open_mainfile(filepath=r'{path}')\n"
        "print('OPENED_BLEND', bpy.data.filepath)\n"
    )
    return execute_code(code, host=host, port=port, timeout=timeout)
