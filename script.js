document.addEventListener('DOMContentLoaded', () => {
    const darkModeToggle = document.getElementById('darkModeToggle');
    
    // Check for saved user preference, if any, on load of the website
    const darkMode = localStorage.getItem('darkMode');
    
    // Set initial theme
    if (darkMode === 'enabled') {
        document.documentElement.setAttribute('data-theme', 'dark');
    }
    
    darkModeToggle.addEventListener('click', () => {
        // Toggle theme
        if (document.documentElement.getAttribute('data-theme') === 'dark') {
            document.documentElement.removeAttribute('data-theme');
            localStorage.setItem('darkMode', null);
        } else {
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('darkMode', 'enabled');
        }
        
        // Optional: Add animation to the toggle
        darkModeToggle.style.transform = 'scale(1.1)';
        setTimeout(() => {
            darkModeToggle.style.transform = 'scale(1)';
        }, 200);
    });
    
    // Optional: System preference detection
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.documentElement.setAttribute('data-theme', 'dark');
    }
    
    // Optional: Listen for system theme changes
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
        if (!localStorage.getItem('darkMode')) {
            if (e.matches) {
                document.documentElement.setAttribute('data-theme', 'dark');
            } else {
                document.documentElement.removeAttribute('data-theme');
            }
        }
    });
}); 