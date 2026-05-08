// Copiar Email
function copyEmail() {
    navigator.clipboard.writeText('victorfassini21@gmail.com').then(() => {
        alert('Email copiado para a área de transferência!');
    });
}

// Timeline Animation
const timelineItems = document.querySelectorAll('.timeline-item');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
});

timelineItems.forEach(item => {
    observer.observe(item);
});

// Skills Animation
const skillFills = document.querySelectorAll('.skill-fill');

const skillsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const fill = entry.target;
            const width = fill.style.width;
            fill.style.width = '0%';
            setTimeout(() => {
                fill.style.width = width;
            }, 500);
        }
    });
});

skillFills.forEach(fill => {
    skillsObserver.observe(fill);
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