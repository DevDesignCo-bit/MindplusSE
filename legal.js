(() => {
  'use strict';
  const params = new URLSearchParams(window.location.search);
  const from = params.get('from') === 'pin' ? 'pin' : 'entry';
  const language = params.get('lang') === 'en' ? 'en' : 'sv';
  document.querySelectorAll('[data-return]').forEach(link => {
    link.href = (from === 'pin' ? 'pin.html' : 'index.html') + '?lang=' + language;
    link.setAttribute('aria-label', 'Tillbaka till ' + (from === 'pin' ? 'PIN-sidan' : 'Mind+'));
  });
  document.querySelectorAll('[data-document]').forEach(link => {
    link.href = link.dataset.document + '?from=' + from + '&lang=' + language;
  });
})();
