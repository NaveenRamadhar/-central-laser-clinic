// Mobile Navigation

const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");

if (menuToggle && mainNav) {
  menuToggle.addEventListener("click", () => {
    menuToggle.classList.toggle("active");
    mainNav.classList.toggle("active");

    // Prevent background scrolling when menu is open
    document.body.classList.toggle("menu-open");
  });

  // Close menu when a navigation link is clicked
  document.querySelectorAll(".main-nav a").forEach((link) => {
    link.addEventListener("click", () => {
      menuToggle.classList.remove("active");
      mainNav.classList.remove("active");
      document.body.classList.remove("menu-open");
    });
  });

  // Close menu if window is resized to desktop
  window.addEventListener("resize", () => {
    if (window.innerWidth > 1050) {
      menuToggle.classList.remove("active");
      mainNav.classList.remove("active");
      document.body.classList.remove("menu-open");
    }
  });
}
