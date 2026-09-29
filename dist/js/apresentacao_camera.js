const botaoVoltar = document.getElementById('voltar');

if (botaoVoltar) {
    botaoVoltar.addEventListener('click', function () {
        window.location.href = '../apresentacao_camera.html';
    });
}

const botoes = document.querySelectorAll('#ficha-tecnica button, #recursos-camera button, #aprenda-com-camera button');

if (botoes.length > 0) {
    botoes.forEach(botao => {
        botao.addEventListener('click', () => {
            window.location.href = "./pages/detalhes_camera.html?card=" + botao.id;
        });
    });
}

const dadosDosCards = {
    "detalhes-tecnicos": {
        titulo: "Detalhes técnicos da câmera",
        icone: "./images/apresentacao_camera/Detalhes.png",
        secoes: [
            {
                subtitulo: "Especificações Técnicas",
                descricao: "Conheça a tecnologia por trás do Vivo V70. Aqui reunimos as principais especificações de lentes, sensores e recursos de imagem para você entender o que o hardware do celular é capaz de entregar."
            },
            {
                subtitulo: "As 3 Lentes Traseiras: Para que serve cada uma?",
                descricao: "O Vivo V70 vem equipados com um conjunto de três câmeras na parte de trás, e cada uma delas tem uma missão totalmente diferente.",
                cards: [
                    { titulo: "1. Câmera Principal (Wide de 50 MP): A sua lente curinga", texto: "É a câmera principal que o celular usa na maior parte do tempo. Ela tem um sensor grande que captura muita luz, o que significa fotos nítidas e cheias de detalhes tanto de dia quanto à noite." },
                    { titulo: "2. Câmera Super Telefoto (Zoom de 50 MP): Para aproximar sem perder qualidade", texto: "Sabe quando você quer fotografar algo que está longe, mas a foto fica borrada ou pixelada? É aqui que entra a lente telefoto. Ela funciona como um binóculo embutido, permitindo aproximar a imagem opticamente sem perder a nitidez." },
                    { titulo: "3. Câmera Ultra-Wide (Grande-angular de 8 MP): Para abrir o cenário", texto: "Enquanto a lente principal 'vê' como um olho humano, a ultra-wide funciona como uma visão ampla. Ela tem um ângulo de visão muito maior, sendo indispensável para tirar fotos de paisagens grandiosas." }
                ]
            },
            {
                subtitulo: "A Câmera Frontal: Para selfies e vídeos perfeitos",
                descricao: "A lente frontal do Vivo V70 foi feita para garantir que você saia sempre bem em fotos individuais, em grupo ou em chamadas de vídeo:",
                cards: [
                    { titulo: "Selfies de Alta Definição (50 MP)", texto: "Esqueça fotos frontais lavadas ou sem detalhes. Com uma resolução altíssima, ela captura com precisão a textura da pele e cores reais." },
                    { titulo: "Foco Automático (PDAF)", texto: "Diferente de muitos celulares onde a câmera de selfie tem foco fixo, esta conta com foco automático inteligente." },
                    { titulo: "Ideal para Vlogs", texto: "Combinada com a capacidade de gravar vídeos em alta resolução, ela é perfeita para produzir conteúdo." }
                ]
            },
            {
                subtitulo: "Recursos Práticos e Tecnologia do Dia a Dia",
                descricao: "O Vivo V70 traz tecnologias que trabalham nos bastidores para facilitar a sua vida e garantir resultados profissionais:",
                cards: [
                    { titulo: "Estabilização Óptica (OIS)", texto: "Um sistema inteligente que compensa micro-tremores em tempo real. O resultado são fotos muito mais nítidas e vídeos firmes." },
                    { titulo: "Parceria ZEISS", texto: "Na prática, isso significa que suas fotos terão cores mais fiéis à realidade, sem saturação exagerada, além de controlar reflexos." },
                    { titulo: "Modo Retrato (85mm e 100mm)", texto: "O celular simula distâncias focais clássicas de câmeras profissionais, criando um desfoque de fundo natural e elegante." },
                    { titulo: "Zoom Óptico (3x) e Digital", texto: "O zoom óptico de 3x aproxima a imagem usando a lente física pura. Para distâncias extremas, a inteligência artificial ajuda a aproximar até 100x." }
                ]
            }
        ]
    },
    
    "configuracao-camera": {
        titulo: "Configuração da Câmera",
        icone: "./images/apresentacao_camera/Config.png",
        secoes: [
            {
                subtitulo: "Dominando as Configurações da Câmera",
                descricao: "Antes de começar a registrar os melhores momentos, que tal deixar a câmera do seu Vivo V70 perfeitamente calibrada para o seu estilo? Entenda de forma descomplicada para que serve cada configuração."
            },
            {
                subtitulo: "Resolução de Fotos e Vídeos",
                descricao: "Defina o nível de detalhe das suas imagens e vídeos, equilibrando nitidez com espaço de armazenamento.",
                cards: [
                    { titulo: "Modo Padrão (12.5 MP)", texto: "A configuração que vem ativa por padrão. Junta vários pontos do sensor em um único pixel para capturar mais luz. Perfeito para o uso diário." },
                    { titulo: "Alta Resolução (50 MP)", texto: "Usa todo o potencial bruto da lente. Use ao fotografar paisagens muito detalhadas com ótima luz natural." },
                    { titulo: "Vídeo 4K (60fps)", texto: "Resolução máxima. Excelente para registrar viagens ou momentos importantes onde você faz questão de máxima nitidez e fluidez." },
                    { titulo: "1080p / Full HD", texto: "A resolução padrão de alta definição que consome muito menos espaço. Ideal para o dia a dia e vídeos mais longos." }
                ]
            },
            {
                subtitulo: "Funções de Auxílio à Composição",
                descricao: "Estas ferramentas servem como um 'guia visual' na tela para ajudar você a compor imagens mais bonitas.",
                cards: [
                    { titulo: "Linhas de Grade (Grid)", texto: "Dividem a tela em nove partes iguais. Ajudam a aplicar a Regra dos Terços e evitam que o horizonte saia torto." },
                    { titulo: "Nivelador / Linha de Horizonte", texto: "Marcador visual que indica a inclinação. Perfeito para arquitetura ou praias, garantindo que a foto não fique 'caindo'." },
                    { titulo: "Espelhar Câmera Frontal", texto: "Define como a selfie é salva: como você se vê no espelho ou como os outros te veem." }
                ]
            }
        ]
    },

    "foto": {
        titulo: "Foto (Photo)",
        icone: "./images/apresentacao_camera/Foto.png",
        secoes: [
            {
                subtitulo: "O que é?",
                descricao: "É o modo que abre automaticamente quando você toca no ícone da câmera. Ele foi feito para o uso instantâneo: você aponta, o celular pensa por você, e o resultado é uma foto equilibrada e pronta para postar."
            },
            {
                subtitulo: "🧠 Como a Inteligência Artificial (IA) age?",
                descricao: "Muita tecnologia acontece em frações de segundo quando você usa o Modo Foto no Vivo V70:",
                cards: [
                    { titulo: "Reconhecimento de Cena", texto: "A câmera identifica o que está na sua frente e ajusta automaticamente a saturação e o contraste para valorizar os elementos." },
                    { titulo: "HDR Inteligente", texto: "Se você tirar uma foto contra a luz, o celular tira várias fotos com exposições diferentes e as une instantaneamente. Evita fundos 'estourados'." },
                    { titulo: "Ajuste de Cor ZEISS", texto: "As lentes aplicam o perfil de cor natural, garantindo que os tons de pele fiquem fiéis à realidade." }
                ]
            },
            {
                subtitulo: "🎛️ O que você encontra na tela?",
                descricao: "Ao disparar no modo padrão, você tem acesso rápido a atalhos essenciais:",
                cards: [
                    { titulo: "Alternância de Lentes", texto: "Permite alternar rapidamente entre a câmera Ultra-Wide (paisagens), a Principal e a Super Telefoto (zoom)." },
                    { titulo: "Ativação do Flash", texto: "Opções para desligar, ligar ou deixar no automático (onde o celular decide)." },
                    { titulo: "Filtros e Efeitos", texto: "Atalhos para aplicar suavização de pele ou estilos de cor artísticos." }
                ]
            }
        ]
    },

    "video": {
        titulo: "Vídeo (Video)",
        icone: "./images/apresentacao_camera/Video.png",
        secoes: [
            {
                subtitulo: "O que é?",
                descricao: "É o modo dedicado a capturar cenas em movimento com áudio e imagem de alta qualidade. Aproveita o poder das lentes principais e das tecnologias de estabilização."
            },
            {
                subtitulo: "⚙️ Configurações de Resolução",
                descricao: "Antes de começar a gravar, a tela oferece opções que mudam o resultado:",
                cards: [
                    { titulo: "1080p (Full HD)", texto: "A escolha ideal para o dia a dia. O arquivo é leve e fácil de enviar por redes sociais." },
                    { titulo: "4K (Ultra HD)", texto: "Entrega uma quantidade de detalhes 4 vezes maior. Perfeito para vídeos que exigem edição posterior." },
                    { titulo: "30fps vs. 60fps", texto: "30fps é o padrão natural. 60fps deixa o movimento mais fluido e suave, excelente para cenas rápidas." }
                ]
            },
            {
                subtitulo: "🛡️ O Segredo dos Vídeos Estáveis",
                descricao: "Para que o vídeo não fique sacudindo a cada passo:",
                cards: [
                    { titulo: "OIS + EIS", texto: "O celular combina ajuste físico das lentes com cortes de software para suavizar os tremores. O vídeo continuará firme e agradável de assistir." },
                    { titulo: "Alternância de Lentes", texto: "Você pode mudar da lente Ultra-Wide para a Telefoto sem interromper a gravação." },
                    { titulo: "Foco Automático Contínuo", texto: "A câmera rastreia o rosto ou o objeto principal. Ajusta o foco sozinha para você nunca ficar embaçado." }
                ]
            }
        ]
    },

    "modo-retrato": {
        titulo: "Modo Retrato",
        icone: "./images/apresentacao_camera/Modo_Retrato.png",
        secoes: [
            {
                subtitulo: "O que é?",
                descricao: "Projetado para destacar pessoas em relação ao fundo. Cria o efeito bokeh (desfoque suave no cenário), fazendo o assunto principal saltar da foto."
            },
            {
                subtitulo: "🔍 Como a mágica acontece?",
                descricao: "O celular usa uma combinação de hardware e software:",
                cards: [
                    { titulo: "Detecção com IA", texto: "Identifica onde termina a pessoa (recortando cabelo, ombros) e onde começa o fundo." },
                    { titulo: "Lentes Clássicas ZEISS", texto: "Simula lentes de 85mm e 100mm, que evitam distorções no rosto e entregam proporções faciais muito naturais." }
                ]
            },
            {
                subtitulo: "🎛️ O que você pode ajustar?",
                descricao: "O aplicativo oferece controles criativos muito fáceis de usar:",
                cards: [
                    { titulo: "Abertura do Desfoque", texto: "Você escolhe o nível do desfoque. Valores menores deixam o fundo super borrado." },
                    { titulo: "Estilos de Luz ZEISS", texto: "Permite adicionar formatos geométricos ao fundo borrado (corações, estrelas, etc)." },
                    { titulo: "Beleza e Suavização", texto: "Ajustes sutis opcionais para corrigir imperfeições ou iluminar o rosto." }
                ]
            }
        ]
    },

    "modo-noite": {
        titulo: "Modo Noite",
        icone: "./images/apresentacao_camera/Modo_Noite.png",
        secoes: [
            {
                subtitulo: "O que é?",
                descricao: "Feito para salvar fotos tiradas à noite ou em ambientes internos com pouca luz. Resolve o 'chuvisco' (ruído) e o escuro total sem apelar para o flash."
            },
            {
                subtitulo: "🧠 Como a mágica acontece?",
                descricao: "Ele faz um processo complexo em frações de segundo:",
                cards: [
                    { titulo: "Múltiplos Disparos", texto: "Captura rapidamente várias fotos com diferentes exposições de luz (algumas para detalhes, outras para ambiente)." },
                    { titulo: "Alinhamento com IA", texto: "Une essas imagens instantaneamente, elimina ruídos visuais e puxa luz para as áreas escuras." },
                    { titulo: "Cooperação com o OIS", texto: "Como o celular precisa de segundos capturando luz, a estabilização impede que a mão trêmula estrague a foto." }
                ]
            },
            {
                subtitulo: "🎛️ O que você encontra na tela?",
                descricao: "Funções dedicadas à fotografia noturna:",
                cards: [
                    { titulo: "Controle de Tempo", texto: "O celular calcula quanto tempo precisa de luz e exibe uma contagem rápida." },
                    { titulo: "Filtros Noturnos", texto: "Paletas de cores ajustadas para realçar tons de luzes de rua ou criar atmosferas cinematográficas." },
                    { titulo: "Ajuste de Brilho (EV)", texto: "Controle rápido onde você pode escurecer ou clarear a cena antes de disparar." }
                ]
            }
        ]
    },

    "micro-movie": {
        titulo: "Micro Movie",
        icone: "./images/apresentacao_camera/Micro_Movie.png",
        secoes: [
            {
                subtitulo: "O que é?",
                descricao: "Funciona como um 'editor de vídeo automático'. Feito para quem quer gravar clipes curtos para redes sociais mas não tem paciência para editar manualmente."
            },
            {
                subtitulo: "🎬 Como funciona na prática?",
                descricao: "Elimina a parte mais trabalhosa de criar vídeos:",
                cards: [
                    { titulo: "Modelos Prontos", texto: "Você escolhe um tema. Cada modelo já vem com trilha sonora, cortes cronometrados e efeitos visuais." },
                    { titulo: "Gravação em Pedaços", texto: "O celular guia você passo a passo, pedindo para gravar trechos de 2 a 3 segundos de cada vez." },
                    { titulo: "Montagem Instantânea", texto: "Assim que termina de gravar, o V70 une tudo, aplica transições e entrega o vídeo 100% pronto na galeria." }
                ]
            },
            {
                subtitulo: "🎛️ O que você encontra na tela?",
                descricao: "Interface voltada para criação rápida:",
                cards: [
                    { titulo: "Biblioteca de Temas", texto: "Vitrine com dezenas de estilos (Cyberpunk, Vlog, Festa, etc) que mudam a vibe do vídeo." },
                    { titulo: "Indicador de Cenas", texto: "Marcações mostrando quantos segundos faltam para cada pedaço e qual enquadramento o modelo sugere." },
                    { titulo: "Substituir Trechos", texto: "Se não gostou de um pedaço, o app permite regravar apenas aquela parte sem refazer o vídeo inteiro." }
                ]
            }
        ]
    },

    "modo-panorama": {
        titulo: "Modo Panorama",
        icone: "./images/apresentacao_camera/Modo_Panorama.png",
        secoes: [
            {
                subtitulo: "O que é?",
                descricao: "É o modo de câmera feito para quando o cenário é tão grande que não cabe na foto tradicional. Ele permite 'costurar' várias imagens em sequência de forma automática, criando uma foto horizontal ou vertical bem ampla — perfeita para praias, montanhas, praças ou a vista de um mirante."
            },
            {
                subtitulo: "📷 Como a mágica acontece na prática?",
                descricao: "O Panorama funciona como uma varredura da sua visão:",
                cards: [
                    { titulo: "Varredura Contínua", texto: "Em vez de um clique único, você aperta o botão de disparo e começa a mover o celular lentamente de um lado para o outro." },
                    { titulo: "Costura Inteligente por Software", texto: "O processador do Vivo V70 vai tirando dezenas de fotos microscópicas por segundo enquanto você se movimenta e as une instantaneamente, alinhando as bordas para que a emenda fique invisível." }
                ]
            },
            {
                subtitulo: "🎛️ O que você encontra na tela?",
                descricao: "Recursos que ajudam na captura perfeita do panorama:",
                cards: [
                    { titulo: "Linha Guia de Nivelamento", texto: "Uma linha reta ou seta aparece no visor para ajudar você a manter o celular firme e na horizontal, evitando que a foto saia torta." },
                    { titulo: "Direção Personalizável", texto: "A seta indica para ir da esquerda para a direita, mas você também pode inverter a direção ou usar o modo vertical para prédios altos ou cachoeiras." }
                ]
            }
        ]
    },

    "camera-lenta": {
        titulo: "Câmera Lenta (Slow Motion)",
        icone: "./images/apresentacao_camera/Camera_Lenta.png",
        secoes: [
            {
                subtitulo: "O que é?",
                descricao: "É o modo de gravação feito para desacelerar o tempo. Ele capta o movimento de forma ultra-rápida para que, na hora de assistir, a ação aconteça bem devagar, revelando detalhes incríveis como gotas d'água espirrando ou animais correndo."
            },
            {
                subtitulo: "🎬 Como a mágica acontece na prática?",
                descricao: "O segredo está na quantidade de quadros (imagens) gravadas por segundo:",
                cards: [
                    { titulo: "Taxa de Quadros Elevada", texto: "Enquanto um vídeo normal grava a 30 ou 60 fps, o modo Slow Motion grava centenas de quadros por segundo (como 120, 240 ou mais)." },
                    { titulo: "O Efeito de Desaceleração", texto: "Quando o vídeo é reproduzido em velocidade normal, as dezenas de imagens são estiradas ao longo do tempo, criando o efeito de 'câmera lenta' fluida." }
                ]
            },
            {
                subtitulo: "🎛️ O que você encontra na tela?",
                descricao: "Opções disponíveis no modo Câmera Lenta:",
                cards: [
                    { titulo: "Seleção de Velocidade/Taxa", texto: "Opções para escolher o nível de desaceleração (ex: 4x ou 8x mais lento). Quanto maior a taxa, mais devagar a ação vai acontecer." },
                    { titulo: "Marcador de Detecção de Movimento", texto: "Um recurso inteligente que inicia a gravação automaticamente assim que algo se move na área demarcada da tela." }
                ]
            }
        ]
    },

    "timelapse": {
        titulo: "Timelapse (Vídeo Acelerado)",
        icone: "./images/apresentacao_camera/Timelapse.png",
        secoes: [
            {
                subtitulo: "O que é?",
                descricao: "É o oposto da câmera lenta. O Timelapse pega um evento longo — que duraria horas no mundo real — e o comprime em um vídeo curto de poucos segundos. Perfeito para registrar nuvens, o pôr do sol ou o trânsito."
            },
            {
                subtitulo: "⏱️ Como a mágica acontece na prática?",
                descricao: "O funcionamento é fascinante e funciona como uma 'fotografia em intervalos':",
                cards: [
                    { titulo: "Disparos Intervalados", texto: "Em vez de gravar um vídeo contínuo pesadíssimo, a câmera tira uma foto estática a cada poucos segundos (ex: a cada 2 ou 5 segundos)." },
                    { titulo: "Aceleração Automática", texto: "Quando todas essas fotos são unidas e reproduzidas juntas em sequência rápida, o tempo parece voar na tela de forma dinâmica." }
                ]
            },
            {
                subtitulo: "🎛️ O que você encontra na tela?",
                descricao: "Ajustes rápidos do modo Timelapse:",
                cards: [
                    { titulo: "Indicadores de Velocidade", texto: "Opções de intervalos automáticos recomendados para cada cena (velocidades menores para nuvens, maiores para trânsito)." },
                    { titulo: "Duração Final Estimada", texto: "O visor mostra quanto tempo de vídeo real você está gerando à medida que o tempo de gravação passa." }
                ]
            }
        ]
    },

    "scanner-documentos": {
        titulo: "Ultra HD Document",
        icone: "./images/apresentacao_camera/Scanner_Documentos.png",
        secoes: [
            {
                subtitulo: "O que é?",
                descricao: "É um modo inteligente da câmera projetado para transformar o seu celular em um scanner de bolso profissional. Perfeito para contratos, páginas de livros ou recibos, deixando tudo nítido e sem sombras."
            },
            {
                subtitulo: "🔍 Como a mágica acontece na prática?",
                descricao: "O sistema vai muito além de uma simples foto de cima para baixo:",
                cards: [
                    { titulo: "Detecção Automática de Bordas", texto: "A IA vasculha o visor e reconhece instantaneamente onde o papel termina e a mesa começa, marcando o contorno." },
                    { titulo: "Correção Geométrica", texto: "Se você tirou a foto meio torta, o software achata e estica a imagem automaticamente, como se estivesse bem em cima do papel." },
                    { titulo: "Limpeza de Fundo", texto: "O celular remove sombras indesejadas e aumenta o contraste entre o fundo branco e as letras pretas." }
                ]
            },
            {
                subtitulo: "🎛️ O que você encontra na tela?",
                descricao: "Ferramentas do modo Scanner:",
                cards: [
                    { titulo: "Enquadramento Guia", texto: "Um retângulo na tela que ajuda você a posicionar o documento dentro do campo de visão antes do disparo." },
                    { titulo: "Filtros de Cor", texto: "Opções para alternar entre a cor original, preto e branco puro ou modo otimizado para leitura digital." },
                    { titulo: "Exportação Rápida", texto: "Atalho para salvar o resultado como imagem ou converter em formato de documento digital para envio imediato." }
                ]
            }
        ]
    },

    "modo-pro": {
        titulo: "Modo Pro (Manual)",
        icone: "./images/apresentacao_camera/Modo_Pro.png",
        secoes: [
            {
                subtitulo: "O que é?",
                descricao: "É o modo avançado que coloca nas suas mãos os mesmos ajustes que fotógrafos profissionais controlam em uma câmera DSLR ou mirrorless. Esqueça o celular decidindo tudo sozinho: aqui, você ajusta cada detalhe da luz, do foco e do movimento para criar exatamente o efeito artístico que imagina."
            },
            {
                subtitulo: "⚙️ Os Pilares do Modo Pro",
                descricao: "Para dominar o modo manual, você mexe em quatro configurações principais diretamente na tela:",
                cards: [
                    { titulo: "ISO (Sensibilidade à Luz)", texto: "Controla a sensibilidade do sensor à luz. Valores baixos (ISO 100/200) entregam imagens limpas de dia. Valores altos (ISO 1600+) clareiam na escuridão, mas trazem granulação." },
                    { titulo: "Velocidade do Obturador (S)", texto: "Controla o tempo que a lente captura luz. Velocidades rápidas congelam movimentos rápidos. Velocidades lentas (2s+) borram o movimento de forma artística (como luzes de carros ou águas)." },
                    { titulo: "Balanço de Branco (WB)", texto: "Ajusta a temperatura das cores para neutralizar distorções. Garante que o branco pareça branco de verdade, eliminando tons amarelados ou azulados de lâmpadas ou dias nublados." },
                    { titulo: "Foco Manual (MF)", texto: "Permite girar um cursor na tela para escolher exatamente onde a nitidez da imagem vai focar, ideal para situações em que o foco automático se confunde (como focar através de uma cerca)." }
                ]
            },
            {
                subtitulo: "🎛️ O que mais você encontra na tela?",
                descricao: "Ferramentas profissionais de auxílio visual:",
                cards: [
                    { titulo: "Histograma em Tempo Real", texto: "Um gráfico de barras que mostra a distribuição de luz da sua cena, ajudando a garantir que a foto não está nem 'estourada' (muito clara) nem 'sub-exposta' (muito escura)." },
                    { titulo: "Opção de Gravação em RAW", texto: "Permite salvar a foto no formato bruto (sem compactação), guardando 100% de informações de luz e cor para você editar depois em aplicativos (como Lightroom) com total liberdade." }
                ]
            }
        ]
    },

    "exposicao-dupla": {
        titulo: "Exposição Dupla (Double Exposure)",
        icone: "./images/apresentacao_camera/Exposicao_Dupla.png",
        secoes: [
            {
                subtitulo: "O que é?",
                descricao: "É um recurso criativo que une duas imagens diferentes em uma única foto final, criando um efeito artístico e conceitual. O celular faz essa fusão de forma digital e instantânea."
            },
            {
                subtitulo: "🎨 Como a mágica acontece na prática?",
                descricao: "O princípio do recurso é o contraste entre claro e escuro:",
                cards: [
                    { titulo: "A Camada Principal", texto: "Geralmente, você começa tirando ou escolhendo uma foto base — como o perfil de uma pessoa ou um objeto escuro em um fundo claro." },
                    { titulo: "A Camada Secundária", texto: "Em seguida, o sistema sobrepõe uma segunda imagem (como uma floresta, o céu estrelado ou prédios)." },
                    { titulo: "A Fusão Inteligente", texto: "O software usa as áreas escuras da primeira foto para 'rechear' com a textura da segunda imagem." }
                ]
            },
            {
                subtitulo: "🎛️ O que você encontra na tela?",
                descricao: "Ajustes criativos da Exposição Dupla:",
                cards: [
                    { titulo: "Controle de Transparência (Blend)", texto: "Ajuste deslizante para decidir a intensidade de cada uma das duas fotos, dando mais destaque à base ou ao fundo." },
                    { titulo: "Pré-visualização em Tempo Real", texto: "O visor mostra como as duas imagens estão se encaixando antes mesmo de você confirmar o clique final." }
                ]
            }
        ]
    },

    "retratos": {
        titulo: "Retratos Estilo ZEISS (85mm e 100mm)",
        icone: "./images/apresentacao_camera/Retratos.png",
        secoes: [
            {
                subtitulo: "O que é?",
                descricao: "É um recurso avançado do Modo Retrato que simula o comportamento óptico de lentes clássicas e lendárias de câmeras profissionais. Em vez de simplesmente borrar o fundo de forma artificial, o Vivo V70 utiliza distâncias focais específicas — 85mm e 100mm — em parceria com a engenharia óptica da ZEISS, garantindo proporções faciais perfeitas e um desfoque de fundo (bokeh) com visual cinematográfico."
            },
            {
                subtitulo: "🔍 Por que essas distâncias focais são especiais?",
                descricao: "Na fotografia profissional, as lentes de 85mm e 100mm são consideradas o 'padrão ouro' para retratos por motivos técnicos importantes:",
                cards: [
                    { titulo: "Zero Distorção Facial", texto: "Lentes comuns de celular podem dar a impressão de que o nariz está maior se você chegar muito perto. As distâncias de 85mm e 100mm comprimem o espaço de forma suave, mantendo as feições da pessoa 100% naturais." },
                    { titulo: "Isolamento do Assunto", texto: "Elas aproximam o fotógrafo do alvo sem invadir o espaço pessoal, destacando a pessoa de forma elegante e eliminando distrações do cenário ao redor." }
                ]
            },
            {
                subtitulo: "🎨 O Toque da ZEISS no Desfoque e nas Cores",
                descricao: "",
                cards: [
                    { titulo: "Bokeh Estilizado", texto: "O software simula o formato de abertura de lâminas de lentes de cinema tradicionais, criando desfoques de fundo suaves e formatos de luz circulares ou geométricos muito agradáveis." },
                    { titulo: "Fidelidade de Tons de Pele", texto: "As lentes com tratamento ZEISS reduzem reflexos internos indesejados e garantem que os tons de pele fiquem naturais, sem aquele aspecto artificial." }
                ]
            },
            {
                subtitulo: "🎛️ O que você encontra na tela?",
                descricao: "Controles rápidos ao usar os Retratos ZEISS:",
                cards: [
                    { titulo: "Seletor de Distância Focal", texto: "Atalhos fáceis na tela para alternar entre as opções de retratos dedicadas (como o modo 85mm para closes íntimos ou 100mm para maior compressão do fundo)." },
                    { titulo: "Estilos de Bokeh ZEISS", texto: "Opções para escolher diferentes simulações de lentes clássicas da marca (como Biotar ou Sonnar), mudando o formato das luzes do fundo." }
                ]
            }
        ]
    },

    "ai-stage-mode": {
        titulo: "AI Stage Mode (Modo Palco / Eventos)",
        icone: "./images/apresentacao_camera/Modo_Palco.png",
        secoes: [
            {
                subtitulo: "O que é?",
                descricao: "É um modo inteligente projetado especificamente para resolver o maior desafio de tirar fotos em shows ou apresentações ao vivo: a variação extrema de luzes coloridas, fumaça, movimento rápido e artistas distantes no palco. Ele usa IA para equilibrar o brilho e resgatar detalhes."
            },
            {
                subtitulo: "🧠 Como a mágica acontece na prática?",
                descricao: "O AI Stage Mode atua nos bastidores para corrigir problemas comuns em eventos:",
                cards: [
                    { titulo: "Controle Dinâmico de Exposição", texto: "O sistema identifica instantaneamente quando uma luz forte incide sobre o artista, ajustando a exposição de forma ultrarrápida para evitar que o rosto fique totalmente branco." },
                    { titulo: "Redução de Ruído em Ambientes Escuros", texto: "Como shows acontecem em locais escuros, a IA limpa o 'chuvisco' (ruído digital) do fundo sem apagar a atmosfera real do evento." },
                    { titulo: "Nitidez Dinâmica", texto: "Se o artista estiver correndo pelo palco, o modo otimiza a velocidade do obturador para garantir que o movimento não saia borrado." }
                ]
            },
            {
                subtitulo: "🎛️ O que você encontra na tela?",
                descricao: "Ferramentas dedicadas ao Modo Palco:",
                cards: [
                    { titulo: "Otimização de Zoom para Palco", texto: "Atalhos rápidos para alternar para o zoom óptico de 3x ou superior, permitindo enquadrar o artista de perto mesmo estando longe do palco." },
                    { titulo: "Ajuste de Tom de Cor", texto: "O algoritmo evita que luzes roxas, azuis ou vermelhas intensas distorçam completamente a cor da pele da pessoa fotografada, mantendo um aspecto natural." }
                ]
            }
        ]
    },

    "zoom-ia": {
        titulo: "Zoom com IA (Até 100x com Upscaling)",
        icone: "./images/apresentacao_camera/Zoom.png",
        secoes: [
            {
                subtitulo: "O que é?",
                descricao: "É o recurso de longo alcance do Vivo V70 que combina lentes físicas de alta precisão com algoritmos avançados de inteligência artificial. Ele permite aproximar elementos extremamente distantes, alcançando um poder de zoom impressionante de até 100x."
            },
            {
                subtitulo: "🧠 Como a mágica acontece na prática?",
                descricao: "Para entender o zoom de até 100x, é preciso dividir a aproximação em duas etapas:",
                cards: [
                    { titulo: "A Base Real (Zoom Óptico de 3x)", texto: "Até o limite da lente Super Telefoto física (3x), a aproximação é 100% real, feita pelas lentes de vidro, garantindo máxima nitidez e zero perda de qualidade." },
                    { titulo: "O Salto com IA e Upscaling", texto: "Acima de 3x, o celular usa upscaling por IA. A IA analisa a imagem, 'adivinha' e reconstrói texturas, contornos e textos, devolvendo nitidez para aquilo que antes seria apenas um borrão." }
                ]
            },
            {
                subtitulo: "🎛️ O que você encontra na tela?",
                descricao: "Recursos que auxiliam na aproximação:",
                cards: [
                    { titulo: "Mapa de Miniatura (Picture-in-Picture)", texto: "Ao usar um zoom muito alto, um pequeno retângulo mostra a visão geral da foto, indicando exatamente para onde a câmera está apontando e evitando perder o alvo." },
                    { titulo: "Indicadores de Distância Rápida", texto: "Atalhos na tela (como 1x, 3x, 10x, 30x) para alternar rapidamente entre o uso padrão, o zoom óptico puro e o zoom com IA." }
                ]
            }
        ]
    },

    "ferramentas-edicao": {
        titulo: "Magic Move & Image Expander",
        icone: "./images/apresentacao_camera/Ferramentas_Edicao.png",
        secoes: [
            {
                subtitulo: "O que é?",
                descricao: "São ferramentas avançadas de edição embutidas no sistema do Vivo V70 que usam IA para transformar ou consertar fotos depois de tiradas. O Magic Move foca em mover elementos, enquanto o Image Expander amplia as bordas da foto."
            },
            {
                subtitulo: "🪄 Como cada ferramenta funciona na prática?",
                descricao: "Entenda o poder de edição após o clique:",
                cards: [
                    { titulo: "1. Magic Move (Mover e Apagar)", texto: "O que faz: Permite mover, redimensionar ou apagar objetos/pessoas. Como a IA age: Ela analisa o fundo escondido e 'preenche' o espaço vazio de forma realista, clonando texturas do cenário." },
                    { titulo: "2. Image Expander (Expansão)", texto: "O que faz: Ideal para ampliar fotos muito fechadas. Como a IA age: Você afasta os limites da imagem e a IA 'inventa' e desenha o restante da paisagem seguindo o padrão visual da foto original." }
                ]
            },
            {
                subtitulo: "🎛️ O que você encontra na tela?",
                descricao: "Controles intuitivos de edição:",
                cards: [
                    { titulo: "Pincel de Seleção Rápida", texto: "Um marcador onde você pinta por cima do objeto que quer mover ou apagar no Magic Move." },
                    { titulo: "Grade de Redimensionamento", texto: "Alças nas bordas da foto no Image Expander para você puxar o tamanho da imagem para onde quiser." },
                    { titulo: "Opções de Variação", texto: "O sistema costuma gerar opções diferentes de preenchimento por IA, permitindo que você escolha a mais natural." }
                ]
            }
        ]
    },

    "modo-grupo": {
        titulo: "Modo Grupo na Câmera Frontal (Group Selfie)",
        icone: "./images/apresentacao_camera/Modo_Grupo.png",
        secoes: [
            {
                subtitulo: "O que é?",
                descricao: "É um recurso inteligente da câmera frontal (50 MP) do Vivo V70 projetado para resolver o problema de espaço nas selfies em turma. Ele amplia o campo de visão e ajusta automaticamente o enquadramento."
            },
            {
                subtitulo: "🔍 Como a mágica acontece na prática?",
                descricao: "A câmera frontal não se limita a um único ângulo fechado:",
                cards: [
                    { titulo: "Campo de Visão Ampliado", texto: "O sensor se abre (até 92°) para capturar uma área maior ao redor de quem está segurando o celular, permitindo incluir mais amigos." },
                    { titulo: "Ajuste de Zoom Inteligente", texto: "Alterna inteligentemente entre uma visão mais aberta e closes fechados, ajustando o foco automaticamente nos rostos detectados." },
                    { titulo: "Correção de Distorção nas Bordas", texto: "A IA corrige a distorção geométrica nas laterais (rostos esticados), garantindo que todo mundo saia com proporções naturais." }
                ]
            },
            {
                subtitulo: "🎛️ O que você encontra na tela?",
                descricao: "Atalhos da Selfie em Grupo:",
                cards: [
                    { titulo: "Atalhos de Ângulo (0.8x / 1x)", texto: "Botões rápidos na tela para alternar entre a visão normal e a visão super aberta antes de fazer o disparo." },
                    { titulo: "Foco Automático (PDAF)", texto: "Garante que, mesmo com várias pessoas em distâncias ligeiramente diferentes, os rostos fiquem nítidos e em foco." }
                ]
            }
        ]
    }
};

