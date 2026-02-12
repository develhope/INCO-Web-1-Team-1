document.addEventListener("DOMContentLoaded", function () {
  // ===== PAGINA UTENTE / Toggle Cards =====
  const toggleButtons = document.querySelectorAll('.toggle-btn');
  toggleButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const card = btn.closest('.card');
      const details = card.querySelector('.profile-details');

      if (details.classList.contains('show')) {
        details.style.maxHeight = '0';
        details.style.opacity = '0';
        card.style.boxShadow = '0 6px 20px rgba(0,0,0,0.08)';
      } else {
        details.style.maxHeight = details.scrollHeight + 'px';
        details.style.opacity = '1';
        card.style.boxShadow = '0 12px 32px rgba(107,123,75,0.3)';
        details.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }

      details.classList.toggle('show');
      btn.textContent = details.classList.contains('show') ? 'Nascondi risultati' : 'Mostra risultati';
    });
  });

  const startBtn = document.getElementById("startBtn");
const intro = document.getElementById("intro");
const test = document.getElementById("test");
const result = document.getElementById("result");

const questionText = document.getElementById("questionText");
const progressText = document.getElementById("progressText");
const progressFill = document.getElementById("progressFill");
const resultText = document.getElementById("resultText");

if (startBtn) {
  const optionButtons = document.querySelectorAll(".options button");

  let currentQuestion = 0;
  let answers = [];

  const questions = [
    { text: "Mi piace incontrare nuove persone.", trait: "extraversion" },
    { text: "Mi piace pianificare le cose in anticipo.", trait: "conscientiousness" },
    { text: "Rimango calmo sotto pressione.", trait: "emotional_stability" },
    { text: "Mi piace esplorare nuove idee.", trait: "openness" },
    { text: "Cerco di essere premuroso verso gli altri.", trait: "agreeableness" },
    { text: "Mi sento energico in contesti sociali.", trait: "extraversion" },
    { text: "Seguo routine e programmi.", trait: "conscientiousness" },
    { text: "Mi preoccupo facilmente per molte cose.", trait: "emotional_stability", reverse: true },
    { text: "Mi piacciono le attività creative.", trait: "openness" },
    { text: "Sono disposto a scendere a compromessi.", trait: "agreeableness" }
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
    progressText.textContent = `Domanda ${currentQuestion + 1} di ${questions.length}`;
    progressFill.style.width = ((currentQuestion) / questions.length) * 100 + "%";
  }

  function showResult() {
    test.classList.add("hidden");
    result.classList.remove("hidden");

    const traits = {};
    answers.forEach(a => {
      traits[a.trait] = (traits[a.trait] || 0) + a.value;
    });

    let summary = "In base alle tue risposte, il tuo profilo della personalità suggerisce:\n\n";
    summary += traits.extraversion >= 12 ? "• Sei energico e socievole.\n" : "• Tendi a essere più riservato e riflessivo.\n";
    summary += traits.conscientiousness >= 12 ? "• Sei organizzato e affidabile.\n" : "• Preferisci flessibilità rispetto a una pianificazione rigorosa.\n";
    summary += traits.emotional_stability >= 12 ? "• Gestisci bene lo stress.\n" : "• Potresti essere più sensibile emotivamente.\n";
    summary += traits.openness >= 12 ? "• Sei curioso e aperto alle novità.\n" : "• Preferisci familiarità e praticità.\n";
    summary += traits.agreeableness >= 12 ? "• Sei cooperativo ed empatico.\n" : "• Sei più diretto e competitivo.\n";

    resultText.textContent = summary;
  }
}

  // ===== TEST2 =====
const submitStress = document.getElementById("submitStress");
const stressResultMessage = document.getElementById("stressResultMessage");
const stressForm = document.querySelector(".stress-form");

if (submitStress && stressResultMessage && stressForm) {
  submitStress.addEventListener("click", function(event) {
    event.preventDefault();

    const questions = stressForm.querySelectorAll(".stress-question");
    let allAnswered = true;

    questions.forEach(q => {
      if (!q.querySelector("input[type='radio']:checked")) allAnswered = false;
    });

    if (!allAnswered) {
      stressResultMessage.textContent = "Per favore, rispondi a tutte le domande prima di inviare.";
      stressResultMessage.style.color = "red";
      return;
    }

    stressResultMessage.innerHTML = `Elaborazione completata, il risultato sarà disponibile nel <a href="./dashboard.html">tuo profilo personale</a>.`;
    stressResultMessage.style.color = "var(--color-accent)";

    submitStress.disabled = true;
    submitStress.style.backgroundColor = "#ccc";
    submitStress.style.cursor = "not-allowed";
    submitStress.style.color = "#666";

    const inputs = stressForm.querySelectorAll("input");
    inputs.forEach(input => input.disabled = true);
  });
}


  // ===== TEST3 =====
const submitTest = document.getElementById("submitTest");
const resultMessage = document.getElementById("resultMessage");
const testForm = document.querySelector(".test-form");

if (submitTest && resultMessage && testForm) {
  submitTest.addEventListener("click", function(event) {
    event.preventDefault();

    const questions = testForm.querySelectorAll(".test-question");
    let allAnswered = true;

    questions.forEach(q => {
      if (!q.querySelector("input[type='radio']:checked")) allAnswered = false;
    });

    if (!allAnswered) {
      resultMessage.textContent = "Per favore, rispondi a tutte le domande prima di inviare.";
      resultMessage.style.color = "red";
      return;
    }

    resultMessage.innerHTML = `Elaborazione completata, il risultato sarà disponibile nel <a href="./dashboard.html">tuo profilo personale</a>.`;
    resultMessage.style.color = "var(--color-accent)";

    submitTest.disabled = true;
    submitTest.style.backgroundColor = "#ccc";
    submitTest.style.cursor = "not-allowed";
    submitTest.style.color = "#666";

    const inputs = testForm.querySelectorAll("input");
    inputs.forEach(input => input.disabled = true);
  });
}


  // ===== FOOTER FORM =====
  const footerForm = document.querySelector("footer form");
  if (footerForm) {
    footerForm.addEventListener("submit", function (event) {
      event.preventDefault();
      alert("Messaggio inviato con successo!");
      footerForm.reset();
    });
  }

  // ===== TESTIMONIALS SLIDER =====
  const testimonials = document.querySelectorAll(".testimonial");
  if (testimonials.length > 0) {
    let currentIndex = 0;
    testimonials[currentIndex].classList.add("active");
    setInterval(() => {
      testimonials[currentIndex].classList.remove("active");
      currentIndex = (currentIndex + 1) % testimonials.length;
      testimonials[currentIndex].classList.add("active");
    }, 4000);
  }

  // ===== MAIN PAGE TOGGLE TESTS =====
  const toggleBtn = document.getElementById("toggleTests");
  const testLinks = document.getElementById("testLinks");
  if (toggleBtn && testLinks) {
    toggleBtn.addEventListener("click", () => {
      testLinks.classList.toggle("show");
    });
  }
});
