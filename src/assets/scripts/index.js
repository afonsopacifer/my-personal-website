/* jshint esversion: 6 */

"use strict";

(() => {

  const btnOpen = document.getElementById("btnOpen");
  const menu = document.getElementById("menu");

  let toggleMenu = () => {
    if(menu.style.display === "none") {
      menu.style.display = "block";
    } else {
      menu.style.display = "none";
    }
  };

  btnOpen.addEventListener("click",toggleMenu);

  const mediaQuery = window.matchMedia("(min-width: 888px)");

  if (mediaQuery.matches) {
    menu.style.display = "block";
  } else {
    menu.style.display = "none";
  }

  mediaQuery.addListener((changed) => {
    if(changed.matches) {
      menu.style.display = "block";
    } else {
      menu.style.display = "none";
    }
  });

})();
