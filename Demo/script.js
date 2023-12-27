// Add animation on button click
document.querySelectorAll(".button").forEach((button) => {
  button.addEventListener("click", function () {
    this.classList.add("animated");
    setTimeout(() => {
      this.classList.remove("animated");
    }, 300);
  });
});
