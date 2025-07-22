document.addEventListener('DOMContentLoaded', function() {

    // Mobile Menu Toggle
    const menuToggle = document.getElementById('mobile-menu-toggle');
    const navbar = document.getElementById('navbar');

    if (menuToggle && navbar) {
        menuToggle.addEventListener('click', () => {
            navbar.classList.toggle('active');
            // Optional: Change burger icon to X
            const icon = menuToggle.querySelector('i');
            if (navbar.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    }

    // Smooth Scrolling for nav links
    const navLinks = document.querySelectorAll('#navbar a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                // Calculate offset for fixed header if it's always visible
                // const headerHeight = document.getElementById('main-header').offsetHeight;
                // let elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
                // let offsetPosition = elementPosition - headerHeight;

                // Simpler scrollIntoView method
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start' // 'start' aligns top of target with top of viewport (or sticky header)
                });

                // Close mobile menu if open after click
                if (navbar.classList.contains('active')) {
                    navbar.classList.remove('active');
                    const icon = menuToggle.querySelector('i');
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                }
            }
        });
    });

    // Smooth scrolling for CTA button
    const ctaButton = document.querySelector('.cta-button[href^="#"]');
    if (ctaButton) {
         ctaButton.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    }


    // Update current year in footer
    const yearSpan = document.getElementById('current-year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // Optional: Active link highlighting on scroll (more complex)
    // You can add this later if needed. It involves checking scroll position
    // against section offsets. For now, keeping it simpler.

});