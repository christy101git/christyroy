/*=============== WAIT FOR DOM CONTENT TO LOAD ===============*/
document.addEventListener('DOMContentLoaded', () => {

    /*=============== THEME/DARK MODE TOGGLE ===============*/
    const themeToggleButton = document.getElementById('theme-toggle');
    const body = document.body;
    const darkThemeClass = 'dark-mode';
    const sunIconClass = 'fa-sun';

    const applySavedTheme = () => {
        const savedTheme = localStorage.getItem('selected-theme');
        if (savedTheme === 'dark') {
            body.classList.add(darkThemeClass);
            themeToggleButton.classList.add(sunIconClass);
        }
    };

    themeToggleButton.addEventListener('click', () => {
        body.classList.toggle(darkThemeClass);
        themeToggleButton.classList.toggle(sunIconClass);

        if (body.classList.contains(darkThemeClass)) {
            localStorage.setItem('selected-theme', 'dark');
        } else {
            localStorage.removeItem('selected-theme');
        }
    });

    applySavedTheme();


    /*=============== STICKY HEADER ON SCROLL ===============*/
    const header = document.getElementById('header');
    
    const handleScroll = () => {
        if (window.scrollY >= 50) {
            header.classList.add('scroll-header');
        } else {
            header.classList.remove('scroll-header');
        }
    };

    window.addEventListener('scroll', handleScroll);

    
    /*=============== ON-SCROLL FADE-IN ANIMATION ===============*/
    const animatedElements = document.querySelectorAll('.animate-on-scroll');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target); // Stop observing once it's visible
            }
        });
    }, {
        threshold: 0.1 // Trigger when 10% of the element is visible
    });

    animatedElements.forEach(element => {
        observer.observe(element);
    });

});
