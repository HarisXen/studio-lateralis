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

// Highlight active link in navbar
document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll("nav a");
  const currentPath = window.location.pathname.replace(/\/$/, ""); // strip trailing slash

  links.forEach(link => {
    let linkPath = link.getAttribute("href").replace(/\/$/, "");
    if (currentPath.endsWith(linkPath)) {
      link.classList.add("active");
    }
  });

  // Make logo clickable → back to home
  const logo = document.querySelector(".logo-container");
  if (logo) {
    logo.style.cursor = "pointer";
    logo.addEventListener("click", () => {
      window.location.href = "./"; // go to homepage
    });
  }
});
