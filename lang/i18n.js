/* ============================================================
   SOLVEN4 — EN/AR language toggle engine.
   Loaded on every page (after the page's own scripts). Reads
   window.SOLVEN4_DICT (dictionary.js, loaded just before this file)
   which has the shape:
     { common: { "English": "العربية", ... },
       pages: { "solven4-edge.html": { "English": "العربية", ... }, ... } }
   Exact-match, whitespace-trimmed lookup against each text node,
   common dictionary first, then a page-specific override/extension.
   ============================================================ */
(function () {
  var DICT = window.SOLVEN4_DICT || { common: {}, pages: {} };
  var pageKey = location.pathname.split('/').pop() || 'index.html';
  var pageDict = DICT.pages[pageKey] || {};
  var STORAGE_KEY = 'solven4_lang';

  function lookup(text) {
    return pageDict[text] || DICT.common[text] || null;
  }

  // reverse map so switching back to English is exact, not a second guess
  var reverseCommon = {};
  Object.keys(DICT.common).forEach(function (k) { reverseCommon[DICT.common[k]] = k; });
  var reversePage = {};
  Object.keys(pageDict).forEach(function (k) { reversePage[pageDict[k]] = k; });
  function lookupReverse(text) {
    return reversePage[text] || reverseCommon[text] || null;
  }

  var SKIP_TAGS = { SCRIPT: 1, STYLE: 1, SVG: 1, symbol: 1, NOSCRIPT: 1 };

  function walk(root, translating) {
    var walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
      acceptNode: function (node) {
        var p = node.parentElement;
        if (!p) return NodeFilter.FILTER_REJECT;
        if (SKIP_TAGS[p.tagName]) return NodeFilter.FILTER_REJECT;
        if (p.closest('svg')) return NodeFilter.FILTER_REJECT;
        if (!node.nodeValue || !node.nodeValue.trim()) return NodeFilter.FILTER_REJECT;
        return NodeFilter.FILTER_ACCEPT;
      }
    });
    var node;
    var nodes = [];
    while ((node = walker.nextNode())) nodes.push(node);
    nodes.forEach(function (n) {
      var raw = n.nodeValue;
      var trimmed = raw.trim();
      if (!trimmed) return;
      var leading = raw.slice(0, raw.indexOf(trimmed));
      var trailing = raw.slice(raw.indexOf(trimmed) + trimmed.length);
      if (translating) {
        var t = lookup(trimmed);
        if (t) n.nodeValue = leading + t + trailing;
      } else {
        var e = lookupReverse(trimmed);
        if (e) n.nodeValue = leading + e + trailing;
      }
    });

    // attribute translation: placeholder, aria-label, alt, title
    var attrWalker = root.querySelectorAll('[placeholder],[aria-label],[alt],[title]');
    attrWalker.forEach(function (el) {
      ['placeholder', 'aria-label', 'alt', 'title'].forEach(function (attr) {
        var v = el.getAttribute(attr);
        if (!v) return;
        var trimmed = v.trim();
        if (translating) {
          var t = lookup(trimmed);
          if (t) el.setAttribute(attr, t);
        } else {
          var e = lookupReverse(trimmed);
          if (e) el.setAttribute(attr, e);
        }
      });
    });
  }

  function applyLanguage(lang, persist) {
    var root = document.documentElement;
    var translating = lang === 'ar';
    root.setAttribute('lang', translating ? 'ar' : 'en');
    root.setAttribute('dir', translating ? 'rtl' : 'ltr');
    walk(document.body, translating);
    document.querySelectorAll('.lang-toggle').forEach(function (btn) {
      btn.textContent = translating ? 'EN' : 'AR';
      btn.setAttribute('aria-label', translating ? 'Switch to English' : 'التبديل إلى العربية');
    });
    if (persist !== false) {
      try { localStorage.setItem(STORAGE_KEY, translating ? 'ar' : 'en'); } catch (e) {}
    }
    window.SOLVEN4_LANG = translating ? 'ar' : 'en';
    document.dispatchEvent(new CustomEvent('solven4:langchange', { detail: { lang: window.SOLVEN4_LANG } }));
  }

  function currentLang() {
    try { return localStorage.getItem(STORAGE_KEY) || 'en'; } catch (e) { return 'en'; }
  }

  function toggle() {
    applyLanguage(currentLang() === 'ar' ? 'en' : 'ar');
  }

  function injectToggleButtons() {
    // desktop header, next to the Launch App icon button
    var headerGroup = document.querySelector('#siteHeader > div:last-child');
    if (headerGroup && !headerGroup.querySelector('.lang-toggle')) {
      var btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'lang-toggle';
      btn.textContent = 'AR';
      btn.setAttribute('aria-label', 'التبديل إلى العربية');
      btn.addEventListener('click', toggle);
      headerGroup.insertBefore(btn, headerGroup.firstChild);
    }
    // mobile menu drawer
    var mobileMenu = document.getElementById('mobileMenu');
    if (mobileMenu && !mobileMenu.querySelector('.lang-toggle')) {
      var mbtn = document.createElement('button');
      mbtn.type = 'button';
      mbtn.className = 'lang-toggle';
      mbtn.style.alignSelf = 'flex-start';
      mbtn.style.marginTop = '8px';
      mbtn.textContent = 'AR';
      mbtn.setAttribute('aria-label', 'التبديل إلى العربية');
      mbtn.addEventListener('click', toggle);
      mobileMenu.appendChild(mbtn);
    }
  }

  window.SOLVEN4_setLanguage = applyLanguage;

  document.addEventListener('DOMContentLoaded', function () {
    injectToggleButtons();
    var saved = currentLang();
    if (saved === 'ar') applyLanguage('ar', false);
  });
})();
