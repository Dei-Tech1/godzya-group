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

// Language selection is handled by
// GODZYA LANGUAGE DROPDOWN below.

const languageButton =
  document.querySelector(".language-button");

/* =================================================
   04 — SCROLL REVEAL
================================================== */

const revealElements =
  document.querySelectorAll(
    ".expertise-card, .work-card, .why-card, .leader-card"
  );


const revealObserver =
  new IntersectionObserver(

    entries => {

      entries.forEach(entry => {

        if (entry.isIntersecting) {

          entry.target.classList.add(
            "revealed"
          );

          revealObserver.unobserve(
            entry.target
          );

        }

      });

    },

    {
      threshold: 0.15
    }

  );


revealElements.forEach(element => {

  element.classList.add(
    "reveal-item"
  );

  revealObserver.observe(
    element
  );

});

/* =================================================
   05 — CONTACT FORM
================================================== */

const contactForm =
  document.getElementById("contactForm");

const formStatus =
  document.querySelector(".form-status");


if (contactForm) {

  contactForm.addEventListener(
    "submit",
    function (event) {

      event.preventDefault();

      if (formStatus) {

        formStatus.textContent =
          "Thank you. Your message is ready to be submitted.";

      }

    }
  );

     }

/* =================================================
   06 — INITIALIZATION
================================================== */

function initializeGodzya() {

  document.documentElement.lang =
    GODZYA_CONFIG.defaultLanguage.toLowerCase();

  if (languageButton) {

    languageButton.textContent =
      GODZYA_CONFIG.defaultLanguage;

  }

}


document.addEventListener(
  "DOMContentLoaded",
  initializeGodzya
);

/* ==========================================
   GODZYA LANGUAGE DROPDOWN
========================================== */

const langButton = document.querySelector(".language-button");
const langMenu = document.querySelector(".language-menu");

if (langButton && langMenu) {

  langButton.addEventListener("click", () => {
    const isOpen = !langMenu.hidden;

    langMenu.hidden = isOpen;
    langButton.setAttribute("aria-expanded", String(!isOpen));
  });

  langMenu.querySelectorAll("[data-lang]").forEach(option => {
    option.addEventListener("click", () => {
      const language = option.dataset.lang;

      langButton.textContent = language.toUpperCase();
      langMenu.hidden = true;
      langButton.setAttribute("aria-expanded", "false");
    });
  });

  document.addEventListener("click", event => {
    if (!event.target.closest(".language-selector")) {
      langMenu.hidden = true;
      langButton.setAttribute("aria-expanded", "false");
    }
  });
}
