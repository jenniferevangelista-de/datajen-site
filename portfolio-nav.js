(function () {
  "use strict";

  if (!document.querySelector('script[src*="portfolio-gallery-experience.js"]')) {
    const mediaScript=document.createElement('script');
    mediaScript.src='portfolio-gallery-experience.js?v=20261028-final-review-v5';
    mediaScript.defer=true;
    document.head.append(mediaScript);
  }

  const CASES = [
    ["01", "cases.html", "Endeavor · Sprinklr › PolitiCard"],
    ["02", "cases-petrobras.html", "Petrobras › BR PAY"],
    ["03", "cases-itau.html", "Itaú › Open Finance"],
    ["04", "cases-fiap.html", "FIAP › IA"],
    ["05", "cases-nightguard.html", "Night Guard › Hacktoberfest 2026"]
  ];

  const COMPANIES = [
    ["01", "heineken", "Heineken"],
    ["02", "carrefour", "Carrefour"],
    ["03", "itau-unibanco", "Itaú Unibanco"],
    ["04", "creditas", "Creditas"],
    ["05", "quintoandar", "QuintoAndar"],
    ["06", "cogna-educacao", "Cogna Educação"],
    ["07", "serasa-experian", "Serasa Experian"],
    ["08", "dafiti", "GFG (Dafiti)"],
    ["09", "oracle", "Oracle"],
    ["10", "ibm", "IBM"],
    ["11", "santander", "Santander"],
    ["12", "cetip-b3", "B3"]
  ];

  const LABELS = {
    pt: { headerCv: "Baixar CV", allLinks: "Todos os links · Linktree", achievements: "Conquistas", cases: "Cases", journey: "Trajetória", skills: "Competências", credentials: "Credenciais", services: "Serviços", contact: "Contato", events: "Eventos", home: "Início", numbers: "Números", gallery: "Galeria", testimonials: "Depoimentos", companies: "Empresas da trajetória", featuredCases: "Cases premiados", allJourney: "Ver toda a trajetória", menu: "Abrir menu completo", close: "Fechar menu", resume: "Baixar CV", groupHighlights: "Destaques", groupExpertise: "Expertise", groupWork: "Atuação", groupConnect: "Conectar", explore: "Explore as sessões", talk: "Vamos conversar" },
    en: { headerCv: "Download CV", allLinks: "All links · Linktree", achievements: "Highlights", cases: "Cases", journey: "Career", skills: "Skills", credentials: "Credentials", services: "Services", contact: "Contact", events: "Events", home: "Home", numbers: "Numbers", gallery: "Gallery", testimonials: "Testimonials", companies: "Career companies", featuredCases: "Award-winning cases", allJourney: "View full career", menu: "Open full menu", close: "Close menu", resume: "Download CV", groupHighlights: "Highlights", groupExpertise: "Expertise", groupWork: "Work", groupConnect: "Connect", explore: "Explore sections", talk: "Let's talk" },
    es: { headerCv: "Descargar CV", allLinks: "Todos los enlaces · Linktree", achievements: "Logros", cases: "Casos", journey: "Trayectoria", skills: "Competencias", credentials: "Credenciales", services: "Servicios", contact: "Contacto", events: "Eventos", home: "Inicio", numbers: "Números", gallery: "Galería", testimonials: "Testimonios", companies: "Empresas de la trayectoria", featuredCases: "Casos premiados", allJourney: "Ver trayectoria completa", menu: "Abrir menú completo", close: "Cerrar menú", resume: "Descargar CV", groupHighlights: "Destacados", groupExpertise: "Experiencia", groupWork: "Actuación", groupConnect: "Conectar", explore: "Explora las secciones", talk: "Hablemos" },
    ja: { headerCv: "履歴書", allLinks: "すべてのリンク · Linktree", achievements: "実績", cases: "事例", journey: "経歴", skills: "スキル", credentials: "資格", services: "サービス", contact: "連絡先", events: "イベント", home: "ホーム", numbers: "数字", gallery: "ギャラリー", testimonials: "推薦文", companies: "経歴企業", featuredCases: "受賞事例", allJourney: "経歴をすべて見る", menu: "全メニューを開く", close: "メニューを閉じる", resume: "履歴書をダウンロード", groupHighlights: "ハイライト", groupExpertise: "専門性", groupWork: "活動", groupConnect: "つながる", explore: "セクションを見る", talk: "話しましょう" }
  };

  const WHATSAPP_URL = "https://wa.me/5511988432930?text=Oi%20Jennifer!%20Vim%20pelo%20seu%20site%20e%20quero%20conversar.";

  const FLAG_ASSETS = {
    pt: "assets/flag-br.svg",
    en: "assets/flag-us.svg",
    es: "assets/flag-es.svg",
    ja: "assets/flag-jp.svg"
  };

  const BRAND_ASSETS = {
    "assets/brand-logos/heineken.png": "logos/home-heineken.svg",
    "assets/brand-logos/carrefour.png": "logos/home-carrefour.svg",
    "assets/brand-logos/itau.png": "logos/stage-itau.png",
    "assets/brand-logos/creditas.png": "logos/home-creditas-card.svg",
    "assets/brand-logos/quintoandar.png": "logos/home-quintoandar.svg",
    "assets/brand-logos/cogna.png": "assets/brand-logos/cogna.png",
    "assets/brand-logos/serasa.png": "logos/home-serasa.webp",
    "assets/brand-logos/dafiti.png": "logos/home-dafiti.svg",
    "assets/brand-logos/oracle.png": "logos/trust-oracle.svg",
    "assets/brand-logos/ibm.png": "logos/trust-ibm.svg",
    "assets/brand-logos/santander.png": "logos/home-santander.svg",
    "assets/brand-logos/b3.png": "logos/home-b3.svg",
    "assets/brand-logos/petrobras.png": "logos/trust-petrobras.svg",
    "assets/brand-logos/natura.png": "logos/home-natura.svg",
    "assets/brand-logos/fiap.png": "assets/brand-logos/fiap-official.svg",
    "logos/f-theheinekencompany.com.png": "logos/home-heineken.svg",
    "logos/f-carrefour.com.br.png": "logos/home-carrefour.svg",
    "logos/f-itau.com.br.png": "logos/stage-itau.png",
    "logos/f-creditas.com.png": "logos/home-creditas-card.svg",
    "logos/f-quintoandar.com.br.png": "logos/home-quintoandar.svg",
    "logos/f-cogna.com.br.png": "assets/brand-logos/cogna.png",
    "logos/f-serasaexperian.com.br.png": "logos/home-serasa.webp",
    "logos/f-dafiti.com.br.png": "logos/home-dafiti.svg",
    "logos/f-oracle.com.png": "logos/trust-oracle.svg",
    "logos/f-ibm.com.png": "logos/trust-ibm.svg",
    "logos/f-santander.com.br.png": "logos/home-santander.svg",
    "logos/f-petrobras.com.br.png": "logos/trust-petrobras.svg",
    "logos/stage-ibm.png": "logos/trust-ibm.svg",
    "logos/stage-espm.png": "logos/home-espm.png",
    "logos/stage-google.png": "logos/trust-google.svg",
    "logos/stage-itau.png": "logos/stage-itau.png",
    "logos/stage-nubank.png": "logos/home-nubank.svg",
    "logos/stage-fatec.png": "logos/stage-fatec.png"
  };
  // Older pages used text-based stand-ins. Share the original artwork everywhere.
  Object.keys(BRAND_ASSETS).forEach(function (source) {
    if (source.startsWith("assets/brand-logos/") && source.endsWith(".png")) {
      const svg = source.replace(/\.png$/, ".svg");
      if (svg !== BRAND_ASSETS[source]) BRAND_ASSETS[svg] = BRAND_ASSETS[source];
    }
  });

  const PIONEERS = [
    {
      image: "pioneers/ada.webp",
      name: "Ada Lovelace",
      lesson: "Sua lição: tenha visão de futuro e olhe além do óbvio. Escreveu o primeiro algoritmo da história."
    },
    {
      image: "pioneers/grace.webp",
      name: "Grace Hopper",
      lesson: "Sua lição: simplifique o complexo e torne o conhecimento acessível. Criou o primeiro compilador."
    },
    {
      image: "pioneers/joan.webp",
      name: "Joan Clarke",
      lesson: "Sua lição: talento não tem gênero. Decifrou comunicações nazistas com Alan Turing na 2ª Guerra."
    },
    {
      image: "pioneers/eniac.webp",
      name: "Mulheres do ENIAC",
      lesson: "Sua lição: em 1945, seis mulheres programaram o primeiro computador eletrônico de grande escala da história."
    }
  ];

  function escapeHtml(value) {
    return String(value).replace(/[&<>'"]/g, function (char) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" }[char];
    });
  }

  function currentLanguage() {
    try {
      const saved = localStorage.getItem("jen_lang");
      if (LABELS[saved]) return saved;
    } catch (_) {}
    const lang = (document.documentElement.lang || "pt").slice(0, 2).toLowerCase();
    return LABELS[lang] ? lang : "pt";
  }

  function languageButtons(lang) {
    const options = [["pt", "Português"], ["en", "English"], ["es", "Español"], ["ja", "日本語"]];
    return '<div class="portfolio-nav__languages" aria-label="Idioma / Language">' + options.map(function (item) {
      return '<button type="button" data-portfolio-lang="' + item[0] + '" class="' + (item[0] === lang ? "is-active" : "") + '" lang="' + item[0] + '" title="' + item[1] + '" aria-pressed="' + (item[0] === lang) + '"><span class="portfolio-nav__language-code" aria-hidden="true" data-no-translate>' + item[0].toUpperCase() + '</span><span class="sr-only">' + item[1] + '</span></button>';
    }).join("") + "</div>";
  }

  function normalizeAssetPath(value) {
    if (!value) return "";
    try {
      const url = new URL(value, document.baseURI);
      return decodeURIComponent(url.pathname).replace(/^\//, "").replace(/\\/g, "/");
    } catch (_) {
      return value.split("?")[0].replace(/^\.\//, "").replace(/\\/g, "/");
    }
  }

  function upgradeImageAssets(root) {
    const scope = root && root.querySelectorAll ? root : document;
    const images = [];
    if (root && root.matches && root.matches("img")) images.push(root);
    scope.querySelectorAll("img").forEach(function (image) { images.push(image); });
    images.forEach(function (image) {
      if (image.dataset.homeBrand) return;
      const raw = image.getAttribute("src") || "";
      const path = normalizeAssetPath(raw);
      const brandKey = Object.keys(BRAND_ASSETS).find(function (key) { return path.endsWith(key); });
      const flagMatch = path.match(/(?:^|\/)w40\/(br|us|es|fr|nl|de|ie|jp)\.png$/i);
      const replacement = (brandKey ? BRAND_ASSETS[brandKey] : "") || (flagMatch ? "assets/flag-" + flagMatch[1].toLowerCase() + ".svg" : "");
      if (!replacement || raw === replacement) return;
      image.setAttribute("src", replacement);
      image.dataset.brandVector = String(replacement.endsWith(".svg"));
    });
  }

  function dropdownItems(items, type) {
    return items.map(function (item) {
      const href = type === "company" ? "experiencia.html#" + item[1] : item[1];
      return '<a href="' + href + '"><span class="portfolio-nav__number">' + item[0] + '</span><span>' + escapeHtml(item[2]) + '</span>' + (type === "case" ? '<span class="portfolio-nav__badge">Ativo</span>' : "") + "</a>";
    }).join("");
  }

  function pioneerCarouselMarkup(extraClass) {
    const slides = PIONEERS.map(function (pioneer, index) {
      return '<article class="portfolio-pioneer__slide" aria-hidden="' + (index === 0 ? "false" : "true") + '">' +
        '<img src="' + pioneer.image + '" alt="Ilustração de ' + escapeHtml(pioneer.name) + '" loading="lazy" decoding="async" draggable="false">' +
        '<div class="portfolio-pioneer__shade" aria-hidden="true"></div>' +
        '<div class="portfolio-pioneer__copy"><span>✦ Quem me inspira</span><strong>' + escapeHtml(pioneer.name) + '</strong><p>' + escapeHtml(pioneer.lesson) + '</p></div>' +
      '</article>';
    }).join("");
    const dots = PIONEERS.map(function (pioneer, index) {
      return '<button type="button" class="portfolio-pioneer__dot ' + (index === 0 ? "is-active" : "") + '" data-pioneer-go="' + index + '" aria-label="Mostrar ' + escapeHtml(pioneer.name) + '" aria-pressed="' + (index === 0) + '"></button>';
    }).join("");
    return '<div class="portfolio-pioneer ' + (extraClass || "") + '" data-pioneer-carousel aria-label="Pioneiras da tecnologia que inspiram Jennifer">' +
      '<div class="portfolio-pioneer__track">' + slides + '</div><div class="portfolio-pioneer__dots">' + dots + '</div></div>';
  }

  function megaGroups(labels) {
    return [
      {
        id: "highlights",
        label: "groupHighlights",
        theme: "gold",
        links: [["01", "achievements", "#secao-conquistas"], ["02", "journey", "#secao-trajetoria"]]
      },
      {
        id: "expertise",
        label: "groupExpertise",
        theme: "violet",
        links: [["03", "skills", "#secao-competencias"], ["04", "credentials", "#secao-credenciais"]]
      },
      {
        id: "work",
        label: "groupWork",
        theme: "blue",
        links: [["05", "services", "#secao-servicos"], ["06", "events", "#eventos"], ["07", "gallery", "#galeria"]]
      },
      {
        id: "connect",
        label: "groupConnect",
        theme: "coral",
        links: [["08", "testimonials", "#secao-depoimentos"], ["09", "contact", "#secao-contato"], ["↗", "allLinks", "https://linktr.ee/jen.data.nasa"], ["↓", "resume", "#curriculo"]]
      }
    ];
  }

  function megaNavigation(labels) {
    const groups = megaGroups(labels);
    const toggles = groups.map(function (group) {
      return '<li><button class="portfolio-nav__mega-toggle" type="button" data-portfolio-mega="' + group.id + '" data-label-key="' + group.label + '" aria-expanded="false" aria-controls="portfolioMega-' + group.id + '">' + labels[group.label] + "</button></li>";
    }).join("");
    const panels = groups.map(function (group) {
      const links = group.links.map(function (item) {
        return '<a href="' + (item[2].startsWith('https:') ? item[2] : 'index.html' + item[2]) + '"><span>' + item[0] + '</span><b data-label-key="' + item[1] + '">' + labels[item[1]] + '</b></a>';
      }).join("");
      return '<section class="portfolio-mega__panel portfolio-mega__panel--' + group.theme + '" id="portfolioMega-' + group.id + '" data-mega-panel="' + group.id + '" aria-hidden="true">' +
        '<div class="portfolio-mega__inner"><div class="portfolio-mega__copy"><p data-label-key="explore">' + labels.explore + '</p><span class="portfolio-mega__rule" aria-hidden="true"></span><nav aria-label="' + labels[group.label] + '">' + links + '</nav><a class="portfolio-mega__cta" href="index.html#secao-contato" data-label-key="talk">' + labels.talk + '</a></div>' +
        '<div class="portfolio-mega__media">' + pioneerCarouselMarkup("portfolio-mega__pioneers") + '</div></div></section>';
    }).join("");
    return { toggles: toggles, panels: '<div class="portfolio-mega" id="portfolioMega" aria-hidden="true">' + panels + "</div>" };
  }

  function buildNavigation(lang, contextLink) {
    const l = LABELS[lang];
    const mega = megaNavigation(l);
    const context = contextLink ? '<a class="portfolio-drawer__context" href="' + escapeHtml(contextLink.href) + '">← ' + escapeHtml(contextLink.text) + "</a>" : "";
    return {
      nav: '<nav class="portfolio-nav" id="portfolioNav" aria-label="Navegação principal">' +
        '<button class="portfolio-nav__menu-button" type="button" aria-label="' + l.menu + '" aria-expanded="false" aria-controls="portfolioDrawer"><span class="portfolio-nav__menu-icon" aria-hidden="true"></span></button>' +
        '<a class="portfolio-nav__brand" href="index.html#top" aria-label="JEN NOTES, ' + l.home + '"><span>JEN<br>NOTES</span></a>' +
        '<ul class="portfolio-nav__links">' + mega.toggles + '<li><a class="portfolio-nav__link portfolio-resume-link" data-no-translate data-cv-download="pt" href="assets/cv/jennifer-evangelista-executive-pt.pdf?v=20261027-113006" download="Jennifer-Evangelista-CV.pdf">Resume</a></li></ul>' +
      '<div class="portfolio-nav__utilities">' + languageButtons(lang) + '</div></nav>',
      mega: mega.panels,
      drawer: '<div class="portfolio-drawer" id="portfolioDrawer" aria-hidden="true"><div class="portfolio-drawer__panel" role="dialog" aria-modal="true" aria-label="Menu">' +
        '<div class="portfolio-drawer__header"><a class="portfolio-drawer__title" href="index.html#top">JEN<br>NOTES</a><button class="portfolio-drawer__close" type="button" aria-label="' + l.close + '">×</button></div>' +
        '<div class="portfolio-drawer__primary">' +
          '<a href="index.html#top">⌂ ' + l.home + '</a><a href="index.html#secao-conquistas">01 · ' + l.achievements + '</a><a href="index.html#secao-trajetoria">02 · ' + l.journey + '</a><a href="index.html#secao-competencias">03 · ' + l.skills + '</a><a href="index.html#secao-credenciais">04 · ' + l.credentials + '</a><a href="index.html#secao-servicos">05 · ' + l.services + '</a><a href="index.html#eventos">06 · ' + l.events + '</a><a href="index.html#galeria">07 · ' + l.gallery + '</a><a href="index.html#secao-depoimentos">08 · ' + l.testimonials + '</a><a href="index.html#secao-contato">09 · ' + l.contact + "</a></div>" +
        '<div class="portfolio-drawer__resources"><a class="portfolio-nav__button" href="https://linktr.ee/jen.data.nasa" rel="noopener">' + l.allLinks + '</a><a class="portfolio-nav__button" href="index.html#curriculo">' + l.resume + '</a></div>' +
        context +
        '<div class="portfolio-drawer__accordion"><button class="portfolio-drawer__accordion-button" type="button" aria-expanded="false"><span>' + l.featuredCases + '</span><span>＋</span></button><div class="portfolio-drawer__accordion-body">' + CASES.map(function (item) { return '<a href="' + item[1] + '">' + escapeHtml(item[2]) + "</a>"; }).join("") + "</div></div>" +
        '<div class="portfolio-drawer__accordion"><button class="portfolio-drawer__accordion-button" type="button" aria-expanded="false"><span>' + l.companies + '</span><span>＋</span></button><div class="portfolio-drawer__accordion-body">' + COMPANIES.map(function (item) { return '<a href="experiencia.html#' + item[1] + '">' + escapeHtml(item[2]) + "</a>"; }).join("") + "</div></div>" +
        pioneerCarouselMarkup("portfolio-drawer__pioneers") +
        '<div class="portfolio-drawer__footer">' + languageButtons(lang) + '<a class="portfolio-nav__button portfolio-nav__button--whatsapp" href="' + WHATSAPP_URL + '" rel="noopener">💬 WhatsApp</a><a class="portfolio-nav__button portfolio-nav__button--cv" href="index.html#secao-trajetoria">' + l.journey + "</a></div>" +
      "</div></div>"
    };
  }

  function init() {
    if (document.querySelector('meta[http-equiv="refresh"]')) return;
    if (window.self !== window.top || document.documentElement.matches(".in-iframe, .embed-mode")) {
      document.documentElement.classList.add('portfolio-embedded');
      return;
    }
    if (document.querySelector('footer.site-footer') && getComputedStyle(document.body).display === 'flex') {
      document.body.classList.add('portfolio-footer-flex');
    }

    const oldContext = document.querySelector(".gn-back, .mob-standalone-bar .msb-back");
    const contextLink = oldContext ? { href: oldContext.getAttribute("href") || "experiencia.html", text: oldContext.textContent.replace(/^\s*[←‹]\s*/, "").replace(/\s*[→›]\s*$/, "").trim() } : null;
    document.querySelectorAll("#globalNav, body > nav:not(.bottom):not(.bottomnav):not(.case-rail):not(.nav):not(.top), .mob-standalone-bar, .mob-veil").forEach(function (element) {
      element.classList.add("portfolio-nav-legacy");
      element.setAttribute("aria-hidden", "true");
    });

    let lang = currentLanguage();
    requestAnimationFrame(()=>{const skipLink=document.querySelector('.skip-link');if(skipLink)document.body.prepend(skipLink);});
    const markup = buildNavigation(lang, contextLink);
    document.body.insertAdjacentHTML("afterbegin", markup.drawer);
    document.body.insertAdjacentHTML("afterbegin", markup.mega);
    document.body.insertAdjacentHTML("afterbegin", markup.nav);
    document.documentElement.classList.add("has-portfolio-nav");
    document.body.classList.add("has-portfolio-nav");
    upgradeImageAssets(document);

    const assetObserver = new MutationObserver(function (records) {
      records.forEach(function (record) {
        record.addedNodes.forEach(function (node) {
          if (node.nodeType === 1) upgradeImageAssets(node);
        });
      });
    });
    assetObserver.observe(document.body, { childList: true, subtree: true });

    const nav = document.getElementById("portfolioNav");
    const megaMenu = document.getElementById("portfolioMega");
    const drawer = document.getElementById("portfolioDrawer");
    const menuButton = nav.querySelector(".portfolio-nav__menu-button");
    const megaButtons = nav.querySelectorAll(".portfolio-nav__mega-toggle");
    const closeButton = drawer.querySelector(".portfolio-drawer__close");
    function prefersReducedMotion() {
      return document.body.dataset.motion === "reduzido" || window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    }
    let lastFocus = null;
    let activeMegaButton = null;

    function initPioneerCarousel(carousel) {
      const track = carousel.querySelector(".portfolio-pioneer__track");
      const slides = Array.from(carousel.querySelectorAll(".portfolio-pioneer__slide"));
      const dots = Array.from(carousel.querySelectorAll(".portfolio-pioneer__dot"));
      let current = 0;
      let timer = null;
      let touchStartX = 0;

      function go(index) {
        current = (index + slides.length) % slides.length;
        track.style.transform = "translate3d(-" + (current * 100) + "%,0,0)";
        slides.forEach(function (slide, slideIndex) { slide.setAttribute("aria-hidden", String(slideIndex !== current)); });
        dots.forEach(function (dot, dotIndex) {
          const active = dotIndex === current;
          dot.classList.toggle("is-active", active);
          dot.setAttribute("aria-pressed", String(active));
        });
      }

      function stop() {
        if (timer) window.clearInterval(timer);
        timer = null;
      }

      function play() {
        stop();
        if (!prefersReducedMotion()) timer = window.setInterval(function () { go(current + 1); }, 3200);
      }

      dots.forEach(function (dot) {
        dot.addEventListener("click", function () { go(Number(dot.dataset.pioneerGo)); play(); });
      });
      carousel.addEventListener("mouseenter", stop);
      carousel.addEventListener("mouseleave", play);
      carousel.addEventListener("touchstart", function (event) {
        touchStartX = event.touches[0].clientX;
        stop();
      }, { passive: true });
      carousel.addEventListener("touchend", function (event) {
        const distance = event.changedTouches[0].clientX - touchStartX;
        if (Math.abs(distance) > 36) go(current + (distance < 0 ? 1 : -1));
        play();
      }, { passive: true });
      carousel._pioneer = { go: go, play: play, stop: stop };
    }

    document.querySelectorAll("[data-pioneer-carousel]").forEach(initPioneerCarousel);
    document.addEventListener("jen:motionchange", function () {
      document.querySelectorAll("[data-pioneer-carousel]").forEach(function (carousel) {
        if (!carousel._pioneer) return;
        if (prefersReducedMotion()) carousel._pioneer.stop();
        else if (carousel.getBoundingClientRect().width && carousel.closest(".is-open")) carousel._pioneer.play();
      });
    });

    function stopMegaPioneers() {
      megaMenu.querySelectorAll("[data-pioneer-carousel]").forEach(function (carousel) {
        if (carousel._pioneer) carousel._pioneer.stop();
      });
    }

    function closeDropdowns(except) {
      nav.querySelectorAll(".portfolio-nav__dropdown-toggle").forEach(function (button) {
        const panel = document.getElementById(button.getAttribute("aria-controls"));
        if (button !== except) {
          button.setAttribute("aria-expanded", "false");
          panel.classList.remove("is-open");
        }
      });
    }

    nav.querySelectorAll(".portfolio-nav__dropdown-toggle").forEach(function (button) {
      button.addEventListener("click", function () {
        const panel = document.getElementById(button.getAttribute("aria-controls"));
        const opening = button.getAttribute("aria-expanded") !== "true";
        closeDropdowns(button);
        button.setAttribute("aria-expanded", String(opening));
        panel.classList.toggle("is-open", opening);
      });
    });

    function closeMegaMenu(returnFocus) {
      if (!megaMenu) return;
      stopMegaPioneers();
      megaMenu.classList.remove("is-open");
      megaMenu.setAttribute("aria-hidden", "true");
      megaMenu.querySelectorAll(".portfolio-mega__panel").forEach(function (panel) {
        panel.classList.remove("is-active");
        panel.setAttribute("aria-hidden", "true");
      });
      megaButtons.forEach(function (button) { button.setAttribute("aria-expanded", "false"); });
      document.documentElement.classList.remove("portfolio-mega-open");
      document.body.classList.remove("portfolio-mega-open");
      if (!drawer.classList.contains("is-open")) document.documentElement.style.overflow = "";
      if (returnFocus && activeMegaButton && typeof activeMegaButton.focus === "function") activeMegaButton.focus();
      activeMegaButton = null;
    }

    function openMegaMenu(button) {
      if (!megaMenu) return;
      const panelId = button.getAttribute("data-portfolio-mega");
      const panel = megaMenu.querySelector('[data-mega-panel="' + panelId + '"]');
      const alreadyOpen = megaMenu.classList.contains("is-open") && button.getAttribute("aria-expanded") === "true";
      if (alreadyOpen) {
        closeMegaMenu(true);
        return;
      }
      closeDropdowns();
      megaButtons.forEach(function (item) { item.setAttribute("aria-expanded", String(item === button)); });
      megaMenu.querySelectorAll(".portfolio-mega__panel").forEach(function (item) {
        const active = item === panel;
        item.classList.toggle("is-active", active);
        item.setAttribute("aria-hidden", String(!active));
      });
      megaMenu.classList.add("is-open");
      megaMenu.setAttribute("aria-hidden", "false");
      const pioneerCarousel = panel.querySelector("[data-pioneer-carousel]");
      stopMegaPioneers();
      if (pioneerCarousel && pioneerCarousel._pioneer) pioneerCarousel._pioneer.play();
      document.documentElement.classList.add("portfolio-mega-open");
      document.body.classList.add("portfolio-mega-open");
      document.documentElement.style.overflow = "hidden";
      activeMegaButton = button;
    }

    megaButtons.forEach(function (button) {
      button.addEventListener("click", function () { openMegaMenu(button); });
    });
    function isInsideMegaRegion(target) {
      return target instanceof Node && (nav.contains(target) || megaMenu.contains(target));
    }
    function closeMegaWhenPointerLeaves(event) {
      if (!isInsideMegaRegion(event.relatedTarget)) closeMegaMenu(false);
    }
    nav.addEventListener("mouseleave", closeMegaWhenPointerLeaves);
    megaMenu.addEventListener("mouseleave", closeMegaWhenPointerLeaves);
    megaMenu.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () { closeMegaMenu(false); });
    });

    function openDrawer() {
      closeMegaMenu(false);
      lastFocus = document.activeElement;
      drawer.classList.add("is-open");
      drawer.setAttribute("aria-hidden", "false");
      menuButton.setAttribute("aria-expanded", "true");
      document.documentElement.style.overflow = "hidden";
      const pioneerCarousel = drawer.querySelector("[data-pioneer-carousel]");
      if (pioneerCarousel && pioneerCarousel._pioneer) pioneerCarousel._pioneer.play();
      closeButton.focus();
    }

    function closeDrawer() {
      const pioneerCarousel = drawer.querySelector("[data-pioneer-carousel]");
      if (pioneerCarousel && pioneerCarousel._pioneer) pioneerCarousel._pioneer.stop();
      drawer.classList.remove("is-open");
      drawer.setAttribute("aria-hidden", "true");
      menuButton.setAttribute("aria-expanded", "false");
      document.documentElement.style.overflow = "";
      if (lastFocus && typeof lastFocus.focus === "function") lastFocus.focus();
    }

    menuButton.addEventListener("click", openDrawer);
    closeButton.addEventListener("click", closeDrawer);
    drawer.addEventListener("click", function (event) {
      if (event.target === drawer || event.target.closest("a")) closeDrawer();
    });

    drawer.querySelectorAll(".portfolio-drawer__accordion-button").forEach(function (button) {
      button.addEventListener("click", function () {
        const body = button.nextElementSibling;
        const opening = !body.classList.contains("is-open");
        body.classList.toggle("is-open", opening);
        button.setAttribute("aria-expanded", String(opening));
        button.lastElementChild.textContent = opening ? "−" : "＋";
      });
    });

    function updateNavigationLabels(nextLang) {
      const labels = LABELS[nextLang];
      document.querySelectorAll("[data-label-key]").forEach(function (element) {
        const key = element.getAttribute("data-label-key");
        if (labels[key]) element.textContent = labels[key];
      });
      menuButton.setAttribute("aria-label", labels.menu);
      closeButton.setAttribute("aria-label", labels.close);
      nav.querySelector(".portfolio-nav__brand").setAttribute("aria-label", "JEN NOTES, " + labels.home);

      const drawerLabels = {
        "index.html#top": "⌂ " + labels.home,
        "index.html#secao-conquistas": "01 · " + labels.achievements,
        "index.html#secao-trajetoria": "02 · " + labels.journey,
        "index.html#secao-competencias": "03 · " + labels.skills,
        "index.html#secao-credenciais": "04 · " + labels.credentials,
        "index.html#secao-servicos": "05 · " + labels.services,
        "index.html#eventos": "06 · " + labels.events,
        "index.html#galeria": "07 · " + labels.gallery,
        "index.html#secao-depoimentos": "08 · " + labels.testimonials,
        "index.html#secao-contato": "09 · " + labels.contact
      };
      drawer.querySelectorAll(".portfolio-drawer__primary a").forEach(function (link) {
        const value = drawerLabels[link.getAttribute("href")];
        if (value) link.textContent = value;
      });
      const accordions = drawer.querySelectorAll(".portfolio-drawer__accordion-button > span:first-child");
      accordions[0].textContent = labels.featuredCases;
      accordions[1].textContent = labels.companies;
      document.querySelectorAll(".portfolio-nav__button--cv").forEach(function (link) { link.textContent = labels.journey; });
    }

    function setLanguage(nextLang) {
      if (!LABELS[nextLang]) return;
      try { localStorage.setItem("jen_lang", nextLang); } catch (_) {}
      document.querySelectorAll("[data-portfolio-lang]").forEach(function (button) {
        const active = button.getAttribute("data-portfolio-lang") === nextLang;
        button.classList.toggle("is-active", active);
        button.setAttribute("aria-pressed", String(active));
      });
      const legacy = document.querySelector('.portfolio-nav-legacy [data-lang="' + nextLang + '"], .portfolio-nav-legacy [data-l="' + nextLang + '"]');
      if (legacy) legacy.click();
      if (nextLang !== lang) {
        lang = nextLang;
        document.documentElement.lang = nextLang === "pt" ? "pt-BR" : nextLang;
      }
      updateNavigationLabels(nextLang);
      document.dispatchEvent(new CustomEvent("jen:languagechange", { detail: { lang: nextLang } }));
    }

    document.querySelectorAll("[data-portfolio-lang]").forEach(function (button) {
      button.addEventListener("click", function () { setLanguage(button.getAttribute("data-portfolio-lang")); });
    });

    if (lang !== "pt") {
      const legacy = document.querySelector('.portfolio-nav-legacy [data-lang="' + lang + '"], .portfolio-nav-legacy [data-l="' + lang + '"]');
      if (legacy) legacy.click();
    }

    document.addEventListener("click", function (event) {
      if (!nav.contains(event.target)) closeDropdowns();
    });
    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape") {
        closeDropdowns();
        if (megaMenu.classList.contains("is-open")) closeMegaMenu(true);
        if (drawer.classList.contains("is-open")) closeDrawer();
      }
    });
    window.addEventListener("resize", function () {
      if (window.innerWidth <= 1180 && megaMenu.classList.contains("is-open")) closeMegaMenu(false);
    });

    let current = location.pathname.split("/").pop() || "index.html";if(!/\.html?$/.test(current))current+=".html";
    nav.querySelectorAll("a[href]").forEach(function (link) {
      const href = link.getAttribute("href").split("#")[0] || "index.html";
      if (href === current && current !== "index.html") link.setAttribute("aria-current", "page");
    });
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init, { once: true });
  else init();
})();


