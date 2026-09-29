const imagensFundo = [
    './images/mascote/Bg_Estudio_Fotografico.png',
    './images/mascote/Bg_Cozinha.png',
    './images/mascote/Bg_Banheiro.png',
    './images/mascote/Bg_Quarto.png'
];

imagensFundo.forEach(function (caminho) {
    const img = new Image();
    img.src = caminho;
});

let moedas = 100;
let diversao = 20;
let fome = 15;
let higiene = 80;
let sono = 100;
let timerAcao;
let comodoAtual = 'estudio';
let nivel = 5;
let xp = 820;
let xpMaximo = 1000;

const textoMoedas = document.getElementById('texto-moedas');
const fillDiversao = document.getElementById('fill-diversao');
const fillFome = document.getElementById('fill-fome');
const fillHigiene = document.getElementById('fill-higiene');
const fillSono = document.getElementById('fill-sono');

const voltar = document.getElementById("voltar");
const btnLoja = document.getElementById("btn-loja");
const btnPersonalizar = document.getElementById("btn-personalizar");
const btnGuardaroupa = document.getElementById("btn-guardaroupa");
const btnAjuda = document.getElementById("btn-ajuda");

const telaPrincipal = document.getElementById("tela-principal");
const navEstudio = document.getElementById("nav-estudio"), boxEstudio = document.getElementById("box-estudio"), textoEstudio = document.getElementById("texto-estudio");
const navCozinha = document.getElementById("nav-cozinha"), boxCozinha = document.getElementById("box-cozinha"), textoCozinha = document.getElementById("texto-cozinha");
const navBanheiro = document.getElementById("nav-banheiro"), boxBanheiro = document.getElementById("box-banheiro"), textoBanheiro = document.getElementById("texto-banheiro");
const navQuarto = document.getElementById("nav-quarto"), boxQuarto = document.getElementById("box-quarto"), textoQuarto = document.getElementById("texto-quarto");

const btnAcao = document.getElementById('btn-acao');
const fillAcao = document.getElementById('fill-acao');
const iconAcao = document.getElementById('icon-acao');

const textosNivel = document.querySelectorAll('.txt-nivel');
const textoXP = document.getElementById('texto-xp');
const fillXP = document.getElementById('fill-xp');

const imgMascote = document.getElementById('imagem-mascote')

function atualizarTela() {
    textoMoedas.innerHTML = moedas;

    fillDiversao.style.height = diversao + "%";
    atualizarCorBarra(fillDiversao, diversao);

    fillFome.style.height = fome + "%";
    atualizarCorBarra(fillFome, fome);

    fillHigiene.style.height = higiene + "%";
    atualizarCorBarra(fillHigiene, higiene);

    fillSono.style.height = sono + "%";
    atualizarCorBarra(fillSono, sono);

    if (textosNivel.length > 0) {
        textosNivel.forEach(function (elemento) {
            elemento.innerHTML = nivel;
        });
    }

    if (textoXP && fillXP) {
        textoXP.innerHTML = `${xp} / ${xpMaximo} XP para o próximo`;

        let percentagemXP = (xp / xpMaximo) * 100;
        fillXP.style.width = percentagemXP + "%";
    }

    if (imgMascote) {
        if (diversao > 60 && fome > 60 && higiene > 60 && sono > 60) {
            imgMascote.src = "./images/mascote/Mascote_Feliz.png";
        } else {
            imgMascote.src = "./images/mascote/Mascote_Triste.png";
        }
    }

    guardarJogo();
}


voltar.addEventListener('click', function () {
    window.history.back();
});


btnLoja.addEventListener('click', function () {
    alert("Em breve: Aqui terá uma lojinha cheia de itens incríveis para o seu mascote!");
})

btnPersonalizar.addEventListener('click', function () {
    alert("Em breve: Você poderá editar e decorar o cenário do seu mascote do seu jeito!");
})

btnGuardaroupa.addEventListener('click', function () {
    alert("Em breve: Você poderá mudar as roupinhas e o estilo do seu mascote aqui!");
})

