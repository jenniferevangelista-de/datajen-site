/* nav-scroll.js
   Aterra o menu flutuante do topo: ao rolar, aparece um backdrop translúcido de
   largura total atrás do nav, pra o conteúdo não passar atrás do menu fixo.
   No topo/hero o nav segue transparente. Mesmo comportamento da home. */
(function(){
  'use strict';
  if (window.__navScrollInit) return; window.__navScrollInit = true;

  var css = ''
    + 'nav::before{content:"";position:fixed;left:0;right:0;top:0;height:94px;z-index:-1;pointer-events:none;'
    + 'background:rgba(244,242,236,.86);backdrop-filter:blur(14px);-webkit-backdrop-filter:blur(14px);'
    + 'border-bottom:1px solid rgba(30,26,18,.10);box-shadow:0 6px 24px rgba(30,26,18,.07);'
    + 'opacity:0;transition:opacity .3s ease}'
    + 'nav.scrolled::before{opacity:1}'
    + 'body[data-palette="noite"] nav::before{background:rgba(17,15,9,.88);border-bottom-color:rgba(255,255,255,.08)}'
    + 'body[data-glass="off"] nav::before{backdrop-filter:none;-webkit-backdrop-filter:none;background:rgba(244,242,236,.98)}'
    + 'body[data-palette="noite"][data-glass="off"] nav::before{background:rgba(17,15,9,.98)}'
    + '@media(prefers-reduced-motion:reduce){nav::before{transition:none}}';

  function inject(){
    if (document.getElementById('nav-scroll-style')) return;
    var s = document.createElement('style');
    s.id = 'nav-scroll-style'; s.textContent = css;
    (document.head || document.documentElement).appendChild(s);
  }

  var nav;
  function sync(){
    if (!nav) nav = document.querySelector('nav');
    if (nav) nav.classList.toggle('scrolled', (window.scrollY || document.documentElement.scrollTop || 0) > 30);
  }
  function start(){
    // The shared opaque header already handles scrolling. Never apply the old
    // full-width nav backdrop to section indexes, footer links or mega menus.
    if (document.querySelector('script[src*="portfolio-nav.js"]')) return;
    inject();
    nav = document.querySelector('nav');
    sync();
    window.addEventListener('scroll', sync, { passive: true });
    window.addEventListener('resize', sync, { passive: true });
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start);
  else start();
})();
