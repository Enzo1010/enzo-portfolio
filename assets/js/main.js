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

const updateLogo = (theme) => {
  const logoImg = document.getElementById('logo-img');
  if (!logoImg) return;
  logoImg.src = theme === 'dark'
    ? logoImg.dataset.logoDark
    : logoImg.dataset.logoLight;
};

const applyTheme = (theme) => {
  document.documentElement.setAttribute('data-theme', theme);
  updateThemeIcon(theme);
  updateLogo(theme);
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

// ── Contact Form Handler ──
const contactForm = document.querySelector('.contact-form');

if (contactForm) {
  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const submitBtn = contactForm.querySelector('.form-btn');
    const originalBtnText = submitBtn.innerHTML;
    
    // Desabilita botão e mostra loading
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Enviando...';

    try {
      const formData = new FormData(contactForm);
      
      const response = await fetch(contactForm.action, {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        // Sucesso - mostra mensagem
        showNotification('Mensagem enviada com sucesso! Obrigado pelo contato.', 'success');
        contactForm.reset();
      } else {
        throw new Error('Erro ao enviar');
      }
    } catch (error) {
      showNotification('Erro ao enviar mensagem. Tente novamente mais tarde.', 'error');
    } finally {
      // Restaura botão
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalBtnText;
    }
  });
}

// Função para mostrar notificação
function showNotification(message, type = 'success') {
  // Remove notificação existente se houver
  const existing = document.querySelector('.notification-toast');
  if (existing) existing.remove();

  const notification = document.createElement('div');
  notification.className = `notification-toast notification-${type}`;
  notification.innerHTML = `
    <i class="fas fa-${type === 'success' ? 'check-circle' : 'exclamation-circle'}"></i>
    <span>${message}</span>
  `;

  document.body.appendChild(notification);

  // Anima entrada
  setTimeout(() => notification.classList.add('show'), 100);

  // Remove após 5 segundos
  setTimeout(() => {
    notification.classList.remove('show');
    setTimeout(() => notification.remove(), 300);
  }, 5000);
}
