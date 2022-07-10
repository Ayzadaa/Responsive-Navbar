window.addEventListener("load", function () {
  const burgerMenu = document.querySelector(".burger-menu");

  const menu = document.querySelector(".menu");

  burgerMenu.addEventListener("click", () => {
    menu.classList.toggle("menu-active");
  });
});

// const menuItems = document.querySelectorAll(".menu-item");

// for (const i = 0; i < menuItems.length; i++) {
//   menuItems[i].addEventListener("click", function () {
//     const current = document.getElementsByClassName("active");
//     current[0].className = current[0].className.replace(" active", "");
//     this.className += "active";
//   });
// }
