// Honestamente entendi muy poco este tema, pero ya estoy estudiando el DOM

const navToggle = document.querySelector(".nav__toggle");
const navMenu = document.querySelector(".main-nav");

navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("nav-menu_visible");

  if (navMenu.classList.contains("nav-menu_visible")) {
    navToggle.setAttribute("aria-label", "Cerrar menú");
  } else {
    navToggle.setAttribute("aria-label", "Abrir menú");
  }
});