btnAjuda.addEventListener('click', function () {
    alert("Como jogar: Fique de olho nas barrinhas da esquerda! Navegue pelos cômodos no menu inferior e segure o botão do cômodo para cuidar do seu mascote. Lembre-se que cada ação gasta 3 moedas! As moedas são conquistadas com os desafios feitos!");
})


function limparDestaque() {

    navEstudio.classList.remove('-translate-y-5');
    navEstudio.classList.add('group', 'hover:-translate-y-5');
    boxEstudio.classList.remove('bg-white', 'border-gray-300', 'shadow-sm');
    boxEstudio.classList.add('border-transparent', 'group-hover:bg-white', 'group-hover:border-gray-300', 'group-hover:shadow-sm');
    textoEstudio.classList.remove('-bottom-7', 'whitespace-nowrap');
    textoEstudio.classList.add('-bottom-5', 'opacity-0', 'group-hover:opacity-100', 'transition-opacity', 'duration-300');

    navCozinha.classList.remove('-translate-y-5');
    navCozinha.classList.add('group', 'hover:-translate-y-5');
    boxCozinha.classList.remove('bg-white', 'border-gray-300', 'shadow-sm');
    boxCozinha.classList.add('border-transparent', 'group-hover:bg-white', 'group-hover:border-gray-300', 'group-hover:shadow-sm');
    textoCozinha.classList.remove('-bottom-7', 'whitespace-nowrap');
    textoCozinha.classList.add('-bottom-5', 'opacity-0', 'group-hover:opacity-100', 'transition-opacity', 'duration-300');

    navBanheiro.classList.remove('-translate-y-5');
    navBanheiro.classList.add('group', 'hover:-translate-y-5');
    boxBanheiro.classList.remove('bg-white', 'border-gray-300', 'shadow-sm');
    boxBanheiro.classList.add('border-transparent', 'group-hover:bg-white', 'group-hover:border-gray-300', 'group-hover:shadow-sm');
    textoBanheiro.classList.remove('-bottom-7', 'whitespace-nowrap');
    textoBanheiro.classList.add('-bottom-5', 'opacity-0', 'group-hover:opacity-100', 'transition-opacity', 'duration-300');

    navQuarto.classList.remove('-translate-y-5');
    navQuarto.classList.add('group', 'hover:-translate-y-5');
    boxQuarto.classList.remove('bg-white', 'border-gray-300', 'shadow-sm');
    boxQuarto.classList.add('border-transparent', 'group-hover:bg-white', 'group-hover:border-gray-300', 'group-hover:shadow-sm');
    textoQuarto.classList.remove('-bottom-7', 'whitespace-nowrap');
    textoQuarto.classList.add('-bottom-5', 'opacity-0', 'group-hover:opacity-100', 'transition-opacity', 'duration-300');
}

function destacarBotao(nav, box, texto) {

    nav.classList.add('-translate-y-5');
    nav.classList.remove('group', 'hover:-translate-y-5');
    box.classList.add('bg-white', 'border-gray-300', 'shadow-sm');
    box.classList.remove('border-transparent', 'group-hover:bg-white', 'group-hover:border-gray-300', 'group-hover:shadow-sm');
    texto.classList.add('-bottom-7', 'whitespace-nowrap');
    texto.classList.remove('-bottom-5', 'opacity-0', 'group-hover:opacity-100', 'transition-opacity', 'duration-300');
}

navEstudio.addEventListener('click', function () {
    telaPrincipal.style.backgroundImage = "url('./images/mascote/Bg_Estudio_Fotografico.png')";
    limparDestaque();
    destacarBotao(navEstudio, boxEstudio, textoEstudio);

    comodoAtual = 'estudio';
    iconAcao.src = "./images/mascote/Diversao.png";
})

navCozinha.addEventListener('click', function () {
    telaPrincipal.style.backgroundImage = "url('./images/mascote/Bg_Cozinha.png')";
    limparDestaque();
    destacarBotao(navCozinha, boxCozinha, textoCozinha);

    comodoAtual = 'cozinha';
    iconAcao.src = "./images/mascote/Cozinha.png";
})

