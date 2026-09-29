document.addEventListener("DOMContentLoaded", () => {
    
    // 1. Botões Entrar e Criar Conta -> index.html
    const btnEntrar = document.getElementById("entrar");
    const btnCriarConta = document.getElementById("btn-criar-conta");

    if (btnEntrar) {
        btnEntrar.addEventListener("click", () => {
            window.location.href = "index.html";
        });
    }

    if (btnCriarConta) {
        btnCriarConta.addEventListener("click", () => {
            window.location.href = "index.html";
        });
    }

    // 2. Botões de "Aprenda com a câmera" e "Ver tudo" -> apresentacao_camera.html
    const linkVerTudo = document.getElementById("link-ver-tudo");

    if (linkVerTudo) {
        linkVerTudo.addEventListener("click", (e) => {
            e.preventDefault();
            window.location.href = "apresentacao_camera.html";
        });
    }

    // 3. Botão Cards pré-prontos -> templates.html
    const btnCardsProntos = document.getElementById("btn-cards-prontos");
    if (btnCardsProntos) {
        btnCardsProntos.addEventListener("click", () => {
            window.location.href = "templates.html";
        });
    }

    // 4. Botão Câmera JOVI -> apresentacao_camera.html
    const btnCameraJovi = document.getElementById("btn-camera-jovi");
    if (btnCameraJovi) {
        btnCameraJovi.addEventListener("click", () => {
            window.location.href = "apresentacao_camera.html";
        });
    }

    // 5. Botão Ranking -> ranking.html
    const btnRanking = document.getElementById("btn-ranking");
    if (btnRanking) {
        btnRanking.addEventListener("click", () => {
            window.location.href = "ranking.html";
        });
    }

    // 6. Botão Assistente Virtual -> assistente_virtual.html
    const btnAssistente = document.getElementById("btn-assistente");
    if (btnAssistente) {
        btnAssistente.addEventListener("click", () => {
            window.location.href = "assistente_virtual.html";
        });
    }
});