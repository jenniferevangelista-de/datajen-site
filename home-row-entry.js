/* Actual visual rows enter together, once; scrolling back never hides them. */
(()=>{
  'use strict';
  const groups=new Map(), entered=new WeakSet(), rows=new Map();
  const reduced=()=>matchMedia('(prefers-reduced-motion:reduce)').matches||document.body.dataset.motion==='reduzido';
  let scheduled=0;
  function show(items){
    const start=document.timeline.currentTime;
    items.forEach(el=>{
      if(entered.has(el))return;
      entered.add(el);delete el.dataset.galleryEnter;el.dataset.rowEntered='true';
      if(!reduced()){
        const animation=el.animate([{opacity:0,translate:'0 18px'},{opacity:1,translate:'0 0'}],
          {duration:650,easing:'cubic-bezier(.16,1,.3,1)',fill:'backwards'});
        animation.startTime=start;
      }
    });
  }
  const observer='IntersectionObserver'in window?new IntersectionObserver(entries=>{
    entries.filter(e=>e.isIntersecting).forEach(e=>{
      const items=rows.get(e.target);if(items)show(items);
      observer.unobserve(e.target);rows.delete(e.target);
    });
  },{threshold:.03,rootMargin:'0px 0px -5% 0px'}):null;
  function rebuild(){
    scheduled=0;observer?.disconnect();rows.clear();
    groups.forEach((gallery,group)=>{
      if(!group.isConnected){groups.delete(group);return;}
      const candidates=Array.from(group.children).filter(el=>!gallery||el.matches('.mf-frame'));
      const visualRows=[];
      // Batch geometry reads to avoid a layout for each card.
      candidates.forEach(el=>{
        if(entered.has(el))return;
        const box=el.getBoundingClientRect();if(!box.width||!box.height)return;
        let row=visualRows.find(r=>Math.abs(r.top-box.top)<4);
        if(!row){row={top:box.top,items:[]};visualRows.push(row);}
        row.items.push(el);
      });
      visualRows.forEach(row=>{
        if(reduced()||!observer){show(row.items);return;}
        row.items.forEach(el=>{el.classList.add('home-row-item');el.dataset.galleryEnter='pending';});
        rows.set(row.items[0],row.items);observer.observe(row.items[0]);
      });
    });
  }
  const queue=()=>{if(!scheduled)scheduled=requestAnimationFrame(rebuild);};
  const resize='ResizeObserver'in window?new ResizeObserver(queue):null;
  function register(group,{gallery=false}={}){
    if(!groups.has(group)){
      groups.set(group,gallery);resize?.observe(group);
      new MutationObserver(queue).observe(group,{childList:true});
    }
    queue();
  }
  window.JenRowReveal={register};
  document.querySelectorAll('.home-row-group').forEach(group=>register(group));
  const gallery=document.getElementById('mfGal');if(gallery)register(gallery,{gallery:true});
  document.addEventListener('toggle',queue,true);
  window.addEventListener('resize',queue,{passive:true});
  new MutationObserver(()=>{if(reduced()){
    groups.forEach((_,group)=>{show(Array.from(group.querySelectorAll('[data-gallery-enter]')));
      group.getAnimations({subtree:true}).forEach(animation=>animation.finish());});
  }else queue();}).observe(document.body,{attributes:true,attributeFilter:['data-motion']});
})();
