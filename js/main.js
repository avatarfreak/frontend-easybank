const menuBtn = document.querySelector("[aria-controls]");
const menuExpanded = document.querySelector("[aria-expanded]");
const nav = document.querySelector("nav");

menuBtn.addEventListener("click", () => {
  const isActive = menuExpanded.getAttribute("aria-expanded");

  if (isActive === "false") {
    nav.style.transform = "translateX(0)";
    menuBtn.classList.remove("bg-menu-open");
    menuBtn.classList.add("bg-menu-close");
    menuExpanded.setAttribute("aria-expanded", "true");
  } else {
    nav.style.transform = "translateX(-100%)";
    menuBtn.classList.add("bg-menu-open");
    menuBtn.classList.remove("bg-menu-close");
    menuExpanded.setAttribute("aria-expanded", "false");
  }
});
