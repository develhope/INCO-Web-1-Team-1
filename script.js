const startBtn = document.getElementById("startBtn");
const intro = document.getElementById("intro");
const test = document.getElementById("test");
const result = document.getElementById("result");

const questionText = document.getElementById("questionText");
const progressText = document.getElementById("progressText");
const progressFill = document.getElementById("progressFill");
const resultText = document.getElementById("resultText");

const optionButtons = document.querySelectorAll(".options button");

let currentQuestion = 0;
let answers = [];

/* Question bank with trait mapping */
const questions = [
     { text: "I enjoy meeting new people.", trait: "extraversion" },
     { text: "I like to plan things in advance.", trait: "conscientiousness" },
     { text: "I remain calm under pressure.", trait: "emotional_stability" },
     { text: "I enjoy exploring new ideas.", trait: "openness" },
     { text: "I try to be considerate of others.", trait: "agreeableness" },
     { text: "I feel energized in social settings.", trait: "extraversion" },
     { text: "I follow routines and schedules.", trait: "conscientiousness" },
     { text: "I worry easily about many things.", trait: "emotional_stability", reverse: true },
     { text: "I enjoy creative activities.", trait: "openness" },
     { text: "I am willing to compromise.", trait: "agreeableness" }
];

startBtn.addEventListener("click", () => {
     intro.classList.add("hidden");
     test.classList.remove("hidden");
     loadQuestion();
});

optionButtons.forEach(button => {
     button.addEventListener("click", () => {
          answers.push({
               trait: questions[currentQuestion].trait,
               value: questions[currentQuestion].reverse
                    ? 6 - Number(button.dataset.value)
                    : Number(button.dataset.value)
          });

          currentQuestion++;

          if (currentQuestion < questions.length) {
               loadQuestion();
          } else {
               showResult();
          }
     });
});

function loadQuestion() {
     questionText.textContent = questions[currentQuestion].text;
     progressText.textContent = `Question ${currentQuestion + 1} of ${questions.length}`;
     progressFill.style.width =
          ((currentQuestion) / questions.length) * 100 + "%";
}

function showResult() {
     test.classList.add("hidden");
     result.classList.remove("hidden");

     const traits = {};

     answers.forEach(a => {
          traits[a.trait] = (traits[a.trait] || 0) + a.value;
     });

     let summary = "Based on your responses, your personality profile suggests:\n\n";

     if (traits.extraversion >= 12) summary += "• You are socially energetic and outgoing.\n";
     else summary += "• You tend to be more reserved and reflective.\n";

     if (traits.conscientiousness >= 12) summary += "• You are organized and dependable.\n";
     else summary += "• You prefer flexibility over strict planning.\n";

     if (traits.emotional_stability >= 12) summary += "• You handle stress well.\n";
     else summary += "• You may experience emotional sensitivity.\n";

     if (traits.openness >= 12) summary += "• You are curious and open-minded.\n";
     else summary += "• You prefer familiarity and practicality.\n";

     if (traits.agreeableness >= 12) summary += "• You are cooperative and empathetic.\n";
     else summary += "• You are more direct and competitive.\n";

     resultText.textContent = summary;
}
