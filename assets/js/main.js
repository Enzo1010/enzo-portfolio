/**
 * Main JavaScript
 * Initializes components, interactions and animations.
 */

import { renderHeader } from '../../components/header.js';
import { renderFooter } from '../../components/footer.js';

// ── Render components ──
renderHeader(document.getElementById('header-root'));
renderFooter(document.getElementById('footer-root'));

// ── Fade-in on scroll (Intersection Observer) ──
const observerOptions = { threshold: 0.1 };

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Seletores para os elementos que terão animação
const animatedSelectors = [
  '.about-card',
  '.tech-category-card',
  '.timeline-item-modern',
  '.exp-card-modern',
  '.project-card',
  '.contact-link-item',
  '.contact-form-wrapper'
];

document.querySelectorAll(animatedSelectors.join(', ')).forEach(el => {
  el.classList.add('fade-in');
  observer.observe(el);
});
