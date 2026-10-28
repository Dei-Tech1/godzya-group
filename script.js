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
visionTitleEnd: "purpose.",
visionTextOne: "At GODZYA GROUP, we believe technology should create clarity, opportunity and progress.",
visionTextTwo: "We combine artificial intelligence, data, business thinking and technology to build practical solutions for a connected world.",
visionCommitment: "We don't sell what we aren't ready to deliver.",

expertiseLabel: "WHAT WE DO",
expertiseTitleStart: "Expertise built for",
expertiseTitleEnd: "real progress.",
expertiseIntro: "Practical solutions across technology, data, business and professional support.",

serviceData: "Data, Excel & Analytics",
serviceBusiness: "Business Analysis",
serviceProject: "Project Management",
serviceTechnology: "Technology & Web Solutions",
serviceLanguage: "Global Language Solutions",
serviceAdmin: "Virtual & Administrative Support",

serviceDataText: "Data organization, Excel solutions, reporting, dashboards and meaningful business insights.",
serviceBusinessText: "Turning information into structured analysis that supports better business decisions.",
serviceProjectText: "Planning, coordination, documentation, progress tracking and project delivery support.",
serviceTechnologyText: "Professional websites, digital solutions, updates and technology support.",
serviceLanguageText: "Professional translation, document services and cross-border communication support, beginning with French and English.",
serviceAdminText: "Professional document preparation, organization, research and administrative support.",

portfolioLabel: "GODZYA GROUP · SELECTED PROJECTS",
portfolioTitleStart: "From Vision",
portfolioTitleEnd: "to Value.",
portfolioDescription: "Discover how GODZYA GROUP brings strategy, technology and execution together to create purposeful digital solutions.",
portfolioButton: "Explore Our Portfolio",

whyLabel: "WHY GODZYA",
whyTitleStart: "Built on clarity.",
whyTitleEnd: "Driven by progress.",

whyCardOneTitle: "Practical Thinking",
whyCardOneText: "We focus on solutions that make sense in the real world — not technology for technology's sake.",

whyCardTwoTitle: "Connected Expertise",
whyCardTwoText: "AI, data, business and technology work together to create stronger solutions.",

whyCardThreeTitle: "Built to Grow",
whyCardThreeText: "We build with the future in mind, creating foundations that can evolve as your needs grow.",

whyCardFourTitle: "Honest Delivery",
whyCardFourText: "We don't sell what we aren't ready to deliver. Trust starts with knowing what we can do.",

leadershipLabel: "THE PEOPLE BEHIND GODZYA",
leadershipTitleStart: "Built by people.",
leadershipTitleEnd: "Driven by purpose.",
leadershipIntro: "A leadership team focused on building meaningful solutions and creating lasting client relationships.",

leaderDeiRole: "FOUNDER & CEO",
leaderDeiDescription: "Technology, business and digital solutions focused on turning ideas into practical results.",

leaderDesirRole: "CO-FOUNDER & OPERATIONS DIRECTOR",
leaderDesirDescription: "Finance, quotations, client communication, contracts, feedback and operational coordination.",
     
footerSlogan: "We Build. You Grow.",
footerServices: "AI • DATA • BUSINESS • TECHNOLOGY",
footerCopyright: "© 2026 GODZYA GROUP. All rights reserved.",

expHeroLabel: "GODZYA GROUP / OUR EXPERTISE",
expHeroTitleStart: "Solutions Built for",
expHeroTitleEnd: "Real Progress.",
expHeroDescription: "From data and digital solutions to business operations and project management, we help organisations turn complex challenges into practical results.",
expHeroButton: "Explore Our Services →",

expServicesLabel: "WHAT WE DELIVER",
expServicesTitleStart: "Our Core",
expServicesTitleEnd: "Expertise.",
expServicesIntro: "Practical services designed to help businesses work smarter, stay organised and achieve meaningful progress.",

