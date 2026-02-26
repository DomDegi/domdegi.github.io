---
layout: default
title: Home
permalink: /
---

<section class="hero" style="align-items: center; margin-top: 3rem;">
  <div style="flex: 1; width: 100%;">
    <img src="{{ '/assets/images/profile-placeholder.jpg' | relative_url }}" alt="Domenico De Giorgio" style="width: 100%; height: auto; max-height: 550px; object-fit: cover; border-radius: 16px; border: 1px solid var(--border-color); box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);" />
  </div>
  <div class="hero-content" style="flex: 1;">
    <h1 style="font-size: 3rem; margin-bottom: 0.5rem;">Hello, I'm Domenico.</h1>
    <p class="hero-subtitle" style="font-size: 1.1rem; color: var(--text-muted); margin-bottom: 1.5rem; font-weight: 400;">
      Born in 2004 in Calabria, Southern Italy.
    </p>
    
    <div style="display: flex; flex-direction: column; gap: 1.2rem; margin-bottom: 2rem;">
      <div>
        <h3 style="font-size: 1.1rem; color: var(--accent-color); margin-bottom: 0.3rem; margin-top: 0;">Education</h3>
        <p style="margin: 0; font-size: 1rem; color: var(--text-color);">
          BSc in Computer Engineering & MSc Candidate in <strong>High Performance Computing</strong> at Politecnico di Milano.
        </p>
      </div>
      
      <div>
        <h3 style="font-size: 1.1rem; color: var(--accent-color); margin-bottom: 0.3rem; margin-top: 0;">Interests</h3>
        <p style="margin: 0; font-size: 1rem; color: var(--text-color);">
          Bridging advanced mathematical theories with scalable software solutions through <strong>Scientific Computing</strong>, <strong>Mathematical Modeling</strong>, <strong>Software Engineering</strong>, and <strong>Statistics</strong>.
        </p>
      </div>

      <div>
        <h3 style="font-size: 1.1rem; color: var(--accent-color); margin-bottom: 0.3rem; margin-top: 0;">Future Prospects</h3>
        <p style="margin: 0; font-size: 1rem; color: var(--text-color);">
          Dedicated to expanding my expertise in scientific computing and mathematical modellization of current problems in physics and engineering.
        </p>
      </div>
    </div>

    <div class="hero-actions" style="display: flex; gap: 1rem;">
      <a href="{{ '/projects/' | relative_url }}" class="btn" style="border: 1px solid var(--border-color); color: var(--text-color); padding: 0.7rem 1.4rem; border-radius: 6px; font-weight: 500; font-size: 0.95rem;">View Projects</a>
      <a href="{{ '/cv/' | relative_url }}" class="btn" style="border: 1px solid var(--border-color); color: var(--text-color); padding: 0.7rem 1.4rem; border-radius: 6px; font-weight: 500; font-size: 0.95rem;">Read CV</a>
    </div>
  </div>
</section>
