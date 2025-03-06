'use strict';

/* Menu Buttons */
// Shared settings

/* Menu Open */

const menuOpen = document.getElementById("menu-open");
const menuContainer = document.getElementById("menu-list-container");
const body = document.querySelector("body");

menuOpen.addEventListener("click", function () {

  if (menuContainer.classList == "menu-list-container") {
    menuContainer.classList.add("open");
    body.style.overflowY = "hidden";
  }
});

/* Menu Close */

menuContainer.addEventListener("click", function () {

  if (menuContainer.classList.contains("open")) {
    menuContainer.classList.remove("open");
    body.style.overflowY = "auto";
  }
});
