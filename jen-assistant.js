(function () {
  'use strict';
  const input = document.querySelector('#cinput,#chatIn,#cIn');
  const panel = input?.closest('.chat,.chat-box');
  if (!panel || !globalThis.JenRetrieval) return;
  const body = panel.querySelector('#cbody,#chatBody,#cBody');
  const quick = panel.querySelector('#cquick,#chatQuick,#cQuick');
  const send = input.parentElement.querySelector('button');
  const launcher = document.querySelector('#fab,#fabBtn,#chatFab');
  let callout = null;
  if (launcher) {
    callout = document.createElement('button');
    callout.type = 'button';callout.className = 'jen-launcher-callout';
    callout.setAttribute('aria-controls',panel.id);
    callout.setAttribute('data-no-translate','');
    callout.addEventListener('click',()=>launcher.click());
    launcher.insertAdjacentElement('afterend',callout);
  }
  let enginePromise, busy = false;
  const history = [];
  const endpoint = globalThis.JEN_AI_CONFIG?.endpoint === '/api/jen-chat' ? '/api/jen-chat' : null;
  panel.classList.add('jen-assistant');
  panel.setAttribute('data-no-translate','');
  const isEnglish=()=>document.documentElement.lang==='en';
  const ui=(pt,en)=>globalThis.JenResources?.ui(pt,en)||(isEnglish()?en:pt);
  panel.setAttribute('role', 'dialog'); panel.setAttribute('aria-label', 'JEN IA · Assistente do portfólio');
  body.setAttribute('role', 'log'); body.setAttribute('aria-live', 'polite'); body.setAttribute('aria-relevant', 'additions');
  input.maxLength = 1200; input.placeholder = 'Qual é o seu desafio?';
  input.setAttribute('aria-label', 'Pergunte à JEN IA');
  const status = panel.querySelector('.chead .s,#chatSub');
  if (status) { status.removeAttribute('data-i18n'); status.textContent = endpoint ? 'IA + fontes do portfólio' : 'busca local no portfólio'; }
  const header = panel.querySelector('.chead,.chat-head');
  if (header && !header.querySelector('button')) {
    const close = document.createElement('button'); close.type = 'button'; close.className = 'jen-close'; close.textContent = '×'; close.setAttribute('aria-label', 'Fechar JEN IA');
    close.onclick = () => { panel.classList.remove('open'); launcher?.setAttribute('aria-expanded', 'false'); launcher?.focus(); };
    header.appendChild(close);
  }
  function engine() {
    if (enginePromise) return enginePromise;
    enginePromise = new Promise((resolve, reject) => {
      if (globalThis.JEN_KNOWLEDGE) return resolve(JenRetrieval.createEngine(JEN_KNOWLEDGE));
      const script = document.createElement('script'); script.src = 'assets/jen-knowledge.js?v=20261028-case-feedback';
      script.onload = () => resolve(JenRetrieval.createEngine(JEN_KNOWLEDGE));
      script.onerror = () => { enginePromise = null; script.remove(); reject(new Error('knowledge-load')); };
      document.head.appendChild(script);
    });
    return enginePromise;
  }
  function safeLink(link) {
    try {
      const url = new URL(link.href, location.href);
      return ['https:', 'mailto:'].includes(url.protocol) || (url.origin === location.origin && ['http:', 'file:'].includes(url.protocol)) ? url.href : null;
    } catch (_) { return null; }
  }
  function append(text, who = 'bot', response) {
    const message = document.createElement('div'); message.className = 'm cm ' + who;
    const copy = document.createElement('div'); copy.className = 'jen-copy'; copy.textContent = text;
    message.appendChild(copy);
    if (response) {
      if (response.sources?.length) {
        const sources = document.createElement('div'); sources.className = 'jen-sources';
        const label = document.createElement('span'); label.textContent = ui('Fontes do portfólio','Portfolio sources'); sources.appendChild(label);
        response.sources.forEach(source => {
          const href = safeLink(source); if (!href) return;
          const a = document.createElement('a'); a.href = href; a.textContent = source.title; sources.appendChild(a);
        });
        message.appendChild(sources);
      }
      [response.cta, ...(response.links || [])].filter(Boolean).forEach(link => {
        const href = safeLink(link); if (!href) return;
        const a = document.createElement('a'); a.className = 'jen-cta'; a.href = href; a.textContent = link.title + ' →'; a.rel = 'noopener'; if(link.download)a.download=link.download; message.appendChild(a);
      });
    }
    if(who==='bot' && globalThis.JenResources){
      const menu=document.createElement('div');menu.className='jen-resource-options';
      const hint=document.createElement('p');hint.textContent=ui('Entre em contato com Jennifer ou escolha uma opção. Você também pode digitar o número.','Contact Jennifer or choose an option. You can also type its number.');menu.append(hint);
      globalThis.JenResources.options().forEach(item=>{const b=document.createElement('button');b.type='button';b.dataset.jenResource=item.id;b.textContent=item.label;b.addEventListener('click',()=>ask(item.id));menu.append(b);});message.append(menu);
    }
    body.appendChild(message); body.scrollTop = body.scrollHeight;
    return message;
  }
  async function ask(question, suppliedContext) {
    const q = String(question || '').trim().slice(0, 1200);
    if (!q || busy) return;
    busy = true; send.disabled = true; input.value = ''; body.setAttribute('aria-busy', 'true');
    append(q, 'user');
    if(quick)quick.hidden=true;
    const pending = append(ui('Buscando nas experiências e fontes do site…','Searching portfolio sources…'));
    let answerMessage;
    const previous = history.slice(-20);
    try {
      let response = suppliedContext && typeof suppliedContext.text === 'string' ? { text: String(suppliedContext.title||'').slice(0,180) + '\n\n' + suppliedContext.text.slice(0,1200), sources:[{title:String(suppliedContext.title||'Trecho do portfólio'),href:String(suppliedContext.href||'index.html')}],grounded:false } : globalThis.JenResources?.reply(q,previous);
      if(!response){const local=await engine();response=local.reply(q,previous);}
      if (endpoint && response.grounded === true) {
        try {
          const api = await fetch(endpoint, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ question: q, history: previous.slice(-4) }), signal: AbortSignal.timeout(25000) });
          if (!api.ok) throw new Error('api-unavailable');
          const generated = await api.json();
          if (typeof generated.text === 'string' && generated.text.length) response = generated;
        } catch (_) { response.notice = 'IA generativa indisponível neste momento; resposta da base local.'; }
      }
      pending.remove();
      response = globalThis.JenResources?.enhance(response,q,previous) || response;
      answerMessage = append(response.text, 'bot', response);
      if (response.notice) { const note = document.createElement('div'); note.className = 'jen-note'; note.textContent = response.notice; body.appendChild(note); }
      history.push({ role: 'user', content: q }, { role: 'assistant', content: response.text.slice(0, 2200) });
      if (history.length > 20) history.splice(0, history.length - 20);
    } catch (_) {
      pending.remove(); answerMessage = append('A base não carregou agora. Você pode tentar novamente ou conversar diretamente com Jennifer sobre seu desafio.', 'bot', globalThis.JenResources?.enhance({},q) || { cta: { title: 'Conversar com Jennifer', href: 'mailto:jenniferevangelista.code@gmail.com' } });
    } finally {
      busy = false; send.disabled = false; body.setAttribute('aria-busy', 'false'); input.focus({ preventScroll: true });
      // Start long answers at their beginning, rather than hiding the substance above the sources.
      if (answerMessage) body.scrollTop += answerMessage.getBoundingClientRect().top - body.getBoundingClientRect().top - 12;
    }
  }
  // Capture before legacy handlers, so one question always produces exactly one answer.
  panel.addEventListener('click', event => {
    const button = event.target.closest('button');
    if (button === send || (button && quick?.contains(button))) {
      event.preventDefault(); event.stopImmediatePropagation(); ask(button === send ? input.value : button.textContent);
    }
  }, true);
  panel.addEventListener('keydown', event => {
    if (event.target === input && event.key === 'Enter' && !event.isComposing) { event.preventDefault(); event.stopImmediatePropagation(); ask(input.value); }
  }, true);
  launcher?.addEventListener('click', event => {
    event.preventDefault();event.stopImmediatePropagation();
    const open=!panel.classList.contains('open');
    panel.classList.toggle('open',open);
    launcher.setAttribute('aria-expanded',String(open));
    if(open){engine().catch(()=>{});input.focus();}
  },true);
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && panel.classList.contains('open')) { panel.classList.remove('open'); launcher?.setAttribute('aria-expanded', 'false'); launcher?.focus(); }
  });
  body.replaceChildren();
  append('Olá! Sou a JEN IA, assistente do portfólio da Jennifer. Busco experiências, cases, credenciais e serviços publicados no site para conectar seu desafio ao trabalho dela. Você procura uma profissional para sua empresa, uma mentoria ou uma palestrante?');
  const notice = document.createElement('div'); notice.className = 'jen-note';
  notice.textContent = endpoint ? 'Suas perguntas e o contexto recente serão enviados à API de IA. Não envie dados sensíveis ou confidenciais.' : 'Base local com fontes do site · sem IA generativa conectada. Não envie dados sensíveis.';
  body.appendChild(notice);
  if (quick) {
    quick.replaceChildren(); quick.style.display = '';
    ['Por que contratar Jennifer?', 'Cases de IA e RAG', 'Liderança de equipes', 'Databricks e Harvard', 'Quero uma mentoria', 'Como pedir uma proposta?'].forEach(q => {
      const b = document.createElement('button'); b.type = 'button'; b.textContent = q; quick.appendChild(b);
    });
  }
  launcher?.setAttribute('aria-controls', panel.id); launcher?.setAttribute('aria-expanded', 'false');
  function localize(){
    send.setAttribute('aria-label',ui('Enviar','Send'));
    panel.setAttribute('aria-label',ui('JEN IA · Assistente do portfólio','JEN AI · Portfolio assistant'));
    launcher?.setAttribute('aria-label',ui('Fale com a JEN IA','Talk to JEN AI'));
    if(callout)callout.textContent=ui('Fale com a JEN IA','Talk to JEN AI');
    input.placeholder=ui('Qual é o seu desafio?','What would you like to know?');
    input.setAttribute('aria-label',ui('Pergunte à JEN IA','Ask JEN AI'));
    const state=panel.querySelector('.chead .s,#chatSub');
    if(state)state.textContent=ui('busca local no portfólio','local portfolio search');
    const close=panel.querySelector('.jen-close');if(close)close.setAttribute('aria-label',ui('Fechar JEN IA','Close JEN AI'));
    {
      const greeting=body.querySelector('.jen-copy');if(greeting)greeting.textContent=ui('Olá! Sou a JEN IA. Consulto as fontes deste portfólio para ajudar com experiências, cases, serviços e contratação da Jennifer. Você procura uma profissional, uma mentoria ou uma palestrante?','Hi! I am JEN AI. I search this portfolio for experience, projects, services and hiring information. Are you looking for a professional, mentoring or a speaker?');
      notice.textContent=ui('Base local com fontes do site · sem IA generativa conectada. Não envie dados sensíveis.','Local portfolio sources · no generative AI connected. Do not send sensitive information.');
    }
    body.querySelectorAll('.jen-resource-options').forEach(menu=>{menu.querySelector('p').textContent=ui('Entre em contato com Jennifer ou escolha uma opção. Você também pode digitar o número.','Contact Jennifer or choose an option. You can also type its number.');globalThis.JenResources?.options().forEach(item=>{const b=menu.querySelector(`[data-jen-resource="${item.id}"]`);if(b)b.textContent=item.label;});});
    if(quick){const current=document.documentElement.lang.slice(0,2);const labels=current==='es'?['Experiencia profesional','Liderazgo de equipos','Proyectos y casos','Certificaciones','Mentoría de carrera','Precio y propuesta']:current==='ja'?['経験とサービス','リーダーシップ経験','プロジェクトの事例','Databricks認定','キャリアメンタリング','料金の相談']:isEnglish()?['Why hire Jennifer?','Her leadership experience','Does she speak English?','Databricks experience','Career mentoring','How do I request a proposal?']:['Por que contratar Jennifer?','Liderança de equipes','Ela fala inglês?','Databricks na prática','Quero uma mentoria','Como pedir uma proposta?'];
    [...quick.children].forEach((b,i)=>b.textContent=labels[i]);}
  }
  document.addEventListener('jen:languagechange',localize);localize();
  document.addEventListener('keydown',event=>{if(event.key==='Escape'&&!panel.classList.contains('open')&&panel.contains(event.target)){launcher?.setAttribute('aria-expanded','false');launcher?.focus();}});
  globalThis.JenIA = { ask };
  if(launcher)launcher.disabled=false;
})();



