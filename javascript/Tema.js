// Painel
const painel = document.getElementById('painel-overlay');
const botoesFechar = document.querySelectorAll('.fechar-painel');

// Abrir painel ao clicar nos pontos
function abrirPainel(id) {
    document.querySelectorAll('.painel-box').forEach(el => el.classList.remove('active'));
    const box = document.getElementById(id);
    if (box) {
        box.classList.add('active');
        painel.classList.add('ativo');
    }
}

document.querySelector('.chatgpt')?.addEventListener('click', () => abrirPainel('painel-chatgpt'));
document.querySelector('.notebooklm')?.addEventListener('click', () => abrirPainel('painel-notebooklm'));
document.querySelector('.pippitIA')?.addEventListener('click', () => abrirPainel('painel-pippitia'));
document.querySelector('.elevenlabs')?.addEventListener('click', () => abrirPainel('painel-elevenlabs'));
document.querySelector('.midjourney')?.addEventListener('click', () => abrirPainel('painel-midjourney'));
document.querySelector('.gemini')?.addEventListener('click', () => abrirPainel('painel-gemini'));

botoesFechar.forEach(btn => {
    btn.addEventListener('click', () => {
        painel.classList.remove('ativo');
        document.querySelectorAll('.painel-box').forEach(el => el.classList.remove('active'));
    });
});

painel.addEventListener('click', (e) => {
    if (e.target === painel) {
        painel.classList.remove('ativo');
        document.querySelectorAll('.painel-box').forEach(el => el.classList.remove('active'));
    }
});

// Tema.js
document.addEventListener("DOMContentLoaded", () => {
    const toggleBtn = document.getElementById("toggle-btn");
    const toggleIcon = document.getElementById("toggle-icon");
    const body = document.body;

    // Aplica tema salvo (se houver)
    const temaSalvo = localStorage.getItem("tema");
    if (temaSalvo === "dark") {
        body.classList.add("dark");
        if (toggleIcon) toggleIcon.src = "img/sun.png";
    } else {
        body.classList.remove("dark");
        if (toggleIcon) toggleIcon.src = "img/moon-stars.png";
    }

    // Alternar tema ao clicar
    if (toggleBtn) {
        toggleBtn.addEventListener("click", () => {
            body.classList.toggle("dark");

            const modoAtual = body.classList.contains("dark") ? "dark" : "light";
            localStorage.setItem("tema", modoAtual);

            // Atualiza ícone
            if (toggleIcon) {
                toggleIcon.src = modoAtual === "dark" ? "img/sun.png" : "img/moon-stars.png";
            }
        });
    }
});