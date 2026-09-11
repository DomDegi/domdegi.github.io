# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

A Jekyll static site published at https://domdegi.github.io — personal portfolio / CV / project showcase for Domenico De Giorgio (Computer Engineering BSc, MSc candidate in HPC at Politecnico di Milano).

Everything except the individual project write-ups lives on **one page**. `index.html` is that page; the nav links are in-page anchors, not separate documents.

## Commands

```bash
bundle install                  # install gems into vendor/bundle (see .bundle/config)
bundle exec jekyll serve        # dev server with live reload at http://localhost:4000
bundle exec jekyll build        # one-off build into _site/
```

There is no test suite or linter — the only verification is rendering the site.

**Ruby is not installed on this machine** (NixOS, no `ruby`/`bundle` on PATH). To build or preview without installing a toolchain:

```bash
nix-shell -p jekyll rubyPackages.jekyll-feed rubyPackages.jekyll-seo-tag rubyPackages.jekyll-sitemap \
  --run "jekyll build --destination /tmp/site"
nix-shell -p jekyll rubyPackages.jekyll-feed rubyPackages.jekyll-seo-tag rubyPackages.jekyll-sitemap \
  --run "jekyll serve --port 4321"
nix-shell -p chromium --run "chromium --headless --no-sandbox --hide-scrollbars \
  --virtual-time-budget=4000 --window-size=1280,3400 --screenshot=/tmp/shot.png http://127.0.0.1:4321/"
```

One caveat when verifying this way: **IntersectionObserver never re-fires after a programmatic scroll in headless Chromium** — the nav scrollspy cannot be verified this way and must be checked in a real browser.

**Verify against Jekyll 3.10, not just 4.x.** GitHub Pages still builds with Jekyll 3.10 and Liquid 4.0.4, which is stricter than the Jekyll 4.x in nixpkgs. Liquid that builds locally can fail the deploy — most notably **`where_exp` cannot parse compound `and` / `or` conditions** on Pages (`Liquid syntax error: Expected end_of_string but found id`); split them into single-condition steps. A failed Pages build creates no deployment at all, so the live site silently stays on the previous commit:

```bash
# does this commit actually build the way Pages will?
rm -rf /tmp/j3src && mkdir -p /tmp/j3src
tar -c --exclude=.git --exclude=Gemfile --exclude=.bundle --exclude=vendor . | tar -x -C /tmp/j3src
(cd /tmp/j3src && nix-shell -p rubyPackages.jekyll rubyPackages.jekyll-feed rubyPackages.jekyll-seo-tag \
  rubyPackages.jekyll-sitemap rubyPackages.kramdown-parser-gfm \
  --run "unset BUNDLE_GEMFILE; JEKYLL_NO_BUNDLER_REQUIRE=true jekyll build --source /tmp/j3src --destination /tmp/j3site")

# did the push actually deploy? compare the newest sha here against git rev-parse HEAD
curl -s "https://api.github.com/repos/DomDegi/domdegi.github.io/deployments?per_page=1" | grep '"sha"'
```

The Gemfile must be excluded from that copy or Bundler tries to resolve `minima` and aborts.


`_config.yml` is *not* hot-reloaded — a change there needs the serve process restarted.

`_config.yml` carries an `exclude:` list for `CLAUDE.md` and `README.md`. Without it Jekyll copies them straight through and they are served publicly at `/CLAUDE.md` and `/README.md` — anything added here is world-readable unless it is excluded.

## Deployment

Pushing to `main` is the deploy. GitHub Pages runs its own default Jekyll build from the branch — the site is *not* built by a workflow, which is why `Gemfile` pins `github-pages` rather than `jekyll` directly (the `gem "jekyll"` line is deliberately commented out). Only plugins on the GitHub Pages allowlist will work; three are enabled: `jekyll-feed`, `jekyll-seo-tag` and `jekyll-sitemap`.

There is no `.github/workflows/` here, and adding one that deploys Pages would take the build away from the default one and change the deployment model for the whole site — don't.

