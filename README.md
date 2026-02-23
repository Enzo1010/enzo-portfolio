# Portfólio — Enzo Bazzi de Oliveira

Portfólio pessoal estilo landing page para apresentação profissional. Desenvolvido com HTML5, CSS modular e JavaScript puro (ES Modules), sem frameworks ou bundlers.

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-264DE4?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=000)

---

## Seções

| Seção | Descrição |
|-------|-----------|
| **Hero** | Nome, cargo e foto de perfil |
| **Sobre mim** | Resumo profissional, idiomas e tags de perfil |
| **Tecnologias** | Front-end, Back-end, Banco de Dados e Outros (layout em grid 2 colunas) |
| **Formação** | Timeline com formação acadêmica |
| **Experiência** | Cards com experiências profissionais |
| **Projetos** | Cards de projetos com links para repositórios |
| **Contato** | Redes sociais com ícones coloridos + formulário de e-mail |

---

## Estrutura do Projeto

```
enzo-portfolio/
├── index.html                  # Página principal
├── README.md
├── assets/
│   ├── css/
│   │   ├── style.css           # Entry point (importa todos os módulos)
│   │   ├── variables.css       # Tokens de design (cores, sombras, radius)
│   │   ├── base.css            # Reset, container, seção base
│   │   ├── header.css          # Navbar e menu mobile
│   │   ├── hero.css            # Hero section e foto
│   │   ├── sections.css        # About, tech, career, projects, contact
│   │   ├── footer.css          # Footer
│   │   ├── animations.css      # Fade-in e stagger delays
│   │   └── responsive.css      # Media queries (768px / 480px)
│   ├── img/
│   │   ├── me.jpeg             # Foto de perfil
│   │   └── app-logo-sfundo.png # Logo do projeto NegoMaq
│   └── js/
│       └── main.js             # JS principal (scroll, observer, mobile menu)
└── components/
    ├── header.js               # Componente do header (ES Module)
    └── footer.js               # Componente do footer (ES Module)
```

---

## Tecnologias Utilizadas

- **HTML5** — Estrutura semântica
- **CSS3** — Arquitetura modular com `@import` e custom properties
- **JavaScript** — ES Modules, IntersectionObserver, smooth scroll
- **Font Awesome 6.5** — Ícones (via CDN)
- **Google Fonts (Inter)** — Tipografia
- **FormSubmit** — Envio de formulário por e-mail (sem backend)
---
**Desenvolvido por Enzo Bazzi**