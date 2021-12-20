const menuBtn = document.querySelector("[aria-controls]");
const menuExpanded = document.querySelector("[aria-expanded]");
const nav = document.querySelector("nav");

menuBtn.addEventListener("click", () => {
  if (menuBtn.classList.contains("active")) {
    menuBtn.classList.remove("active");
    menuExpanded.setAttribute("aria-expanded", "false");
    nav.style.transform = "translateX(-100%)";
  } else {
    menuBtn.classList.add("active");
    menuExpanded.setAttribute("aria-expanded", "true");
    nav.classList.add("active");
    nav.style.transform = "translateX(0)";
  }
});

// Display menu if media is equal or larget than 850px
window.addEventListener("resize", () => {
  if (window.innerWidth >= 850) {
    nav.style.transform = "translateX(0)";
  } else {
    nav.style.transform = "translateX(-100%)";
  }
});
