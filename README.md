# Personal Portfolio

This repository contains the source code for my personal portfolio, hosted on [GitHub Pages](https://domdegi.github.io/).

The site serves as a central hub for my professional identity, showcasing my academic background in Computer Engineering and High Performance Computing, and my technical projects.

## 🚀 Built With
- **[Jekyll](https://jekyllrb.com/)**: Static site generator used to transform plain text into a static website.
- **HTML/CSS/Vanilla JS**: A completely custom, lightweight theme built from scratch without relying on heavy frontend frameworks.
- **GitHub Pages**: For seamless CI/CD and hosting.

No third-party requests at runtime: the two typefaces (Inter and JetBrains Mono, both OFL) are self-hosted as variable `woff2` files rather than loaded from Google Fonts. The site is light-only.

## 📁 Repository Structure
- `index.html`: The single-page site — hero, about, projects, skills, CV and contact sections, linked by the anchor nav.
- `_layouts/`: The core HTML structure (`default.html` for the site chrome, `page.html` for project write-ups).
- `_projects/`: A Jekyll Collection where each Markdown file generates a dedicated project page and a card on the home page.
- `assets/`: Custom CSS, the self-hosted fonts, vanilla JS (`site.js` site-wide, `home.js` on the home page), images, and documents (CV PDF).

The CV PDF is not written here — [`DomDegi/cv`](https://github.com/DomDegi/cv) holds the LaTeX source and pushes the compiled PDF into this repository.

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
featured: true   # optional — promotes it to the three-up grid at the top
weight: 5        # optional — lower numbers sort first, unweighted projects go last
---
```

Featured projects are shown up front; everything else goes into the collapsed
"Everything else" list. The card on the home page and the dedicated project page
are generated automatically.
