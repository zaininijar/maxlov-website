document.addEventListener("DOMContentLoaded", function () {
  const burger = document.querySelectorAll(".navbar-burger");
  const menu = document.querySelectorAll(".navbar-menu");

  if (burger.length && menu.length) {
    for (var i = 0; i < burger.length; i++) {
      burger[i].addEventListener("click", function () {
        for (var j = 0; j < menu.length; j++) {
          menu[j].classList.toggle("hidden");
        }
      });
    }
  }

  const close = document.querySelectorAll(".navbar-close");
  const backdrop = document.querySelectorAll(".navbar-backdrop");

  if (close.length) {
    for (var i = 0; i < close.length; i++) {
      close[i].addEventListener("click", function () {
        for (var j = 0; j < menu.length; j++) {
          menu[j].classList.toggle("hidden");
        }
      });
    }
  }

  if (backdrop.length) {
    for (var i = 0; i < backdrop.length; i++) {
      backdrop[i].addEventListener("click", function () {
        for (var j = 0; j < menu.length; j++) {
          menu[j].classList.toggle("hidden");
        }
      });
    }
  }

  var currentURL = window.location.href;
  var berandaMenuItem = document.querySelector("#nav-link-beranda");
  var productMenuItem = document.querySelector("#nav-link-produk");
  var berandaMenuItemM = document.querySelector("#nav-link-beranda-m");
  var productMenuItemM = document.querySelector("#nav-link-produk-m");

  if (currentURL.indexOf("#product") !== -1) {
    berandaMenuItemM.classList.remove("font-bold");
    productMenuItemM.classList.add("font-bold");
    berandaMenuItem.classList.remove("font-bold");
    productMenuItem.classList.add("font-bold");
  }

  productMenuItem.addEventListener("click", () => {
    berandaMenuItemM.classList.remove("font-bold");
    productMenuItemM.classList.add("font-bold");
    berandaMenuItem.classList.remove("font-bold");
    productMenuItem.classList.add("font-bold");
  });

  const showBenefitButtons = document.querySelectorAll("#show-benefit");
  showBenefitButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      var productBenefit = this.parentElement.nextElementSibling;

      if (productBenefit.style.display === "block") {
        productBenefit.style.display = "none";
      } else {
        productBenefit.style.display = "block";
      }
    });
  });
});
