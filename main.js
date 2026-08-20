const caixaprincipal = document.querySelector(".caixa-principal")
const caixaperguntas = document.querySelector(".caixa-pergutas")
const caixaalternativas = document.querySelector(".caixa-alternativas")
const caixaresultado= document.querySelector(".caixa-resultados")
const textoresultado = document.querySelector(".texto-resultados")




const perguntas = [
    {
        enunciado: "Você acorda como um gato em uma casa completamente estranha, com cheiros desconhecidos e móveis diferentes. O que você faz primeiro?",
        alternativas: [
            {
                texto: "Fica imóvel, observando tudo com cautela.",
                afirmacao: "Você percebe que a calma ajuda a entender melhor o ambiente ao seu redor."
            },
            {
                texto: "Começa a explorar cada canto farejando tudo.",
                afirmacao: "Sua curiosidade felina te levou a descobrir muitos segredos da casa."
            }
        ]
    },
    {
        enunciado: "Você encontra uma porta entreaberta e sente um cheiro de comida vindo de lá. O que você faz?",
        alternativas: [
            {
                texto: "Empurra a porta com a pata e entra devagar.",
                afirmacao: "Sua coragem te recompensou com um delicioso pedaço de peixe."
            },
            {
                texto: "Fica miando perto da porta até que alguém apareça.",
                afirmacao: "Descobriu que miar pode atrair atenção e carinho dos humanos."
            }
        ]
    },
    {
        enunciado: "Você encontra um espelho e vê seu reflexo. Como reage?",
        alternativas: [
            {
                texto: "Arrepia o pelo e fica em posição de ataque.",
                afirmacao: "Você aprendeu que nem tudo que parece ameaçador é real."
            },
            {
                texto: "Tenta brincar com o gato do espelho.",
                afirmacao: "Sua natureza brincalhona transformou o susto em diversão."
            }
        ]
    },
    {
        enunciado: "Na sala, há várias caixas espalhadas. Qual é sua atitude?",
        alternativas: [
            {
                texto: "Entra em cada uma delas para testar qual é mais confortável.",
                afirmacao: "Você descobriu que caixas são os melhores esconderijos do mundo."
            },
            {
                texto: "Ignora as caixas e continua procurando uma saída.",
                afirmacao: "Sua determinação te fez encontrar uma janela aberta."
            }
        ]
    },
    {
        enunciado: "Você ouve um barulho vindo da cozinha. O que faz?",
        alternativas: [
            {
                texto: "Corre para a cozinha para ver o que está acontecendo.",
                afirmacao: "Descobriu que o barulho era um humano abrindo um sachê de ração."
            },
            {
                texto: "Fica escondido observando de longe.",
                afirmacao: "Aprendeu que observar antes de agir pode evitar sustos."
            }
        ]
    },
];

let atual = 0
let perguntaatual;
let historiafinal = ""

function mostrarperguntas(){
    if (atual >= perguntas.length) {
        return
    }

    perguntaatual = perguntas[atual]
    caixaperguntas .textcontent = perguntaatual
}

mostrarperguntas()