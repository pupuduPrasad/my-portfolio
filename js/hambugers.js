    document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburgerMenu');
    const navLinks = document.getElementById('navLinks');
    const navbar = document.getElementById('navbar');

    hamburger.addEventListener('click', function() {
    // Toggle active class for hamburger animation
    hamburger.classList.toggle('active');
    // Toggle responsive class for nav
    navbar.classList.toggle('responsive');
});

    // Close menu when clicking a nav link (for mobile)
    const links = document.querySelectorAll('.nav-links a');
    links.forEach(link => {
    link.addEventListener('click', function() {
    navbar.classList.remove('responsive');
    hamburger.classList.remove('active');
});
});
});