expCtaLabel: "LET'S BUILD SOMETHING MEANINGFUL",
expCtaTitleStart: "Your Next Step Starts",
expCtaTitleEnd: "Here.",
expCtaDescription: "Have a project, a business challenge, or a task that needs professional support? Tell us what you need.",
expCtaButton: "Start a Conversation →"
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
visionTitleEnd: "de vos ambitions.",
visionTextOne: "Chez GODZYA GROUP, nous croyons que la technologie doit apporter de la clarté, créer des opportunités et favoriser le progrès.",
visionTextTwo: "Nous associons l'intelligence artificielle, les données, l'analyse métier et la technologie pour créer des solutions concrètes dans un monde connecté.",
visionCommitment: "Nous ne vendons pas ce que nous ne sommes pas prêts à réaliser.",

expertiseLabel: "CE QUE NOUS FAISONS",
expertiseTitleStart: "Des expertises au service",
expertiseTitleEnd: "de votre réussite.",
expertiseIntro: "Des solutions concrètes en technologie, données, gestion et accompagnement professionnel.",

serviceData: "Données, Excel et Analyse",
serviceBusiness: "Analyse Métier",
serviceProject: "Gestion de Projet",
serviceTechnology: "Technologie et Solutions Web",
serviceLanguage: "Solutions Linguistiques Internationales",
serviceAdmin: "Assistance Virtuelle et Administrative",

serviceDataText: "Organisation des données, solutions Excel, rapports, tableaux de bord et analyses utiles à la prise de décision.",
serviceBusinessText: "Transformation des informations en analyses structurées pour améliorer les décisions des entreprises.",
serviceProjectText: "Planification, coordination, documentation, suivi de l'avancement et accompagnement dans la réalisation des projets.",
serviceTechnologyText: "Création de sites web professionnels, solutions numériques, mises à jour et assistance technologique.",
serviceLanguageText: "Traduction professionnelle, services documentaires et accompagnement de la communication internationale, notamment en français et en anglais.",
serviceAdminText: "Préparation de documents professionnels, organisation, recherche et assistance administrative.",

portfolioLabel: "GODZYA GROUP · PROJETS SÉLECTIONNÉS",
portfolioTitleStart: "De la vision",
portfolioTitleEnd: "à la valeur.",
portfolioDescription: "Découvrez comment GODZYA GROUP associe stratégie, technologie et réalisation pour créer des solutions numériques utiles et adaptées à vos besoins.",
portfolioButton: "Découvrez nos réalisations",

whyLabel: "POURQUOI GODZYA",
whyTitleStart: "Fondé sur la clarté.",
whyTitleEnd: "Guidé par le progrès.",

whyCardOneTitle: "Une approche pragmatique",
whyCardOneText: "Nous privilégions des solutions adaptées aux besoins réels, plutôt que la technologie pour elle-même.",

whyCardTwoTitle: "Des expertises complémentaires",
whyCardTwoText: "L'intelligence artificielle, les données, l'analyse métier et la technologie se combinent pour créer des solutions plus performantes.",

whyCardThreeTitle: "Conçu pour évoluer",
whyCardThreeText: "Nous construisons des bases solides, capables de s'adapter à l'évolution de vos besoins.",

whyCardFourTitle: "Des engagements honnêtes",
whyCardFourText: "Nous ne vendons pas ce que nous ne sommes pas prêts à réaliser. La confiance commence par la transparence sur nos capacités.",

leadershipLabel: "LES PERSONNES DERRIÈRE GODZYA",
leadershipTitleStart: "Une équipe engagée.",
leadershipTitleEnd: "Une vision commune.",
leadershipIntro: "Une équipe dirigeante engagée dans la création de solutions utiles et de relations durables avec ses clients.",

leaderDeiRole: "FONDATEUR ET DIRECTEUR GÉNÉRAL",
leaderDeiDescription: "Technologie, stratégie d'entreprise et solutions numériques pour transformer les idées en résultats concrets.",

leaderDesirRole: "COFONDATEUR ET DIRECTEUR DES OPÉRATIONS",
leaderDesirDescription: "Finance, devis, communication client, contrats, retours clients et coordination opérationnelle.",

