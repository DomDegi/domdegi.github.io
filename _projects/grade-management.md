---
layout: page
title: Grade Management Web Application
description: A full-stack Java EE & JavaScript system for university exam management, featuring a decoupled RIA architecture.
tags: [Java, JavaScript, SQL, Web, Fullstack]
---

Developed as part of the "Tecnologie Informatiche per il Web" course at Politecnico di Milano, this project implements a complete system for managing university exam sessions (appelli), student registrations, and grade verbalization.

To explore different web paradigms, the system was developed in two entirely distinct versions, each with its own repository.

## The Two Implementations

### 1. Pure HTML Version (Server-Side Rendering)
This version generates dynamic content strictly on the server before sending it to the client.
* **Technology:** Java EE (Servlets) combined with **Thymeleaf**, a modern server-side Java template engine.
* **Approach:** Traditional multi-page application. Thymeleaf adds dynamicity by injecting backend data directly into the HTML templates, minimizing client-side scripting.
* **Source Code:** [View Pure HTML Version on GitHub](https://github.com/DomDegi/cristianelli_degiorgioTIW2425)

### 2. RIA Version (Rich Internet Application)
This version decouples the frontend from the backend, providing a fluid, app-like user experience.
* **Technology:** Pure HTML/CSS/JavaScript on the frontend, with Java EE (Servlets) on the backend.
* **Approach:** Single-page-like behavior. The frontend makes asynchronous **AJAX** calls to the server. The backend processes the logic and returns JSON responses using the **Gson** library. While not strictly a standard REST API, it utilizes RESTful principles for lightweight, asynchronous data exchange.
* **Source Code:** [View RIA Version on GitHub](https://github.com/domdegi/tiw-js-2425)

## Major Challenges & Technical Implementations

Regardless of the rendering paradigm, building a robust academic management system required solving two major backend engineering challenges:

### 1. Database Structuring & Data Integrity
The core difficulty was designing a normalized relational schema that could accurately track the complex lifecycle of an exam grade.
* **The Schema:** Included entities for Users, Courses, Appelli (Exam Sessions), and Enrollments.
* **State Machine Logic:** Grades needed to securely transition through exact strict states: from "Not Inserted" to "Inserted" and finally to "Verbalized" (locking the session).
* **Data Layer:** A MySQL database accessed via the **DAO (Data Access Object)** pattern to keep SQL queries completely isolated from the business logic.

### 2. Security and Role-Based Access Control (RBAC)
Structuring the pages securely was paramount, as the system strictly distinguishes between **Students** and **Professors**.
* **Access Control:** Implemented custom Java **Filters** to intercept requests, validate session tokens, and ensure that only Professors could reach Servlets responsible for creating sessions, modifying grades, or verbalizing exams.
* **Routing Security:** In both the Thymeleaf routing and the AJAX endpoints, rigorous server-side validation was implemented to prevent privilege escalation and unauthorized data manipulation.

## Project Documentation
The entire architectural and user flow process for both versions was heavily documented prior to coding, using **IFML (Interaction Flow Modeling Language)** for UI mapping, **ER Diagrams** for the data model and **sequence diagrams** for the interaction flow.weight: 999
