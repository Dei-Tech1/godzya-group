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
   GODZYA — TRANSLATION DICTIONARY
================================================== */

const GODZYA_TRANSLATIONS = {

  en: {
    navHome: "Home",
    navExpertise: "Our Expertise",
    navWork: "Our Work",
    navContact: "Let's Connect",
heroSloganStart: "We Build. You",
heroSloganEnd: "Grow.",
heroDescription: "GODZYA GROUP helps businesses turn ideas, data and technology into practical solutions that create real progress.",
heroExplore: "Explore Our Expertise",
heroConnect: "Let's Connect",
visionLabel: "OUR VISION",
visionTitleStart: "Technology with",
visionTitleEnd: "purpose."
  },

  fr: {
    navHome: "Accueil",
    navExpertise: "Nos Expertises",
    navWork: "Nos Réalisations",
    navContact: "Contactez-nous",
heroSloganStart: "Nous construisons. Vous",
heroSloganEnd: "grandissez.",
heroDescription: "GODZYA GROUP aide les entreprises à transformer leurs idées, leurs données et la technologie en solutions concrètes qui favorisent leur développement.",
heroExplore: "Découvrez nos expertises",
heroConnect: "Contactez-nous",
visionLabel: "NOTRE VISION",
visionTitleStart: "La technologie au service",
visionTitleEnd: "de vos ambitions."
  }

};

/* =================================================
   GODZYA — APPLY TRANSLATIONS
================================================== */

function applyLanguage(language) {

  const translations =
    GODZYA_TRANSLATIONS[language] ||
    GODZYA_TRANSLATIONS.en;

  document.querySelectorAll("[data-i18n]").forEach(element => {

    const key = element.dataset.i18n;

    if (translations[key]) {
      element.textContent = translations[key];
    }

  });

}
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

// Form submissions are handled by Formspree.
// The form sends data using its HTML action and POST method.
// No JavaScript interception is required.

/* =================================================
   06 — INITIALIZATION
================================================== */

function initializeGodzya() {

  // Retrieve the visitor's saved language
  const savedLanguage =
    localStorage.getItem("godzyaLanguage") || "en";

  // Check that the language is supported
  const supportedLanguages = [
    "en", "fr", "es", "pt", "de"
  ];

  const activeLanguage =
    supportedLanguages.includes(savedLanguage)
      ? savedLanguage
      : "en";

  // Update the language button
  if (languageButton) {
    languageButton.textContent =
      activeLanguage.toUpperCase();
  }

  // Set the document language
document.documentElement.lang = activeLanguage;

// Apply the saved language to this page
applyLanguage(activeLanguage);

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

    // Remember the selected language
    localStorage.setItem("godzyaLanguage", language);

    // Update the language button
    langButton.textContent = language.toUpperCase();

    // Update the document language
    document.documentElement.lang = language;

    // Translate the page content
    applyLanguage(language);

    // Close the dropdown
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
