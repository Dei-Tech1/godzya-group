/* =====================================================
   GODZYA GROUP
   INTERACTION & MOTION SYSTEM
===================================================== */


/* =====================================================
   01. WAIT FOR DOCUMENT
===================================================== */

document.addEventListener("DOMContentLoaded", () => {


  /* ===================================================
     02. MOBILE NAVIGATION
  =================================================== */

  const menuToggle =
    document.querySelector(".menu-toggle");

  const mainNav =
    document.querySelector(".main-nav");


  if (menuToggle && mainNav) {

    menuToggle.addEventListener("click", () => {

      const isOpen =
        mainNav.classList.toggle("active");


      menuToggle.setAttribute(
        "aria-expanded",
        isOpen
      );

    });


    /* Close menu after selecting a link */

    const navLinks =
      mainNav.querySelectorAll("a");


    navLinks.forEach((link) => {

      link.addEventListener("click", () => {

        mainNav.classList.remove("active");

        menuToggle.setAttribute(
          "aria-expanded",
          "false"
        );

      });

    });

  }


  /* ===================================================
     03. SCROLL REVEAL
  =================================================== */

  const revealElements =
    document.querySelectorAll(
      ".service-card, .audience-card, .process-step, .section-heading, .about-grid, .contact-content"
    );


  revealElements.forEach((element) => {

    element.classList.add("reveal");

  });


  const revealObserver =
    new IntersectionObserver(
      (entries, observer) => {

        entries.forEach((entry) => {

          if (!entry.isIntersecting) {
            return;
          }


          entry.target.classList.add("visible");

          observer.unobserve(entry.target);

        });

      },
      {
        threshold: 0.12
      }
    );


  revealElements.forEach((element) => {

    revealObserver.observe(element);

  });


  /* ===================================================
     04. HEADER SCROLL EFFECT
  =================================================== */

  const header =
    document.querySelector(".site-header");


  if (header) {

    const updateHeader =
      () => {

        if (window.scrollY > 40) {

          header.style.background =
            "rgba(3, 8, 15, .92)";

          header.style.borderBottomColor =
            "rgba(70, 217, 255, .12)";

        } else {

          header.style.background =
            "rgba(5, 11, 20, .72)";

          header.style.borderBottomColor =
            "rgba(255,255,255,.05)";

        }

      };


    window.addEventListener(
      "scroll",
      updateHeader,
      { passive: true }
    );


    updateHeader();

  }


  /* ===================================================
     05. SUBTLE HERO PARALLAX
  =================================================== */

  const hero =
    document.querySelector(".hero");

  const heroContent =
    document.querySelector(".hero-content");


  const reducedMotion =
    window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;


  if (
    hero &&
    heroContent &&
    !reducedMotion
  ) {

    window.addEventListener(
      "mousemove",
      (event) => {

        const x =
          (event.clientX /
            window.innerWidth -
            0.5) * 8;


        const y =
          (event.clientY /
            window.innerHeight -
            0.5) * 6;


        heroContent.style.transform =
          `translate(${x}px, ${y}px)`;

      },
      { passive: true }
    );

  }


  /* ===================================================
     06. BUTTON MAGNETIC FEEL
  =================================================== */

  if (!reducedMotion) {

    const buttons =
      document.querySelectorAll(".btn");


    buttons.forEach((button) => {

      button.addEventListener(
        "mousemove",
        (event) => {

          const rect =
            button.getBoundingClientRect();


          const x =
            event.clientX -
            rect.left -
            rect.width / 2;


          const y =
            event.clientY -
            rect.top -
            rect.height / 2;


          button.style.transform =
            `translate(${x * 0.08}px, ${y * 0.08}px)`;

        }
      );


      button.addEventListener(
        "mouseleave",
        () => {

          button.style.transform =
            "";

        }
      );

    });

  }


  /* ===================================================
     07. CURRENT YEAR
  =================================================== */

  const year =
    document.querySelector(".copyright");


  if (year) {

    year.innerHTML =
      year.innerHTML.replace(
        "2026",
        new Date().getFullYear()
      );

  }


});
