# Portfólio - Enzo Bazzi de Oliveira

Portfólio pessoal desenvolvido com React e Vite, com foco em apresentação profissional direta, layout responsivo, tema claro/escuro e build estático para hospedagem.

## Stack

- React
- Vite
- CSS custom properties
- Font Awesome via CDN
- FormSubmit para envio do formulário

## Scripts

```bash
npm install
npm run dev
npm run build
npm run preview
```

## Estrutura

```text
enzo-portfolio/
├── index.html
├── package.json
├── vite.config.js
├── public/
│   ├── CNAME
│   └── assets/img/
└── src/
    ├── App.jsx
    ├── main.jsx
    └── styles.css
```

## Deploy

O comando `npm run build` gera a pasta `dist/`, pronta para publicação em hospedagem estática. O arquivo `public/CNAME` é copiado automaticamente para `dist/CNAME`, mantendo o domínio `enzobazzi.dev`.
