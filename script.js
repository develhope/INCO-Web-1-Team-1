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