navBanheiro.addEventListener('click', function () {
    telaPrincipal.style.backgroundImage = "url('./images/mascote/Bg_Banheiro.png')";
    limparDestaque();
    destacarBotao(navBanheiro, boxBanheiro, textoBanheiro);

    comodoAtual = 'banheiro';
    iconAcao.src = "./images/mascote/Banheiro.png"
})

navQuarto.addEventListener('click', function () {
    telaPrincipal.style.backgroundImage = "url('./images/mascote/Bg_Quarto.png')";
    limparDestaque();
    destacarBotao(navQuarto, boxQuarto, textoQuarto);

    comodoAtual = 'quarto';
    iconAcao.src = "./images/mascote/Quarto.png";
})

function iniciarAcao(e) {
    if (e.type === 'touchstart') e.preventDefault();

    console.log("1. Botão pressionado! Cômodo Atual é:", comodoAtual);

    if (moedas >= 3) {
        fillAcao.style.transitionDuration = '1000ms';
        fillAcao.style.height = '100%';

        timerAcao = setTimeout(function () {
            if (comodoAtual === 'estudio') {
                diversao += 35;
                if (diversao > 100) diversao = 100;
            } else if (comodoAtual === 'cozinha') {
                fome += 35;
                if (fome > 100) fome = 100;
            } else if (comodoAtual === 'banheiro') {
                higiene += 35;
                if (higiene > 100) higiene = 100;
            } else if (comodoAtual === 'quarto') {
                sono += 35;
                if (sono > 100) sono = 100;
            }

            moedas -= 3;
            ganharXP(30);
            atualizarTela();

            fillAcao.style.transitionDuration = '200ms';
            fillAcao.style.height = '0%';
        }, 1000);
    } else {
        alert("Moedas insuficientes! Conclua desafios para ganhar mais.");
    }
}

function cancelarAcao() {
    clearTimeout(timerAcao);
    fillAcao.style.transitionDuration = '300ms';
    fillAcao.style.height = '0%';
}

btnAcao.addEventListener('mousedown', iniciarAcao);
btnAcao.addEventListener('touchstart', iniciarAcao);

btnAcao.addEventListener('mouseup', cancelarAcao);
btnAcao.addEventListener('mouseleave', cancelarAcao);
btnAcao.addEventListener('touchend', cancelarAcao);
btnAcao.addEventListener('touchcancel', cancelarAcao);

function passarTempo() {
    diversao -= 2;
    fome -= 3;
    higiene -= 1;
    sono -= 2;

    if (diversao < 0) diversao = 0;
    if (fome < 0) fome = 0;
    if (higiene < 0) higiene = 0;
    if (sono < 0) sono = 0;

    atualizarTela();
}

setInterval(passarTempo, 20000);

function ganharXP(quantidade) {
    xp += quantidade;

    if (xp >= xpMaximo) {
        xp -= xpMaximo;
        nivel++;
        xpMaximo = Math.floor(xpMaximo * 1.2);
        moedas += 50;

        alert(`Parabéns! O seu mascote subiu para o Nível ${nivel} e ganhou 50 moedas!`);
    }
}



function atualizarCorBarra(barra, valor) {
    if (valor > 50) {
        barra.style.backgroundColor = '#22c55e';
    } else if (valor > 20) {
        barra.style.backgroundColor = '#facc15';
    } else {
        barra.style.backgroundColor = '#ef4444';
    }
}

function guardarJogo() {

    const dadosMascote = {
        moedas: moedas,
        diversao: diversao,
        fome: fome,
        higiene: higiene,
        sono: sono,
        nivel: nivel,
        xp: xp,
        xpMaximo: xpMaximo
    };

    localStorage.setItem('saveMascote', JSON.stringify(dadosMascote));
}

function carregarJogo() {

    const save = localStorage.getItem('saveMascote');

    if (save) {
        const dadosMascote = JSON.parse(save);

        moedas = dadosMascote.moedas;
        diversao = dadosMascote.diversao;
        fome = dadosMascote.fome;
        higiene = dadosMascote.higiene;
        sono = dadosMascote.sono;

        if (dadosMascote.nivel !== undefined) {
            nivel = dadosMascote.nivel;
            xp = dadosMascote.xp;
            xpMaximo = dadosMascote.xpMaximo;
        }
    }
}

carregarJogo();
atualizarTela();
