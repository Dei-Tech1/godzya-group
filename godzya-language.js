
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
  
