const toggle = document.getElementById('theme-toggle');
const currentTheme = localStorage.getItem('theme');

// Detect system preference
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');

if (currentTheme === 'dark' || (prefersDark.matches && !currentTheme)) {
    document.documentElement.setAttribute('data-theme', 'dark');
}

toggle.addEventListener('click', () => {
    let theme = document.documentElement.getAttribute('data-theme');
    if (theme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
    } else {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    }
});
