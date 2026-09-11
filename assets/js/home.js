// Behaviour specific to the single-page home: tag filtering + nav scrollspy.
document.addEventListener('DOMContentLoaded', () => {

    /* ---------- Project tag filter ---------- */
    const buttons = document.querySelectorAll('.filter-btn');
    const cards = document.querySelectorAll('.project-card');
    const emptyState = document.querySelector('.empty-state');

    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            buttons.forEach(b => b.classList.remove('is-active'));
            btn.classList.add('is-active');

            const filter = btn.dataset.filter;
            let visible = 0;

            cards.forEach(card => {
                const tags = Array.from(card.querySelectorAll('.tag'))
                    .map(t => t.textContent.trim().toLowerCase());
                const show = filter === 'all' || tags.includes(filter);
                card.hidden = !show;
                if (show) visible++;
            });

            if (emptyState) emptyState.hidden = visible !== 0;
        });
    });

    /* ---------- Nav scrollspy ---------- */
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
