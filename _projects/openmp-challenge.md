layout: page
title: Life without Death Parallel Simulation
description: A highly optimized HPC implementation of the "Life without Death" cellular automaton using OpenMP, focusing on cache locality and dynamic parallelization.
tags: [C/C++, OpenMP, HPC, Parallel Computing, Optimization]

This project consists of a parallel and hyper-optimized implementation of **Life without Death**, a variant of John Conway's famous *Game of Life* cellular automaton. The main objective was to maximize computational throughput and reduce execution times for simulations on large grids by exploiting multi-core architectures via **OpenMP**.

## Parallelization Strategies (OpenMP)
To achieve maximum speedup, the core of the simulation (`evolve_step_parallel`) was parallelized and refined through several iterations:

* **Dynamic Scheduling & Loop Collapse:** The two outermost `for` loops were parallelized using the `collapse(2)` clause to distribute iterations uniformly across all cells among the threads. A *dynamic* scheduling approach (which showed similar results to *guided* scheduling) was chosen to dynamically balance the load, since the automaton's evolution generates non-uniform computational zones.
* **Reduction Variables:** To safely and efficiently track the automaton's state changes without causing data races or incurring lock-based bottlenecks, specific `reduction` variables were introduced.

## Architectural & Algorithmic Optimizations
Beyond inserting OpenMP directives, the source code was deeply reorganized to "assist" the underlying hardware:

* **Cache Locality Optimization:** The iteration order of the `for` loops within the evolution function was inverted to ensure contiguous memory access. This drastically reduced *cache misses* and maximized CPU cache utilization.
* **Branch Pruning & Fast-Paths:** The computational logic was streamlined to avoid unnecessary operations:
  * Introduced a preemptive check to see if a cell is "dead" before computing neighbors and hue, saving precious clock cycles.
  * Added a quick check on neighbors' hues to bypass redundant recomputations.
  * Removed conditional checks on "survived cells" that proved superfluous for the specific rules of this automaton.

## Trade-off Analysis
A fundamental part of HPC optimization is analyzing what *does not* work. The experiments demonstrated that:
* **Static Assignment** of tasks produced less speedup due to the highly conditional and unbalanced behavior of the automaton's loops.
* **Nested Parallelism** in the inner loops degraded overall performance due to the low number of available threads and the excessive overhead of creating and managing thread teams.

> **Repository:** [View on GitHub](https://github.com/BENfrost-20/parallel_challenge_2) (private for now)weight: 999
---
