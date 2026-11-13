/* Shared, dependency-free lexical retrieval. No API key or private data in this file. */
(function (root) {
  'use strict';
  const norm = s => String(s || '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
  const stop = new Set('a o as os de da do das dos em na no nas nos um uma e ou que qual quais como por para com se sua seu ela ele dela dele voce voces vc vcs tem ter foi ser fez faz fazer me eu quero saber sobre conte conta gostaria preciso pode poderia mostrar diga mais isso esse essa isto favor minha meu meus minhas nossa nosso ajudar ajuda pratica pratico deveria ela aceita entende the is are about what how her she tell me and of to in'.split(' '));
  function tokens(s) { return norm(s).match(/[a-z0-9+#]+/g)?.filter(t => t.length > 1 && !stop.has(t)) || []; }
  const groups = [
    ['lideranca', 'lider', 'liderar', 'gestao', 'equipe', 'time', 'lead', 'manager'],
    ['certificacoes', 'certificacao', 'certificados', 'credenciais', 'certificado', 'badge'],
    ['contratar', 'contratacao', 'servicos', 'servico', 'consultoria', 'proposta', 'hire'],
    ['preco', 'precos', 'valor', 'valores', 'orcamento', 'custa', 'custo', 'cobrar'],
    ['experiencia', 'trajetoria', 'carreira', 'historico', 'background'],
    ['mentoria', 'mentora', 'pdi', 'transicao', 'iniciante'],
    ['palestras', 'palestra', 'workshop', 'workshops', 'talk', 'talks'],
    ['governanca', 'catalogo', 'catalog', 'metadata', 'openmetadata', 'qualidade'],
    ['economia', 'economizar', 'finops', 'reduzir', 'custos'],
    ['formacao', 'graduacao', 'faculdade', 'academica', 'estudou'],
    ['inteligencia', 'artificial', 'ia', 'ai', 'llm', 'rag', 'agentes'],
    ['remoto', 'remota', 'remote', 'presencial', 'hibrido'],
    ['depoimento', 'depoimentos', 'recomendacoes', 'recomendacao', 'feedback']
  ];
  const aliases = {
    'Itaú Unibanco': ['itau', 'unibanco'], 'Heineken': ['heineken'], 'Carrefour': ['carrefour'],
    'Creditas': ['creditas'], 'QuintoAndar': ['quintoandar', 'quinto andar'], 'Cogna Educação': ['cogna', 'kroton'],
    'Serasa Experian': ['serasa', 'experian'], 'Dafiti': ['dafiti'], 'Oracle': ['oracle'],
    'IBM': ['ibm'], 'Santander': ['santander'], 'B3': ['cetip', 'b3']
  };
  const whatsapp = 'https://wa.me/5511988432930';
  const contact = { title: 'Conversar com Jennifer', href: whatsapp };
  // Normalize conversational spelling before routing, not just during document search.
  const spellings = { q:'que', oq:'o que', pq:'por que', vc:'voce', vcs:'voces', qnt:'quanto', qnto:'quanto', qto:'quanto', quanto:'quanto', tb:'tambem', tbm:'tambem', n:'nao', p:'para', pra:'para', pro:'para o', fes:'fez', oque:'o que', jennifer:'jennifer', jenifer:'jennifer', jenni:'jennifer', jeny:'jennifer' };
  const routingWords = [...new Set([...Object.values(aliases).flat().flatMap(a => a.split(' ')), 'mentoria','palestra','workshop','contratacao','certificacao','databricks','kubernetes','terraform','governanca','tecnologia','resultados','orcamento','consultoria','experiencia'])].filter(w => w.length >= 5);
  function oneEdit(a, b) {
    if (a === b) return true;
    if (Math.abs(a.length - b.length) > 1) return false;
    if (a.length === b.length) {
      const diff = [...a].flatMap((c, i) => c === b[i] ? [] : [i]);
      return diff.length === 1 || (diff.length === 2 && diff[1] === diff[0] + 1 && a[diff[0]] === b[diff[1]] && a[diff[1]] === b[diff[0]]);
    }
    let i = 0, j = 0, edits = 0;
    while (i < a.length && j < b.length) {
      if (a[i] === b[j]) { i++; j++; }
      else { if (++edits > 1) return false; if (a.length > b.length) i++; else j++; }
    }
    return true;
  }
  function conversational(s) {
    return norm(s).replace(/[a-z0-9]+/g, word => {
      if (spellings[word]) return spellings[word];
      if (word.length < 5 || routingWords.includes(word)) return word;
      const near = routingWords.filter(w => oneEdit(word, w));
      return near.length === 1 ? near[0] : word;
    }).replace(/\b(?:esquece|esqueca|deixa de lado)\b[^,;]+[,;]/g, ' ')
      .replace(/\bnao (?:quero|procuro|preciso de|estou perguntando)(?: saber)?(?: sobre)?\s+(?:uma? )?(?:mentoria|pdi|palestra|workshop|preco|orcamento|consultoria)\b/g, ' ')
      .replace(/\s+/g, ' ').trim();
  }

  function commonIntent(question){
    const n=conversational(question).replace(/\b(?:jenifer|jennipher|jenniferr|jenni|jeny)\b/g,'jennifer');
    const fee=/\b(?:precos?|valor(?:es)?|orcamento|investimento|cache|honorarios?|salario|pretensao|tarifas?|price|pricing|fees?|precio|coste|cuesta|presupuesto)\b|quanto.{0,30}\b(?:custa|cobra|cobrar|fica|sai|e|eh)\b|いくら|料金|価格/.test(n);
    const business=/navnext|carteira|economia|economiz|finops|renda|lucro|receita|resultad|premi|auc|projec|estimad|potencial/.test(n);
    const commercial=/mentoria|palestra|workshop|consultoria|contratar|honorari|proposal|mentoring|メンタリング/.test(n);
    if(fee&&(!business||commercial)&&!/garant|emprego|guarantee|job/.test(n))return 'fees';
    const generic=new Set('jennifer jenny jen ela ele voce sao suas seus usa usar utiliza utilizadas conhecimento conhecimentos qualificacoes vida pontos fortes diferencial profissional pessoa moca menina sabe sabem saber conhece conhecer domina dominar faz fazer trabalha trabalhar trabalho trabalha trabalha competencias competencia habilidades habilidade capacidades capacidade especialidades especialidade especialista especializacao especializacoes stack tecnologias tecnologia ferramentas principais principal melhor areas area atuacao atua consegue pode oferece oferecer servicos servico programar programacao ajuda ajudar sobre geral resumo explique explicar quais qual que conhece conte me fale falar um uma pouco dela dele voces what does know knows skills abilities expertise her she jennifer do tools can experience capabilities what does doing'.split(' '));
    const remaining=tokens(n).filter(word=>!generic.has(word));
    const overview=/sabe|saber|faz|fazer|trabalh|conhecimento|qualific|pontos? fortes?|diferencial|competen|habilidad|especiali|capacidad|stack|tecnolog|ferrament|pode ajudar|pode me ajudar|skills|expertise|what.{0,20}(?:know|do)/.test(n);
    if(overview&&!remaining.length)return 'skills';
    if(/^(?:que sabe hacer|que hace jennifer|a que se dedica|que conocimientos tiene)/.test(n))return 'skills';
    if(/^(?:(?:jennifer|ジェニファー)(?:は|の|さん)*)?(?:どんなスキル|何ができ|専門は|スキル|得意)/.test(n))return 'skills';
    return null;
  }

  const isFollowUp = s => {
    const n = conversational(s);
    return /^(e\s+)?(la\s+)?(o formato|qual o formato|como funciona|os resultados|quais resultados|os numeros|os ganhos|a stack|o stack|as tecnologias|que tecnologias|usava (o que|que) de tecnologia|quanto|quanto custa|quanto sai|quanto fica|quanto tempo.*|o preco|o valor|por onde comeco|quando|o periodo|o time|equipe|nesse case|nessa empresa|nela|me conta mais|fale mais|explica melhor)\s*[?!.]*$/.test(n)
      || /^(e )?(quais? (foram|sao|eram) (os?|as?) |com que |que )(resultados|numeros|ganhos|tecnologias|ferramentas|stack|periodo|time)( (usad[oa]s?|dela|la))?[?!.]*$/.test(n)
      || /\b(fontes|comprovacao|evidencias)\b/.test(n) && /ver|mostr|cade|onde|quais/.test(n) && !/fontes de dados|ingestao|pipeline/.test(n);
  };
  const isSummary = s => /\b(?:resum[ae]|resumir|curt[oa]|poucas palavras|(?:1|2|duas) linhas)\b/.test(conversational(s)) || /\bresumo\b/.test(conversational(s)) && !/resumo (da |de )?carreira/.test(conversational(s));
  const isAck = s => /^(sim|nao|ok|okay|certo|entendi|pode ser|beleza|legal|aham)[!?.\s]*$/.test(conversational(s));
  const guidance = {
    services: 'Jennifer conecta arquitetura, engenharia de dados e liderança técnica. O melhor próximo passo é contar o desafio, o contexto da equipe e o resultado esperado para definir uma parceria com escopo claro.',
    mentor: 'Para sua carreira, Jennifer oferece mentoria e PDI. Conte em que momento você está e qual mudança quer construir; isso ajuda a direcionar a conversa.',
    stage: 'Para seu evento ou equipe, ela oferece palestras e workshops sobre dados, arquitetura, carreira e liderança técnica. Qual é o público e o objetivo do encontro?',
    technical: 'Quer aprofundar a decisão técnica ou conversar sobre como essa experiência se conecta ao seu projeto?',
    general: 'O diferencial é reunir profundidade técnica, liderança e comunicação para transformar desafios de dados em decisões e entregas. Quer explorar um case ou conversar sobre uma parceria?'
  };
  function intent(q) {
    const n = norm(q);
    if (/preco|orcamento|quanto (custa|cobra|ganha)|salario|remuneracao|disponibilidade|comeca|comecar amanha/.test(n)) return 'commercial';
    if (/mentoria|pdi|transicao|migrar|iniciante/.test(n)) return 'mentor';
    if (/palestra|workshop|evento|talk/.test(n)) return 'stage';
    if (/contratar|contratacao|consultoria|servico|clt|\bpj\b|por hora|remot|presencial|hibrid/.test(n)) return 'services';
    if (/certific|credenci|harvard|cs50|databricks certified/.test(n)) return 'credential';
    if (/depoimento|recomend|feedback/.test(n)) return 'testimonial';
    return 'technical';
  }
  function createEngine(data) {
    const docs = data.chunks;
    const index = docs.map(d => {
      const ts = tokens(d.title + ' ' + (d.company || '') + ' ' + d.text), tf = new Map();
      ts.forEach(t => tf.set(t, (tf.get(t) || 0) + 1));
      return { tf, length: ts.length, title: new Set(tokens(d.title)) };
    });
    const df = new Map();
    index.forEach(d => d.tf.forEach((_, t) => df.set(t, (df.get(t) || 0) + 1)));
    const average = index.reduce((s, d) => s + d.length, 0) / index.length;
    function companyContext(question, history = []) {
      const find = text => {
        const n = conversational(text);
        return Object.entries(aliases).map(([name, list]) => ({ name, at: Math.min(...list.map(a => n.search(new RegExp('\\b' + a + '\\b'))).filter(i => i >= 0)) })).filter(c => Number.isFinite(c.at)).sort((a, b) => a.at - b.at).map(c => c.name);
      };
      const current = find(question);
      if (current.length) return current;
      if (isFollowUp(question)) {
        // Stop at the last substantive user topic; never cross a switch to mentoria/event/etc.
        const previous = [...history].reverse().find(m => m.role === 'user' && !isFollowUp(m.content) && !isAck(m.content) && !isSummary(m.content));
        return previous ? find(previous.content) : [];
      }
      return [];
    }
    function corrected(t) {
      if (df.has(t) || t.length < 5) return t;
      // One-edit typo correction, restricted to vocabulary already present in the site.
      for (const word of df.keys()) {
        if (Math.abs(word.length - t.length) > 1) continue;
        let a = 0, b = 0, edits = 0;
        while (a < t.length && b < word.length && edits < 2) {
          if (t[a] === word[b]) { a++; b++; }
          else { edits++; if (t.length >= word.length) a++; if (word.length >= t.length) b++; }
        }
        if (edits + (t.length - a) + (word.length - b) === 1) return word;
      }
      return t;
    }
    function search(question, history = [], limit = 6) {
      question = conversational(question);
      const n = norm(question);
      const companies = companyContext(question, history);
      const exact = new Set(tokens(question).map(corrected)), expanded = new Set(exact);
      const generic = new Set('experiencia engenharia dados arquitetura jennifer jen jenny tecnica tecnico projetos projeto cases case trabalho resultados sabe conhece domina'.split(' '));
      const focus = [...exact].filter(t => !generic.has(t) && df.has(t) && df.get(t) < docs.length * .15);
      groups.forEach(g => { if (g.some(t => exact.has(t))) g.forEach(t => expanded.add(t)); });
      companies.forEach(c => tokens(c).forEach(t => expanded.add(t)));
      const target = intent(question);
      const ranked = docs.map((d, i) => {
        const item = index[i]; let score = 0, matched = 0;
        for (const t of expanded) {
          const f = item.tf.get(t) || 0;
          if (!f) continue;
          if (exact.has(t)) matched++;
          const idf = Math.log(1 + (docs.length - (df.get(t) || 0) + .5) / ((df.get(t) || 0) + .5));
          score += idf * f * 2.2 / (f + 1.2 * (.25 + .75 * item.length / average)) * (exact.has(t) ? 1 : .28);
          if (item.title.has(t) && exact.has(t)) score += idf * 1.5;
        }
        if (companies.length) {
          if (d.company && !companies.includes(d.company)) score *= .04;
          else if (companies.includes(d.company)) score += 6;
          if (companies.includes(d.company) && /trajetória$/.test(d.title) && !['credential', 'testimonial'].includes(target)) score += 20;
          if (companies.includes(d.company) && /resultado|impacto|entreg/.test(n) && /Resultados|Entregas|Indicadores/.test(d.title)) score += 14;
          if (companies.includes(d.company) && /stack|tecnologi|ferrament/.test(n) && /Stack|Tecnologias/.test(d.title)) score += 18;
        }
        if (target === 'credential' && d.kind === 'credential') score += 4;
        if (target !== 'credential' && d.kind === 'credential') score *= .4;
        if (d.kind === 'faq' && !/como|por que|porque|o que e|diferenca/.test(n)) score *= .65;
        if (target === 'testimonial' && d.kind === 'testimonial') score += 4;
        if (target === 'commercial' && d.kind === 'commercial') score += 20;
        if (target === 'services' && d.kind === 'service') score += 5;
        if (/lider|equipe|time|gestao/.test(n) && d.kind === 'company' && /lider|equipe|time|gestao/.test(norm(d.title))) score += 8;
        if (/experiencia|trajetoria|quem e|apresent|por que contratar|quais empresas|12 empresas/.test(n) && exact.size < 5 && !companies.length && /resumo profissional/.test(d.title)) score += 20;
        if (d.kind === 'demo') score *= .55;
        if (focus.length) {
          const focusMatches = focus.filter(t => item.tf.has(t)).length;
          if (!focusMatches) score *= .08;
          else score += 8 * focusMatches / focus.length;
          if (focusMatches && /Tecnologias|Stack/.test(d.title)) score += 5;
        }
        return { ...d, score, matched };
      }).filter(d => d.score > 1 && (d.matched || (companies.length && companies.includes(d.company)) || target === 'commercial')).sort((a, b) => b.score - a.score);
      return ranked.slice(0, limit);
    }
    function reply(question, history = []) {
      const q = conversational(String(question || '').trim().slice(0, 1200)), n = norm(q), target = intent(q);
      const result = (text, evidence = [], extra = {}) => ({ text: text.replace(/ — /g, ': ').replace(/uso de verdade/g,'aplicação prática').replace(/experiência real/g,'experiência documentada'), sources: [...new Map(evidence.slice().reverse().map(d => [d.href, { title: d.title, href: d.href }])).values()].slice(0, 4), cta: contact, mode: 'local', ...extra });
      // Carry only visitor-provided career context, stopping at an explicit
      // switch to a company, hiring or event. Assistant questions are not facts.
      const careerTurns = [...history.filter(m=>m.role==='user').map(m=>conversational(m.content)),q].slice(-7);
      let careerStart=0;
      careerTurns.forEach((turn,i)=>{if(companyContext(turn).length||/sou (?:do |de )?rh|(?:minha|nossa) empresa|palestra|workshop|nao quero mentoria/.test(turn))careerStart=i+1;});
      const careerContext=careerTurns.slice(careerStart).join(' ');
      const mentoringContext=/mentoria|pdi/.test(careerContext);
      const beginner=/comecando (?:do zero|agora)|do zero|nao sei programar|nunca programei|iniciante/.test(careerContext);
      const migrating=/migrar|migrando|transicao|outra area/.test(careerContext);
      function editorial(id) {
        const answer = data.answers?.[id];
        if(!answer)return null;
        let text=answer.text;
        const knownStage=beginner?'está começando do zero':migrating?'está migrando de área':'';
        if(knownStage&&id==='mentor')text=text.replace('Você está começando do zero, migrando de outra área ou buscando uma posição mais sênior?',`Considerando que você ${knownStage}, a conversa pode partir desse contexto para definir um PDI realista com Jennifer, conforme seu objetivo e sua disponibilidade de estudo.`);
        if(knownStage&&id==='price-mentor')text=`O valor da mentoria é combinado diretamente com Jennifer; não há tabela pública de preços. Considerando que você ${knownStage}, leve esse contexto e o objetivo da transição para desenhar um PDI com ela.\n\nO botão de contato abaixo abre o WhatsApp dela para alinhar escopo, formato e proposta — sem compromisso ou agendamento automático.`;
        return result(text, answer.sources, { grounded: true, answerId: id });
      }
      const topicIndex = history.findLastIndex(m => m.role === 'user' && !isFollowUp(m.content) && !isAck(m.content) && !isSummary(m.content));
      const previousTopic = conversational(history[topicIndex]?.content || '');
      // Explicit visitor intent wins over incidental lexical matches in technical pages.
      const direct=(text,href='index.html#servicos',title='Serviços e contato')=>result(text,[{href,title}],{grounded:true});
      const english=/\b(does|speak|speaks|tell me|what|how|can she|her experience|in english|english talk|hire|mentoring|weaknesses)\b/.test(n)||globalThis.document?.documentElement?.lang==='en';
      const sharedIntent=commonIntent(q);
      if(sharedIntent==='skills'&&!(isFollowUp(q)&&history.some(m=>m.role==='user'))){if(english)return direct("Jennifer works in data engineering, solution architecture and technical leadership.\n\nHer documented skills include Python, SQL and PySpark; batch and streaming pipelines; AWS, Azure, Google Cloud and Databricks; data modeling, quality, governance and modernization from on-premises to cloud. She also connects data engineering with AI/ML, RAG and agents.\n\nShe leads teams and offers mentoring, talks and workshops. Which area would you like to explore?",'index.html#competencias','Skills and services');return editorial('skills-overview');}
      if(english){
        let text='I can help with Jennifer’s documented work in data engineering, architecture, leadership, mentoring and talks. I could not find enough verified information for that specific question. Please confirm it directly with Jennifer; I will not infer skills, prices or availability.';
        if(/speak|english/.test(n))text=/talk|present|workshop|keynote/.test(n)?'The portfolio documents technical meetings in English at Heineken, but it does not confirm talks delivered in English. Please discuss the audience, language and format directly with Jennifer.':'The Heineken case documents technical meetings and international collaboration in English. It does not establish a formal proficiency level or confirm that every service is offered in English.';
        else if(/mentor|career change|beginner/.test(n))text='Jennifer offers career mentoring and an individual development plan (PDI). The starting point is your background, goals and available study time. Format, price and schedule are agreed directly with her. Mentoring does not guarantee a job or a hiring deadline.';
        else if(/price|cost|proposal|hire|remote/.test(n))text='Jennifer presents a fully remote service model. There is no public price list or live availability calendar. To request a proposal, send the challenge, expected deliverables, preferred format and timeline through the contact link.';
        else if(/leadership|experience|career/.test(n))text='Jennifer combines data engineering, solution architecture and technical leadership across 12 documented companies. Examples include data governance with OpenMetadata at Carrefour, data and credit platforms at Itaú, and architecture, AI and FinOps at Heineken. The company cases distinguish professional history, estimates and interactive simulations.';
        else if(/football|soccer/.test(n))text='My scope is Jennifer’s professional portfolio, not football rankings. I can help with her experience, services, mentoring or talks.';
        return {...result(text,[{href:'index.html#secao-trajetoria',title:'Career and project sources'}],{grounded:false}),cta:{title:'Contact Jennifer',href:whatsapp}};
      }
      if(/futebol|melhor time|campeonato|time de coracao/.test(n))return result('Meu foco é o portfólio profissional da Jennifer, não rankings de futebol. Posso ajudar com experiências, projetos, mentoria, palestras ou contratação.',[],{grounded:false});
      if(/ingles|fluente|fluencia/.test(n))return direct(/palestra|workshop|apresent/.test(n)?'O case da Heineken registra reuniões e conversas técnicas em inglês, mas não confirma palestras ministradas nesse idioma. Para seu evento, vale alinhar idioma, público e formato diretamente com Jennifer.':'O case da Heineken documenta reuniões, alinhamentos e conversas técnicas em inglês com equipes internacionais. Isso não define um nível formal de proficiência. Para uma vaga, entrevista ou evento, confirme a necessidade específica com Jennifer.','experiencia.html#heineken','Heineken · Colaboração internacional');
      if(/pontos? fracos?|limitacoes|defeitos/.test(n))return result('O portfólio não publica uma avaliação de pontos fracos pessoais. Para avaliar aderência, vale conversar sobre o desafio, pedir exemplos de decisões e discutir o que ela faria diferente. Posso mostrar os cases e os limites declarados de cada demonstração, sem inventar uma autocrítica em nome dela.',[{href:'index.html#secao-trajetoria',title:'Experiências e decisões'}],{grounded:false});
      if(/\bdbt\b/.test(n))return result('Não encontrei um projeto específico com dbt documentado na base. Há experiências relacionadas em transformação, qualidade e orquestração de dados, mas elas não comprovam uso de dbt. Se essa ferramenta for essencial para a vaga, confirme diretamente com Jennifer.',[],{grounded:false});
      if(/quant[oa]s?.{0,12}premi|numero.{0,10}premi/.test(n))return direct('O site reúne participações, colocações premiadas e mentoria de time premiado, que não são a mesma categoria. Por isso não apresento um total único de prêmios. A seção Conquistas permite conferir cada evento e o tipo de reconhecimento.','index.html#conquistas','Conquistas · Evento e reconhecimento');
      if(/quant[oa]s?.{0,12}paises|em quais paises/.test(n))return direct('O case da Heineken cita colaboração com Países Baixos, Portugal, Polônia, México e Estados Unidos, a partir da operação brasileira. Colaboração internacional não significa ter sido empregada ou ter morado em todos esses países. Não há um total consolidado verificado para toda a carreira.','experiencia.html#heineken','Heineken · Equipes internacionais');
      if(/databricks/.test(n)&&/pratica|so certific|aplic|projeto/.test(n))return direct('Além da certificação, a Heineken documenta Databricks e PySpark no processamento distribuído e na preparação de dados da camada Gold para consumo analítico. O case também explica o deslocamento de transformações pesadas do Power Query para Databricks. Os tempos e percentuais das reconstruções didáticas devem ser lidos como simulação, não como resultado adicional comprovado.','experiencia.html#heineken','Heineken · Databricks e PySpark');
      if(/presencial|hibrido|remot/.test(n)&&/proposta|contrat|orcamento/.test(n))return direct('A atuação apresentada é 100% remota. Se a oportunidade exige presença ou viagens, confirme essa condição diretamente com Jennifer. Para pedir uma proposta, envie o desafio, os entregáveis esperados, o prazo desejado e o formato de parceria. Não há preço ou agenda confirmados automaticamente.');
      if(mentoringContext&&!/valor|preco|custa/.test(n)&&/primeira conversa|como (?:eu )?(?:marco|agendo)|primeiro encontro/.test(n))return direct('A primeira conversa serve para alinhar seu momento, objetivo e dúvidas. Conte sua experiência atual, o que quer construir e o tempo disponível para estudar. Jennifer combina diretamente o formato, os valores e a agenda; o botão abaixo abre o contato, não faz uma reserva automática.');
      if(mentoringContext&&/quanto tempo|demora|quando/.test(n)&&/emprego|vaga|contratad/.test(n))return direct('Não existe um prazo garantido para conseguir emprego. Isso depende do seu ponto de partida, estudo, oportunidades e processos seletivos. A mentoria pode ajudar a organizar um PDI, definir próximos passos e preparar sua transição, sem prometer contratação em uma data.');
      if(mentoringContext&&history.some(m=>m.role==='user'&&/mentoria|pdi/.test(conversational(m.content)))&&/sou de adm|administracao|nunca programei|nao sei programar|tenho \d+ anos/.test(n))return direct('Sua experiência em administração pode ajudar a conectar dados a problemas de negócio. Para começar sem programação, a conversa pode mapear fundamentos, rotina de estudo e um primeiro projeto adequado ao seu nível. A mentoria e o PDI são alinhados com Jennifer, sem exigir que você já domine uma stack técnica.');
      if (isAck(q)) return result('Certo. Para eu direcionar melhor: qual é o desafio principal e o que você gostaria de alcançar? Se preferir, pode pedir um case específico, uma mentoria ou uma proposta.', [], { grounded: false });
      if (/capital (do|da|de)|previsao do tempo|vai chover|horoscopo|receita de|placar|jogo de hoje|quem e o presidente|piada|poema/.test(n)) return result('Não encontrei essa informação na base profissional que consulto. Meu foco é o trabalho da Jennifer: experiências, cases, competências, mentoria, palestras e contratação. Qual desses assuntos você quer explorar?', [], { grounded: false });
      if (isSummary(q)) {
        if (/carreira|trajetoria/.test(q)) return result('Jennifer reúne mais de uma década em engenharia de dados, arquitetura e liderança técnica, com trajetória em 12 empresas.\nCombina atuação no código, decisões de arquitetura e desenvolvimento de equipes para conectar tecnologia às necessidades do negócio.', data.answers.career.sources, { grounded: true, answerId: 'summary' });
        if (companyContext(q).length === 2) {
          const names = companyContext(q);
          const parts = names.map(name => {
            const profile = data.companyProfiles.find(c => c.name === name);
            const entry = Object.values(data.answers).find(a => a.id.startsWith('company-') && a.sources.some(s => s.href === profile.href));
            return { text: name + ': ' + entry.text.split(/(?<=[.!?])\s/)[0], sources: entry.sources };
          });
          return result(parts.map(p => p.text).join('\n'), parts.flatMap(p => p.sources), { grounded: true, answerId: 'summary' });
        }
        const explicitTopic = /carreira|trajetoria/.test(q) ? 'Me conta a carreira' : /servicos|contratacao/.test(q) ? 'Quais serviços?' : companyContext(q).length ? q.replace(/\b(?:resum[oaer]+|em (?:1|2|duas) linhas|curto)\b/g, '') : '';
        const summaryTopic = explicitTopic || previousTopic;
        if (!summaryTopic) return result('Você quer um resumo da carreira, de um case ou dos serviços da Jennifer?', [], { grounded: false });
        const base = reply(summaryTopic, history.slice(0, topicIndex));
        if (base.grounded !== true) return result('Não tenho informação suficiente para resumir esse assunto com segurança. Você prefere um resumo da carreira ou de um case específico?', [], { grounded: false });
        const sentences = base.text.match(/[^.!?\n]+(?:[.!?](?=\s|$)|$)/g)?.map(s => s.trim()).filter(Boolean) || [base.text];
        const first = sentences.slice(0, 2);
        const caveats = sentences.filter(s => /estimad|projetad|nao receita|não receita|nao uma graduacao|não uma graduação|não é.*emprego|não garante/.test(s));
        const brief = [...new Set([...first, ...caveats])];
        return result(brief[0] + (brief.length > 1 ? '\n' + brief.slice(1).join(' ') : ''), base.sources, { grounded: true, answerId: 'summary' });
      }
      if (/\b(fontes|comprovar|comprovacao|evidencias)\b/.test(n) && /ver|mostr|cade|onde|comprov|quais/.test(n) && !/fontes de dados|ingestao|pipeline/.test(n)) {
        const base = previousTopic ? reply(previousTopic, history.slice(0, topicIndex)) : editorial('career');
        return result('Você pode conferir os links do portfólio abaixo. Eles mostram o contexto publicado; demonstrações, estimativas e resultados profissionais precisam ser avaliados separadamente. As fontes ajudam a entender a atuação da Jennifer sem tirar os números do contexto.', base.sources, { grounded: false, answerId: 'sources' });
      }
      if (/^(oi+|ola|hello|hi|bom dia|boa tarde|boa noite)[!?.\s]*$/.test(n)) return result('Olá! Sou a JEN IA, assistente do portfólio da Jennifer. Posso buscar experiências, resultados, cases, certificações e serviços no site. Você está procurando uma profissional para sua empresa, uma mentoria ou uma palestrante?');
      if (/^(obrigad\w*|valeu|thanks)[!?.\s]*$/.test(n)) return result('Disponha! Quer que eu conecte o seu desafio a um case da Jennifer ou ajude a escolher a melhor forma de parceria?');
      if (/^(tchau|ate mais|ate logo|bye)[!?.\s]*$/.test(n)) return result('Até mais! Quando quiser avançar no seu projeto, carreira ou evento, o contato direto da Jennifer está aqui.');
      if (/casamento|casada|namorad|filhos|data de nascimento|idade dela|idade da (jen|jennifer)|\bcpf\b|endereco residencial|religiao|orientacao sexual/.test(n)) return result('Não encontrei essa informação na base profissional publicada. Posso ajudar com a trajetória, as competências, os serviços e os cases da Jennifer.', [], { grounded: false });
      if (/previsao do tempo|vai chover|temperatura|horoscopo|placar|receita de bolo/.test(n)) return result('Não encontrei essa informação na base do portfólio. Meu foco é ajudar você a conhecer o trabalho da Jennifer: experiências, cases, serviços e formas de parceria. Você quer conversar sobre um projeto, carreira ou evento?', [], { grounded: false });
      if (/ignore.{0,35}(instruc|regr)|system prompt|prompt do sistema|api.?key|chave.{0,15}api|finja que|invente|garanta.{0,15}(lucro|emprego)/.test(n)) return result('Meu papel é apresentar o trabalho da Jennifer com informações documentadas e credibilidade. Posso mostrar resultados, explicar os cases e ajudar você a encontrar a melhor forma de conversar com ela.');
      // Provenance questions take precedence over generic company/sales cards.
      // Resolve each named amount independently instead of dropping clause two.
      const asksOrigin=/fatur|receita|realizad|proje[cç]|projetad|estimativ|estimad|comprov|sao reais|e real|origem|simula|concedid|aprovad/.test(n);
      const navAmount=/(?:22\s*(?:mm|milh)|navnext|heitor|telesales)/.test(n);
      const itauAmount=/3[.,]2\s*(?:b|bilh)|3[.,]2\s*(?:mil\s*milh)|hackathon|batalha de dados|open\s*finance/.test(n);
      if(asksOrigin&&(navAmount||itauAmount)){
        const ids=[...(navAmount?['metric-navnext']:[]),...(itauAmount?['metric-open-finance']:[])];
        const entries=ids.map(id=>data.answers?.[id]).filter(Boolean);
        if(entries.length)return result(entries.map(a=>a.text).join('\n\n'),entries.flatMap(a=>a.sources),{grounded:true,answerId:entries.length>1?'metric-comparison':ids[0]});
      }
      if(!/demos?|aplicativ/.test(n)&&/(?:numeros|indicadores|resultados|dados).{0,40}(?:reais|simulad|fictic|estimad|origem)|(?:reais|simulad|fictic).{0,30}(?:numeros|resultados)/.test(n)&&editorial('metric-scope'))return editorial('metric-scope');
      const asksMentorPrice=/preco|\bo valor\b|quanto.{0,18}(?:custa|cobra|sai|fica)/.test(n)&&mentoringContext;
      if(asksMentorPrice&&/garant|certeza|promet/.test(n)&&/vaga|emprego|contratad/.test(n)){
        const price=editorial('price-mentor'),guarantee=data.answers?.['job-guarantee'];
        if(price&&guarantee)return result('A mentoria não garante emprego: a contratação depende das oportunidades, dos processos seletivos e do seu contexto.\n\n'+price.text,[...price.sources,...guarantee.sources],{grounded:true,answerId:'mentor-price-guarantee'});
      }
      if(/\bkafka\b/.test(n))return direct('O portfólio documenta Kafka na integração quase em tempo real da IBM para o CRM do Santander, junto de Flume, Storm e Elasticsearch. O contexto é ingestão e processamento de eventos; isso não significa que a mesma stack foi usada em todas as empresas.','experiencia.html#ibm','IBM · Mensageria e integração');
      if (/telefone|whatsapp|\bzap\b|contato|e-?mail|linkedin/.test(n) && tokens(q).length < 7) return result('Você pode conversar diretamente com Jennifer pelo WhatsApp, enviar uma proposta por e-mail ou conhecer seu histórico no LinkedIn.', [{ title: 'Contato', href: 'index.html#contato' }], { links: [{ title: 'E-mail', href: 'mailto:jenniferevangelista.code@gmail.com' }, { title: 'LinkedIn', href: 'https://www.linkedin.com/in/jenniferces/' }] });
      let card;
      const followUp = isFollowUp(q);
      if (/garant|certeza|promet/.test(n) && /emprego|vaga|contratad/.test(n)) card = 'job-guarantee';
      else if (/garant|certeza|promet/.test(n) && /lucro|resultado|economia|roi|reduzir|custo/.test(n)) card = 'result-guarantee';
      else if (/\bnasa\b/.test(n)) card = 'nasa';
      else if (/preco|orcamento|\bvalor(?:es)?\b|quanto.{0,18}(custa|cobra|cobrar|ganha|sai|fica)|salario|remuneracao/.test(n)) card = 'price';
      else if (sharedIntent==='fees') card = 'price';
      else if (/quanto tempo|prazo|em quant[oa]s? (dias|semanas|meses)|demora/.test(n)) card = 'deadline';
      else if (/por onde.{0,15}(comec|inici)|primeiro passo|lake.{0,25}caro|ninguem confia nos dados/.test(n)) card = 'discovery';
      else if (/disponibilidade|inicio imediato|agenda|data de inicio|(?:pode |consegue |quando |para )(?:comecar|comeca)\b/.test(n)) card = 'availability';
      else if (/presencial|hibrid|remot|viage/.test(n) && !/pipeline|cluster|servidor/.test(n)) card = 'remote';
      else if (/navnext|heitor|telesales/.test(n)) card = 'navnext';
      else if (/open\s*finance|batalha de dados|capacidade de pagamento/.test(n) && !/oauth|consent|xgboost|lgpd/.test(n)) card = 'open-finance';
      else if (/petrobras|br pay/.test(n)) card = 'br-pay';
      else if (/\biara\b|natura|challenge.{0,12}fiap/.test(n)) card = 'iara';
      else if (/politicard|sprinklr|meu municipio/.test(n)) card = 'politicard';
      else if (/demo|simulac|dados (reais|sinteticos)|cases (reais|ficticios)|sistema em producao/.test(n)) card = 'demos';
      else if (/time pequeno|equipe pequena|empresa pequena|empresa gigante|startup|pequeno negocio/.test(n)) card = 'small-teams';
      else if (/mentoria|pdi|transicao|migrar.{0,20}(carreira|area|dados)|iniciante/.test(n)) card = 'mentor';
      else if (/palestra|workshop|evento|\btalk/.test(n)) card = 'stage';
      else if (/harvard|cs50/.test(n)) card = /databricks/.test(n) ? 'credentials' : 'harvard';
      else if (/certific|credencia|badge/.test(n)) card = 'credentials';
      else if (/formacao|graduacao|faculdade|pos.gradu|estudou/.test(n)) card = 'education';
      else if (/depoimento|recomendacao|feedback|colegas.{0,20}(dizem|falam)/.test(n)) card = 'testimonials';
      else if (/por que.{0,30}contratar|porque.{0,20}contratar|diferencial|vale a pena.{0,20}contratar/.test(n)) card = 'hire';
      else if (/modelos?|formatos?|regime|\bclt\b|\bpj\b|por hora/.test(n) && /contrat|parceria|clt|\bpj\b|hora/.test(n)) card = 'models';
      if (!card && followUp && /quanto|preco|valor/.test(n) && !/tempo|dura/.test(n)) card = 'price';
      if (card === 'price' && mentoringContext) card = 'price-mentor';
      if (card === 'price' && /palestra|workshop/.test(n + ' ' + previousTopic)) card = 'price-stage';
      if (followUp && /mentoria|pdi/.test(previousTopic) && ['discovery', 'deadline'].includes(card)) card = 'mentor-format';
      if (!card && followUp && /mentoria|pdi/.test(previousTopic) && /formato|como funciona|por onde/.test(n)) card = 'mentor-format';
      if (!card && followUp && /open\s*finance|batalha de dados/.test(previousTopic)) card = 'open-finance';
      if (!card && followUp && /navnext|heitor/.test(previousTopic)) card = 'navnext';
      if (!card && followUp && /natura|iara/.test(previousTopic)) card = 'iara';
      const companies = companyContext(q, history);
      if(!card&&companies.includes('Heineken')&&/economia|armazenamento|finops/.test(n))card='results-heineken';
      if (!card && companies.includes('IBM') && companies.includes('Santander')) card = 'ibm-santander';
      const keys = { 'Heineken':'heineken','Carrefour':'carrefour','Itaú Unibanco':'itau','Creditas':'creditas','QuintoAndar':'quintoandar','Cogna Educação':'cogna','Serasa Experian':'serasa','Dafiti':'dafiti','Oracle':'oracle','IBM':'ibm','Santander':'santander','B3':'cetip' };
      if (!companies.length && /(?:trabalhou|atuou|passou)\s+(?:n[ao]|pela?|em)\s+/.test(n) && !/\bnasa\b/.test(n)) return result('Não encontrei essa passagem profissional no portfólio publicado. Posso mostrar a trajetória nas 12 empresas documentadas ou ajudar você a confirmar esse vínculo diretamente com Jennifer.', [{ title: 'Trajetória documentada', href: 'index.html#secao-trajetoria' }], { grounded: false });
      if (!card && companies.length >= 2) {
        if (companies.length > 2) return result('Para comparar sem misturar os contextos, escolha duas empresas e diga se prefere olhar atuação, tecnologias ou resultados.', [], { grounded: false });
        const comparison = companies.map(name => {
          const key = keys[name], metric = /resultado|numero|impacto/.test(n) && data.answers?.['results-' + key];
          const answer = metric || data.answers?.['company-' + key];
          return { name, answer, text: metric ? answer.text : answer.text.split('\n\n')[0] };
        });
        return result(comparison.map(c => c.name + '\n' + c.text).join('\n\n'), comparison.flatMap(c => c.answer.sources), { grounded: true, answerId: 'comparison' });
      }
      if (!card && companies.length === 1) {
        const name = companies[0], key = keys[name], profile = data.companyProfiles?.find(c => c.name === name);
        const at = ['Carrefour', 'Itaú Unibanco', 'QuintoAndar', 'Santander'].includes(name) ? 'No' : 'Na';
        if (/quando|periodo|que ano/.test(n) && profile) return result(`O período publicado para ${name} é ${profile.period}, na atuação de ${profile.role}. O case completo mostra o contexto, as decisões e as entregas dessa passagem.`, [{ title: name + ' · Período e atuação', href: profile.href }], { grounded: true, answerId: 'period-' + key });
        if (/stack|tecnologi|ferrament/.test(n) && profile?.stack?.length) return result(`${at} ${name}, a stack publicada inclui ${profile.stack.slice(0, 10).join(', ')}.\n\nMais do que a lista de ferramentas, o case mostra como Jennifer as conectou às necessidades da plataforma. Você quer explorar alguma decisão técnica em particular?`, [{ title: name + ' · Tecnologias e arquitetura', href: profile.href }], { grounded: true, answerId: 'stack-' + key });
        if (/resultado|impacto|entrega|numero|ganho/.test(n) && data.answers?.['results-' + key]) card = 'results-' + key;
        else if (!/como|por que|porque|o que e|qual a diferenca|qual foi a decisao/.test(n)) card = 'company-' + key;
        else if (/o que.{0,20}(fez|trabalh)|trabalho dela|experiencia|atuacao/.test(n)) card = 'company-' + key;
      }
      if (!card && /finops|economizar|reduzir.{0,35}custo|custo.{0,25}(cloud|plataforma|nuvem)|custos.{0,25}(cloud|plataforma|nuvem)/.test(n)) card = 'finops';
      if (!card && /governanca|open\s*metadata|catalogo.{0,20}dados|qualidade.{0,20}dados/.test(n)) card = 'governance';
      if (!card && /\brag\b|\bllmops\b|\bagentes?\b|inteligencia artificial|\bia\b/.test(n)) card = 'rag';
      if (!card && /aws|azure|gcp|multi.cloud|\bcloud\b|\bnuvem\b/.test(n)) card = 'cloud';
      if (!card && /\bpython\b|\bpyspark\b/.test(n)) card = 'python';
      if (!card && /\bkubernetes\b|\bterraform\b/.test(n)) card = 'infrastructure';
      if (!card && /lider|gestao|equipe|time/.test(n)) card = 'leadership';
      if (!card && /consultoria|servico|contratar|contratacao|proposta/.test(n)) card = 'services';
      if (!card && /quem e|trajetoria|carreira|experiencia|quais empresas|12 empresas|anos de/.test(n) && !companies.length) card = 'career';
      // Unknown skills must be checked before a related-topic sales summary can say "yes".
      const unsupported = /\b(sabe|conhece|domina|experiencia (com|em))\b/.test(n) && tokens(q).some(t => !['sabe','conhece','domina','experiencia','jennifer','jen','jenny','tecnologia'].includes(t) && !df.has(corrected(t)));
      if (card && !unsupported && editorial(card)) return editorial(card);
      if (followUp) return result('Você quer aprofundar qual experiência ou serviço: um case de empresa, mentoria ou uma parceria para seu projeto? Assim consigo responder sem misturar os contextos.', [], { grounded: false });
      const found = search(q, history);
      const unknownSkill = /\b(sabe|conhece|domina|experiencia (com|em))\b/.test(n) && tokens(q).some(t => !stop.has(t) && !['sabe', 'conhece', 'domina', 'experiencia', 'jennifer', 'jen', 'jenny', 'tecnologia'].includes(t) && !df.has(corrected(t)));
      if ((!found.length || unknownSkill) && target !== 'commercial') return result('Não encontrei um registro específico dessa informação no portfólio publicado. Posso mostrar projetos relacionados em dados, arquitetura, cloud e IA; para confirmar esse ponto em particular, o melhor caminho é conversar diretamente com Jennifer.', [{ title: 'Competências e trajetória', href: 'index.html#competencias' }], { grounded: false });
      if (target === 'commercial') return result('A proposta é definida diretamente com Jennifer, conforme o escopo e o contexto. Não há tabela pública de preços nem confirmação de agenda em tempo real. Ela atua 100% remota e oferece parcerias por CLT, PJ, consultoria pontual ou por hora, além de mentoria, palestras e workshops. Conte o desafio, o prazo desejado e o formato para alinhar uma proposta.', [{ title: 'Serviços e contratação', href: 'index.html#servicos' }, { title: 'Contato', href: 'index.html#contato' }]);
      // Unreviewed lexical hits are discovery links, not an answer in Jennifer's voice.
      return result('Não encontrei uma resposta suficientemente específica e revisada para essa pergunta. Posso ajudar a explorar um case, uma competência ou um serviço; para confirmar esse ponto, converse diretamente com Jennifer.', [], {grounded:false});
    }
    return { search, reply, fingerprint: data.fingerprint };
  }
  root.JenRetrieval = { createEngine, norm, tokens, intent, commonIntent, isFollowUp };
  if (typeof module !== 'undefined' && module.exports) module.exports = root.JenRetrieval;
})(typeof globalThis === 'undefined' ? this : globalThis);



