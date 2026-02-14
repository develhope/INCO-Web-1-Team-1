
window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");

  if (window.scrollY > 50) {
    navbar.style.boxShadow = "0 4px 10px rgba(0,0,0,0.2)";
  } else {
    navbar.style.boxShadow = "none";
  }
});

const links = document.querySelectorAll(".nav-links a");

links.forEach(link => {
  link.addEventListener("click", function () {

    links.forEach(l => l.classList.remove("active"));

    this.classList.add("active");
  });
});

const menuToggle = document.getElementById("menu-toggle");

links.forEach(link => {
  link.addEventListener("click", () => {
    menuToggle.checked = false;
  });
});

const buttons = document.querySelectorAll(".auth-buttons a");

buttons.forEach(btn => {
  btn.addEventListener("mouseenter", () => {
    btn.style.transform = "scale(1.05)";
    btn.style.transition = "0.2s";
  });

  btn.addEventListener("mouseleave", () => {
    btn.style.transform = "scale(1)";
  });
});