`assets/docs/cv_domenico_degiorgio.pdf` is **written by another repository**, not by anything here. [`DomDegi/cv`](https://github.com/DomDegi/cv) holds the LaTeX source; a push there compiles it and commits the PDF into this repo. So edit the CV there, never the PDF here, and expect occasional commits authored by `github-actions[bot]` — pull before pushing or you will hit a non-fast-forward.

## Architecture

**`index.html` is the whole site.** Hero → About → Projects → Skills → CV → Contact, each a `<section>` with an `id`. It is `.html`, not `.markdown`, on purpose: the content is all hand-written HTML, and keeping it out of kramdown avoids the indentation rules that mangle HTML blocks inside Markdown. Project detail pages under `_projects/` are the only other real documents.

**Nav is anchor-driven.** `_config.yml` holds a `nav_links` list (`name` + `anchor`); `_layouts/default.html` loops it and emits `href="/{{ anchor }}"` so the links also work from a project detail page. Adding a section means adding the `<section id="...">` *and* the `nav_links` entry. `assets/js/home.js` runs an IntersectionObserver scrollspy that toggles `.is-active` on the matching link via its `data-nav` attribute.

**Layouts:** `default.html` is the chrome (head/meta, sticky header, footer, scripts); `page.html` wraps it for project pages, adding a back-link to `/#projects`, the title, and the front-matter tags as chips. `home.js` is loaded only on `/`.

**Projects are a Jekyll collection** (`collections.projects.output: true`). Each `_projects/*.md` has `title`, `description`, `tags: [...]`, an optional `featured: true` and an optional numeric `weight`. `index.html` pulls the featured ones into a three-up `.featured-grid`, then puts everything else behind a collapsed native `<details>`; within each group `weight` sorts ascending and unweighted projects go last. Adding a project = adding one Markdown file.

There is no tag filter any more — cards display their own tags as inert chips. The vestigial `[hidden] { display: none !important; }` rule near the top of the stylesheet is left over from it (the UA `[hidden]` rule loses to `.project-card { display: flex }`).

Collection pages use the default permalink, so project URLs end in `.html` (`/projects/adaptive-spacetime-fem-solver.html`).

**Styling** is `assets/css/main.css`: a self-hosted `@font-face` block, then the hand-written rules, then a generated syntax-highlighting block at the end. Page content carries no inline `style=` attributes — everything is class-based (there are a few one-line utilities such as `.text-center` for the cases that used to be inline), so a visual change belongs in the stylesheet.

The palette is white + a pastel blue band with five rotating accents, defined as custom properties on `:root`. **The site is light-only** — the dark theme and its toggle were removed deliberately (the design did not hold up); `color-scheme: light` on `:root` keeps form controls and scrollbars light for visitors whose OS is dark. `--footer-band` and `--on-band` / `--on-accent` are holdovers from the two-theme era but are still the tokens the band and its foreground read from.

`assets/js/site.js` (loaded on every page) only syncs the `.at-top` header class; `assets/js/home.js` (loaded on `/` only) is the nav scrollspy. There is no inline script in `<head>`.

**The "everything else" drawer** unfurls from under its toggle, animated in `home.js`. Three things about it are load-bearing and were each arrived at by breaking them first:

- It is **not** the pure-CSS `::details-content` + `interpolate-size` recipe. **Firefox does not support `interpolate-size`**, so that version snapped open there — which is the browser this is developed in. The JS animates `height` and the block padding together (the drawer is `border-box`, so it cannot render shorter than its own padding, and would otherwise start ~50px tall).
- `.more-projects__drawer` exists **only** to be the box whose height is animated. Animating the grid directly compresses its rows, so the cards squash instead of being revealed. Don't collapse the wrapper away.
- The animation doesn't fill forwards, so `home.js` parks the inline style on the end state as soon as it starts; without that the drawer snaps shut for one frame exactly as it finishes opening. `overflow: hidden` is applied only while animating (`.is-animating`), because the cards' hover shadow has to paint outside the drawer once it has settled.

`prefers-reduced-motion` is checked in the handler rather than left to CSS — the global `transition: none` rule does not touch Web Animations.

**The `<head>` is mostly `{% seo %}`.** `jekyll-seo-tag` emits the `<title>`, description, canonical, Open Graph, Twitter and JSON-LD tags from `_config.yml` — never hand-write those in `default.html` or they are emitted twice. Two config details are load-bearing: the social card is set through `defaults` because seo-tag reads `page.image`, not a site-level `image` key; and there is deliberately no `twitter:` block, because seo-tag would then emit an empty `twitter:site` and a nonsense `twitter:creator` built from `site.author`.

**Fonts are self-hosted** in `assets/fonts/` — one variable woff2 per family covering every weight, latin and latin-ext subsets, under the OFL (`assets/fonts/LICENSE.txt`). There is no Google Fonts request. If a family or weight changes, the `@font-face` block at the top of `main.css` and the two `<link rel="preload">` tags in `default.html` both need updating.

## Known rough edges

- Project write-ups contain LaTeX (`$...$`) but no MathJax/KaTeX is loaded, so it renders literally. Left as-is deliberately.
- There is no blog. `_pages/blog.markdown` used to declare a non-existent `layout: home` and was served unstyled at `/blog/`; it was deleted rather than fixed, and `_pages/` is now empty (the `include: _pages` entry in `_config.yml` is kept so the directory works if it comes back).
- `_projects/jekyll-portfolio-website.md` still describes the site as a hub for a "technical blog", which no longer exists.
