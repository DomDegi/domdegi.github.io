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
nix-shell -p jekyll rubyPackages.jekyll-feed --run "jekyll build --destination /tmp/site"
nix-shell -p jekyll rubyPackages.jekyll-feed --run "jekyll serve --port 4321"
nix-shell -p chromium --run "chromium --headless --no-sandbox --hide-scrollbars \
  --virtual-time-budget=4000 --window-size=1280,3400 --screenshot=/tmp/shot.png http://127.0.0.1:4321/"
```

One caveat when verifying this way: **IntersectionObserver never re-fires after a programmatic scroll in headless Chromium** — the nav scrollspy cannot be verified this way and must be checked in a real browser.

**Verify against Jekyll 3.10, not just 4.x.** GitHub Pages still builds with Jekyll 3.10 and Liquid 4.0.4, which is stricter than the Jekyll 4.x in nixpkgs. Liquid that builds locally can fail the deploy — most notably **`where_exp` cannot parse compound `and` / `or` conditions** on Pages (`Liquid syntax error: Expected end_of_string but found id`); split them into single-condition steps. A failed Pages build creates no deployment at all, so the live site silently stays on the previous commit:

```bash
# does this commit actually build the way Pages will?
rm -rf /tmp/j3src && mkdir -p /tmp/j3src
tar -c --exclude=.git --exclude=Gemfile --exclude=.bundle --exclude=vendor . | tar -x -C /tmp/j3src
(cd /tmp/j3src && nix-shell -p rubyPackages.jekyll rubyPackages.jekyll-feed rubyPackages.kramdown-parser-gfm \
  --run "unset BUNDLE_GEMFILE; JEKYLL_NO_BUNDLER_REQUIRE=true jekyll build --source /tmp/j3src --destination /tmp/j3site")

# did the push actually deploy? compare the newest sha here against git rev-parse HEAD
curl -s "https://api.github.com/repos/DomDegi/domdegi.github.io/deployments?per_page=1" | grep '"sha"'
```

The Gemfile must be excluded from that copy or Bundler tries to resolve `minima` and aborts.


`_config.yml` is *not* hot-reloaded — a change there needs the serve process restarted.

## Deployment

Pushing to `main` is the deploy. GitHub Pages runs its own default Jekyll build from the branch — the site is *not* built by a workflow, which is why `Gemfile` pins `github-pages` rather than `jekyll` directly (the `gem "jekyll"` line is deliberately commented out). Only plugins on the GitHub Pages allowlist will work; `jekyll-feed` is the only one enabled.

The one workflow, `.github/workflows/build-cv.yml`, compiles `cv/cv.tex` and commits the resulting PDF to `assets/docs/cv_domenico_degiorgio.pdf`. It touches nothing else: keep it that way, because a workflow that deploys Pages would take the build away from the default one and change the deployment model for the whole site.

## Architecture

**`index.html` is the whole site.** Hero → About → Projects → Skills → CV → Contact, each a `<section>` with an `id`. It is `.html`, not `.markdown`, on purpose: the content is all hand-written HTML, and keeping it out of kramdown avoids the indentation rules that mangle HTML blocks inside Markdown. Project detail pages under `_projects/` are the only other real documents.

**Nav is anchor-driven.** `_config.yml` holds a `nav_links` list (`name` + `anchor`); `_layouts/default.html` loops it and emits `href="/{{ anchor }}"` so the links also work from a project detail page. Adding a section means adding the `<section id="...">` *and* the `nav_links` entry. `assets/js/home.js` runs an IntersectionObserver scrollspy that toggles `.is-active` on the matching link via its `data-nav` attribute.

**Layouts:** `default.html` is the chrome (head/meta, sticky header, footer, scripts); `page.html` wraps it for project pages, adding a back-link to `/#projects`, the title, and the front-matter tags as chips. `home.js` is loaded only on `/`.

**Projects are a Jekyll collection** (`collections.projects.output: true`). Each `_projects/*.md` has `title`, `description`, `tags: [...]` and an optional numeric `weight`. `index.html` splits the collection into weighted and unweighted sets, sorts the weighted ones and concatenates — lower `weight` first, unweighted last. Adding a project = adding one Markdown file.

The tag-filter chips are derived from the collection, but **only tags used by 2+ projects get a chip** (there are ~43 distinct tags and the long tail would bury the row). Cards still display all their own tags, and `home.js` matches a chip's `data-filter` against the lowercased `.tag` text in each card.

Collection pages use the default permalink, so project URLs end in `.html` (`/projects/adaptive-spacetime-fem-solver.html`).

**Styling** is `assets/css/main.css`, in two parts: hand-written rules (lines 1–~900) and a generated syntax-highlighting block at the end. Unlike the old version of this site, page content no longer carries inline `style=` attributes — everything is class-based, so a visual change belongs in the stylesheet.

The palette is white + powder blue with five rotating accents, defined as custom properties on `:root`, overridden under `[data-theme="dark"]`. **Light is the default.** Any new color must be added to both blocks. Two tokens exist specifically to survive the theme flip: `--footer-band` keeps the project-card footer light in dark mode (plain `--band` goes dark there), and `--on-band` / `--on-accent` carry the matching foreground.

`assets/js/theme.js` only wires the toggle; the saved theme is applied by an inline script in `<head>` so it never flashes.

A global `[hidden] { display: none !important; }` rule exists because the UA `[hidden]` rule loses to `.project-card { display: flex }` — without it the tag filter silently fails to hide anything.

## Known rough edges

- `_pages/blog.markdown` declares `layout: home`, which does not exist (`theme: minima` is commented out), so the build prints a warning and `/blog/` renders unstyled. It is intentionally left in place and unlinked until there is something to publish; there is no `_posts/` directory yet.
- `_projects/cnn-iamge-classification.md` has a typo in its filename ("iamge"), which is baked into its public URL.
- `_projects/jekyll-portfolio-website.md` has a stray `weight: 999` appended *after* the body text instead of inside the front matter, so it has no effect.
- Project write-ups contain LaTeX (`$...$`) but no MathJax/KaTeX is loaded, so it renders literally.
- `site.title` is still "Dom's learning journal", which is what shows in the browser tab even though the site is now a portfolio.
