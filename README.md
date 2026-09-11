# Personal Portfolio

This repository contains the source code for my personal portfolio, hosted on [GitHub Pages](https://domdegi.github.io/).

The site serves as a central hub for my professional identity, showcasing my academic background in Computer Engineering and High Performance Computing, and my technical projects.

## 🚀 Built With
- **[Jekyll](https://jekyllrb.com/)**: Static site generator used to transform plain text into a static website.
- **HTML/CSS/Vanilla JS**: A completely custom, lightweight theme built from scratch without relying on heavy frontend frameworks.
- **GitHub Pages**: For seamless CI/CD and hosting.

## 📁 Repository Structure
- `index.html`: The single-page site — hero, about, projects, skills, CV and contact sections, linked by the anchor nav.
- `_layouts/`: The core HTML structure (`default.html` for the site chrome, `page.html` for project write-ups).
- `_projects/`: A Jekyll Collection where each Markdown file generates a dedicated project page and a card on the home page.
- `_pages/`: Reserved for standalone pages (currently only a placeholder blog index).
- `assets/`: Custom CSS, vanilla JS for the theme toggle and home-page behaviour, images, and documents (CV PDF).

## 🛠️ Local Development

To run this site locally, ensure you have Ruby and Bundler installed.

1. Clone the repository:
   ```bash
   git clone https://github.com/DomDegi/DomDegi.github.io.git
   cd DomDegi.github.io
   ```
2. Install dependencies:
   ```bash
   bundle install
   ```
3. Start the Jekyll server:
   ```bash
   bundle exec jekyll serve
   ```
4. Navigate to `http://localhost:4000` in your browser.

## ✍️ Adding a Project

Create a new Markdown file in `_projects/` with front matter:

```yaml
---
layout: page
title: My Project
description: One-line summary shown on the card.
tags: [C++, HPC]
weight: 5   # optional — lower numbers sort first, unweighted projects go last
---
```

The card on the home page and the dedicated project page are generated automatically.
