/* =================================================
   GODZYA GROUP
   JAVASCRIPT FOUNDATION
================================================== */


/* =================================================
   01 — CONFIGURATION
================================================== */

const GODZYA_CONFIG = {

  whatsapp:
    "27814905793",

  defaultLanguage:
    "EN",

  languages: [
    "EN",
    "FR",
    "ES",
    "PT",
    "DE"
  ]

};

/* =================================================
   02 — MOBILE NAVIGATION
================================================== */

const menuToggle =
  document.querySelector(".menu-toggle");

const navLinks =
  document.querySelector(".nav-links");


function closeMobileMenu() {

  if (!navLinks || !menuToggle) {
    return;
  }

  navLinks.classList.remove("open");

  menuToggle.classList.remove("active");

  menuToggle.setAttribute(
    "aria-expanded",
    "false"
  );

}


function toggleMobileMenu() {

  if (!navLinks || !menuToggle) {
    return;
  }

  const isOpen =
    navLinks.classList.toggle("open");

  menuToggle.classList.toggle(
    "active",
    isOpen
  );

  menuToggle.setAttribute(
    "aria-expanded",
    String(isOpen)
  );

}


if (menuToggle) {

  menuToggle.addEventListener(
    "click",
    toggleMobileMenu
  );

}


if (navLinks) {

  navLinks
    .querySelectorAll("a")
    .forEach(link => {

      link.addEventListener(
        "click",
        closeMobileMenu
      );

    });

}

/* =================================================
   03 — LANGUAGE SELECTOR
================================================== */

const languageButton =
  document.querySelector(".language-button");

let currentLanguage =
  GODZYA_CONFIG.defaultLanguage;


function changeLanguage() {

  const languages =
    GODZYA_CONFIG.languages;

  const currentIndex =
    languages.indexOf(currentLanguage);

  const nextIndex =
    (currentIndex + 1) % languages.length;

  currentLanguage =
    languages[nextIndex];

  if (languageButton) {

    languageButton.textContent =
      currentLanguage;

  }

  document.documentElement.lang =
    currentLanguage.toLowerCase();

}


if (languageButton) {

  languageButton.addEventListener(
    "click",
    changeLanguage
  );

}


