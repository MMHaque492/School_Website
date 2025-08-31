// Wait for the entire HTML document to be loaded before running the script
document.addEventListener('DOMContentLoaded', function() {

    // --- Mobile Navigation Toggle ---
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    // Add a click event listener to the hamburger icon
    hamburger.addEventListener('click', () => {
        // Toggle the 'active' class on the nav-links to show/hide it
        navLinks.classList.toggle('active');
    });

    // --- Close mobile menu when a link is clicked ---
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
            }
        });
    });

    // --- Scroll Fade-In Animations ---
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1 // Trigger when 10% of the element is visible
    });

    // Select all elements with the class 'hidden' to apply the animation
    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach(el => observer.observe(el));
});