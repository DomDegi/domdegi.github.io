---
layout: home
title: Blog & Notes
permalink: /blog/
---

# Blog & Notes

Here I collect my notes, thoughts, and progress on learning new technologies and concepts.

<div class="post-list">
  {% for post in site.posts %}
    <article class="post-item" style="margin-bottom: 2rem; border-bottom: 1px solid var(--border-color); padding-bottom: 1rem;">
      <h2 style="margin-bottom: 0.2rem;"><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h2>
      <span class="post-meta" style="color: var(--text-muted); font-size: 0.9rem;">{{ post.date | date: "%B %-d, %Y" }}</span>
      <p>{{ post.excerpt | strip_html | truncatewords: 30 }}</p>
    </article>
  {% endfor %}
</div>