footerSlogan: "Nous construisons. Vous grandissez.",
footerServices: "IA • DONNÉES • BUSINESS • TECHNOLOGIE",
footerCopyright: "© 2026 GODZYA GROUP. Tous droits réservés.",

expHeroLabel: "GODZYA GROUP / NOS EXPERTISES",
expHeroTitleStart: "Des solutions conçues pour",
expHeroTitleEnd: "un progrès réel.",
expHeroDescription: "Des données aux solutions numériques, en passant par les opérations et la gestion de projet, nous aidons les organisations à transformer leurs défis en résultats concrets.",
expHeroButton: "Découvrez nos services →",

expServicesLabel: "CE QUE NOUS PROPOSONS",
expServicesTitleStart: "Nos principales",
expServicesTitleEnd: "expertises.",
expServicesIntro: "Des services pratiques pour aider les entreprises à travailler plus efficacement, à mieux s'organiser et à progresser durablement.",

expCtaLabel: "CONSTRUISONS QUELQUE CHOSE D'UTILE",
expCtaTitleStart: "Votre prochaine étape",
expCtaTitleEnd: "commence ici.",
expCtaDescription: "Vous avez un projet, un défi professionnel ou une tâche nécessitant un accompagnement ? Parlez-nous de vos besoins.",
expCtaButton: "Contactez-nous →"
  }
};

 /* =====================================================
   GODZYA GROUP — EXPERTISE SERVICE TRANSLATIONS
   ENGLISH + FRENCH
===================================================== */

Object.assign(GODZYA_TRANSLATIONS.en, {

  /* DATA, EXCEL & ANALYTICS */

  expDataTitle: "Data, Excel & Analytics",
  expDataDesc: "We help businesses organise, process and understand their data through accurate data entry, structured spreadsheets and practical reporting.",
  expData1: "Data entry and data cleaning",
  expData2: "Excel formulas and spreadsheets",
  expData3: "Data formatting and organisation",
  expData4: "Reports, charts and dashboards",
  expData5: "PDF to Excel or Word conversion",
  expData6: "Data analysis and business insights",

  /* BUSINESS ANALYSIS */

  expBusinessTitle: "Business Analysis",
  expBusinessDesc: "We help businesses understand their processes, identify opportunities for improvement and turn information into practical recommendations.",
  expBusiness1: "Business requirements gathering",
  expBusiness2: "Process mapping and documentation",
  expBusiness3: "Workflow and gap analysis",
  expBusiness4: "Business reports and presentations",
  expBusiness5: "Requirements and specification documents",
  expBusiness6: "Operational improvement recommendations",

  /* PROJECT MANAGEMENT */

  expProjectTitle: "Project Management",
  expProjectDesc: "We support businesses in planning, organising and coordinating projects from initiation through completion, with clear communication, structured documentation and progress monitoring.",
  expProject1: "Project planning and scheduling",
  expProject2: "Task coordination and tracking",
  expProject3: "Project documentation and reporting",
  expProject4: "Milestone and deadline monitoring",
  expProject5: "Stakeholder communication support",
  expProject6: "Risk and issue tracking",
  expProject7: "Project closure and handover support",

  /* TECHNOLOGY & WEB SOLUTIONS */

  expWebTitle: "Technology & Web Solutions",
  expWebDesc: "We help businesses establish and improve their digital presence through professional, responsive websites and practical technology solutions tailored to their needs.",
  expWeb1: "Business and corporate websites",
  expWeb2: "Landing pages and portfolio websites",
  expWeb3: "Mobile-responsive website design",
  expWeb4: "Website updates and maintenance",
  expWeb5: "Domain and hosting setup assistance",
  expWeb6: "Website performance improvements",
  expWeb7: "Website redesign and modernisation",

  /* FRENCH LANGUAGE SERVICES */

  expLanguageTitle: "French Language & Document Services",
  expLanguageDesc: "We help businesses and individuals communicate professionally in French and English through accurate translation, document preparation and language support.",
  expLanguage1: "French to English document translation",
  expLanguage2: "English to French document translation",
  expLanguage3: "French and English proofreading",
  expLanguage4: "Business correspondence and emails",
  expLanguage5: "Document editing and formatting",
  expLanguage6: "Customer service document support",
  expLanguage7: "Bilingual business communication",

  /* MICROSOFT OFFICE */

  expOfficeTitle: "Microsoft Office & Documents",
  expOfficeDesc: "We help businesses and individuals create, organise and improve professional documents, spreadsheets and presentations for everyday business needs.",
  expOffice1: "Microsoft Word document creation",
  expOffice2: "Professional document formatting",
  expOffice3: "Excel spreadsheet creation and editing",
  expOffice4: "PowerPoint presentation design",
  expOffice5: "PDF conversion and document editing",
  expOffice6: "Reports, templates and business forms",
  expOffice7: "Administrative document preparation"

});


