/* A composited highlight animates the charts without redrawing their data. */
(()=>{
'use strict';
const plots=[...document.querySelectorAll('.chart-plot')];if(!plots.length)return;
const style=document.createElement('style');style.textContent='.chart-plot{isolation:isolate;overflow:hidden}.chart-plot::after{content:"";position:absolute;inset:0;pointer-events:none;background:linear-gradient(105deg,transparent 35%,rgba(255,255,255,.18) 50%,transparent 65%);transform:translateX(-110%);animation:chartSheen 7s ease-in-out infinite;animation-play-state:paused}.chart-plot.chart-motion-active::after{animation-play-state:running}@keyframes chartSheen{0%,25%{transform:translateX(-110%)}75%,100%{transform:translateX(110%)}}@media(prefers-reduced-motion:reduce){.chart-plot::after{animation:none}}';document.head.append(style);
const media=matchMedia('(prefers-reduced-motion: reduce)'),visible=new Set();let paused=false;
const copy={pt:['Pausar animações','Retomar animações'],en:['Pause animations','Resume animations'],es:['Pausar animaciones','Reanudar animaciones'],ja:['アニメーションを停止','アニメーションを再開']};
const control=document.createElement('button');control.type='button';control.className='context-info-btn chart-motion-control';control.dataset.noTranslate='';document.querySelector('.dh-right')?.append(control);
function sync(){const reduced=media.matches||document.body.dataset.motion==='reduzido',stopped=paused||reduced;const label=(copy[(document.documentElement.lang||'pt').slice(0,2)]||copy.en)[stopped?1:0];if(control.textContent!==label)control.textContent=label;const pressed=String(stopped);if(control.getAttribute('aria-pressed')!==pressed)control.setAttribute('aria-pressed',pressed);plots.forEach(plot=>plot.classList.toggle('chart-motion-active',!stopped&&!document.hidden&&visible.has(plot)));}
control.addEventListener('click',()=>{paused=!paused;sync();});
const observer=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting)visible.add(entry.target);else visible.delete(entry.target);});sync();},{threshold:.12});plots.forEach(plot=>observer.observe(plot));
media.addEventListener('change',sync);document.addEventListener('visibilitychange',sync);document.addEventListener('jen:languagechange',sync);new MutationObserver(sync).observe(document.body,{attributes:true,attributeFilter:['data-motion']});sync();
})();
