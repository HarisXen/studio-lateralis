

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
