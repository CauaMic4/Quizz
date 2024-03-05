// declação de variaveis
const question = document .querySelector("#question");
const answersBox = document.querySelector("#answers-box");
const quizzcontainer = document.querySelector("#quizz-container");
const scoreContainer = document.querySelector("#scoreContainer");
const letters = ["a", "b", "c", "d"];
let points = 0;
let actualQuestion = 0;

// perguntas
const questions = [
    {
        "question": "PHP foi desenvolvido para qual fim?",
        "answers": [
            {
                "answer": "back-end",
                "correct": true
            },
            {
                "answer": "front-end",
                "correct": false
            },
            {
                "answer": "Sistema operacional",
                "correct": false
            },
            {
                "answer": "Banco de dados",
                "correct": false
            },
        ]
    },
    {
        "question": "Uma forma de declarar variável em JavaScript:",
        "answers": [
            {
                "answer": "$var",
                "correct": false
            },
            {
                "answer": "var",
                "correct": true
            },
            {
                "answer": "@var",
                "correct": false
            },
            {
                "answer": "#let",
                "correct": false
            },
        ]
    },
    {
        "question": "Qual o seletor de id no CSS?",
        "answers": [
            {
                "answer": "#",
                "correct": true
            },
            {
                "answer": ".",
                "correct": false
            },
            {
                "answer": "@",
                "correct": false
            },
            {
                "answer": "/",
                "correct": false
            },
        ]
    },
];

// substituição do quizz para a primeira pergunta
function init() {
    // criar a primeira pergunta
    createQuestion(0);
}

// criar uma pergunta
function createQuestion(i) {
    // limpar a questao anterior
    const oldButtons = answersBox.querySelectorAll("button");

    oldButtons.forEach(function (btn) {
        btn.remove();
    });

    // alterar o texto da pergunta
    const questionText = question.querySelector("#question-text");
    const questionNumber = question.querySelector("#question-number");

    questionText.textContent = questions[i].question;
    questionNumber.textContent = i + 1;

    // Insere as alternativas
    questions[i].answers.forEach(function (answer, i) {
        // Altera o template do botao do quizz
        const answerTemplate = document.querySelector(".answer-template").cloneNode(true);
        const letterBtn = answerTemplate.querySelector(".btn-letter");
        const answerText = answerTemplate.querySelector(".question-answer");

        letterBtn.textContent = letters[i];
        answerText.textContent = answer["answer"];

        answerTemplate.setAttribute("correct-answer", answer["correct"]);

        // Remover hide e template class
        answerTemplate.classList.remove("hide");
        answerTemplate.classList.remove("answer-template");

        // Inserir a alternativa na tela
        answersBox.appendChild(answerTemplate);

        // Inserir evento de click no botao
        answerTemplate.addEventListener("click", function () {
            console.log(this);
        });
    });    

    // Incrementar o numero da questão
    actualQuestion++;
}



// inicialização do quizz
init();

