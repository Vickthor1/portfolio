# ⚡ Portfólio — Vickthor1

Meu portfólio pessoal desenvolvido com foco em identidade visual forte, interatividade e experiência moderna para web.

O projeto foi pensado para transmitir uma estética futurista/cyberpunk sem sacrificar performance, responsividade e usabilidade.

---

# ✨ Principais Recursos

- Menu radial totalmente interativo
- Interface futurista com visual cyberpunk clean
- Sistema de tema escuro/claro
- Consumo automático da API do GitHub
- Cards de projetos com efeito glassmorphism
- Timeline animada
- Sistema de skills com barras dinâmicas
- Modais interativos para projetos
- Scroll reveal animations
- Typing effect no hero
- Partículas e efeitos visuais em background
- Design totalmente responsivo
- Estrutura otimizada para GitHub Pages

---

# 🧠 Tecnologias Utilizadas

- HTML5
- CSS3
- JavaScript Vanilla (ES6+)
- GitHub API
- Intersection Observer API
- LocalStorage

---

# 🎨 Conceito Visual

O design foi inspirado em interfaces HUD futuristas, painéis holográficos e sistemas cyberpunk modernos.

### Elementos visuais utilizados:

- Glassmorphism
- Neon glow
- Motion design
- HUD elements
- Blur effects
- Microinterações
- Interface sci-fi minimalista

---

# 📂 Estrutura do Projeto

```bash
portfolio/
│
├── index.html
├── projects.html
├── about.html
├── contact.html
│
├── assets/
│   ├── css/
│   │   ├── styles.css
│   │   └── particles.css
│   │
│   ├── js/
│   │   ├── scripts.js
│   │   ├── projects.js
│   │   ├── about.js
│   │   └── contact.js
│   │
│   ├── images/
│   └── audio/
│
└── README.md
```

---

# 🚀 Como Executar

## Rodando Localmente

Clone o repositório:

```bash
git clone https://github.com/Vickthor1/portfolio.git
```

Entre na pasta:

```bash
cd portfolio
```

Inicie um servidor local:

```bash
python -m http.server 8000
```

Abra no navegador:

```bash
http://localhost:8000
```

---

# 🌐 Deploy no GitHub Pages

1. Faça upload do projeto para um repositório GitHub
2. Vá em:

```bash
Settings → Pages
```

3. Configure:

```bash
Branch: main
Folder: /root
```

4. O site ficará disponível em:

```bash
https://seu-usuario.github.io/portfolio
```

---

# 🎵 Música Ambiente

O sistema possui suporte para música ambiente opcional.

Para ativar:

```bash
assets/audio/ambient.mp3
```

Adicione um arquivo `.mp3` com esse nome e o player será habilitado automaticamente.

---

# ⚙️ Personalização

## Alterando cores

Edite as variáveis em:

```css
:root {
    --text-secondary: #ff4444;
    --accent: #cc0000;
}
```

---

## Alterando informações

### Nome
Edite diretamente no HTML.

### Projetos
Os projetos são carregados automaticamente pela GitHub API.

### Tecnologias do menu radial
Edite no:

```bash
scripts.js
```

---

# 📱 Responsividade

O projeto foi desenvolvido pensando em múltiplos dispositivos:

- Desktop
- Notebook
- Tablet
- Smartphones

Com otimizações específicas para:
- Touch
- Performance mobile
- Redução de animações pesadas
- Layout adaptativo

---

# 🔌 APIs e Recursos Utilizados

### GitHub API
```bash
https://api.github.com/users/Vickthor1/repos
```

### Recursos nativos:
- Fullscreen API
- Navigator Clipboard
- LocalStorage
- IntersectionObserver

---

# 🔥 Diferenciais do Projeto

- Visual extremamente personalizado
- Estrutura sem frameworks pesados
- Código organizado e modular
- Performance otimizada
- Experiência visual dinâmica
- UX focada em impacto visual
- Identidade própria

---

# 📌 Objetivo

Esse projeto foi criado como meu portfólio principal para apresentar:
- projetos
- habilidades
- experiências
- identidade visual
- criatividade como desenvolvedor

---

# 📄 Licença

Projeto open-source para fins de estudo e inspiração.

---

# 👨‍💻 Autor

### Vickthor1

Desenvolvedor focado em:
- Front-end
- Interfaces interativas
- UI/UX futurista
- Experiências web criativas
- Sistemas visuais modernos
