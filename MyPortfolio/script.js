// --- Dark/Light Mode Toggle ---
const themeToggleBtn = document.getElementById('themeToggle');
const htmlElement = document.documentElement;
const themeIcon = document.getElementById('themeIcon');

themeToggleBtn.addEventListener('click', () => {
    const currentTheme = htmlElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    htmlElement.setAttribute('data-theme', newTheme);
    
    if(newTheme === 'dark') {
        themeIcon.innerHTML = `<path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path>`; 
    } else {
        themeIcon.innerHTML = `<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>`; 
    }
});

// --- Scroll Intersection Observer for Fade Ins ---
const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
};

const fadeObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target); 
        }
    });
}, observerOptions);

document.querySelectorAll('.fade-in').forEach(element => {
    fadeObserver.observe(element);
});

// --- Active Nav Link tracking on scroll ---
const sections = document.querySelectorAll('.scroll-section');
const navLinks = document.querySelectorAll('.nav-links .nav-item');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        // Check if we've scrolled past the section (adjusted for the fixed nav)
        if (scrollY >= (sectionTop - 150)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active-link');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active-link');
        }
    });
});

// --- 3D Mouse Tracking on Hero Image ---
const heroWrapper = document.getElementById('hero3D');

document.addEventListener('mousemove', (e) => {
    if (window.innerWidth > 900 && heroWrapper) {
        const xAxis = (window.innerWidth / 2 - e.pageX) / 40;
        const yAxis = (window.innerHeight / 2 - e.pageY) / 40;
        const clampX = Math.max(-15, Math.min(15, xAxis));
        const clampY = Math.max(-15, Math.min(15, yAxis));

        heroWrapper.style.transform = `rotateY(${clampX}deg) rotateX(${clampY}deg)`;
    }
});

document.addEventListener('mouseleave', () => {
    if(heroWrapper) {
        heroWrapper.style.transform = `rotateY(0deg) rotateX(0deg)`;
        heroWrapper.style.transition = `transform 0.5s ease`;
    }
});

document.addEventListener('mouseenter', () => {
    if(heroWrapper) {
        heroWrapper.style.transition = `transform 0.1s ease-out`;
    }
});

// --- Terminal Tabs Logic ---
const aboutTabs = document.querySelectorAll('#aboutTabs li');
const aboutPanes = document.querySelectorAll('.terminal-content .tab-pane');

aboutTabs.forEach(tab => {
    tab.addEventListener('click', () => {
        aboutTabs.forEach(t => t.classList.remove('active'));
        aboutPanes.forEach(p => p.classList.remove('active'));
        
        tab.classList.add('active');
        const targetId = tab.getAttribute('data-target');
        
        setTimeout(() => {
            document.getElementById(targetId).classList.add('active');
        }, 50);
    });
});

// --- Skills Tabs Logic ---
const skillTabs = document.querySelectorAll('.skill-tab');
const skillGrids = document.querySelectorAll('.skill-grid');

skillTabs.forEach(tab => {
    tab.addEventListener('click', () => {
        skillTabs.forEach(t => t.classList.remove('active'));
        skillGrids.forEach(g => g.classList.remove('active'));
        
        tab.classList.add('active');
        const targetId = tab.getAttribute('data-target');
        document.getElementById(targetId).classList.add('active');
    });
});