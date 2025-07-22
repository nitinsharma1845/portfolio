const toggles = document.querySelectorAll(".accordion-toggle");

toggles.forEach(toggle => {
  toggle.addEventListener("click", () => {
    const content = toggle.nextElementSibling;
    const icon = toggle.querySelector(".icon");

    content.classList.toggle("open");

    if (content.classList.contains("open")) {
      icon.textContent = "−";
    } else {
      icon.textContent = "+";
    }
  });
});
