document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('theme-toggle');
    const sunIcon = document.getElementById('sun-icon');
    const moonIcon = document.getElementById('moon-icon');

    // Check for saved theme preference in localStorage
    const savedTheme = localStorage.getItem('theme');
    
    // Default is dark. If light was saved, apply it.
    if (savedTheme === 'light') {
        document.documentElement.setAttribute('data-theme', 'light');
        updateIcons('light');
    } else {
        // Enforce dark theme even if user doesn't have a preference yet
        document.documentElement.setAttribute('data-theme', 'dark');
        updateIcons('dark');
    }

    toggleButton.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateIcons(newTheme);
    });

    function updateIcons(theme) {
        if (theme === 'dark') {
            sunIcon.style.display = 'block';
            moonIcon.style.display = 'none';
        } else {
            sunIcon.style.display = 'none';
            moonIcon.style.display = 'block';
        }
    }
});
