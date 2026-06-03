import { useEffect, useMemo, useState } from 'react';

const navItems = [
  { href: '#sobre', label: 'Sobre', icon: 'fa-user' },
  { href: '#carreira', label: 'Carreira', icon: 'fa-briefcase' },
  { href: '#projetos', label: 'Projetos', icon: 'fa-code' },
  { href: '#contato', label: 'Contato', icon: 'fa-envelope' },
];

const techGroups = [
  {
    title: 'Front-end',
    icon: 'fa-palette',
    items: [
      { icon: 'fab fa-html5', label: 'HTML5' },
      { icon: 'fab fa-css3-alt', label: 'CSS3' },
      { icon: 'fab fa-js-square', label: 'JavaScript' },
      { icon: 'fab fa-react', label: 'React' },
    ],
  },
  {
    title: 'Back-end',
    icon: 'fa-server',
    items: [
      { icon: 'fab fa-java', label: 'Java' },
      { icon: 'fas fa-leaf', label: 'Spring' },
    ],
  },
  {
    title: 'Banco de Dados',
    icon: 'fa-database',
    items: [
      { icon: 'fas fa-database', label: 'PostgreSQL' },
      { icon: 'fas fa-database', label: 'MySQL' },
      { icon: 'fas fa-code', label: 'SQL' },
    ],
  },
  {
    title: 'Ferramentas',
    icon: 'fa-cogs',
    items: [
      { icon: 'fab fa-git-alt', label: 'Git' },
      { icon: 'fab fa-linux', label: 'Linux' },
      { icon: 'fab fa-windows', label: 'Windows' },
      { icon: 'fab fa-figma', label: 'Figma' },
      { icon: 'fas fa-project-diagram', label: 'Draw.io' },
    ],
  },
];

const education = [
  {
    status: 'Em andamento',
    date: 'Mar 2025 - Dez 2028',
    title: 'Bacharelado em Ciência da Computação',
    org: 'URI Erechim',
    desc: 'Fundamentos de programação, algoritmos, estruturas de dados e desenvolvimento de sistemas.',
    active: true,
  },
  {
    status: 'Concluído',
    date: 'Mar 2022 - Dez 2024',
    title: 'Técnico em Informática',
    org: 'IFRS Campus Erechim',
    desc: 'Programação, banco de dados, redes e infraestrutura de TI.',
  },
];

const experiences = [
  {
    role: 'Assistente de TI',
    company: 'Metaro',
    period: 'Ago 2025 - Atual',
    location: 'Erechim - RS',
    items: [
      'Suporte e manutenção de infraestrutura de TI e estações de trabalho.',
      'Atendimento a chamados e resolução de problemas técnicos.',
      'Organização de processos internos e documentação.',
      'Desenvolvimento de soluções freelancer sob demanda.',
    ],
  },
  {
    role: 'Programador de Sistemas',
    company: 'Transportes Gaurama LTDA',
    period: 'Fev 2025 - Jul 2025',
    location: 'Erechim - RS',
    items: [
      'Desenvolvimento e manutenção de sistemas internos.',
      'Implementação de funcionalidades com JavaScript, PHP e SQL.',
      'Correção de bugs e melhorias conforme demanda.',
    ],
  },
];

const projects = [
  {
    name: 'E-commerce NegoMaq',
    logo: '/assets/img/app-logo-sfundo.png',
    desc: 'Aplicação web para gestão e vendas de facas, desenvolvida com foco em desempenho, escalabilidade e boa experiência do usuário. Usa tecnologias modernas do ecossistema Vue, arquitetura baseada em componentes e boas práticas de desenvolvimento.',
    links: [
      { href: 'https://github.com/ezequielmuller/app-negomaq', label: 'Frontend' },
      { href: 'https://github.com/Lucas-Blanger/nego-maq-api', label: 'Backend' },
    ],
    techs: ['fab fa-vuejs', 'fab fa-js-square', 'fab fa-python', 'fab fa-git-alt'],
  },
  {
    name: 'Movmaq',
    icon: 'fa-industry',
    desc: 'Projeto freelance para cliente no setor de soluções industriais, incluindo portas, docas de carga e manutenção. O trabalho está em desenvolvimento e preparado para receber dados reais do cliente.',
    links: [{ href: 'https://github.com/Enzo1010/Movmaq', label: 'Ver no GitHub' }],
    techs: ['fab fa-html5', 'fab fa-css3-alt', 'fab fa-js-square', 'fab fa-git-alt'],
  },
];

