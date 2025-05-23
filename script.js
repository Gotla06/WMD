document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.querySelector('.navbar');
    const navLinks = document.querySelectorAll('.nav-link');
    const membershipButtons = document.querySelectorAll('.pricing-card .btn');
    const contactForm = document.querySelector('#contact form');
    const galleryImages = document.querySelectorAll('.gallery-img');

    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            navbar.classList.add('navbar-scrolled');
        } else {
            navbar.classList.remove('navbar-scrolled');
        }
    });

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            navLinks.forEach(nav => nav.classList.remove('active'));
            this.classList.add('active');
        });
    });

    membershipButtons.forEach(button => {
        button.addEventListener('click', function() {
            const plan = this.closest('.card').querySelector('.card-header h3').textContent;
            alert(`Thank you for choosing our ${plan} plan! You'll be redirected to the signup page.`);
        });
    });

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const name = document.getElementById('name').value;
            alert(`Thanks for your message, ${name}! We'll contact you soon.`);
            this.reset();
        });
    }

    galleryImages.forEach(image => {
        image.addEventListener('click', function() {
            const modal = document.createElement('div');
            modal.style.position = 'fixed';
            modal.style.top = '0';
            modal.style.left = '0';
            modal.style.width = '100%';
            modal.style.height = '100%';
            modal.style.backgroundColor = 'rgba(0,0,0,0.8)';
            modal.style.display = 'flex';
            modal.style.alignItems = 'center';
            modal.style.justifyContent = 'center';
            modal.style.zIndex = '1000';

            const img = document.createElement('img');
            img.src = this.src;
            img.alt = this.alt;
            img.style.maxHeight = '90%';
            img.style.maxWidth = '90%';
            img.style.objectFit = 'contain';

            modal.appendChild(img);
            document.body.appendChild(modal);

            modal.addEventListener('click', function() {
                document.body.removeChild(modal);
            });
        });
    });

    const currentYear = new Date().getFullYear();
    const yearElement = document.querySelector('footer .text-center p');
    if (yearElement) {
        yearElement.textContent = yearElement.textContent.replace('2025', currentYear);
    }
});