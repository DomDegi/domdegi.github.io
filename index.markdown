---
layout: default
title: Home
permalink: /
---

<section class="hero" style="align-items: flex-start; margin-top: 3rem;">
  <img src="{{ '/assets/images/profile-placeholder.jpg' | relative_url }}" alt="Domenico De Giorgio" class="hero-profile" style="width: 240px; height: 240px; flex-shrink: 0;" />
  <div class="hero-content">
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

    <div class="hero-actions" style="display: flex; gap: 1rem; margin-bottom: 1.5rem;">
      <a href="{{ '/projects/' | relative_url }}" class="btn" style="border: 1px solid var(--border-color); color: var(--text-color); padding: 0.7rem 1.4rem; border-radius: 6px; font-weight: 500; font-size: 0.95rem;">View Projects</a>
      <a href="{{ '/cv/' | relative_url }}" class="btn" style="border: 1px solid var(--border-color); color: var(--text-color); padding: 0.7rem 1.4rem; border-radius: 6px; font-weight: 500; font-size: 0.95rem;">Read CV</a>
    </div>

    <div class="hero-socials" style="display: flex; gap: 1.2rem; align-items: center;">
      <a href="mailto:{{ site.email }}" aria-label="Email" style="color: var(--text-color); opacity: 0.8; transition: opacity 0.2s;">
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
      </a>
      <a href="https://github.com/{{ site.github_username }}" aria-label="GitHub" target="_blank" rel="noopener noreferrer" style="color: var(--text-color); opacity: 0.8; transition: opacity 0.2s;">
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
      </a>
      <a href="https://www.linkedin.com/in/{{ site.linkedin_username }}" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer" style="color: var(--text-color); opacity: 0.8; transition: opacity 0.2s;">
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
      </a>
      <a href="https://www.instagram.com/{{ site.instagram_username }}" aria-label="Instagram" target="_blank" rel="noopener noreferrer" style="color: var(--text-color); opacity: 0.8; transition: opacity 0.2s;">
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
      </a>
    </div>
  </div>
</section>
