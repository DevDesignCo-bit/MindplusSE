/* Local presentation flow. No SMS, PIN verification or billing request is sent. */
(() => {
  'use strict';
  const messages = {
    sv: {
      intro: 'Mind+ är en hjärnträningstjänst som utvecklar dina kognitiva förmågor.',
      mobileLabel: 'Ange ditt mobilnummer för att börja träna:',
      pinLabel: 'Ange PIN-koden:', continue: 'Fortsätt', confirm: 'Bekräfta',
      price: 'Aktivera för 200 SEK per månad',
      disclaimer: 'Du kan när som helst avsluta tjänsten genom att skicka STOP Mind+ till 72300. Träna din hjärna med hjälp av spel. Genom att fortsätta bekräftar du att du är minst 18 år. För mer information, kontakta oss via e-post: ',
      supportPhone: ' eller ring vår kundtjänst: ',
      provider: 'Denna tjänst tillhandahålls av Playwing LTD.',
      terms: 'Villkor & Betingelser', privacy: 'Integritetspolicy',
      preview: 'Förhandsvisning: PIN-verifiering är inte ansluten. Ingen prenumeration har aktiverats och ingen debitering har gjorts.',
      phoneAria: 'Svenskt mobilnummer, landskod +46',
      imageAlt: 'En man med en mobiltelefon omgiven av Memory, Focus, Logic, Problem-Solving och Processing Speed.',
      heroAria: 'Mind+ hjärnträning', legalAria: 'Juridisk information', homeAria: 'Mind+ – startsida'
    },
    en: {
      intro: 'Mind+ is a brain-training service designed to improve a wide range of cognitive skills.',
      mobileLabel: 'Enter your mobile number to start training:',
      pinLabel: 'Enter the PIN code:', continue: 'Continue', confirm: 'Confirm',
      price: 'Activate for 200 SEK per month',
      disclaimer: 'You can opt out at any time by sending STOP Mind+ to 72300. Train your cognitive skills through games. By continuing, you confirm that you are at least 18 years old. For more information, please email: ',
      supportPhone: ' or call our support team: ',
      provider: 'This service is provided by Playwing LTD.',
      terms: 'Terms & Conditions', privacy: 'Privacy Policy',
      preview: 'Preview: PIN verification is not connected. No subscription has been activated and no charge has been made.',
      phoneAria: 'Swedish mobile number, country code +46',
      imageAlt: 'A man using a mobile phone, surrounded by Memory, Focus, Logic, Problem-Solving and Processing Speed.',
      heroAria: 'Mind+ brain training', legalAria: 'Legal information', homeAria: 'Mind+ home'
    }
  };
  const page = document.body.dataset.page;
  const params = new URLSearchParams(window.location.search);
  let language = params.get('lang') === 'en' ? 'en' : 'sv';
  const status = document.getElementById('form-status');
  let statusKey = '';
  function showStatus(key, kind = 'error') {
    statusKey = key;
    status.textContent = messages[language][key];
    status.dataset.kind = kind;
    status.hidden = false;
  }
  function clearStatus() { statusKey = ''; status.hidden = true; }
  function setLanguage(next, updateAddress = true) {
    language = next;
    document.documentElement.lang = next;
    document.title = page === 'pin' ? (next === 'sv' ? 'Mind+ | PIN-kod' : 'Mind+ | PIN code') : (next === 'sv' ? 'Mind+ | Hjärnträning' : 'Mind+ | Brain training');
    document.querySelectorAll('[data-i18n]').forEach(el => { el.textContent = messages[next][el.dataset.i18n]; });
    document.querySelectorAll('[data-language]').forEach(el => el.setAttribute('aria-pressed', String(el.dataset.language === next)));
    const mobile = document.getElementById('mobile');
    if (mobile) mobile.setAttribute('aria-label', messages[next].phoneAria);
    document.querySelector('.hero-art').alt = messages[next].imageAlt;
    document.querySelector('.hero').setAttribute('aria-label', messages[next].heroAria);
    document.querySelector('.footer-links').setAttribute('aria-label', messages[next].legalAria);
    const brand = document.querySelector('.brand');
    brand.setAttribute('aria-label', messages[next].homeAria);
    brand.href = 'index.html?lang=' + next;
    document.querySelectorAll('[data-legal]').forEach(el => {
      el.href = el.dataset.legal + '?from=' + (page === 'pin' ? 'pin' : 'entry') + '&lang=' + next;
    });
    if (statusKey) status.textContent = messages[next][statusKey];
    if (updateAddress) {
      try { const url = new URL(window.location.href); url.searchParams.set('lang', next); window.history.replaceState(null, '', url); } catch { /* Some file:// environments restrict history. */ }
    }
  }
  document.querySelectorAll('[data-language]').forEach(button => button.addEventListener('click', () => setLanguage(button.dataset.language)));
  setLanguage(language, false);
  window.addEventListener('pageshow', () => setLanguage(language, false));
  const entryForm = document.getElementById('entry-form');
  if (entryForm) {
    const mobile = document.getElementById('mobile');
    mobile.addEventListener('input', () => { mobile.removeAttribute('aria-invalid'); clearStatus(); });
    entryForm.addEventListener('submit', event => {
      event.preventDefault();
      // Test flow: accept every value without checking country, format or length.
      // Never place the mobile number or PIN in URLs, analytics, or logs.
      window.location.assign('pin.html?lang=' + language);
    });
  }
  const pinForm = document.getElementById('pin-form');
  if (pinForm) {
    const pin = document.getElementById('pin');
    pin.addEventListener('input', () => { pin.removeAttribute('aria-invalid'); clearStatus(); });
    pinForm.addEventListener('submit', event => {
      event.preventDefault();
      // Test flow: accept any PIN value. No real subscription is activated.
      showStatus('preview', 'info');
    });
  }
})();
