/**
 * Header Component
 * Renders the site header with navigation and social links.
 */
export function renderHeader(container) {
  container.innerHTML = `
    <header class="header" id="header">
      <div class="container header-inner">
        <a href="#" class="logo">{EB}</a>
        <nav class="nav-desktop">
          <a href="#sobre" class="nav-link"><i class="fas fa-user"></i> Sobre Mim</a>
          <a href="#carreira" class="nav-link"><i class="fas fa-briefcase"></i> Carreira</a>
          <a href="#projetos" class="nav-link"><i class="fas fa-code"></i> Projetos</a>
          <a href="#contato" class="nav-link"><i class="fas fa-envelope"></i> Contato</a>
        </nav>
        <div class="header-socials">
          <a href="https://github.com/Enzo1010" target="_blank" title="GitHub"><i class="fab fa-github"></i></a>
          <a href="https://linkedin.com/in/enzo-bazzi" target="_blank" title="LinkedIn"><i class="fab fa-linkedin-in"></i></a>
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
}
