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

## Como Rodar

```bash
# Clone o repositório
git clone https://github.com/Enzo1010/enzo-portfolio.git
cd enzo-portfolio

# Instale as dependências (apenas live-server)
npm install

# Inicie o servidor de desenvolvimento
npm run dev
```

Acesse `http://localhost:3000` (ou a porta indicada no terminal).

---

## Personalização

### Informações pessoais
Edite diretamente o `index.html` — as seções estão comentadas e organizadas.

### Cores
Altere as variáveis em `assets/css/variables.css`:
```css
--green-500: #22c55e;
--green-600: #16a34a;
--green-700: #15803d;
```

### Header e Footer
Os componentes ficam em `components/header.js` e `components/footer.js` — são renderizados via JS no carregamento da página.

### Formulário de contato
O formulário usa [FormSubmit](https://formsubmit.co/). Para trocar o e-mail de destino, altere o `action` do `<form>` na seção de contato.

---

## Licença

Este projeto é de uso pessoal. Sinta-se livre para usar como referência.

## 🎨 Cores Personalizadas

O portfólio usa um sistema de cores baseado no Tailwind. Para alterar as cores principais, modifique a configuração no `<head>`:

```javascript
tailwind.config = {
    theme: {
        extend: {
            colors: {
                'primary': '#3b82f6',    // Cor principal 
                'secondary': '#1e40af',  // Cor secundária
            }
        }
    }
}
```

## 📱 Como Visualizar

1. Abra o arquivo `index.html` em qualquer navegador web
2. Ou use a extensão "Live Server" no VS Code para visualização em tempo real

## 🚀 Como Hospedar

### GitHub Pages (Gratuito)
1. Crie um repositório no GitHub
2. Faça upload do arquivo `index.html`
3. Ative o GitHub Pages nas configurações do repositório

### Netlify (Gratuito)
1. Arraste a pasta do projeto para netlify.com
2. Seu site estará online em segundos

### Vercel (Gratuito)
1. Conecte seu repositório GitHub ao Vercel
2. Deploy automático a cada commit

## 📝 Dicas de Personalização

- **Imagens**: Use imagens otimizadas (WebP quando possível)
- **Icons**: Explore mais ícones em [FontAwesome](https://fontawesome.com/icons)
- **Cores**: Use [Tailwind Color Palette](https://tailwindcss.com/docs/customizing-colors)
- **Animações**: Adicione mais animações editando o CSS no final do HTML

## 🐛 Troubleshooting

- **Ícones não aparecem**: Verifique se o CDN do Font Awesome está carregando
- **Layout quebrado**: Verifique se o CDN do Tailwind está funcionando
- **Menu mobile não funciona**: Verifique se o JavaScript está sendo executado

---

**Desenvolvido por Enzo Bazzi**