
/* GODZYA GROUP — English / French language engine
   Development branch only.
   Not active until included in a page.
   Translations come from window.GODZYA_LANGUAGE_DATA.
*/
(function () {
  'use strict';

  const KEY = 'godzyaLanguage';
  const SUPPORTED = ['en', 'fr'];
  const DEFAULT = 'en';

  const normalize = value =>
    SUPPORTED.includes(String(value).toLowerCase())
      ? String(value).toLowerCase()
      : DEFAULT;

  function savedLanguage() {
    try {
      return normalize(localStorage.getItem(KEY));
    } catch (_) {
      return DEFAULT;
    }
  }

  function saveLanguage(language) {
    try {
      localStorage.setItem(KEY, language);
    } catch (_) {
      /* Storage may be unavailable */
    }
  }

  function translationsFor(language) {
    const data = window.GODZYA_LANGUAGE_DATA || {};
    return data[language] || {};
  }

  function translate(language) {
    const selected = translationsFor(language);
    const english = translationsFor(DEFAULT);

    document.querySelectorAll('[data-i18n]').forEach(element => {
      const key = element.getAttribute('data-i18n');

      const text =
        Object.prototype.hasOwnProperty.call(selected, key)
          ? selected[key]
          : english[key];

      if (typeof text === 'string') {
        element.textContent = text;
      }
    });

    document.documentElement.lang = language;

    document.querySelectorAll('.language-button').forEach(button => {
      button.textContent = language.toUpperCase();
    });

    document.dispatchEvent(
      new CustomEvent('godzya:languagechange', {
        detail: { language }
      })
    );
  }

  function setLanguage(language) {
    const next = normalize(language);

    saveLanguage(next);
    translate(next);

    document.querySelectorAll('.language-menu').forEach(menu => {
      menu.hidden = true;
    });

    document.querySelectorAll('.language-button').forEach(button => {
      button.setAttribute('aria-expanded', 'false');
    });
  }
  

  function init() {
    document.querySelectorAll('.language-selector').forEach(selector => {
      const button = selector.querySelector('.language-button');
      const menu = selector.querySelector('.language-menu');

      if (!button || !menu) return;

      menu.replaceChildren();

      [
        ['en', '🇬🇧 English'],
        ['fr', '🇫🇷 Français']
      ].forEach(([code, label]) => {
        const option = document.createElement('button');

        option.type = 'button';
        option.dataset.lang = code;
        option.textContent = label;

        option.addEventListener('click', () => {
          setLanguage(code);
        });

        menu.appendChild(option);
      });

      button.addEventListener('click', () => {
        menu.hidden = !menu.hidden;

        button.setAttribute(
          'aria-expanded',
          String(!menu.hidden)
        );
      });
    });

    document.addEventListener('click', event => {
      if (event.target.closest('.language-selector')) return;

      document.querySelectorAll('.language-menu').forEach(menu => {
        menu.hidden = true;
      });

      document.querySelectorAll('.language-button').forEach(button => {
        button.setAttribute('aria-expanded', 'false');
      });
    });

    document.addEventListener('keydown', event => {
      if (event.key !== 'Escape') return;

      document.querySelectorAll('.language-menu').forEach(menu => {
        menu.hidden = true;
      });

      document.querySelectorAll('.language-button').forEach(button => {
        button.setAttribute('aria-expanded', 'false');
      });
    });

    translate(savedLanguage());
  }

  window.GODZYA_LANGUAGE = {
    init,
    setLanguage,
    savedLanguage
  };

  // Do not auto-start until legacy language
  // listeners have been removed from all pages.
})();
         
