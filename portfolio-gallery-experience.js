(function initMedia() {
  if(!document.body){document.addEventListener('DOMContentLoaded',initMedia,{once:true});return;}
  'use strict';
  if (window.__jenMediaEffects) return;
  window.__jenMediaEffects = true;
  const motion = matchMedia('(prefers-reduced-motion: reduce)');
  const fine = matchMedia('(hover: hover) and (pointer: fine)');
  const selector = '.mast-photo .frame, .mf-frame, .contact-card-preview, #fab, #fabBtn, #chatFab';
  const reduced = () => motion.matches || document.body.dataset.motion === 'reduzido';
  const reset = card => {
    card.classList.remove('jen-photo-active', 'jen-photo-pass');
    ['--tilt-x', '--tilt-y', '--shine-x', '--shine-y'].forEach(key => card.style.removeProperty(key));
  };
  const observer = 'IntersectionObserver' in window ? new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('jen-photo-entered');
      observer.unobserve(entry.target);
    });
  }, {threshold: .12}) : null;
  const decorate = (root = document) => {
    const cards = [...root.querySelectorAll(selector)];
    if (root.matches?.(selector)) cards.unshift(root);
    cards.forEach(card => {
      if (card.classList.contains('jen-photo-tilt')) return;
      card.classList.add('jen-photo-tilt');
      const surfaces = card.matches('.contact-card-preview') ? [...card.querySelectorAll('.contact-card-face')] : [card];
      surfaces.forEach(surface => {
        const sheen = document.createElement('span');
        sheen.className = 'jen-photo-sheen';
        sheen.setAttribute('aria-hidden', 'true');
        surface.append(sheen);
      });
      const image = card.querySelector('img');
      const ready = () => observer ? observer.observe(card) : card.classList.add('jen-photo-entered');
      if (!image || image.complete) ready();
      else {
        image.addEventListener('load', ready, {once: true});
        image.addEventListener('error', ready, {once: true});
      }
    });
  };
  decorate();
  new MutationObserver(records => records.forEach(record => {
    record.addedNodes.forEach(node => { if (node.nodeType === 1) decorate(node); });
    record.removedNodes.forEach(node => {
      if (node.nodeType !== 1 || !observer) return;
      if (node.matches('.jen-photo-tilt')) observer.unobserve(node);
      node.querySelectorAll('.jen-photo-tilt').forEach(card => observer.unobserve(card));
    });
  })).observe(document.body, {childList: true, subtree: true});

  // One floating glass layer also covers image icons without changing their layout.
  let imageSurface = null, imageFrame = 0, imageEvent = null, touchTimer = 0;
  const imageSelector = 'img,svg,.xp-icon,.service-extra-icon,.tech,.pill,.badge,.hero-chip,.stack-cloud>span,.ae-layer,.arch-box,.diagram';
  const clearImage = () => {
    if (imageFrame) cancelAnimationFrame(imageFrame);
    imageFrame = 0; imageEvent = null;
    if (imageSurface) imageSurface.hidden = true;
  };
  function paintImage(image, x, y) {
    if (!image || image.closest('.jen-photo-tilt')) { clearImage(); return; }
    const bounds = image.getBoundingClientRect();
    if (bounds.width < 4 || bounds.height < 4) { clearImage(); return; }
    if (!imageSurface) {
      imageSurface = document.createElement('span');
      imageSurface.className = 'jen-image-glass';
      imageSurface.setAttribute('aria-hidden','true');
      document.body.append(imageSurface);
    }
    const style = getComputedStyle(image);
    Object.assign(imageSurface.style, {
      left: `${bounds.left}px`, top: `${bounds.top}px`, width: `${bounds.width}px`, height: `${bounds.height}px`,
      borderRadius: style.borderRadius, clipPath: style.clipPath
    });
    imageSurface.style.setProperty('--shine-x', `${reduced() ? 50 : Math.max(0,Math.min(100,(x-bounds.left)/bounds.width*100))}%`);
    imageSurface.style.setProperty('--shine-y', `${reduced() ? 50 : Math.max(0,Math.min(100,(y-bounds.top)/bounds.height*100))}%`);
    imageSurface.hidden = false;
  }
  document.addEventListener('pointermove', event => {
    if (!fine.matches || event.pointerType === 'touch') return;
    const image = event.target.closest?.(imageSelector);
    if (!image || image.closest('.jen-photo-tilt')) { clearImage(); return; }
    imageEvent = {image, x: event.clientX, y: event.clientY};
    if (imageFrame) return;
    imageFrame = requestAnimationFrame(function initMedia() {
  if(!document.body){document.addEventListener('DOMContentLoaded',initMedia,{once:true});return;}
      imageFrame = 0;
      if (imageEvent) paintImage(imageEvent.image,imageEvent.x,imageEvent.y);
    });
  }, {passive: true});
  document.addEventListener('pointerout', event => {
    const image = event.target.closest?.(imageSelector);
    if (image && !image.contains(event.relatedTarget)) clearImage();
  });
  window.addEventListener('scroll', clearImage, {passive: true});
  window.addEventListener('resize', clearImage);
  let frame = 0, latest = null, active = null;
  const stop = () => {
    if (frame) cancelAnimationFrame(frame);
    frame = 0; latest = null; active = null;
    document.querySelectorAll('.jen-photo-tilt').forEach(reset);
    clearImage();
  };
  document.addEventListener('pointermove', event => {
    if (reduced() || !fine.matches || event.pointerType === 'touch') return;
    const card = event.target.closest?.('.jen-photo-tilt');
    if (!card) return;
    if (active !== card) {
      if (active) reset(active);
      active = card;
    }
    latest = {card, x: event.clientX, y: event.clientY};
    if (frame) return;
    frame = requestAnimationFrame(function initMedia() {
  if(!document.body){document.addEventListener('DOMContentLoaded',initMedia,{once:true});return;}
      frame = 0;
      if (!latest || reduced()) return;
      const {card, x, y} = latest;
      if (!card.isConnected) return;
      const bounds = card.getBoundingClientRect();
      if (!bounds.width || !bounds.height) return;
      const nx = Math.max(0, Math.min(1, (x - bounds.left) / bounds.width));
      const ny = Math.max(0, Math.min(1, (y - bounds.top) / bounds.height));
      card.style.setProperty('--tilt-x', `${((.5 - ny) * 6).toFixed(2)}deg`);
      card.style.setProperty('--tilt-y', `${((nx - .5) * 8).toFixed(2)}deg`);
      card.style.setProperty('--shine-x', `${(nx * 100).toFixed(1)}%`);
      card.style.setProperty('--shine-y', `${(ny * 100).toFixed(1)}%`);
      card.classList.add('jen-photo-active');
    });
  }, {passive: true});
  document.addEventListener('pointerout', event => {
    const card = event.target.closest?.('.jen-photo-tilt');
    if (card && !card.contains(event.relatedTarget)) {
      if (latest?.card === card) latest = null;
      if (active === card) active = null;
      reset(card);
    }
  });
  document.addEventListener('pointerdown', event => {
    if (event.pointerType !== 'touch') return;
    const card = event.target.closest?.('.jen-photo-tilt');
    if (card && !reduced()) card.classList.add('jen-photo-pass');
    else if (!card) {
      paintImage(event.target.closest?.(imageSelector),event.clientX,event.clientY);
      clearTimeout(touchTimer);touchTimer=setTimeout(clearImage,1100);
    }
  }, {passive: true});
  document.addEventListener('animationend', event => {
    if (event.animationName === 'jen-glass-touch') event.target.closest('.jen-photo-tilt')?.classList.remove('jen-photo-pass');
  });
  document.addEventListener('jen:motionchange', stop);
  motion.addEventListener('change', stop);
  fine.addEventListener('change', stop);
  window.addEventListener('blur', stop);
  const cvFiles = {pt: 'assets/cv/jennifer-evangelista-executive-pt.pdf?v=20261027-113006', en: 'assets/cv/jennifer-evangelista-executive-en.pdf?v=20261027-113006'};
  const updateDownloads = () => {
    const language = document.documentElement.lang.toLowerCase().startsWith('pt') ? 'pt' : 'en';
    document.querySelectorAll('a.service-media-cv,a[data-cv-download]').forEach(a => {
      const file = cvFiles[language];
      if (a.getAttribute('href') !== file) a.setAttribute('href', file);
      a.setAttribute('download', `Jennifer-Evangelista-CV-${language.toUpperCase()}.pdf`);
      a.setAttribute('data-cv-download', language);
    });
  };
  document.addEventListener('jen:languagechange', updateDownloads);
  document.addEventListener('portfolio:languagechange', updateDownloads);
  window.addEventListener('languagechange', updateDownloads);
  updateDownloads();
})();

