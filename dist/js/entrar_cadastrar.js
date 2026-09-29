document.addEventListener('DOMContentLoaded', () => {
    // Elementos da interface
    const btnTabEntrar = document.getElementById('btn-tab-entrar');
    const btnTabCadastrar = document.getElementById('btn-tab-cadastrar');
    const campoNome = document.getElementById('campo-nome');
    const campoConfirmarSenha = document.getElementById('campo-confirmar-senha');
    const containerEsqueciSenha = document.getElementById('container-esqueci-senha');
    const btnSubmit = document.getElementById('btn-submit');
    const btnVisitante = document.getElementById('btn-visitante');
    const textoRodape = document.getElementById('texto-rodape');
    const inputNome = document.getElementById('nome');
    const inputConfirmarSenha = document.getElementById('confirmar-senha');

    // Estado da tela: 'entrar' ou 'cadastrar'
    let modoAtual = 'entrar';

    // Classes de botão selecionado e desselecionado
    const classeAtiva = ['bg-[#1453ED]', 'text-white', 'font-bold', 'shadow-sm'];
    const classeInativa = ['text-[#94A3B8]', 'font-semibold', 'hover:text-[#1E293B]'];

    function alternarModo(novoModo) {
        modoAtual = novoModo;

        if (modoAtual === 'cadastrar') {
            // Estilização das abas
            btnTabCadastrar.classList.add(...classeAtiva);
            btnTabCadastrar.classList.remove(...classeInativa);
            btnTabEntrar.classList.remove(...classeAtiva);
            btnTabEntrar.classList.add(...classeInativa);

            // Exibe campos de cadastro
            campoNome.classList.remove('hidden');
            campoNome.classList.add('flex');
            campoConfirmarSenha.classList.remove('hidden');
            campoConfirmarSenha.classList.add('flex');

            // Torna os novos campos obrigatórios
            inputNome.setAttribute('required', 'true');
            inputConfirmarSenha.setAttribute('required', 'true');

            // Esconde "Esqueci minha senha"
            containerEsqueciSenha.classList.add('hidden');

            // Altera botão de ação e rodapé
            btnSubmit.textContent = 'Criar conta';
            textoRodape.innerHTML = 'Já tem uma conta? <a href="#" id="link-troca-modo" class="text-banner font-bold hover:underline">Fazer login</a>';
        } else {
            // Estilização das abas
            btnTabEntrar.classList.add(...classeAtiva);
            btnTabEntrar.classList.remove(...classeInativa);
            btnTabCadastrar.classList.remove(...classeAtiva);
            btnTabCadastrar.classList.add(...classeInativa);

            // Oculta campos de cadastro
            campoNome.classList.add('hidden');
            campoNome.classList.remove('flex');
            campoConfirmarSenha.classList.add('hidden');
            campoConfirmarSenha.classList.remove('flex');

            // Remove obrigatoriedade
            inputNome.removeAttribute('required');
            inputConfirmarSenha.removeAttribute('required');

            // Exibe "Esqueci minha senha"
            containerEsqueciSenha.classList.remove('hidden');

            // Altera botão de ação e rodapé
            btnSubmit.textContent = 'Entrar';
            textoRodape.innerHTML = 'Não tem conta? <a href="#" id="link-troca-modo" class="text-banner font-bold hover:underline">Criar agora</a>';
        }

        // Reatribui evento ao novo link do rodapé
        const linkTroca = document.getElementById('link-troca-modo');
        if (linkTroca) {
            linkTroca.addEventListener('click', (e) => {
                e.preventDefault();
                alternarModo(modoAtual === 'entrar' ? 'cadastrar' : 'entrar');
            });
        }
    }

    // Eventos de clique nas abas
    btnTabCadastrar.addEventListener('click', () => alternarModo('cadastrar'));
    btnTabEntrar.addEventListener('click', () => alternarModo('entrar'));

    // Evento no link do rodapé inicial
    const linkInicial = document.getElementById('link-troca-modo');
    if (linkInicial) {
        linkInicial.addEventListener('click', (e) => {
            e.preventDefault();
            alternarModo('cadastrar');
        });
    }

    // Redirecionamento visitante
    btnVisitante.addEventListener('click', () => {
        window.location.href = './inicio.html';
    });
});