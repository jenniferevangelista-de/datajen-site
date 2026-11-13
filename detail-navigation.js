(function () {
  'use strict';
  if (window.self !== window.top) return;
  // Only navigation is shared. Each demo retains its own layout and interactions.
  window.PortfolioDetailNavigation = true;
  function start() {
    document.documentElement.classList.add('detail-document');
    document.body.classList.add('detail-page');
    let pageName = location.pathname.split('/').pop();
    if(pageName&&!/\.html?$/.test(pageName))pageName+='.html';
    const isExperience = pageName === 'experiencia.html';
    const isCase = isExperience || /^cases(?:-[a-z]+)?\.html$/.test(pageName);
    if (isCase) document.body.classList.add('detail-page--case');
    else document.body.classList.add('detail-page--app');
    if (isExperience) document.body.classList.add('detail-page--experience');
    const brands = [
      [/itau/, 'Itaú Unibanco', '#ec7000', '#291300'],
      [/petrobras/, 'Petrobras', '#006c42', '#ffffff'],
      [/fiap/, 'FIAP', '#c9004c', '#ffffff'],
      [/^cases\.html$|politicard/, 'PolitiCard', '#432676', '#ffffff'],
      [/heineken/, 'Heineken', '#00743b', '#ffffff'],
      [/carrefour/, 'Carrefour', '#164194', '#ffffff'],
      [/santander/, 'Santander', '#cf1626', '#ffffff'],
      [/creditas/, 'Creditas', '#075b43', '#ffffff'],
      [/cogna/, 'Cogna Educação', '#7325b0', '#ffffff'],
      [/ibm/, 'IBM', '#0f62fe', '#ffffff'],
      [/oracle/, 'Oracle', '#b8332b', '#ffffff'],
      [/dafiti/, 'Dafiti', '#252525', '#ffffff'],
      [/quintoandar/, 'QuintoAndar', '#4c32b5', '#ffffff'],
      [/serasa/, 'Serasa Experian', '#6425a0', '#ffffff'],
      [/cetip|b3/, 'B3', '#004896', '#ffffff'],
      [/iara|natura/, 'Natura · Iara', '#98490e', '#ffffff'],
      [/jellyfish/, 'Jellyfish', '#253c75', '#ffffff'],
      [/borarachar/, 'Bora Rachar', '#3e2b7d', '#ffffff']
    ];
    let brand;
    function syncBrand() {
      const company = isExperience ? document.getElementById('app')?.dataset.company || location.hash.slice(1) : pageName;
      brand = brands.find(item => item[0].test(company));
      if (brand) {
        document.body.classList.add('detail-page--branded');
        document.body.style.setProperty('--detail-brand', brand[2]);
        document.body.style.setProperty('--detail-brand-ink', brand[3]);
      }
    }
    syncBrand();
    if (pageName==='experiencia-app.html') document.body.classList.add('detail-page--experience-app');
    if (pageName==='carrefour-datacatalog-app.html') document.body.classList.add('detail-page--catalog');
    if (pageName==='santander-data-mobile.html') document.body.classList.add('detail-page--santander-mobile');
    if (pageName==='ibm-integration-mobile.html') document.body.classList.add('detail-page--ibm-mobile');
    const topbar = document.querySelector('body>.topbar');
    if (topbar && getComputedStyle(topbar).position === 'relative') document.body.classList.add('detail-relative-topbar');
    const rail = document.createElement('aside');
    rail.className = 'detail-index';
    rail.setAttribute('aria-label', 'Navegação desta página');
    const toggle = document.createElement('button');
    toggle.type = 'button'; toggle.className = 'detail-index__toggle';
    toggle.setAttribute('aria-label', 'Navegação desta página');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-controls', 'detail-index-links');
    toggle.innerHTML = '<span aria-hidden="true">☰</span><span class="detail-index__caption">Nesta página</span><span class="detail-index__arrow" aria-hidden="true">⌄</span>';
    const list = document.createElement('nav'); list.id = 'detail-index-links'; list.className = 'detail-index__links';
    list.setAttribute('aria-label', 'Seções desta página');
    rail.append(toggle, list);
    document.body.insertBefore(rail, document.body.firstChild);
    const onboarding = document.querySelector('.factory-onboarding');
    function syncOnboarding() {
      if (onboarding && matchMedia('(max-width: 1739px)').matches) onboarding.style.top = rail.getBoundingClientRect().bottom + 'px';
      else if (onboarding) onboarding.style.top = '';
    }
    if (onboarding) {
      new ResizeObserver(syncOnboarding).observe(rail);
      window.addEventListener('resize', syncOnboarding);
      window.addEventListener('scroll', syncOnboarding, {passive:true});
    }
    let targets = [], frame = 0, pendingNavigation = null, settleTimer = 0;
    const open = value => { rail.classList.toggle('is-open', value); toggle.setAttribute('aria-expanded', String(value)); };
    toggle.addEventListener('click', () => {
      const expanding = !rail.classList.contains('is-open');
      open(expanding);
      // If opened near the bottom of a phone screen, bring the entire local
      // menu below the header instead of leaving most choices off-screen.
      if (isExperience && expanding && getComputedStyle(rail).position === 'sticky') {
        const headerBottom = document.getElementById('portfolioNav')?.getBoundingClientRect().bottom || 62;
        const delta = rail.getBoundingClientRect().top - headerBottom;
        if (delta > 1) window.scrollTo({top:window.scrollY + delta, behavior:'instant'});
      }
    });
    document.addEventListener('click', event => { if (!rail.contains(event.target)) open(false); });
    document.addEventListener('keydown', event => { if (event.key === 'Escape' && rail.classList.contains('is-open')) { open(false); toggle.focus(); } });
    const excluded = '.detail-index,.portfolio-nav,.portfolio-mega,.portfolio-drawer,.mob-veil,.mob-drawer,.case-rail,.chat,.chat-box,.twk-panel,footer,[hidden]';
    function setActive(active) {
      targets.forEach(item => {
        item.link.classList.toggle('is-active', item === active);
        if (item === active) item.link.setAttribute('aria-current', 'location'); else item.link.removeAttribute('aria-current');
      });
    }
    function sectionOffset() {
      const header = document.getElementById('portfolioNav');
      const headerBottom = header ? Math.max(0, header.getBoundingClientRect().bottom) : 62;
      const localMenuHeight = getComputedStyle(rail).position === 'sticky' ? toggle.getBoundingClientRect().height : 0;
      return headerBottom + localMenuHeight + 16;
    }
    function updateActive() {
      frame = 0;
      if (rail.classList.contains('is-open') || pendingNavigation) return;
      const visible = targets.filter(item => item.target.isConnected && item.target.getClientRects().length);
      // The overview stays neutral. Highlight real sections only as they are reached.
      let active = null;
      const boundary = sectionOffset() + 2;
      for (const item of visible) {
        if (item !== targets[0] && item.target.getBoundingClientRect().top <= boundary) active = item;
      }
      if (window.scrollY > 0 && window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 2) {
        active = visible.length > 1 ? visible[visible.length - 1] : null;
      }
      setActive(active);
    }
    function finishNavigation() {
      clearTimeout(settleTimer);
      pendingNavigation = null;
      updateActive();
    }
    function deferNavigationEnd() {
      clearTimeout(settleTimer);
      settleTimer = setTimeout(finishNavigation, 180);
    }
    function navigateTo(item) {
      if (!item) return;
      open(false);
      pendingNavigation = item;
      setActive(item === targets[0] ? null : item);
      // A collapsed mobile link must not keep focus and pull the viewport back
      // into the menu. Move reading/keyboard focus to the chosen section first.
      item.target.setAttribute('tabindex', '-1');
      item.target.focus({preventScroll:true});
      // Measure after the mobile menu closes. Use one real occlusion offset,
      // rather than adding scroll-margin and scroll-padding a second time.
      const destination = item === targets[0] ? 0 : window.scrollY + item.target.getBoundingClientRect().top - sectionOffset();
      const maxScroll = Math.max(0, document.documentElement.scrollHeight - window.innerHeight);
      deferNavigationEnd();
      const reducedMotion = document.body.dataset.motion === 'reduzido' || matchMedia('(prefers-reduced-motion: reduce)').matches;
      window.scrollTo({top:Math.max(0, Math.min(destination, maxScroll)), behavior:reducedMotion ? 'instant' : 'smooth'});
    }
    document.addEventListener('click', event => {
      if (!isCase || event.defaultPrevented || event.button > 0 || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
      const link = event.target.closest('a[href^="#"]');
      if (!link || rail.contains(link) || (link.target && link.target !== '_self')) return;
      let id;
      try { id = decodeURIComponent(link.getAttribute('href').slice(1)); } catch (_) { return; }
      const item = targets.find(target => target.target.id === id);
      if (item) { event.preventDefault(); navigateTo(item); }
    });
    function refresh() {
      syncBrand();
      clearTimeout(settleTimer);
      pendingNavigation = null;
      // Each company render replaces #app. Reattach the same menu (and its
      // handlers) below the full-width opening, never beside or over the hero.
      const workspace = isExperience && document.getElementById('experience-workspace');
      if (workspace && rail.parentNode !== workspace) workspace.insertBefore(rail, workspace.firstChild);
      const legacy = Array.from(document.querySelectorAll('#caseRail a[data-target]'));
      let entries = Array.from(document.querySelectorAll('[data-case-section]')).map(target => ({target, label:target.dataset.caseSection}));
      if (!entries.length) entries = legacy.map(link => ({target:document.getElementById(link.dataset.target), label:link.querySelector('.cr-lbl')?.textContent || link.textContent})).filter(item => item.target);
      if (!entries.length) {
        const seen = new Set();
        entries = Array.from(document.querySelectorAll(isCase ? 'h1,h2,h3,.eng-note-head,.section-title,.sec-title' : 'h1,h2,.section-title,.sec-title'))
          .filter(el => !el.closest(excluded) && el.getClientRects().length && el.textContent.trim())
          .map(el => ({target:el, label:el.matches('h1') ? 'Visão geral' : el.textContent.trim().replace(/\s+/g, ' ')}))
          .filter(item => { if (seen.has(item.label)) return false; seen.add(item.label); return true; });
      }
      const title = document.createElement('span'); title.className = 'detail-index__title'; title.textContent = brand ? brand[1] + ' · explorar' : 'Explorar';
      list.replaceChildren(title); targets = [];
      entries.slice(0, 18).forEach((item, index) => {
        if (!item.target.id) item.target.id = 'detail-section-' + (index + 1);
        const link = document.createElement('a'); link.href = '#' + item.target.id;
        link.textContent = item.label.replace(/^\/\/\s*/, '');
        link.addEventListener('click', event => {
          event.preventDefault();
          // Company slugs remain in the URL; section navigation never replaces them.
          navigateTo(targets.find(target => target.link === link));
        });
        list.append(link); targets.push({...item,link});
      });
      const back = document.createElement('a'); back.className = 'detail-index__back'; back.href = /itau-/.test(pageName) ? 'cases-itau.html' : 'index.html#secao-trajetoria'; back.textContent = /itau-/.test(pageName) ? '← Voltar ao case' : '← Voltar à trajetória';
      list.append(back); updateActive();
    }
    window.addEventListener('scroll', () => {
      if (pendingNavigation) deferNavigationEnd();
      if (!frame) frame = requestAnimationFrame(updateActive);
    }, {passive:true});
    window.addEventListener('scrollend', finishNavigation, {passive:true});
    window.addEventListener('wheel', () => { if (pendingNavigation) finishNavigation(); }, {passive:true});
    window.addEventListener('touchstart', () => { if (pendingNavigation) finishNavigation(); }, {passive:true});
    document.addEventListener('keydown', event => {
      if (pendingNavigation && ['ArrowUp','ArrowDown','PageUp','PageDown','Home','End',' '].includes(event.key) && !event.target.closest('input,textarea,select,[contenteditable="true"]')) finishNavigation();
    });
    window.addEventListener('resize', updateActive);
    // The company renderer handles hashchange first. Refresh immediately: a
    // queued frame could otherwise close a mobile menu the visitor just opened.
    window.addEventListener('hashchange', () => { open(false); refresh(); });
    const app = document.getElementById('app');
    if (app) new MutationObserver(records => { if (records.some(record => record.type === 'childList' && record.target === app)) refresh(); }).observe(app, {childList:true});
    refresh();
    document.addEventListener('portfolio:languagechange', refresh);
    document.addEventListener('jen:languagechange', refresh);
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start); else start();
})();
