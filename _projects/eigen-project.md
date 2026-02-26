layout: page
title: Numerical Linear Algebra Applications in C++
description: C++ applications leveraging the Eigen library to solve Numerical Linear Algebra problems, featuring sparse matrix-based image processing and graph Laplacian spectral analysis.
tags: [C++, Eigen, Numerical Linear Algebra, Sparse Matrices, HPC]

Developed as part of the Numerical Linear Algebra challenges, this project showcases the power of the **Eigen** C++ library to mathematically model and solve complex computational problems. The repository is split into two main experiments: image convolution via sparse matrices and spectral graph theory.

## Part 1: Image Processing via Sparse Linear Systems
The first challenge involved applying 2D image filters (smoothing, sharpening, and edge detection) and restoring noisy images by translating traditional convolutional loops into a pure linear algebra formulation.

* **Sparse Matrix Construction:** Images were flattened into 1D row-major vectors. Various 2D convolution kernels (e.g., $3\times3$ Laplacian, $5\times5$ Gaussian) were mapped into massive `Eigen::SparseMatrix` objects using efficient Triplet insertion (`emplace_back`), reserving exact memory to prevent reallocation overhead.
* **Matrix-Vector Convolution:** Image filtering (e.g., sharpening) was executed as a highly optimized Sparse Matrix-Vector multiplication (`A * v`), utilizing the `stb_image` library to read and save the pixel data.
* **Iterative Solvers for Image Restoration:** To reverse image noise, I formulated a linear system $My = w$, where $M = 3I + A_3$. Because the underlying matrix $A_3$ was asymmetric, the system was solved using Eigen's **BiCGSTAB** (Biconjugate Gradient Stabilized) iterative solver paired with a `DiagonalPreconditioner`.
* **Interoperability:** Implemented an export pipeline to write the generated sparse matrices and vectors into the standard **Matrix Market** (`.mtx`) coordinate format.

## Part 2: Spectral Graph Analysis
The second experiment focused on extracting the algebraic and spectral properties of graphs using dense matrix operations.

* **Graph Laplacian:** Constructed an Adjacency Matrix ($A_g$) for a network, computed its degree vector to form a Diagonal Degree matrix ($D_g$), and derived the Graph Laplacian matrix ($L_g = D_g - A_g$).
* **Matrix Property Verification:** Implemented custom numerical checks to verify the symmetry of the Laplacian using the Frobenius norm of the difference with its transpose. I also created an algorithm to check for **Positive Definiteness** by calculating the determinants of all leading principal minors (Sylvester's criterion).
* **Eigenvalue Decomposition:** Utilized Eigen's `SelfAdjointEigenSolver` to decompose the symmetric Laplacian and extract the network's spectral properties, identifying the minimum and maximum eigenvalues.weight: 999
---
