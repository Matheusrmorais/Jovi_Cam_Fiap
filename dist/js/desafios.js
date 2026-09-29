const botaoVoltar = document.getElementById('voltar');
if (botaoVoltar) {
    botaoVoltar.addEventListener('click', function () {
        window.history.back();
    });
}


document.addEventListener('DOMContentLoaded', () => {
    const botaoMascote = document.getElementById('jovi-mascote');
    if (botaoMascote) {
        botaoMascote.addEventListener('click', () => {
            window.location.href = 'mascote.html';
        });
    }
});

const botoes = document.querySelectorAll('#missoes-nivel button');
if (botoes.length > 0) {
    botoes.forEach(function (botao) {
        botao.addEventListener('click', function () {
            const idDoCard = botao.id;
            if (idDoCard) {
                window.location.href = `pages/detalhes_desafio.html?card=${idDoCard}`;
            }
        });
    });
}

const params = new URLSearchParams(window.location.search);
const nivelAtual = params.get('card');

if (nivelAtual) {

    function gerarCaminhoIcone(titulo) {
        let primeiraPalavra = titulo.split(' ')[0];

        if (primeiraPalavra === "A" || primeiraPalavra === "O") {
            primeiraPalavra = titulo.split(' ')[1];
        }

        primeiraPalavra = primeiraPalavra.normalize("NFD").replace(/[\u0300-\u036f]/g, "");

        return `../images/desafios/${primeiraPalavra}.png`;
    }

    const dadosDosCards = {
        iniciante: {
            tituloHeader: "Iniciante",
            iconeHeader: "../images/desafios/Iniciante.png",
            corBgCard: "bg-green-50",
            corBordaCard: "border-green-100",
            corTextoTitulo: "text-green-600",
            corBotao: "bg-green-600",
            corBotaoHover: "hover:bg-green-700",
            missoes: [
                { titulo: "Regra dos Terços", descricao: "Ative a grade da câmera e posicione o assunto principal em um dos cruzamentos das linhas, tirando-o do centro." },
                { titulo: "Foco nos Detalhes (Macro)", descricao: "Aproxime o celular o máximo possível de um objeto comum (como uma folha ou tecido) para destacar sua textura." },
                { titulo: "Luz de Janela", descricao: "Fotografe o rosto de uma pessoa ou um objeto usando apenas a luz natural suave que entra por uma janela." },
                { titulo: "Ângulo de Baixo", descricao: "Agache-se e fotografe um objeto comum de baixo para cima para dar a ele uma sensação de grandeza." },
                { titulo: "Simetria Perfeita", descricao: "Encontre um cenário urbano ou objeto e centralize-o perfeitamente, de modo que os dois lados da foto fiquem iguais." },
                { titulo: "Linhas Guias", descricao: "Use o cenário (como uma calçada, rua ou cerca) para criar linhas na foto que apontem diretamente para o assunto principal." },
                { titulo: "Explosão de Cores", descricao: "Encontre um objeto de cor muito viva e vibrante e fotografe-o contra um fundo neutro (como uma parede branca ou cinza)." },
                { titulo: "Espaço Negativo", descricao: "Fotografe um objeto pequeno deixando muito espaço vazio (como um grande céu azul ou uma parede lisa) ao redor dele." }
            ]
        },
        intermediario: {
            tituloHeader: "Intermediário",
            iconeHeader: "../images/desafios/Intermediario.png",
            corBgCard: "bg-[#F0E6FF]",
            corBordaCard: "border-purple-100",
            corTextoTitulo: "text-[#8B4DFF]",
            corBotao: "bg-[#8B4DFF]",
            corBotaoHover: "hover:bg-purple-700",
            missoes: [
                { titulo: "Silhueta Dramática", descricao: "Fotografe uma pessoa ou objeto exatamente contra uma fonte de luz forte (como o sol ou uma janela) para criar uma silhueta totalmente escura." },
                { titulo: "A Magia da Hora Dourada", descricao: "Tire uma foto ao ar livre logo após o nascer do sol ou minutos antes do pôr do sol, aproveitando a luz quente e alaranjada." },
                { titulo: "Moldura Natural", descricao: "Use elementos do cenário (portas, janelas, galhos de árvores ou frestas) para \"emoldurar\" o assunto principal dentro da sua foto." },
                { titulo: "Reflexos Criativos", descricao: "Busque superfícies como poças d'água, espelhos, óculos ou vidros de carros para fotografar o reflexo de um cenário ou pessoa." },
                { titulo: "Foco e Desfoque (Bokeh)", descricao: "Use o modo \"Retrato\" ou aproxime bem a câmera para focar perfeitamente em um objeto em primeiro plano, deixando o fundo totalmente desfocado." },
                { titulo: "Cores Complementares", descricao: "Encontre e fotografe elementos que tenham cores opostas que se destacam juntas (ex: azul e laranja, ou vermelho e verde)." },
                { titulo: "Luz Dura e Geometria", descricao: "Aproveite o sol forte do meio-dia para fotografar sombras bem marcadas e formas geométricas projetadas no chão ou nas paredes." },
                { titulo: "Congelando a Ação", descricao: "Tente capturar um momento exato de movimento rápido sem borrar, como alguém pulando, um animal correndo ou água espirrando." },
                { titulo: "Luzes da Cidade", descricao: "Faça uma foto noturna na rua, ajustando a exposição da câmera para destacar o brilho de postes, letreiros em neon ou faróis." },
                { titulo: "Caçador de Padrões", descricao: "Encontre repetições visuais simétricas (janelas de um prédio, azulejos, fileiras de cadeiras) e preencha toda a tela com elas." },
                { titulo: "Emoção Espontânea", descricao: "Fotografe alguém em um momento de distração ou risada, capturando uma cena real sem que a pessoa pose para a câmera." },
                { titulo: "Brincando com a Escala", descricao: "Inclua uma pessoa ou um objeto pequeno e conhecido em uma paisagem muito grande (como uma montanha ou um grande prédio) para mostrar a verdadeira dimensão do lugar." }
            ]
        },
        avancado: {
            tituloHeader: "Avançado",
            iconeHeader: "../images/desafios/Avancado.png",
            corBgCard: "bg-[#FFF1DF]/60",
            corBordaCard: "border-orange-100",
            corTextoTitulo: "text-[#FF8A00]",
            corBotao: "bg-[#FF8A00]",
            corBotaoHover: "hover:bg-orange-600",
            missoes: [
                { titulo: "Rastos de Luz", descricao: "Usa um tripé e uma longa exposição à noite para captares os rastos luminosos vermelhos e brancos dos carros numa rua movimentada." },
                { titulo: "Efeito Véu de Noiva", descricao: "Configura uma velocidade de obturação muito lenta para transformar a água de um rio ou cascata numa textura suave e sedosa." },
                { titulo: "Céu Estrelado (Astrofotografia)", descricao: "Foge da poluição luminosa, estabiliza o telemóvel num tripé e usa a exposição máxima para fotografiares as estrelas ou a Via Láctea." },
                { titulo: "Técnica de Panning", descricao: "Acompanha um motivo em movimento (como um carro ou ciclista) com a câmara a uma velocidade de obturação mais lenta, mantendo o motivo nítido com o fundo arrastado." },
                { titulo: "Justaposição Visual", descricao: "Combina dois elementos no mesmo enquadramento que contrastem fortemente em significado ou tamanho para contares uma história irónica ou inesperada." },
                { titulo: "Movimento Intencional (ICM)", descricao: "Move intencionalmente a câmara durante uma longa exposição para criares uma imagem abstrata, focada apenas em cores e formas." },
                { titulo: "Dupla Exposição", descricao: "Usa as ferramentas de edição do telemóvel para sobrepores duas imagens distintas (como um perfil de um rosto e uma floresta) num registo surrealista." },
                { titulo: "Focagem Manual em Macro", descricao: "Abandona o foco automático e usa o modo manual para focares um detalhe minúsculo (como o olho de um inseto ou uma gota de água) com precisão milimétrica." },
                { titulo: "Proporção Áurea", descricao: "Vai além da regra dos terços e compõe a tua fotografia utilizando a espiral de Fibonacci para guiares o olhar do espectador." },
                { titulo: "Retrato em High Key", descricao: "Fotografa um motivo em tons muito claros e luminosos, sobre-expondo intencionalmente a imagem sem perder os detalhes essenciais do rosto." },
                { titulo: "Drama em Low Key", descricao: "Cria uma imagem quase totalmente escura, iluminando de forma muito subtil apenas uma pequena parte do motivo para um efeito misterioso e dramático." },
                { titulo: "Perspetiva Forçada", descricao: "Alinha objetos a diferentes distâncias da lente para criares uma ilusão de ótica que distorce o tamanho real dos elementos (ex: alguém a \"segurar\" o sol)." },
                { titulo: "Contraluz Extremo", descricao: "Fotografa num cenário com sombras muito profundas e luzes muito intensas, ajustando a exposição para reteres o máximo de detalhe em ambas as zonas." },
                { titulo: "Flash de Preenchimento", descricao: "Usa o flash do telemóvel em pleno dia (luz dura) para eliminares as sombras indesejadas que o sol cria no rosto de um modelo." },
                { titulo: "O Instante Decisivo", descricao: "Faz fotografia de rua (Street Photography). Antecipa a ação e dispara no milésimo de segundo em que os elementos da rua convergem numa composição perfeita." }
            ]
        }
    };

    const dados = dadosDosCards[nivelAtual];

    if (dados) {
        const tituloHeader = document.getElementById('titulo-header');
        const iconeHeader = document.getElementById('icone-header');
        const tituloPagina = document.getElementById('titulo-pagina');

        if (tituloHeader) tituloHeader.textContent = dados.tituloHeader;
        if (iconeHeader) iconeHeader.src = dados.iconeHeader;
        if (tituloPagina) tituloPagina.textContent = `Desafios - ${dados.tituloHeader}`;

        const containerCards = document.querySelector('main section .flex.flex-col.md\\:flex-row');

        if (containerCards) {
            containerCards.innerHTML = '';
            dados.missoes.forEach(missao => {
                const caminhoImagem = gerarCaminhoIcone(missao.titulo);

                const estruturaCard = `
            <div class="border rounded-[20px] shadow-sm flex flex-col items-center text-center p-4 w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1rem)] shrink-0 ${dados.corBgCard} ${dados.corBordaCard}">
                
                <img src="${caminhoImagem}" alt="Ícone ${missao.titulo}" class="w-10 h-10 mb-2 object-contain" onerror="this.src='../images/desafios/Desafio.png'">
                
                <h3 class="font-bold text-sm ${dados.corTextoTitulo} mb-2">${missao.titulo}</h3>
                
                <p class="text-[10px] text-corpo leading-tight mt-1 mb-4 px-1 flex-1">${missao.descricao}</p>
                
                <button class="em-construcao w-full flex justify-center items-center gap-2 text-white rounded-xl py-3 text-sm font-semibold transition-colors cursor-pointer ${dados.corBotao} ${dados.corBotaoHover}">
                
                    <img src="../images/desafios/Baixar.png" alt="" class="w-4 h-4 object-contain">
                    Enviar foto
                </button>
            </div>
        `;

                containerCards.innerHTML += estruturaCard;
            });

            containerCards.classList.add('flex-wrap', 'justify-center');
        }
    }
}