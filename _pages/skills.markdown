---
layout: page
title: Technical Skills
permalink: /skills/
---

This page serves as a comprehensive overview of my technical stack. Rather than just listing languages, you can see exactly **where and how** I applied these technologies in my engineering projects.

<h2 style="margin-top: 2rem; border-bottom: 2px solid var(--border-color); padding-bottom: 0.5rem;">High Performance Computing & C++</h2>

<div class="project-grid">
  <a href="{{ '/projects/adaptive-spacetime-fem-solver/' | relative_url }}" class="project-card" style="text-decoration: none;">
    <div style="display: flex; align-items: center; gap: 0.8rem; margin-bottom: 1rem;">
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--accent-color)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>
      <h3 style="margin: 0; font-size: 1.25rem; color: var(--text-color);">C++, deal.II & MPI</h3>
    </div>
    <p class="project-desc" style="margin-bottom: 1rem;">Applied advanced C++ templates and the deal.II library alongside MPI for distributed solving of time-dependent PDEs.</p>
    <div style="font-size: 0.9rem; font-weight: 500; color: var(--accent-color);">➔ See Adaptive FEM Solver Project</div>
  </a>

  <a href="{{ '/projects/montecarlo-dgl/' | relative_url }}" class="project-card" style="text-decoration: none;">
    <div style="display: flex; align-items: center; gap: 0.8rem; margin-bottom: 1rem;">
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--accent-color)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>
      <h3 style="margin: 0; font-size: 1.25rem; color: var(--text-color);">C++ & OpenMP</h3>
    </div>
    <p class="project-desc" style="margin-bottom: 1rem;">Engineered highly concurrent stochastic optimization algorithms using OpenMP for shared-memory parallelization.</p>
    <div style="font-size: 0.9rem; font-weight: 500; color: var(--accent-color);">➔ See Monte Carlo Library Project</div>
  </a>
</div>

<h2 style="margin-top: 3rem; border-bottom: 2px solid var(--border-color); padding-bottom: 0.5rem;">Low-Level Systems & Hardware</h2>

<div class="project-grid">
  <a href="{{ '/projects/vhdl-filter-design/' | relative_url }}" class="project-card" style="text-decoration: none;">
    <div style="display: flex; align-items: center; gap: 0.8rem; margin-bottom: 1rem;">
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#f39c12" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect><rect x="9" y="9" width="6" height="6"></rect><line x1="9" y1="1" x2="9" y2="4"></line><line x1="15" y1="1" x2="15" y2="4"></line><line x1="9" y1="20" x2="9" y2="23"></line><line x1="15" y1="20" x2="15" y2="23"></line><line x1="20" y1="9" x2="23" y2="9"></line><line x1="20" y1="14" x2="23" y2="14"></line><line x1="1" y1="9" x2="4" y2="9"></line><line x1="1" y1="14" x2="4" y2="14"></line></svg>
      <h3 style="margin: 0; font-size: 1.25rem; color: var(--text-color);">VHDL & FPGA Design</h3>
    </div>
    <p class="project-desc" style="margin-bottom: 1rem;">Synthesized custom FSMs and optimized datapaths for hardware accelerators running on strict clock constraints.</p>
    <div style="font-size: 0.9rem; font-weight: 500; color: var(--accent-color);">➔ See 1D Filtering Hardware Project</div>
  </a>

  <a href="{{ '/projects/order-management/' | relative_url }}" class="project-card" style="text-decoration: none;">
    <div style="display: flex; align-items: center; gap: 0.8rem; margin-bottom: 1rem;">
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#f39c12" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"></path></svg>
      <h3 style="margin: 0; font-size: 1.25rem; color: var(--text-color);">C, Algorithms & Profiling</h3>
    </div>
    <p class="project-desc" style="margin-bottom: 1rem;">Implemented complex data structures in pure C. Extensively profiled memory and CPU cycles using Valgrind, KCachegrind, and perf.</p>
    <div style="font-size: 0.9rem; font-weight: 500; color: var(--accent-color);">➔ See Logistics Simulation Project</div>
  </a>
</div>

<h2 style="margin-top: 3rem; border-bottom: 2px solid var(--border-color); padding-bottom: 0.5rem;">Software Engineering & Fullstack Web</h2>

<div class="project-grid">
  <a href="{{ '/projects/java-game/' | relative_url }}" class="project-card" style="text-decoration: none;">
    <div style="display: flex; align-items: center; gap: 0.8rem; margin-bottom: 1rem;">
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#e74c3c" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polygon points="10 8 16 12 10 16 10 8"></polygon></svg>
      <h3 style="margin: 0; font-size: 1.25rem; color: var(--text-color);">Java, MVC & Networking</h3>
    </div>
    <p class="project-desc" style="margin-bottom: 1rem;">Applied robust OOP patterns (MVC, Observer) and synchronized real-time multi-threading over custom TCP Sockets and RMI.</p>
    <div style="font-size: 0.9rem; font-weight: 500; color: var(--accent-color);">➔ See Multiplayer Game Project</div>
  </a>

  <a href="{{ '/projects/grade-management/' | relative_url }}" class="project-card" style="text-decoration: none;">
    <div style="display: flex; align-items: center; gap: 0.8rem; margin-bottom: 1rem;">
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#e74c3c" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path></svg>
      <h3 style="margin: 0; font-size: 1.25rem; color: var(--text-color);">Java EE & JavaScript (RIA)</h3>
    </div>
    <p class="project-desc" style="margin-bottom: 1rem;">Built decopuled web architectures with role-based access control, MySQL DAO integration, and responsive asynchronous frontends.</p>
    <div style="font-size: 0.9rem; font-weight: 500; color: var(--accent-color);">➔ See Grade Management Project</div>
  </a>
</div>

<h2 style="margin-top: 3rem; border-bottom: 2px solid var(--border-color); padding-bottom: 0.5rem;">Other Core Competencies</h2>

<div style="display: flex; flex-wrap: wrap; gap: 1rem; margin-top: 1.5rem;">
  <span class="tag" style="background: var(--card-bg); padding: 0.5rem 1rem; font-size: 1rem;">Python</span>
  <span class="tag" style="background: var(--card-bg); padding: 0.5rem 1rem; font-size: 1rem;">MATLAB</span>
  <span class="tag" style="background: var(--card-bg); padding: 0.5rem 1rem; font-size: 1rem;">SQL & Relational Databases</span>
  <span class="tag" style="background: var(--card-bg); padding: 0.5rem 1rem; font-size: 1rem;">Git & Agile Methodologies</span>
</div>
<div style="display: flex; flex-wrap: wrap; gap: 1rem; margin-top: 1rem;">
  <span class="tag" style="background: var(--card-bg); padding: 0.5rem 1rem; font-size: 1rem; border: 1px solid var(--border-color);">Quantum Mechanics</span>
  <span class="tag" style="background: var(--card-bg); padding: 0.5rem 1rem; font-size: 1rem; border: 1px solid var(--border-color);">Thermodynamics</span>
  <span class="tag" style="background: var(--card-bg); padding: 0.5rem 1rem; font-size: 1rem; border: 1px solid var(--border-color);">Finite Element Analysis (FEM)</span>
</div>
