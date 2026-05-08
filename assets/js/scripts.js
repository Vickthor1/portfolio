// Cursor removido - usando cursor padrão do navegador

// Typing Effect
function typeWriter(text, element, speed = 100) {
    let i = 0;
    element.textContent = '';
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
}

// Preload
window.addEventListener('load', () => {
    setTimeout(() => {
        document.getElementById('preload').style.opacity = '0';
        setTimeout(() => {
            document.getElementById('preload').style.display = 'none';
            // Iniciar typing effect após preload
            const subtitle = document.getElementById('typing-text');
            typeWriter('Desenvolvedor Web • Interfaces Interativas • Sistemas Criativos', subtitle);
        }, 500);
    }, 1000);
});

// Partículas
function createParticles() {
    const particlesContainer = document.getElementById('particles');
    const particleCount = window.innerWidth < 768 ? 20 : 35; // Menos partículas no mobile
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 10 + 's';
        particle.style.animationDuration = (Math.random() * 10 + 15) + 's'; // Mais lento
        particlesContainer.appendChild(particle);
    }
}

createParticles();

// Menu Radial
document.addEventListener('DOMContentLoaded', () => {
    // Menu começa fechado para melhor UX
    // Removido auto-expand
});

document.getElementById('menu-toggle').addEventListener('click', () => {
    const menuItems = document.querySelector('.menu-items');
    const isActive = menuItems.classList.contains('active');
    
    if (isActive) {
        menuItems.classList.remove('active');
    } else {
        menuItems.classList.add('active');
    }
});

// Toggle Theme
function toggleTheme() {
    const body = document.body;
    const themeBtn = document.getElementById('theme-btn');
    
    if (body.getAttribute('data-theme') === 'light') {
        body.removeAttribute('data-theme');
        themeBtn.textContent = '🌙';
        localStorage.setItem('theme', 'dark');
    } else {
        body.setAttribute('data-theme', 'light');
        themeBtn.textContent = '☀️';
        localStorage.setItem('theme', 'light');
    }
}

// Load Theme
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'light') {
    document.body.setAttribute('data-theme', 'light');
    document.getElementById('theme-btn').textContent = '☀️';
}

