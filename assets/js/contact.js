// Copiar Email
function copyEmail() {
    navigator.clipboard.writeText('victorfassini21@gmail.com').then(() => {
        const btn = document.querySelector('.copy-btn');
        btn.textContent = 'Copiado!';
        setTimeout(() => {
            btn.textContent = 'Copiar';
        }, 2000);
    });
}

// Toggle Music
let musicPlaying = false;
const bgMusic = document.getElementById('bg-music');

function toggleMusic() {
    const btn = document.getElementById('music-btn');
    if (musicPlaying) {
        bgMusic.pause();
        btn.textContent = '🎵';
        musicPlaying = false;
    } else {
        bgMusic.play().catch(() => {
            // Fallback se não conseguir tocar
            alert('Música não disponível');
        });
        btn.textContent = '🔇';
        musicPlaying = true;
    }
}

// Form Submit
document.querySelector('.contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Mensagem enviada! (Funcionalidade visual)');
});