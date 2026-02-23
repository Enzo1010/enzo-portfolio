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
          <a href="https://github.com/Enzo1010" target="_blank" title="GitHub"><i class="fab fa-github"></i></a>
          <a href="https://www.linkedin.com/in/enzobazzi" target="_blank" title="LinkedIn"><i class="fab fa-linkedin-in"></i></a>
          <a href="mailto:enzobazzideoliveira@gmail.com" title="Email"><i class="fas fa-envelope"></i></a>
        </div>
        <button class="mobile-toggle" id="mobile-toggle">
          <i class="fas fa-bars"></i>
        </button>
      </div>
      <nav class="nav-mobile" id="nav-mobile">
        <a href="#sobre" class="nav-link">Sobre Mim</a>
        <a href="#carreira" class="nav-link">Carreira</a>
        <a href="#projetos" class="nav-link">Projetos</a>
        <a href="#contato" class="nav-link">Contato</a>
      </nav>
    </header>
  `;

  // Adicionar funcionalidade de scroll
  const header = document.getElementById('header');
  const mobileToggle = document.getElementById('mobile-toggle');
  const navMobile = document.getElementById('nav-mobile');

  // Header scroll effect
  let lastScrollY = window.scrollY;
  
  function handleScroll() {
    const scrollY = window.scrollY;
    
    if (scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
    
    lastScrollY = scrollY;
  }

  window.addEventListener('scroll', handleScroll, { passive: true });

  // Mobile menu toggle
  mobileToggle?.addEventListener('click', () => {
    navMobile.classList.toggle('open');
    const icon = mobileToggle.querySelector('i');
    icon.classList.toggle('fa-bars');
    icon.classList.toggle('fa-times');
  });

  // Close mobile menu when clicking on links
  navMobile?.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      navMobile.classList.remove('open');
      const icon = mobileToggle.querySelector('i');
      icon.classList.add('fa-bars');
      icon.classList.remove('fa-times');
    });
  });
}
