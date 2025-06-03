const questions = [
  {
    question: "1. O que é uma enchente?",
    answers: {
      a: "Acúmulo de lixo nas ruas",
      b: "Transbordamento de rios e acúmulo de água em áreas urbanas",
      c: "Falta de água em reservatórios",
    },
    correctAnswer: "b",
  },
  {
    question: "2. Qual tecnologia pode ajudar a prevenir enchentes?",
    answers: {
      a: "Sensores IoT",
      b: "Redes sociais",
      c: "Impressoras 3D",
    },
    correctAnswer: "a",
  },
  {
    question: "3. O que significa 'resiliência urbana'?",
    answers: {
      a: "Capacidade de uma cidade resistir e se recuperar de desastres",
      b: "Quantidade de água potável disponível",
      c: "Número de prédios construídos",
    },
    correctAnswer: "a",
  },
  {
    question: "4. Qual ação reduz o risco de enchentes?",
    answers: {
      a: "Pavimentação total de ruas",
      b: "Preservação de áreas verdes e drenagem",
      c: "Construção de mais prédios",
    },
    correctAnswer: "b",
  },
  {
    question: "5. A IA pode ajudar como?",
    answers: {
      a: "Prevendo eventos extremos e alertando com antecedência",
      b: "Substituindo engenheiros",
      c: "Controlando redes sociais",
    },
    correctAnswer: "a",
  },
  {
    question: "6. O que fazer ao receber alerta de enchente?",
    answers: {
      a: "Esperar a água subir",
      b: "Evacuar para local seguro",
      c: "Filmar para redes sociais",
    },
    correctAnswer: "b",
  },
  {
    question: "7. Enchentes urbanas são causadas por:",
    answers: {
      a: "Muita chuva + falta de drenagem adequada",
      b: "Sol forte",
      c: "Rios limpos demais",
    },
    correctAnswer: "a",
  },
  {
    question: "8. Qual é o papel da Defesa Civil?",
    answers: {
      a: "Emitir alertas e coordenar ações de resposta",
      b: "Vender seguros",
      c: "Fiscalizar comércios",
    },
    correctAnswer: "a",
  },
  {
    question: "9. Sensores em um sistema de prevenção fazem o quê?",
    answers: {
      a: "Enfeitam postes",
      b: "Medem nível de água e alertam autoridades",
      c: "Controlam o trânsito",
    },
    correctAnswer: "b",
  },
  {
    question: "10. Um bom plano de evacuação deve ser:",
    answers: {
      a: "Feito apenas em emergências",
      b: "Rápido, claro e treinado com a comunidade",
      c: "Secreto e não divulgado",
    },
    correctAnswer: "b",
  },
];

let currentQuestion = 0;
let score = 0;

const questionContainer = document.getElementById("question-container");
const nextButton = document.getElementById("next");
const resultsContainer = document.getElementById("results");

function showQuestion(index) {
  const q = questions[index];
  const answersHtml = Object.entries(q.answers)
    .map(
      ([key, text]) => `
    <label>
      <input type="radio" name="answer" value="${key}">
      ${key}) ${text}
    </label>
  `
    )
    .join("");

  questionContainer.innerHTML = `
    <div class="question">${q.question}</div>
    <div class="answers">${answersHtml}</div>
  `;
}

nextButton.addEventListener("click", () => {
  const selected = document.querySelector('input[name="answer"]:checked');
  if (!selected) {
    alert("Escolha uma resposta.");
    return;
  }

  const answer = selected.value;
  if (answer === questions[currentQuestion].correctAnswer) {
    score++;
  }

  currentQuestion++;

  if (currentQuestion < questions.length) {
    showQuestion(currentQuestion);
  } else {
    questionContainer.innerHTML = "";
    nextButton.style.display = "none";
    resultsContainer.innerHTML = `Você acertou ${score} de ${questions.length} perguntas.`;
  }
});

showQuestion(currentQuestion);
