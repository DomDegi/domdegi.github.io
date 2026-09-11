---
layout: page
title: AstraLog-HPC Telemetry Rule Engine
description: A Python/Polars telemetry alarm engine for a simulated ESA call for tenders, with a zero-touch CI/CD pipeline spanning GitHub Actions and CINECA's GitLab.
tags: [Python, Polars, CI/CD, GitHub Actions, Docker, DevOps, HPC, Software Engineering]
featured: true
weight: 2
---

Built for the **Software Engineering for HPC** course (A.Y. 2025-2026) at Politecnico di Milano, AstraLog-HPC is the *Full Track* response to a simulated **Call for Tenders issued by the European Space Agency**. The system ingests large satellite telemetry streams, evaluates configurable alarm rules against them, and emits deterministic alarm reports at high throughput.

It was a two-person project with Leonardo Pelorosso, developed with a peer-review methodology — architectural decisions and deliverables were cross-validated by both members. My role was **Software Architect & DevOps**: system architecture and UML, OOP implementation, multi-threaded parallelization and profiling, scalability analysis, the CD pipelines, and the automated documentation infrastructure.

## Architecture
The design is built strictly around the **Strategy** and **Dependency Inversion** patterns. The orchestrator depends only on abstract base classes — `ITelemetryReader`, `IRulesEngine`, `IStateMemory`, `IOutputWriter` — which cleanly separates physical data handling from logical rule evaluation and lets any stage be swapped without touching the core.

The rules themselves are non-trivial: beyond simple thresholds, the engine handles **stateful streak rules** (N consecutive breaches), **step-difference rules** comparing against previous values, and **correlation rules** requiring several conditions to hold simultaneously at the same timestamp. Streak counters are namespaced by `rule_id + sensor_id` so two rules watching the same sensor cannot corrupt each other's state.

## Parallelization & Performance
The original implementation used single-threaded Pandas and did not scale. Migrating to a **Polars / Rust multi-threaded architecture** moved the per-row Python loops into vectorized operations executed entirely in C/Rust, sidestepping the GIL.

* **Batch-size tuning:** scalability testing showed the optimum is hardware-dependent — 750,000 rows locally, but **200,000 rows on Galileo100**, where tighter batching prevents L3-cache misses and keeps 32 cores continuously fed.
* **Result:** near-linear scalability and roughly **850,000 rows/second** on the full CINECA Galileo100 cluster (32 cores, 64 GB RAM) — a **reduction in execution time of over 97%** against the Pandas baseline.
* **Determinism:** output is sorted on a fixed key so two identical input streams always produce byte-identical files, regardless of how Polars schedules its threads internally.

## CI/CD & DevOps
The pipeline is built on "defense in depth" and spans two platforms:

* **Quality & security gates:** every push to `main` runs `black` and `ruff` as hard merge-blockers (even though developers already have local `pre-commit` hooks), plus **CodeQL** semantic analysis and the full `pytest` suite with coverage reported to **Codecov**.
* **Continuous deployment:** a production Docker image is built with layer caching and pushed to the GitHub Container Registry — then the pipeline spins that exact image up in isolation and runs the test suite inside it, so the production artifact is validated before it ever reaches the cluster.
* **Automated releases:** Conventional Commits drive **Semantic Release**, which computes the next SemVer tag, generates the changelog, and publishes the GitHub Release with no human intervention.
* **Cross-platform mirroring:** the repository is mirrored to CINECA's internal GitLab, where a runner converts the Docker image into a native **Singularity** `.sif` for the HPC nodes. Since GitHub Actions cannot reach the cluster directly, the workflow polls the GitLab REST API to surface remote failures back in GitHub — a single pane of glass over both halves of the pipeline.
* **Self-compiling documentation:** every successful commit regenerates the `pdoc` API reference and recompiles the LaTeX design document to PDF in a TeX Live container, publishing both to GitHub Pages.

> **Source Code:** [View on GitHub](https://github.com/DomDegi/DeGiorgioPelorosso) · **[Live documentation](https://domdegi.github.io/DeGiorgioPelorosso/index.html)**
