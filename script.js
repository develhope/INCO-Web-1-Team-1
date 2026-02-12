  //main
document.addEventListener("DOMContentLoaded", function () {
  const button = document.getElementById("toggleTests");
  const testLinks = document.getElementById("testLinks");

  if (!button || !testLinks) return;

  button.addEventListener("click", function () {
    testLinks.classList.toggle("show");
  });
});

  
  //footer//
  document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("footer form");

    form.addEventListener("submit", function(event) {
      event.preventDefault(); 

      const email = form.email.value;
      const message = form.message.value;

      if (!email || !message) {
        alert("Per favore, compila tutti i campi.");
        return;
      }

      alert("Messaggio inviato con successo!");
      form.reset();
    });
  });

  //PAGINA UTENTE//
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

//TEST3//
document.addEventListener("DOMContentLoaded", function () {
  // Prendiamo il riferimento al pulsante "Invia", al messaggio di risultato e al form
  const button = document.getElementById("submitTest");
  const message = document.getElementById("resultMessage");
  const form = document.querySelector(".test-form");

  // Controlliamo che gli elementi esistano
  if (!button || !message || !form) return;

  // Aggiungiamo un listener per il click sul pulsante
  button.addEventListener("click", function (event) {
    // Evitiamo il comportamento predefinito del form (submit e ricarica pagina)
    event.preventDefault();

    // Prendiamo tutte le domande
    const questions = form.querySelectorAll(".test-question");
    let allAnswered = true;

    // Controlliamo se ogni domanda ha una risposta selezionata
    questions.forEach((question) => {
      const checked = question.querySelector("input[type='radio']:checked");
      if (!checked) {
        allAnswered = false;
      }
    });

    if (!allAnswered) {
      // Se manca qualche risposta, mostriamo un messaggio di errore
      message.textContent = "Per favore, rispondi a tutte le domande prima di inviare.";
      message.style.color = "red";
      return; 
    }

    // Se tutte le domande sono risposte, mostriamo il messaggio di conferma
    message.textContent =
      "Elaborazione completata, il risultato sarà disponibile nel tuo profilo personale.";
    message.style.color = "var(--color-accent)";

    // Disabilitiamo il pulsante per impedire ulteriori click
    button.disabled = true;

    // Cambiamo lo stile del pulsante per mostrare che non è più cliccabile
    button.style.backgroundColor = "#ccc";  // colore grigio
    button.style.cursor = "not-allowed";     // cambio cursore
    button.style.color = "#666";             // testo più scuro

    // Disabilitiamo tutti gli input della form
    const inputs = form.querySelectorAll("input");
    inputs.forEach(input => input.disabled = true);

    // Puliamo il form dopo l'invio
    form.reset(); 
  });
});



  //chi siamo//
  const testimonials = document.querySelectorAll(".testimonial");
  let currentIndex = 0;

  testimonials[currentIndex].classList.add("active");

  setInterval(function () {
    testimonials[currentIndex].classList.remove("active");

    currentIndex++;
    if (currentIndex >= testimonials.length) {
      currentIndex = 0;
    }

    testimonials[currentIndex].classList.add("active");
  }, 4000);

  const form = document.querySelector(".booking form");

form.addEventListener("submit", function (event) {
  event.preventDefault(); 

  alert("Messaggio inviato con successo!");

  form.reset(); 
});