layout: page
title: Industrial Bakery - Order & Inventory Management
description: A high-performance procedural C system optimizing industrial bakery logistics through advanced data structures.
tags: [C, Algorithms, Data Structures, Optimization]

This project, developed for the "Algorithms and Data Structures" course at Politecnico di Milano, implements a discrete-time simulation of an industrial bakery. It manages complex logistics, including recipe catalogs, expiring inventory, and prioritized order fulfillment.

**Final Grade: 30/30 cum laude**

## The Challenge
The system must handle high volumes of data with strict efficiency requirements:
- **Time-Discretization:** Every command advances the simulation clock.
- **Ingredients Refill:** Managing the refill of ingredients in the warehouse.    
- **Inventory Logic:** Ingredients must be picked using a **First-to-Expire** (FEFO) strategy.
- **Priority Shipping:** Orders are loaded onto delivery trucks based on a primary sort by **weight (descending)** and a secondary sort by **arrival time (ascending)**.

## Architectural Overview
To meet the performance constraints, I designed a hybrid architecture combining multiple data structures for $O(1)$ or $O(\log n)$ access times.

### 1. Recipe Catalog: Hash Table with Tombstones
I implemented a **Hash Table** using the **djb2 algorithm** for recipe lookups. To handle deletions without breaking the probe chain, I utilized **Tombstones**.
- **Efficiency:** Allows $O(1)$ average-case verification if a recipe exists before accepting an order.

### 2. Smart Inventory: Hash Table + Min-Heaps
The warehouse is a Hash Table where each bucket contains a **Min-Heap** of ingredient lots.
- **FEFO Strategy:** The Min-Heap ensures that the lot with the earliest expiration date is always at the root.
- **Automatic Cleanup:** The system performs a "lazy" cleanup, removing expired lots during the `check_ingredienti` phase.

### 3. Delivery Logistics: Max-Heap & Queues
Pending orders are managed across different states:
- **Waiting Queue:** A **Linked List** stores orders that lack sufficient ingredients, processed in chronological order upon every replenishment (`rifornimento`).
- **Shipping Dock:** A **Max-Heap** organizes ready-to-ship orders by weight to optimize the courier's capacity.

## Technical Highlights
- **Memory Management:** Implemented custom `free_lista` and `free_attesa` functions to ensure zero memory leaks during long-running simulations.
- **Collision Resolution:** Used open addressing with quadratic probing to minimize clustering in the Hash Tables.
- **Scalability:** All values (quantities, time, weights) are handled using 32-bit integers, supporting large-scale industrial simulations.

## Results & Learning
The project successfully passed all automated test suites, demonstrating:
- Ability to bridge mathematical complexity with low-level C implementation.
- Proficiency in selecting data structures based on specific access patterns (e.g., priority vs. chronological).
- Rigorous handling of edge cases, such as ingredient expiration and partial truck loads.
- **Performance Profiling**: Learned to identify and resolve performance bottlenecks and time expenses using **Valgrind** and **KCachegrind**.

> **Source Code:** [View on GitHub](https://github.com/domdegi/progetto-api-2024) *(Replace with your actual link)*weight: 999
---
