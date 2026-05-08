# Portfólio Vickthor1

Um portfólio futurista e altamente interativo para desenvolvedor criativo, hospedado no GitHub Pages.

## ✨ Funcionalidades

- **Menu Radial Interativo**: Menu circular com 7 tecnologias, animações fluidas e mudança dinâmica de conteúdo
- **Projetos Automáticos**: Consumo da API GitHub para exibir repositórios com cards glassmorphism
- **Experiências Interativas**: Modal com iframe para projetos GitHub Pages
- **Sobre Mim**: Timeline animada e barras de habilidades
- **Contato**: Formulário moderno com validação visual
- **Tema Dinâmico**: Alternador entre modo escuro/claro
- **Cursor Padrão**: Mouse normal do navegador
- **Typing Effect**: Animação de digitação no hero
- **Partículas**: Fundo animado com elementos flutuantes
- **Scroll Reveal**: Animações ao rolar a página
- **Música Ambiente**: Player opcional (adicione seu próprio arquivo de áudio)
- **Responsivo**: Funciona perfeitamente em desktop, tablet e mobile

## 🎨 Design

- **Cyberpunk Clean**: Estética futurista com neon suave
- **Glassmorphism**: Efeitos de blur e transparência
- **Motion Design**: Animações fluidas e microinterações
- **Paleta**: Azul neon, roxo, cyan, laranja tecnológico
- **Tipografia**: Moderna e legível

## 🛠️ Tecnologias

- **HTML5**: Semântico e acessível
- **CSS3**: Grid, Flexbox, animações, variáveis CSS
- **JavaScript Puro**: ES6+, DOM manipulation, APIs
- **GitHub API**: Consumo de dados de repositórios
- **IntersectionObserver**: Scroll reveals
- **LocalStorage**: Persistência de tema

## 📁 Estrutura

```
portfolio/
├── index.html              # Página inicial com hero e menu radial
├── projects.html           # Projetos e experiências interativas
├── about.html              # Sobre mim com timeline e skills
├── contact.html            # Página de contato
├── assets/
│   ├── css/
│   │   ├── styles.css      # Estilos principais com variáveis CSS
│   │   └── particles.css   # Animações de partículas
│   ├── js/
│   │   ├── scripts.js      # Lógica da página inicial
│   │   ├── projects.js     # Lógica de projetos
│   │   ├── about.js        # Lógica da página sobre
│   │   └── contact.js      # Lógica de contato
│   └── images/             # Imagens e favicon
└── README.md
```

## 🚀 Como Usar

### Desenvolvimento Local
1. Clone ou baixe o repositório
2. Abra um terminal na pasta do projeto
3. Execute: `python -m http.server 8000`
4. Acesse: `http://localhost:8000`

### GitHub Pages
1. Faça upload para um repositório GitHub
2. Vá em Settings > Pages
3. Selecione branch main e pasta root
4. Site disponível em: `https://seu-usuario.github.io/portfolio`

## 🎵 Música Ambiente

Para adicionar música ambiente:
1. Crie a pasta `assets/audio/`
2. Adicione seu arquivo MP3 como `ambient.mp3`
3. O player aparecerá no canto inferior direito

## 🎨 Personalização

### Cores
Edite as variáveis CSS em `:root` no `styles.css`:
```css
--bg-primary: linear-gradient(...);
--text-secondary: #ff4444;
--accent: #cc0000;
```

### Conteúdo
- **Nome**: Edite em `index.html`
- **Subtítulo**: Modifique o texto no `scripts.js`
- **Links**: Atualize URLs em todas as páginas
- **Projetos**: Automaticamente da API GitHub

### Menu Radial
Tecnologias em `scripts.js` na função `openPanel()`.

## 📱 Responsividade

- **Desktop**: Layout completo com menu radial
- **Tablet**: Menu adaptado, grid responsivo
- **Mobile**: Menu simplificado, cards empilhados

## 🔧 APIs Utilizadas

- **GitHub API**: `https://api.github.com/users/Vickthor1/repos`
- **Navigator.clipboard**: Copiar email
- **Fullscreen API**: Modal em tela cheia

## 🌟 Destaques

- **Interatividade Máxima**: Menu radial, modais, hover effects
- **Performance**: Código otimizado, lazy loading
- **Acessibilidade**: Semântica HTML, navegação por teclado
- **SEO**: Meta tags, estrutura limpa
- **UX Premium**: Loading states, feedback visual

## 📄 Licença

Código open source. Use e modifique livremente.

---

**Criado com ❤️ para impressionar recrutadores e visitantes**