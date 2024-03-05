// declação de variaveis
const question = document .querySelector("#question");
const answersBox = document.querySelector("#answers-box");
const quizzContainer = document.querySelector("#quizz-container");
const scoreContainer = document.querySelector("#score-container");
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

  // Limpa questão anterior
  const oldButtons = answersBox.querySelectorAll("button");

  oldButtons.forEach(function(btn) {
    btn.remove();
  });

  // Altera texto da pergunta
  const questionText = question.querySelector("#question-text");
  const questionNumber = question.querySelector("#question-number");

  questionText.textContent = questions[i].question;
  questionNumber.textContent = i + 1;

  // Insere alternativas
  questions[i].answers.forEach(function(answer, i) {
    
    // Altera texto do template
    const answerTemplate = document.querySelector(".answer-template").cloneNode(true);

    const letterBtn = answerTemplate.querySelector(".btn-letter");
    const answerText = answerTemplate.querySelector(".question-answer");

    letterBtn.textContent = letters[i];
    answerText.textContent = answer['answer'];

    answerTemplate.setAttribute("correct-answer", answer["correct"]);

    // remove classe de hide e template do template
    answerTemplate.classList.remove("hide");
    answerTemplate.classList.remove("answer-template");

    // Insere template na tela
    answersBox.appendChild(answerTemplate);

  });

  // Cria evento em todos os botões
  const buttons = answersBox.querySelectorAll("button");

  buttons.forEach(function(button) {
    button.addEventListener("click", function() {
      checkAnswer(this, buttons);
    });
  });

  // Incrementa o número atual de questões
  actualQuestion++;

} 

function checkAnswer(btn, buttons) {
  
    // Exibir respostas erradas e a certa
    buttons.forEach(function (button) {

        if (button.getAttribute("correct-answer") === "true") {
            button.classList.add("correct-answer");
        
            // checa se o usuário acertou
            if (btn === button) {
            
                // incrementa os pontos
                points++;
            }
        } else {
            button.classList.add("wrong-answer");
        }
      
    });
    // Exibir proxima pergunta
    nextQuestion();
}

// Exibir proxima pergunta
function nextQuestion() {

  // Timer para ver se acertou ou errou
  setTimeout(function() {

    // checa se ainda há mais perguntas
    if(actualQuestion >= questions.length) {
      // apresenta msg de sucesso
      showSuccessMessage();
      return;
    }

    createQuestion(actualQuestion)

  }, 1000);

}
    
// Exibe a tela final
function showSuccessMessage() {
    hideOrShowQuizz();
    
    // trocar dados da tela de sucesso


    // calcular score
    const score = ((points / questions.length) * 100).toFixed(2);
    const displayScore = document.querySelector("#display-score span");

    displayScore.textContent = score.toString();

    // altera o numero de perguntas corretas
    const correctAnswers = document.querySelector("correct-answers");
    correctAnswers.textContent = points;

    // altera o total de perguntas
    const totalQuestions = document.querySelector("#questions-qty");
    totalQuestions.textContent = question.length;
}

// mostra ou esconde o score
function hideOrShowQuizz() {
    quizzContainer.classList.toggle("hide");
    scoreContainer.classList.toggle("hide");
};

// reiniciar quizz
const restartBtn = document.querySelector("#restart");
restartBtn.addEventListener("click", function () {
    // xera o jogo
    actualQuestion = 0;
    points = 0;
    
    hideOrShowQuizz();
    init();
});

// inicialização do quizz
init();

