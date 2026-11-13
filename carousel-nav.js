/* carousel-nav.js
   Adiciona uma setinha (‹ ›) abaixo de cada carrossel horizontal para o usuário
   passar o conteúdo pro lado. Auto detecta, idempotente, acessível e sem dependências.
   Estilo injetado inline; funciona em tema claro e escuro. */
(function(){
  'use strict';
  if (window.__cnavInit) return; window.__cnavInit = true;

  var STYLE_ID = 'cnav-style';
  function injectStyle(){
    if (document.getElementById(STYLE_ID)) return;
    var css = ''
      + '.cnav{display:flex;align-items:center;justify-content:center;gap:10px;margin:10px auto 2px;width:100%}'
      + '.cnav-btn{display:inline-flex;align-items:center;justify-content:center;width:34px;height:34px;'
      + 'border-radius:999px;border:1px solid currentColor;background:transparent;color:inherit;cursor:pointer;'
      + 'opacity:.55;font-size:15px;line-height:1;padding:0;transition:opacity .18s,transform .18s,background .18s;'
      + '-webkit-tap-highlight-color:transparent}'
      + '.cnav-btn:hover:not(:disabled){opacity:1;transform:translateY(-1px)}'
      + '.cnav-btn:disabled{opacity:.16;cursor:default}'
      + '.cnav-btn:focus-visible{outline:2px solid currentColor;outline-offset:2px}'
      + '.cnav-hint{font-family:inherit;font-size:10px;letter-spacing:.14em;text-transform:uppercase;opacity:.45;'
      + 'user-select:none;white-space:nowrap}'
      + '@media (prefers-reduced-motion:reduce){.cnav-btn{transition:none}}';
    var s = document.createElement('style');
    s.id = STYLE_ID; s.textContent = css;
    (document.head || document.documentElement).appendChild(s);
  }

  var SKIP_RE = /(code|snippet|hljs|prism|highlight|shiki|terminal|editor|pre-|table|tbl|json|log)/i;
  function isScrollableX(el){
    if (!el || el.nodeType !== 1) return false;
    if (el.dataset.cnavSkip === '1') return false;
    var tag = el.tagName;
    if (tag === 'PRE' || tag === 'CODE' || tag === 'TABLE' || tag === 'TEXTAREA') return false;
    var cls = (typeof el.className === 'string') ? el.className : '';
    if (SKIP_RE.test(cls)) return false;
    var st = getComputedStyle(el);
    var ox = st.overflowX;
    if (ox !== 'auto' && ox !== 'scroll') return false;
    if (el.clientWidth < 160) return false;
    if ((el.scrollWidth - el.clientWidth) <= 40) return false;
    // um carrossel tem vários itens; blocos de código/texto têm 0 ou 1 filho relevante
    var kids = el.children;
    if (kids.length < 2) return false;
    // se o conteúdo é essencialmente um <pre>/<code>/<table>, não é carrossel
    if (el.querySelector(':scope > pre, :scope > code, :scope > table')) return false;
    return true;
  }

  function updateBtns(rail, prev, next){
    var max = rail.scrollWidth - rail.clientWidth;
    var x = rail.scrollLeft;
    prev.disabled = x <= 6;
    next.disabled = x >= max - 6;
  }

  function attach(rail){
    if (rail.dataset.cnav === '1') return;
    // não anexar se o próximo irmão já é um cnav (reprocessamento)
    rail.dataset.cnav = '1';

    var bar = document.createElement('div');
    bar.className = 'cnav';
    bar.setAttribute('role', 'group');
    bar.setAttribute('aria-label', 'Navegação do carrossel');

    var prev = document.createElement('button');
    prev.type = 'button'; prev.className = 'cnav-btn';
    prev.setAttribute('aria-label', 'Rolar para a esquerda');
    prev.textContent = '‹';

    var next = document.createElement('button');
    next.type = 'button'; next.className = 'cnav-btn';
    next.setAttribute('aria-label', 'Rolar para a direita');
    next.textContent = '›';

    bar.appendChild(prev); bar.appendChild(next);

    function step(dir){
      var amt = Math.max(160, Math.round(rail.clientWidth * 0.85));
      rail.scrollBy({ left: dir * amt, behavior: 'smooth' });
    }
    prev.addEventListener('click', function(){ step(-1); });
    next.addEventListener('click', function(){ step(1); });
    rail.addEventListener('scroll', function(){ updateBtns(rail, prev, next); }, { passive: true });

    // inserir logo após o carrossel
    if (rail.parentNode){
      rail.parentNode.insertBefore(bar, rail.nextSibling);
    }
    rail._cnavBar = bar; rail._cnavPrev = prev; rail._cnavNext = next;
    updateBtns(rail, prev, next);
  }

  function refresh(rail){
    if (rail.dataset.cnav !== '1' || !rail._cnavBar) return;
    // se deixou de rolar (ex.: resize), esconde a barra; senão mostra e atualiza
    var scrollable = (rail.scrollWidth - rail.clientWidth) > 40;
    rail._cnavBar.style.display = scrollable ? '' : 'none';
    if (scrollable) updateBtns(rail, rail._cnavPrev, rail._cnavNext);
  }

  function scan(){
    injectStyle();
    var all = document.querySelectorAll('*');
    for (var i = 0; i < all.length; i++){
      var el = all[i];
      if (el.dataset && el.dataset.cnav === '1'){ refresh(el); continue; }
      if (el.className && typeof el.className === 'string' && el.className.indexOf('cnav') === 0) continue;
      if (isScrollableX(el)) attach(el);
    }
  }

  var raf;
  function scheduleScan(){
    if (raf) cancelAnimationFrame(raf);
    raf = requestAnimationFrame(function(){ try { scan(); } catch(e){} });
  }

  if (document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', scheduleScan);
  } else {
    scheduleScan();
  }
  window.addEventListener('load', function(){ setTimeout(scheduleScan, 250); });
  window.addEventListener('resize', function(){ setTimeout(scheduleScan, 150); });
})();
