// Seleção dos elementos do HTML (DOM)
const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

// Estrutura de dados para as perguntas atualizada com objetos (texto e afirmacao)
const perguntas = [
    {
        enunciado: "Assim que saiu da escola você se depara com uma nova tecnologia, um chat que consegue responder todas as dúvidas que uma pessoa pode ter, ele também gera imagens e áudios hiper-realistas. Qual o primeiro pensamento?",
        alternativas: [
            {
                texto: "Isso é assustador!",
                afirmacao: "No início, você achou a velocidade do avanço da IA assustadora."
            },
            {
                texto: "Isso é maravilhoso!",
                afirmacao: "De primeira, você ficou empolgado com as infinitas possibilidades da IA."
            }
        ]
    },
    {
        enunciado: "Com a descoberta desta tecnologia, chamada Inteligência Artificial, uma professora de tecnologia da escola decidiu fazer uma sequência de aulas sobre esta tecnologia. No fim de uma aula ela pede que você escreva um trabalho sobre o uso de IA em sala de aula. Qual atitude você toma?",
        alternativas: [
            {
                texto: "Utiliza uma ferramenta de busca na internet que utiliza IA para que ela ajude a encontrar informações relevantes para o trabalho e explique numa linguagem que facilite o entendimento.",
                afirmacao: "Decidiu usar a IA como uma ferramenta aliada nos seus estudos diários."
            },
            {
                texto: "Escreve o trabalho com base nas conversas que teve com colegas, algumas pesquisas na internet e conhecimentos próprios sobre o tema.",
                afirmacao: "Preferiu seguir métodos tradicionais de pesquisa para garantir sua própria autoria."
            }
        ]
    },
    {
        enunciado: "Após a elaboração do trabalho escrito, a professora realizou um debate entre a turma para entender como foi realizada a pesquisa e escrita. Nessa conversa também foi levantado um ponto muito importante: como a IA impacta o trabalho do futuro. Nesse debate, como você se posiciona?",
        alternativas: [
            {
                texto: "Defende a ideia de que a IA pode criar novas oportunidades de emprego e melhorar habilidades humanas.",
                afirmacao: "No debate, defendeu o otimismo de que o mercado vai se adaptar e criar novas funções."
            },
            {
                texto: "Me preocupo com as pessoas que perderão seus empregos para máquinas e defendem a importância de proteger os trabalhadores.",
                afirmacao: "Mostrou preocupação social com o desemprego tecnológico e a proteção do trabalhador."
            }
        ]
    },
    {
        enunciado: "Ao final da discussão, você precisou criar uma imagem no computador que representasse o que pensa sobre IA. E agora?",
        alternativas: [
            {
                texto: "Criar uma imagem utilizando uma plataforma de design como o Paint.",
                afirmacao: "Optou por expressar suas ideias de forma manual através do design tradicional."
            },
            {
                texto: "Criar uma imagem utilizando um gerador de imagem de IA.",
                afirmacao: "Utilizou geradores de imagem automatizados para dar vida aos seus pensamentos."
            }
        ]
    },
    {
        enunciado: "Você tem um trabalho em grupo de biologia para entregar na semana seguinte, o andamento do trabalho está um pouco atrasado e uma pessoa do seu grupo decidiu fazer com ajuda da IA. O problema é que o trabalho está totalmente igual ao do chat. O que você faz? ",
        alternativas: [
            {
                texto: "Escrever comandos para o chat é uma forma de contribuir com o trabalho, por isso não é um problema utilizar o texto inteiro.",
                afirmacao: "Considera que a engenharia de prompt por si só já justifica a entrega do material."
            },
            {
                texto: "O chat pode ser uma tecnologia muito avançada, mas é preciso manter a atenção pois toda máquina erra, por isso revisar o trabalho e contribuir com as perspectivas pessoais é essencial.",
                afirmacao: "Entende que a revisão humana e o toque pessoal são indispensáveis no uso ético da tecnologia."
            }
        ]
    }
];

// Variáveis de estado do jogo
let atual = 0;
let perguntaAtual;
let historiaFinal = ""; // Passo 9: Variável para acumular o texto final

function mostraPergunta() {
    // Verifica se chegou ao fim das perguntas
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = ""; // Limpa os botões anteriores da tela
    mostraAlternativas();
}

function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto; // Exibe o texto da alternativa
        
        // Passo 7: Arrow function direcionando para a função respostaSelecionada passando o parâmetro
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

// Passo 8 e 10: Função criada separadamente para processar a escolha
function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    
    // Nota: Como mencionado no passo 11, usar "=" substitui a história a cada rodada. 
    // Se quiser acumular o texto corrido no futuro, você mudará isso para: historiaFinal += afirmacoes + " ";
    historiaFinal = afirmacoes; 
    
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Fim da jornada!";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = ""; // Garante que os botões somem no final
}

// Inicia o questionário na primeira execução
mostraPergunta();
