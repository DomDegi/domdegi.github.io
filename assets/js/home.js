// Behaviour specific to the single-page home: nav scrollspy, and the
// "everything else" list sliding open.
document.addEventListener('DOMContentLoaded', () => {

    const navLinks = Array.from(document.querySelectorAll('.nav-links a[data-nav]'));
    const sections = navLinks
        .map(link => document.getElementById(link.dataset.nav))
        .filter(Boolean);

    if (!('IntersectionObserver' in window) || sections.length === 0) return;

    const setActive = id => navLinks.forEach(link =>
        link.classList.toggle('is-active', link.dataset.nav === id));

    const observer = new IntersectionObserver(entries => {
        const visible = entries
            .filter(e => e.isIntersecting)
            .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
    }, {
        // Focus on the band just below the sticky header.
        rootMargin: '-25% 0px -60% 0px',
        threshold: [0, 0.25, 0.5, 1]
    });

    sections.forEach(section => observer.observe(section));
});

// "Everything else": grow the drawer's height by hand so the sections below it
// are pushed down over the same duration, and the list unfurls from under the
// toggle instead of appearing all at once. This is deliberately JS and not the
// CSS `::details-content` + `interpolate-size` recipe — Firefox does not
// support `interpolate-size`, so that version snapped open there. Without JS
// the <details> just opens, which is the plain native behaviour.
document.addEventListener('DOMContentLoaded', () => {

    const details = document.querySelector('.more-projects');
    if (!details || !details.animate) return;

    const summary = details.querySelector('summary');
    const drawer = details.querySelector('.more-projects__drawer');
    if (!summary || !drawer) return;

    const DURATION = 560;
    const EASING = 'cubic-bezier(0.22, 0.61, 0.36, 1)';
    let running = null;

    // The drawer is border-box, so `height` already covers its padding — and it
    // therefore cannot render shorter than that padding. The padding has to
    // collapse alongside the height or the drawer starts ~50px tall.
    const COLLAPSED = { height: '0px', paddingTop: '0px', paddingBottom: '0px' };

    const stateNow = () => {
        const style = getComputedStyle(drawer);
        return {
            height: drawer.offsetHeight + 'px',
            paddingTop: style.paddingTop,
            paddingBottom: style.paddingBottom
        };
    };

    const stateOpen = () => {
        drawer.style.height = 'auto';
        drawer.style.paddingTop = '';
        drawer.style.paddingBottom = '';
        return stateNow();
    };

    const apply = state => Object.assign(drawer.style, state);

    summary.addEventListener('click', event => {
        // Let the browser do its instant toggle instead.
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

        event.preventDefault();
        const opening = !details.open;

        // Read where the drawer actually is before cancelling, so clicking
        // again mid-animation reverses from there rather than jumping.
        const from = details.open ? stateNow() : COLLAPSED;
        if (running) running.cancel();

        // Stays open for the whole animation either way — the content has to be
        // laid out to have a height. `open` only flips to false once it is done.
        details.open = true;
        details.classList.toggle('is-closing', !opening);
        drawer.classList.add('is-animating');

        const to = opening ? stateOpen() : COLLAPSED;
        apply(from);

        running = drawer.animate([from, to], { duration: DURATION, easing: EASING });

        // The animation does not fill forwards, so the frame after it ends falls
        // back to the inline style. Park that on the end state now, or the
        // drawer snaps shut for a frame just as it finishes opening.
        apply(to);

        running.finished.then(() => {
            details.open = opening;
            details.classList.remove('is-closing');
            drawer.classList.remove('is-animating');
            drawer.style.height = '';
            drawer.style.paddingTop = '';
            drawer.style.paddingBottom = '';
            running = null;
        }).catch(() => { /* cancelled by a newer click; it owns the cleanup */ });
    });
});
