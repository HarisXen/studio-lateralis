// main.js

// Highlight the current nav link
document.addEventListener("DOMContentLoaded", () => {
  const currentLocation = window.location.pathname;
  const navLinks = document.querySelectorAll("nav a");

  navLinks.forEach(link => {
    // remove any previously set active class
    link.classList.remove("active");

    // check if link matches the current path
    if (currentLocation.includes(link.getAttribute("href"))) {
      link.classList.add("active");
    }
  });

  // Smooth scroll for anchor links (e.g. #section)
  const smoothLinks = document.querySelectorAll('a[href^="#"]');
  for (let link of smoothLinks) {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href").substring(1);
      const target = document.getElementById(targetId);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  }

  console.log("✅ main.js loaded successfully");
});