// Phone previews use a stable internal viewport and scale to the available width.
(()=>{if(window.self!==window.top)return;const set=new WeakSet();function decorate(){document.querySelectorAll('.mock-frame').forEach(frame=>{if(set.has(frame))return;set.add(frame);const fit=()=>{const width=frame.getBoundingClientRect().width;if(width>0)frame.style.setProperty('--preview-scale',String(Math.min(1,width/420)));};if('ResizeObserver'in window)new ResizeObserver(fit).observe(frame);fit();});}decorate();window.addEventListener('resize',decorate);})();

(()=>{if(!/\/cases-petrobras(?:\.html)?$/.test(location.pathname))return;const copies={"pt": {"p2_mock_h": "⛽ Bora Rachar: App MVP", "p2_sol_p1_html": "<strong>1. Identificação do veículo</strong>: a proposta conecta o veículo à jornada de fidelidade. Nesta versão navegável, chegada e identificação usam dados de exemplo; não há consulta a um carro real.", "p2_sol_p3_html": "<strong>3. Bora Rachar</strong>: simula a divisão do custo entre os passageiros informados no app. Os botões de PIX e WhatsApp demonstram a jornada, sem efetuar cobrança real.", "p2_l1_desc": "No protótipo, o VIN e o evento de chegada são dados de demonstração. O payload mostrado é um contrato didático do projeto, não o contrato oficial de uma API Ford.", "p2_l6_desc": "Divide o valor simulado pelo número de passageiros informado no app. A tela demonstra o compartilhamento de custos; não detecta ocupantes nem realiza pagamentos reais.", "p2_q1_p_html": "Não se deve presumir compatibilidade com qualquer veículo. As APIs e os dados disponíveis dependem da oferta do fabricante e da autorização do cliente. A documentação FordConnect prevê acesso com consentimento explícito. Nesta demonstração, chegada e VIN são simulados; não há conexão com um veículo real.", "p2_q2_p_html": "O MVP funcional permitia demonstrar a divisão de despesas entre passageiros. Nesta versão do portfólio, a quantidade de pessoas é um dado de exemplo, não uma leitura de sensores. O payload ilustrado não é apresentado como contrato oficial da API Ford.", "p2_hero_sub": "MVP funcional desenvolvido e apresentado no Hackathon Petrobras: fidelidade para postos, pontos em tempo real e divisão de despesas entre passageiros. A versão navegável abaixo reconstrói a experiência para o portfólio.", "p2_mock_p": "O projeto teve um MVP funcional no hackathon. Esta versão para o portfólio apresenta seis telas navegáveis da jornada; usa dados de exemplo e não está conectada aos sistemas da Petrobras, de veículos ou de pagamentos.", "p2_screen2": "<b>02</b> Veículo identificado: perfil e histórico de exemplo", "p2_sol_p2_html": "<strong>2. Pontos em tempo real</strong>: o fluxo de abastecimento alimenta o cálculo de pontos e a recomendação de produtos. A versão do portfólio reproduz essas etapas com dados de exemplo.", "p2_q5_p": "O MVP funcionou no hackathon. A versão disponível aqui é uma aplicação web navegável pelo navegador no computador e no celular. Uma distribuição como PWA ou aplicativo nativo exigiria sua própria validação de instalação e compatibilidade.", "p2_reference_0": "A arquitetura de referência abaixo explica a jornada do MVP funcional apresentado no hackathon. Os fluxos e trechos de código desta versão foram reconstruídos para o portfólio.", "p2_reference_1": "<b>Flow 1: identificação</b>: o exemplo recebe um evento de chegada com um VIN de demonstração. O contrato da mensagem pertence ao exemplo; não pressupõe que a Ford publique esse evento por MQTT.", "p2_reference_2": "<b>Flow 2: abastecimento</b>: eventos de volume alimentam o cálculo de valor e pontos. A versão navegável usa valores de exemplo.", "p2_reference_3": "<b>Flow 3: recomendação e pontos</b>: organiza o histórico, a recomendação e o fechamento da sessão. Os trechos ilustram a separação de responsabilidades.", "p2_reference_4": "<b>MQTT Topics</b>: representam canais de comunicação entre componentes do exemplo. Uma integração real precisa de um conector e de um contrato compatível com cada fonte."}, "en": {"p2_mock_h": "⛽ Bora Rachar: MVP App", "p2_sol_p1_html": "<strong>1. Vehicle identification</strong>: the proposal connects a vehicle to the loyalty journey. This interactive version uses sample arrival and identity data; it does not query a real car.", "p2_sol_p3_html": "<strong>3. Bora Rachar</strong>: simulates splitting the cost among passengers entered in the app. PIX and WhatsApp buttons demonstrate the journey without collecting a real payment.", "p2_l1_desc": "The prototype uses a demonstration VIN and arrival event. The illustrated payload is an educational project contract, not the official Ford API schema.", "p2_l6_desc": "Splits the simulated amount using the passenger count entered in the app. The screen demonstrates cost sharing; it neither detects occupants nor processes real payments.", "p2_q1_p_html": "Compatibility with every vehicle must not be assumed. Available APIs and data depend on the manufacturer offering and customer authorization. FordConnect documentation requires explicit customer consent. Arrival and VIN are simulated here; no real vehicle is connected.", "p2_q2_p_html": "The functional MVP demonstrated sharing expenses among passengers. In this portfolio version, passenger count is sample data rather than a sensor reading. The illustrated payload is not an official Ford API contract.", "p2_hero_sub": "A functional MVP developed and presented at the Petrobras Hackathon: loyalty for gas stations, real-time points and shared passenger expenses. The interactive version below reconstructs the experience for this portfolio.", "p2_mock_p": "The project had a functional MVP at the hackathon. This portfolio version offers six interactive screens using sample data; it is not connected to Petrobras, vehicle or payment systems.", "p2_screen2": "<b>02</b> Vehicle profile: sample identity and history", "p2_sol_p2_html": "<strong>2. Real-time points</strong>: the fueling flow feeds point calculation and product recommendations. The portfolio version reproduces these stages with sample data.", "p2_q5_p": "The MVP worked at the hackathon. The version available here is an interactive web application for desktop and mobile browsers. Distribution as a PWA or native app would require separate installation and compatibility validation.", "p2_reference_0": "The reference architecture below explains the functional MVP presented at the hackathon. The flows and code snippets in this version were reconstructed for the portfolio.", "p2_reference_1": "<b>Flow 1: identification</b>: the example receives an arrival event with a sample VIN. This is an example message contract; it does not assume Ford publishes that event through MQTT.", "p2_reference_2": "<b>Flow 2: fueling</b>: volume events feed amount and point calculations. The interactive version uses sample values.", "p2_reference_3": "<b>Flow 3: recommendations and points</b>: organizes history, recommendations and session completion. The snippets illustrate separation of responsibilities.", "p2_reference_4": "<b>MQTT Topics</b>: represent communication channels between example components. A real integration requires a compatible connector and contract for each source."}, "es": {"p2_mock_h": "⛽ Bora Rachar: App MVP", "p2_sol_p1_html": "<strong>1. Identificación del vehículo</strong>: la propuesta conecta el vehículo con la fidelización. Esta versión usa datos de ejemplo para la llegada y la identidad; no consulta un coche real.", "p2_sol_p3_html": "<strong>3. Bora Rachar</strong>: simula dividir el coste entre los pasajeros introducidos en la aplicación. Los botones de PIX y WhatsApp muestran la experiencia sin realizar cobros reales.", "p2_l1_desc": "El VIN y el evento de llegada son datos de demostración. El payload es un contrato didáctico del proyecto, no el esquema oficial de una API Ford.", "p2_l6_desc": "Divide el importe simulado según el número de pasajeros introducido en la aplicación. No detecta ocupantes ni procesa pagos reales.", "p2_q1_p_html": "No se debe asumir compatibilidad con cualquier vehículo. Las API y los datos disponibles dependen del fabricante y de la autorización del cliente. FordConnect requiere consentimiento explícito. Aquí se simulan la llegada y el VIN; no hay un vehículo real conectado.", "p2_q2_p_html": "El MVP funcional permitía demostrar el reparto de gastos entre pasajeros. Aquí, la cantidad de personas es un dato de ejemplo, no una lectura de sensores. El payload ilustrado no es un contrato oficial de la API Ford.", "p2_hero_sub": "MVP funcional desarrollado y presentado en el Hackathon Petrobras: fidelización, puntos en tiempo real y reparto de gastos entre pasajeros. La versión navegable reconstruye la experiencia para este portafolio.", "p2_mock_p": "El proyecto contó con un MVP funcional en el hackathon. Esta versión presenta seis pantallas navegables con datos de ejemplo; no está conectada a sistemas de Petrobras, vehículos ni pagos.", "p2_screen2": "<b>02</b> Vehículo identificado: perfil e historial de ejemplo", "p2_sol_p2_html": "<strong>2. Puntos en tiempo real</strong>: el flujo de abastecimiento alimenta el cálculo de puntos y las recomendaciones. El portafolio reproduce estas etapas con datos de ejemplo.", "p2_q5_p": "El MVP funcionó en el hackathon. La versión disponible aquí es una aplicación web navegable en ordenadores y móviles. Su distribución como PWA o aplicación nativa necesitaría una validación propia de instalación y compatibilidad.", "p2_reference_0": "Esta arquitectura de referencia explica el MVP funcional presentado en el hackathon. Los flujos y fragmentos de código fueron reconstruidos para el portafolio.", "p2_reference_1": "<b>Flow 1: identificación</b>: el ejemplo recibe una llegada con un VIN de muestra. El contrato del mensaje pertenece al ejemplo; no presupone que Ford publique ese evento por MQTT.", "p2_reference_2": "<b>Flow 2: abastecimiento</b>: los eventos de volumen alimentan el cálculo de importe y puntos. La versión navegable usa valores de ejemplo.", "p2_reference_3": "<b>Flow 3: recomendaciones y puntos</b>: organiza el historial, las recomendaciones y el cierre de sesión. Los fragmentos ilustran la separación de responsabilidades.", "p2_reference_4": "<b>MQTT Topics</b>: representan canales entre los componentes del ejemplo. Una integración real necesita un conector y un contrato compatibles con cada fuente."}, "ja": {"p2_mock_h": "⛽ Bora Rachar：MVPアプリ", "p2_sol_p1_html": "<strong>1. 車両の識別</strong>：車両とロイヤルティの体験を結び付ける提案です。このバージョンでは到着と識別にサンプルデータを使用し、実車には問い合わせません。", "p2_sol_p3_html": "<strong>3. Bora Rachar</strong>：アプリに入力した乗客数で費用を分担する操作を再現します。PIXとWhatsAppのボタンから実際の請求は行いません。", "p2_l1_desc": "VINと到着イベントはデモ用データです。表示するペイロードは学習用のプロジェクト仕様であり、Fordの公式API仕様ではありません。", "p2_l6_desc": "入力した乗客数でデモの金額を分担します。実際の乗員検出や決済処理は行いません。", "p2_q1_p_html": "すべての車両で利用できるとは限りません。利用可能なAPIやデータはメーカーの提供内容と顧客の許可に依存します。FordConnectは明示的な同意を必要とします。このデモでは到着とVINを再現しており、実車には接続しません。", "p2_q2_p_html": "動作するMVPでは乗客間の費用分担を実演しました。このバージョンの乗客数はセンサー値ではなくサンプルデータです。表示するペイロードはFord公式APIの仕様ではありません。", "p2_hero_sub": "Petrobrasハッカソンで開発・発表した動作するMVPです。給油所のロイヤルティ、リアルタイムポイント、乗客間の費用分担を扱います。以下はポートフォリオ向けに再構成した操作可能なバージョンです。", "p2_mock_p": "ハッカソンでは動作するMVPを発表しました。このポートフォリオ版はサンプルデータを使う6画面で、Petrobras、車両、決済の実システムには接続していません。", "p2_screen2": "<b>02</b> 車両プロフィール：識別情報と履歴のサンプル", "p2_sol_p2_html": "<strong>2. リアルタイムポイント</strong>：給油の流れに沿ってポイント計算と商品推薦を行います。ポートフォリオ版ではサンプルデータで再現します。", "p2_q5_p": "MVPはハッカソンで動作しました。ここではPCとスマートフォンのブラウザーで操作できるWebアプリを提供しています。PWAやネイティブアプリとして配布する場合は、インストールと互換性を別途検証する必要があります。", "p2_reference_0": "以下の参照アーキテクチャは、ハッカソンで発表した動作するMVPの流れを説明します。このバージョンのフローとコードはポートフォリオ用に再構成しています。", "p2_reference_1": "<b>Flow 1：識別</b>：サンプルVINを含む到着イベントを受信します。これは例示用のメッセージ仕様であり、FordがMQTTでこのイベントを配信することを前提としません。", "p2_reference_2": "<b>Flow 2：給油</b>：給油量のイベントから金額とポイントを計算します。操作可能なバージョンではサンプル値を使用します。", "p2_reference_3": "<b>Flow 3：推薦とポイント</b>：履歴、推薦、セッション完了をまとめます。コードは責務の分離を示すものです。", "p2_reference_4": "<b>MQTT Topics</b>：例示したコンポーネント間の通信チャネルです。実際の連携には各ソースに対応するコネクターと仕様が必要です。"}};function apply(){const copy=copies[document.documentElement.lang.slice(0,2)]||copies.pt;for(const[key,value]of Object.entries(copy)){const el=document.querySelector(`[data-i18n="${key}"],[data-i18n-html="${key}"]`);if(el){el.setAttribute('data-no-translate','');if(el.innerHTML!==value)el.innerHTML=value;}}}document.addEventListener('jen:languagechange',apply);apply();})();

