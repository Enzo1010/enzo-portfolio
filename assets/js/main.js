/**
 * Main JavaScript
 * Initializes components, interactions and animations.
 */

import { renderHeader } from '../../components/header.js';
import { renderFooter } from '../../components/footer.js';

// ── Render components ──
renderHeader(document.getElementById('header-root'));
renderFooter(document.getElementById('footer-root'));

// ── Theme toggle (light/dark) ──
const themeToggleBtn = document.getElementById('theme-toggle-btn');
const themeStorageKey = 'enzo-portfolio-theme';

const updateThemeIcon = (theme) => {
  if (!themeToggleBtn) return;
  const icon = themeToggleBtn.querySelector('i');
  if (!icon) return;

  icon.classList.remove('fa-moon', 'fa-sun');
  icon.classList.add(theme === 'dark' ? 'fa-sun' : 'fa-moon');
};

const applyTheme = (theme) => {
  document.documentElement.setAttribute('data-theme', theme);
  updateThemeIcon(theme);
};

const getInitialTheme = () => {
  const savedTheme = localStorage.getItem(themeStorageKey);
  if (savedTheme === 'light' || savedTheme === 'dark') {
    return savedTheme;
  }

  const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  return systemPrefersDark ? 'dark' : 'light';
};

const initialTheme = getInitialTheme();
applyTheme(initialTheme);

if (themeToggleBtn) {
  themeToggleBtn.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
    const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';

    applyTheme(nextTheme);
    localStorage.setItem(themeStorageKey, nextTheme);
  });
}

// ── Fade-in on scroll (Intersection Observer) ──
const observerOptions = { threshold: 0.1 };

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    } else {
      entry.target.classList.remove('visible');
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
