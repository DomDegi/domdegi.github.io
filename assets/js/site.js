// The header is solid by default; it recedes to a thin strip only while the
// page is scrolled to the very top. Lives here rather than in home.js because
// the header exists on project pages too.
document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('.site-header');
    if (!header) return;

    const sync = () => header.classList.toggle('at-top', window.scrollY <= 8);

    sync();
    window.addEventListener('scroll', sync, { passive: true });
});
