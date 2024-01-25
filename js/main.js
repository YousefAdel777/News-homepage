let menuIcon = document.querySelector(".menu-icon");
let closeMenu = document.querySelector(".close-menu");
let overlay = document.querySelector(".overlay");
let menu = document.querySelector("header .container nav ul");

menuIcon.addEventListener("click", () => {
    overlay.classList.add("d-block");
    menu.style.display = "flex";
    closeMenu.classList.add("d-block");
});

closeMenu.addEventListener("click", () => {
    overlay.classList.remove("d-block");
    menu.style = "";
    closeMenu.classList.remove("d-block");
});