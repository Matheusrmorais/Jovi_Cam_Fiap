
const dicasPorNivel = {
    iniciante: {
        titulo: "Iniciante",
        corHeader: "bg-green-600",
        corTexto: "text-green-700",
        corBadgeBorda: "border-green-500",
        corBadgeFundo: "bg-green-100",
        icone: "../images/dicas/Guia_Dicas.png",
        dicas: [
            {
                slug: "lente",
                icone: "../images/dicas/Icon_lente.png",
                titulo: "Limpe a lente",
                descricao: "Uma lente limpa deixa suas fotos mais nítidas e evita manchas na imagem.",
                tempo: "2 min de leitura"
            },
            {
                slug: "luz",
                icone: "../images/dicas/Icon_luz.png",
                titulo: "Aproveite a luz natural",
                descricao: "Uma boa iluminação pode deixar sua foto mais clara, bonita e detalhada.",
                tempo: "3 min de leitura"
            },
            {
                slug: "tercos",
                icone: "../images/dicas/Icon_regras.png",
                titulo: "Use a regra dos terços",
                descricao: "Posicione o assunto em pontos estratégicos da tela para criar uma composição mais equilibrada.",
                tempo: "3 min de leitura"
            },
            {
                slug: "zoom",
                icone: "../images/dicas/Icon_zoom.png",
                titulo: "Evite usar muito zoom",
                descricao: "Aproximar demais usando o zoom pode fazer a foto perder qualidade.",
                tempo: "2 min de leitura"
            },
            {
                slug: "angulo",
                icone: "../images/dicas/Icon_angulo.png",
                titulo: "Experimente diferentes ângulos",
                descricao: "Mudar o ângulo da câmera pode transformar uma foto comum em uma imagem mais interessante.",
                tempo: "3 min de leitura"
            },
            {
                slug: "foque",
                icone: "../images/dicas/Icon_main.png",
                titulo: "Foque no assunto principal",
                descricao: "Toque na tela para ajudar a câmera a identificar o elemento mais importante da foto.",
                tempo: "2 min de leitura"
            },
            {
                slug: "fundo",
                icone: "../images/dicas/Icon_bg.png",
                titulo: "Observe o fundo",
                descricao: "Um fundo organizado ajuda a destacar o principal elemento da fotografia.",
                tempo: "2 min de leitura"
            },
            {
                slug: "pratique",
                icone: "../images/dicas/Icon_pratique.png",
                titulo: "Experimente e pratique",
                descricao: "Quanto mais você pratica, mais fácil fica entender como criar boas fotos.",
                tempo: "2 min de leitura"
            }
        ]
    },

    intermediario: {
        titulo: "Intermediário",
        corHeader: "bg-purple-600",
        corTexto: "text-purple-700",
        corBadgeBorda: "border-purple-500",
        corBadgeFundo: "bg-purple-100",
        icone: "../images/dicas/Guia_Dicas.png",
        dicas: [

            {
                slug: "exposicao",
                icone: "../images/dicas/Icon_Exposicao_Foco.png",
                titulo: "Trave a Exposição e o Foco",
                descricao: "Aprenda a manter o foco e a iluminação estáveis durante o enquadramento.",
                tempo: "2 min de leitura"
            },
            {
                slug: "raw",
                icone: "../images/dicas/Icon_Raw.png",
                titulo: "Fotografe em RAW",
                descricao: "Entenda como o formato RAW pode preservar mais informações para edição.",
                tempo: "2 min de leitura"
            },
            {
                slug: "pro",
                icone: "../images/dicas/Icon_pro.png",
                titulo: "Use o Modo Pro",
                descricao: "Conheça os controles manuais disponíveis em celulares compatíveis.",
                tempo: "3 min de leitura"
            },
            {
                slug: "iso",
                icone: "../images/dicas/Icon_Iso.png",
                titulo: "Controle o ISO",
                descricao: "Aprenda como a sensibilidade do sensor influencia a qualidade da imagem.",
                tempo: "2 min de leitura"
            },
            {
                slug: "obturador",
                icone: "../images/dicas/icon_obturador.png",
                titulo: "Entenda a Velocidade do Obturador",
                descricao: "Descubra como o tempo de captura influencia movimento e iluminação.",
                tempo: "3 min de leitura"
            },
            {
                slug: "balanco",
                icone: "../images/dicas/icon_branco.png",
                titulo: "Ajuste o Balanço de Branco",
                descricao: "Aprenda a corrigir diferenças de temperatura e tonalidade na iluminação.",
                tempo: "2 min de leitura"
            },
            {
                slug: "histograma",
                icone: "../images/dicas/icon_histograma.png",
                titulo: "Use o Histograma",
                descricao: "Aprenda a analisar a distribuição de luz e sombra antes de fotografar.",
                tempo: "2 min de leitura"
            },
            {
                slug: "bracketing",
                icone: "../images/dicas/icon_bracketing.png",
                titulo: "Faça Bracketing",
                descricao: "Conheça uma técnica que registra diferentes exposições da mesma cena.",
                tempo: "2 min de leitura"
            },
            {
                slug: "silhueta",
                icone: "../images/dicas/icon_silhueta.png",
                titulo: "Fotografe em Silhueta",
                descricao: "Aprenda a transformar o contraste entre luz e sombra em parte da composição.",
                tempo: "1 min de leitura"
            },
            {
                slug: "longaexposicao",
                icone: "../images/dicas/icon_longa_exposicao.png",
                titulo: "Experimente Longa Exposição",
                descricao: "Descubra como registrar o movimento da luz e criar efeitos diferentes.",
                tempo: "3 min de leitura"
            },
            {
                slug: "pretobranco",
                icone: "../images/dicas/icon_preto_branco.png",
                titulo: "Fotografe em Preto e Branco",
                descricao: "Explore como contraste, formas e texturas podem substituir a importância das cores.",
                tempo: "2 min de leitura"
            },
            {
                slug: "edite",
                icone: "../images/dicas/icon_editar.png",
                titulo: "Edite sem Exagerar",
                descricao: "Aprenda a melhorar uma fotografia mantendo uma aparência natural.",
                tempo: "1 min de leitura"
            }


        ]
    },

    avancado: {
        titulo: "Avançado",
        corHeader: "bg-orange-500",
        corTexto: "text-orange-600",
        corBadgeBorda: "border-orange-500",
        corBadgeFundo: "bg-orange-100",
        icone: "../images/dicas/Guia_Dicas.png",
        dicas: [

            {
                slug: "dce",
                icone: "../images/dicas/icon_dce.png",
                titulo: "Domine a Compensação de Exposição",
                descricao: "Aprenda a controlar manualmente a exposição quando a câmera automática não entrega o resultado desejado.",
                tempo: "3 min de leitura"
            },
            {
                slug: "focomanual",
                icone: "../images/dicas/icon_focomanual.png",
                titulo: "Use o Foco Manual",
                descricao: "Aprenda a controlar exatamente a distância de foco em equipamentos que oferecem esse recurso.",
                tempo: "3 min de leitura"
            },
            {
                slug: "campo",
                icone: "../images/dicas/icon_campo.png",
                titulo: "Trabalhe com Profundidade de Campo",
                descricao: "Entenda como controlar a quantidade de elementos nítidos na fotografia.",
                tempo: "4 min de leitura"
            },
            {
                slug: "distanciafocal",
                icone: "../images/dicas/icon_distanciafocal.png",
                titulo: "Entenda a Distância Focal",
                descricao: "Descubra como diferentes distâncias focais modificam o enquadramento e a aparência dos elementos.",
                tempo: "3 min de leitura"
            },
            {
                slug: "perspectiva",
                icone: "../images/dicas/icon_perspectiva.png",
                titulo: "Controle a Perspectiva",
                descricao: "Aprenda como distância e posicionamento podem alterar a relação visual entre os elementos.",
                tempo: "2 min de leitura"
            },
            {
                slug: "azul",
                icone: "../images/dicas/icon_Azul.png",
                titulo: "Fotografe na Hora Azul",
                descricao: "Aproveite o período entre o dia e a noite para criar imagens equilibradas e com diferentes tonalidades.",
                tempo: "3 min de leitura"
            },
            {
                slug: "painting",
                icone: "../images/dicas/icon_painting.png",
                titulo: "Faça Light Painting",
                descricao: "Aprenda a utilizar uma fonte de luz em movimento para criar desenhos durante uma longa exposição.",
                tempo: "3 min de leitura"
            },
            {
                slug: "ruido",
                icone: "../images/dicas/icon_ruido.png",
                titulo: "Empilhe Fotografias para Reduzir Ruído",
                descricao: "Conheça uma técnica de processamento que combina várias capturas para melhorar a qualidade da imagem.",
                tempo: "4 min de leitura"
            },
            {
                slug: "panoramas",
                icone: "../images/dicas/icon_panoramas.png",
                titulo: "Crie Panoramas Manualmente",
                descricao: "Aprenda a produzir panoramas realizando várias capturas de uma mesma cena.",
                tempo: "2 min de leitura"
            },
            {
                slug: "filtros",
                icone: "../images/dicas/icon_neutro.png",
                titulo: "Use Filtros de Densidade Neutra",
                descricao: "Entenda como reduzir a quantidade de luz que chega ao sensor para trabalhar com exposições mais longas.",
                tempo: "3 min de leitura"
            },
            {
                slug: "histogramaluzes",
                icone: "../images/dicas/icon_histrograma_luzes.png",
                titulo: "Fotografe com Histograma e Alertas de Altas Luzes",
                descricao: "Aprenda a utilizar ferramentas de monitoramento para evitar perda de detalhes na exposição.",
                tempo: "3 min de leitura"
            },
            {
                slug: "mascaras",
                icone: "../images/dicas/icon_mascara.png",
                titulo: "Trabalhe com Máscaras na Edição",
                descricao: "Aprenda a aplicar ajustes somente em determinadas regiões da fotografia.",
                tempo: "4 min de leitura"
            },
            {
                slug: "posedit",
                icone: "../images/dicas/icon_posedit.png",
                titulo: "Corrija a Perspectiva na Pós-Edição",
                descricao: "Aprenda a corrigir distorções de linhas causadas pelo posicionamento da câmera.",
                tempo: "2 min de leitura"
            },
            {
                slug: "mesclagem",
                icone: "../images/dicas/icon_mesclagem.png",
                titulo: "Use Mesclagem de Exposições",
                descricao: "Aprenda como combinar diferentes exposições para preservar detalhes em regiões muito claras e escuras.",
                tempo: "4 min de leitura"
            },
            {
                slug: "posproducao",
                icone: "../images/dicas/icon_fluxo.png",
                titulo: "Construa um Fluxo de Pós-Produção",
                descricao: "Organize as etapas de tratamento da fotografia para obter resultados mais consistentes.",
                tempo: "2 min de leitura"
            },

        ]


    },

    estrategica: {
        titulo: "Posicionamento estratégico",
        corHeader: "bg-blue-600",
        corTexto: "text-blue-700",
        corBadgeBorda: "border-blue-500",
        corBadgeFundo: "bg-blue-100",
        icone: "../images/dicas/Guia_Dicas.png",
        dicas: [

            {
                slug: "ideal",
                icone: "../images/dicas/Icon_Exposicao_Foco.png",
                titulo: "Encontre o Ponto de Vista Ideal",
                descricao: "Descubra como pequenas mudanças na posição da câmera podem transformar completamente uma fotografia.",
                tempo: "2 min de leitura"
            },
            {
                slug: "ambiente",
                icone: "../images/dicas/Icon_Raw.png",
                titulo: "Posicione o Assunto no Ambiente",
                descricao: "Aprenda a utilizar o espaço ao redor do assunto para criar fotografias mais equilibradas.",
                tempo: "2 min de leitura"
            },
            {
                slug: "elementos",
                icone: "../images/dicas/Icon_Iso.png",
                titulo: "Use Elementos para Enquadrar",
                descricao: "Aprenda a posicionar o assunto entre elementos do ambiente para criar um enquadramento natural.",
                tempo: "3 min de leitura"
            },
            {
                slug: "movimento",
                icone: "../images/dicas/Icon_pro.png",
                titulo: "Antecipe o Movimento",
                descricao: "Saiba onde posicionar a câmera para fotografar pessoas, veículos ou objetos em movimento.",
                tempo: "1 min de leitura"
            },



        ]
    },

};