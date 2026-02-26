---
layout: page
title: Advanced Monte Carlo Integration & Optimization Library
description: A high-performance C++ library for N-dimensional Monte Carlo integration, MCMC, and stochastic optimization.
tags: [C++, Monte Carlo, OpenMP, Optimization, HPC]
weight: 2
---

This project is a comprehensive C++ library designed to solve complex mathematical and engineering problems using advanced Monte Carlo integration and stochastic optimization algorithms. 

## The Challenge
Evaluating definite integrals over high-dimensional spaces or non-convex geometries is computationally expensive. The goal of this project was to build a highly parallelized, robust framework capable of executing multidimensional numerical integration and metaheuristic optimizations efficiently.

## Architectural Overview & Core Features
The system is built with a focus on modularity and high performance, featuring runtime mathematical expression parsing via the **muParserX** library.

### 1. Integration Engines
* **Classic & Importance Sampling:** Implemented baseline uniform sampling alongside Gaussian and Mixture Importance Sampling for significant variance reduction on smooth integrands.
* **Markov Chain Monte Carlo (MCMC):** Utilized the Metropolis-Hastings algorithm for efficient sampling in complex, high-dimensional domains with superior $O(1/N)$ convergence.
* **Arbitrary Polytopes:** Integrated with the **Qhull** library to support integration over arbitrary convex polytopes using half-space inequalities.

### 2. Stochastic Optimization
* **Particle Swarm Optimization (PSO):** Engineered a fast, parallelized PSO solver to find global minima in smooth, continuous landscapes.
* **Genetic Algorithm (GA):** Developed a robust GA featuring tournament selection, uniform crossover, and Gaussian mutation for non-smooth or multimodal landscapes.

## Real-World Engineering Applications
To prove the framework's capabilities, we developed two specialized physics-based applications:

* **Drone Center of Mass Optimization:** Combined PSO with Monte Carlo integration to optimize the placement and size of a hole in a 3D drone arm structure, successfully shifting its center of mass to a precise target coordinate with < 1% error.
* **Wind Farm Layout Simulation:** Optimized the placement of 15 wind turbines within a 1000x1000m area. The simulation uses Metropolis-Hastings integration to estimate farm power while accounting for Weibull wind distributions and aerodynamic wake effects, optimizing layouts via both PSO and GA.

## Technical Highlights
* **HPC & Concurrency:** Achieved significant performance scaling (~10x speedup on 8 cores) by parallelizing particle evaluations and implementing thread-safe Random Number Generation (RNG) using **OpenMP**.
* **Performance Profiling:** Utilized the Linux **perf** toolkit extensively to analyze CPU cycles, cache misses, and bottleneck functions, driving critical optimization decisions.
* **Data Visualization:** Automated the generation of convergence plots and 3D geometry renderings using **Gnuplot** scripts directly from the C++ output.

**Source Code:** [View on GitHub](https://github.com/benfrost-20/montecarlo-dgl)