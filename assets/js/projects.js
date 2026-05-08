// Projetos Interativos
async function fetchGitHubPages() {
    try {
        const response = await fetch('https://api.github.com/users/Vickthor1/repos?sort=updated&per_page=20');
        const repos = await response.json();
        
        // Filtrar repositórios que parecem ter páginas (exemplo: nomes com 'pages' ou descrições indicando)
        const pagesRepos = repos.filter(repo => 
            repo.name.toLowerCase().includes('page') || 
            repo.description && repo.description.toLowerCase().includes('page') ||
            repo.homepage
        );
        
        displayInteractiveProjects(pagesRepos);
    } catch (error) {
        console.error('Erro ao buscar projetos:', error);
    }
}

function displayInteractiveProjects(repos) {
    const grid = document.getElementById('interactive-grid');
    grid.innerHTML = '';
    
    repos.forEach(repo => {
        const card = document.createElement('div');
        card.className = 'project-card';
        
        card.innerHTML = `
            <h3>${repo.name}</h3>
            <p>${repo.description || 'Projeto interativo'}</p>
            <button class="btn" onclick="openModal('${repo.homepage || `https://vickthor1.github.io/${repo.name}`}', '${repo.name}')">Visualizar</button>
        `;
        
        grid.appendChild(card);
    });
}

function openModal(url, title) {
    const modal = document.getElementById('project-modal');
    const iframe = document.getElementById('project-iframe');
    const modalTitle = document.getElementById('modal-title');
    
    modalTitle.textContent = title;
    iframe.src = url;
    modal.style.display = 'block';
    
    document.querySelector('.close-modal').onclick = () => {
        modal.style.display = 'none';
        iframe.src = '';
    };
    
    window.onclick = (event) => {
        if (event.target == modal) {
            modal.style.display = 'none';
            iframe.src = '';
        }
    };
}

function toggleFullscreen() {
    const modal = document.querySelector('.modal-content');
    if (!document.fullscreenElement) {
        modal.requestFullscreen().catch(err => {
            console.error('Erro ao entrar em fullscreen:', err);
        });
    } else {
        document.exitFullscreen();
    }
}

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

// Inicializar
fetchGitHubPages();