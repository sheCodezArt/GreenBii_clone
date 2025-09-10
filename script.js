const menuToggle = document.getElementById("menu-toggle");
const navbar = document.getElementById("navbar");
const dropdowns = document.querySelectorAll(".dropdown");

// Toggle mobile menu
menuToggle.addEventListener("click", () => {
  navbar.classList.toggle("active");
  menuToggle.innerHTML = navbar.classList.contains("active")
    ? '<i class="fas fa-times"></i>'
    : '<i class="fas fa-bars"></i>';
});

// Dropdown toggle for mobile
dropdowns.forEach(dropdown => {
  const button = dropdown.querySelector(".drop-btn");
  button.addEventListener("click", () => {
    dropdown.classList.toggle("active");
  });
});