Object.assign(GODZYA_TRANSLATIONS.fr, {

  /* DONNÉES, EXCEL ET ANALYSE */

  expDataTitle: "Données, Excel et Analyse",
  expDataDesc: "Nous aidons les entreprises à organiser, traiter et comprendre leurs données grâce à une saisie précise, des feuilles de calcul structurées et des rapports pratiques.",
  expData1: "Saisie et nettoyage des données",
  expData2: "Formules Excel et feuilles de calcul",
  expData3: "Mise en forme et organisation des données",
  expData4: "Rapports, graphiques et tableaux de bord",
  expData5: "Conversion PDF vers Excel ou Word",
  expData6: "Analyse des données et informations commerciales",

  /* ANALYSE MÉTIER */

  expBusinessTitle: "Analyse Métier",
  expBusinessDesc: "Nous aidons les entreprises à comprendre leurs processus, à identifier les possibilités d'amélioration et à transformer les informations en recommandations concrètes.",
  expBusiness1: "Collecte des besoins métier",
  expBusiness2: "Cartographie et documentation des processus",
  expBusiness3: "Analyse des flux de travail et des écarts",
  expBusiness4: "Rapports et présentations professionnels",
  expBusiness5: "Documents de besoins et de spécifications",
  expBusiness6: "Recommandations d'amélioration opérationnelle",

  /* GESTION DE PROJET */

  expProjectTitle: "Gestion de Projet",
  expProjectDesc: "Nous accompagnons les entreprises dans la planification, l'organisation et la coordination de leurs projets, du lancement à la clôture, avec une communication claire, une documentation structurée et un suivi régulier.",
  expProject1: "Planification et programmation des projets",
  expProject2: "Coordination et suivi des tâches",
  expProject3: "Documentation et rapports de projet",
  expProject4: "Suivi des étapes clés et des échéances",
  expProject5: "Communication avec les parties prenantes",
  expProject6: "Suivi des risques et des problèmes",
  expProject7: "Clôture des projets et transfert des livrables",

  /* TECHNOLOGIE ET WEB */

  expWebTitle: "Technologie et Solutions Web",
  expWebDesc: "Nous aidons les entreprises à développer et améliorer leur présence numérique grâce à des sites web professionnels, adaptés aux différents écrans, et à des solutions technologiques répondant à leurs besoins.",
  expWeb1: "Sites web professionnels et d'entreprise",
  expWeb2: "Pages de destination et sites portfolio",
  expWeb3: "Conception de sites adaptés aux mobiles",
  expWeb4: "Mises à jour et maintenance des sites web",
  expWeb5: "Assistance pour les domaines et l'hébergement",
  expWeb6: "Amélioration des performances des sites web",
  expWeb7: "Refonte et modernisation des sites web",

  /* SERVICES LINGUISTIQUES */

  expLanguageTitle: "Services Linguistiques et Documentaires en Français",
  expLanguageDesc: "Nous aidons les entreprises et les particuliers à communiquer professionnellement en français et en anglais grâce à des traductions précises, à la préparation de documents et à un accompagnement linguistique.",
  expLanguage1: "Traduction de documents du français vers l'anglais",
  expLanguage2: "Traduction de documents de l'anglais vers le français",
  expLanguage3: "Relecture et correction en français et en anglais",
  expLanguage4: "Correspondance professionnelle et courriels",
  expLanguage5: "Modification et mise en forme de documents",
  expLanguage6: "Assistance documentaire pour le service client",
  expLanguage7: "Communication professionnelle bilingue",

  /* MICROSOFT OFFICE */

  expOfficeTitle: "Microsoft Office et Documents",
  expOfficeDesc: "Nous aidons les entreprises et les particuliers à créer, organiser et améliorer leurs documents professionnels, feuilles de calcul et présentations pour leurs besoins quotidiens.",
  expOffice1: "Création de documents Microsoft Word",
  expOffice2: "Mise en forme professionnelle de documents",
  expOffice3: "Création et modification de feuilles Excel",
  expOffice4: "Conception de présentations PowerPoint",
  expOffice5: "Conversion PDF et modification de documents",
  expOffice6: "Rapports, modèles et formulaires professionnels",
  expOffice7: "Préparation de documents administratifs"
   
});

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

