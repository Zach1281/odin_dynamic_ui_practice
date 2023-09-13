function init() {
  dropDownMenu();
  hamburgerMenu();
  imageCarousel();
}

function dropDownMenu() {
  const dropBtn = document.querySelector(".dropbtn");
  dropBtn.addEventListener("click", () => {
    const menuElements = document.getElementById("myDropdown");
    if (menuElements.classList.contains("hidden")) {
      menuElements.classList.remove("hidden");
    } else {
      menuElements.classList.add("hidden");
    }
  });
}

function hamburgerMenu() {
  const burgerMenu = document.querySelector(".hamburger-menu");
  burgerMenu.addEventListener("click", () => {
    const menuElements = document.getElementById("myBurgerMenu");
    if (menuElements.classList.contains("hidden")) {
      menuElements.classList.remove("hidden");
    } else {
      menuElements.classList.add("hidden", "fullscreen-menu");
    }
  });
}

function imageCarousel() {
  const imgArray = document.querySelectorAll(".image");
  const leftBtn = document.getElementById("go-left");
  const rightBtn = document.getElementById("go-right");
  let counter = 0;
  leftBtn.addEventListener("click", () => {
    imgArray[counter].classList.add("hidden");
    counter--;
    if (counter < 0) {
      counter = 4;
    }
    imgArray[counter].classList.remove("hidden");
  });
  rightBtn.addEventListener("click", () => {
    imgArray[counter].classList.add("hidden");
    counter++;
    if (counter > 4) {
      counter = 0;
    }
    imgArray[counter].classList.remove("hidden");
  });
}

init();
