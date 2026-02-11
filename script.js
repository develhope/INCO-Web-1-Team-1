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