const contacts = [
  {
    label: 'E-mail',
    value: 'enzobazzideoliveira@gmail.com',
    href: 'mailto:enzobazzideoliveira@gmail.com',
    icon: 'fa-envelope',
    tone: 'email',
  },
  {
    label: 'WhatsApp',
    value: '+55 (54) 99220-5166',
    href: 'https://wa.me/5554992205166',
    icon: 'fab fa-whatsapp',
    tone: 'whatsapp',
  },
  {
    label: 'LinkedIn',
    value: 'Enzo Bazzi de Oliveira',
    href: 'https://www.linkedin.com/in/enzobazzi',
    icon: 'fab fa-linkedin-in',
    tone: 'linkedin',
  },
  {
    label: 'GitHub',
    value: 'Enzo1010',
    href: 'https://github.com/Enzo1010',
    icon: 'fab fa-github',
    tone: 'github',
  },
];

function useTheme() {
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('enzo-portfolio-theme');
    if (saved === 'light' || saved === 'dark') return saved;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem('enzo-portfolio-theme', theme);
  }, [theme]);

  return [theme, () => setTheme((current) => (current === 'dark' ? 'light' : 'dark'))];
}

function Header({ theme, onToggleTheme }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const logo = theme === 'dark' ? '/assets/img/logo-dark.svg' : '/assets/img/logo-light.svg';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMenu = () => setOpen(false);

  return (
    <>
      <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
        <div className="container header-inner">
          <a className="brand" href="#top" aria-label="Página inicial">
            <img src={logo} alt="Enzo Bazzi" />
          </a>

          <nav className="desktop-nav" aria-label="Navegação principal">
            {navItems.map((item) => (
              <a key={item.href} href={item.href}>
                <i className={`fas ${item.icon}`} />
                {item.label}
              </a>
            ))}
          </nav>

          <div className="header-actions">
            <a href="https://github.com/Enzo1010" target="_blank" rel="noreferrer" aria-label="GitHub">
              <i className="fab fa-github" />
            </a>
            <a
              href="https://www.linkedin.com/in/enzobazzi"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin-in" />
            </a>
            <button className="icon-button" type="button" onClick={onToggleTheme} aria-label="Alternar tema">
              <i className={`fas ${theme === 'dark' ? 'fa-sun' : 'fa-moon'}`} />
            </button>
          </div>

          <button
            className={`menu-button ${open ? 'is-open' : ''}`}
            type="button"
            onClick={() => setOpen((current) => !current)}
            aria-label="Abrir menu"
            aria-expanded={open}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      <div className={`mobile-panel ${open ? 'is-open' : ''}`}>
        {navItems.map((item) => (
          <a key={item.href} href={item.href} onClick={closeMenu}>
            {item.label}
          </a>
        ))}
        <button type="button" onClick={onToggleTheme}>
          <i className={`fas ${theme === 'dark' ? 'fa-sun' : 'fa-moon'}`} />
          {theme === 'dark' ? 'Modo claro' : 'Modo escuro'}
        </button>
      </div>
    </>
  );
}

function FadeIn({ children, className = '' }) {
  const [visible, setVisible] = useState(false);

  return (
    <div
      className={`fade-card ${visible ? 'is-visible' : ''} ${className}`}
      ref={(node) => {
        if (!node) return;
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              setVisible(true);
              observer.disconnect();
            }
          },
          { threshold: 0.15 },
        );
        observer.observe(node);
      }}
    >
      {children}
    </div>
  );
}

