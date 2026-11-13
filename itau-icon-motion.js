(()=>{'use strict';const icons={person:'<circle cx="12" cy="7" r="3"/><path d="M5 21v-3a7 7 0 0 1 14 0v3M2 12h3M19 12h3"/>',people:'<circle cx="8" cy="7" r="3"/><circle cx="18" cy="8" r="2"/><path d="M2 21v-3a6 6 0 0 1 12 0v3M16 14a5 5 0 0 1 6 5v2"/>',bank:'<path d="m2 7 10-5 10 5M3 9h18M5 10v9M10 10v9M15 10v9M20 10v9M2 22h20"/>',compare:'<path d="M2 7h18l-4-4M22 17H4l4 4M10 3v18"/>',chart:'<path d="M3 3v18h18M7 16l5-7 4 4 5-8"/>',pie:'<path d="M12 2v10h10A10 10 0 0 0 12 2ZM8 4a9 9 0 1 0 12 12"/>',calendar:'<rect x="3" y="5" width="18" height="16" rx="3"/><path d="M7 2v6M17 2v6M3 11h18M7 15h3M14 15h3M7 18h3"/>',flow:'<rect x="2" y="3" width="7" height="6" rx="2"/><rect x="15" y="15" width="7" height="6" rx="2"/><path d="M5 9v9h10M9 6h10v9"/>',history:'<path d="M4 8a9 9 0 1 1-1 8M2 3v6h6M12 7v6l4 2"/>',target:'<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/>',shield:'<path d="m12 2 9 4v6c0 5-9 10-9 10S3 17 3 12V6ZM8 12l3 3 5-6"/>'};
function icon(name){const el=document.createElement('span');el.className='itau-motion-icon';el.setAttribute('aria-hidden','true');el.innerHTML=`<svg viewBox="0 0 24 24">${icons[name]||icons.flow}</svg>`;return el;}
document.querySelectorAll('.of-dashboard .kpi').forEach((el,i)=>el.prepend(icon(['person','people','bank','compare'][i])));
document.querySelectorAll('.of-panel-head').forEach((el,i)=>el.prepend(icon(['chart','pie','calendar','flow'][i])));
document.querySelector('.pitch-context')?.prepend(icon('target'));
document.querySelectorAll('.pitch-flow .pipe-icon').forEach((el,i)=>el.replaceChildren(icon(['compare','history','compare','target','shield'][i])));
document.querySelectorAll('.bank-satellite>span').forEach(el=>el.replaceChildren(icon('bank')));
const core=document.querySelector('.orbit-core');if(core){[...core.childNodes].filter(n=>n.nodeType===3).forEach(n=>n.remove());core.prepend(icon('target'));}
const reduce=()=>matchMedia('(prefers-reduced-motion:reduce)').matches||document.body.dataset.motion==='reduzido';
const observer=new IntersectionObserver(entries=>entries.forEach(e=>{e.target.classList.toggle('itau-icon-active',e.isIntersecting&&!reduce());if(e.isIntersecting)e.target.classList.add('itau-icon-ready');}),{threshold:.15});
document.querySelectorAll('.itau-motion-icon').forEach(el=>observer.observe(el));
new MutationObserver(()=>{if(reduce())document.querySelectorAll('.itau-icon-active').forEach(el=>el.classList.remove('itau-icon-active'));}).observe(document.body,{attributes:true,attributeFilter:['data-motion']});
})();