/* =====================================================
   GODZYA GROUP — PORTFOLIO TRANSLATIONS
   ENGLISH + FRENCH
===================================================== */

Object.assign(GODZYA_TRANSLATIONS.en, {

  portfolioIntro:
    "Discover the brands and digital experiences we're building through creativity, business thinking and technology.",

  portfolioGodzyaCategory:
    "CORPORATE TECHNOLOGY",

  portfolioGodzyaDescription:
    "Our corporate platform presenting our expertise, vision and digital solutions.",

  portfolioVisit:
    "Visit Website →",

  portfolioNayaCategory:
    "BEAUTY & DIGITAL EXPERIENCE",

  portfolioNayaDescription:
    "An elegant beauty and self-care digital experience focused on brand storytelling.",

  portfolioConstruction:
    "Under Construction",

  portfolioInesCategory:
    "EVENTS & DECORATION",

  portfolioInesDescription:
    "A premium event-planning and decoration website celebrating beautiful occasions and personalized experiences.",

  portfolioFutureCategory:
    "INNOVATION & GROWTH",

  portfolioFutureTitle:
    "Future Projects",

  portfolioFutureDescription:
    "New collaborations and digital solutions are on the way as GODZYA GROUP grows.",

  portfolioComingSoon:
    "Coming Soon"

});


Object.assign(GODZYA_TRANSLATIONS.fr, {

  portfolioIntro:
    "Découvrez les marques et les expériences numériques que nous développons grâce à la créativité, à la stratégie d'entreprise et à la technologie.",

  portfolioGodzyaCategory:
    "TECHNOLOGIE D'ENTREPRISE",

  portfolioGodzyaDescription:
    "Notre plateforme professionnelle présentant nos expertises, notre vision et nos solutions numériques.",

  portfolioVisit:
    "Visiter le site →",

  portfolioNayaCategory:
    "BEAUTÉ & EXPÉRIENCE NUMÉRIQUE",

  portfolioNayaDescription:
    "Une expérience numérique élégante dédiée à la beauté et au bien-être, mettant en valeur l'identité et l'histoire de la marque.",

  portfolioConstruction:
    "En cours de réalisation",

  portfolioInesCategory:
    "ÉVÉNEMENTIEL & DÉCORATION",

  portfolioInesDescription:
    "Un site haut de gamme dédié à l'organisation et à la décoration d'événements, célébrant les belles occasions et les expériences personnalisées.",

  portfolioFutureCategory:
    "INNOVATION & CROISSANCE",

  portfolioFutureTitle:
    "Projets à venir",

  portfolioFutureDescription:
    "De nouvelles collaborations et solutions numériques verront bientôt le jour au rythme du développement de GODZYA GROUP.",

  portfolioComingSoon:
    "Prochainement"

});


/* =====================================================
   INITIALIZE GODZYA
===================================================== */

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
