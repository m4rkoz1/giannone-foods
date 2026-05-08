document.addEventListener('DOMContentLoaded', () => {
    // Navbar Scroll Effect
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Mobile Menu Toggle
    const mobileBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');

    if (mobileBtn) {
        mobileBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            const icon = mobileBtn.querySelector('i');
            if (navLinks.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    }

    // Close mobile menu when clicking a link
    const links = document.querySelectorAll('.nav-links a');
    links.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            const icon = mobileBtn.querySelector('i');
            if (icon) {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    });

    // Intersection Observer for scroll animations
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Stop observing once visible
            }
        });
    }, observerOptions);

    // Observe all elements with animation classes
    const animateElements = document.querySelectorAll('.animate-fade-up');
    animateElements.forEach(el => {
        observer.observe(el);
    });

    // Add animation classes to product cards and feature boxes
    const productCards = document.querySelectorAll('.product-card');
    productCards.forEach((card, index) => {
        card.classList.add('animate-fade-up');
        card.style.transitionDelay = `${index * 0.1}s`;
        observer.observe(card);
    });

    const featureBoxes = document.querySelectorAll('.feature-box');
    featureBoxes.forEach((box, index) => {
        box.classList.add('animate-fade-up');
        box.style.transitionDelay = `${index * 0.1}s`;
        observer.observe(box);
    });

    // Language Switching Logic
    const btnPT = document.getElementById('lang-pt');
    const btnEN = document.getElementById('lang-en');
    
    function setLanguage(lang) {
        // Update Active Button
        if(lang === 'en') {
            btnEN.classList.add('active');
            btnPT.classList.remove('active');
        } else {
            btnPT.classList.add('active');
            btnEN.classList.remove('active');
        }

        // Update DOM Elements
        const elements = document.querySelectorAll('[data-i18n]');
        elements.forEach(el => {
            const key = el.getAttribute('data-i18n');
            if(translations[lang] && translations[lang][key]) {
                el.innerHTML = translations[lang][key];
            }
        });
        
        // Save preference
        localStorage.setItem('giannone_lang', lang);
    }

    btnPT.addEventListener('click', () => setLanguage('pt'));
    btnEN.addEventListener('click', () => setLanguage('en'));

    // Initialize with saved language or default to PT
    const savedLang = localStorage.getItem('giannone_lang') || 'pt';
    setLanguage(savedLang);
});
