(function (root) {
  'use strict';
  const labels = {
    pt: {historical:'Histórico informado', estimate:'Estimativa', simulation:'Simulação', unconfirmed:'Origem a confirmar', heading:'Como ler estes números', mixed:'Histórico e demonstração são separados. Um número exibido em uma simulação não comprova um resultado em produção.', demo:'Indicadores operacionais desta interface são simulados. Ganhos profissionais citados sem origem confirmada recebem um rótulo separado.', history:'Histórico: trajetória relatada por Jennifer. Estimativa: potencial, não ganho realizado. Simulação: exemplo didático. Dados sem origem estabelecida não são apresentados como ganhos comprovados.', unknown:'Origem histórica não confirmada; não usar como comprovação de ganho.', forecast:'Potencial estimado; não é ganho realizado nem garantido.', sample:'Valores da demonstração; não são medições da operação da empresa.'},
    en: {historical:'Reported history', estimate:'Estimate', simulation:'Simulation', unconfirmed:'Origin unconfirmed', heading:'How to read these numbers', mixed:'Historical results and demonstrations are separate. A number displayed in a simulation does not prove a production result.', demo:'Operational indicators in this interface are simulated. Professional gains without a confirmed origin have a separate label.', history:'Reported history = Jennifer’s professional account, not an independent audit. Estimate = potential, not realized gain. Simulation = interface example. Origin unconfirmed = not evidence of a result.', unknown:'Historical origin is unconfirmed; not evidence of a gain.', forecast:'Estimated potential, not a realized or guaranteed gain.', sample:'Demonstration values, not measurements of company operations.'},
    es: {historical:'Histórico informado', estimate:'Estimación', simulation:'Simulación', unconfirmed:'Origen por confirmar', heading:'Cómo leer estos números', mixed:'Los resultados históricos y las demostraciones se distinguen. Un número en una simulación no acredita un resultado en producción.', demo:'Los indicadores operativos de esta interfaz son simulados. Los beneficios profesionales sin origen confirmado llevan una etiqueta distinta.', history:'Histórico informado = relato profesional de Jennifer, no auditoría independiente. Estimación = potencial, no beneficio realizado. Simulación = ejemplo de la interfaz. Origen por confirmar = no acredita un resultado.', unknown:'Origen histórico sin confirmar; no acredita un beneficio.', forecast:'Potencial estimado, no beneficio realizado ni garantizado.', sample:'Valores de demostración, no mediciones de la operación de la empresa.'},
    ja: {historical:'本人申告の実績', estimate:'推定', simulation:'シミュレーション', unconfirmed:'出典未確認', heading:'数値の読み方', mixed:'過去の実績とデモは区別しています。シミュレーションの数値は本番環境の成果を証明しません。', demo:'画面内の稼働指標はシミュレーションです。出典を確認できていない業務上の効果には別の表示を付けています。', history:'本人申告の実績はJenniferによる職務経歴で、独立監査ではありません。推定は将来の可能性、シミュレーションは画面上の例です。出典未確認の数値は成果の証拠にはなりません。', unknown:'過去の出典が未確認であり、効果の証拠には使えません。', forecast:'推定上の可能性で、実現した利益や保証ではありません。', sample:'デモ用の数値であり、企業の実際の運用の測定値ではありません。'}
  };
  ['pt','en','es','ja'].forEach((lang,i)=>{labels[lang].mixedLabel=['Histórico + demonstração','History + demonstration','Histórico + demostración','実績とデモの混在'][i];});
  // Classifications are editorial, never inferred from the magnitude of a value.
  // A historical label reports the portfolio's account; it is not certification.
  const mixedPages = new Set(['index.html','experiencia.html','cases.html','cases-fiap.html','cases-itau.html','cases-petrobras.html','itau-analytics-dashboard.html','itau-finops-dashboard.html','heineken-dataplatform-app.html','creditas-dataplatform-app.html','carrefour-datacatalog-app.html','experiencia-app.html','demos-gallery.html']);
  const uncertainBenefits = new Set(['carrefour-datadog-app.html','cogna-data-validator.html','quintoandar-sre-dashboard.html','itau-observability-dashboard.html','itau-analytics-dashboard.html','itau-openfinance-app.html','borarachar-app.html','jellyfish-martech-app.html','dafiti-anomaly-detector.html','ibm-crm-integration.html','ibm-integration-mobile.html','santander-big-data-pipeline.html','cetip-hadoop-admin.html','creditas-credit-app.html','creditas-dataplatform-app.html','heineken-dataplatform-app.html']);
  const simulatedBoxes = '.dd-kpi,.kpi,.stat-card,.stat-box,.metric-card,.metric-item,.hkpi,.ms-item,.mt,.itau-kpi,.card:has(>.stat-val)';
  const pageRules = {
    'itau-analytics-dashboard.html': [['.pitch-kpis>.kpi','historical']],
    'itau-finops-dashboard.html': [['.hero>div:first-child','unconfirmed'],['.hkpi,.finops-insight,.card:has(.stat-val)','simulation']],
    'heineken-dataplatform-app.html': [['.metrics-strip>.ms-item,#impacto .kpi','historical'],['.metrics-strip>.ms-item:nth-child(4),#impacto .kpi:first-child','estimate']],
    'creditas-dataplatform-app.html': [['.mtiles>.mt','historical'],['.mtiles>.mt:nth-child(3)','unconfirmed']],
    'carrefour-datacatalog-app.html': [['.metric-tile,.kpi','unconfirmed']],
    'ibm-crm-integration.html': [['.context-action','historical']],
    'ibm-integration-mobile.html': [['.context-action','historical']],
    'cases-itau.html': [['.stat-row>.stat-box','historical'],['.stat-row>.stat-box:nth-child(2)','estimate']],
    'cases-fiap.html': [['.stat-row>.stat-box','historical'],['.stat-row>.stat-box:first-child','simulation'],['.stat-row>.stat-box:nth-child(2)','unconfirmed']],
    'heineken-navnext-app.html': [['.facts>.fact','estimate'],['.fact:has(#f2)','historical']],
    'itau-openfinance-app.html': [['.itau-kpi','simulation'],['.itau-kpi:first-child','historical'],['.itau-kpi:nth-child(2)','estimate']],
    'index.html': [['.nums>.num:not([data-metric-omit])','historical']]
  };
  const companyRules = {
    'heineken': [['#sec-stat3 .s3-box:first-child','estimate'],['#sec-stat3 .s3-box:last-child','estimate']],
    'itau-unibanco': [['.kpis .kpi:nth-child(2)','unconfirmed']],
    'creditas': [['.kpis .kpi:first-child','unconfirmed']]
  };
  const context = (page) => page === 'experiencia.html' || page === 'index.html' ? 'history' : mixedPages.has(page) ? 'mixed' : 'demo';
  const financialNotes = {
    'Itaú Unibanco':'A origem histórica da economia FinOps de R$2M está a confirmar. Custos de R$52M/R$50M e distribuições do painel são cenários simulados, não demonstração contábil da operação.',
    'Creditas':'As reduções citadas de 35% de armazenamento, 65% de custo mensal e 40% de reprocessamento têm origem a confirmar e medem escopos diferentes; não são resultados equivalentes comprovados.',
    'Heineken':'€15k/ano é uma estimativa de economia; +R$22MM/ano do NavNext é potencial projetado, não receita realizada.'
  };
  const knowledge = (page, company) => (financialNotes[company] ? financialNotes[company]+' ' : '') + (context(page)==='history'
    ? 'Histórico informado no portfólio, sem auditoria independente. Estimativas não são ganhos realizados. Ganhos marcados com origem a confirmar não podem ser apresentados como comprovados.'
    : 'Esta página contém demonstrações reconstruídas. Indicadores operacionais da interface são simulados; resultados históricos e estimativas só valem no escopo explicitamente indicado. Ganhos de origem a confirmar não são comprovação de resultado profissional.');
  root.PortfolioMetricProvenance = {labels, mixedPages:[...mixedPages], uncertainBenefits:[...uncertainBenefits], pageRules, companyRules, context, knowledge};
  if (!root.document) return;
  const doc=root.document;let page=root.location.pathname.split('/').pop()||'index.html';if(!/\.html?$/.test(page))page+='.html';
  function language(){try{return labels[root.localStorage.getItem('jen_lang')]?root.localStorage.getItem('jen_lang'):'pt';}catch(_){return 'pt';}}
  function setKind(selector,kind,scope=doc){scope.querySelectorAll(selector).forEach(el=>{el.dataset.metricKind=kind;});}
  function annotate(){
    const app=doc.getElementById('app');
    if(page==='experiencia.html'){
      setKind('.kpis .kpi,.stat3 .s3-box,.env-box','historical');
      setKind('.mock-grid .mock-card,.demo-grid .demo-card','simulation');
      (companyRules[app?.dataset.company]||[]).forEach(([selector,kind])=>setKind(selector,kind));
    }else if(!mixedPages.has(page)&&doc.querySelector('.context-popover')){
      setKind(simulatedBoxes,'simulation');
    }
    (pageRules[page]||[]).forEach(([selector,kind])=>setKind(selector,kind));
    // This popover explains how to use the interface; it does not assert a gain.
    // Popovers now describe simulated behavior, not unverified professional gains.
    if(doc.querySelector('.context-action')&&!['ibm-crm-integration.html','ibm-integration-mobile.html','itau-analytics-dashboard.html'].includes(page))setKind('.context-action','simulation');
    const copy=labels[language()];
    doc.querySelectorAll('[data-metric-kind]').forEach(el=>{
      const kind=el.dataset.metricKind;
      if(!copy[kind])return;
      let badge=[...el.children].find(child=>child.classList.contains('metric-origin'));
      if(!badge){badge=doc.createElement('span');badge.className='metric-origin';badge.setAttribute('data-no-translate','');el.append(badge);}
      const title=kind==='unconfirmed'?copy.unknown:kind==='estimate'?copy.forecast:kind==='simulation'?copy.sample:kind==='mixedLabel'?copy.mixed:copy.history;
      if(badge.textContent!==copy[kind])badge.textContent=copy[kind];
      badge.dataset.kind=kind;badge.title=title;
    });
    doc.querySelectorAll('.metric-legend').forEach(el=>{
      const title=el.querySelector('strong'), body=el.querySelector('p');
      if(title&&title.textContent!==copy.heading)title.textContent=copy.heading;
      const message=copy[context(page)]+(context(page)==='mixed'?' '+copy.history:'');
      if(body&&body.textContent!==message)body.textContent=message;
    });
  }
  function start(){
    doc.querySelectorAll('.metric-legend').forEach(el=>el.remove());
    annotate();let scheduled=false;
    new MutationObserver(records=>{
      if(records.every(r=>r.target.closest?.('.metric-origin,.metric-legend')))return;
      if(scheduled)return;scheduled=true;
      root.requestAnimationFrame(()=>{scheduled=false;annotate();});
    }).observe(doc.body,{childList:true,subtree:true});
    doc.addEventListener('jen:languagechange',annotate);
    doc.addEventListener('portfolio:languagechange',annotate);
  }
  if(doc.readyState==='loading')doc.addEventListener('DOMContentLoaded',start);else start();
})(typeof window==='undefined'?globalThis:window);
