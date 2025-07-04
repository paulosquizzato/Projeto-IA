    const painel = document.getElementById('painel-overlay');
    const botoesFechar = document.querySelectorAll('.fechar-painel');

    function abrirPainel(id) {
        document.querySelectorAll('.painel-box').forEach(el => el.classList.remove('active'));
        document.getElementById(id).classList.add('active');
        painel.classList.add('ativo');
    }

    // Eventos nos pontos
    document.querySelector('.chatgpt').addEventListener('click', () => abrirPainel('painel-chatgpt'));
    document.querySelector('.deepseek').addEventListener('click', () => abrirPainel('painel-deepseek'));
    document.querySelector('.blackbox').addEventListener('click', () => abrirPainel('painel-blackbox'));
    document.querySelector('.leonardoai').addEventListener('click', () => abrirPainel('painel-leonardoai'));

    // Fechar painel
    botoesFechar.forEach(btn => {
        btn.addEventListener('click', () => {
            painel.classList.remove('ativo');
        });
    });

    painel.addEventListener('click', (e) => {
        if (e.target === painel) {
            painel.classList.remove('ativo');
        }
    });
    const toggleBtn = document.getElementById("toggle-btn");
    const toggleIcon = document.getElementById("toggle-icon");

    let isDark = true;

    toggleBtn.addEventListener("click", () => {
        if (isDark) {
            toggleIcon.src = "Img/sun.png";
        } else {
            toggleIcon.src = "Img/moon-stars.png";
        }
        isDark = !isDark;
    });