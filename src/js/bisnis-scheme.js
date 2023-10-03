document.addEventListener("DOMContentLoaded", function () {
  const showButtons = document.querySelectorAll("#show");
  const closeButtons = document.querySelectorAll("#close");
  showButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      var image = this.nextElementSibling;

      if (image.style.display === "flex") {
        image.style.display = "none";
      } else {
        image.style.display = "flex";
      }
    });
  });

  closeButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      var image = this.parentElement;

      if (image.style.display === "flex") {
        image.style.display = "none";
      } else {
        image.style.display = "flex";
      }
    });
  });
});
