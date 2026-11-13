/* Link each institution to existing, evidenced records. */
(()=>{'use strict';
  const home=/\/(?:index(?:\.html)?)?$/.test(location.pathname);
  const lang=()=>document.documentElement.lang.slice(0,2);
  const t=(pt,en,es=en,ja=en)=>({pt,en,es,ja}[lang()]||en);
  function openEvent(id){
    if(typeof EVENTS==='undefined'||typeof openCatModal!=='function')return false;
    const ev=EVENTS.find(item=>item.id===id);if(!ev)return false;
    document.querySelector('#jenJourney [data-jj-close]')?.click();
    openCatModal(ev);
    document.getElementById('relatedEventMeta')?.remove();
    if(id==='itau-data-women'){
      const details=document.createElement('p');details.id='relatedEventMeta';details.setAttribute('data-no-translate','');
      const note=document.createElement('span');note.textContent=t('Live #2 · 23/02 · 19h–20h30 · Carreira em dados e machine learning.','Live #2 · 23 February · 7–8:30 pm · Careers in data and machine learning.','Live #2 · 23/02 · 19–20:30 · Carrera en datos y machine learning.','Live #2 · 2月23日 · 19:00–20:30 · データと機械学習のキャリア。');
      const poster=document.createElement('a');poster.href='fts/img-1614009446942.webp';poster.target='_blank';poster.rel='noopener';poster.textContent=t('Ver cartaz original ↗','View original poster ↗','Ver cartel original ↗','元のポスターを見る ↗');
      details.append(note,poster);document.getElementById('catSub')?.after(details);
    }
    return true;
  }
  function localizeLogos(){
    const group=document.querySelector('.v3-stage-logos');if(!group)return;
    group.setAttribute('data-no-translate','');group.setAttribute('aria-label',t('Eventos por instituição','Events by institution','Eventos por institución','組織別のイベント'));
    group.querySelectorAll('[data-gallery-all]').forEach(a=>{const name=a.querySelector('img')?.alt||'';const label=t('Ver galeria completa · ','View full gallery · ','Ver galería completa · ','ギャラリー全体を見る · ')+name;if(a.getAttribute('aria-label')!==label)a.setAttribute('aria-label',label);});
    const more=group.querySelector('.more');if(more)more.textContent=t('+ eventos ↗','+ events ↗','+ eventos ↗','+ イベント ↗');
  }
  if(home){
    localizeLogos();document.addEventListener('jen:languagechange',localizeLogos);

    document.addEventListener('click',event=>{
      const link=event.target.closest('[data-gallery-all]');
      if(!link||event.ctrlKey||event.metaKey||event.shiftKey||event.altKey)return;
      if(typeof galRender!=='function')return;
      event.preventDefault();
      document.querySelector('#jenJourney [data-jj-close]')?.click();
      while(galShown<GAL_TOTAL)galRender();
      if(location.hash!=='#galeria')location.hash='galeria';
      requestAnimationFrame(()=>document.getElementById('galeria')?.scrollIntoView({behavior:matchMedia('(prefers-reduced-motion:reduce)').matches?'instant':'smooth',block:'start'}));
    },true);
    const requested=new URLSearchParams(location.search).get('event');if(requested)openEvent(requested);
  }
  if(!/\/experiencia(?:\.html)?$/.test(location.pathname))return;
  const destinations={
    'itau-unibanco':[['itau-data-women','Meetup Carreira · Data-Women']],
    ibm:[['ibm-talks','IBM · Nerdzão Day & comunidade']],
    dafiti:[['ibm-talks','IBM Cloud · encontro na GFG (Dafiti)']]
  };
  function related(){
    const hash=decodeURIComponent(location.hash.slice(1)).toLowerCase();
    const list=destinations[hash];document.getElementById('experienceEventLinks')?.remove();if(!list)return;
    const host=document.querySelector('#app .hero-col-text')||document.querySelector('#app>header .in');if(!host)return;
    const row=document.createElement('div');row.id='experienceEventLinks';row.setAttribute('data-no-translate','');
    const label=document.createElement('span');label.textContent=t('Na comunidade','In the community','En la comunidad','コミュニティ活動');row.append(label);
    list.forEach(([id,title])=>{const a=document.createElement('a');a.href='index.html?event='+id+'#eventos';a.textContent=(id==='itau-data-women'?t(title,'Data-Women Career Meetup','Meetup de Carrera Data-Women','Data-Women キャリアミートアップ'):id==='ibm-talks'&&hash==='dafiti'?t(title,'IBM Cloud · GFG (Dafiti) meetup','IBM Cloud · encuentro en GFG (Dafiti)','IBM Cloud · GFG (Dafiti) ミートアップ'):id==='ibm-talks'?t(title,'IBM · Nerdzão Day & community','IBM · Nerdzão Day y comunidad','IBM · Nerdzão Dayとコミュニティ'):title)+' ↗';row.append(a);});host.append(row);
  }
  related();window.addEventListener('hashchange',()=>requestAnimationFrame(related));document.addEventListener('jen:languagechange',()=>requestAnimationFrame(related));
  const app=document.getElementById('app');if(app)new MutationObserver(()=>requestAnimationFrame(related)).observe(app,{childList:true});
})();
