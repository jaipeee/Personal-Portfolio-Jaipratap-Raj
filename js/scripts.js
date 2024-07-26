document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    document.querySelectorAll('nav ul li a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Mobile navigation toggle
    const navToggle = document.createElement('button');
    navToggle.className = 'nav-toggle';
    navToggle.innerHTML = '&#9776;'; // Hamburger icon
    document.querySelector('header').appendChild(navToggle);

    navToggle.
    document.querySelector('nav ul').classList.toggle('show');
    document.addEventListener('DOMContentLoaded', function() {
        const navToggle = document.getElementById('navToggle');
        const navUl = document.querySelector('nav ul');
    });

    // Form validation
    const form = document.querySelector('.contact form');
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        if (name === '' || email === '' || message === '') {
            alert('Please fill in all fields.');
            return;
        }

        if (!validateEmail(email)) {
            alert('Please enter a valid email address.');
            return;
        }

        alert('Form submitted successfully!');
        form.reset();
    });

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    };
    document.addEventListener('DOMContentLoaded', () => {
        const navToggle = document.querySelector('.nav-toggle');
        const navList = document.querySelector('.nav-list');
    
        navToggle.addEventListener('click', () => {
            navList.classList.toggle('active');
        });
    });
