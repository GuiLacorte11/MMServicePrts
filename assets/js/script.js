// TOGGLE MENU CASCATA
const headerMenu = document.querySelector(".header__menu"),
  menuBtn = document.querySelector(".menu-btn"),
  headerMenuItems = headerMenu.querySelectorAll("li a");

menuBtn.addEventListener("click", () => {
  headerMenu.classList.toggle("show");

  // Adiciona animação em cascata para os itens do menu
  headerMenuItems.forEach((item, index) => {
    item.style.animation = headerMenu.classList.contains("show")
      ? `fadeIn 0.3s ease forwards ${index / 7 + 0.3}s`
      : "none";
  });
});

headerMenuItems.forEach((item) => {
  item.addEventListener("click", () => {
    headerMenu.classList.remove("show");
    headerMenuItems.forEach((item) => {
      item.style.animation = "none";
    });
  });
});

// ADD FIXED HEADER
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
  header.classList.toggle("sticky", window.scrollY > 0);
});

// TOGGLE DARK/LIGHT MODE
const themeToggleBtn = document.createElement("button");
themeToggleBtn.textContent = "Modo Escuro";
themeToggleBtn.classList.add("theme-toggle-btn");
document.body.appendChild(themeToggleBtn);

// Adiciona funcionalidade ao botão
const toggleTheme = () => {
  document.body.classList.toggle("dark-mode");
  const isDarkMode = document.body.classList.contains("dark-mode");
  themeToggleBtn.textContent = isDarkMode ? "Modo Claro" : "Modo Escuro";
};

themeToggleBtn.addEventListener("click", toggleTheme);
