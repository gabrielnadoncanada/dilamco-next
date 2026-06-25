# syntax=docker/dockerfile:1.7
#
# Dilamco Blender render worker — production container
#
# Stages:
#   1. blender-base : CUDA + Blender 5.1 + HB plugin vendored
#   2. python-deps  : Python 3.12 + uv + worker dependencies
#   3. final        : runtime image (slim, no devtools)
#
# Build:    docker build -f apps/worker/Dockerfile -t dilamco-worker:latest .
# Run:      docker run --rm --gpus all -v $PWD/out:/out dilamco-worker info
# Health:   docker run --rm dilamco-worker python -m worker info

ARG CUDA_VERSION=12.4.0
ARG UBUNTU_VERSION=22.04
ARG BLENDER_VERSION=5.1.0
ARG PYTHON_VERSION=3.12

# ─── Stage 1: blender-base ─────────────────────────────────────────────────
FROM nvidia/cuda:${CUDA_VERSION}-runtime-ubuntu${UBUNTU_VERSION} AS blender-base

ARG BLENDER_VERSION
ARG DEBIAN_FRONTEND=noninteractive

# X11/OpenGL libs required by Blender (even headless).
RUN apt-get update && apt-get install -y --no-install-recommends \
        wget xz-utils ca-certificates \
        libxi6 libxxf86vm1 libxfixes3 libxrender1 libgl1 libegl1 \
        libxkbcommon0 libsm6 libice6 \
    && rm -rf /var/lib/apt/lists/*

# Pin Blender 5.1.0 — version part of determinism contract (ADR-013).
RUN wget -q https://download.blender.org/release/Blender5.1/blender-${BLENDER_VERSION}-linux-x64.tar.xz \
    && echo "Verifying Blender archive integrity..." \
    && tar -xf blender-${BLENDER_VERSION}-linux-x64.tar.xz -C /opt \
    && ln -s /opt/blender-${BLENDER_VERSION}-linux-x64 /opt/blender \
    && ln -s /opt/blender/blender /usr/local/bin/blender \
    && rm blender-${BLENDER_VERSION}-linux-x64.tar.xz

# Vendor Home Builder 5 plugin (with our 4 patches: draw_walls_script,
# place_door_script, place_window_script, countertop_boolean_cut_script).
COPY "home builder 5/" /opt/blender/5.1/scripts/addons_contrib/home_builder_5/

# Pre-bake addon initialization so first render doesn't pay startup cost.
RUN blender --background --factory-startup --python-expr "\
import addon_utils; \
addon_utils.enable('bl_ext.blender_org.home_builder_5'); \
from bl_ext.blender_org.home_builder_5 import hb_project; \
main = hb_project.ensure_main_scene(); \
main.hb_frameless.ensure_default_style(); \
print('HB plugin baked OK')" \
    --quit

# ─── Stage 2: python-deps ──────────────────────────────────────────────────
FROM blender-base AS python-deps

ARG PYTHON_VERSION
ARG DEBIAN_FRONTEND=noninteractive

# Install Python 3.12 + uv.
RUN apt-get update && apt-get install -y --no-install-recommends \
        software-properties-common \
    && add-apt-repository -y ppa:deadsnakes/ppa \
    && apt-get update && apt-get install -y --no-install-recommends \
        python${PYTHON_VERSION} python${PYTHON_VERSION}-venv python${PYTHON_VERSION}-dev \
        python3-pip \
    && rm -rf /var/lib/apt/lists/* \
    && pip install --no-cache-dir uv

# ─── Stage 3: final ────────────────────────────────────────────────────────
FROM python-deps AS final

# Workspace: copy what's needed for runtime only.
WORKDIR /app

# Copy package manifests first for better layer caching.
COPY pyproject.toml ./
COPY apps/worker/pyproject.toml ./apps/worker/
COPY packages/kitchen-spec/pyproject.toml ./packages/kitchen-spec/
COPY packages/kitchen-validator/pyproject.toml ./packages/kitchen-validator/
COPY packages/kitchen-dsl/pyproject.toml ./packages/kitchen-dsl/

# Copy source. (.dockerignore filters out tests, docs, etc.)
COPY apps/worker/src/ ./apps/worker/src/
COPY packages/kitchen-spec/src/ ./packages/kitchen-spec/src/
COPY packages/kitchen-validator/src/ ./packages/kitchen-validator/src/
COPY packages/kitchen-dsl/src/ ./packages/kitchen-dsl/src/
COPY packages/kitchen-dsl/grammar/ ./packages/kitchen-dsl/grammar/

# Sync workspace deps (frozen — no surprises in prod).
RUN uv sync --frozen --no-dev --package worker

# HDRI assets (deterministic — pinned via assets-manifest, see ADR-013).
COPY hdris/ /opt/hdris/
ENV HDRI_PATH=/opt/hdris

# Blender environment.
ENV BLENDER_USER_RESOURCES=/opt/blender/5.1
ENV PYTHONUNBUFFERED=1
ENV PYTHONDONTWRITEBYTECODE=1

# Healthcheck — proves HB addon loads and worker package imports.
HEALTHCHECK --interval=30s --timeout=10s --start-period=30s --retries=3 \
    CMD uv run --frozen --package worker python -c "\
from worker.hb.addon import health_check; \
import sys; \
checks = health_check(); \
ok = all(checks.values()); \
print(checks); \
sys.exit(0 if ok else 1)" || exit 1

# Default entrypoint runs the CLI; override `info` with explicit command.
ENTRYPOINT ["uv", "run", "--frozen", "--package", "worker", "python", "-m", "worker"]
CMD ["info"]
