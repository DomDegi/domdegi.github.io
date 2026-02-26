---
layout: page
title: Galaxy Trucker Multiplayer Digital Adaptation
description: A Java-based client-server digital board game utilizing the MVC pattern, RMI/Sockets, and JavaFX.
tags: [Java, MVC, Networking, JavaFX, Maven, JUnit5]
---

This project is a complete digital transposition of the complex board game *Galaxy Trucker*. Developed as a comprehensive Software Engineering project, it features a highly decoupled **Client-Server architecture** utilizing the classic **Model-View-Controller (MVC)** paradigm.

*Note: The repository (`IS25-AM06`) is currently private to comply with academic integrity policies.*

## Architecture & Technology Stack
The game was engineered to support multiple concurrent players in a robust, fault-tolerant environment.

* **Core Language:** Pure Java (JDK 21+).
* **Build System:** Project structure, dependency management, and build lifecycles were entirely orchestrated using **Maven**.
* **Quality Assurance:** Rigorous unit and integration testing implemented with **JUnit 5** to ensure the complex game rules and network protocols functioned flawlessly.
* **MVC & "Fat Client" Paradigm:** The Server holds the definitive *Model* (game state and validation logic). The clients are designed as "Fat Clients," meaning they maintain a synchronized copy of the view state to render the game locally, significantly reducing network payload and server computational load.

## Dual Networking Protocols
A major architectural requirement was abstracting the network layer so the game logic remains agnostic to the connection type. The system supports two distinct communication protocols seamlessly:
1. **Java RMI (Remote Method Invocation):** Utilizing Java's native high-level API for seamless remote object manipulation.
2. **Custom TCP Sockets:** Implemented a custom serialization and message-passing protocol over raw sockets for clients requiring lightweight or firewall-friendly connections.

## Dual User Interfaces
To provide accessibility across different environments, the client application supports two completely distinct rendering engines, both hooking into the same underlying client-side controller logic:
* **Graphical User Interface (GUI):** A rich, interactive, and fully responsive visual interface built with **JavaFX**.
* **Text-Based User Interface (TUI):** A terminal-based interface utilizing ANSI escape codes for rendering the game board, tiles, and menus directly in the command line.

## Key Technical Challenges Addressed
* **Advanced Concurrency & Multi-threading:** Handled the rigorous complexities of multiple clients modifying the game state simultaneously. Implemented thread-safe collections and synchronization locks to prevent race conditions during real-time tile grabbing phases.
* **Network Resilience:** Engineered robust ping/pong heartbeat mechanisms to detect client disconnections, gracefully handle player reconnections, and pause/resume game states without crashing the server.
* **State Synchronization:** Designed an efficient broadcast system using the Observer pattern to push localized state updates to all connected Fat Clients whenever the central Model changes.

> **Repository:** [View on GitHub](https://github.com/DomDegi/IS25-AM06) *(Currently Private)*weight: 999
