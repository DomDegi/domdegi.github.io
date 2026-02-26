---
layout: page
title: Personal Portfolio & Tech Blog
description: A responsive, static portfolio website built with Jekyll, featuring a custom theme, dark mode, and automated deployment.
tags: [Web, Jekyll, HTML/CSS, JavaScript]
---

This website was built from scratch to serve as a central hub for my academic projects, professional CV, and technical blog. It is designed to be lightweight, fast, and highly maintainable.

## Architecture & Technology Stack
Instead of relying on heavy CMS platforms or complex frontend frameworks, I opted for a **Static Site Generator (SSG)** approach to maximize performance and security.

* **Framework:** **Jekyll** (Ruby-based SSG), allowing for component-based layouts and Markdown-driven content management.
* **Frontend:** Pure HTML5, CSS3, and vanilla JavaScript. 
* **Hosting & CI/CD:** Hosted entirely on **GitHub Pages**, which automatically builds and deploys the site from the repository branch upon every commit.

## Key Technical Implementations

### Custom Theming & Dark Mode
I designed a custom, responsive CSS architecture using **CSS Variables (Custom Properties)** to manage the color palette. 
* Implemented a **Dark/Light Mode toggle** using vanilla JavaScript.
* The script reads the user's preference, updates the `data-theme` attribute on the root HTML element, and persistently stores the selection in the browser's `localStorage` to ensure a seamless experience across pages.

### Data-Driven Project Generation
Rather than hardcoding the project gallery, I utilized Jekyll's **Collections** and **Liquid templating**. 
* Each project is a distinct Markdown file containing YAML front matter (title, description, tags). 
* The `projects.markdown` page dynamically iterates over the `site.projects` collection to generate the grid of project cards, making future updates trivial.

### Responsive Design
The layout uses modern CSS techniques like **Flexbox** and **CSS Grid** to ensure the interface adapts fluidly to any screen size, from mobile devices to large desktop monitors.

> **Source Code:** [View on GitHub](https://github.com/DomDegi/domdegi.github.io)