/**
 * Main JavaScript
 * Initializes components, interactions and animations.
 */

import { renderHeader } from '../../components/header.js';
import { renderFooter } from '../../components/footer.js';

// ── Render components ──
renderHeader(document.getElementById('header-root'));
renderFooter(document.getElementById('footer-root'));

// ── Smooth scroll ──
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', (e) => {
    e.preventDefault();
    const target = document.querySelector(anchor.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    // Close mobile menu if open
    const mobileNav = document.getElementById('nav-mobile');
    if (mobileNav) mobileNav.classList.remove('open');
  });
});

// ── Header scroll effect ──
window.addEventListener('scroll', () => {
  const header = document.getElementById('header');
  if (header) {
    header.classList.toggle('scrolled', window.scrollY > 30);
  }
});

// ── Mobile menu toggle ──
const mobileToggle = document.getElementById('mobile-toggle');
if (mobileToggle) {
  mobileToggle.addEventListener('click', () => {
    document.getElementById('nav-mobile').classList.toggle('open');
  });
}

// ── Fade-in on scroll (Intersection Observer) ──
const observerOptions = { threshold: 0.12 };

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

const animatedSelectors = [
  '.about-card',
  '.tech-card',
  '.timeline-item',
  '.exp-card',
  '.project-card',
  '.contact-item'
];

document.querySelectorAll(animatedSelectors.join(', ')).forEach(el => {
  el.classList.add('fade-in');
  observer.observe(el);
});
