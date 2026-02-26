---
layout: page
title: Projects
permalink: /projects/
---

Welcome to my project portfolio. Below you will find a selection of my academic work, personal projects, and contributions to open source.

<details style="margin-bottom: 2rem;">
  <summary style="cursor: pointer; font-weight: 600; font-size: 1.05rem; color: var(--text-color); margin-bottom: 0.5rem; user-select: none;">Filter Projects by Tags</summary>
  <div class="filter-controls" style="display: flex; gap: 0.5rem; flex-wrap: wrap; margin-top: 1rem;">
    <button class="filter-btn active" data-filter="all" style="padding: 0.4rem 1rem; border-radius: 20px; border: 1px solid var(--border-color); background: var(--accent-color); color: #fff; cursor: pointer; font-size: 0.9rem;">All</button>
    
    {% assign all_tags = "" | split: "," %}
    {% for project in site.projects %}
      {% for tag in project.tags %}
        {% assign all_tags = all_tags | push: tag %}
      {% endfor %}
    {% endfor %}
    {% assign unique_tags = all_tags | uniq | sort %}
    
    {% for tag in unique_tags %}
      <button class="filter-btn" data-filter="{{ tag | downcase }}" style="padding: 0.4rem 1rem; border-radius: 20px; border: 1px solid var(--border-color); background: var(--card-bg); color: var(--text-color); cursor: pointer; font-size: 0.9rem; transition: background 0.2s;">{{ tag }}</button>
    {% endfor %}
  </div>
</details>

<div class="project-grid">
  {% assign sorted_projects = site.projects | sort: 'weight' %}
  {% for project in sorted_projects %}
    <a href="{{ project.url | relative_url }}" class="project-card" style="text-decoration: none;">
      <h3 class="project-title">{{ project.title }}</h3>
      <p class="project-desc">{{ project.description }}</p>
      <div class="project-tags">
        {% for tag in project.tags %}
          <span class="tag">{{ tag }}</span>
        {% endfor %}
      </div>
    </a>
  {% endfor %}
</div>

<script>
document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.filter-btn');
  const cards = document.querySelectorAll('.project-card');

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      // Reset styles
      buttons.forEach(b => {
        b.classList.remove('active');
        b.style.background = 'var(--card-bg)';
        b.style.color = 'var(--text-color)';
      });
      // Set active style
      btn.classList.add('active');
      btn.style.background = 'var(--accent-color)';
      btn.style.color = '#fff';

      const filter = btn.getAttribute('data-filter');

      cards.forEach(card => {
        if (filter === 'all') {
          card.style.display = 'flex';
        } else {
          // Extract tags from the card
          const tags = Array.from(card.querySelectorAll('.tag')).map(t => t.textContent.toLowerCase());
          if (tags.includes(filter)) {
            card.style.display = 'flex';
          } else {
            card.style.display = 'none';
          }
        }
      });
    });
  });
});
</script>
