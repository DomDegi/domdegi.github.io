---
layout: page
title: High-Performance CUDA Batched Matrix Multiplication
description: A custom, highly optimized CUDA C++ kernel for executing batched matrix multiplications, featuring shared memory tiling, thread coarsening, and bank conflict avoidance.
tags: [C/C++, CUDA, HPC, GPU Computing, Parallel Computing]
---

Developed for the Parallel Computing course at Politecnico di Milano, this project involves the design and low-level optimization of a custom **CUDA C++ kernel** for batched matrix multiplication. 

## The Challenge
Standard matrix multiplication is fundamentally memory-bound. The objective was to build a generalized GPU kernel capable of multiplying batches of matrices (where $P_i = M \otimes N_i$) across an arbitrary batch size, maximizing GPU occupancy, memory bandwidth utilization, and raw computational throughput.

## Kernel Optimizations & Architecture
To bridge the gap between a naive implementation and highly tuned libraries like cuBLAS, I engineered a multi-level tiling architecture (`MatrixMulKernel2`) that aggressively reuses data within the GPU's memory hierarchy.

### 1. Shared Memory Tiling & Bank Conflict Avoidance
To reduce the number of slow Global Memory accesses, the kernel loads blocks of matrices $M$ and $N$ into the fast, on-chip Shared Memory (`__shared__`). 
* **Padding for Performance:** I explicitly padded the shared memory arrays (`Ms[TILE_M][TILE_K + 1]`) to alter the memory stride. This prevents **Shared Memory Bank Conflicts**, allowing the warp scheduler to serve memory requests simultaneously without serialization.

### 2. Thread Coarsening (Register Tiling)
Instead of the standard approach where one thread computes exactly one element of the output matrix, I implemented **Thread Coarsening** (also known as Register Tiling). 
* Each individual thread calculates a $2 \times 2$ micro-tile of the output matrix (`acc00`, `acc01`, `acc10`, `acc11`), storing intermediate accumulations directly in the GPU's ultra-fast hardware registers. This drastically increases the arithmetic intensity (compute-to-memory-access ratio) of the kernel.

### 3. Compiler-Level Optimizations
* **Strict Aliasing:** Applied the `__restrict__` qualifier to all pointer arguments, guaranteeing to the NVCC compiler that the input/output matrices do not overlap in memory, which unlocks more aggressive memory fetch optimizations.
* **Loop Unrolling:** Forced `#pragma unroll` on the inner micro-tile calculation loops to minimize branch overhead and improve the instruction pipeline.

> **Repository:** [View on GitHub](#) *(Add the actual link once public)*