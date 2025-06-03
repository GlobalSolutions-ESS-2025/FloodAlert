const toggleButton = document.getElementById("menu-toggle");
const mobileMenu = document.getElementById("mobile-menu");
const mobileLinks = document.querySelectorAll(".mobile-link");

toggleButton.addEventListener("click", () => {
  mobileMenu.style.display =
    mobileMenu.style.display === "flex" ? "none" : "flex";
});

// Fechar o menu ao clicar em um link
mobileLinks.forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu.style.display = "none";
  });
});
