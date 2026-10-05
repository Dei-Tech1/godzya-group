/* =====================================================
   GODZYA GROUP
   INTERACTION SYSTEM
   JS BLOCK 1 — FOUNDATION
===================================================== */

"use strict";


/* =====================================================
   DOM READY
===================================================== */

document.addEventListener("DOMContentLoaded", () => {

  console.log("GODZYA GROUP website loaded.");

});
/* =====================================================
   MOBILE NAVIGATION
===================================================== */

document.addEventListener("DOMContentLoaded", () => {

  const menuToggle =
    document.querySelector(".menu-toggle");

  const mainNav =
    document.querySelector(".main-nav");


  if (!menuToggle || !mainNav) {

    return;

  }


  menuToggle.addEventListener("click", () => {

    const isOpen =
      menuToggle.classList.toggle("active");

    mainNav.classList.toggle("active");

    menuToggle.setAttribute(
      "aria-expanded",
      isOpen
    );

  });


  /* ================================================
     CLOSE MENU AFTER NAVIGATION
  ================================================ */

  const navLinks =
    mainNav.querySelectorAll("a");


  navLinks.forEach((link) => {

    link.addEventListener("click", () => {

      menuToggle.classList.remove("active");

      mainNav.classList.remove("active");

      menuToggle.setAttribute(
        "aria-expanded",
        "false"
      );

    });

  });

});

