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
