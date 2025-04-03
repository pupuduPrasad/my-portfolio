// Smooth scrolling effect for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        document.getElementById(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


// Mobile navigation menu toggle
const nav = document.querySelector('nav');
const toggleButton = document.createElement('button');
toggleButton.innerText = '☰';
toggleButton.classList.add('nav-toggle');
document.body.insertBefore(toggleButton, nav);

toggleButton.addEventListener('click', () => {
    nav.classList.toggle('active');
});

// Project hover effect
document.querySelectorAll('#projectContent div').forEach(project => {
    project.addEventListener('mouseenter', () => {
        project.style.transform = 'scale(1.1)';
    });
    project.addEventListener('mouseleave', () => {
        project.style.transform = 'scale(1)';
    });
});

// Contact form submission (basic validation)
const contactForm = document.querySelector('#contact form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thank you for reaching out! I will get back to you soon.');
        contactForm.reset();
    });
}
