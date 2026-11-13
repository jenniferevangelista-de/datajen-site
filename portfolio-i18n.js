(function () {
  "use strict";

  let dictionaries = window.JEN_TRANSLATIONS || {};
  const loadedLanguages=new Set(), loadingLanguages=new Set();
  function loadTranslations(lang){
    if(loadedLanguages.has(lang)||loadingLanguages.has(lang))return;
    loadingLanguages.add(lang);
    const supplemental={...(dictionaries[lang]||{})};
    const script=document.createElement('script');
    script.src='portfolio-translations-'+lang+'.js?v=20261030-split';
    script.onload=()=>{
      dictionaries=window.JEN_TRANSLATIONS||{};
      Object.assign(dictionaries[lang]||(dictionaries[lang]={}),supplemental);
      loadedLanguages.add(lang);loadingLanguages.delete(lang);reverseAttributes=undefined;delete partialIndexes[lang];
      applyLanguage(language);
    };
    script.onerror=()=>{loadingLanguages.delete(lang);};document.head.append(script);
  }
  const supported = new Set(["pt", "en", "es", "ja"]);
  const textState = new WeakMap();
  const attributeState = new WeakMap();
  let reverseAttributes;
  function canonicalAttribute(value){
    if(!reverseAttributes&&loadedLanguages.size){reverseAttributes=new Map();['en','es','ja'].forEach(lang=>Object.entries(dictionaries[lang]||{}).forEach(([key,text])=>{if(typeof text==='string'&&!reverseAttributes.has(text))reverseAttributes.set(text,key);}));}
    return reverseAttributes?.get(value)||value;
  }
  const translatedAttributes = ["aria-label", "title", "placeholder", "alt"];
  const forcedFragments = [
    "BANCOS & WAREHOUSE", "grande porte", "médio porte", "pequeno porte",
    "responsável", "Construção", "Financeiro", "Energia", "Varejo"
  ];
  const partialIndexes = {};
  let language = readLanguage();
  let applying = false;

  function readLanguage() {
    try {
      const saved = localStorage.getItem("jen_lang");
      if (supported.has(saved)) return saved;
    } catch (_) {}
    return "pt";
  }

  function normalize(value) {
    return String(value || "").replace(/\s+/g, " ").trim();
  }

  function shouldSkip(element) {
    // A tradução global também funciona como cobertura para os mapas nativos
    // data-i18n das páginas antigas. Alguns desses mapas são parciais; ignorá-los
    // deixava badges, estados de clique e pequenos rótulos em português.
    return !element || Boolean(element.closest("script, style, code, pre, noscript, [data-no-translate], .portfolio-nav, .portfolio-drawer"));
  }

  function preserveSpacing(source, translated) {
    const leading = source.match(/^\s*/)[0];
    const trailing = source.match(/\s*$/)[0];
    return leading + translated + trailing;
  }

  function getPartialIndex(targetLanguage) {
    if (partialIndexes[targetLanguage]) return partialIndexes[targetLanguage];
    const index = new Map();
    Object.keys(dictionaries[targetLanguage] || {}).forEach(function (key) {
      if (key.length < 3) return;
      const firstWord = key.match(/[A-Za-zÀ-ÿ]{3,}/)?.[0]?.toLocaleLowerCase("pt-BR");
      if (!firstWord) return;
      if (!index.has(firstWord)) index.set(firstWord, []);
      index.get(firstWord).push(key);
    });
    index.forEach(function (keys) { keys.sort(function (a, b) { return b.length - a.length; }); });
    partialIndexes[targetLanguage] = index;
    return index;
  }

  function translateValue(source) {
    if (language === "pt") return source;
    const protectedNames=new Set(['Heineken','Carrefour','Itaú','Itaú Unibanco','OpenMetadata','Databricks','Hadoop','Cloudera CDP','Data Factory','IBM','Oracle','Google','AWS','NASA','NASA Space Apps','CS50','Jennifer','Evangelista','Jennifer Evangelista','Bora Rachar','Node-RED','React Native','Watson NLU','Ford Connected API','FordConnect','BR PAY','PETRO','BRAS','PETROBRAS','MQTT','Link In','Link Out','MQTT In','MQTT Out','Kubernetes','Terraform','Kafka','Spark','Python','SQL','PIX','React Native / PWA','Ford Connected Vehicle API','Bora Rachar: MVP App','Bora Rachar App']);
    if(protectedNames.has(normalize(source))||/^[\w.-]+\.(?:org|com|br|io)$/i.test(normalize(source)))return source;
    const dictionary = dictionaries[language] || {};
    const replaceForcedFragments = function (value) {
      let result = value;
      forcedFragments.forEach(function (key) {
        if (dictionary[key]) result = result.split(key).join(dictionary[key]);
      });
      return result;
    };
    const exact = dictionary[normalize(source)];
    if (exact) return preserveSpacing(source, exact);

    // Complete-string translation only: preserve prose and brand names.
    return source;
  }

  function translateTextNode(node) {
    const parent = node.parentElement;
    if (shouldSkip(parent)) return;
    const current = node.nodeValue || "";
    const key = normalize(current);
    if (!key) return;

    let state = textState.get(node);
    if (!state || (current !== state.rendered && !applying)) {
      state = { source: current, rendered: current };
      textState.set(node, state);
    }

    const sourceKey = normalize(state.source);
    const next = language === "pt" ? state.source : translateValue(state.source);
    if (node.nodeValue !== next) node.nodeValue = next;
    state.rendered = next;
  }

  function translateElementAttributes(element) {
    if (shouldSkip(element)) return;
    let states = attributeState.get(element);
    if (!states) {
      states = {};
      attributeState.set(element, states);
    }
    translatedAttributes.forEach(function (attribute) {
      if (!element.hasAttribute(attribute)) return;
      const current = element.getAttribute(attribute) || "";
      if (!states[attribute] || (current !== states[attribute].rendered && !applying)) {
        states[attribute] = { source: canonicalAttribute(current), rendered: current };
      }
      const state = states[attribute];
      const next = language === "pt" ? state.source : translateValue(state.source);
      if (current !== next) element.setAttribute(attribute, next);
      state.rendered = next;
    });
  }

  function translateTree(root) {
    if (!root) return;
    applying = true;
    try {
      if (root.nodeType === Node.TEXT_NODE) translateTextNode(root);
      if (root.nodeType === Node.ELEMENT_NODE) translateElementAttributes(root);
      const walker = document.createTreeWalker(root, NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT);
      let node;
      while ((node = walker.nextNode())) {
        if (node.nodeType === Node.TEXT_NODE) translateTextNode(node);
        else translateElementAttributes(node);
      }
      const rootLanguage = language === "pt" ? "pt-BR" : language;
      if (document.documentElement.lang !== rootLanguage) document.documentElement.lang = rootLanguage;
    } finally {
      applying = false;
    }
  }

  function applyLanguage(nextLanguage) {
    if (!supported.has(nextLanguage)) return;
    language = nextLanguage;
    if(language!=='pt'&&!loadedLanguages.has(language)){loadTranslations(language);return;}
    translateTree(document.body);
    const titleKey = normalize(document.title);
    if (!document.documentElement.dataset.jenOriginalTitle) {
      document.documentElement.dataset.jenOriginalTitle = document.title;
    }
    const originalTitle = document.documentElement.dataset.jenOriginalTitle;
    document.title = language === "pt" ? originalTitle : (dictionaries[language]?.[normalize(originalTitle)] || dictionaries[language]?.[titleKey] || originalTitle);
  }

  const observer = new MutationObserver(function (mutations) {
    if (applying) return;
    mutations.forEach(function (mutation) {
      if (mutation.type === "characterData") translateTextNode(mutation.target);
      mutation.addedNodes.forEach(function (node) { translateTree(node); });
      if (mutation.type === "attributes") translateElementAttributes(mutation.target);
    });
  });

  function init() {
    applyLanguage(language);
    observer.observe(document.body, {
      subtree: true,
      childList: true,
      characterData: true,
      attributes: true,
      attributeFilter: translatedAttributes
    });
  }

  document.addEventListener("jen:languagechange", function (event) {
    applyLanguage(event.detail?.lang || "pt");
  });

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init, { once: true });
  else init();
})();
