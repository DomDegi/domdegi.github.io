// Light is the default; the saved choice is applied inline in <head> to avoid a flash.
document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('theme-toggle');
    const sunIcon = document.getElementById('sun-icon');
    const moonIcon = document.getElementById('moon-icon');
    if (!toggleButton) return;

    const currentTheme = () => document.documentElement.getAttribute('data-theme') || 'light';

    function updateIcons(theme) {
        // Show the icon for the mode you would switch *to*.
        sunIcon.style.display = theme === 'dark' ? 'block' : 'none';
        moonIcon.style.display = theme === 'dark' ? 'none' : 'block';
    }

    updateIcons(currentTheme());

    toggleButton.addEventListener('click', () => {
        const next = currentTheme() === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', next);
        try { localStorage.setItem('theme', next); } catch (e) { }
        updateIcons(next);
    });
});
