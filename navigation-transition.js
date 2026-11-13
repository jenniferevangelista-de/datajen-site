(()=>{
  'use strict';
  if(self!==top||document.documentElement.matches('.embed-mode,.in-iframe')||new URLSearchParams(location.search).has('embed'))return;
  const root=document.documentElement;
  const reduced=()=>matchMedia('(prefers-reduced-motion:reduce)').matches||document.body?.dataset.motion==='reduzido';
  let navigating=false,revealTimer;
  function reveal(){clearTimeout(revealTimer);if(navigating)return;root.classList.remove('jen-page-leaving');root.classList.add('jen-page-ready');}
  async function ready(){
    const fonts=document.fonts?.ready?.catch(()=>{});
    await Promise.race([fonts||Promise.resolve(),new Promise(resolve=>setTimeout(resolve,800))]);
    requestAnimationFrame(()=>requestAnimationFrame(reveal));
  }
  revealTimer=setTimeout(reveal,3500);
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',ready,{once:true});else ready();
  window.addEventListener('pageshow',event=>{if(event.persisted){navigating=false;reveal();}});
  document.addEventListener('click',event=>{
    if(event.defaultPrevented||event.button!==0||event.metaKey||event.ctrlKey||event.shiftKey||event.altKey)return;
    const link=event.target.closest('a[href]');
    if(!link||link.hasAttribute('download')||link.target&&link.target!=='_self'||link.dataset.noTransition!==undefined)return;
    let target;try{target=new URL(link.href,location.href);}catch{return;}
    if(!/^https?:$/.test(target.protocol)||target.origin!==location.origin)return;
    if(target.pathname===location.pathname&&target.search===location.search)return;
    const filename=target.pathname.split('/').pop();
    if(filename.includes('.')&&!/\.html?$/i.test(filename))return;
    if(navigating){event.preventDefault();return;}
    event.preventDefault();navigating=true;clearTimeout(revealTimer);
    root.classList.add('jen-page-leaving');
    setTimeout(()=>location.assign(target.href),reduced()?0:240);
    // A failed or cancelled navigation must never leave an unusable page.
    revealTimer=setTimeout(()=>{navigating=false;reveal();},6500);
  });
})();