const urlParams = new URLSearchParams(window.location.search);
const cardId = urlParams.get('card');

if (cardId && dadosDosCards[cardId]) {
    const dados = dadosDosCards[cardId];
    
    document.getElementById('titulo-header').textContent = dados.titulo;
    document.getElementById('titulo-pagina').textContent = dados.titulo;
    
    // O .replace('./', '../') injeta as imagens corretamente para quando estivermos dentro da pasta /pages/
    document.getElementById('icone-header').src = dados.icone.replace('./', '../');

    const containerPrincipal = document.getElementById('conteudo-principal');
    containerPrincipal.innerHTML = ''; 

    dados.secoes.forEach(secao => {
        if (secao.subtitulo) {
            containerPrincipal.innerHTML += `<h2 class="font-bold text-titulo text-[18px] mt-4">${secao.subtitulo}</h2>`;
        }
        if (secao.descricao) {
            containerPrincipal.innerHTML += `<p class="font-light text-corpo text-[14px]">${secao.descricao}</p>`;
        }

        if (secao.cards && secao.cards.length > 0) {
            let htmlDoGrid = `<section class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-4">`;
            
            secao.cards.forEach(card => {
                htmlDoGrid += `
                    <div class="bg-white p-4 border rounded-lg border-white shadow h-full flex flex-col gap-2">
                        <h3 class="font-bold text-titulo text-[16px]">${card.titulo}</h3>
                        <p class="font-light text-corpo text-[14px]">${card.texto}</p>
                    </div>
                `;
            });
            
            htmlDoGrid += `</section>`;
            containerPrincipal.innerHTML += htmlDoGrid;
        }
    });
}