// Painel Lateral
function openPanel(tech) {
    // Fechar painel anterior se estiver aberto
    closePanel();
    
    const panel = document.getElementById('side-panel');
    const title = document.getElementById('panel-title');
    const subtitle = document.getElementById('panel-subtitle');
    const description = document.getElementById('panel-description');
    const levelBar = document.getElementById('level-bar');
    const relatedProjects = document.getElementById('related-projects');
    
    const techData = {
        html: {
            title: 'HTML5',
            subtitle: 'Estrutura Semântica',
            description: 'Linguagem de marcação semântica para estruturação de conteúdo web. Especialista em acessibilidade, SEO e arquitetura de informação.',
            level: 95,
            projects: ['Portfólio Responsivo', 'Landing Pages Otimizadas']
        },
        css: {
            title: 'CSS3',
            subtitle: 'Estilos Avançados',
            description: 'Folhas de estilo avançadas com animações, grid, flexbox e design responsivo. Mestre em glassmorphism, efeitos visuais e interfaces futuristas.',
            level: 90,
            projects: ['Interfaces Sci-Fi', 'Animações Performáticas']
        },
        js: {
            title: 'JavaScript',
            subtitle: 'Interatividade Pura',
            description: 'Programação front-end pura, manipulação DOM avançada, APIs e interatividade. Especialista em ES6+, performance e UX interativa.',
            level: 85,
            projects: ['Menus Radiais', 'Aplicações Web Dinâmicas']
        },
        laravel: {
            title: 'Laravel',
            subtitle: 'Framework PHP',
            description: 'Framework PHP para desenvolvimento de aplicações web robustas. Especialista em MVC, autenticação, APIs REST e arquitetura escalável.',
            level: 80,
            projects: ['Sistemas Web Empresariais', 'APIs RESTful']
        },
        php: {
            title: 'PHP',
            subtitle: 'Backend Dinâmico',
            description: 'Linguagem server-side para desenvolvimento web dinâmico. Experiência avançada em OOP, padrões de design e integração com bancos de dados.',
            level: 75,
            projects: ['CRUD Applications', 'Sistemas de Gestão']
        },
        github: {
            title: 'GitHub',
            subtitle: 'Controle de Versão',
            description: 'Controle de versão distribuído, colaboração em equipe, CI/CD e automação. Especialista em Git flow, pull requests e DevOps.',
            level: 90,
            projects: ['Version Control Profissional', 'Open Source']
        },
        apis: {
            title: 'APIs',
            subtitle: 'Integração de Serviços',
            description: 'Desenvolvimento e consumo de APIs RESTful. Integração com serviços externos, autenticação OAuth e arquitetura de microserviços.',
            level: 70,
            projects: ['Integrações Externas', 'Microserviços']
        }
    };
    
    const data = techData[tech];
    title.textContent = data.title;
    subtitle.textContent = data.subtitle;
    description.textContent = data.description;
    
    // Animação da barra de nível
    setTimeout(() => {
        levelBar.style.setProperty('--level', data.level + '%');
    }, 500);
    
    // Projetos relacionados
    relatedProjects.innerHTML = '<h4>Projetos Relacionados:</h4><ul>' + 
        data.projects.map(project => `<li>${project}</li>`).join('') + '</ul>';
    
    panel.classList.add('active');
    
    // Focar no painel para acessibilidade
    panel.focus();
    const colors = ['#0a0a0a', '#1a1a2e', '#16213e', '#0f3460'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.background = `linear-gradient(135deg, ${randomColor} 0%, #1a1a2e 50%, #16213e 100%)`;
}

function closePanel() {
    document.getElementById('side-panel').classList.remove('active');
    document.body.style.background = 'var(--bg-primary)';
}

// Scroll to Menu
function scrollToMenu() {
    document.getElementById('menu-section').scrollIntoView({ behavior: 'smooth' });
}

// Fetch GitHub Repos
async function fetchGitHubRepos() {
    try {
        const response = await fetch('https://api.github.com/users/Vickthor1/repos?sort=updated&per_page=10');
        if (!response.ok) {
            throw new Error('Erro na resposta da API');
        }
        const repos = await response.json();
        console.log('Repositórios carregados:', repos.length);
        displayProjects(repos);
    } catch (error) {
        console.error('Erro ao buscar repositórios:', error);
        // Fallback com projetos mock
        const mockRepos = [
            {
                name: 'Portfólio Interativo',
                description: 'Site de portfólio moderno com menu radial',
                language: 'JavaScript',
                html_url: '#'
            },
            {
                name: 'Sistema Web Laravel',
                description: 'Aplicação web desenvolvida com Laravel',
                language: 'PHP',
                html_url: '#'
            },
            {
                name: 'Interface Criativa',
                description: 'Projeto experimental de UI/UX',
                language: 'CSS',
                html_url: '#'
            }
        ];
        displayProjects(mockRepos);
    }
}

function displayProjects(repos) {
    const grid = document.getElementById('projects-grid');
    grid.innerHTML = '';

    // Mapeamento de descrições melhoradas
    const projectDescriptions = {
        'Emprego-Seguro': 'Sistema web completo para gestão de empregos e candidaturas. Desenvolvido com Laravel, PHP e interface responsiva. Inclui funcionalidades de busca avançada, filtros e painel administrativo.',
        'Beck_end': 'API RESTful robusta desenvolvida em Python. Arquitetura escalável com autenticação JWT, documentação Swagger e integração com bancos de dados relacionais.',
        'emprego_seguro_atualizado': 'Versão aprimorada do sistema de empregos. Interface moderna com Vue.js, backend Laravel e funcionalidades avançadas de matching entre candidatos e vagas.',
        'BookManager': 'Sistema completo de gestão de biblioteca. CRUD avançado, controle de empréstimos, relatórios e interface administrativa. Desenvolvido com PHP puro e MySQL.',
        'tasks-api': 'API de gerenciamento de tarefas com arquitetura REST. Autenticação, autorização, validações e documentação completa. Desenvolvida em Python com FastAPI.',
        'usermanager': 'Sistema de gestão de usuários com perfis customizáveis. Controle de permissões, autenticação segura e interface responsiva. Laravel + Blade templates.',
        'taskflow': 'Aplicação web para fluxo de trabalho colaborativo. Kanban interativo, notificações em tempo real e integração com APIs externas. PHP + JavaScript.',
        'applyflow': 'Plataforma de recrutamento automatizada. Matching inteligente, avaliações automatizadas e dashboard analítico. Laravel com interface moderna.',
        'Vickthor1': 'Repositório principal do portfólio. Coleção de projetos experimentais, protótipos e demonstrações técnicas.',
        'BotecodoRusso1': 'Sistema de automação e integração. Scripts Python para processamento de dados, APIs e automação de workflows.'
    };

    repos.forEach(repo => {
        const card = document.createElement('div');
        card.className = 'project-card reveal';

        const languages = repo.language ? `<span class="language-tag">${repo.language}</span>` : '';

        // Usar descrição melhorada se disponível, senão usar a do repo ou fallback
        const description = projectDescriptions[repo.name] || repo.description || 'Projeto em desenvolvimento com tecnologias modernas e melhores práticas de programação.';

        card.innerHTML = `
            <h3>${repo.name.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}</h3>
            <p>${description}</p>
            <div class="project-languages">${languages}</div>
            <div class="project-links">
                <a href="${repo.html_url}" target="_blank" class="btn">Ver Projeto</a>
                <a href="${repo.html_url}" target="_blank" class="btn">GitHub</a>
            </div>
        `;

        grid.appendChild(card);
    });

    // Scroll Reveal
    const reveals = document.querySelectorAll('.reveal');
    const revealOnScroll = () => {
        reveals.forEach(reveal => {
            const elementTop = reveal.getBoundingClientRect().top;
            const elementVisible = 150;

            if (elementTop < window.innerHeight - elementVisible) {
                reveal.classList.add('active');
            }
        });
    };

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll();
}

// Inicializar
fetchGitHubRepos();

// Scanlines Effect
document.addEventListener('DOMContentLoaded', () => {
    const scanlines = document.createElement('div');
    scanlines.className = 'scanlines';
    document.body.appendChild(scanlines);
});