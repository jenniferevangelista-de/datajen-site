(function(){
  'use strict';

  function init(){
    if(!document.querySelector('main,[role="main"]')){
      var candidate=document.querySelector('#app,.main,.content,.page-content,.wrap,section');
      if(candidate){candidate.setAttribute('role','main');candidate.id=candidate.id||'conteudo-principal';}
    }

    if(/^https?:$/.test(location.protocol)){
      var absoluteUrl=new URL(location.pathname,location.origin).href;
      var canonical=document.querySelector('link[rel="canonical"]');
      if(!canonical){canonical=document.createElement('link');canonical.rel='canonical';document.head.appendChild(canonical);}
      canonical.href=absoluteUrl;
      var ogUrl=document.querySelector('meta[property="og:url"]');
      if(!ogUrl){ogUrl=document.createElement('meta');ogUrl.setAttribute('property','og:url');document.head.appendChild(ogUrl);}
      ogUrl.content=absoluteUrl;
      document.querySelectorAll('meta[property="og:image"],meta[name="twitter:image"]').forEach(function(meta){
        if(meta.content)meta.content=new URL(meta.content,location.href).href;
      });
      document.querySelectorAll('script[type="application/ld+json"]').forEach(function(script){
        try{
          var schema=JSON.parse(script.textContent);
          if(schema.image)schema.image=new URL(schema.image,location.href).href;
          if(!schema.url&&schema['@type']==='Person')schema.url=absoluteUrl;
          script.textContent=JSON.stringify(schema);
        }catch(_){}
      });
    }

    document.querySelectorAll('button:not([type])').forEach(function(button){
      button.type='button';
    });

    document.querySelectorAll('button').forEach(function(button,index){
      if(button.hasAttribute('aria-label')||button.hasAttribute('aria-labelledby'))return;
      var label=(button.getAttribute('title')||button.textContent||'').replace(/\s+/g,' ').trim();
      if(label)button.setAttribute('aria-label',label);
      else button.setAttribute('aria-label','Ação '+(index+1));
    });

    document.querySelectorAll('[data-lang]').forEach(function(control){
      if(!control.hasAttribute('aria-label')){
        var language=control.getAttribute('data-lang')||'';
        control.setAttribute('aria-label','Selecionar idioma '+language.toUpperCase());
      }
    });

    var slideDots=document.querySelectorAll('.mob-pi-dot');
    slideDots.forEach(function(dot,index){
      if(!dot.hasAttribute('aria-label'))dot.setAttribute('aria-label','Exibir slide '+(index+1)+' de '+slideDots.length);
    });

    var mobileClose=document.getElementById('mobClose');
    if(mobileClose&&!mobileClose.hasAttribute('aria-label'))mobileClose.setAttribute('aria-label','Fechar menu');

    document.querySelectorAll('a[target="_blank"]').forEach(function(link){
      var rel=new Set((link.getAttribute('rel')||'').split(/\s+/).filter(Boolean));
      rel.add('noopener');rel.add('noreferrer');
      link.setAttribute('rel',Array.from(rel).join(' '));
    });

    var main=document.querySelector('main,[role="main"]');
    if(main){
      if(!main.id)main.id='conteudo-principal';
      if(!document.querySelector('.skip-link')){
        var skip=document.createElement('a');
        skip.className='skip-link';skip.href='#'+main.id;
        skip.textContent='Pular para o conteúdo principal';
        document.body.insertBefore(skip,document.body.firstChild);
      }
    }

    var navToggles=document.querySelectorAll('.nav-cases-toggle,.nav-traj-toggle');
    navToggles.forEach(function(toggle,index){
      var popup=toggle.nextElementSibling;
      if(!popup)return;
      if(!popup.id)popup.id='menu-suspenso-'+index;
      toggle.setAttribute('aria-controls',popup.id);
      toggle.setAttribute('aria-haspopup','true');
      var owner=toggle.parentElement;
      if(!(owner instanceof Node))return;
      var sync=function(){toggle.setAttribute('aria-expanded',String(owner.classList.contains('open')));};
      new MutationObserver(sync).observe(owner,{attributes:true,attributeFilter:['class']});
      sync();
    });

    document.querySelectorAll('.mob-acc-btn[data-target]').forEach(function(toggle){
      var target=toggle.getAttribute('data-target');
      toggle.setAttribute('aria-controls',target);
      if(!(toggle instanceof Node))return;
      var sync=function(){toggle.setAttribute('aria-expanded',String(toggle.classList.contains('open')));};
      new MutationObserver(sync).observe(toggle,{attributes:true,attributeFilter:['class']});
      sync();
    });

    var mobileButton=document.querySelector('.mob-hamburger,.hamburger');
    var mobilePanel=document.getElementById('mobVeil');
    if(mobileButton&&mobilePanel){
      mobileButton.setAttribute('aria-controls','mobVeil');
      mobileButton.setAttribute('aria-expanded','false');
      var syncMobile=function(){
        var open=mobilePanel.classList.contains('open');
        mobileButton.setAttribute('aria-expanded',String(open));
        mobileButton.setAttribute('aria-label',open?'Fechar menu':'Abrir menu');
      };
      new MutationObserver(syncMobile).observe(mobilePanel,{attributes:true,attributeFilter:['class']});
      syncMobile();
      document.addEventListener('keydown',function(event){
        if(event.key==='Escape'&&mobilePanel.classList.contains('open')){
          var close=document.getElementById('mobClose');
          if(close)close.click();
        }
      });
    }
  }

  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);
  else init();
})();
