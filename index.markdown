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
  </div>
</section>

<section class="recent-posts" style="margin-top: 5rem; margin-bottom: 3rem;">
  <h2 style="font-size: 1.8rem; margin-bottom: 1.5rem; border-bottom: 2px solid var(--border-color); padding-bottom: 0.5rem;">Recent Posts</h2>
  <div class="post-list" style="display: flex; flex-direction: column; gap: 1.5rem;">
    {% for post in site.posts limit:3 %}
      <article class="post-card" style="background: var(--card-bg); border: 1px solid var(--border-color); border-radius: 8px; padding: 1.5rem; transition: transform 0.2s, box-shadow 0.2s;">
        <h3 style="margin-top: 0; margin-bottom: 0.4rem; font-size: 1.3rem;">
          <a href="{{ post.url | relative_url }}" style="color: var(--text-color); text-decoration: none;">{{ post.title }}</a>
        </h3>
        <div style="font-size: 0.9rem; color: var(--text-muted); margin-bottom: 1rem;">{{ post.date | date: "%B %-d, %Y" }}</div>
        <p style="margin: 0; color: var(--text-muted); font-size: 0.95rem; line-height: 1.6;">{{ post.excerpt | strip_html | truncatewords: 25 }}</p>
      </article>
    {% else %}
      <p style="color: var(--text-muted); font-style: italic;">No posts published yet. Stay tuned!</p>
    {% endfor %}
  </div>
  
  {% if site.posts.size > 3 %}
  <div style="text-align: center; margin-top: 2rem;">
    <a href="{{ '/blog/' | relative_url }}" class="btn" style="display: inline-block; padding: 0.6rem 1.2rem; border-radius: 6px; background: transparent; border: 1px solid var(--border-color); color: var(--text-color); font-weight: 500; text-decoration: none; transition: background 0.2s;">View All Posts ➔</a>
  </div>
  {% endif %}
</section>