function Hero() {
  return (
    <section className="hero" id="top">
      <div className="container hero-grid">
        <div className="hero-copy">
          <span className="eyebrow">Backend Jr. | Java | SQL</span>
          <h1>Enzo Bazzi de Oliveira</h1>
          <p>
            Desenvolvedor back-end em formação, com experiência em TI, infraestrutura e projetos
            web sob demanda.
          </p>
          <div className="hero-actions">
            <a className="primary-action" href="#projetos">
              <i className="fas fa-code" />
              Ver projetos
            </a>
            <a className="secondary-action" href="#contato">
              <i className="fas fa-paper-plane" />
              Contato
            </a>
          </div>
        </div>

        <div className="hero-visual" aria-label="Foto de Enzo Bazzi">
          <img src="/assets/img/me.jpeg" alt="Enzo Bazzi de Oliveira" />
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="sobre" className="section">
      <div className="container split-section">
        <div>
          <span className="section-kicker">Sobre mim</span>
          <h2>Construindo base sólida em backend.</h2>
        </div>
        <FadeIn className="about-panel">
          <p>
            Estudante de <strong>Ciência da Computação</strong> na <strong>URI Erechim</strong> e
            técnico em Informática pelo <strong>IFRS</strong>. Atualmente atuo como{' '}
            <strong>Assistente de TI</strong> com foco em infraestrutura, enquanto avanço em
            desenvolvimento back-end, especialmente com Java e bancos de dados relacionais.
          </p>
          <p>
            Também desenvolvo projetos freelancer sob demanda, conectando organização técnica,
            atendimento ao cliente e entrega prática.
          </p>
          <div className="chips">
            <span>Português nativo</span>
            <span>Inglês intermediário</span>
            <span>Aprendizado contínuo</span>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

function Technologies() {
  return (
    <section className="section muted-section">
      <div className="container">
        <div className="section-heading">
          <span className="section-kicker">Stack</span>
          <h2>Ferramentas que uso para construir soluções.</h2>
        </div>

        <div className="tech-grid">
          {techGroups.map((group) => (
            <FadeIn key={group.title} className="tech-card">
              <div className="card-title-row">
                <span className="card-icon">
                  <i className={`fas ${group.icon}`} />
                </span>
                <h3>{group.title}</h3>
              </div>
              <div className="tech-list">
                {group.items.map((item) => (
                  <span key={item.label}>
                    <i className={item.icon} />
                    {item.label}
                  </span>
                ))}
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function Career() {
  return (
    <section id="carreira" className="section">
      <div className="container">
        <div className="section-heading">
          <span className="section-kicker">Carreira</span>
          <h2>Formação e experiência profissional.</h2>
        </div>

        <div className="career-grid">
          <div>
            <h3 className="column-title">
              <i className="fas fa-graduation-cap" />
              Jornada acadêmica
            </h3>
            <div className="timeline">
              {education.map((item) => (
                <FadeIn key={item.title} className="timeline-item">
                  <span className={item.active ? 'timeline-dot active' : 'timeline-dot'} />
                  <div>
                    <span className={`badge ${item.active ? 'is-active' : 'is-completed'}`}>
                      {item.status}
                    </span>
                    <span className="date">{item.date}</span>
                    <h4>{item.title}</h4>
                    <strong>{item.org}</strong>
                    <p>{item.desc}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>

          <div>
            <h3 className="column-title">
              <i className="fas fa-briefcase" />
              Onde trabalhei
            </h3>
            <div className="experience-stack">
              {experiences.map((item) => (
                <FadeIn key={`${item.company}-${item.role}`} className="experience-card">
                  <div className="experience-head">
                    <div>
                      <h4>{item.role}</h4>
                      <strong>{item.company}</strong>
                    </div>
                    <div className="experience-meta">
                      <span>{item.period}</span>
                      <span>{item.location}</span>
                    </div>
                  </div>
                  <ul>
                    {item.items.map((line) => (
                      <li key={line}>{line}</li>
                    ))}
                  </ul>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projetos" className="section muted-section">
      <div className="container">
        <div className="section-heading">
          <span className="section-kicker">Projetos</span>
          <h2>Trabalhos que mostram minha evolução prática.</h2>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <FadeIn key={project.name} className="project-card">
              <div className="project-head">
                <span className={`project-icon ${project.logo ? 'has-logo' : ''}`}>
                  {project.logo ? <img src={project.logo} alt="" /> : <i className={`fas ${project.icon}`} />}
                </span>
                <h3>{project.name}</h3>
              </div>
              <p>{project.desc}</p>
              <div className="project-links">
                {project.links.map((link) => (
                  <a key={link.href} href={link.href} target="_blank" rel="noreferrer">
                    <i className="fab fa-github" />
                    {link.label}
                  </a>
                ))}
              </div>
              <div className="project-techs">
                {project.techs.map((icon) => (
                  <i key={icon} className={icon} />
                ))}
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [toast, setToast] = useState(null);

  useEffect(() => {
    if (!toast) return undefined;
    const timer = setTimeout(() => setToast(null), 5000);
    return () => clearTimeout(timer);
  }, [toast]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: 'POST',
        body: formData,
        headers: { Accept: 'application/json' },
      });

      if (!response.ok) throw new Error('Falha no envio');
      form.reset();
      setToast({ type: 'success', message: 'Mensagem enviada com sucesso.' });
    } catch {
      setToast({ type: 'error', message: 'Não foi possível enviar agora. Tente novamente mais tarde.' });
    }
  };

  return (
    <section id="contato" className="section">
      <div className="container contact-grid">
        <div>
          <span className="section-kicker">Contato</span>
          <h2>Vamos conversar?</h2>
          <p className="contact-intro">
            Estou aberto a oportunidades, colaborações e projetos sob demanda.
          </p>
          <div className="contact-links">
            {contacts.map((contact) => (
              <a
                key={contact.href}
                className="contact-link"
                href={contact.href}
                target={contact.href.startsWith('http') ? '_blank' : undefined}
                rel={contact.href.startsWith('http') ? 'noreferrer' : undefined}
              >
                <span className={`contact-icon ${contact.tone}`}>
                  <i className={contact.icon.includes('fab') ? contact.icon : `fas ${contact.icon}`} />
                </span>
                <span>
                  <small>{contact.label}</small>
                  {contact.value}
                </span>
              </a>
            ))}
            <div className="contact-link static">
              <span className="contact-icon location">
                <i className="fas fa-map-marker-alt" />
              </span>
              <span>
                <small>Localização</small>
                Erechim - RS, Brasil
              </span>
            </div>
          </div>
        </div>

        <FadeIn className="contact-form-card">
          <form
            className="contact-form"
            action="https://formsubmit.co/enzobazzideoliveira@gmail.com"
            method="POST"
            onSubmit={handleSubmit}
          >
            <input type="hidden" name="_subject" value="Contato via Portfólio" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />
            <label>
              Nome
              <input type="text" name="name" placeholder="Seu nome" required />
            </label>
            <label>
              E-mail
              <input type="email" name="email" placeholder="seu@email.com" required />
            </label>
            <label>
              Mensagem
              <textarea name="message" rows="5" placeholder="Escreva sua mensagem..." required />
            </label>
            <button type="submit">
              <i className="fas fa-paper-plane" />
              Enviar mensagem
            </button>
          </form>
        </FadeIn>
      </div>

      {toast && (
        <div className={`toast ${toast.type}`}>
          <i className={`fas ${toast.type === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle'}`} />
          {toast.message}
        </div>
      )}
    </section>
  );
}

function Footer() {
  const year = useMemo(() => new Date().getFullYear(), []);

  return (
    <footer className="footer">
      <div className="container">
        <span>© {year} Enzo Bazzi de Oliveira. Todos os direitos reservados.</span>
      </div>
    </footer>
  );
}

export default function App() {
  const [theme, toggleTheme] = useTheme();

  return (
    <>
      <Header theme={theme} onToggleTheme={toggleTheme} />
      <main>
        <Hero />
        <About />
        <Technologies />
        <Career />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
