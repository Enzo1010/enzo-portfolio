/**
 * Header Component
 * Renders the site header with navigation and social links.
 */
export function renderHeader(container) {
  container.innerHTML = `
    <header class="header" id="header">
      <div class="container header-inner">
        <a href="#" class="logo">
          <img src="assets/img/logoMe.png" alt="Enzo Bazzi Logo" class="logo-img">
        </a>
        <nav class="nav-desktop">
          <a href="#sobre" class="nav-link"><i class="fas fa-user"></i> Sobre Mim</a>
          <a href="#carreira" class="nav-link"><i class="fas fa-briefcase"></i> Carreira</a>
          <a href="#projetos" class="nav-link"><i class="fas fa-code"></i> Projetos</a>
          <a href="#contato" class="nav-link"><i class="fas fa-envelope"></i> Contato</a>
        </nav>
        <div class="header-socials">
          <a href="https://github.com/Enzo1010" target="_blank" aria-label="GitHub" title="GitHub"><i class="fab fa-github"></i></a>
          <a href="https://www.linkedin.com/in/enzobazzi" target="_blank" aria-label="LinkedIn" title="LinkedIn"><i class="fab fa-linkedin-in"></i></a>
          <a href="mailto:enzobazzideoliveira@gmail.com" aria-label="Email" title="Email"><i class="fas fa-envelope"></i></a>
        </div>
        <button class="mobile-menu-btn" id="mobile-menu-btn" type="button">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
    <div class="mobile-menu" id="mobile-menu">
      <a href="#sobre" class="mobile-menu-link">Sobre Mim</a>
      <a href="#carreira" class="mobile-menu-link">Carreira</a>
      <a href="#projetos" class="mobile-menu-link">Projetos</a>
      <a href="#contato" class="mobile-menu-link">Contato</a>
    </div>
  `;

  const header = document.getElementById('header');
  const menuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');

  // Scroll effect
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // Mobile menu toggle
  menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('active');
    mobileMenu.classList.toggle('active');
  });

  // Close menu on link click
  mobileMenu.querySelectorAll('.mobile-menu-link').forEach(link => {
    link.addEventListener('click', () => {
      menuBtn.classList.remove('active');
      mobileMenu.classList.remove('active');
    });
  });
}
