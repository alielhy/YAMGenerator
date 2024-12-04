document.addEventListener('DOMContentLoaded', () => {
    // Color picker value display
    const colorInputs = document.querySelectorAll('input[type="color"]');
    colorInputs.forEach(input => {
        input.addEventListener('input', (e) => {
            const valueDisplay = e.target.nextElementSibling;
            valueDisplay.textContent = e.target.value.toUpperCase();
            updatePreview();
        });
    });

    // Logo upload
    const logoInput = document.getElementById('logoInput');
    const logoPreview = document.getElementById('logoPreview');

    logoPreview.addEventListener('click', () => {
        logoInput.click();
    });

    logoInput.addEventListener('change', function(e) {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                logoPreview.innerHTML = `
                    <img src="${e.target.result}" alt="Logo Preview" style="max-width: 100%; max-height: 200px;">
                `;
            }
            reader.readAsDataURL(file);
        }
    });

    // Preview update function
    function updatePreview() {
        const previewContainer = document.getElementById('previewContainer');
        const colors = Array.from(colorInputs).map(input => input.value);
        
        // Update preview with selected colors
        previewContainer.style.background = `linear-gradient(45deg, ${colors[0]}, ${colors[1]})`;
    }

    // Dark mode toggle functionality
    const darkModeToggle = document.getElementById('darkModeToggle');
    
    // Check for saved dark mode preference
    if (localStorage.getItem('darkMode') === 'enabled') {
        document.body.setAttribute('data-theme', 'dark');
    }

    darkModeToggle.addEventListener('click', () => {
        if (document.body.getAttribute('data-theme') === 'dark') {
            document.body.removeAttribute('data-theme');
            localStorage.setItem('darkMode', 'disabled');
        } else {
            document.body.setAttribute('data-theme', 'dark');
            localStorage.setItem('darkMode', 'enabled');
        }
    });
}); 