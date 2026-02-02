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