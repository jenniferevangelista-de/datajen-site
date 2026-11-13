(function () {
  'use strict';

  const profiles = {
    heineken:    { name: 'Heineken',       brand: '#00A550', accent: '#D71920', deep: '#03150D', light: '#EAF7EF', tone: 'light' },
    itau:        { name: 'Itaú',           brand: '#EC7000', accent: '#003399', deep: '#241105', light: '#FFF3E8', tone: 'light' },
    ibm:         { name: 'IBM',            brand: '#0F62FE', accent: '#78A9FF', deep: '#001141', light: '#E8F1FF', tone: 'light' },
    santander:   { name: 'Santander',      brand: '#EC0000', accent: '#FF6B6B', deep: '#210305', light: '#FFF0F0', tone: 'light' },
    carrefour:   { name: 'Carrefour',      brand: '#004E9A', accent: '#E30613', deep: '#04162D', light: '#EEF5FC', tone: 'light' },
    creditas:    { name: 'Creditas',       brand: '#00A868', accent: '#8CD000', deep: '#032D20', light: '#EAF8F1', tone: 'light' },
    cogna:       { name: 'Cogna',          brand: '#6F2CDE', accent: '#9F72EE', deep: '#1B0A36', light: '#F4EEFF', tone: 'light' },
    dafiti:      { name: 'Dafiti',         brand: '#202636', accent: '#7889A2', deep: '#0B1220', light: '#F1F3F7', tone: 'light' },
    oracle:      { name: 'Oracle',         brand: '#C74634', accent: '#FF8B7B', deep: '#260B08', light: '#FFF1EF', tone: 'light' },
    quintoandar: { name: 'QuintoAndar',    brand: '#4054B2', accent: '#7D91FF', deep: '#101A4B', light: '#EEF0FF', tone: 'light' },
    serasa:      { name: 'Serasa Experian',brand: '#6A3DF0', accent: '#D72A8A', deep: '#160A2E', light: '#F3EEFF', tone: 'light' },
    b3:          { name: 'B3',     brand: '#007EA7', accent: '#00B8D4', deep: '#052732', light: '#EAF8FB', tone: 'light' },
    petrobras:   { name: 'Petrobras',      brand: '#008542', accent: '#F7C600', deep: '#052A17', light: '#EDF8F1', tone: 'light' },
    natura:      { name: 'Natura',         brand: '#A64A1A', accent: '#F08A4B', deep: '#2A1208', light: '#FFF1E8', tone: 'light' },
    endeavor:    { name: 'Endeavor',       brand: '#003B7A', accent: '#2F80C9', deep: '#061A2E', light: '#EDF5FC', tone: 'light' },
    jellyfish:   { name: 'IBM · Projeto MarTech', brand: '#0F62FE', accent: '#78A9FF', deep: '#001141', light: '#E8F1FF', tone: 'light' },
    jen:         { name: 'Jen Notes',      brand: '#7047EB', accent: '#C037FF', deep: '#120822', light: '#F4F0FF', tone: 'light' }
  };

  /* Alguns servidores servem a URL sem a extensao (/politicard-hub em vez de
     /politicard-hub.html). Normalizamos para que o regex e os mapas por pagina
     abaixo continuem funcionando nos dois formatos. */
  let file = (location.pathname.split('/').pop() || '').toLowerCase();
  if (file && !/\.html?$/.test(file)) file += '.html';
  const isHeitor = /heineken-navnext-app\.html$/.test(file);
  const isAppSurface = /(?:app|dashboard|query-engine|data-validator|anomaly-detector|solutions-map|cs-health|integration|pipeline|hadoop-admin|hub|chat|flow)\.html$/.test(file);
  const haystack = `${file} ${location.hash} ${document.title}`.toLowerCase();
  const rules = [
    ['heineken', /heineken|navnext/],
    ['itau', /itau|itaú|openfinance/],
    ['ibm', /ibm/],
    ['santander', /santander/],
    ['carrefour', /carrefour|openmetadata|datadog/],
    ['creditas', /creditas/],
    ['cogna', /cogna|kroton/],
    ['dafiti', /dafiti/],
    ['oracle', /oracle/],
    ['quintoandar', /quintoandar|quinto andar/],
    ['serasa', /serasa/],
    ['b3', /cetip|\bb3\b|hadoop-admin/],
    ['petrobras', /petrobras|borarachar|bora rachar/],
    ['natura', /natura|iara/],
    ['endeavor', /politicard|endeavor/],
    ['jellyfish', /jellyfish/]
  ];
  const key = (rules.find(([, rx]) => rx.test(haystack)) || ['jen'])[0];
  const p = profiles[key];

  function paletteFor(mode) {
    if (mode === 'ambar') {
      return {
        bg: '#FAF0DE', panel: '#FFF8EA', card: '#FFFDF7', card2: p.light,
        border: `color-mix(in srgb, ${p.brand} 32%, #D5B67B)`, ink: '#2B1B08', muted: '#775F42'
      };
    }
    if (mode === 'noite' || (!mode && p.tone === 'dark')) {
      return {
        bg: p.deep,
        panel: `color-mix(in srgb, ${p.deep} 86%, ${p.brand})`,
        card: `color-mix(in srgb, ${p.deep} 74%, ${p.brand})`,
        card2: `color-mix(in srgb, ${p.deep} 62%, ${p.brand})`,
        border: `color-mix(in srgb, ${p.brand} 38%, transparent)`,
        ink: '#F7FBF9',
        muted: `color-mix(in srgb, #FFFFFF 64%, ${p.brand})`
      };
    }
    return {
      bg: `color-mix(in srgb, ${p.light} 72%, #FFFFFF)`,
      panel: '#FFFFFF', card: '#FFFFFF', card2: p.light,
      border: `color-mix(in srgb, ${p.brand} 28%, #D8D8D2)`, ink: '#171714', muted: '#676760'
    };
  }

  function setVar(name, value) {
    document.documentElement.style.setProperty(name, value);
  }

  let savedPalette = '';
  let savedTypo = '';
  let savedMotion = '';
  let savedGlass = '';
  let savedGlow = '';
  try {
    savedPalette = localStorage.getItem('jen_pal') || '';
    savedTypo = localStorage.getItem('jen_typo') || '';
    savedMotion = localStorage.getItem('jen_motion') || '';
    savedGlass = localStorage.getItem('jen_glass') || '';
    savedGlow = localStorage.getItem('jen_glow') || '';
  } catch (_) {}

  const c = paletteFor(savedPalette);
  document.documentElement.dataset.companyTheme = key;
  document.documentElement.dataset.companyTone = (savedPalette === 'noite' || (!savedPalette && p.tone === 'dark')) ? 'dark' : 'light';
  document.documentElement.dataset.appUi = isAppSurface && !isHeitor ? 'editorial' : 'custom';
  document.body.dataset.company = key;
  document.body.dataset.palette = savedPalette;
  document.body.dataset.typo = savedTypo;
  document.body.dataset.motion = savedMotion;
  document.body.dataset.glass = savedGlass === 'off' ? 'off' : '';
  document.body.dataset.glow = savedGlow === 'off' ? 'off' : '';

  setVar('--company-brand', p.brand);
  setVar('--company-accent', p.accent);
  setVar('--company-deep', p.deep);
  setVar('--company-light', p.light);
  setVar('--company-bg', c.bg);
  setVar('--company-panel', c.panel);
  setVar('--company-card', c.card);
  setVar('--company-card-2', c.card2);
  setVar('--company-border', c.border);
  setVar('--company-ink', c.ink);
  setVar('--company-muted', c.muted);

  // IMPORTANTE: só injetamos cores de DESTAQUE e borda. Nunca fundo (--bg/--card/--paper)
  // nem cor de texto (--ink/--muted): cada app tem sua própria paleta e nomes de variável
  // diferentes para texto (--text, --tx, --sub...). Trocar só o fundo dessincronizava o par
  // fundo/texto e deixava o texto invisível (mesma cor do fundo) em vários apps.
  const aliases = {
    '--line': c.border, '--border': c.border,
    '--acc': p.brand, '--acc2': p.accent, '--accent': p.brand, '--primary': p.brand,
    '--accsoft': p.light, '--accdim': `color-mix(in srgb, ${p.brand} 14%, transparent)`
  };
  Object.entries(aliases).forEach(([name, value]) => setVar(name, value));

  // Todos os apps, exceto o agente Heitor, partem da mesma base editorial clara.
  // A cor de destaque continua sendo a identidade de cada empresa.
  if (isAppSurface && !isHeitor) {
    const surfaceAliases = {
      '--bg': c.bg, '--paper': c.bg, '--surface': c.panel,
      '--panel': c.panel, '--card': c.card, '--card2': c.card2,
      '--white': c.card, '--text': c.ink, '--tx': c.ink, '--ink': c.ink,
      '--dark': c.ink, '--sub': c.muted, '--muted': c.muted,
      '--dd-bg': c.bg, '--dd-bg2': c.panel, '--dd-bg3': c.card2,
      '--dd-panel': c.panel, '--dd-tx': c.ink, '--dd-muted': c.muted,
      '--dd-border': c.border
    };
    Object.entries(surfaceAliases).forEach(([name, value]) => setVar(name, value));
  }

  if (key === 'heineken') {
    setVar('--hnk', p.brand); setVar('--hnk2', '#087A42'); setVar('--green', p.brand);
    setVar('--blue', '#55C98A'); setVar('--amber', '#F3C65D'); setVar('--red', p.accent);
  }
  if (key === 'itau') {
    setVar('--orange', p.brand); setVar('--orange2', '#C85C00'); setVar('--orange-lt', p.light);
    setVar('--orange-md', '#FFD1AA'); setVar('--navy', p.accent);
  }
  if (key === 'ibm' || key === 'carrefour' || key === 'quintoandar' || key === 'b3') setVar('--blue', p.brand);
  if (key === 'santander' || key === 'oracle') setVar('--red', p.brand);
  if (key === 'petrobras' || key === 'creditas' || key === 'cogna') setVar('--green', p.brand);
  if (key === 'natura') setVar('--orange', p.brand);
  if (key === 'serasa' || key === 'jellyfish') setVar('--purple', p.brand);

  const metaTheme = document.querySelector('meta[name="theme-color"]');
  if (metaTheme) metaTheme.setAttribute('content', p.deep);

  function absolutizeSeo() {
    if (!/^https?:$/.test(location.protocol)) return;
    const pageUrl = new URL(location.pathname, location.origin).href;
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = pageUrl;
    let ogUrl = document.querySelector('meta[property="og:url"]');
    if (!ogUrl) {
      ogUrl = document.createElement('meta');
      ogUrl.setAttribute('property', 'og:url');
      document.head.appendChild(ogUrl);
    }
    ogUrl.content = pageUrl;
    document.querySelectorAll('meta[property="og:image"],meta[name="twitter:image"]').forEach((meta) => {
      if (meta.content) meta.content = new URL(meta.content, location.href).href;
    });
  }

  function installIntegrityLayer() {
    if (!document.querySelector('.demo-integrity-banner')) {
      const style = document.createElement('style');
      style.textContent = `
        .demo-integrity-banner{position:relative;z-index:20;display:flex;align-items:flex-start;gap:9px;max-width:min(1280px,calc(100% - 24px));margin:8px auto 0;padding:8px 12px;border:1px solid color-mix(in srgb,var(--company-brand) 24%,#d8d8d2);border-radius:12px;background:color-mix(in srgb,var(--company-panel) 94%,var(--company-light));color:var(--company-ink);font:500 9.5px/1.35 system-ui,sans-serif;box-shadow:0 8px 18px color-mix(in srgb,var(--company-deep) 10%,transparent)}
        .demo-integrity-banner strong{display:block;margin-bottom:2px;font-size:9px;letter-spacing:.08em;text-transform:uppercase;color:var(--company-brand)}
        .demo-integrity-banner span:first-child{font-size:14px;line-height:1.2;margin-top:1px}
        @media(max-width:640px){.demo-integrity-banner{max-width:calc(100% - 16px);margin:7px auto 0;padding:7px 10px;font-size:9px}}
      `;
      document.head.appendChild(style);
      const banner = document.createElement('aside');
      banner.className = 'demo-integrity-banner';
      banner.setAttribute('aria-label', 'Transparência da demonstração');
      banner.innerHTML = '<span aria-hidden="true">🔒</span><span><strong>Dados sintéticos</strong> · sem informação confidencial ou integração real</span>';
      const anchor = document.querySelector('.topbar') || document.querySelector('header') || document.querySelector('nav');
      if (anchor && anchor.parentNode) anchor.insertAdjacentElement('afterend', banner);
      else document.body.insertBefore(banner, document.body.firstChild);
    }

    // Evita dois avisos de transparência dizendo a mesma coisa.
    document.querySelectorAll('.tech-disclaimer').forEach((notice) => {
      notice.hidden = true;
      notice.setAttribute('aria-hidden', 'true');
    });

    document.querySelectorAll('.pill-live,.live-badge,.s-badge,.tag-live').forEach((badge) => {
      if (/\bLIVE\b|AO VIVO/i.test(badge.textContent || '')) {
        badge.textContent = '● DEMO AO VIVO · DADOS SINTÉTICOS';
        badge.setAttribute('aria-label', 'Demonstração animada com dados sintéticos');
      }
    });

    if (!document.querySelector('main,[role="main"]')) {
      const candidate = document.querySelector('.main') || document.querySelector('.dashboard') || document.querySelector('.workspace') || document.querySelector('.app') || document.querySelector('.wrap') || document.querySelector('section');
      if (candidate) {
        candidate.id = candidate.id || 'conteudo-principal';
        candidate.setAttribute('role', 'main');
      }
    }
  }

  const everydayCopy = {
    heineken: 'Pipeline: SAP → Azure Lake → Power BI. Governança e FinOps reduzem risco e dão base confiável para decisões.',
    carrefour: 'Governança de dados: catálogo, qualidade e linhagem. Dados confiáveis chegam mais rápido e problemas ficam rastreáveis.',
    itau: 'Plataforma de dados e decisão: informações autorizadas, regras processadas e decisões explicáveis com rastreabilidade.',
    creditas: 'Engenharia de crédito: dados preparados e validados. Respostas mais rápidas e rastreáveis com transparência total.',
    quintoandar: 'Operação SRE em Kubernetes: telemetria e alertas conectam problema à causa e recuperação automática.',
    cogna: 'Motor de qualidade: cargas processadas, validadas e bloqueadas se uma regra falha no fechamento financeiro.',
    serasa: 'Motor analítico: coordena fontes e consolida evidências em resposta rastreável e confiável.',
    dafiti: 'Análise de vendas com Spark: identifica padrões anormais e prioriza ação com contexto em tempo real.',
    oracle: 'Customer Success: sinais de uso e adoção organizados em risco, oportunidade e recomendação.',
    ibm: 'Integração de eventos até o CRM: reduz atraso de informação e permite reação com contexto atualizado.',
    jellyfish: 'Analytics de campanhas Amazon Ads: consolidação de indicadores e alertas de performance.',
    santander: 'Pipeline de dados: extração, processamento e publicação ponta a ponta com rastreabilidade completa.',
    b3: 'Operação Hadoop: saúde do HDFS, jobs Hive/Impala e controles Sentry/Kerberos em leitura única.',
    petrobras: 'Plataforma de abastecimento: identificação, rastreamento e divisão de pagamento em jornada fluida.',
    jen: 'Arquitetura navegável: entradas, regras, processamento e saída visíveis com decisões transparentes.'
  };
  const actionCopy = {
    heineken: 'Clique nas camadas do pipeline para abrir ferramentas, regras e decisões; depois selecione “Impacto & resultados” para relacionar a arquitetura às entregas.',
    carrefour: 'Filtre o catálogo ou o painel, abra um ativo ou incidente e percorra qualidade, linhagem e responsável para chegar à ação recomendada.',
    itau: 'Use a ação principal destacada, avance pelas etapas e abra os painéis de detalhe para ver como cada entrada altera o processamento e a decisão.',
    creditas: 'Ajuste os controles do cenário, clique na ação principal e abra as etapas concluídas para acompanhar dados, regras, modelo e resultado.',
    quintoandar: 'Clique em “Simular incidente agora”, investigue os pods e alertas e finalize em “Executar runbook e restaurar”.',
    cogna: 'Escolha “Ciclo normal” ou “Simular erro” e clique em “Executar validação”; acompanhe ingestão, testes, reconciliação e destino final.',
    serasa: 'Escolha uma empresa fictícia e o tipo de consulta, clique em “Executar consulta” e acompanhe cada fonte mudar de estado até o relatório.',
    dafiti: 'Selecione “Dia normal”, “Black Friday” ou “Campanha verão”; depois use “Simular checagem de estoque” e “Comparar campanha” para investigar o desvio.',
    oracle: 'Selecione uma conta, ajuste os sinais disponíveis e execute o cálculo; compare o score, a causa e a recomendação comercial ou técnica.',
    ibm: 'Escolha o tipo de evento e clique em “Enviar evento CRM”; acompanhe cada componente confirmar o processamento até a chegada ao CRM.',
    jellyfish: 'Passe o cursor ou toque nas barras para ler os valores e envie uma pergunta no KPI Bot para investigar desempenho, custo e alertas.',
    santander: 'Escolha “Fechamento”, “Transferências” ou “Câmbio” e clique em “Iniciar batch”; acompanhe tabelas, logs e reconciliação até a publicação.',
    b3: 'Clique em “Executar checklist operacional” e acompanhe HDFS, DataNodes, Kerberos, Sentry e o terminal mudarem de estado.',
    petrobras: 'Clique em “Iniciar abastecimento”, avance até “Simular conclusão” e teste a divisão e a cobrança por PIX dentro da própria jornada.',
    jen: 'Comece pela ação marcada “COMECE AQUI” e acompanhe os componentes mudarem de estado até a resposta final.'
  };

  // Uma mesma empresa pode ter produtos diferentes. A explicacao descreve a
  // pagina aberta para nao repetir uma frase generica da marca.
  const everydayCopyByPage = {
    'borarachar-app.html': 'O Bora Rachar é um MVP de abastecimento conectado: identifica o veículo, acompanha o consumo, aplica a regra de fidelidade e organiza a divisão do pagamento por PIX. A jornada evidencia como integrações entre veículo, posto e pagamento podem reduzir atrito para o cliente e abrir novos serviços digitais para a operação.',
    'carrefour-datacatalog-app.html': 'Este catálogo interativo reúne ativos, schema, classificação de PII, qualidade, dono e linhagem em uma única interface. Em vez de procurar informação em várias ferramentas, a pessoa encontra o dado certo, entende de onde veio e avalia se está pronto para uso; o resultado é uma decisão de consumo e governança mais segura.',
    'carrefour-datadog-app.html': 'Este painel recria a observabilidade de pipelines de dados no Datadog: monitores acompanham execução, qualidade e SLA, enquanto alertas conectam a falha à linhagem e ao time responsável. A simulação evidencia como reduzir o tempo de diagnóstico e impedir que um dado degradado avance silenciosamente para relatórios e produtos.',
    'cetip-hadoop-admin.html': 'Este console representa o apoio operacional à plataforma Hadoop da B3. Ele reúne saúde do HDFS e dos DataNodes, jobs Hive e Impala, controles Sentry e Kerberos e rotinas estatísticas ligadas a PL/SQL e Spotfire; o resultado visível é uma operação mais rastreável, segura e preparada para continuidade.',
    'cogna-data-validator.html': 'Este validador recria o fluxo financeiro da Cogna: dados chegam por Informatica ao Amazon S3, são orquestrados pelo Airflow, processados com PySpark no EMR, testados e publicados no Redshift para o Power BI. O gate evidencia a decisão central do produto: liberar um fechamento íntegro ou bloquear a carga antes que um erro chegue à gestão.',
    'creditas-credit-app.html': 'Este simulador recria a análise de crédito da Creditas. Entradas como produto, renda, histórico e comportamento viram features em PySpark, passam por modelo de risco e política de crédito e resultam em aprovação, limite e taxa explicáveis; para o negócio, evidencia como combinar agilidade comercial com controle de risco e justificativa da decisão.',
    'creditas-dataplatform-app.html': 'Este laboratório explica a modernização de um data lake de crédito: Parquet particionado reduz leitura desnecessária, Hudi processa apenas mudanças, Great Expectations bloqueia dado inválido e Terraform reproduz a infraestrutura. O produto evidencia quais escolhas diminuem custo e reprocessamento e aumentam qualidade, recuperação e previsibilidade operacional.',
    'dafiti-anomaly-detector.html': 'Este detector recria a introdução de Spark e AWS na análise de vendas da Dafiti. PySpark processa o volume distribuído e o modelo compara cada cenário com o comportamento esperado para apontar desvios; para o negócio, evidencia onde investigar estoque, campanha ou operação antes que uma anomalia vire uma decisão equivocada.',
    'politicard-hub.html': 'Este hub reúne dados públicos de agentes políticos em cartas comparáveis: processos, atuação legislativa, transparência e sentimento agregado das redes. A proposta é permitir que o eleitor investigue antes de formar opinião, com origem e critério de cada indicador visíveis.',
    'iara-natura-chat.html': 'Esta consultora virtual recria a jornada de recomendação de beleza da Natura: o cliente escolhe um canal, envia uma foto e recebe indicações de produto combinando visão computacional, contexto da conversa e catálogo. Evidencia como automação conversacional qualifica a recomendação sem perder o tom da marca.',
    'iara-nodered-flow.html': 'Este simulador mostra o fluxo Node-RED por trás da consultora Iara: a entrada, foto ou texto, percorre nós de decisão, serviços de IA e template de resposta até retornar ao canal de origem. Torna visível como uma automação por fluxos encadeia serviços sem código convencional.',
    'experiencia-app.html': 'Esta experiência mobile abre um produto diferente para cada empresa e transforma a arquitetura do case em uma jornada prática. Cada interação deixa visíveis entrada, processamento, decisão e resultado; o objetivo é mostrar o valor entregue sem repetir o dashboard técnico nem utilizar informação confidencial.',
    'heineken-dataplatform-app.html': 'Este produto percorre a plataforma de dados da Heineken, dos sistemas de origem ao consumo em Power BI. Azure Data Factory e Databricks orquestram e transformam dados nas camadas Bronze, Silver e Gold, enquanto qualidade, catálogo, FinOps e observabilidade sustentam a entrega; o resultado é uma base governada para decisões e iniciativas de arquitetura.',
    'heineken-impact-dashboard.html': 'O conteúdo de impacto foi unificado à plataforma principal da Heineken. A visão conecta decisões de arquitetura, governança, FinOps e inteligência artificial às entregas acompanhadas; para o negócio, evidencia como uma função de arquitetura prioriza riscos, oportunidades e próximos passos em vez de produzir apenas documentação.',
    'ibm-crm-integration.html': 'Este simulador recria uma integração IBM de eventos bancários até o CRM. Uma alteração entra pela mensageria, percorre validação e processamento contínuo e chega ao sistema de relacionamento com rastreabilidade; o resultado de negócio é disponibilizar contexto atualizado para atendimento e operação sem depender do lote do dia seguinte.',
    'itau-analytics-dashboard.html': 'Esta apresentação usa os números fornecidos por Jennifer e o pitch de introdução da Batalha de Dados. O fluxo explica como o histórico de transações via Open Finance apoiaria a capacidade de pagamento e as políticas de crédito. Mais agilidade sem aumentar o risco era o objetivo proposto, não um ganho comprovado em produção.',
    'itau-data-factory-app.html': 'Esta plataforma unifica execução, qualidade, catálogo e consumo de dados em ambientes Cloudera e AWS. A engenharia testa queries, aplica guard rails, acompanha jobs e torna custo e linhagem visíveis antes da publicação; para o negócio, evidencia se uma entrega está segura, governada e economicamente adequada para ser consumida.',
    'itau-finops-dashboard.html': 'Este painel FinOps transforma consumo técnico da AWS em cenários de decisão. Custos são organizados por serviço e iniciativa, permitindo comparar baseline, otimização, aumento de demanda e ausência de governança; o resultado é priorizar economia com contexto de capacidade e risco, sem tratar redução de custo como corte cego.',
    'itau-observability-dashboard.html': 'Este laboratório conecta métricas, logs, alertas, pipelines e heatmap para explicar a saúde da plataforma de dados. Ao criar um pico de latência ou uma falha, a pessoa acompanha impacto, investigação e recuperação; para o negócio, evidencia como observabilidade reduz incerteza operacional e protege as jornadas dependentes desses dados.',
    'itau-openfinance-app.html': 'Este aplicativo recria a jornada de consentimento do Open Finance e a transformação de dados autorizados em uma oferta. O motor reúne movimentações de diferentes instituições, calcula sinais de capacidade de pagamento e aplica o score à política de crédito; o resultado é uma decisão mais contextualizada e explicável para cliente e banco.',
    'jellyfish-martech-app.html': 'Este painel MarTech consolida dados de campanhas Amazon Ads de diferentes publishers, calcula indicadores de custo e retorno e monitora integrações. O KPI Bot ajuda a traduzir os sinais em perguntas de negócio; o produto evidencia onde realocar investimento, onde existe desperdício e qual fonte precisa de investigação.',
    'oracle-cs-health.html': 'Este health score organiza sinais de adoção, uso, tickets e capacitação de uma conta Oracle em uma leitura acionável. O cálculo aponta fatores de risco e oportunidade e sugere a próxima conversa técnica ou executiva; para o negócio, evidencia onde proteger renovação, acelerar adoção e avaliar uma oferta complementar aderente.',
    'oracle-solutions-map.html': 'Este mapa de soluções transforma o portfólio de contas em uma visão de risco, adoção e oportunidade. Ao abrir uma conta, sinais técnicos e comerciais são conectados à causa e ao próximo passo; para o negócio, evidencia onde priorizar Customer Success, remover bloqueios e propor novos produtos Oracle com fundamento.',
    'quintoandar-sre-dashboard.html': 'Este painel SRE representa a sustentação de serviços do QuintoAndar em Kubernetes, com monitoramento, SLOs, pods, alertas e runbooks, além do contexto de implantação e manutenção do Atlas. A simulação evidencia como detectar a degradação, localizar a causa e restaurar o serviço com uma resposta operacional rastreável.',
    'santander-big-data-pipeline.html': 'Este pipeline recria entregas analíticas do Santander: dados Oracle são extraídos, seguem para o ecossistema Hadoop, passam por Spark e Hive e são reconciliados antes da publicação. O produto evidencia se fechamento, transferências ou câmbio chegaram completos e íntegros para consumo, reduzindo risco de decisão sobre dados incompletos.',
    'serasa-query-engine.html': 'Este motor recria uma consulta empresarial no Data Lab da Serasa: fontes distintas são coordenadas, enriquecidas com processamento distribuído e consolidadas em uma resposta analítica rastreável. Para o negócio, evidencia como entregar contexto de forma mais rápida e consistente, mostrando a contribuição e o estado de cada fonte sem usar dados reais.'
  };
  const actionCopyByPage = {
    'borarachar-app.html': '<b>O que faz:</b> Conecta veículo, abastecimento e pagamento em uma jornada única, do reconhecimento automático do carro à divisão do valor por PIX. <b>Experimente:</b> inicie a jornada, simule um abastecimento e teste a fidelidade e o pagamento dividido. <b>Resultado:</b> menos atrito no momento do pagamento, fidelização integrada ao fluxo e abertura para novos serviços digitais no posto.',
    'carrefour-datacatalog-app.html': '<b>O que faz:</b> Centraliza schema, responsável, qualidade e linhagem de mais de 650 ativos de dados em uma única busca. <b>Experimente:</b> filtre por domínio ou classificação de dados sensíveis, abra um ativo e verifique se está pronto para consumo. <b>Resultado:</b> decisão de uso mais rápida, ownership visível e fim da procura por informação dispersa entre ferramentas.',
    'carrefour-datadog-app.html': '<b>O que faz:</b> Monitora pipelines de dados e, quando algo falha, mostra qual dado degradou, quem é o responsável e qual a origem do problema. <b>Experimente:</b> simule um incidente e acompanhe a cascata de alertas até a resolução. <b>Resultado:</b> tempo de diagnóstico reduzido de horas para minutos e bloqueio de dado degradado antes que chegue aos relatórios.',
    'cetip-hadoop-admin.html': '<b>O que faz:</b> Consolida em uma tela a saúde da plataforma Hadoop da bolsa: HDFS, DataNodes, controles de segurança (Sentry e Kerberos), jobs e rotinas SQL. <b>Experimente:</b> execute o checklist operacional e acompanhe cada componente confirmar seu estado. <b>Resultado:</b> continuidade operacional sustentada, trilha de auditoria completa e resposta mais rápida em situações críticas.',
    'cogna-data-validator.html': '<b>O que faz:</b> Aplica um portão de qualidade que bloqueia automaticamente dados incorretos antes que cheguem ao Power BI e à gestão. <b>Experimente:</b> alterne entre o ciclo normal e o cenário com erro e veja o portão liberar ou bloquear a carga. <b>Resultado:</b> fechamento financeiro íntegro, relatórios confiáveis e decisão de gestão apoiada em dado validado.',
    'creditas-credit-app.html': '<b>O que faz:</b> Transforma dados do cliente, como renda, histórico e comportamento, em uma decisão de crédito explicável. <b>Experimente:</b> ajuste as entradas e observe como cada uma altera limite e taxa, abrindo a lógica por trás do resultado. <b>Resultado:</b> análise mais rápida, justificativa clara para o cliente e risco controlado com transparência.',
    'creditas-dataplatform-app.html': '<b>O que faz:</b> Apresenta as escolhas de arquitetura que reduzem custo (Parquet e Hudi), bloqueiam dado inválido (Great Expectations) e tornam o ambiente reproduzível (Terraform). <b>Experimente:</b> compare a leitura em CSV e em Parquet e percorra cada decisão de arquitetura. <b>Resultado:</b> menor custo de armazenamento e processamento, menos reprocessamento e operação previsível.',
    'dafiti-anomaly-detector.html': '<b>O que faz:</b> Usa um modelo em Spark para identificar quando as vendas fogem do padrão esperado. <b>Experimente:</b> escolha um cenário, como dia normal ou Black Friday, simule a checagem e compare os resultados. <b>Resultado:</b> antecipação de rupturas de estoque, campanhas recalibradas com evidência e perdas evitadas.',
    'politicard-hub.html': '<b>O que faz:</b> Reúne dados públicos de agentes políticos em cartas comparáveis, com processos, atuação legislativa, transparência e sentimento agregado. <b>Experimente:</b> filtre por partido, ordene por transparência e abra uma carta para ver a origem de cada indicador. <b>Resultado:</b> comparação entre candidatos apoiada em dado público e critério explícito, em vez de percepção isolada.',
    'iara-natura-chat.html': '<b>O que faz:</b> Recria a jornada de recomendação de beleza, do canal escolhido pelo cliente à indicação de produto combinando análise de imagem e catálogo. <b>Experimente:</b> escolha um canal, envie uma foto fictícia e acompanhe a consultora explicar cada indicação. <b>Resultado:</b> recomendação personalizada e justificada, com atendimento automatizado que mantém o tom da marca.',
    'iara-nodered-flow.html': '<b>O que faz:</b> Mostra o fluxo Node-RED por trás da consultora: a entrada percorre nós de decisão, serviços de IA e template de resposta até voltar ao canal de origem. <b>Experimente:</b> simule uma foto ou um texto e acompanhe cada nó ser acionado no painel de debug. <b>Resultado:</b> a automação fica visível etapa a etapa, evidenciando como serviços são encadeados sem código convencional.',
    'experiencia-app.html': '<b>O que faz:</b> Transforma arquitetura técnica em uma jornada prática dentro de um celular, tornando visíveis a entrada, o processamento e o resultado de cada etapa. <b>Experimente:</b> escolha uma empresa e avance pela jornada. <b>Resultado:</b> o valor técnico fica compreensível sem expor informação confidencial e sem repetir o dashboard.',
    'heineken-dataplatform-app.html': '<b>O que faz:</b> Percorre o pipeline completo, do SAP ao Azure Lake nas camadas Bronze, Silver e Gold, até o consumo em Power BI. <b>Experimente:</b> clique em cada nó para ver ferramentas, regras e controles, e abra a visão de FinOps e capacitação. <b>Resultado:</b> uma base governada que sustenta dezenas de iniciativas simultâneas de dados e IA.',
    'heineken-impact-dashboard.html': '<b>O que faz:</b> Conecta cada decisão de arquitetura, em governança, FinOps e IA, aos resultados concretos de economia, capacitação e iniciativas entregues. <b>Experimente:</b> abra cada iniciativa e veja responsável, prazo e impacto medido. <b>Resultado:</b> arquitetura demonstrada como alavanca de negócio, não como centro de custo.',
    'ibm-crm-integration.html': '<b>O que faz:</b> Acompanha um evento bancário, como alteração de limite, cadastro ou alerta, desde a mensageria até a chegada rastreável ao CRM. <b>Experimente:</b> escolha o tipo de evento, envie e acompanhe a latência em cada etapa do percurso. <b>Resultado:</b> informação que antes levava um dia passa a chegar em minutos, com contexto atualizado para o atendimento.',
    'itau-analytics-dashboard.html': 'Esta apresentação usa os números fornecidos por Jennifer e o pitch de introdução da Batalha de Dados. O fluxo explica como o histórico de transações via Open Finance apoiaria a capacidade de pagamento e as políticas de crédito. Mais agilidade sem aumentar o risco era o objetivo proposto, não um ganho comprovado em produção.',
    'itau-data-factory-app.html': '<b>O que faz:</b> Executa consultas com catálogo, governança e custo visíveis antes da execução, permitindo simular falhas para entender a propagação. <b>Experimente:</b> execute uma consulta, simule um erro e abra o catálogo de consumo. <b>Resultado:</b> nenhuma consulta fora de controle em produção, custo previsto e responsabilidade atribuída.',
    'itau-finops-dashboard.html': '<b>O que faz:</b> Transforma o consumo de nuvem em cenários de decisão: baseline, otimizado, aumento de demanda e ausência de governança. <b>Experimente:</b> alterne entre os cenários e abra cada iniciativa de otimização. <b>Resultado:</b> economia priorizada com contexto de capacidade e risco, em vez de corte indiscriminado.',
    'itau-observability-dashboard.html': '<b>O que faz:</b> Conecta a cadeia completa de observabilidade: métrica, alerta, investigação, ação e restauração do serviço. <b>Experimente:</b> simule um pico de latência, use o heatmap para localizar a origem e execute o runbook de recuperação. <b>Resultado:</b> tempo de recuperação reduzido, menos incerteza operacional e proteção das jornadas que dependem desses dados.',
    'itau-openfinance-app.html': '<b>O que faz:</b> Conecta a autorização do cliente no Open Finance à extração de dados de diferentes bancos, ao cálculo do score de capacidade e à oferta personalizada. <b>Experimente:</b> autorize instituições, avance pela jornada e simule um novo cenário. <b>Resultado:</b> ofertas mais aderentes à capacidade real do cliente, com decisão explicável para as duas partes.',
    'jellyfish-martech-app.html': '<b>O que faz:</b> Consolida campanhas de Amazon Ads de diferentes publishers em indicadores de custo, retorno e latência, com um assistente que traduz os sinais em decisão. <b>Experimente:</b> explore os gráficos, faça uma pergunta ao assistente e compare publishers. <b>Resultado:</b> realocação de investimento fundamentada em evidência e identificação rápida de desperdício.',
    'oracle-cs-health.html': '<b>O que faz:</b> Calcula o health score de uma conta a partir de sinais de uso, adoção, suporte e capacitação, convertendo-os em risco, oportunidade e recomendação. <b>Experimente:</b> ajuste os sinais, calcule o score e abra a recomendação sugerida. <b>Resultado:</b> renovações protegidas, bloqueios técnicos endereçados e propostas complementares fundamentadas.',
    'oracle-solutions-map.html': '<b>O que faz:</b> Apresenta o mapa de risco e oportunidade de toda a carteira de contas, conectando score, causa técnica e próximo passo. <b>Experimente:</b> filtre por risco, explore uma conta e consulte a metodologia do cálculo. <b>Resultado:</b> priorização das renovações ameaçadas e propostas mais relevantes para cada cliente.',
    'quintoandar-sre-dashboard.html': '<b>O que faz:</b> Reúne a operação SRE em Kubernetes: pods, alertas, SLOs e runbooks, conectando sintoma, causa e ação de recuperação. <b>Experimente:</b> simule um incidente, investigue os pods afetados e execute o runbook. <b>Resultado:</b> degradação detectada cedo, causa localizada rapidamente e serviço restaurado com resposta rastreável.',
    'santander-big-data-pipeline.html': '<b>O que faz:</b> Percorre o pipeline batch de Oracle para Hadoop, processamento em Spark, reconciliação e publicação analítica, validando a integridade antes do consumo. <b>Experimente:</b> escolha uma entrega, como fechamento ou câmbio, e acompanhe tabelas, logs e reconciliação. <b>Resultado:</b> relatórios completos e íntegros, sem reprocessamento e com menor risco de decisão sobre dado incompleto.',
    'serasa-query-engine.html': '<b>O que faz:</b> Coordena múltiplas fontes de dados, executa a transformação distribuída e consolida uma resposta analítica rastreável. <b>Experimente:</b> escolha uma empresa fictícia, defina a profundidade da consulta e acompanhe cada fonte responder. <b>Resultado:</b> resposta entregue com mais velocidade e consistência, mostrando a contribuição e o estado de cada fonte.'
  };

  function installExperienceGuidance() {
    if (!isAppSurface || isHeitor) return;

    // Reutiliza o bloco compartilhado quando ele já existe e remove eventuais
    // duplicatas de execuções anteriores. O conteúdo é sempre recalculado para
    // a página atual, portanto uma versão antiga nunca sobrevive ao cache/DOM.
    const guides = Array.from(document.querySelectorAll('.everyday-translation'));
    let guide = guides.shift();
    guides.forEach((duplicate) => duplicate.remove());
    const isNewGuide = !guide;
    if (isNewGuide) {
      guide = document.createElement('section');
      guide.className = 'everyday-translation';
      guide.setAttribute('aria-label', 'Explicação prática da demonstração');
    }

    const everydayText = everydayCopyByPage[file] || everydayCopy[key] || everydayCopy.jen;
    const actionText = actionCopyByPage[file] || actionCopy[key] || actionCopy.jen;
    guide.innerHTML = '<span class="everyday-icon" aria-hidden="true">✦</span><div><strong>Traduzindo para o dia a dia</strong><p>' + everydayText + '</p><span class="everyday-action">' + actionText + '</span></div>';

    if (isNewGuide) {
      const integrity = document.querySelector('.demo-integrity-banner');
      const top = document.querySelector('.topbar,.app-topbar,.appbar,.toolbar');
      if (integrity) integrity.insertAdjacentElement('afterend', guide);
      else if (top) top.insertAdjacentElement('afterend', guide);
      else {
        const nav = document.querySelector('nav,header');
        if (nav) nav.insertAdjacentElement('afterend', guide);
        else document.body.insertBefore(guide, document.body.firstChild);
      }
    }

    const controls = document.querySelectorAll('button,[role="button"],[onclick],a.btn,a[class*="-btn"],.tab,.sample-btn,.bank-item,.qtype-btn');
    controls.forEach((control) => {
      if (control.closest('.portfolio-nav,.portfolio-drawer,.portfolio-mega,.detail-index,.site-footer,.context-info-btn,.porto-nav,.gn,#globalNav,.demo-integrity-banner,.everyday-translation') || control.disabled) return;
      control.classList.add('jen-interactive');
    });

    const primarySelectors = '.calc-btn,#run,#runQuery,#quickRun,.run-btn,.incident-replay-btn,.primary-btn,.btn-primary,.action-btn,.btn.primary,.btn.success,.al-cta,.lbtn.p,[data-primary-action]';
    const primaries = Array.from(document.querySelectorAll(primarySelectors)).filter((control) => !control.closest('.portfolio-nav,.portfolio-drawer,.portfolio-mega,.detail-index,.site-footer,.context-info-btn,.porto-nav,.gn,#globalNav'));
    let guidedControls = primaries.slice(0, 3);
    if (!guidedControls.length) {
      const fallback = Array.from(controls).find((control) => {
        if (control.closest('.portfolio-nav,.portfolio-drawer,.portfolio-mega,.detail-index,.site-footer,.context-info-btn,.porto-nav,.gn,#globalNav,.topbar,.app-topbar,.appbar,.toolbar')) return false;
        if (control.matches('.active,.on,[aria-selected="true"]')) return false;
        const box = control.getBoundingClientRect();
        return box.width > 24 && box.height > 20;
      });
      if (fallback) guidedControls = [fallback];
    }
    guidedControls.forEach((control, index) => {
      control.classList.add('jen-primary-action');
      if (index === 0) control.classList.add('jen-start-here');
      const controlBox = control.getBoundingClientRect();
      if (controlBox.width < 170 || controlBox.height < 38) control.classList.add('jen-compact-control');
      if (!control.querySelector('.jen-click-badge')) {
        const badge = document.createElement('span');
        badge.className = 'jen-click-badge';
        badge.setAttribute('aria-hidden', 'true');
        badge.textContent = index === 0 ? 'COMECE AQUI' : 'CLIQUE';
        control.appendChild(badge);
      }
    });

    document.addEventListener('click', (event) => {
      const control = event.target.closest('.jen-interactive,.jen-primary-action');
      if (!control) return;
      control.classList.remove('jen-was-clicked');
      void control.offsetWidth;
      control.classList.add('jen-was-clicked');
      window.setTimeout(() => control.classList.remove('jen-was-clicked'), 420);
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => { absolutizeSeo(); installIntegrityLayer(); installExperienceGuidance(); });
  } else {
    absolutizeSeo();
    installIntegrityLayer();
    installExperienceGuidance();
  }

  window.JenCompanyTheme = Object.freeze({ key, ...p, palette: savedPalette });
})();
