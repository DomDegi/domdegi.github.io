---
layout: page
title: Projects
permalink: /projects/
---

Welcome to my project portfolio. Below you will find a selection of my academic work, personal projects, and contributions to open source.

<div class="project-grid">
  {% for project in site.projects %}
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
