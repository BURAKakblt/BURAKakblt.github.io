/* ───────────────────────────────────────────
   LANGUAGE TOGGLE (TR ↔ EN)
   ─────────────────────────────────────────── */
let currentLang = 'tr';

const toggleBtn = document.getElementById('lang-toggle');

toggleBtn.addEventListener('click', () => {
    currentLang = currentLang === 'tr' ? 'en' : 'tr';

    // Swap every element that carries data-tr / data-en
    document.querySelectorAll('[data-tr][data-en]').forEach(el => {
        el.textContent = el.getAttribute(`data-${currentLang}`);
    });

    // Reflect active language on button
    toggleBtn.textContent = currentLang === 'tr' ? 'TR / EN' : 'EN / TR';

    // Update <html lang>
    document.documentElement.lang = currentLang;

    // Highlight active side
    toggleBtn.style.background = currentLang === 'en'
        ? 'rgba(0,206,201,.12)'
        : 'rgba(108,92,231,.1)';
    toggleBtn.style.borderColor = currentLang === 'en'
        ? 'rgba(0,206,201,.4)'
        : 'rgba(108,92,231,.35)';
    toggleBtn.style.color = currentLang === 'en' ? '#00cec9' : '#6c5ce7';
});

/* ───────────────────────────────────────────
   MOBILE MENU
   ─────────────────────────────────────────── */
const menuBtn = document.getElementById('mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');

menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('active');
    navLinks.classList.toggle('open');
});

// Close menu on link click
navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        menuBtn.classList.remove('active');
        navLinks.classList.remove('open');
    });
});

/* ───────────────────────────────────────────
   SCROLL-REVEAL
   ─────────────────────────────────────────── */
const revealElements = () => {
    const targets = document.querySelectorAll(
        '.section-title, .about-text, .stat-card, .skill-badge, .project-card, .contact-card'
    );
    targets.forEach(el => el.classList.add('reveal'));
};

const observer = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    },
    { threshold: 0.15 }
);

// Init reveal classes & observe
revealElements();
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

/* ───────────────────────────────────────────
   NAVBAR SHRINK ON SCROLL
   ─────────────────────────────────────────── */
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 60) {
        navbar.style.height = '58px';
        navbar.style.borderBottomColor = 'rgba(255,255,255,.06)';
    } else {
        navbar.style.height = '70px';
        navbar.style.borderBottomColor = 'rgba(255,255,255,.04)';
    }
});
