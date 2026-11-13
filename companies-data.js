/* Dados compartilhados, portfolio Jennifer Evangelista */
window.SECTOR={fin:'Financeiro',var:'Varejo & Consumo',big:'Tecnologia & Cloud',start:'Produtos Digitais & Educação'};
window.FLAGS={
 br:'<svg viewBox="0 0 22 15" xmlns="http://www.w3.org/2000/svg"><g><rect width="22" height="15" fill="#009C3B"/><path d="M11 2.2 19.2 7.5 11 12.8 2.8 7.5Z" fill="#FFDF00"/><circle cx="11" cy="7.5" r="3.1" fill="#002776"/><path d="M8.1 6.8c2.1-.5 4.1 0 5.8 1.3" stroke="#fff" stroke-width=".55" fill="none"/></g></svg>',
 nl:'<svg viewBox="0 0 22 15" xmlns="http://www.w3.org/2000/svg"><g><rect width="22" height="15" fill="#21468B"/><rect width="22" height="10" fill="#fff"/><rect width="22" height="5" fill="#AE1C28"/></g></svg>',
 fr:'<svg viewBox="0 0 22 15" xmlns="http://www.w3.org/2000/svg"><g><rect width="22" height="15" fill="#fff"/><rect width="7.33" height="15" fill="#0055A4"/><rect x="14.66" width="7.34" height="15" fill="#EF4135"/></g></svg>',
 us:'<svg viewBox="0 0 22 15" xmlns="http://www.w3.org/2000/svg"><g><rect width="22" height="15" fill="#B22234"/><g fill="#fff"><rect y="2.3" width="22" height="1.15"/><rect y="4.6" width="22" height="1.15"/><rect y="6.9" width="22" height="1.15"/><rect y="9.2" width="22" height="1.15"/><rect y="11.5" width="22" height="1.15"/><rect y="13.8" width="22" height="1.2"/></g><rect width="9.5" height="8.05" fill="#3C3B6E"/></g></svg>',
 de:'<svg viewBox="0 0 22 15" xmlns="http://www.w3.org/2000/svg"><g><rect width="22" height="15" fill="#FFCE00"/><rect width="22" height="10" fill="#DD0000"/><rect width="22" height="5" fill="#000"/></g></svg>',
 jp:'<svg viewBox="0 0 22 15" xmlns="http://www.w3.org/2000/svg"><g><rect width="22" height="15" fill="#fff"/><circle cx="11" cy="7.5" r="4" fill="#BC002D"/></g><rect width="21.4" height="14.4" x=".3" y=".3" rx="2.3" fill="none" stroke="rgba(0,0,0,.18)" stroke-width=".6"/></svg>',
 es:'<svg viewBox="0 0 22 15" xmlns="http://www.w3.org/2000/svg"><g><rect width="22" height="15" fill="#AA151B"/><rect y="3.75" width="22" height="7.5" fill="#F1BF00"/></g></svg>'
};
window.COV={fin:'linear-gradient(135deg,#10254d,#2749c9)',var:'linear-gradient(135deg,#7a1f16,#eb3223)',big:'linear-gradient(135deg,#1a1a1a,#4d4d4d)',start:'linear-gradient(135deg,#3d1a6e,#8a3ffc)'};
/* Retorna a empresa "localizada": sobrepõe os campos de c.t[lang] sobre a base PT.
   Se não houver tradução para o idioma, devolve a empresa original (fallback PT). */
window.locCompany=function(c,lang){
  if(!c||lang==='pt'||!c.t||!c.t[lang])return c;
  var o={},k;for(k in c){if(k==='t')continue;o[k]=c[k];}
  var tr=c.t[lang];
  for(k in tr){if(k==='codeNotes')continue;o[k]=tr[k];}
  /* codeNotes traduz só tab/label/note dos blocos de código, mantendo o snippet original */
  if(tr.codeNotes&&Array.isArray(o.code)){
    o.code=o.code.map(function(cb,i){var n=tr.codeNotes[i];if(!n)return cb;var m={};for(var kk in cb)m[kk]=cb[kk];if(n.tab)m.tab=n.tab;if(n.label)m.label=n.label;if(n.note)m.note=n.note;return m;});
  }
  return o;
};
window.COMPANIES=[
 {
  "f": "var",
  "flag": "nl",
  "n": "Heineken",
  "dom": "theheinekencompany.com",
  "per": "2025 a 2026",
  "featured": true,
  "r": "Especialista de Arquitetura de Soluções e Dados",
  "d": "Atuei como Especialista de Arquitetura de Soluções e Dados da Heineken no Brasil, em uma posição de liderança técnica. Trabalhei com engenharia de dados, governança, FinOps e IA, em colaboração com equipes internacionais.",
  "heroChips": [
   "Microsoft Azure",
   "Python · SQL",
   "Engenharia de Dados · Spark",
   "Processamento de Dados em Batch · SAP → Lake",
   "Liderança de Arquitetura de Dados · Brasil",
   "Europa · México · Estados Unidos"
  ],
  "t": {
   "en": {
    "r": "Solutions and Data Architecture Specialist",
    "per": "2025 to 2026",
    "stintWord": "Front",
    "d": "I worked as a Solutions and Data Architecture Specialist for Heineken in Brazil, in a technical leadership role. My work covered data engineering, governance, FinOps and AI, in collaboration with international teams.",
    "heroChips": [
     "Microsoft Azure",
     "Python · SQL",
     "Data Engineering · Spark",
     "Batch Data Processing · SAP → Lake",
     "Data Architecture Leadership · Brazil",
     "Europe · Mexico · United States"
    ],
    "app": {
     "sub": "ARCHITECTURE & GOVERNANCE",
     "h": "The data area seen <em>through architecture.</em>",
     "d": "Simulation of the day-to-day architecture at Heineken: data engineering from SAP to the Azure Lake with Spark, an enterprise hub of solution views and architectural decisions, plus FinOps and operational governance. Didactic simulation, no corporate data."
    },
    "metrics": [
     {
      "v": "BRAZIL · GLOBAL SCOPE",
      "l": "sole lead data architect in the country · 34 strategic projects"
     },
     {
      "v": "500+",
      "l": "sanitized ADF pipelines · FinOps"
     },
     {
      "v": "200+",
      "l": "knowledge assets · Confluence"
     },
     {
      "v": "34",
      "l": "architected projects · 1 year"
     }
    ],
    "demos": [
     {
      "kind": "app",
      "t": "Data Platform & Impact",
      "d": "Interactive Heineken pipeline: SAP → Azure Lake (Bronze → Silver → Gold) → Power BI, with an animated particle flow between each layer, metrics and code per stage, plus the impact dashboard: FinOps, a 34-project portfolio and the manager quote.",
      "u": "heineken-dataplatform-app.html",
      "btn": "Open pipeline & impact →"
     },
     {
      "kind": "app",
      "t": "NavNext, talk to the Heitor agent",
      "d": "Interactive AI-agent simulator: WhatsApp sales and voice calls, a Brazil pilot designed for global scale.",
      "u": "heineken-navnext-app.html",
      "btn": "Open simulator →"
     }
    ],
    "quote": {
     "t": "Jennifer had a year of robust, consistent deliveries with direct impact on the technical evolution of the area. She raised standards, structured processes that did not exist, consolidated frameworks and contributed actively to virtually every strategic project that touched architecture in 2025.",
     "by": "Manager comment · annual review 2025 · Heineken"
    },
    "arch": [
     [
      "SAP / ERP",
      "Theobald Software · on-premise ingestion"
     ],
     [
      "Data Lake",
      "Azure Storage · bronze · silver · gold"
     ],
     [
      "Orchestration",
      "Azure Data Factory · pipelines"
     ],
     [
      "Processing",
      "Databricks · distributed PySpark"
     ],
     [
      "Consumption",
      "Azure Storage · Microsoft Power BI"
     ]
    ],
    "stat3": [
     {
      "v": "+R$22MM",
      "l": "projected on NavNext · Brazil pilot designed for global expansion"
     },
     {
      "v": "104+",
      "l": "architecture on-call shifts · continuous technical presence across every team in the area throughout the year"
     },
     {
      "v": "€15k · 107 TB",
      "l": "estimated FinOps savings: Standard→Archive migration + 500+ sanitized ADF pipelines"
     }
    ],
    "layers": [
     {
      "icon": "🏭",
      "title": "SAP + Theobald Software",
      "desc": "Ingestion of on-premise ERP data (SAP) via Theobald Software into Azure Storage. The entry layer of the corporate Data Lake: raw data arriving reliably and incrementally."
     },
     {
      "icon": "🗄️",
      "title": "Data Lake · Medallion Architecture",
      "desc": "Azure Storage with three layers: Bronze (raw data preserved), Silver (cleaned and standardized data) and Gold (data ready for consumption). Ensures traceability, progressive quality and safe reprocessing."
     },
     {
      "icon": "⚙️",
      "title": "Azure Data Factory",
      "desc": "End-to-end orchestration of every pipeline. ADF coordinates ingestion, transformation and delivery of data, with centralized visibility across the whole chain, alerts and monitoring."
     },
     {
      "icon": "🔥",
      "title": "Databricks · PySpark",
      "desc": "Distributed processing of large volumes. PySpark transforms Silver data into Gold: complex calculations, aggregations, enrichment and features for ML models at scale."
     },
     {
      "icon": "📊",
      "title": "Power BI + Azure Storage",
      "desc": "Final consumption: reports and dashboards connected to the Gold layer via Azure Storage. Data available to every business area with near real-time refresh (a few minutes of delay)."
     },
     {
      "icon": "🤖",
      "title": "NavNext · Featured Case",
      "desc": "On top of this corporate base, the architecture of the NavNext AI telesales agents (voice + WhatsApp) was designed, a Brazil pilot with a projected +R$22MM/year. Azure AI Foundry, CosmosDB, Blob Storage and SAP integration."
     }
    ],
    "dashKpis": [
     "NavNext · +R$22MM/year projected",
     "€15k/year · FinOps · 107 TB → Archive"
    ],
    "dashLabels": [
     "Brazil pilot for global expansion",
     "estimated annual cloud-cost savings"
    ],
    "mockItems": [
     {
      "l": "Enterprise Architecture Framework",
      "v": "✓ active"
     },
     {
      "l": "Pre-Production Checklist · technical validation",
      "v": "✓ active"
     },
     {
      "l": "200+ architecture assets · solution views in an enterprise standard inspired by TOGAF",
      "v": "✓ active"
     },
     {
      "l": "International collaboration in English · stakeholders from multiple countries",
      "v": "✓ global"
     },
     {
      "l": "FinOps · 500+ sanitized ADF pipelines",
      "v": "✓ done"
     },
     {
      "l": "104+ on-call shifts · continuous technical presence",
      "v": "✓ 2025 to 2026"
     }
    ],
    "stints": [
     {
      "r": "Enterprise Architecture, FinOps & Governance",
      "per": "2025 to 2026",
      "prob": "The area ran relevant projects but had no uniform process to assess architecture, risks and readiness before going to production. Important information was scattered across meetings, people and isolated documents. A FinOps diagnosis revealed a diagnostic blob storage with 107 TB of logs in the Standard tier and 500+ Azure Data Factory pipelines with no clear evidence of use. The problem was not a lack of technology. It was the lack of a mechanism able to turn technical knowledge into consistent, repeatable decisions.",
      "decSections": [
       {
        "eye": "📐 Enterprise architecture & technical documentation",
        "body": "As the architect responsible for 34 strategic projects, I structured a technical documentation system inspired by TOGAF practices: executive solution view, business context, requirements, components, integrations, data flows, security, dependencies, risks, costs and architectural decisions. The Enterprise Architecture Template, the Pre-Production Validation Checklist and the Test View turned scattered knowledge into verifiable, reusable standards. The 104 architecture sessions brought this model into the teams daily work, from concept to go-live."
       },
       {
        "eye": "💰 FinOps & Azure infrastructure",
        "body": "FinOps is the practice of controlling and reducing cloud cost. Two diagnoses drove concrete actions. First: 107 TB of historical logs were identified in a frequent-access tier, incompatible with their real query frequency. The distinction between retention and immediate availability guided the decision: the data needed to be preserved but did not need to stay accessible at the same cost as information used daily. The solution was a lifecycle policy on Azure Blob Storage for automatic transfer to Archive, with an estimated €15k/year saving. Second: more than 500 Azure Data Factory pipelines with no clear evidence of use were inventoried, analyzed by execution history and frequency, their technical and business owners located, then classified and handled. The gain goes beyond direct cost: less monitoring noise, a smaller failure surface and greater clarity over which flows sustain the business."
       },
       {
        "eye": "📚 Architecture hub & global work in English",
        "body": "Confluence stopped being a repository of pages and became the operational hub of architecture. 200+ technical assets were consolidated in an enterprise standard: solution views, diagrams, architectural decisions, integrations, risks, reusable patterns, onboarding, Solutions Menu, executive One Pagers, SAP BW mapping and modernization analyses for Azure and Databricks. The Brazilian operation reached the global TOP 20 in adoption among 70 countries. The work included meetings, alignments and technical conversations in English with professionals and stakeholders from different international Heineken operations."
       },
       {
        "eye": "⚖️ Tax & regulatory projects",
        "body": "Tax Reform: technical architecture for the impact of Brazil largest tax reform, CBS/IBS, adaptation of SAP systems, NF-e flow and Data Lake. Tax Reconciliation: automated tax reconciliation. GRC→DRC (invoices): migration with automatic XML generation via API and ABAP exploration over the Data Lake. ICMS: tax calculation model."
       },
       {
        "eye": "🏗️ Platform & strategic projects",
        "body": "NavNext (telesales AI agents, global pilot) · BI optimization (Power Query → Databricks offload, -60% Premium) · Contract Signing (API automation) · Spin · Better Drinks (MDM, sustainability data) · Budget (Azure scale) · Resellers Portal · Payments Methods · GenAI People · Crisis Monitoring · KNIME migration · Alteryx Cloud · Ironclad · Ultragaz · Managerial Clients · CMIS · Klon · Enterprise Architecture Chapter · and much more."
       }
      ],
      "res": "FinOps stopped being just invoice reading and started to guide architectural decisions. Governance created a common language among technical teams, leadership and business areas. Results: €15k/year in estimated cloud savings, 500+ sanitized pipelines, 104 architecture sessions and 200+ knowledge assets consolidated in Confluence.",
      "metrics": [
       "€15k/year · estimated savings",
       "500+ sanitized pipelines",
       "104+ architecture sessions",
       "200+ assets in Confluence"
      ]
     },
     {
      "r": "NavNext · AI Telesales Agents · Brazil pilot for global scale",
      "per": "featured project · Brazil pilot for global scale",
      "prob": "The NAV portfolio brought together roughly 160,000 customers. The human telesales operation could not keep recurring contact with that entire base, limiting reach, frequency and conversion capacity. Scaling with people alone would raise operating cost and remain subject to schedule and simultaneous-capacity constraints.",
      "dec": "NavNext is an artificial-intelligence agent that talks to customers by voice (call) and text (WhatsApp), like a virtual salesperson able to serve thousands of people at once. The architecture was designed as a Brazilian pilot with a global-expansion premise. Voice channel: Genesys routes the calls; LiveKit supports real-time two-way audio. Text channel: WhatsApp Business API via Meta, orchestrated by Blip. AI orchestration: Azure AI Foundry coordinates intent identification, response generation and product recommendation. Asynchronous processing: Azure Functions and messaging decouple voice and text events, ensuring that a failure in one component does not interrupt the conversation. State and history: CosmosDB keeps context during the conversation; Blob Storage preserves history according to retention rules. Enterprise integration: SAP in the transactional flow; Salesforce enables human-in-the-loop, with an agent taking over cases that require negotiation or human support. Security: Key Vault, Entra ID, Akamai WAF and network isolation. AI quality: LLMOps with DeepEval and AI-as-a-Judge assess relevance, adherence to context and the absence of unfounded answers before each promotion.",
      "res": "With conservative premises defined by the business, the scenario projects a potential of up to R$22MM/year, calculated on incremental customers reached, incremental conversion, average ticket and purchase frequency. Using incremental conversion is essential: it separates sales generated by NavNext from those that would happen without the agent. The channels were decoupled from the core logic, allowing voice and WhatsApp to evolve independently. A Brazil pilot designed for global expansion: orchestration, security, LLMOps and AI quality as a reusable base.",
      "metrics": [
       "+R$22MM/year projected",
       "160k customers in the portfolio",
       "+10k in reach",
       "latency < 2s"
      ]
     }
    ],
    "codeNotes": [
     {
      "tab": "FinOps · Azure Lifecycle",
      "label": "[Model] Standard→Archive migration in a diagnostic blob storage (Python · Azure SDK)",
      "note": "A lifecycle script to reduce storage cost: it identifies blobs older than 365 days since their last modification (historical logs that do not need a hot tier) and moves them to the Archive tier, up to 10× cheaper. Applied to 107 TB of accumulated logs, with estimated savings of €15k/year."
     },
     {
      "tab": "ADF · Governance",
      "label": "[Model] Audit and removal of unused pipelines in Azure Data Factory (Python)",
      "note": "A governance script that compares every existing ADF pipeline with those that ran in the last 90 days. A 90-day window requires archived logs with extended retention; native ADF history retains 45 days. No recent run means a review candidate, not permission to delete: check log coverage, ownership, dependencies and seasonality first. Architectural decision: periodic sanitation as an engineering standard. Result: 500+ pipelines identified and deactivated."
     },
     {
      "tab": "NavNext · Quality before publishing",
      "label": "[Model] Automated test that stops bad answers from reaching the customer (Python · DeepEval)",
      "note": "Before publishing a new NavNext version, automated tests simulate conversations and assess relevance, adherence to context and the risk of made-up answers. If quality falls below the defined threshold, publishing is blocked. In plain terms: the agent must prove it answers well before talking to customers."
     },
     {
      "tab": "Power BI · ETL in the right place",
      "label": "[Model] Moving heavy Power BI processing to Databricks (PySpark)",
      "note": "In a BI optimization effort, the heavy transformations that ran in Power Query were moved to Databricks and persisted in Delta Lake in the Gold layer. Power BI began to consume already-prepared data, reducing capacity bottlenecks. Demonstrative result of the pattern: refresh from 45 min → 8 min and Premium consumption -60%."
     }
    ],
    "faq": [
     {
      "q": "How was the area technical governance framework structured?",
      "a": "The framework was established on three previously nonexistent pillars: (1) an Enterprise Architecture Template, the standard for designing any solution before promotion to production; (2) a Pre-Production Validation Checklist, objective criteria every delivery must meet (security, observability, traceability, FinOps); (3) a Test View, standardizing quality and resilience. Architecture responsibility covered 34 strategic projects in a single year, and Confluence Brazil evolved from zero to Heineken global TOP 20 among 70 operating countries, with 200+ assets including onboarding, BW mapping and the Solutions Menu."
     },
     {
      "q": "How did the architecture on-call work?",
      "a": "104+ recurring sessions, 1:1s and reviews were run with all leaders and 20+ professionals in the area. Each shift covered review of ongoing architectures, technical decisions, unblocking teams, review of critical points and alignment of enterprise standards. It was not occasional consulting but continuous presence in each team development cycle."
     },
     {
      "q": "How was the €15k/year FinOps saving estimated?",
      "a": "The analysis identified 107 TB of diagnostic logs stored in the Standard (hot) tier of a blob storage. Historical logs with no active access do not justify a hot tier; migration to Archive cut the cost by up to 10×. Combined with removing 500+ ADF pipelines with no execution for over 90 days, the initiative supported an estimated annual saving of €15k, not a measurement of realized savings."
     },
     {
      "q": "What is the Solutions Menu?",
      "a": "A catalog of every architecture model used by the area: given the data source and how the end user consumes it, the Menu defines which architecture pattern to follow. Before, each team designed solutions independently. With the Menu, any engineer identifies the right model, requirements, prerequisites and estimated cost, effective standardization, not just documentation."
     }
    ]
   },
   "es": {
    "r": "Especialista en Arquitectura de Soluciones y Datos",
    "per": "2025 a 2026",
    "stintWord": "Frente",
    "d": "Trabajé como Especialista en Arquitectura de Soluciones y Datos de Heineken en Brasil, en una posición de liderazgo técnico. Mi trabajo abarcó ingeniería de datos, gobernanza, FinOps e IA, en colaboración con equipos internacionales.",
    "heroChips": [
     "Microsoft Azure",
     "Python · SQL",
     "Ingeniería de Datos · Spark",
     "Procesamiento de Datos por Lotes · SAP → Lake",
     "Liderazgo de Arquitectura de Datos · Brasil",
     "Europa · México · Estados Unidos"
    ],
    "app": {
     "sub": "ARQUITECTURA Y GOBERNANZA",
     "h": "El área de datos vista <em>a través de la arquitectura.</em>",
     "d": "Simulación del día a día de la arquitectura en Heineken: ingeniería de datos de SAP al Azure Lake con Spark, hub empresarial de vistas de solución y decisiones arquitectónicas, además de FinOps y gobernanza operativa. Simulación didáctica, sin datos corporativos."
    },
    "metrics": [
     {
      "v": "BRASIL · ALCANCE GLOBAL",
      "l": "única arquitecta líder de datos del país · 34 proyectos estratégicos"
     },
     {
      "v": "500+",
      "l": "pipelines ADF saneados · FinOps"
     },
     {
      "v": "200+",
      "l": "activos de conocimiento · Confluence"
     },
     {
      "v": "34",
      "l": "proyectos arquitectados · 1 año"
     }
    ],
    "demos": [
     {
      "kind": "app",
      "t": "Plataforma de Datos e Impacto",
      "d": "Pipeline interactivo de Heineken: SAP → Azure Lake (Bronze → Silver → Gold) → Power BI, con flujo de partículas animado entre cada capa, métricas y código por etapa, más el dashboard de impacto: FinOps, portafolio de 34 proyectos y cita del gestor.",
      "u": "heineken-dataplatform-app.html",
      "btn": "Abrir pipeline e impacto →"
     },
     {
      "kind": "app",
      "t": "NavNext, conversa con el agente Heitor",
      "d": "Simulador interactivo del agente de IA: venta por WhatsApp y llamada de voz, piloto Brasil diseñado para escala global.",
      "u": "heineken-navnext-app.html",
      "btn": "Abrir simulador →"
     }
    ],
    "quote": {
     "t": "Jennifer tuvo un año de entregas robustas, consistentes y de impacto directo en la evolución técnica del área. Elevó estándares, estructuró procesos que no existían, consolidó frameworks y contribuyó activamente a prácticamente todos los proyectos estratégicos que tocaron arquitectura en 2025.",
     "by": "Comentario del gestor · evaluación anual 2025 · Heineken"
    },
    "arch": [
     [
      "SAP / ERP",
      "Theobald Software · ingesta on-premise"
     ],
     [
      "Data Lake",
      "Azure Storage · bronze · silver · gold"
     ],
     [
      "Orquestación",
      "Azure Data Factory · pipelines"
     ],
     [
      "Procesamiento",
      "Databricks · PySpark distribuido"
     ],
     [
      "Consumo",
      "Azure Storage · Microsoft Power BI"
     ]
    ],
    "stat3": [
     {
      "v": "+R$22MM",
      "l": "proyectados en NavNext · piloto Brasil diseñado para expansión global"
     },
     {
      "v": "104+",
      "l": "turnos de arquitectura · presencia técnica continua en todos los equipos del área durante el año"
     },
     {
      "v": "€15k · 107 TB",
      "l": "ahorro FinOps estimado: migración Standard→Archive + 500+ pipelines ADF saneados"
     }
    ],
    "layers": [
     {
      "icon": "🏭",
      "title": "SAP + Theobald Software",
      "desc": "Ingesta de datos de ERP on-premise (SAP) vía Theobald Software hacia Azure Storage. Capa de entrada del Data Lake corporativo, dato bruto llegando de forma confiable e incremental."
     },
     {
      "icon": "🗄️",
      "title": "Data Lake · Arquitectura Medallion",
      "desc": "Azure Storage con tres capas: Bronze (dato bruto preservado), Silver (dato limpio y estandarizado) y Gold (dato listo para consumo). Garantiza trazabilidad, calidad progresiva y reprocesamiento seguro."
     },
     {
      "icon": "⚙️",
      "title": "Azure Data Factory",
      "desc": "Orquestación end-to-end de todos los pipelines. ADF coordina ingesta, transformación y entrega de datos, con visibilidad centralizada de toda la cadena, alertas y monitoreo."
     },
     {
      "icon": "🔥",
      "title": "Databricks · PySpark",
      "desc": "Procesamiento distribuido de grandes volúmenes. PySpark transforma los datos Silver en Gold: cálculos complejos, agregaciones, enriquecimiento y features para modelos de ML a escala."
     },
     {
      "icon": "📊",
      "title": "Power BI + Azure Storage",
      "desc": "Consumo final: informes y dashboards conectados a la capa Gold vía Azure Storage. Datos disponibles para todas las áreas de negocio con actualización casi en tiempo real (pocos minutos de retraso)."
     },
     {
      "icon": "🤖",
      "title": "NavNext · Caso Destacado",
      "desc": "Sobre esta base corporativa se diseñó la arquitectura de los agentes de IA de telesales NavNext (voz + WhatsApp), piloto Brasil con proyección de +R$22MM/año. Azure AI Foundry, CosmosDB, Blob Storage e integración SAP."
     }
    ],
    "dashKpis": [
     "NavNext · +R$22MM/año proyectados",
     "€15k/año · FinOps · 107 TB → Archive"
    ],
    "dashLabels": [
     "piloto Brasil para expansión global",
     "ahorro anual estimado de costo de nube"
    ],
    "mockItems": [
     {
      "l": "Framework de Arquitectura Empresarial",
      "v": "✓ activo"
     },
     {
      "l": "Checklist Pre-Producción · validación técnica",
      "v": "✓ activo"
     },
     {
      "l": "200+ activos de arquitectura · vistas de solución en estándar empresarial inspirado en TOGAF",
      "v": "✓ activo"
     },
     {
      "l": "Colaboración internacional en inglés · stakeholders de múltiples países",
      "v": "✓ global"
     },
     {
      "l": "FinOps · 500+ pipelines ADF saneados",
      "v": "✓ hecho"
     },
     {
      "l": "104+ turnos · presencia técnica continua",
      "v": "✓ 2025 a 2026"
     }
    ],
    "stints": [
     {
      "r": "Arquitectura Empresarial, FinOps y Gobernanza",
      "per": "2025 a 2026",
      "prob": "El área conducía proyectos relevantes, pero no poseía un proceso uniforme para evaluar arquitectura, riesgos y preparación antes de la entrada en producción. Información importante estaba distribuida entre reuniones, personas y documentos aislados. Un diagnóstico de FinOps reveló un blob storage de diagnóstico con 107 TB de logs en capa Standard y 500+ pipelines de Azure Data Factory sin evidencia clara de uso. El problema no era falta de tecnología. Era falta de un mecanismo capaz de transformar conocimiento técnico en decisiones consistentes y repetibles.",
      "decSections": [
       {
        "eye": "📐 Arquitectura empresarial y documentación técnica",
        "body": "Como arquitecta responsable de 34 proyectos estratégicos, estructuré un sistema de documentación técnica inspirado en las prácticas de TOGAF: visión ejecutiva de la solución, contexto de negocio, requisitos, componentes, integraciones, flujos de datos, seguridad, dependencias, riesgos, costos y decisiones arquitectónicas. La Plantilla de Arquitectura Empresarial, el Checklist de Validación Pre-Producción y la Visión de Pruebas transformaron conocimiento disperso en estándares verificables y reutilizables. Las 104 sesiones de arquitectura llevaron ese modelo al trabajo diario de los equipos, desde la concepción hasta el go-live."
       },
       {
        "eye": "💰 FinOps e Infraestructura Azure",
        "body": "FinOps es la práctica de controlar y reducir el costo de la nube. Dos diagnósticos orientaron acciones concretas. Primero: se identificaron 107 TB de logs históricos en capa de acceso frecuente, incompatible con su frecuencia real de consulta. La distinción entre retención y disponibilidad inmediata orientó la decisión: los datos necesitaban preservarse, pero no necesitaban permanecer accesibles al mismo costo que información usada a diario. La solución fue una política de lifecycle en Azure Blob Storage para transferencia automática a Archive, con ahorro estimado de €15k/año. Segundo: se inventariaron más de 500 pipelines de Azure Data Factory sin evidencia clara de uso, analizados por historial de ejecución y frecuencia, localizados los responsables técnicos y de negocio, clasificados y tratados. La ganancia va más allá del costo directo: menos ruido de monitoreo, menor superficie de falla y mayor claridad sobre qué flujos sostienen el negocio."
       },
       {
        "eye": "📚 Hub de arquitectura y actuación global en inglés",
        "body": "Confluence dejó de ser un repositorio de páginas y se convirtió en el hub operativo de la arquitectura. Se consolidaron 200+ activos técnicos en estándar empresarial: vistas de solución, diagramas, decisiones arquitectónicas, integraciones, riesgos, patrones reutilizables, onboarding, Menú de Soluciones, One Pages ejecutivas, mapeo del SAP BW y análisis de modernización para Azure y Databricks. La operación brasileña alcanzó el TOP 20 global de adopción entre 70 países. La actuación incluyó reuniones, alineamientos y conversaciones técnicas en inglés con profesionales y stakeholders de diferentes operaciones internacionales de Heineken."
       },
       {
        "eye": "⚖️ Proyectos Fiscales y Regulatorios",
        "body": "Tax Reform (Reforma Tributaria): arquitectura técnica para el impacto de la mayor reforma fiscal de Brasil, CBS/IBS, adecuación de los sistemas SAP, flujo de NF-e y Data Lake. Tax Reconciliation: conciliación fiscal automatizada. GRC→DRC (Facturas): migración con generación automática de XML vía API y exploración de ABAP sobre Data Lake. ICMS: modelo de cálculo fiscal."
       },
       {
        "eye": "🏗️ Plataforma y Proyectos Estratégicos",
        "body": "NavNext (agentes de IA de telesales, piloto global) · Optimización de BI (offload Power Query → Databricks, -60% Premium) · Firma de Contratos (automatización vía API) · Spin · Better Drinks (MDM, datos de sostenibilidad) · Budget (Azure scale) · Portal de Reventas · Payments Methods · GenAI People · Monitoreo de Crisis · Migración KNIME · Alteryx Cloud · Ironclad · Ultragaz · Managerial Clients · CMIS · Klon · Chapter de Arquitectura Empresarial · y mucho más."
       }
      ],
      "res": "FinOps dejó de ser solo lectura de factura y pasó a orientar decisiones arquitectónicas. La gobernanza creó un lenguaje común entre equipos técnicos, liderazgos y áreas de negocio. Resultados: €15k/año de ahorro estimado con cloud, 500+ pipelines saneados, 104 sesiones de arquitectura y 200+ activos de conocimiento consolidados en Confluence.",
      "metrics": [
       "€15 mil/año · ahorro estimado",
       "500+ pipelines saneados",
       "104+ sesiones de arquitectura",
       "200+ activos en Confluence"
      ]
     },
     {
      "r": "NavNext · Agentes de IA de Telesales · piloto Brasil para escala global",
      "per": "proyecto destacado · piloto Brasil para escala global",
      "prob": "La cartera NAV reunía aproximadamente 160 mil clientes. La operación humana de telesales no lograba mantener contacto recurrente con toda esa base, limitando alcance, frecuencia y capacidad de conversión. Escalar solo con personas elevaría el costo operativo y seguiría sujeto a restricciones de horario y capacidad simultánea.",
      "dec": "NavNext es un agente de inteligencia artificial que conversa con clientes por voz (llamada) y texto (WhatsApp), como un vendedor virtual capaz de atender a miles de personas al mismo tiempo. La arquitectura fue diseñada como piloto brasileño con premisa de expansión global. Canal de voz: Genesys realiza el enrutamiento de las llamadas; LiveKit soporta el audio bidireccional en tiempo real. Canal de texto: WhatsApp Business API vía Meta, orquestado por Blip. Orquestación de IA: Azure AI Foundry coordina identificación de intención, generación de respuestas y recomendación de productos. Procesamiento asíncrono: Azure Functions y mensajería desacoplan eventos de voz y texto, garantizando que fallas en un componente no interrumpan la conversación. Estado e historial: CosmosDB mantiene el contexto durante la conversación; Blob Storage preserva historiales según reglas de retención. Integración corporativa: SAP en el flujo transaccional; Salesforce viabiliza el human-in-the-loop, con un agente asumiendo casos que requieren negociación o soporte humano. Seguridad: Key Vault, Entra ID, Akamai WAF y aislamiento de red. Calidad de IA: LLMOps con DeepEval y AI-as-a-Judge evalúan relevancia, adherencia al contexto y ausencia de respuestas no fundamentadas antes de cada promoción.",
      "res": "Con premisas conservadoras definidas por el negocio, el escenario proyecta un potencial de hasta R$22MM/año, calculado sobre clientes incrementales alcanzados, conversión incremental, ticket promedio y frecuencia de compra. El uso de conversión incremental es esencial: separa las ventas generadas por NavNext de las que ocurrirían sin el agente. Los canales se desacoplaron de la lógica central, permitiendo evolucionar voz y WhatsApp de forma independiente. Piloto Brasil diseñado para expansión global: orquestación, seguridad, LLMOps y calidad de IA como base reutilizable.",
      "metrics": [
       "+R$22MM/año proyectados",
       "160k clientes en la cartera",
       "+10k de alcance",
       "latencia < 2s"
      ]
     }
    ],
    "codeNotes": [
     {
      "tab": "FinOps · Azure Lifecycle",
      "label": "[Modelo] Migración Standard→Archive en blob storage de diagnóstico (Python · Azure SDK)",
      "note": "Script de lifecycle para reducir costo de almacenamiento: identifica blobs con más de 365 días desde la última modificación (logs históricos que no necesitan capa caliente) y los migra a la capa Archive, costo hasta 10× menor. Aplicado a 107 TB de logs acumulados, con ahorro estimado de €15k/año."
     },
     {
      "tab": "ADF · Gobernanza",
      "label": "[Modelo] Auditoría y eliminación de pipelines no utilizados en Azure Data Factory (Python)",
      "note": "Script de gobernanza que compara todos los pipelines existentes en ADF con los que tuvieron ejecución en los últimos 90 días. La ventana de 90 días requiere logs archivados; el historial nativo de ADF retiene 45 días. Sin ejecución reciente significa candidato a revisión: verificar cobertura, responsable, dependencias y estacionalidad antes de desactivar. Decisión de arquitectura: saneamiento periódico como estándar de ingeniería. Resultado: 500+ pipelines identificados y desactivados."
     },
     {
      "tab": "NavNext · Calidad antes de publicar",
      "label": "[Modelo] Prueba automática que impide que respuestas malas lleguen al cliente (Python · DeepEval)",
      "note": "Antes de publicar una nueva versión de NavNext, pruebas automáticas simulan conversaciones y evalúan relevancia, adherencia al contexto y riesgo de respuestas inventadas. Si la calidad queda por debajo del límite definido, la publicación se bloquea. En lenguaje simple: el agente debe demostrar que responde bien antes de conversar con clientes."
     },
     {
      "tab": "Power BI · ETL en el lugar correcto",
      "label": "[Modelo] Transferencia del procesamiento pesado de Power BI a Databricks (PySpark)",
      "note": "En un esfuerzo de optimización de BI, las transformaciones pesadas que corrían en Power Query se transfirieron a Databricks y se persistieron en Delta Lake en la capa Gold. Power BI pasó a consumir datos ya preparados, reduciendo cuellos de botella de capacidad. Resultado demostrativo del patrón: refresh de 45 min → 8 min y consumo Premium -60%."
     }
    ],
    "faq": [
     {
      "q": "¿Cómo se estructuró el framework de gobernanza técnica del área?",
      "a": "El framework se estableció sobre tres pilares hasta entonces inexistentes: (1) Plantilla de Arquitectura Empresarial, estándar para el diseño de cualquier solución antes de la promoción a producción; (2) Checklist de Validación Pre-Producción, criterios objetivos que toda entrega debe cumplir (seguridad, observabilidad, trazabilidad, FinOps); (3) Visión de Pruebas, estandarización de calidad y resiliencia. La responsabilidad de arquitectura abarcó 34 proyectos estratégicos en un solo año, y Confluence Brasil evolucionó de cero al TOP 20 mundial de Heineken entre los 70 países de operación, con 200+ activos, incluyendo onboarding, mapeo del BW y Menú de Soluciones."
     },
     {
      "q": "¿Cómo funcionaba el turno de arquitectura?",
      "a": "Se realizaron 104+ sesiones recurrentes, 1:1s y reviews con todos los liderazgos y 20+ profesionales del área. Cada turno contemplaba revisión de arquitecturas en curso, decisiones técnicas, desbloqueo de equipos, revisión de puntos críticos y alineamiento de estándares empresariales. No se trataba de consultoría eventual, sino de presencia continua en el ciclo de desarrollo de cada equipo."
     },
     {
      "q": "¿Cómo se estimó el ahorro de €15 mil/año en FinOps?",
      "a": "El análisis identificó 107 TB de logs de diagnóstico almacenados en capa Standard (caliente) de un blob storage. Logs históricos sin acceso activo no justifican capa caliente; la migración a Archive redujo el costo hasta 10×. Sumado a la eliminación de 500+ pipelines ADF sin ejecución hacía más de 90 días, la iniciativa fundamentó un ahorro anual estimado de €15k, no una medición de ahorro ya realizado."
     },
     {
      "q": "¿Qué es el Menú de Soluciones?",
      "a": "Un catálogo de todos los modelos de arquitectura utilizados por el área: dado el origen de los datos y la forma de consumo por el usuario final, el Menú define qué patrón de arquitectura seguir. Antes, cada equipo concebía soluciones de forma independiente. Con el Menú, cualquier ingeniero identifica el modelo adecuado, los requisitos, los prerrequisitos y el costo estimado, estandarización efectiva, no solo documentación."
     }
    ]
   },
   "ja": {
    "r": "ソリューション＆データアーキテクチャ専門家",
    "per": "2025年〜2026年",
    "stintWord": "フェーズ",
    "d": "Heinekenのブラジル拠点でソリューション・データアーキテクチャの専門家として、技術リーダーシップを担いました。海外チームと連携し、データエンジニアリング、ガバナンス、FinOps、AIに取り組みました。",
    "heroChips": [
     "Microsoft Azure",
     "Python · SQL",
     "データエンジニアリング · Spark",
     "バッチデータ処理 · SAP → Lake",
     "データアーキテクチャリーダー · ブラジル",
     "欧州 · メキシコ · 米国"
    ],
    "app": {
     "sub": "アーキテクチャ＆ガバナンス",
     "h": "アーキテクチャから見る<em>データ領域。</em>",
     "d": "Heinekenにおけるアーキテクチャ業務のシミュレーション: SAPからAzure LakeへのSparkによるデータエンジニアリング、ソリューションビューとアーキテクチャ判断のエンタープライズハブ、FinOpsと運用ガバナンス。企業データを使わない教育目的のシミュレーションです。"
    },
    "metrics": [
     {
      "v": "ブラジル · グローバル",
      "l": "国内唯一のリードデータアーキテクト · 戦略プロジェクト34件"
     },
     {
      "v": "500+",
      "l": "適正化されたADFパイプライン · FinOps"
     },
     {
      "v": "200+",
      "l": "ナレッジ資産 · Confluence"
     },
     {
      "v": "34",
      "l": "設計プロジェクト · 1年間"
     }
    ],
    "demos": [
     {
      "kind": "app",
      "t": "データプラットフォーム＆インパクト",
      "d": "Heinekenのインタラクティブパイプライン: SAP → Azure Lake（Bronze → Silver → Gold）→ Power BI。各層間をアニメーションで流れるパーティクル、段階ごとの指標とコード、さらにインパクトダッシュボード（FinOps、34プロジェクトのポートフォリオ、マネージャーのコメント）。",
      "u": "heineken-dataplatform-app.html",
      "btn": "パイプライン＆インパクトを開く →"
     },
     {
      "kind": "app",
      "t": "NavNext、エージェントHeitorと会話する",
      "d": "AIエージェントのインタラクティブシミュレーター: WhatsApp販売と音声通話、グローバル展開を見据えたブラジルパイロット。",
      "u": "heineken-navnext-app.html",
      "btn": "シミュレーターを開く →"
     }
    ],
    "quote": {
     "t": "Jenniferは、この領域の技術的発展に直接的な影響を与える、堅実で一貫した成果を上げた1年を過ごしました。基準を引き上げ、存在しなかったプロセスを構築し、フレームワークを整備し、2025年にアーキテクチャに関わったほぼすべての戦略プロジェクトに積極的に貢献しました。",
     "by": "マネージャーコメント · 2025年度評価 · Heineken"
    },
    "arch": [
     [
      "SAP / ERP",
      "Theobald Software · オンプレミス取り込み"
     ],
     [
      "データレイク",
      "Azure Storage · bronze · silver · gold"
     ],
     [
      "オーケストレーション",
      "Azure Data Factory · パイプライン"
     ],
     [
      "処理",
      "Databricks · 分散PySpark"
     ],
     [
      "消費",
      "Azure Storage · Microsoft Power BI"
     ]
    ],
    "stat3": [
     {
      "v": "+R$2,200万",
      "l": "NavNextでの見込み額 · グローバル展開を見据えたブラジルパイロット"
     },
     {
      "v": "104+",
      "l": "アーキテクチャ当番 · 年間を通じ全チームへの継続的な技術支援"
     },
     {
      "v": "€1.5万 · 107 TB",
      "l": "FinOpsの見込み削減額: Standard→Archive移行 + 500以上のADFパイプライン適正化"
     }
    ],
    "layers": [
     {
      "icon": "🏭",
      "title": "SAP + Theobald Software",
      "desc": "Theobald Software経由でオンプレミスERP（SAP）データをAzure Storageに取り込み。企業データレイクの入口層で、生データを確実かつ増分的に受け入れます。"
     },
     {
      "icon": "🗄️",
      "title": "データレイク · メダリオンアーキテクチャ",
      "desc": "Azure Storageの3層構成: Bronze（生データを保持）、Silver（クレンジング・標準化済みデータ）、Gold（利用可能なデータ）。トレーサビリティ、段階的な品質、安全な再処理を保証します。"
     },
     {
      "icon": "⚙️",
      "title": "Azure Data Factory",
      "desc": "全パイプラインのエンドツーエンドオーケストレーション。ADFが取り込み、変換、配信を調整し、チェーン全体の一元的な可視性、アラート、監視を提供します。"
     },
     {
      "icon": "🔥",
      "title": "Databricks · PySpark",
      "desc": "大規模データの分散処理。PySparkがSilverデータをGoldに変換: 複雑な計算、集計、拡充、大規模MLモデル向けの特徴量生成。"
     },
     {
      "icon": "📊",
      "title": "Power BI + Azure Storage",
      "desc": "最終消費層: Azure Storage経由でGold層に接続されたレポートとダッシュボード。ほぼリアルタイム（数分の遅延）で全事業部門がデータを利用可能。"
     },
     {
      "icon": "🤖",
      "title": "NavNext · 注目ケース",
      "desc": "この企業基盤の上に、NavNextのテレセールスAIエージェント（音声＋WhatsApp）のアーキテクチャを設計。年間+R$2,200万を見込むブラジルパイロット。Azure AI Foundry、CosmosDB、Blob Storage、SAP連携。"
     }
    ],
    "dashKpis": [
     "NavNext · 年間+R$2,200万見込み",
     "€1.5万/年 · FinOps · 107 TB → Archive"
    ],
    "dashLabels": [
     "グローバル展開を見据えたブラジルパイロット",
     "推定年間クラウドコスト削減"
    ],
    "mockItems": [
     {
      "l": "エンタープライズアーキテクチャフレームワーク",
      "v": "✓ 稼働中"
     },
     {
      "l": "本番前チェックリスト · 技術検証",
      "v": "✓ 稼働中"
     },
     {
      "l": "TOGAFに着想を得たエンタープライズ標準の200以上のアーキテクチャ資産・ソリューションビュー",
      "v": "✓ 稼働中"
     },
     {
      "l": "英語での国際協業 · 複数国のステークホルダー",
      "v": "✓ グローバル"
     },
     {
      "l": "FinOps · 500以上のADFパイプライン適正化",
      "v": "✓ 完了"
     },
     {
      "l": "104以上の当番 · 継続的な技術対応",
      "v": "✓ 2025年〜2026年"
     }
    ],
    "stints": [
     {
      "r": "エンタープライズアーキテクチャ、FinOps＆ガバナンス",
      "per": "2025年〜2026年",
      "prob": "この領域では重要なプロジェクトが進行していましたが、本番投入前にアーキテクチャ、リスク、準備状況を評価する統一プロセスがありませんでした。重要な情報は会議、担当者、個別文書に散在していました。FinOps診断により、Standard層に107 TBのログを持つ診断用blobストレージと、利用実態が不明な500以上のAzure Data Factoryパイプラインが判明しました。問題は技術の不足ではなく、技術的知見を一貫した再現可能な意思決定に変換する仕組みの欠如でした。",
      "decSections": [
       {
        "eye": "📐 エンタープライズアーキテクチャと技術文書",
        "body": "34の戦略プロジェクトを担当するアーキテクトとして、TOGAFの実践に着想を得た技術文書体系を構築しました: ソリューションのエグゼクティブビュー、ビジネスコンテキスト、要件、コンポーネント、連携、データフロー、セキュリティ、依存関係、リスク、コスト、アーキテクチャ判断。エンタープライズアーキテクチャテンプレート、本番前検証チェックリスト、テストビューにより、散在していた知見を検証可能で再利用可能な標準に変換しました。104回のアーキテクチャセッションを通じ、このモデルを構想からゴーライブまでチームの日常業務に取り入れました。"
       },
       {
        "eye": "💰 FinOpsとAzureインフラ",
        "body": "FinOpsはクラウドコストを管理・削減する実践です。2つの診断が具体的な施策を導きました。第一に、実際の照会頻度に見合わない頻繁アクセス層に107 TBの過去ログが存在することが判明。保持と即時可用性の区別が意思決定を導き、データは保持する必要があるが、日常的に使用される情報と同じコストでアクセス可能にしておく必要はないと結論づけました。解決策はAzure Blob StorageでのArchiveへの自動移行ライフサイクルポリシーで、年間€1.5万の削減を見込みました。第二に、利用実態が不明な500以上のAzure Data Factoryパイプラインを棚卸しし、実行履歴と頻度で分析し、技術・ビジネス双方の責任者を特定、分類・対応しました。効果は直接コスト以上に及び、監視ノイズの削減、障害面の縮小、事業を支えるフローの明確化につながりました。"
       },
       {
        "eye": "📚 アーキテクチャハブと英語でのグローバル業務",
        "body": "Confluenceは単なるページのリポジトリから、アーキテクチャの運用ハブへと変わりました。ソリューションビュー、図表、アーキテクチャ判断、連携、リスク、再利用パターン、オンボーディング、ソリューションメニュー、エグゼクティブ向けOne Pager、SAP BWマッピング、Azure・Databricksへのモダナイゼーション分析など、200以上の技術資産をエンタープライズ標準で整備しました。ブラジル拠点は70か国中でグローバル導入TOP20を達成。業務には、Heinekenの各国拠点の担当者やステークホルダーとの英語での会議、調整、技術的な対話が含まれました。"
       },
       {
        "eye": "⚖️ 税務・規制プロジェクト",
        "body": "税制改革: ブラジル史上最大の税制改革（CBS/IBS）の影響に対する技術アーキテクチャ、SAPシステムの対応、NF-eフロー、データレイク。税務照合: 自動化された税務照合。GRC→DRC（請求書）: API経由の自動XML生成とデータレイク上のABAP活用を伴う移行。ICMS: 税額算定モデル。"
       },
       {
        "eye": "🏗️ プラットフォーム・戦略プロジェクト",
        "body": "NavNext（テレセールスAIエージェント、グローバルパイロット）、BI最適化（Power Query → Databricksへのオフロード、Premium -60%）、契約署名（API自動化）、Spin、Better Drinks（MDM、サステナビリティデータ）、Budget（Azureスケール）、リセラーポータル、Payments Methods、GenAI People、危機対応モニタリング、KNIME移行、Alteryx Cloud、Ironclad、Ultragaz、Managerial Clients、CMIS、Klon、エンタープライズアーキテクチャチャプター、その他多数。"
       }
      ],
      "res": "FinOpsは単なる請求確認から、アーキテクチャ判断を導く実践へと変わりました。ガバナンスは技術チーム、リーダーシップ、事業部門の間に共通言語を生み出しました。成果: 年間€1.5万のクラウドコスト削減、500以上のパイプライン適正化、104回のアーキテクチャセッション、Confluenceに整備された200以上のナレッジ資産。",
      "metrics": [
       "€1.5万/年 · 見込み削減額",
       "500以上のパイプライン適正化",
       "104以上のアーキテクチャセッション",
       "Confluence内200以上の資産"
      ]
     },
     {
      "r": "NavNext · テレセールスAIエージェント · グローバル展開を見据えたブラジルパイロット",
      "per": "注目プロジェクト · グローバル展開を見据えたブラジルパイロット",
      "prob": "NAVの顧客基盤は約16万人。人による電話営業では、このすべての基盤に対する継続的な接触を維持できず、リーチ、頻度、コンバージョン能力が制限されていました。人員のみでの拡大は運用コストを押し上げ、時間帯や同時対応能力の制約を受け続けることになります。",
      "dec": "NavNextは、音声（通話）とテキスト（WhatsApp）で顧客と対話するAIエージェントであり、何千人もの人に同時対応できる仮想営業担当者です。アーキテクチャは、グローバル展開を前提としたブラジルパイロットとして設計されました。音声チャネル: Genesysが通話をルーティングし、LiveKitがリアルタイムの双方向音声を支えます。テキストチャネル: Meta経由のWhatsApp Business APIをBlipがオーケストレーション。AIオーケストレーション: Azure AI Foundryが意図の特定、応答生成、商品推薦を調整。非同期処理: Azure Functionsとメッセージングが音声とテキストのイベントを分離し、一部の障害が会話全体を中断させないようにします。状態と履歴: CosmosDBが会話中のコンテキストを保持し、Blob Storageが保持ルールに従って履歴を保存。企業連携: SAPがトランザクションフローに、Salesforceがヒューマン・イン・ザ・ループを可能にし、交渉や人的サポートが必要な案件は担当者が引き継ぎます。セキュリティ: Key Vault、Entra ID、Akamai WAF、ネットワーク分離。AI品質: DeepEvalとAI-as-a-Judgeを用いたLLMOpsが、各リリース前に関連性、文脈への忠実性、根拠のない応答の有無を評価します。",
      "res": "事業側が定めた保守的な前提に基づき、このシナリオは追加獲得顧客数、増分コンバージョン、平均チケット単価、購入頻度をもとに、年間最大R$2,200万の潜在価値を見込みます。増分コンバージョンの活用が重要で、エージェントがなければ発生しなかった売上とNavNextが生み出した売上を切り分けます。チャネルはコアロジックから分離され、音声とWhatsAppを独立して進化させられます。グローバル展開を見据えたブラジルパイロット: オーケストレーション、セキュリティ、LLMOps、AI品質を再利用可能な基盤として。",
      "metrics": [
       "年間+R$2,200万見込み",
       "顧客基盤16万人",
       "リーチ+1万人",
       "レイテンシ2秒未満"
      ]
     }
    ],
    "codeNotes": [
     {
      "tab": "FinOps · Azure Lifecycle",
      "label": "[モデル] 診断用blobストレージのStandard→Archive移行（Python · Azure SDK）",
      "note": "ストレージコストを削減するライフサイクルスクリプト: 最終更新から365日以上経過したblob（頻繁アクセス層を必要としない過去ログ）を特定し、最大10倍安価なArchive層へ移行します。累積107 TBのログに適用し、年間€1.5万の削減見込み。"
     },
     {
      "tab": "ADF · ガバナンス",
      "label": "[モデル] Azure Data Factoryにおける未使用パイプラインの監査と削除（Python）",
      "note": "既存の全ADFパイプラインを過去90日間の実行履歴と比較するガバナンススクリプト。90日の評価には保存済みログと長期保持が必要です。ADF標準履歴は45日です。未実行は削除許可ではなく確認候補です。ログ網羅性、担当者、依存関係、季節性を確認して承認します。アーキテクチャ判断: 定期的な適正化をエンジニアリング標準とする。結果: 500以上のパイプラインを特定し無効化。"
     },
     {
      "tab": "NavNext · 公開前の品質確認",
      "label": "[モデル] 悪い応答が顧客に届くのを防ぐ自動テスト（Python · DeepEval）",
      "note": "NavNextの新バージョンを公開する前に、自動テストが会話をシミュレーションし、関連性、文脈への忠実性、作り話の応答リスクを評価します。品質が定めた閾値を下回ると公開はブロックされます。平易に言えば、エージェントは顧客と対話する前に良い応答をすることを証明しなければなりません。"
     },
     {
      "tab": "Power BI · 適切な場所でのETL",
      "label": "[モデル] Power BIの重い処理をDatabricksへ移行（PySpark）",
      "note": "BI最適化の取り組みの中で、Power Queryで実行していた重い変換処理をDatabricksへ移行し、Gold層のDelta Lakeに永続化しました。Power BIはすでに準備済みのデータを消費するようになり、キャパシティのボトルネックが軽減されました。このパターンの実証結果: リフレッシュ時間45分→8分、Premium消費-60%。"
     }
    ],
    "faq": [
     {
      "q": "この領域の技術ガバナンスフレームワークはどのように構築されましたか?",
      "a": "フレームワークは、それまで存在しなかった3つの柱の上に構築されました: (1) エンタープライズアーキテクチャテンプレート、本番昇格前のあらゆるソリューション設計の標準。(2) 本番前検証チェックリスト、あらゆる納品が満たすべき客観的基準（セキュリティ、可観測性、トレーサビリティ、FinOps）。(3) テストビュー、品質と耐障害性の標準化。アーキテクチャ責任は1年間で34の戦略プロジェクトに及び、Confluenceブラジルは、業務展開している70か国の中でゼロからHeinekenのグローバルTOP20へと成長し、オンボーディング、BWマッピング、ソリューションメニューを含む200以上の資産を整備しました。"
     },
     {
      "q": "アーキテクチャ当番はどのように機能していましたか?",
      "a": "全リーダーと20名以上の担当者を対象に、104回以上の定例セッション、1on1、レビューを実施しました。各当番では、進行中のアーキテクチャのレビュー、技術的判断、チームのブロッカー解消、重要ポイントのレビュー、エンタープライズ標準の整合を行いました。単発のコンサルティングではなく、各チームの開発サイクルへの継続的な関与でした。"
     },
     {
      "q": "年間€1.5万のFinOps削減はどのように推定しましたか?",
      "a": "分析により、blobストレージのStandard（頻繁アクセス）層に107 TBの診断ログが保存されていることが判明しました。アクティブなアクセスのない過去ログは頻繁アクセス層を必要とせず、Archiveへの移行によりコストを最大10分の1に削減しました。90日以上実行のない500以上のADFパイプラインの削除と合わせ、この取り組みに基づく年間削減額の推定は€1.5万であり、実現済み削減額の測定ではありません。"
     },
     {
      "q": "ソリューションメニューとは何ですか?",
      "a": "この領域で使用されるすべてのアーキテクチャモデルのカタログです。データの出所とエンドユーザーによる消費方法に応じて、メニューはどのアーキテクチャパターンに従うべきかを定義します。以前は各チームが独立してソリューションを設計していました。メニューにより、どのエンジニアでも適切なモデル、要件、前提条件、見込みコストを特定でき、単なる文書化ではなく実効的な標準化を実現します。"
     }
    ]
   }
  },
  "app": {
   "sub": "ARQUITETURA & GOVERNANÇA",
   "h": "A área de dados vista <em>pela arquitetura.</em>",
   "d": "Simulação do dia a dia da arquitetura na Heineken: engenharia de dados do SAP ao Azure Lake com Spark, hub enterprise de visões de solução e decisões arquiteturais, além de FinOps e governança operacional. Simulação didática, sem dados corporativos."
  },
  "heroGrad": "linear-gradient(135deg,#0a2d15,#1a6b35)",
  "metrics": [
   {
    "v": "34 PROJETOS · TOP 20 GLOBAL",
    "l": "200+ ativos técnicos"
   },
   {
    "v": "500+",
    "l": "pipelines ADF saneados · FinOps"
   },
   {
    "v": "200+",
    "l": "assets de conhecimento · Confluence"
   },
   {
    "v": "34",
    "l": "projetos arquitetados · 1 ano"
   }
  ],
  "dashKpis": [
   "NavNext · +R$22MM/ano projetados",
   "€15k/ano · FinOps · 107 TB → Archive"
  ],
  "dashLabels": [
   "piloto Brasil para expansão global",
   "estimativa anual de economia de custo de nuvem"
  ],
  "stack": [
   "Microsoft Azure",
   "Databricks",
   "Azure Data Factory",
   "Power BI",
   "SAP",
   "Theobald Software",
   "Azure Storage",
   "Azure AI Foundry",
   "CosmosDB",
   "Terraform"
  ],
  "dashStack": [
   "Databricks",
   "Azure Data Factory",
   "Power BI",
   "SAP",
   "Theobald Software",
   "Azure Storage",
   "Terraform",
   "Alteryx",
   "KNIME",
   "Confluence"
  ],
  "mockItems": [
   {
    "l": "Framework de Arquitetura Corporativa",
    "v": "✓ ativo"
   },
   {
    "l": "Checklist Pré-Produção · validação técnica",
    "v": "✓ ativo"
   },
   {
    "l": "200+ ativos de arquitetura · visões de solução em padrão enterprise inspirado em TOGAF",
    "v": "✓ ativo"
   },
   {
    "l": "Colaboração internacional em inglês · stakeholders de múltiplos países",
    "v": "✓ global"
   },
   {
    "l": "FinOps · 500+ pipelines ADF saneados",
    "v": "✓ done"
   },
   {
    "l": "104+ plantões · presença técnica contínua",
    "v": "✓ 2025 a 2026"
   }
  ],
  "heroImg": "img/jen-heineken-chibi.webp",
  "skipDefaultApp": true,
  "stintWord": "Frente",
  "demos": [
   {
    "kind": "app",
    "t": "Plataforma de Dados & Impacto",
    "d": "Pipeline interativo da Heineken: SAP → Azure Lake (Bronze → Silver → Gold) → Power BI, com fluxo de partículas animado entre cada camada, métricas e código por estágio, mais o dashboard de impacto: FinOps, portfólio de 34 projetos e citação do gestor.",
    "u": "heineken-dataplatform-app.html",
    "btn": "Abrir pipeline & impacto →"
   },
   {
    "kind": "app",
    "t": "NavNext, converse com o agente Heitor",
    "d": "Simulador interativo do agente de IA: venda por WhatsApp e ligação por voz, piloto Brasil desenhado para escala global.",
    "u": "heineken-navnext-app.html",
    "btn": "Abrir simulador →"
   }
  ],
  "quote": {
   "t": "A Jennifer teve um ano de entregas robustas, consistentes e de impacto direto na evolução técnica da área. Ela elevou padrões, estruturou processos que não existiam, consolidou frameworks e contribuiu de forma ativa para praticamente todos os projetos estratégicos que tocaram arquitetura em 2025.",
   "by": "Comentário do gestor · avaliação anual 2025 · Heineken"
  },
  "stints": [
   {
    "r": "Arquitetura Corporativa, FinOps & Governança",
    "per": "2025 a 2026",
    "prob": "A área conduzia projetos relevantes, mas não possuía um processo uniforme para avaliar arquitetura, riscos e prontidão antes da entrada em produção. Informações importantes estavam distribuídas entre reuniões, pessoas e documentos isolados. Um diagnóstico de FinOps revelou um blob storage de diagnóstico com 107 TB de logs em camada Standard e 500+ pipelines do Azure Data Factory sem evidência clara de uso. O problema não era falta de tecnologia. Era falta de um mecanismo capaz de transformar conhecimento técnico em decisões consistentes e repetíveis.",
    "decSections": [
     {
      "eye": "📐 Arquitetura enterprise & documentação técnica",
      "body": "Como arquiteta responsável por 34 projetos estratégicos, estruturei um sistema de documentação técnica inspirado nas práticas do TOGAF: visão executiva da solução, contexto de negócio, requisitos, componentes, integrações, fluxos de dados, segurança, dependências, riscos, custos e decisões arquiteturais. O Template de Arquitetura Corporativa, o Checklist de Validação Pré-Produção e a Visão de Testes transformaram conhecimento disperso em padrões verificáveis e reutilizáveis. As 104 sessões de arquitetura levaram esse modelo para o trabalho diário dos times, da concepção ao go-live."
     },
     {
      "eye": "💰 FinOps & Infraestrutura Azure",
      "body": "FinOps é a prática de controlar e reduzir o custo da nuvem. Dois diagnósticos orientaram ações concretas. Primeiro: 107 TB de logs históricos foram identificados em camada de acesso frequente, incompatível com sua frequência real de consulta. A distinção entre retenção e disponibilidade imediata orientou a decisão: os dados precisavam ser preservados, mas não precisavam permanecer acessíveis com o mesmo custo de informações usadas diariamente. A solução foi uma política de lifecycle no Azure Blob Storage para transferência automática para Archive, com economia estimada de €15k/ano. Segundo: mais de 500 pipelines do Azure Data Factory sem evidência clara de uso foram inventariados, analisados por histórico de execução e frequência, localizados os responsáveis técnicos e de negócio, classificados e tratados. O ganho vai além do custo direto: menos ruído de monitoramento, menor superfície de falha e maior clareza sobre quais fluxos sustentam o negócio."
     },
     {
      "eye": "📚 Hub de arquitetura & atuação global em inglês",
      "body": "O Confluence deixou de ser um repositório de páginas e tornou-se o hub operacional da arquitetura. Foram consolidados 200+ ativos técnicos em padrão enterprise: visões de solução, diagramas, decisões arquiteturais, integrações, riscos, padrões reutilizáveis, onboarding, Cardápio de Soluções, One Pages executivas, mapeamento do SAP BW e análises de modernização para Azure e Databricks. A operação brasileira alcançou o TOP 20 global de adoção entre 70 países. A atuação incluiu reuniões, alinhamentos e conversas técnicas em inglês com profissionais e stakeholders de diferentes operações internacionais da Heineken."
     },
     {
      "eye": "⚖️ Projetos Fiscais & Regulatórios",
      "body": "Tax Reform (Reforma Tributária): arquitetura técnica para o impacto da maior reforma fiscal do Brasil, CBS/IBS, adequação dos sistemas SAP, fluxo de NF-e e Data Lake. Tax Reconciliation: conciliação fiscal automatizada. GRC→DRC (Notas Fiscais): migração com geração automática de XML via API e exploração de ABAP sobre Data Lake. ICMS: modelo de apuração fiscal."
     },
     {
      "eye": "🏗️ Plataforma & Projetos Estratégicos",
      "body": "NavNext (AI Agents de telesales, piloto global) · Otimização de BI (offload Power Query → Databricks, -60% Premium) · Assinatura de Contratos (automação via API) · Spin · Better Drinks (MDM, dados sustentabilidade) · Budget (Azure scale) · Portal de Revendas · Payments Methods · GenAI People · Monitoramento de Crises · Migração KNIME · Alteryx Cloud · Ironclad · Ultragaz · Managerial Clients · CMIS · Klon · Chapter de Arquitetura Corporativa · e muito mais."
     }
    ],
    "res": "FinOps deixou de ser apenas leitura de fatura e passou a orientar decisões arquiteturais. A governança criou uma linguagem comum entre equipes técnicas, lideranças e áreas de negócio. Resultados: €15k/ano de economia estimada com cloud, 500+ pipelines saneados, 104 sessões de arquitetura e 200+ ativos de conhecimento consolidados no Confluence.",
    "metrics": [
     "€15 mil/ano · economia estimada",
     "500+ pipelines saneados",
     "104+ sessões de arquitetura",
     "200+ ativos no Confluence"
    ],
    "stack": [
     "Azure Data Factory",
     "FinOps",
     "Azure Storage",
     "Confluence",
     "Terraform",
     "Databricks",
     "Theobald Software",
     "Alteryx",
     "KNIME",
     "Power BI"
    ]
   },
   {
    "r": "NavNext · AI Agents de Telesales · piloto Brasil para escala global",
    "per": "projeto destaque · piloto Brasil para escala global",
    "prob": "A carteira NAV reunia aproximadamente 160 mil clientes. A operação humana de telesales não conseguia manter contato recorrente com toda essa base, limitando alcance, frequência e capacidade de conversão. Escalar apenas com pessoas elevaria o custo operacional e continuaria sujeito a restrições de horário e capacidade simultânea.",
    "dec": "O NavNext é um agente de inteligência artificial que conversa com clientes por voz (ligação) e texto (WhatsApp), como um vendedor virtual capaz de atender milhares de pessoas ao mesmo tempo. A arquitetura foi desenhada como piloto brasileiro com premissa de expansão global. Canal de voz: Genesys realiza o roteamento das chamadas; LiveKit suporta o áudio bidirecional em tempo real. Canal de texto: WhatsApp Business API via Meta, orquestrado pelo Blip. Orquestração de IA: Azure AI Foundry coordena identificação de intenção, geração de respostas e recomendação de produtos. Processamento assíncrono: Azure Functions e mensageria desacoplam eventos de voz e texto, garantindo que falhas em um componente não interrompam a conversa. Estado e histórico: CosmosDB mantém o contexto durante a conversa; Blob Storage preserva históricos conforme regras de retenção. Integração corporativa: SAP no fluxo transacional; Salesforce viabiliza o human-in-the-loop, com atendente assumindo casos que exigem negociação ou suporte humano. Segurança: Key Vault, Entra ID, Akamai WAF e isolamento de rede. Qualidade de IA: LLMOps com DeepEval e AI-as-a-Judge avaliam relevância, aderência ao contexto e ausência de respostas não fundamentadas antes de cada promoção.",
    "res": "Com premissas conservadoras definidas pelo negócio, o cenário projeta potencial de até R$22MM/ano, calculado sobre clientes incrementais alcançados, conversão incremental, ticket médio e frequência de compra. O uso de conversão incremental é essencial: separa vendas geradas pelo NavNext das que aconteceriam sem o agente. Os canais foram desacoplados da lógica central, permitindo evoluir voz e WhatsApp de forma independente. Piloto Brasil desenhado para expansão global: orquestração, segurança, LLMOps e qualidade de IA como base reutilizável.",
    "metrics": [
     "+R$22MM/ano projetados",
     "160k clientes na carteira",
     "+10k de alcance",
     "latência < 2s"
    ],
    "stack": [
     "Azure AI Foundry",
     "LLMOps",
     "LiveKit",
     "Genesys",
     "Blip/WhatsApp",
     "CosmosDB",
     "Blob Storage",
     "SAP",
     "Key Vault",
     "Akamai WAF",
     "DeepEval",
     "Salesforce"
    ]
   }
  ],
  "arch": [
   [
    "SAP / ERP",
    "Theobald Software · ingestão on-premise"
   ],
   [
    "Data Lake",
    "Azure Storage · bronze · silver · gold"
   ],
   [
    "Orquestração",
    "Azure Data Factory · pipelines"
   ],
   [
    "Processamento",
    "Databricks · PySpark distribuído"
   ],
   [
    "Consumo",
    "Azure Storage · Microsoft Power BI"
   ]
  ],
  "stat3": [
   {
    "v": "+R$22MM",
    "l": "projetados no NavNext · piloto Brasil desenhado para expansão global"
   },
   {
    "v": "104+",
    "l": "plantões de arquitetura · presença técnica contínua em todos os times da área ao longo do ano"
   },
   {
    "v": "€15k · 107 TB",
    "l": "economia FinOps estimada: migração Standard→Archive + 500+ pipelines ADF saneados"
   }
  ],
  "layers": [
   {
    "icon": "🏭",
    "title": "SAP + Theobald Software",
    "desc": "Ingestão dos dados de ERP on-premise (SAP) via Theobald Software para o Azure Storage. Camada de entrada do Data Lake corporativo, dado bruto chegando de forma confiável e incremental."
   },
   {
    "icon": "🗄️",
    "title": "Data Lake · Arquitetura Medallion",
    "desc": "Azure Storage com três camadas: Bronze (dado bruto preservado), Silver (dado limpo e padronizado) e Gold (dado pronto para consumo). Garante rastreabilidade, qualidade progressiva e reprocessamento seguro."
   },
   {
    "icon": "⚙️",
    "title": "Azure Data Factory",
    "desc": "Orquestração end-to-end de todos os pipelines. ADF coordena ingestão, transformação e entrega de dados, visibilidade centralizada de toda a cadeia, com alertas e monitoramento."
   },
   {
    "icon": "🔥",
    "title": "Databricks · PySpark",
    "desc": "Processamento distribuído de grandes volumes. PySpark transforma os dados Silver em Gold: cálculos complexos, agregações, enriquecimento e features para modelos de ML em escala."
   },
   {
    "icon": "📊",
    "title": "Power BI + Azure Storage",
    "desc": "Consumo final: relatórios e dashboards conectados à camada Gold via Azure Storage. Dados disponíveis para todas as áreas de negócio com atualização próxima ao tempo real (poucos minutos de atraso)."
   },
   {
    "icon": "🤖",
    "title": "NavNext · Case Destaque",
    "desc": "Sobre esta base corporativa foi desenhada a arquitetura dos agentes de IA de telesales NavNext (voz + WhatsApp), piloto Brasil com projeção de +R$22MM/ano. Azure AI Foundry, CosmosDB, Blob Storage e integração SAP."
   }
  ],
  "codeDisclaimer": "⚠️ Modelos didáticos de código, com dados fictícios. Nenhum trecho contém credenciais, nomes de recursos internos, dados de clientes ou informações sensíveis da Heineken ou de qualquer outro projeto.",
  "code": [
   {
    "tab": "FinOps · Azure Lifecycle",
    "label": "[Modelo] Migração Standard→Archive em blob storage de diagnóstico (Python · Azure SDK)",
    "note": "Script de lifecycle para reduzir custo de armazenamento: identifica blobs com mais de 365 dias desde a última modificação (logs históricos que não precisam de camada quente) e migra para a camada Archive, custo até 10× menor. Lógica aplicada a 107 TB de logs acumulados, com estimativa de €15k/ano de economia.",
    "code": "# Exemplo didático, credenciais e nomes de recursos fictícios\nfrom azure.storage.blob import BlobServiceClient, StandardBlobTier\nfrom datetime import datetime, timedelta\n\n# Blob storage de diagnóstico, logs históricos\nclient = BlobServiceClient.from_connection_string(STORAGE_CONN_STR)\ncontainer = client.get_container_client(\"logs-diagnostico\")\n\ncutoff = datetime.utcnow() - timedelta(days=365)\ntotal_gb = 0.0\n\nfor blob in container.list_blobs():\n    age = (datetime.utcnow() - blob.last_modified.replace(tzinfo=None)).days\n    if age > 365:  # idade desde a modificação; não mede última leitura\n        bc = container.get_blob_client(blob.name)\n        # Prévia: validar acesso, retenção e restauração antes de arquivar.\n        print(f\"Candidato a Archive: {blob.name}\")\n        # bc.set_standard_blob_tier(StandardBlobTier.ARCHIVE)  # só após aprovação\n        total_gb += blob.size / 1e9\n\nprint(f\"Candidatos: {total_gb:.0f} GB | Economia potencial: ~10x custo de storage\")\n# Referência do case: 107 TB → Archive; estimativa de ~€15.000/ano"
   },
   {
    "tab": "ADF · Governança",
    "label": "[Modelo] Auditoria e remoção de pipelines não utilizados no Azure Data Factory (Python)",
    "note": "Script de governança que compara todos os pipelines existentes no ADF com os que tiveram execução nos últimos 90 dias. O recorte de 90 dias exige logs arquivados com retenção estendida; o histórico nativo do ADF retém 45 dias. Ausência de execução só identifica candidatos à revisão: conferir cobertura dos logs, owner, dependências e sazonalidade antes de aprovar a desativação. Decisão de arquitetura: saneamento periódico como padrão de engenharia. Resultado: 500+ pipelines identificados e desativados.",
    "code": "# Exemplo didático, subscription e resource group fictícios\nfrom azure.mgmt.datafactory import DataFactoryManagementClient\nfrom pathlib import Path\nimport json\nfrom datetime import datetime, timedelta\n\nclient = DataFactoryManagementClient(credential, SUBSCRIPTION_ID)\nall_pipes = list(client.pipelines.list_by_factory(RG, ADF_NAME))\n\ncutoff = datetime.utcnow() - timedelta(days=90)\n# Histórico nativo: 45 dias. O recorte de 90 dias requer logs arquivados.\n# Arquivo didático: exportação contínua normalizada, incluindo todas as páginas.\nruns = json.loads(Path(\"adf-runs-historicos.json\").read_text(encoding=\"utf-8\"))\nactive = {r[\"pipelineName\"] for r in runs\n          if datetime.fromisoformat(r[\"runStart\"].replace(\"Z\", \"+00:00\")).replace(tzinfo=None) >= cutoff}\ncandidates = [p.name for p in all_pipes if p.name not in active]\nprint(f\"Ativos no recorte: {len(active)} | Candidatos à revisão: {len(candidates)}\")\n# Conferir cobertura dos logs, owner, dependências, sazonalidade e aprovação.\n# Este exemplo não exclui nem desativa recursos.\n# Resultado obtido: 500+ pipelines identificados e removidos do ambiente"
   },
   {
    "tab": "NavNext · Qualidade antes de publicar",
    "label": "[Modelo] Teste automático que impede respostas ruins de chegarem ao cliente (Python · DeepEval)",
    "note": "Antes de publicar uma nova versão do NavNext, testes automáticos simulam conversas e avaliam relevância, aderência ao contexto e risco de respostas inventadas. Se a qualidade ficar abaixo do limite definido, a publicação é bloqueada. Em linguagem simples: o agente precisa provar que responde bem antes de conversar com clientes.",
    "code": "# Exemplo didático (dados e nomes fictícios)\nfrom deepeval import evaluate\nfrom deepeval.metrics import AnswerRelevancyMetric, HallucinationMetric\nfrom deepeval.test_case import LLMTestCase\n\ndef gate_qualidade_agente():\n    \"\"\"Gate de CI/CD, bloqueia deploy se qualidade abaixo do threshold.\"\"\"\n    case = LLMTestCase(\n        input=\"Quero saber sobre promoções para minha revenda\",\n        actual_output=agente.respond(user_msg),\n        retrieval_context=[\"promoções vigentes Q2\", \"histórico cliente fictício\"],\n        expected_output=\"Resposta com oferta personalizada\"\n    )\n    resultado = evaluate([case], [\n        AnswerRelevancyMetric(threshold=0.85),  # relevância mínima para produção\n        HallucinationMetric(threshold=0.15)      # tolerância máxima a alucinação\n    ])\n    # Threshold abaixo do mínimo → pipeline CI/CD falha → deploy bloqueado\n    assert resultado.success, \"Gate de qualidade falhou, agente não vai para produção\""
   },
   {
    "tab": "Power BI · ETL no lugar certo",
    "label": "[Modelo] Transferência do processamento pesado do Power BI para Databricks (PySpark)",
    "note": "Em uma frente de otimização de BI, as transformações pesadas que rodavam no Power Query foram transferidas para Databricks e persistidas em Delta Lake na camada Gold. O Power BI passou a consumir dados já preparados, reduzindo gargalos de capacidade. Resultado demonstrativo do padrão: refresh de 45 min → 8 min e consumo Premium -60%.",
    "code": "# Exemplo didático (dados e nomes fictícios)\nfrom pyspark.sql import SparkSession, functions as F\n\nspark = SparkSession.builder.getOrCreate()\n\nSILVER = \"abfss://silver@meuadls.dfs.core.windows.net\"\nGOLD   = \"abfss://gold@meuadls.dfs.core.windows.net\"\n\n# Antes: Power Query processava no Premium, 45 min, alto custo\n# Depois: Databricks pré-agrega → Power BI só lê Delta pronto\n\ndf_orders = (spark.read.format(\"delta\")\n    .load(f\"{SILVER}/sap/report_orders\")\n    .filter(F.col(\"data_pedido\") >= \"2024-01-01\")\n    .groupBy(\"canal\", \"regiao\", \"mes_ano\")\n    .agg(\n        F.sum(\"valor\").alias(\"faturamento\"),\n        F.count(\"id_pedido\").alias(\"qtd_pedidos\"),\n        F.avg(\"prazo_entrega_dias\").alias(\"prazo_medio\"),\n    ))\n\n(df_orders.write.format(\"delta\")\n    .mode(\"overwrite\").option(\"overwriteSchema\",\"true\")\n    .save(f\"{GOLD}/report_orders_agregado\"))\n\n# Resultado: refresh 45 min → 8 min | consumo Premium -60%"
   }
  ],
  "faq": [
   {
    "q": "Como foi estruturado o framework de governança técnica da área?",
    "a": "O framework foi estabelecido sobre três pilares até então inexistentes: (1) Template de Arquitetura Corporativa, padrão para o desenho de qualquer solução antes da promoção a produção; (2) Checklist de Validação Pré-Produção, critérios objetivos que toda entrega precisa cumprir (segurança, observabilidade, rastreabilidade, FinOps); (3) Visão de Testes, padronização de qualidade e resiliência. A responsabilidade de arquitetura abrangeu 34 projetos estratégicos em um único ano, e o Confluence Brasil evoluiu do zero ao TOP 20 mundial da Heineken entre os 70 países de operação, com 200+ assets, incluindo onboarding, mapeamento do BW e Cardápio de Soluções."
   },
   {
    "q": "Como funcionava o plantão de arquitetura?",
    "a": "Foram conduzidas 104+ sessões recorrentes, 1:1s e reviews com todas as lideranças e 20+ profissionais da área. Cada plantão contemplava revisão de arquiteturas em andamento, decisões técnicas, desbloqueio de times, revisão de pontos críticos e alinhamento de padrões corporativos. Não se tratava de consultoria eventual, mas de presença contínua no ciclo de desenvolvimento de cada time."
   },
   {
    "q": "Como foi estimada a economia de €15 mil/ano em FinOps?",
    "a": "A análise identificou 107 TB de logs de diagnóstico armazenados em camada Standard (quente) de um blob storage. Logs históricos sem acesso ativo não justificam camada quente, a migração para Archive reduziu o custo em até 10×. Somada à remoção de 500+ pipelines ADF sem execução havia mais de 90 dias, a iniciativa fundamentou uma economia anual estimada de €15k, não uma medição de economia já realizada."
   },
   {
    "q": "O que é o Cardápio de Soluções?",
    "a": "Um catálogo de todos os modelos de arquitetura utilizados pela área: dada a origem dos dados e a forma de consumo pelo usuário final, o Cardápio define qual padrão de arquitetura seguir. Antes, cada time concebia soluções de forma independente. Com o Cardápio, qualquer engenheiro identifica o modelo adequado, os requisitos, os pré-requisitos e o custo estimado, padronização efetiva, não apenas documentação."
   }
  ]
 },
 {
  "f": "var",
  "flag": "fr",
  "n": "Carrefour",
  "dom": "carrefour.com.br",
  "per": "2024 a 2025",
  "featured": true,
  "r": "Líder de Arquitetura, Governança e Qualidade de Dados",
  "d": "No Grupo Carrefour Brasil, liderei a área de Arquitetura, Governança e Qualidade de Dados e também atuei diretamente no código e na implementação do C4Data com OpenMetadata. Coordenei uma equipe de 4 profissionais e a interface internacional com o Carrefour França, levando o modelo brasileiro a se tornar referência global do grupo.",
  "heroChips": [
   "Google Cloud · Certificada",
   "Python",
   "Processamento de Dados em Batch · Airflow",
   "Governança & Catálogo · Open Metadata",
   "Grupo Carrefour Brasil · interface França"
  ],
  "t": {
   "en": {
    "r": "Data Architecture, Governance and Quality Lead",
    "per": "2024 to 2025",
    "d": "Led Data Architecture, Governance and Quality for Carrefour Group Brazil, with a direct team of 4 professionals and an international interface with Carrefour France. The OpenMetadata rollout became a global group reference, with 500 active users, 20 domains, 30+ owners, 650+ documented tables, 500+ dashboards and 100+ trained professionals.",
    "heroChips": [
     "Google Cloud · Certified",
     "Python",
     "Batch Data Processing · Airflow",
     "Governance & Catalog · Open Metadata",
     "Carrefour Group Brazil · France interface"
    ],
    "app": {
     "sub": "CATALOG & GOVERNANCE",
     "h": "The catalog the whole company <em>relies on.</em>",
     "d": "Simulation of the governance routine at Carrefour: health of pipelines monitored in Datadog, search in the Open Metadata catalog and quality alerts by domain. Didactic simulation, no corporate data."
    },
    "metrics": [
     {
      "v": "BRAZIL · FRANCE",
      "l": "data architecture, governance and quality leadership"
     },
     {
      "v": "500",
      "l": "active users · official OpenMetadata case"
     },
     {
      "v": "100+",
      "l": "trained professionals · change management"
     },
     {
      "v": "650+",
      "l": "documented tables · 500+ dashboards"
     }
    ],
    "pub": {
     "t": "Official Open Metadata publication · global community success case",
     "u": "https://open-metadata.org/case-study/carrefour-brazil"
    },
    "envNumbers": [
     {
      "v": "40+",
      "l": "data projects on GCP"
     },
     {
      "v": "33K+",
      "l": "tables"
     },
     {
      "v": "500+",
      "l": "data pipelines"
     },
     {
      "v": "1PB+",
      "l": "of data stored in the warehouse"
     },
     {
      "v": "2MM+",
      "l": "daily queries"
     },
     {
      "v": "133PB+",
      "l": "processed daily"
     },
     {
      "v": "600+",
      "l": "dashboards in Tableau"
     }
    ],
    "dashKpis": [
     "500",
     "650+"
    ],
    "dashLabels": [
     "active users · public source",
     "documented tables"
    ],
    "mockItems": [
     {
      "l": "Open Metadata · corporate SSO + CI/CD",
      "v": "✓ active"
     },
     {
      "l": "20 domains · 30+ owners",
      "v": "✓ structured"
     },
     {
      "l": "🥉🥈🥇 badges · completeness · freshness · uniqueness",
      "v": "✓ active"
     },
     {
      "l": "Datadog · Airflow + Cloud Functions monitored",
      "v": "✓ observed"
     },
     {
      "l": "500+ dashboards · 300 glossary terms",
      "v": "✓ cataloged"
     }
    ],
    "demos": [
     {
      "kind": "app",
      "t": "Carrefour Data Catalog · OpenMetadata",
      "d": "Interactive catalog: search 847 assets, see automatic lineage, schema with PII flags, quality scores (completeness · freshness · uniqueness) and a live activity feed.",
      "u": "carrefour-datacatalog-app.html",
      "btn": "Open interactive catalog →"
     },
     {
      "kind": "app",
      "t": "Observability · Datadog + GCP",
      "d": "Live dashboard: pipeline SLAs, Airflow DAGs, Cloud Functions, load heatmap, alert feed and corporate messaging channel integration for critical incidents.",
      "u": "carrefour-datadog-app.html",
      "btn": "Open Datadog dashboard →"
     }
    ],
    "timelineMilestones": [
     "⚡ 3 months from proof of concept to production",
     "🏆 12 months to becoming the group global reference"
    ],
    "timeline": [
     {
      "m": "Jan/24",
      "ico": "📅",
      "items": [
       "Proof of concept",
       "OpenMetadata becomes C4Data",
       "C4Data project definition and approval",
       "Data roles kickoff: Data Owners and Domains"
      ]
     },
     {
      "m": "Apr/24",
      "ico": "🚀",
      "items": [
       "C4Data published to production",
       "Workshop for the first data team"
      ]
     },
     {
      "m": "Jul/24",
      "ico": "🏅",
      "items": [
       "Dataton",
       "C4Data release waves",
       "C4Data cataloging badges",
       "Rollout + workshops"
      ]
     },
     {
      "m": "Oct/24",
      "ico": "🔭",
      "items": [
       "Observability",
       "Data quality tests",
       "Incident automation via Jira",
       "API usage for e-mail automation"
      ]
     },
     {
      "m": "Dec/24",
      "ico": "🌍",
      "items": [
       "Custom data quality tests",
       "Data Maturity Assessment",
       "Global presentation for Carrefour",
       "API usage for tag-inclusion automation"
      ]
     },
     {
      "m": "2025",
      "ico": "🌍",
      "items": [
       "From Brazil to the world: the model taken to France as a global reference for the Carrefour group",
       "Official case study published by OpenMetadata",
       "Continuous expansion: new domains and squads adopting it"
      ]
     }
    ],
    "stints": [
     {
      "r": "Data Architecture, Governance and Quality Lead",
      "per": "2024 to 2025",
      "prob": "With no formal data catalog, 90%+ of assets had no defined owner, zero traceability (impossible to know where a piece of data came from or who was accountable for it). Finding any asset took days. Onboarding new engineers took 30+ days just to understand the ecosystem. Quality was invisible: errors reached the consumer with no alert, SLA or monitoring. Beyond the technological challenge, it was necessary to develop a multidisciplinary team with different experience levels and mobilize engineering, architecture, product and business around a common model.",
      "decSections": [
       {
        "eye": "🏛️ Centralized Catalog with OpenMetadata",
        "body": "Internally, the program was named C4Data: C4 for Carrefour, Data for data. OpenMetadata was deployed as the single discovery and governance point for the entire Carrefour Brazil data ecosystem. The solution was integrated with corporate SSO, eliminating separate credentials, and inserted into CI/CD, making configurations and changes reproducible and auditable. Every cataloged asset received a functional and technical description, data domain, schema, classification, owner and data steward, lineage and quality indicator, activity history. Owners and data stewards were defined per domain, separating responsibilities: Owner (asset decisions and use), Data Steward (documentation and quality), Engineering (implementation and operation). Lineage came to represent the path of data across source systems, transformations and consumption layers, cutting the time to investigate dependencies and impacts from days to minutes."
       },
       {
        "eye": "📈 Data Quality as a Measurable Indicator",
        "body": "Data quality was turned into a visible indicator, tracked and comparable by domain, combining technical quality and governance into a single score per asset. Before C4Data, even assets with good technical quality had a low consolidated score: the absence of governance (no owner, no lineage, no configured rules) dragged the result down regardless of the technical dimensions. The biggest leap came after the Dataton: an initiative with leadership that mobilized teams to regularize the six governance requirements at scale, while completeness, freshness and uniqueness started being handled by the domains. A badge-based certification model (Bronze, Silver and Gold) was also structured so teams had a clear maturity reference per asset. Quality stopped being an intention and became part of the operational cycle.",
        "calc": "<div class=\"calc-title\">Didactic example of score composition</div>\n<div class=\"calc-formula\">Consolidated = (technical quality × 50%) + (governance × 50%)</div>\n<div class=\"calc-row\" style=\"margin-bottom:4px\">\n  <div class=\"calc-col\">\n    <div class=\"calc-col-title\">1 · Technical quality</div>\n    <div style=\"font-size:11px;color:#555;margin-bottom:6px\">Average of the three dimensions:</div>\n    <div class=\"calc-formula\" style=\"font-size:10.5px;margin:0 0 8px\">(completeness + freshness + uniqueness) ÷ 3</div>\n    <div class=\"calc-item\"><b>Completeness</b><span style=\"text-align:right\">required fields filled in</span></div>\n    <div class=\"calc-item\"><b>Freshness</b><span style=\"text-align:right\">data updated within the expected window</span></div>\n    <div class=\"calc-item\"><b>Uniqueness</b><span style=\"text-align:right\">no improper duplicates</span></div>\n  </div>\n  <div class=\"calc-col\">\n    <div class=\"calc-col-title\">2 · Governance</div>\n    <div style=\"font-size:11px;color:#555;margin-bottom:4px\">Requirements met ÷ 6 × 100</div>\n    <div class=\"calc-item\"><b>①</b><span>owner defined</span></div>\n    <div class=\"calc-item\"><b>②</b><span>data steward defined</span></div>\n    <div class=\"calc-item\"><b>③</b><span>description filled in</span></div>\n    <div class=\"calc-item\"><b>④</b><span>lineage available</span></div>\n    <div class=\"calc-item\"><b>⑤</b><span>classification applied</span></div>\n    <div class=\"calc-item\"><b>⑥</b><span>quality rules configured</span></div>\n  </div>\n</div>\n<div style=\"font-size:10px;color:#aaa;margin-bottom:10px;padding-bottom:10px;border-bottom:1px solid #e8e4dc\">0 requirements = 0% &nbsp;·&nbsp; 3 requirements = 50% &nbsp;·&nbsp; 6 requirements = 100%</div>\n<div class=\"calc-row\">\n  <div class=\"calc-col\">\n    <div class=\"calc-col-title\">⬛ Before · vendas_diarias_curated</div>\n    <div class=\"calc-item\"><span>Completeness</span><b>45%</b></div>\n    <div class=\"calc-item\"><span>Freshness</span><b>60%</b></div>\n    <div class=\"calc-item\"><span>Uniqueness</span><b>80%</b></div>\n    <div class=\"calc-item\"><span>Technical</span><b>(45+60+80)÷3 = 61.7%</b></div>\n    <div class=\"calc-item\"><span>Governance</span><b>0÷6 = 0%</b></div>\n    <div class=\"calc-result\"><span class=\"calc-result-label\">Consolidated</span><span class=\"calc-result-val\">30.85%</span></div>\n  </div>\n  <div class=\"calc-col\">\n    <div class=\"calc-col-title\">✅ After · vendas_diarias_curated</div>\n    <div class=\"calc-item\"><span>Completeness</span><b>98%</b></div>\n    <div class=\"calc-item\"><span>Freshness</span><b>97%</b></div>\n    <div class=\"calc-item\"><span>Uniqueness</span><b>99%</b></div>\n    <div class=\"calc-item\"><span>Technical</span><b>(98+97+99)÷3 = 98%</b></div>\n    <div class=\"calc-item\"><span>Governance</span><b>6÷6 = 100%</b></div>\n    <div class=\"calc-result\"><span class=\"calc-result-label\">Consolidated</span><span class=\"calc-result-val\">99%</span></div>\n  </div>\n</div>\n<div class=\"calc-delta\">This asset evolution: 99% − 30.85% = <strong>+68.15 p.p.</strong></div>\n<div class=\"calc-delta\" style=\"margin-top:6px\">Didactic scenario: evolution depends on the baseline, the rules and the scope of each domain.</div>\n<div style=\"font-size:10.5px;color:#aaa;margin-top:8px;border-top:1px solid #e8e4dc;padding-top:8px\">vendas_diarias_curated started from a better-than-average situation. Assets with 0% governance and lower technical scores showed proportionally larger gains.</div>"
       },
       {
        "eye": "📊 Observability on GCP with Datadog",
        "body": "The observability effort was built, integrated with the Google Cloud environment, to provide continuous operational visibility. Datadog was used to track: Apache Airflow DAGs, Cloud Functions, GCP infrastructure components, pipeline execution, failures and recovery, availability, operational behavior and SLA compliance by domain. Before this structure, a problem could only be identified after a consumer complaint. With metrics, dashboards and alerts, teams began detecting failures earlier and routing incidents to the responsible domain. Critical alerts were connected to the corporate communication channel used by the teams, reducing dependency on manual follow-up. Quality and Observability worked in a complementary way: Quality (issues in data content and state), Observability (execution failures, infrastructure, availability and operational behavior)."
       },
       {
        "eye": "👥 Technical Leadership of a Multidisciplinary Team",
        "body": "Technical leadership was exercised over a four-person team: three senior data-governance specialists and one intern. Responsibilities included: (1) coordinating the catalog, quality, observability and adoption tracks, (2) keeping alignment between technical implementation and program goals, (3) acting as a reference between engineering, product and business, (4) translating concepts like catalog, lineage, ownership and quality into results understandable by stakeholders, (5) organizing priorities, defining standards and removing blockers, (6) sustaining technical decisions, (7) creating a consistent way of working among professionals with different experience levels. The role also included leading Carrefour women-in-technology group, contributing to a community of exchange and professional growth."
       },
       {
        "eye": "🎓 Change Management and Adoption at Scale",
        "body": "The technical rollout would only have value if people actually used the catalog and took ownership of data. More than 100 professionals were trained: data engineers, analysts, product professionals, data stewards and business stakeholders. The strategy included: (1) structured governance workshops, (2) technical training on OpenMetadata, (3) squad-based onboarding with reusable materials, (4) training data stewards per domain, (5) a daily one-hour office hour to answer questions, guide and unblock issues, (6) the Dataton: a joint initiative with leadership for cataloging and improving assets. This movement was critical because it turned the catalog from a centralized initiative into a responsibility shared by the domains."
       }
      ],
      "res": "C4Data made governance and data discovery operational capabilities. The official OpenMetadata case reports 500 active users, 20 domains, 30+ owners, 300 glossary terms spread across more than 700 tables, 650+ documented tables and 500+ cataloged dashboards. The combination of owners, lineage, glossary, SSO and metadata automation created an enterprise reference published worldwide by OpenMetadata.",
      "metrics": [
       "4 professionals in the direct team",
       "500 active users · public source",
       "100+ trained professionals",
       "650+ tables · 500+ dashboards"
      ]
     }
    ],
    "arch": [
     [
      "Ecosystem",
      "BigQuery · Airflow · POS · e-commerce"
     ],
     [
      "Catalog",
      "OpenMetadata · SSO · CI/CD"
     ],
     [
      "Quality",
      "KPIs · SLA · alerts"
     ],
     [
      "Observability",
      "Datadog · GCP · corporate messaging channel"
     ],
     [
      "Adoption",
      "change management · data stewards"
     ]
    ],
    "stat3": [
     {
      "v": "90%+",
      "l": "assets with no owner before rollout · today: all cataloged with a defined owner and a data steward per domain"
     },
     {
      "v": "1st impl.",
      "l": "Carrefour Brazil taken to France as a reference for the global group · official case study published worldwide"
     },
     {
      "v": "500",
      "l": "active users registered in the official OpenMetadata case"
     }
    ],
    "layers": [
     {
      "icon": "🌐",
      "title": "Data Ecosystem",
      "desc": "A heterogeneous ecosystem: POS sales, inventory, customers, e-commerce, BigQuery, Airflow and the entire GCP infrastructure, cataloged and documented in Open Metadata with automatic lineage across every layer."
     },
     {
      "icon": "🏛️",
      "title": "Catalog · OpenMetadata",
      "desc": "Deployed with corporate SSO and CI/CD. The official case reports 500 active users, 20 domains, 30+ owners, 300 glossary terms, 650+ documented tables and 500+ dashboards."
     },
     {
      "icon": "✅",
      "title": "Data Quality · Badges",
      "desc": "KPIs per domain: completeness, freshness and uniqueness. Each asset received a 🥉 Bronze · 🥈 Silver · 🥇 Gold badge; reaching Gold required strict thresholds, a defined owner, complete lineage and correct classification. Automatic alerts on SLA deterioration. Quality became a visible metric, not an intention."
     },
     {
      "icon": "📊",
      "title": "Observability · Datadog",
      "desc": "A full stack built from scratch: Datadog plugged into GCP, monitoring Airflow, Cloud Functions and the whole infrastructure. corporate messaging channel integration for real-time critical alerts."
     },
     {
      "icon": "🎓",
      "title": "Adoption & Change Management",
      "desc": "Role-based training, data stewards defined per domain and recurring adoption support. The Dataton mobilized the area for joint cataloging and improvement of assets."
     }
    ],
    "codeNotes": [
     {
      "tab": "Catalog · Open Metadata",
      "label": "Asset and lineage setup in Open Metadata with corporate SSO (Python)",
      "note": "This script registers a table in the catalog: name, description, owner and classification. Then it declares where that data came from (lineage), so anyone in the catalog can trace the origin without asking anyone."
     },
     {
      "tab": "Quality · KPIs",
      "label": "Defining data-quality checks in the Open Metadata catalog (Python)",
      "note": "This is where quality becomes an automatic rule: it defines the minimum expected row count, the maximum allowed delay, and which columns cannot have duplicates or be empty. The catalog runs these tests on its own and shows the result as a quality score, with no manual checking needed."
     },
     {
      "tab": "Observability · Datadog",
      "label": "Pipeline monitor with a corporate messaging channel alert via Datadog + GCP (Python)",
      "note": "This monitor watches the pipeline execution time. If it takes longer than expected (a sign that something got stuck), the alert drops automatically into the responsible team corporate messaging channel, in under a minute, without waiting for the consumer to complain about late data."
     }
    ],
    "faq": [
     {
      "q": "How does Open Metadata capture lineage automatically?",
      "a": "OpenMetadata ingests metadata and can build lineage from connectors, query history and pipeline integrations. Coverage depends on the version, permissions and configured sources. Transformations absent from those records need additional instrumentation or registration; arbitrary Python scripts are not automatically traced."
     },
     {
      "q": "Why did the Brazilian implementation become a reference for the global group?",
      "a": "Brazil was the first country in the group to deploy Open Metadata at enterprise scale, with corporate SSO, CI/CD, 500+ cataloged assets, automatic lineage across every layer and effective adoption by both data and business teams. The French operation visited the case and took the model for replication across the global Carrefour group."
     },
     {
      "q": "How was catalog adoption achieved at scale?",
      "a": "Adoption was the result of structured change management, not just technology. Workshops were designed by profile: engineers learned to register lineage and owners, analysts learned to find and query data, and business stakeholders understood the impact of having visible quality. Each squad got a data steward responsible for its domain, and the teams themselves became data guardians."
     },
     {
      "q": "What is the official case study published by OpenMetadata?",
      "a": "The OpenMetadata team itself documented the Carrefour Brazil implementation as an enterprise reference; scale, technical maturity (SSO, CI/CD, automatic lineage) and adoption speed were the criteria. The case is published on the official OpenMetadata website and used as an example for other companies wanting to deploy governance at scale."
     }
    ]
   },
   "es": {
    "r": "Líder de Arquitectura, Gobernanza y Calidad de Datos",
    "per": "2024 a 2025",
    "d": "Líder del área de Arquitectura, Gobernanza y Calidad de Datos del Grupo Carrefour Brasil, con un equipo directo de 4 profesionales e interfaz internacional con Carrefour Francia. La implementación de OpenMetadata se convirtió en referencia global del grupo, con 500 usuarios activos, 20 dominios, 30+ responsables, 650+ tablas documentadas, 500+ dashboards y 100+ profesionales capacitados.",
    "heroChips": [
     "Google Cloud · Certificada",
     "Python",
     "Procesamiento de Datos por Lotes · Airflow",
     "Gobernanza y Catálogo · Open Metadata",
     "Grupo Carrefour Brasil · interfaz Francia"
    ],
    "app": {
     "sub": "CATÁLOGO Y GOBERNANZA",
     "h": "El catálogo que <em>toda la empresa consulta.</em>",
     "d": "Simulación de la rutina de gobernanza en Carrefour: salud de los pipelines monitoreados en Datadog, búsqueda en el catálogo Open Metadata y alertas de calidad por dominio. Simulación didáctica, sin datos corporativos."
    },
    "metrics": [
     {
      "v": "BRASIL · FRANCIA",
      "l": "liderazgo de arquitectura, gobernanza y calidad de datos"
     },
     {
      "v": "500",
      "l": "usuarios activos · caso oficial OpenMetadata"
     },
     {
      "v": "100+",
      "l": "profesionales capacitados · gestión del cambio"
     },
     {
      "v": "650+",
      "l": "tablas documentadas · 500+ dashboards"
     }
    ],
    "pub": {
     "t": "Publicación oficial de Open Metadata · caso de éxito global de la comunidad",
     "u": "https://open-metadata.org/case-study/carrefour-brazil"
    },
    "envNumbers": [
     {
      "v": "40+",
      "l": "proyectos de datos en GCP"
     },
     {
      "v": "33K+",
      "l": "tablas"
     },
     {
      "v": "500+",
      "l": "pipelines de datos"
     },
     {
      "v": "1PB+",
      "l": "de datos almacenados en el data warehouse"
     },
     {
      "v": "2MM+",
      "l": "consultas diarias"
     },
     {
      "v": "133PB+",
      "l": "procesados diariamente"
     },
     {
      "v": "600+",
      "l": "dashboards en Tableau"
     }
    ],
    "dashKpis": [
     "500",
     "650+"
    ],
    "dashLabels": [
     "usuarios activos · fuente pública",
     "tablas documentadas"
    ],
    "mockItems": [
     {
      "l": "Open Metadata · SSO corporativo + CI/CD",
      "v": "✓ activo"
     },
     {
      "l": "20 dominios · 30+ responsables",
      "v": "✓ estructurados"
     },
     {
      "l": "Insignias 🥉🥈🥇 · completeness · freshness · uniqueness",
      "v": "✓ activo"
     },
     {
      "l": "Datadog · Airflow + Cloud Functions monitoreados",
      "v": "✓ observado"
     },
     {
      "l": "500+ dashboards · 300 términos de glosario",
      "v": "✓ catalogados"
     }
    ],
    "demos": [
     {
      "kind": "app",
      "t": "Catálogo de Datos Carrefour · OpenMetadata",
      "d": "Catálogo interactivo: busca los 847 activos, mira la linaje automática, esquema con flags PII, puntajes de calidad (completeness · freshness · uniqueness) y feed de actividad en vivo.",
      "u": "carrefour-datacatalog-app.html",
      "btn": "Abrir catálogo interactivo →"
     },
     {
      "kind": "app",
      "t": "Observabilidad · Datadog + GCP",
      "d": "Dashboard en vivo: SLA de pipelines, DAGs de Airflow, Cloud Functions, heatmap de carga, feed de alertas e integración con canal corporativo de mensajes para incidentes críticos.",
      "u": "carrefour-datadog-app.html",
      "btn": "Abrir dashboard Datadog →"
     }
    ],
    "timelineMilestones": [
     "⚡ 3 meses de la prueba de concepto a producción",
     "🏆 12 meses hasta convertirse en referencia global del grupo"
    ],
    "timeline": [
     {
      "m": "Ene/24",
      "ico": "📅",
      "items": [
       "Prueba de concepto",
       "OpenMetadata se convierte en C4Data",
       "Definición y aprobación del proyecto C4Data",
       "Inicio de los roles de datos: Data Owners y Dominios"
      ]
     },
     {
      "m": "Abr/24",
      "ico": "🚀",
      "items": [
       "C4Data publicado en producción",
       "Workshop para el primer equipo de datos"
      ]
     },
     {
      "m": "Jul/24",
      "ico": "🏅",
      "items": [
       "Dataton",
       "Oleadas de release de C4Data",
       "Insignias de catalogación C4Data",
       "Implementación + workshops"
      ]
     },
     {
      "m": "Oct/24",
      "ico": "🔭",
      "items": [
       "Observabilidad",
       "Pruebas de calidad de datos",
       "Automatización de incidentes vía Jira",
       "Uso de la API para automatización de correo"
      ]
     },
     {
      "m": "Dic/24",
      "ico": "🌍",
      "items": [
       "Pruebas personalizadas de calidad de datos",
       "Data Maturity Assessment",
       "Presentación global para Carrefour",
       "Uso de la API para automatización de inclusión de tags"
      ]
     },
     {
      "m": "2025",
      "ico": "🌍",
      "items": [
       "De Brasil al mundo: modelo llevado a Francia como referencia global del grupo Carrefour",
       "Case study oficial publicado por OpenMetadata",
       "Expansión continua: nuevos dominios y squads en adopción"
      ]
     }
    ],
    "stints": [
     {
      "r": "Líder de Arquitectura, Gobernanza y Calidad de Datos",
      "per": "2024 a 2025",
      "prob": "Sin catálogo de datos formal, 90%+ de los activos sin owner definido, trazabilidad cero (imposible saber de dónde venía un dato o quién respondía por él). Localizar cualquier activo tomaba días. El onboarding de nuevos ingenieros duraba 30+ días solo para entender el ecosistema. Calidad invisible: los errores llegaban al consumidor sin ninguna alerta, SLA o monitoreo. Además del desafío tecnológico, era necesario desarrollar un equipo multidisciplinario con diferentes niveles de experiencia y movilizar ingeniería, arquitectura, producto y negocio en torno a un modelo común.",
      "decSections": [
       {
        "eye": "🏛️ Catálogo Centralizado con OpenMetadata",
        "body": "Internamente, el programa fue bautizado C4Data: C4 de Carrefour, Data de datos. OpenMetadata se implementó como punto único de descubrimiento y gobernanza para todo el ecosistema de datos de Carrefour Brasil. La solución se integró al SSO corporativo, eliminando credenciales separadas, y se insertó en el CI/CD, haciendo que configuraciones y cambios fueran reproducibles y auditables. Cada activo catalogado recibió descripción funcional y técnica, dominio de datos, esquema, clasificación, propietario y data steward, linaje e indicador de calidad, historial de actividades. Se definieron owners y data stewards por dominio, separando responsabilidades: Owner (decisión y uso del activo), Data Steward (documentación y calidad), Ingeniería (implementación y operación). El linaje pasó a representar el recorrido del dato entre sistemas de origen, transformaciones y capas de consumo, reduciendo el tiempo para investigar dependencias e impactos de días a minutos."
       },
       {
        "eye": "📈 Calidad de Datos como Indicador Medible",
        "body": "La calidad de datos se transformó en un indicador visible, seguido y comparable por dominio, combinando calidad técnica y gobernanza en un puntaje único por activo. Antes de C4Data, incluso activos con buena calidad técnica tenían un puntaje consolidado bajo: la ausencia de gobernanza (sin owner, sin linaje, sin reglas configuradas) arrastraba el resultado hacia abajo independientemente de las dimensiones técnicas. El mayor salto ocurrió después del Dataton: iniciativa con la dirección que movilizó a los equipos para regularizar los seis requisitos de gobernanza a escala, mientras completeness, freshness y uniqueness pasaron a ser tratados por los dominios. También se estructuró un modelo de certificación por insignias (Bronce, Plata y Oro) para que los equipos tuvieran una referencia clara de madurez por activo. La calidad dejó de ser intención y pasó a integrar el ciclo operativo.",
        "calc": "<div class=\"calc-title\">Ejemplo didáctico de composición del puntaje</div>\n<div class=\"calc-formula\">Consolidado = (calidad técnica × 50%) + (gobernanza × 50%)</div>\n<div class=\"calc-row\" style=\"margin-bottom:4px\">\n  <div class=\"calc-col\">\n    <div class=\"calc-col-title\">1 · Calidad técnica</div>\n    <div style=\"font-size:11px;color:#555;margin-bottom:6px\">Promedio de las tres dimensiones:</div>\n    <div class=\"calc-formula\" style=\"font-size:10.5px;margin:0 0 8px\">(completeness + freshness + uniqueness) ÷ 3</div>\n    <div class=\"calc-item\"><b>Completeness</b><span style=\"text-align:right\">campos obligatorios completados</span></div>\n    <div class=\"calc-item\"><b>Freshness</b><span style=\"text-align:right\">dato actualizado en el plazo esperado</span></div>\n    <div class=\"calc-item\"><b>Uniqueness</b><span style=\"text-align:right\">sin duplicidades indebidas</span></div>\n  </div>\n  <div class=\"calc-col\">\n    <div class=\"calc-col-title\">2 · Gobernanza</div>\n    <div style=\"font-size:11px;color:#555;margin-bottom:4px\">Requisitos cumplidos ÷ 6 × 100</div>\n    <div class=\"calc-item\"><b>①</b><span>owner definido</span></div>\n    <div class=\"calc-item\"><b>②</b><span>data steward definido</span></div>\n    <div class=\"calc-item\"><b>③</b><span>descripción completada</span></div>\n    <div class=\"calc-item\"><b>④</b><span>linaje disponible</span></div>\n    <div class=\"calc-item\"><b>⑤</b><span>clasificación aplicada</span></div>\n    <div class=\"calc-item\"><b>⑥</b><span>reglas de calidad configuradas</span></div>\n  </div>\n</div>\n<div style=\"font-size:10px;color:#aaa;margin-bottom:10px;padding-bottom:10px;border-bottom:1px solid #e8e4dc\">0 requisitos = 0% &nbsp;·&nbsp; 3 requisitos = 50% &nbsp;·&nbsp; 6 requisitos = 100%</div>\n<div class=\"calc-row\">\n  <div class=\"calc-col\">\n    <div class=\"calc-col-title\">⬛ Antes · vendas_diarias_curated</div>\n    <div class=\"calc-item\"><span>Completeness</span><b>45%</b></div>\n    <div class=\"calc-item\"><span>Freshness</span><b>60%</b></div>\n    <div class=\"calc-item\"><span>Uniqueness</span><b>80%</b></div>\n    <div class=\"calc-item\"><span>Técnica</span><b>(45+60+80)÷3 = 61,7%</b></div>\n    <div class=\"calc-item\"><span>Gobernanza</span><b>0÷6 = 0%</b></div>\n    <div class=\"calc-result\"><span class=\"calc-result-label\">Consolidado</span><span class=\"calc-result-val\">30,85%</span></div>\n  </div>\n  <div class=\"calc-col\">\n    <div class=\"calc-col-title\">✅ Después · vendas_diarias_curated</div>\n    <div class=\"calc-item\"><span>Completeness</span><b>98%</b></div>\n    <div class=\"calc-item\"><span>Freshness</span><b>97%</b></div>\n    <div class=\"calc-item\"><span>Uniqueness</span><b>99%</b></div>\n    <div class=\"calc-item\"><span>Técnica</span><b>(98+97+99)÷3 = 98%</b></div>\n    <div class=\"calc-item\"><span>Gobernanza</span><b>6÷6 = 100%</b></div>\n    <div class=\"calc-result\"><span class=\"calc-result-label\">Consolidado</span><span class=\"calc-result-val\">99%</span></div>\n  </div>\n</div>\n<div class=\"calc-delta\">Evolución de este activo: 99% − 30,85% = <strong>+68,15 p.p.</strong></div>\n<div class=\"calc-delta\" style=\"margin-top:6px\">Escenario didáctico: la evolución depende del baseline, las reglas y el alcance de cada dominio.</div>\n<div style=\"font-size:10.5px;color:#aaa;margin-top:8px;border-top:1px solid #e8e4dc;padding-top:8px\">vendas_diarias_curated partía de una situación mejor que el promedio. Activos con gobernanza 0% y técnica más baja mostraron una evolución proporcionalmente mayor.</div>"
       },
       {
        "eye": "📊 Observabilidad en GCP con Datadog",
        "body": "El frente de observabilidad se construyó, integrado al entorno Google Cloud, para brindar visibilidad operativa continua. Datadog se utilizó para monitorear: DAGs de Apache Airflow, Cloud Functions, componentes de infraestructura en GCP, ejecución de pipelines, fallas y recuperación, disponibilidad, comportamiento operativo y cumplimiento de SLAs por dominio. Antes de esta estructura, un problema solo podía identificarse después de una reclamación del consumidor. Con métricas, dashboards y alertas, los equipos pasaron a detectar fallas más temprano y dirigir incidentes al dominio responsable. Las alertas críticas se conectaron al canal corporativo de comunicación utilizado por los equipos, reduciendo la dependencia del seguimiento manual. Calidad y Observabilidad actuaban de forma complementaria: Calidad (problemas en el contenido y estado del dato), Observabilidad (fallas de ejecución, infraestructura, disponibilidad y comportamiento operativo)."
       },
       {
        "eye": "👥 Liderazgo Técnico de Equipo Multidisciplinario",
        "body": "El liderazgo técnico se ejerció sobre un equipo formado por cuatro personas: tres profesionales senior especialistas en gobernanza de datos y un pasante. Las responsabilidades incluyeron: (1) coordinar los frentes de catálogo, calidad, observabilidad y adopción, (2) mantener alineación entre implementación técnica y objetivos del programa, (3) actuar como referencia entre ingeniería, producto y negocio, (4) traducir conceptos como catálogo, linaje, ownership y calidad en resultados comprensibles para los stakeholders, (5) organizar prioridades, definir estándares y remover bloqueos, (6) sostener decisiones técnicas, (7) crear una forma consistente de trabajo entre profesionales con diferentes niveles de experiencia. La actuación también incluyó liderar el grupo de mujeres en tecnología de Carrefour, contribuyendo a una comunidad de intercambio y fortalecimiento profesional."
       },
       {
        "eye": "🎓 Gestión del Cambio y Adopción a Escala",
        "body": "La implementación técnica solo tendría valor si las personas realmente utilizaban el catálogo y asumían responsabilidad por los datos. Se capacitaron más de 100 profesionales: ingenieros de datos, analistas, profesionales de producto, data stewards y stakeholders de negocio. La estrategia incluyó: (1) workshops de gobernanza estructurados, (2) capacitación técnica en OpenMetadata, (3) onboarding por squad con materiales reutilizables, (4) formación de data stewards por dominio, (5) turno diario de una hora para responder dudas, orientar y desbloquear problemas, (6) Dataton: iniciativa conjunta con la dirección para catalogación y mejora de activos. Este movimiento fue crítico porque transformó el catálogo de una iniciativa centralizada en una responsabilidad compartida por los dominios."
       }
      ],
      "res": "C4Data convirtió la gobernanza y el descubrimiento de datos en capacidades operativas. El caso oficial de OpenMetadata registra 500 usuarios activos, 20 dominios, 30+ responsables, 300 términos de glosario distribuidos en más de 700 tablas, 650+ tablas documentadas y 500+ dashboards catalogados. La combinación de owners, linaje, glosario, SSO y automatización de metadatos creó una referencia empresarial publicada mundialmente por OpenMetadata.",
      "metrics": [
       "4 profesionales en el equipo directo",
       "500 usuarios activos · fuente pública",
       "100+ profesionales capacitados",
       "650+ tablas · 500+ dashboards"
      ]
     }
    ],
    "arch": [
     [
      "Ecosistema",
      "BigQuery · Airflow · POS · e-commerce"
     ],
     [
      "Catálogo",
      "OpenMetadata · SSO · CI/CD"
     ],
     [
      "Calidad",
      "KPIs · SLA · alertas"
     ],
     [
      "Observabilidad",
      "Datadog · GCP · canal corporativo de mensajes"
     ],
     [
      "Adopción",
      "gestión del cambio · data stewards"
     ]
    ],
    "stat3": [
     {
      "v": "90%+",
      "l": "activos sin owner antes de la implementación · hoy: todos catalogados con owner definido y data steward por dominio"
     },
     {
      "v": "1ª impl.",
      "l": "Carrefour Brasil llevada a Francia como referencia para el grupo global · case study oficial publicado mundialmente"
     },
     {
      "v": "500",
      "l": "usuarios activos registrados en el caso oficial de OpenMetadata"
     }
    ],
    "layers": [
     {
      "icon": "🌐",
      "title": "Ecosistema de Datos",
      "desc": "Ecosistema heterogéneo: ventas POS, inventario, clientes, e-commerce, BigQuery, Airflow y toda la infraestructura GCP, catalogados y documentados en Open Metadata con linaje automático entre todas las capas."
     },
     {
      "icon": "🏛️",
      "title": "Catálogo · OpenMetadata",
      "desc": "Implementado con SSO corporativo y CI/CD. El caso oficial registra 500 usuarios activos, 20 dominios, 30+ responsables, 300 términos de glosario, 650+ tablas documentadas y 500+ dashboards."
     },
     {
      "icon": "✅",
      "title": "Calidad de Datos · Insignias",
      "desc": "KPIs por dominio: completeness, freshness y uniqueness. Cada activo recibía una insignia 🥉 Bronce · 🥈 Plata · 🥇 Oro; llegar al Oro exigía umbrales rigurosos, owner definido, linaje completo y clasificación correcta. Alertas automáticas por deterioro de SLA. La calidad se convirtió en métrica visible, no en intención."
     },
     {
      "icon": "📊",
      "title": "Observabilidad · Datadog",
      "desc": "Stack completo construido desde cero: Datadog conectado a GCP monitoreando Airflow, Cloud Functions y toda la infraestructura. Integración con canal corporativo de mensajes para alertas críticas en tiempo real."
     },
     {
      "icon": "🎓",
      "title": "Adopción y Gestión del Cambio",
      "desc": "Capacitación por perfil, data stewards definidos por dominio y apoyo recurrente a la adopción. El Dataton movilizó al área para catalogación y mejora conjunta de los activos."
     }
    ],
    "codeNotes": [
     {
      "tab": "Catálogo · Open Metadata",
      "label": "Configuración de activo y linaje en Open Metadata con SSO corporativo (Python)",
      "note": "Este script registra una tabla en el catálogo: nombre, descripción, dueño y clasificación. Luego, declara de dónde vino ese dato (linaje), para que cualquier persona en el catálogo pueda rastrear el origen sin preguntarle a nadie."
     },
     {
      "tab": "Calidad · KPIs",
      "label": "Definición de checks de calidad de datos en el catálogo Open Metadata (Python)",
      "note": "Aquí es donde la calidad se convierte en regla automática: se define el mínimo de filas esperado, el plazo máximo de retraso y qué columnas no pueden tener duplicidad ni quedar vacías. El catálogo ejecuta estas pruebas solo y muestra el resultado como puntaje de calidad, sin depender de que alguien lo revise manualmente."
     },
     {
      "tab": "Observabilidad · Datadog",
      "label": "Monitor de pipeline con alerta en canal corporativo de mensajes vía Datadog + GCP (Python)",
      "note": "Este monitor vigila el tiempo de ejecución del pipeline. Si tarda más de lo esperado (señal de que algo se atascó), la alerta cae automáticamente en el canal corporativo de mensajes del equipo responsable, en menos de un minuto, sin esperar a que el consumidor se queje del dato retrasado."
     }
    ],
    "faq": [
     {
      "q": "¿Cómo captura Open Metadata el linaje automáticamente?",
      "a": "OpenMetadata ingiere metadatos y puede construir linaje mediante conectores, historial de consultas e integraciones con pipelines. La cobertura depende de la versión, los permisos y las fuentes configuradas. Las transformaciones ausentes de esos registros requieren instrumentación o registro adicional; no se rastrea automáticamente cualquier script Python."
     },
     {
      "q": "¿Por qué la implementación brasileña se convirtió en referencia para el grupo global?",
      "a": "Brasil fue el primer país del grupo en implementar Open Metadata a escala empresarial, con SSO corporativo, CI/CD, 500+ activos catalogados, linaje automático entre todas las capas y adopción efectiva por los equipos de datos y de negocio. La operación francesa visitó el caso y llevó el modelo para replicarlo en el grupo global Carrefour."
     },
     {
      "q": "¿Cómo se logró la adopción del catálogo a escala?",
      "a": "La adopción fue resultado de una gestión del cambio estructurada, no solo de tecnología. Los workshops se diseñaron por perfil: los ingenieros aprendieron a registrar linaje y owners, los analistas a localizar y consultar datos, y los stakeholders de negocio comprendieron el impacto de tener calidad visible. Cada squad pasó a contar con un data steward responsable de su dominio, y los propios equipos se convirtieron en guardianes de los datos."
     },
     {
      "q": "¿Qué es el case study oficial publicado por OpenMetadata?",
      "a": "El propio equipo de OpenMetadata documentó la implementación de Carrefour Brasil como referencia empresarial; escala, madurez técnica (SSO, CI/CD, linaje automático) y velocidad de adopción fueron los criterios. El caso está publicado en el sitio oficial de OpenMetadata y se usa como ejemplo para otras empresas que quieren implementar gobernanza a escala."
     }
    ]
   },
   "ja": {
    "r": "データアーキテクチャ・ガバナンス・品質リード",
    "per": "2024年〜2025年",
    "d": "Carrefour Group Brasilのデータアーキテクチャ、ガバナンス、品質領域をリード。直属チーム4名に加え、Carrefour Franceとの国際連携を担当。OpenMetadataの導入はグループのグローバルリファレンスとなり、アクティブユーザー500人、20ドメイン、責任者30名以上、文書化済みテーブル650以上、ダッシュボード500以上、研修受講者100名以上を達成。",
    "heroChips": [
     "Google Cloud · 認定資格",
     "Python",
     "バッチデータ処理 · Airflow",
     "ガバナンス＆カタログ · Open Metadata",
     "Carrefour Brasil · フランス連携"
    ],
    "app": {
     "sub": "カタログ＆ガバナンス",
     "h": "会社全体が<em>頼るカタログ。</em>",
     "d": "Carrefourにおけるガバナンス業務のシミュレーション: Datadogで監視されるパイプラインの健全性、Open Metadataカタログでの検索、ドメイン別の品質アラート。企業データを使わない教育目的のシミュレーションです。"
    },
    "metrics": [
     {
      "v": "ブラジル · フランス",
      "l": "データアーキテクチャ、ガバナンス、品質のリーダー"
     },
     {
      "v": "500",
      "l": "アクティブユーザー · OpenMetadata公式事例"
     },
     {
      "v": "100+",
      "l": "研修受講者 · チェンジマネジメント"
     },
     {
      "v": "650+",
      "l": "文書化済みテーブル · ダッシュボード500以上"
     }
    ],
    "pub": {
     "t": "Open Metadata公式掲載 · コミュニティのグローバル成功事例",
     "u": "https://open-metadata.org/case-study/carrefour-brazil"
    },
    "envNumbers": [
     {
      "v": "40+",
      "l": "GCP上のデータプロジェクト"
     },
     {
      "v": "33K+",
      "l": "テーブル数"
     },
     {
      "v": "500+",
      "l": "データパイプライン"
     },
     {
      "v": "1PB+",
      "l": "データウェアハウスに保存されたデータ"
     },
     {
      "v": "2MM+",
      "l": "日次クエリ数"
     },
     {
      "v": "133PB+",
      "l": "日次処理量"
     },
     {
      "v": "600+",
      "l": "Tableauダッシュボード"
     }
    ],
    "dashKpis": [
     "500",
     "650+"
    ],
    "dashLabels": [
     "アクティブユーザー · 公開情報",
     "文書化済みテーブル"
    ],
    "mockItems": [
     {
      "l": "Open Metadata · 企業SSO + CI/CD",
      "v": "✓ 稼働中"
     },
     {
      "l": "20ドメイン · 責任者30名以上",
      "v": "✓ 体制構築済み"
     },
     {
      "l": "🥉🥈🥇バッジ · completeness · freshness · uniqueness",
      "v": "✓ 稼働中"
     },
     {
      "l": "Datadog · Airflow + Cloud Functionsを監視",
      "v": "✓ 監視中"
     },
     {
      "l": "ダッシュボード500以上 · 用語集300語",
      "v": "✓ カタログ化済み"
     }
    ],
    "demos": [
     {
      "kind": "app",
      "t": "Carrefourデータカタログ · OpenMetadata",
      "d": "インタラクティブカタログ: 847件の資産を検索、自動リネージ、PIIフラグ付きスキーマ、品質スコア（completeness · freshness · uniqueness）、ライブアクティビティフィードを確認できます。",
      "u": "carrefour-datacatalog-app.html",
      "btn": "インタラクティブカタログを開く →"
     },
     {
      "kind": "app",
      "t": "可観測性 · Datadog + GCP",
      "d": "ライブダッシュボード: パイプラインSLA、AirflowのDAG、Cloud Functions、負荷ヒートマップ、アラートフィード、重大インシデント向け社内メッセージ通知先連携。",
      "u": "carrefour-datadog-app.html",
      "btn": "Datadogダッシュボードを開く →"
     }
    ],
    "timelineMilestones": [
     "⚡ 概念実証から本番稼働まで3か月",
     "🏆 グループのグローバル基準となるまで12か月"
    ],
    "timeline": [
     {
      "m": "2024年1月",
      "ico": "📅",
      "items": [
       "概念実証",
       "OpenMetadataがC4Dataに",
       "C4Dataプロジェクトの定義と承認",
       "データ役割の開始: Data OwnersとDomains"
      ]
     },
     {
      "m": "2024年4月",
      "ico": "🚀",
      "items": [
       "C4Dataを本番公開",
       "最初のデータチーム向けワークショップ"
      ]
     },
     {
      "m": "2024年7月",
      "ico": "🏅",
      "items": [
       "Dataton",
       "C4Dataのリリースウェーブ",
       "C4Dataカタログ化バッジ",
       "導入＋ワークショップ"
      ]
     },
     {
      "m": "2024年10月",
      "ico": "🔭",
      "items": [
       "可観測性",
       "データ品質テスト",
       "Jira経由のインシデント自動化",
       "タグ付け自動化のAPI活用"
      ]
     },
     {
      "m": "2024年12月",
      "ico": "🌍",
      "items": [
       "カスタムデータ品質テスト",
       "データ成熟度評価",
       "Carrefour向けグローバル発表",
       "タグ付け自動化のAPI活用"
      ]
     },
     {
      "m": "2025年",
      "ico": "🌍",
      "items": [
       "ブラジルから世界へ: このモデルはCarrefourグループのグローバル基準としてフランスに導入",
       "OpenMetadataによる公式ケーススタディの公開",
       "継続的な拡大: 新規ドメイン・スクワッドでの導入"
      ]
     }
    ],
    "stints": [
     {
      "r": "データアーキテクチャ・ガバナンス・品質リード",
      "per": "2024年〜2025年",
      "prob": "正式なデータカタログがなく、資産の90%以上でオーナーが未定義、トレーサビリティはゼロ（データの出所や責任者を知ることが不可能）。どの資産を探すにも数日かかり、新規エンジニアのオンボーディングはエコシステムを理解するだけで30日以上を要していました。品質は見えない状態で、エラーはアラートもSLAも監視もないまま利用者に届いていました。技術的な課題に加え、経験レベルの異なる多様なチームを育成し、エンジニアリング・アーキテクチャ・プロダクト・事業を共通のモデルに向けて動員する必要がありました。",
      "decSections": [
       {
        "eye": "🏛️ OpenMetadataによる一元化カタログ",
        "body": "社内ではこのプログラムをC4Data（CarrefourのC4、DataはData）と命名しました。OpenMetadataは、Carrefourブラジルのデータエコシステム全体における唯一の発見・ガバナンス拠点として導入されました。このソリューションは企業SSOと統合され個別の認証情報を排除し、CI/CDに組み込まれて設定と変更を再現可能かつ監査可能にしました。カタログ化された各資産には、機能的・技術的な説明、データドメイン、スキーマ、分類、オーナーとデータスチュワード、リネージと品質指標、活動履歴が付与されました。ドメインごとにオーナーとデータスチュワードを定義し、責任を分離しました: オーナー（資産の意思決定と利用）、データスチュワード（文書化と品質）、エンジニアリング（実装と運用）。リネージは、ソースシステム、変換、消費層間のデータの経路を表すようになり、依存関係と影響の調査時間を数日から数分に短縮しました。"
       },
       {
        "eye": "📈 測定可能な指標としてのデータ品質",
        "body": "データ品質は、ドメインごとに可視化・追跡・比較可能な指標へと変わり、技術品質とガバナンスを1つのスコアに統合しました。C4Data導入以前は、技術的品質が良い資産でも統合スコアが低いケースがありました。ガバナンスの欠如（オーナーなし、リネージなし、ルール未設定）が技術的側面に関係なくスコアを引き下げていたためです。最大の飛躍はDatatonの後に起きました。経営陣とともに各チームを動員し、ガバナンスの6要件を大規模に整備する取り組みで、同時にcompleteness、freshness、uniquenessを各ドメインが扱うようになりました。また、チームが資産ごとの成熟度を明確に把握できるよう、バッジ認証モデル（ブロンズ・シルバー・ゴールド）も整備しました。品質は意図ではなく、業務サイクルの一部になりました。",
        "calc": "<div class=\"calc-title\">スコア構成の教育目的の例</div>\n<div class=\"calc-formula\">統合スコア = (技術品質 × 50%) + (ガバナンス × 50%)</div>\n<div class=\"calc-row\" style=\"margin-bottom:4px\">\n  <div class=\"calc-col\">\n    <div class=\"calc-col-title\">1 · 技術品質</div>\n    <div style=\"font-size:11px;color:#555;margin-bottom:6px\">3つの指標の平均:</div>\n    <div class=\"calc-formula\" style=\"font-size:10.5px;margin:0 0 8px\">(completeness + freshness + uniqueness) ÷ 3</div>\n    <div class=\"calc-item\"><b>Completeness</b><span style=\"text-align:right\">必須項目の入力状況</span></div>\n    <div class=\"calc-item\"><b>Freshness</b><span style=\"text-align:right\">想定期間内のデータ更新</span></div>\n    <div class=\"calc-item\"><b>Uniqueness</b><span style=\"text-align:right\">不適切な重複がないこと</span></div>\n  </div>\n  <div class=\"calc-col\">\n    <div class=\"calc-col-title\">2 · ガバナンス</div>\n    <div style=\"font-size:11px;color:#555;margin-bottom:4px\">満たした要件数 ÷ 6 × 100</div>\n    <div class=\"calc-item\"><b>①</b><span>オーナー定義済み</span></div>\n    <div class=\"calc-item\"><b>②</b><span>データスチュワード定義済み</span></div>\n    <div class=\"calc-item\"><b>③</b><span>説明入力済み</span></div>\n    <div class=\"calc-item\"><b>④</b><span>リネージ利用可能</span></div>\n    <div class=\"calc-item\"><b>⑤</b><span>分類適用済み</span></div>\n    <div class=\"calc-item\"><b>⑥</b><span>品質ルール設定済み</span></div>\n  </div>\n</div>\n<div style=\"font-size:10px;color:#aaa;margin-bottom:10px;padding-bottom:10px;border-bottom:1px solid #e8e4dc\">要件0 = 0% &nbsp;·&nbsp; 要件3 = 50% &nbsp;·&nbsp; 要件6 = 100%</div>\n<div class=\"calc-row\">\n  <div class=\"calc-col\">\n    <div class=\"calc-col-title\">⬛ 導入前 · vendas_diarias_curated</div>\n    <div class=\"calc-item\"><span>Completeness</span><b>45%</b></div>\n    <div class=\"calc-item\"><span>Freshness</span><b>60%</b></div>\n    <div class=\"calc-item\"><span>Uniqueness</span><b>80%</b></div>\n    <div class=\"calc-item\"><span>技術</span><b>(45+60+80)÷3 = 61.7%</b></div>\n    <div class=\"calc-item\"><span>ガバナンス</span><b>0÷6 = 0%</b></div>\n    <div class=\"calc-result\"><span class=\"calc-result-label\">統合スコア</span><span class=\"calc-result-val\">30.85%</span></div>\n  </div>\n  <div class=\"calc-col\">\n    <div class=\"calc-col-title\">✅ 導入後 · vendas_diarias_curated</div>\n    <div class=\"calc-item\"><span>Completeness</span><b>98%</b></div>\n    <div class=\"calc-item\"><span>Freshness</span><b>97%</b></div>\n    <div class=\"calc-item\"><span>Uniqueness</span><b>99%</b></div>\n    <div class=\"calc-item\"><span>技術</span><b>(98+97+99)÷3 = 98%</b></div>\n    <div class=\"calc-item\"><span>ガバナンス</span><b>6÷6 = 100%</b></div>\n    <div class=\"calc-result\"><span class=\"calc-result-label\">統合スコア</span><span class=\"calc-result-val\">99%</span></div>\n  </div>\n</div>\n<div class=\"calc-delta\">この資産の変化: 99% − 30.85% = <strong>+68.15ポイント</strong></div>\n<div class=\"calc-delta\" style=\"margin-top:6px\">教育目的のシナリオ: 変化幅はベースライン、ルール、各ドメインの範囲により異なります。</div>\n<div style=\"font-size:10.5px;color:#aaa;margin-top:8px;border-top:1px solid #e8e4dc;padding-top:8px\">vendas_diarias_curatedは平均より良い状態からスタートしました。ガバナンス0%かつ技術スコアが低い資産ほど、相対的に大きな改善が見られました。</div>"
       },
       {
        "eye": "📊 DatadogによるGCP上の可観測性",
        "body": "可観測性の取り組みはGoogle Cloud環境と統合して構築され、継続的な運用可視性を提供しました。Datadogは以下を追跡するために使用されました: Apache AirflowのDAG、Cloud Functions、GCPインフラのコンポーネント、パイプラインの実行、障害と復旧、可用性、運用挙動、ドメインごとのSLA遵守。この体制がない以前は、問題は利用者からの苦情の後にしか特定できませんでした。指標、ダッシュボード、アラートにより、チームはより早く障害を検知し、責任ドメインへインシデントを振り分けられるようになりました。重大アラートはチームが使用する企業のコミュニケーションチャネルに接続され、手動追跡への依存が減りました。品質と可観測性は補完的に機能しました: 品質（データの内容と状態の問題）、可観測性（実行障害、インフラ、可用性、運用挙動）。"
       },
       {
        "eye": "👥 多職種チームの技術リーダーシップ",
        "body": "技術リーダーシップは、シニアのデータガバナンス専門家3名とインターン1名からなる4名体制のチームに対して発揮されました。責務は次の通りです: (1) カタログ、品質、可観測性、導入の各領域を調整、(2) 技術実装とプログラム目標の整合を維持、(3) エンジニアリング・プロダクト・事業間のリファレンスとして機能、(4) カタログ、リネージ、オーナーシップ、品質といった概念をステークホルダーが理解できる成果に翻訳、(5) 優先順位の整理、標準の定義、ブロッカーの解消、(6) 技術的判断の裏付け、(7) 経験レベルの異なる専門家間で一貫した働き方を構築。この役割にはCarrefourの女性技術者グループの牽引も含まれ、交流と専門的成長のコミュニティに貢献しました。"
       },
       {
        "eye": "🎓 チェンジマネジメントと大規模な導入",
        "body": "技術導入は、実際に人々がカタログを利用しデータへの責任を持つことで初めて価値を持ちます。データエンジニア、アナリスト、プロダクト担当者、データスチュワード、事業側のステークホルダーを含む100名以上を育成しました。戦略には次が含まれます: (1) 体系化されたガバナンスワークショップ、(2) OpenMetadataの技術研修、(3) 再利用可能な資料によるスクワッド単位のオンボーディング、(4) ドメインごとのデータスチュワード育成、(5) 質問対応・案内・課題解消のための毎日1時間のオフィスアワー、(6) Dataton: 経営陣との合同での資産カタログ化・改善の取り組み。この動きは、カタログを一元的な取り組みから各ドメインが共有する責任へと転換させた重要な要素でした。"
       }
      ],
      "res": "C4Dataはガバナンスとデータ発見を運用能力へと変えました。OpenMetadataの公式事例では、アクティブユーザー500人、20ドメイン、責任者30名以上、700以上のテーブルに広がる用語集300語、文書化済みテーブル650以上、カタログ化済みダッシュボード500以上が報告されています。オーナー、リネージ、用語集、SSO、メタデータ自動化の組み合わせが、OpenMetadataによって世界中に公開されるエンタープライズの基準を生み出しました。",
      "metrics": [
       "直属チーム4名",
       "アクティブユーザー500人 · 公開情報",
       "研修受講者100名以上",
       "テーブル650以上 · ダッシュボード500以上"
      ]
     }
    ],
    "arch": [
     [
      "エコシステム",
      "BigQuery · Airflow · POS · Eコマース"
     ],
     [
      "カタログ",
      "OpenMetadata · SSO · CI/CD"
     ],
     [
      "品質",
      "KPI · SLA · アラート"
     ],
     [
      "可観測性",
      "Datadog · GCP · 社内メッセージ通知先"
     ],
     [
      "導入",
      "チェンジマネジメント · データスチュワード"
     ]
    ],
    "stat3": [
     {
      "v": "90%+",
      "l": "導入前にオーナー未定義だった資産 · 現在: 全資産にオーナーとドメイン別データスチュワードを定義"
     },
     {
      "v": "導入第1号",
      "l": "Carrefourブラジルがグローバルグループのリファレンスとしてフランスへ展開 · 公式ケーススタディを世界公開"
     },
     {
      "v": "500",
      "l": "OpenMetadata公式事例に登録されたアクティブユーザー数"
     }
    ],
    "layers": [
     {
      "icon": "🌐",
      "title": "データエコシステム",
      "desc": "POS販売、在庫、顧客、Eコマース、BigQuery、Airflow、GCPインフラ全体からなる多様なエコシステム。すべての層で自動リネージを備えたOpen Metadataにカタログ化・文書化されています。"
     },
     {
      "icon": "🏛️",
      "title": "カタログ · OpenMetadata",
      "desc": "企業SSOとCI/CDを備えて導入。公式事例ではアクティブユーザー500人、20ドメイン、責任者30名以上、用語集300語、文書化済みテーブル650以上、ダッシュボード500以上が報告されています。"
     },
     {
      "icon": "✅",
      "title": "データ品質 · バッジ",
      "desc": "ドメイン別のKPI: completeness、freshness、uniqueness。各資産は🥉ブロンズ・🥈シルバー・🥇ゴールドのバッジを受け取り、ゴールド到達には厳格な閾値、オーナー定義、完全なリネージ、正しい分類が必要でした。SLA劣化時の自動アラート。品質は意図ではなく可視化された指標になりました。"
     },
     {
      "icon": "📊",
      "title": "可観測性 · Datadog",
      "desc": "ゼロから構築されたフルスタック: GCPに接続されたDatadogがAirflow、Cloud Functions、インフラ全体を監視。重大アラートのリアルタイム通知に社内メッセージ通知先を連携。"
     },
     {
      "icon": "🎓",
      "title": "導入とチェンジマネジメント",
      "desc": "プロファイル別の研修、ドメインごとに定義されたデータスチュワード、継続的な導入支援。Datatonは資産のカタログ化と改善に向けて部門全体を動員しました。"
     }
    ],
    "codeNotes": [
     {
      "tab": "カタログ · Open Metadata",
      "label": "企業SSOを用いたOpen Metadataでの資産・リネージ設定（Python）",
      "note": "このスクリプトはカタログにテーブルを登録します: 名前、説明、オーナー、分類。続けて、そのデータがどこから来たか（リネージ）を宣言し、カタログの利用者が誰にも聞かずに出所を追跡できるようにします。"
     },
     {
      "tab": "品質 · KPI",
      "label": "Open Metadataカタログでのデータ品質チェック定義（Python）",
      "note": "ここで品質が自動ルールに変わります: 想定される最小行数、許容される最大遅延、重複や空欄を許さない列を定義します。カタログはこれらのテストを自動実行し、結果を品質スコアとして表示し、手動確認に頼りません。"
     },
     {
      "tab": "可観測性 · Datadog",
      "label": "Datadog + GCP経由で社内メッセージ通知先にアラートするパイプライン監視（Python）",
      "note": "このモニターはパイプラインの実行時間を監視します。想定より時間がかかる場合（何かが詰まっているサイン）、1分以内に責任チームの社内メッセージ通知先へ自動でアラートが届き、利用者がデータの遅延を苦情として伝えるのを待たずに済みます。"
     }
    ],
    "faq": [
     {
      "q": "Open Metadataはどのようにリネージを自動的に取得しますか?",
      "a": "OpenMetadataはコネクター、クエリ履歴、パイプライン連携からメタデータとリネージを取得できます。対象範囲はバージョン、権限、設定したソースによって異なります。記録に含まれない変換は追加の計測や登録が必要で、任意のPythonスクリプトを自動追跡するわけではありません。"
     },
     {
      "q": "なぜブラジルでの導入がグローバルグループの基準になったのですか?",
      "a": "ブラジルはグループ内で初めてエンタープライズ規模でOpen Metadataを導入した国であり、企業SSO、CI/CD、カタログ化された500以上の資産、全層にわたる自動リネージ、データ・事業双方のチームによる実効的な導入を実現しました。フランスの拠点はこの事例を視察し、Carrefourグローバルグループへの展開モデルとして採用しました。"
     },
     {
      "q": "カタログの大規模な導入はどのように達成されましたか?",
      "a": "導入は技術だけでなく、体系化されたチェンジマネジメントの結果でした。ワークショップはプロファイル別に設計され、エンジニアはリネージとオーナーの登録方法を、アナリストはデータの検索・照会方法を学び、事業側のステークホルダーは可視化された品質がもたらす影響を理解しました。各スクワッドには担当ドメインを持つデータスチュワードが配置され、チーム自体がデータの守護者となりました。"
     },
     {
      "q": "OpenMetadataが公開した公式ケーススタディとは何ですか?",
      "a": "OpenMetadataチーム自身が、Carrefourブラジルの導入をエンタープライズのリファレンスとして文書化しました。規模、技術的成熟度（SSO、CI/CD、自動リネージ）、導入速度が評価基準でした。この事例はOpenMetadata公式サイトに掲載され、ガバナンスを大規模に導入したい他企業の参考例として使われています。"
     }
    ]
   }
  },
  "app": {
   "sub": "CATÁLOGO & GOVERNANÇA",
   "h": "O catálogo que a empresa inteira <em>consulta.</em>",
   "d": "Simulação da rotina de governança no Carrefour: saúde dos pipelines monitorados no Datadog, busca no catálogo Open Metadata e alertas de qualidade por domínio. Simulação didática, sem dados corporativos."
  },
  "heroGrad": "linear-gradient(135deg,#001530,#0052a5)",
  "heroImg": "img/jen-carrefour-chibi.webp",
  "metrics": [
   {
    "v": "500 USUÁRIOS · 650+ TABELAS",
    "l": "case global OpenMetadata"
   },
   {
    "v": "100+",
    "l": "profissionais capacitados"
   },
   {
    "v": "20",
    "l": "domínios de dados · 30+ responsáveis"
   },
   {
    "v": "4",
    "l": "profissionais na equipe direta"
   }
  ],
  "pub": {
   "t": "Publicação oficial do Open Metadata · case de sucesso global da comunidade",
   "u": "https://open-metadata.org/case-study/carrefour-brazil"
  },
  "envNumbers": [
   {
    "v": "40+",
    "l": "projetos de dados na GCP"
   },
   {
    "v": "33K+",
    "l": "tabelas"
   },
   {
    "v": "500+",
    "l": "pipelines de dados"
   },
   {
    "v": "1PB+",
    "l": "de dados armazenados no data warehouse"
   },
   {
    "v": "2MM+",
    "l": "consultas diárias"
   },
   {
    "v": "133PB+",
    "l": "processados diariamente"
   },
   {
    "v": "600+",
    "l": "dashboards no Tableau"
   }
  ],
  "stack": [
   "Open Metadata",
   "Google Cloud Platform",
   "BigQuery",
   "Apache Airflow",
   "Datadog",
   "Cloud Functions",
   "Cloud Run",
   "Pub/Sub",
   "Dataflow",
   "Cloud Scheduler",
   "Cloud Build",
   "Cloud Deploy",
   "Git/GitHub",
   "Compute Engine",
   "GKE",
   "Python"
  ],
  "dashKpis": [
   "500",
   "650+"
  ],
  "dashLabels": [
   "usuários ativos · fonte pública",
   "tabelas documentadas"
  ],
  "mockItems": [
   {
    "l": "Open Metadata · SSO corporativo + CI/CD",
    "v": "✓ ativo"
   },
   {
    "l": "20 domínios · 30+ responsáveis",
    "v": "✓ estruturados"
   },
   {
    "l": "Selos 🥉🥈🥇 · completeness · freshness · uniqueness",
    "v": "✓ ativo"
   },
   {
    "l": "Datadog · Airflow + Cloud Functions monitorados",
    "v": "✓ observado"
   },
   {
    "l": "500+ dashboards · 300 termos de glossário",
    "v": "✓ catalogados"
   }
  ],
  "skipDefaultApp": true,
  "skipDefaultDash": true,
  "demos": [
   {
    "kind": "app",
    "t": "Catálogo de Dados Carrefour · OpenMetadata",
    "d": "Catálogo interativo: busque os 847 ativos, veja linhagem automática, schema com flags PII, scores de qualidade (completeness · freshness · uniqueness) e feed de atividade ao vivo.",
    "u": "carrefour-datacatalog-app.html",
    "btn": "Abrir catálogo interativo →"
   },
   {
    "kind": "app",
    "t": "Observabilidade · Datadog + GCP",
    "d": "Dashboard ao vivo: SLA de pipelines, DAGs do Airflow, Cloud Functions, heatmap de carga, feed de alertas e integração canal corporativo de mensagens para incidentes críticos.",
    "u": "carrefour-datadog-app.html",
    "btn": "Abrir dashboard Datadog →"
   }
  ],
  "timelineMilestones": [
   "⚡ 3 meses da prova de conceito à produção",
   "🏆 12 meses até a referência global do grupo"
  ],
  "timeline": [
   {
    "m": "Jan/24",
    "ico": "📅",
    "items": [
     "Prova de conceito",
     "OpenMetadata vira C4Data",
     "Definição e aprovação do projeto C4Data",
     "Início dos papéis de dados: Data Owners e Domínios"
    ]
   },
   {
    "m": "Abr/24",
    "ico": "🚀",
    "items": [
     "C4Data publicado em produção",
     "Workshop para o primeiro time de dados"
    ]
   },
   {
    "m": "Jul/24",
    "ico": "🏅",
    "items": [
     "Dataton",
     "Ondas de release do C4Data",
     "Selos de catalogação C4Data",
     "Implementação + workshops"
    ]
   },
   {
    "m": "Out/24",
    "ico": "🔭",
    "items": [
     "Observabilidade",
     "Testes de qualidade de dados",
     "Automação de incidentes via Jira",
     "Uso da API para automação de e-mail"
    ]
   },
   {
    "m": "Dez/24",
    "ico": "🌍",
    "items": [
     "Testes personalizados de qualidade de dados",
     "Data Maturity Assessment",
     "Apresentação global para o Carrefour",
     "Uso da API para automação de inclusão de tags"
    ]
   },
   {
    "m": "2025",
    "ico": "🌍",
    "items": [
     "Do Brasil para o mundo: modelo levado à França como referência global do grupo Carrefour",
     "Case study oficial publicado pela OpenMetadata",
     "Expansão contínua: novos domínios e squads em adoção"
    ]
   }
  ],
  "stints": [
   {
    "r": "Líder de Arquitetura, Governança e Qualidade de Dados",
    "per": "2024 a 2025",
    "prob": "Sem catálogo de dados formal, 90%+ dos assets sem owner definido, rastreabilidade zero (impossível saber de onde vinha um dado ou quem respondia por ele). Localizar qualquer ativo levava dias. Onboarding de novos engenheiros durava 30+ dias só para entender o ecossistema. Qualidade invisível: erros chegavam ao consumidor sem nenhum alerta, SLA ou monitoramento. Além do desafio tecnológico, era preciso desenvolver uma equipe multidisciplinar com diferentes níveis de experiência e mobilizar engenharia, arquitetura, produto e negócio em torno de um modelo comum.",
    "decSections": [
     {
      "eye": "🏛️ Catálogo Centralizado com OpenMetadata",
      "body": "Internamente, o programa foi batizado de C4Data: C4 de Carrefour, Data de dados. O OpenMetadata foi implantado como ponto único de descoberta e governança para todo o ecossistema de dados do Carrefour Brasil. A solução foi integrada ao SSO corporativo, eliminando credenciais separadas, e inserida no CI/CD, tornando configurações e mudanças reproduzíveis e auditáveis. Cada ativo catalogado recebeu descrição funcional e técnica, domínio de dados, schema, classificação, proprietário e data steward, linhagem e indicador de qualidade, histórico de atividades. Foram definidos owners e data stewards por domínio, separando responsabilidades: Owner (decisão e uso do ativo), Data Steward (documentação e qualidade), Engenharia (implementação e operação). A linhagem passou a representar o percurso do dado entre sistemas de origem, transformações e camadas de consumo, reduzindo o tempo para investigar dependências e impactos de dias para minutos."
     },
     {
      "eye": "📈 Qualidade de Dados como Indicador Mensurável",
      "body": "A qualidade de dados foi transformada em um indicador visível, acompanhado e comparável por domínio, combinando qualidade técnica e governança num score único por ativo. Antes do C4Data, mesmo assets com boa qualidade técnica tinham score consolidado baixo: a ausência de governança (sem owner, sem linhagem, sem regras configuradas) puxava o resultado para baixo independentemente das dimensões técnicas. O maior salto ocorreu após o Dataton: iniciativa com a diretoria que mobilizou os times para regularizar os seis requisitos de governança em escala, ao mesmo tempo em que completeness, freshness e uniqueness passaram a ser tratados pelos domínios. Foi estruturado também um modelo de certificação por selos (Bronze, Prata e Ouro) para que os times tivessem uma referência clara de maturidade por ativo. Qualidade deixou de ser intenção e passou a integrar o ciclo operacional.",
      "calc": "<div class=\"calc-title\">Exemplo didático de composição do score</div>\n<div class=\"calc-formula\">Consolidado = (qualidade técnica × 50%) + (governança × 50%)</div>\n<div class=\"calc-row\" style=\"margin-bottom:4px\">\n  <div class=\"calc-col\">\n    <div class=\"calc-col-title\">1 · Qualidade técnica</div>\n    <div style=\"font-size:11px;color:#555;margin-bottom:6px\">Média das três dimensões:</div>\n    <div class=\"calc-formula\" style=\"font-size:10.5px;margin:0 0 8px\">(completeness + freshness + uniqueness) ÷ 3</div>\n    <div class=\"calc-item\"><b>Completeness</b><span style=\"text-align:right\">campos obrigatórios preenchidos</span></div>\n    <div class=\"calc-item\"><b>Freshness</b><span style=\"text-align:right\">dado atualizado no prazo esperado</span></div>\n    <div class=\"calc-item\"><b>Uniqueness</b><span style=\"text-align:right\">sem duplicidades indevidas</span></div>\n  </div>\n  <div class=\"calc-col\">\n    <div class=\"calc-col-title\">2 · Governança</div>\n    <div style=\"font-size:11px;color:#555;margin-bottom:4px\">Requisitos atendidos ÷ 6 × 100</div>\n    <div class=\"calc-item\"><b>①</b><span>owner definido</span></div>\n    <div class=\"calc-item\"><b>②</b><span>data steward definido</span></div>\n    <div class=\"calc-item\"><b>③</b><span>descrição preenchida</span></div>\n    <div class=\"calc-item\"><b>④</b><span>linhagem disponível</span></div>\n    <div class=\"calc-item\"><b>⑤</b><span>classificação aplicada</span></div>\n    <div class=\"calc-item\"><b>⑥</b><span>regras de qualidade configuradas</span></div>\n  </div>\n</div>\n<div style=\"font-size:10px;color:#aaa;margin-bottom:10px;padding-bottom:10px;border-bottom:1px solid #e8e4dc\">0 requisitos = 0% &nbsp;·&nbsp; 3 requisitos = 50% &nbsp;·&nbsp; 6 requisitos = 100%</div>\n<div class=\"calc-row\">\n  <div class=\"calc-col\">\n    <div class=\"calc-col-title\">⬛ Antes · vendas_diarias_curated</div>\n    <div class=\"calc-item\"><span>Completeness</span><b>45%</b></div>\n    <div class=\"calc-item\"><span>Freshness</span><b>60%</b></div>\n    <div class=\"calc-item\"><span>Uniqueness</span><b>80%</b></div>\n    <div class=\"calc-item\"><span>Técnica</span><b>(45+60+80)÷3 = 61,7%</b></div>\n    <div class=\"calc-item\"><span>Governança</span><b>0÷6 = 0%</b></div>\n    <div class=\"calc-result\"><span class=\"calc-result-label\">Consolidado</span><span class=\"calc-result-val\">30,85%</span></div>\n  </div>\n  <div class=\"calc-col\">\n    <div class=\"calc-col-title\">✅ Depois · vendas_diarias_curated</div>\n    <div class=\"calc-item\"><span>Completeness</span><b>98%</b></div>\n    <div class=\"calc-item\"><span>Freshness</span><b>97%</b></div>\n    <div class=\"calc-item\"><span>Uniqueness</span><b>99%</b></div>\n    <div class=\"calc-item\"><span>Técnica</span><b>(98+97+99)÷3 = 98%</b></div>\n    <div class=\"calc-item\"><span>Governança</span><b>6÷6 = 100%</b></div>\n    <div class=\"calc-result\"><span class=\"calc-result-label\">Consolidado</span><span class=\"calc-result-val\">99%</span></div>\n  </div>\n</div>\n<div class=\"calc-delta\">Evolução desse ativo: 99% − 30,85% = <strong>+68,15 p.p.</strong></div>\n<div class=\"calc-delta\" style=\"margin-top:6px\">Cenário didático: a evolução depende do baseline, das regras e do escopo de cada domínio.</div>\n<div style=\"font-size:10.5px;color:#aaa;margin-top:8px;border-top:1px solid #e8e4dc;padding-top:8px\">vendas_diarias_curated partia de uma situação melhor que a média. Assets com governança 0% e técnica mais baixa apresentaram evolução proporcionalmente maior.</div>"
     },
     {
      "eye": "📊 Observabilidade na GCP com Datadog",
      "body": "A frente de observabilidade foi construída, integrada ao ambiente Google Cloud, para fornecer visibilidade operacional contínua. O Datadog foi utilizado para acompanhar: DAGs do Apache Airflow, Cloud Functions, componentes de infraestrutura na GCP, execução de pipelines, falhas e recuperação, disponibilidade, comportamento operacional e cumprimento de SLAs por domínio. Antes dessa estrutura, um problema podia ser identificado somente depois de uma reclamação do consumidor. Com métricas, dashboards e alertas, as equipes passaram a detectar falhas mais cedo e direcionar incidentes ao domínio responsável. Os alertas críticos foram conectados ao canal corporativo de comunicação utilizado pelos times, reduzindo a dependência de acompanhamento manual. Qualidade e Observabilidade atuavam de forma complementar: Qualidade (problemas no conteúdo e estado do dado), Observabilidade (falhas de execução, infraestrutura, disponibilidade e comportamento operacional)."
     },
     {
      "eye": "👥 Liderança Técnica de Equipe Multidisciplinar",
      "body": "A liderança técnica foi exercida sobre uma equipe formada por quatro pessoas: três profissionais seniores especialistas em governança de dados e um estagiário. As responsabilidades envolveram: (1) coordenar as frentes de catálogo, qualidade, observabilidade e adoção, (2) manter alinhamento entre implementação técnica e objetivos do programa, (3) atuar como referência entre engenharia, produto e negócio, (4) traduzir conceitos como catálogo, linhagem, ownership e qualidade em resultados compreensíveis pelos stakeholders, (5) organizar prioridades, definir padrões e remover bloqueios, (6) sustentar decisões técnicas, (7) criar uma forma consistente de trabalho entre profissionais com diferentes níveis de experiência. A atuação também incluiu conduzir o grupo de mulheres em tecnologia do Carrefour, contribuindo para uma comunidade de troca e fortalecimento profissional."
     },
     {
      "eye": "🎓 Gestão de Mudanças e Adoção em Escala",
      "body": "A implantação técnica só teria valor se as pessoas realmente utilizassem o catálogo e assumissem responsabilidade pelos dados. Mais de 100 profissionais foram capacitados: engenheiros de dados, analistas, profissionais de produto, data stewards e stakeholders de negócio. A estratégia incluiu: (1) workshops de governança estruturados, (2) capacitação técnica em OpenMetadata, (3) onboarding por squad com materiais reutilizáveis, (4) formação de data stewards por domínio, (5) plantão diário de uma hora para responder dúvidas, orientar e desbloquear problemas, (6) Dataton: iniciativa conjunta com a diretoria para catalogação e melhoria de ativos. Esse movimento foi crítico porque transformou o catálogo de uma iniciativa centralizada em uma responsabilidade compartilhada pelos domínios."
     }
    ],
    "res": "O C4Data tornou governança e descoberta de dados capacidades operacionais. O case oficial da OpenMetadata registra 500 usuários ativos, 20 domínios, 30+ responsáveis, 300 termos de glossário distribuídos em mais de 700 tabelas, 650+ tabelas documentadas e 500+ dashboards catalogados. A combinação de owners, linhagem, glossário, SSO e automação de metadados criou uma referência enterprise publicada mundialmente pela OpenMetadata.",
    "metrics": [
     "4 profissionais na equipe direta",
     "500 usuários ativos · fonte pública",
     "100+ profissionais capacitados",
     "650+ tabelas · 500+ dashboards"
    ],
    "stack": [
     "Open Metadata",
     "Google Cloud Platform",
     "BigQuery",
     "Apache Airflow",
     "Datadog",
     "Cloud Functions",
     "Cloud Run",
     "Pub/Sub",
     "Dataflow",
     "Cloud Scheduler",
     "Cloud Build",
     "Cloud Deploy",
     "Git/GitHub",
     "Compute Engine",
     "GKE",
     "Python"
    ]
   }
  ],
  "arch": [
   [
    "Ecossistema",
    "BigQuery · Airflow · PDV · e-commerce"
   ],
   [
    "Catálogo",
    "OpenMetadata · SSO · CI/CD"
   ],
   [
    "Qualidade",
    "KPIs · SLA · alertas"
   ],
   [
    "Observabilidade",
    "Datadog · GCP · canal corporativo de mensagens"
   ],
   [
    "Adoção",
    "gestão de mudanças · data stewards"
   ]
  ],
  "stat3": [
   {
    "v": "90%+",
    "l": "assets sem owner antes da implantação · implantação de catálogo com owner definido e data steward por domínio"
   },
   {
    "v": "1ª impl.",
    "l": "Carrefour Brasil levada à França como referência para o grupo global · case study oficial publicado mundialmente"
   },
   {
    "v": "500",
    "l": "usuários ativos registrados no case oficial da OpenMetadata"
   }
  ],
  "layers": [
   {
    "icon": "🌐",
    "title": "Ecossistema de Dados",
    "desc": "Ecossistema heterogêneo: vendas PDV, estoque, clientes, e-commerce, BigQuery, Airflow e toda a infraestrutura GCP, catalogados e documentados no Open Metadata com linhagem automática entre todas as camadas."
   },
   {
    "icon": "🏛️",
    "title": "Catálogo · OpenMetadata",
    "desc": "Implantado com SSO corporativo e CI/CD. O case oficial registra 500 usuários ativos, 20 domínios, 30+ responsáveis, 300 termos de glossário, 650+ tabelas documentadas e 500+ dashboards."
   },
   {
    "icon": "✅",
    "title": "Qualidade de Dados · Selos",
    "desc": "KPIs por domínio: completeness, freshness e uniqueness. Cada asset recebia um selo 🥉 Bronze · 🥈 Prata · 🥇 Ouro, chegar ao Ouro exigia thresholds rigorosos, owner definido, linhagem completa e classificação correta. Alertas automáticos por deterioração de SLA. Qualidade virou métrica visível, não intenção."
   },
   {
    "icon": "📊",
    "title": "Observabilidade · Datadog",
    "desc": "Stack completo construído do zero: Datadog plugado na GCP monitorando Airflow, Cloud Functions e toda a infraestrutura. Integração com canal corporativo de mensagens para alertas críticos em tempo real."
   },
   {
    "icon": "🎓",
    "title": "Adoção & Gestão de Mudanças",
    "desc": "Capacitação por perfil, data stewards definidos por domínio e apoio recorrente à adoção. O Dataton mobilizou a área para catalogação e melhoria conjunta dos ativos."
   }
  ],
  "code": [
   {
    "tab": "Catálogo · Open Metadata",
    "label": "Configuração de asset e linhagem no Open Metadata com SSO corporativo (Python)",
    "note": "Este script registra uma tabela no catálogo: nome, descrição, dono e classificação. Em seguida, declara de onde esse dado veio (linhagem), para que qualquer pessoa no catálogo consiga rastrear a origem sem precisar perguntar a ninguém.",
    "code": "# Exemplo didático (dados e nomes fictícios)\nfrom metadata.ingestion.ometa.ometa_api import OpenMetadata, OpenMetadataConnection\n\n# Conecta ao Open Metadata com SSO próprio do Carrefour (SAML/OAuth)\nconfig = OpenMetadataConnection(\n    hostPort=\"https://openmetadata.carrefour.com.br\",\n    authProvider=\"sso-carrefour\",   # SSO corporativo, não login avulso\n)\nom = OpenMetadata(config)\n\n# Registra asset no catálogo com owner, domínio e data steward\nasset = {\n    \"name\":        \"vendas_diarias_curated\",\n    \"displayName\": \"Vendas Diárias · Curated\",\n    \"description\": \"Tabela consolidada de vendas PDV por loja/SKU/dia.\",\n    \"owner\":       {\"name\": \"squad-comercial@carrefour.com.br\"},\n    \"tags\":        [\"dominio:vendas\", \"classificacao:interno\", \"pii:false\"],\n    \"tier\":        \"Tier1\",\n}\nom.create_or_update_entity(asset)\n\n# Registra linhagem: PDV_RAW → curated (capturada automaticamente)\nom.add_lineage(\n    source=\"vendas_pdv_raw\",\n    destination=\"vendas_diarias_curated\",\n    description=\"Pipeline batch diário, dag: sales_daily_v2\"\n)\n# → Linhagem visível no catálogo para todos os consumidores do dado"
   },
   {
    "tab": "Qualidade · KPIs",
    "label": "Definição de checks de qualidade de dados no catálogo Open Metadata (Python)",
    "note": "Aqui é onde a qualidade vira regra automática: define-se o mínimo de linhas esperado, o prazo máximo de atraso e quais colunas não podem ter duplicidade ou ficar vazias. O catálogo roda esses testes sozinho e mostra o resultado como nota de qualidade, sem depender de alguém checar manualmente.",
    "code": "# Exemplo didático (dados e nomes fictícios)\nfrom metadata.ingestion.ometa.ometa_api import OpenMetadata\n\nom = OpenMetadata(config)\n\n# Define perfil de qualidade para o asset, checks por domínio\nquality_profile = {\n    \"asset\": \"vendas_diarias_curated\",\n    \"checks\": [\n        # Completeness: tabela não pode ter menos de 50k linhas/dia\n        {\"type\": \"rowCount\",    \"min\": 50_000, \"severity\": \"critical\"},\n        # Freshness: dado deve ter no máx 26h de atraso\n        {\"type\": \"freshness\",   \"maxHours\": 26, \"severity\": \"high\"},\n        # Uniqueness: chave composta não pode repetir\n        {\"type\": \"uniqueness\",  \"columns\": [\"loja_id\", \"sku\", \"data_venda\"],\n                                \"severity\": \"critical\"},\n        # Not null: campos obrigatórios\n        {\"type\": \"notNull\",     \"columns\": [\"sale_id\", \"valor_total\"],\n                                \"severity\": \"high\"},\n    ]\n}\nom.upsert_quality_profile(quality_profile)\n\n# → Score de qualidade (completeness · freshness · uniqueness) visível\n#   no catálogo para qualquer time que consome o dado"
   },
   {
    "tab": "Observabilidade · Datadog",
    "label": "Monitor de pipeline com alerta no canal corporativo de mensagens via Datadog + GCP (Python)",
    "note": "Este monitor fica de olho no tempo de execução do pipeline. Se ele demorar mais que o esperado (sinal de que algo travou), o alerta cai automaticamente no canal corporativo de mensagens do time responsável, em menos de um minuto, sem esperar o consumidor reclamar do dado atrasado.",
    "code": "# Exemplo didático (dados e nomes fictícios)\nfrom datadog_api_client import ApiClient, Configuration\nfrom datadog_api_client.v1.api.monitors_api import MonitorsApi\nfrom datadog_api_client.v1.model.monitor import Monitor\n\nconfig = Configuration()  # DD_API_KEY e DD_APP_KEY via env GCP Secret Manager\n\nwith ApiClient(config) as api_client:\n    api = MonitorsApi(api_client)\n\n    # Monitor: detecta atraso crítico no pipeline batch\n    monitor = Monitor(\n        name=\"[Carrefour] Pipeline vendas_diarias, atraso crítico\",\n        type=\"metric alert\",\n        # Alerta se o DAG levar mais de 2h (execução esperada: ~40min)\n        query=\"avg(last_10m):avg:airflow.dag.run.duration{dag_id:sales_daily_v2} > 7200\",\n        message=(\n            \"⚠️ Pipeline de vendas com atraso > 2h.\\n\"\n            \"Impacto: reposição de estoque e relatórios de vendas.\\n\"\n            \"@webhook-canal-dados-alerta\"  # → destino configurável; confirmar o canal histórico antes de nomeá-lo\n        ),\n        tags=[\"squad:dados\", \"criticidade:alta\", \"dominio:vendas\"],\n        options={\"thresholds\": {\"critical\": 7200, \"warning\": 3600},\n                 \"notify_no_data\": True, \"no_data_timeframe\": 30},\n    )\n    api.create_monitor(monitor)\n# → Alerta chega no canal corporativo de mensagens em < 60s após detecção"
   }
  ],
  "faq": [
   {
    "q": "Como o Open Metadata captura linhagem automaticamente?",
    "a": "O OpenMetadata ingere metadados e pode construir linhagem a partir de conectores, histórico de consultas e integrações com os pipelines. A cobertura depende da versão, das permissões e das fontes configuradas. Transformações que não aparecem nesses registros precisam de instrumentação ou registro complementar; não é uma captura automática de qualquer script Python."
   },
   {
    "q": "Por que a implementação brasileira se tornou referência para o grupo global?",
    "a": "O Brasil foi o primeiro país do grupo a implantar Open Metadata em escala enterprise, com SSO corporativo, CI/CD, 500+ assets catalogados, linhagem automática entre todas as camadas e adoção efetiva pelos times de dados e de negócio. A operação francesa visitou o case e levou o modelo para replicação no grupo global Carrefour."
   },
   {
    "q": "Como foi alcançada a adoção do catálogo em escala?",
    "a": "A adoção foi resultado de gestão de mudanças estruturada, não apenas de tecnologia. Workshops foram desenhados por perfil: engenheiros aprenderam a registrar linhagem e owners, analistas a localizar e consultar dados, e stakeholders de negócio compreenderam o impacto de ter qualidade visível. Cada squad passou a contar com um data steward responsável por seu domínio, e os próprios times tornaram-se guardiões dos dados."
   },
   {
    "q": "O que é o case study oficial publicado pela OpenMetadata?",
    "a": "O próprio time da OpenMetadata documentou a implementação do Carrefour Brasil como referência enterprise, escala, maturidade técnica (SSO, CI/CD, linhagem automática) e velocidade de adoção foram os critérios. O case está publicado no site oficial da OpenMetadata e é usado como exemplo para outras empresas que querem implantar governança em escala."
   }
  ]
 },
 {
  "f": "fin",
  "flag": "br",
  "n": "Itaú Unibanco",
  "dom": "itau.com.br",
  "per": "2020 a 2024",
  "featured": true,
  "r": "Engenheira Sênior → Tech Lead → Technical Product Manager → Chapter Lead",
  "d": "No Itaú, atuei como Engenheira Sênior, Tech Lead, Technical Product Manager e Chapter Lead entre 2020 e 2024. Liderei tecnicamente o Data Factory e também atuei no código, ampliando o acesso seguro a dados entre Hadoop, Cloudera CDP e AWS. Em outra frente, conduzi observabilidade, FinOps e evolução técnica da Plataforma Única de Crédito, mantendo atuação hands-on junto aos times.",
  "heroChips": [
   "Amazon Web Services · Certificada",
   "Python · Java · Scala",
   "Batch & Online · consultas em ms",
   "Plataforma de Crédito · Data Mesh"
  ],
  "t": {
   "en": {
    "r": "Senior Engineer → Tech Lead → Technical Product Manager → Chapter Lead",
    "per": "2020 to 2024",
    "stintWord": "Phase",
    "d": "Senior Engineer, Tech Lead, Technical Product Manager and Chapter Lead roles from 2020 to 2024 at the largest bank in Latin America. Technically led Data Factory, a product that democratized secure data access across Hadoop, Cloudera CDP and AWS; on another front, drove observability, FinOps and the technical evolution of the Unified Credit Platform. Deliveries ran in a SAFe environment, with integrated planning, prioritized backlog, incremental cycles and continuous improvement. The Technical Product Manager role belonged to a distinct team, dedicated to training and data engineering.",
    "heroChips": [
     "Amazon Web Services · Certified",
     "Python · Java · Scala",
     "Batch & Online · millisecond queries",
     "Credit Platform · Data Mesh"
    ],
    "app": {
     "sub": "CREDIT PLATFORM",
     "h": "The platform that decides credit <em>in milliseconds.</em>",
     "d": "Simulation of Data Factory and the Unified Credit Platform in operation: running queries with guard rails, a domain catalog with chargeback and observability alerts for critical bases. Didactic simulation, no customer data."
    },
    "metrics": [
     {
      "v": "8,000+",
      "l": "workflows organized into a unified journey of execution, governance and traceability"
     },
     {
      "v": "FinOps",
      "l": "AWS · Cloudability and cost governance"
     },
     {
      "v": "2 PB",
      "l": "of data in production across retail-credit bases, with continuous monitoring"
     },
     {
      "v": "29 professionals",
      "l": "led directly as Chapter Lead and Data Engineering Coordinator"
     }
    ],
    "lead": "The team included people with visual, hearing, physical and cognitive disabilities. Engineering practices were designed for all of them: accessible documentation, text descriptions of diagrams, asynchronous processes and a Brazilian Sign Language (LIBRAS) interpreter in meetings when needed. The work connected individual development, accessibility and the technical evolution of production deliveries.",
    "dashKpis": [
     "2 PB in production",
     "FinOps · AWS"
    ],
    "dashLabels": [
     "retail-credit bases with continuous observability",
     "annual cost reduction on the PUC infrastructure"
    ],
    "mockItems": [
     {
      "l": "Data Factory · unified HQL and Spark execution with performance guard rails",
      "v": "✓ operational"
     },
     {
      "l": "Workflows with end-to-end traceability and per-domain data contracts",
      "v": "✓ governed"
     },
     {
      "l": "Corporate catalog · controlled access · chargeback (cost split by area)",
      "v": "✓ operational"
     },
     {
      "l": "Grafana + CloudWatch · observability of critical retail-credit bases",
      "v": "✓ monitored"
     },
     {
      "l": "Architectural evolution Data Lake → Data Mesh · solution remains in production",
      "v": "✓ in production"
     }
    ],
    "methChips": [
     "SAFe · Agile at scale",
     "AWS Certified",
     "Clean Architecture",
     "Domain-Driven Design",
     "CI/CD · GitLab",
     "DevSecOps",
     "FinOps · AWS Cost Optimization",
     "SRE · SLO",
     "IaC · Terraform"
    ],
    "demos": [
     {
      "kind": "app",
      "t": "Data Factory · Data Platform",
      "d": "Navigable MVP of the product real journey: corporate login, project selection, HQL, Spark and Python transformations, related DAGs, guard rails, catalog, lineage and cost by area. The platform connects Hadoop, Cloudera CDP and AWS to democratize access without giving up security and governance.",
      "u": "itau-data-factory-app.html",
      "btn": "Open Data Factory →"
     },
     {
      "kind": "dash",
      "t": "Observability · Grafana + CloudWatch",
      "d": "Observability dashboard for retail-credit bases: latency per layer, pipeline health and real-time alerts integrated into Teams and corporate phones for the most critical bases.",
      "u": "itau-observability-dashboard.html",
      "btn": "View dashboard →"
     },
     {
      "kind": "dash",
      "t": "FinOps · AWS Cost and Savings",
      "d": "FinOps dashboard: cost per service, savings achieved, rightsizing opportunities and lifecycle policies.",
      "u": "itau-finops-dashboard.html",
      "btn": "View FinOps →"
     },
     {
      "kind": "case",
      "tag": "2nd place · Internal hackathon",
      "t": "Data Battle · Open Finance",
      "d": "Full write-up of the internal hackathon: a model estimating payment capacity by combining data from multiple banks (cross-bank). 720K customers were analyzed and R$3.2B in portfolio potential identified.",
      "u": "cases-itau.html",
      "btn": "See full case →",
      "awarded": true
     },
     {
      "kind": "dash",
      "tag": "🥈 Award-winning case · Dashboard",
      "t": "Open Finance analytics dashboard",
      "d": "Cross-bank score, XGBoost features and real-time metrics from the Data Battle case.",
      "u": "itau-analytics-dashboard.html",
      "btn": "View analytics →"
     }
    ],
    "stints": [
     {
      "r": "Senior Engineer → Tech Lead · Data Factory",
      "per": "2020 to 2021",
      "prob": "Cloudera CDP, on-premises Hadoop and AWS worked as independent platforms. Getting access to data required specialized knowledge, permissions across different environments and direct command-line execution in Hive; for much of the organization, the data existed but was not really accessible. Beyond limiting productivity, unoptimized queries competed for shared-cluster resources and caused incidents that were hard to trace. The challenge was to democratize access securely, with domain-level autonomy, preventive policies, lineage and explicit accountability over consumption.",
      "decSections": [
       {
        "eye": "🏭 Data Factory · Unified Big Data Processing Platform",
        "body": "A product called Data Factory was created: a single big-data processing platform that hides infrastructure complexity and offers one place to run analyses. Through it, analysts and engineers ran queries (HQL and SQL) and Spark applications in a single interface, without needing to access the servers directly. Data Factory brought together three different systems (on-premises Hadoop, Cloudera CDP and AWS) into a single platform, and no matter where the data lived, it routed execution to the right place automatically and transparently for the user."
       },
       {
        "eye": "🛡️ Guard Rails · Preventive Governance",
        "body": "An automatic layer was created that checked every query before running it, working like safety rails (guard rails). Queries that could overload the shared environment were blocked immediately, along with a hint on how to fix them. Governance became preventive: instead of putting out fires afterward, the problem was stopped beforehand, protecting server capacity and reducing incidents caused by poorly written queries."
       },
       {
        "eye": "📋 Corporate Catalog · Governance and Chargeback",
        "body": "The platform gained a data catalog organized by subject (what the technical area calls a domain), control over who accesses what, and a chargeback model, billing each area for the cost it actually consumed (a cost split). This led every team to use resources in a controlled, transparent way, reinforcing governance, security and cost discipline at the same time."
       },
       {
        "eye": "🚀 Architectural Evolution · Modernizing On-Premises Servers to the Cloud",
        "body": "Data Factory became the bridge between Hadoop, Cloudera CDP and AWS, enabling the modernization of the bank data infrastructure: from mostly running on local (on-premises) servers to a cloud-first strategy on AWS. This architecture allowed gradual evolution and later sustained the transition to a Data Mesh model (data organized and cared for by each area that owns the subject), preserving governance and autonomy."
       }
      ],
      "res": "The platform replaced a highly operational process with a corporate layer of execution, democratic governance and observability. Workflow traceability became complete, incidents related to query execution dropped by roughly 60% (from around 20 to 8 per month), and the product paved the way for Data Mesh: more autonomy for domains, simpler access and security policies applied consistently. The solution was adopted as a corporate standard and remained in production.",
      "metrics": [
       "Tech Lead in < 1 month",
       "100% traceability",
       "−60% incidents",
       "Data Mesh · democratized access"
      ]
     },
     {
      "r": "Technical Product Manager · Training and Data Engineering",
      "per": "2021 to 2022",
      "prob": "After Data Factory was consolidated, the main challenge shifted to scaling the organization technical capacity. It was necessary to accelerate the training of dozens of engineers in AWS and Python, spread data-engineering best practices, and structure a continuous-learning culture that would sustain the expansion of the cloud strategy. At the same time, the transition into the Technical Product Manager role required broadening the scope into product management, organizational development and large-scale technical leadership.",
      "decSections": [
       {
        "eye": "🎓 Corporate Training Program",
        "body": "A continuous training program was structured, made up of bootcamps, workshops and technical tracks in AWS Cloud and Python. The initiative prioritized training internal multipliers, allowing new leaders to take over the evolution of the training programs and ensure their continuity."
       },
       {
        "eye": "🎤 Knowledge Sharing",
        "body": "The strategy was complemented by presentations at internal technical forums for thousands of employees, covering data engineering, cloud computing, distributed architecture and technical-leadership development. The goal was to extend the reach of knowledge beyond the teams directly involved in the projects."
       },
       {
        "eye": "☁️ AWS Technical Reference · Certification and Multiplication",
        "body": "During the modernization process, acting as an AWS technical reference helped support and accelerate cloud adoption across multiple teams at the bank. The AWS certification was obtained during this period, formalizing competencies already applied in production. The multiplier model ensured continuity and scale for the training program beyond the direct team."
       }
      ],
      "res": "The program established a continuous technical-development structure, training dozens of professionals and preparing new leaders to drive the evolution of data engineering. The initiative consolidated the transition into a role focused on product strategy and organizational development.",
      "metrics": [
       "AWS Certification",
       "Dozens of professionals trained",
       "Thousands reached in technical forums",
       "Corporate program established"
      ]
     },
     {
      "r": "Chapter Lead · Unified Credit Platform (PUC)",
      "per": "2022 to 2024",
      "prob": "The Unified Credit Platform needed to support critical data at scale, with continuous observability, AWS cost governance and technical development for a diverse team.",
      "decSections": [
       {
        "eye": "⚡ Credit Platform at Scale",
        "body": "The architecture combined Amazon Aurora, Amazon Redshift, Amazon S3 and Amazon Keyspaces to sustain critical credit-analysis workloads with high availability and resilience. Keyspaces served low-latency key-based queries; Aurora supported transactional data; Redshift organized analytical consumption; and S3 preserved data at scale. The design reduced coupling between operational decisions, history and analysis without exposing any customer information."
       },
       {
        "eye": "📡 Corporate Observability",
        "body": "Observability means being able to see, in real time, whether everything is working. This monitoring was set up with Grafana (the dashboards) connected to AWS CloudWatch (cloud metrics collection), which allowed live visibility into process health, automatic alerts and greater predictability for the most critical retail-credit bases."
       },
       {
        "eye": "💰 FinOps · Cloud Cost Control and Reduction",
        "body": "Cloudability supported FinOps and AWS cost-reduction work, alongside service-level consumption reviews, rightsizing, reserved capacity, storage tiers and Keyspaces billing. The financial screens use illustrative scenarios; their amounts are not realized savings."
       },
       {
        "eye": "🛡️ Critical Incident Management",
        "body": "Technical coordination of a critical security incident involving several teams at once, ensuring rapid stabilization of the environment and continuity of operations. Technical details are withheld for confidentiality."
       },
       {
        "eye": "🤝 Organizational Development",
        "body": "The team included people with visual, hearing, physical and cognitive disabilities. Engineering practices were designed for all of them: accessible documentation, text descriptions of diagrams, asynchronous processes and a Brazilian Sign Language (LIBRAS) interpreter in meetings when needed. The work connected individual development, accessibility and the technical evolution of production deliveries."
       }
      ],
      "res": "The work combined continuous monitoring of credit data, cost analysis with Cloudability and development of up to 29 professionals. Accessibility and individual development plans supported the technical evolution of production deliveries.",
      "metrics": [
       "2 PB continuously monitored",
       "FinOps · cost governance",
       "Grafana + CloudWatch",
       "29 professionals led"
      ]
     }
    ],
    "arch": [
     [
      "Sources",
      "transactional systems · on-premises · Cloudera CDP"
     ],
     [
      "Batch",
      "Hive · Glue · EMR · PySpark"
     ],
     [
      "Persistence",
      "Keyspaces · Aurora · low latency and transactional"
     ],
     [
      "Lake",
      "S3 · 2 PB · Parquet · Data Mesh"
     ],
     [
      "Analytics",
      "Redshift · Athena · Power BI"
     ],
     [
      "Observability",
      "Grafana · CloudWatch · SLOs · alerts"
     ]
    ],
    "stat3": [
     {
      "v": "4 roles",
      "l": "Senior Engineer · Tech Lead · TPM · Chapter Lead"
     },
     {
      "v": "3.5 years",
      "l": "working on platforms that remain in production: Data Factory and the Unified Credit Platform"
     },
     {
      "v": "100%",
      "l": "of the team reaching senior-level deliveries in production, sustained by individual development plans"
     }
    ],
    "layers": [
     {
      "icon": "🏭",
      "title": "Data Factory · Data Processing and Democratization",
      "desc": "A Façade pattern over Cloudera CDP, Hadoop and AWS: a single execution gateway for HQL, SQL and PySpark, with automatic routing to the right substrate. Guard rails as Policy-as-Code, a per-domain catalog and chargeback built into the platform. Corporate standard in production since 2021."
     },
     {
      "icon": "🛡️",
      "title": "Guard Rails · Preventive Governance",
      "desc": "Policy-as-Code versioned in the repository: validates HQL before execution and blocks SELECT *, unfiltered CROSS JOIN and missing partitioning on large tables. Shared cluster protected, incidents from poorly written queries eliminated at the source."
     },
     {
      "icon": "📋",
      "title": "Corporate Catalog · Governance and Chargeback",
      "desc": "Domains versioned in the catalog, RBAC per area and automatic chargeback on platform usage. Governance built into the execution flow, not as a parallel process."
     },
     {
      "icon": "🗃️",
      "title": "PUC · Unified Credit Platform",
      "desc": "The Unified Credit Platform combines Amazon Aurora, Redshift, S3 and Keyspaces to separate transactional data, analytical consumption, storage at scale and low-latency queries. The design prioritizes resilience, traceability and credit decisions with predictable response times."
     },
     {
      "icon": "📡",
      "title": "Observability · Grafana + CloudWatch",
      "desc": "Grafana + AWS CloudWatch over 2 PB+ of retail-credit data: health dashboards per layer, automatic alerts on SLA deterioration. Before: reactive detection, with the user reporting the problem first."
     },
     {
      "icon": "🤝",
      "title": "Leadership · Team of up to 29 Professionals",
      "desc": "Acting as Chapter Lead and Data Engineering Coordinator, with an individual development plan for each person, accessible documentation and inclusive practices. The team technical growth led 100% of professionals to senior-level deliveries in production."
     }
    ],
    "codeNotes": [
     {
      "tab": "HQL Guard Rails",
      "label": "[Model] Query validator (HQL): Data Factory safety rail for shared Hadoop (Python)",
      "note": "Data Factory checked every query (HQL) before running it in Hive. Overly heavy queries (for example, SELECT *, which reads the entire table, an unfiltered join, or missing a date filter on huge tables) were blocked immediately, already returning the needed fix. This protected the capacity of the servers, which were shared across several teams."
     },
     {
      "tab": "FinOps · PUC",
      "label": "[Model] AWS cost analysis for PUC FinOps optimization (Python + boto3)",
      "note": "Service-level cost review, rightsizing, reserved capacity, storage tiers and Keyspaces billing. Financial screen amounts are illustrative scenarios, not evidence of realized savings."
     },
     {
      "tab": "Credit Pipeline",
      "label": "Feature engineering for credit risk, AWS Glue (PySpark)",
      "note": "Imagine taking a customer entire transaction history (what came in and out of the account) and summarizing it into a few numbers that describe their behavior: how much moves monthly, how much it varies, how much they earn, how much they spend and what share of income is already committed to debt. That is what this program does, for millions of customers at once. Those numbers become the raw material the model uses to calculate the credit score. In technical jargon, turning raw data into these useful numbers is called feature engineering."
     },
     {
      "tab": "Observability",
      "label": "Observability stack with CloudWatch + Grafana (Python + boto3)",
      "note": "This code places sensors on every run of the credit processes and sends the numbers to CloudWatch (AWS monitoring service): how many records went through, how long it took and whether any data was lost along the way. It also sets up an automatic alarm that fires when the delay crosses a threshold (here, half a second) and notifies the team. That same alert feeds the Grafana dashboards and the real-time alerts on Teams and corporate phones for the most critical bases."
     }
    ],
    "faq": [
     {
      "q": "What is Data Factory and why does it remain in production?",
      "a": "Data Factory is a corporate platform that processes large volumes of data and organizes access to it with governance. The core idea is to offer a simple entry point to complicated infrastructure behind the scenes (Cloudera CDP, Hadoop and AWS). This kind of solution, a facade that hides complexity, is what engineering calls the Façade pattern. Analysts and engineers ran queries (HQL, SQL) and Spark through this single interface, without needing to know where the data physically lived. Safety rails (guard rails), written as rules in the code itself (Policy-as-Code), immediately blocked dangerous queries (like a SELECT * that reads the whole table). A catalog organized by subject (domain), with access control and chargeback (cost split by area), completes the governance. It became a corporate standard and remains in production, sustaining the evolution of the bank data strategy."
     },
     {
      "q": "What is SAFe and how was it applied at Itaú?",
      "a": "SAFe (Scaled Agile Framework) is a scaled-agility framework for coordinating multiple squads: PI Planning, synchronized sprints and collective retrospectives. At Itaú, the application was rigorous and disciplined, demonstrating how agile methodology delivers consistent results when executed with organizational maturity."
     },
     {
      "q": "What is a Chapter Lead and what was the management scope?",
      "a": "A Chapter Lead is the technical reference for a group of people with the same specialty: defines best practices, guides technical growth and leads by influence, not hierarchy. At Itaú, the role was carried out alongside coordinating Data Engineering, with direct management of up to 29 professionals, which included performance reviews, individual development plans and recruiting. In other words, technical leadership and people management at the same time."
     },
     {
      "q": "How is inclusive leadership reflected in engineering practice?",
      "a": "Every person on the team had an individual development plan. Technical documentation included text descriptions of diagrams (for people with visual impairments) and processes were asynchronous, with context written out in detail, which helps different profiles. The team included people with visual, hearing, physical and cognitive disabilities, and practices were designed for all of them (for example, a sign-language interpreter in meetings when needed). The work connected individual development, accessibility and technical growth in production deliveries."
     },
     {
      "q": "What was Amazon Keyspaces used for on the platform?",
      "a": "Keyspaces was the database used for queries that needed to be very fast: it stored each customer credit information organized by a key (like their national ID) and returned the answer in milliseconds when deciding on a credit line, even with a huge volume of records. It was chosen because the team already mastered the technology behind it (Apache Cassandra), which avoided rewriting code and reduced migration risk."
     },
     {
      "q": "How was the FinOps · AWS saving on PUC structured?",
      "a": "Cloudability supported FinOps and AWS cost-reduction work, alongside service-level consumption reviews, rightsizing, reserved capacity, storage tiers and Keyspaces billing. The financial screens use illustrative scenarios; their amounts are not realized savings."
     }
    ],
    "leadFeature": {
     "title": "Inclusive leadership in engineering practice.",
     "eye": "People · accessibility · delivery",
     "body": "The team included people with visual, hearing, physical and cognitive disabilities. Engineering practices were designed for all of them: accessible documentation, text descriptions of diagrams, asynchronous processes and a Brazilian Sign Language (LIBRAS) interpreter in meetings when needed. The work connected individual development, accessibility and the technical evolution of production deliveries.",
     "items": [
      "Up to 29 professionals led",
      "Individual development plans",
      "Accessibility in technical routines"
     ]
    }
   },
   "es": {
    "r": "Ingeniera Senior → Tech Lead → Technical Product Manager → Chapter Lead",
    "per": "2020 a 2024",
    "stintWord": "Fase",
    "d": "Funciones de Ingeniera Senior, Tech Lead, Technical Product Manager y Chapter Lead de 2020 a 2024 en el mayor banco de América Latina. Lideró técnicamente Data Factory, producto que democratizó el acceso seguro a datos entre Hadoop, Cloudera CDP y AWS; en otro frente, condujo observabilidad, FinOps y evolución técnica de la Plataforma Única de Crédito. Las entregas se condujeron en ambiente SAFe, con planificación integrada, backlog priorizado, ciclos incrementales y mejora continua. La actuación como Technical Product Manager perteneció a un equipo distinto, dedicado a la formación y a la ingeniería de datos.",
    "heroChips": [
     "Amazon Web Services · Certificada",
     "Python · Java · Scala",
     "Batch & Online · consultas en ms",
     "Plataforma de Crédito · Data Mesh"
    ],
    "app": {
     "sub": "PLATAFORMA DE CRÉDITO",
     "h": "La plataforma que decide crédito <em>en milisegundos.</em>",
     "d": "Simulación de la operación de Data Factory y de la Plataforma Única de Crédito: ejecución de consultas con guard rails, catálogo por dominio con chargeback y alertas de observabilidad de las bases críticas. Simulación didáctica, sin datos de clientes."
    },
    "metrics": [
     {
      "v": "8.000+",
      "l": "workflows organizados en un recorrido unificado de ejecución, gobernanza y trazabilidad"
     },
     {
      "v": "FinOps",
      "l": "AWS · Cloudability y gobierno de costos"
     },
     {
      "v": "2 PB",
      "l": "de datos en producción en las bases de crédito PF, con monitoreo continuo"
     },
     {
      "v": "29 profesionales",
      "l": "liderados directamente como Chapter Lead y Coordinadora de Ingeniería de Datos"
     }
    ],
    "lead": "El equipo incluía personas con discapacidad visual, auditiva, física y cognitiva. Las prácticas de ingeniería se diseñaban para todas ellas: documentación accesible, descripciones textuales de diagramas, procesos asíncronos e intérprete de lengua de señas brasileña (LIBRAS) en reuniones cuando era necesario. El trabajo conectó desarrollo individual, accesibilidad y evolución técnica de las entregas en producción.",
    "dashKpis": [
     "2 PB en producción",
     "FinOps · AWS"
    ],
    "dashLabels": [
     "bases de crédito PF con observabilidad continua",
     "reducción anual de costo en la infraestructura de la PUC"
    ],
    "mockItems": [
     {
      "l": "Data Factory · ejecución unificada de HQL y Spark con guard rails de rendimiento",
      "v": "✓ operacional"
     },
     {
      "l": "Workflows con trazabilidad end-to-end y contratos de datos por dominio",
      "v": "✓ gobernado"
     },
     {
      "l": "Catálogo corporativo · acceso controlado · chargeback (reparto de costo por área)",
      "v": "✓ operacional"
     },
     {
      "l": "Grafana + CloudWatch · observabilidad de las bases críticas de crédito PF",
      "v": "✓ monitoreado"
     },
     {
      "l": "Evolución arquitectónica Data Lake → Data Mesh · solución permanece en producción",
      "v": "✓ en producción"
     }
    ],
    "methChips": [
     "SAFe · Agile a escala",
     "AWS Certified",
     "Clean Architecture",
     "Domain-Driven Design",
     "CI/CD · GitLab",
     "DevSecOps",
     "FinOps · AWS Cost Optimization",
     "SRE · SLO",
     "IaC · Terraform"
    ],
    "demos": [
     {
      "kind": "app",
      "t": "Data Factory · Plataforma de Datos",
      "d": "MVP navegable del recorrido real del producto: login corporativo, elección del proyecto, transformaciones HQL, Spark y Python, DAGs relacionados, guard rails, catálogo, linaje y costo por área. La plataforma conecta Hadoop, Cloudera CDP y AWS para democratizar el acceso sin renunciar a la seguridad y la gobernanza.",
      "u": "itau-data-factory-app.html",
      "btn": "Abrir Data Factory →"
     },
     {
      "kind": "dash",
      "t": "Observabilidad · Grafana + CloudWatch",
      "d": "Dashboard de observabilidad de las bases de crédito PF: latencia por capa, salud de los pipelines y alertas en tiempo real integradas a Teams y al celular corporativo para las bases supercríticas.",
      "u": "itau-observability-dashboard.html",
      "btn": "Ver dashboard →"
     },
     {
      "kind": "dash",
      "t": "FinOps · Costo y Ahorro AWS",
      "d": "Dashboard de FinOps: costo por servicio, ahorro alcanzado, oportunidades de rightsizing y lifecycle policies.",
      "u": "itau-finops-dashboard.html",
      "btn": "Ver FinOps →"
     },
     {
      "kind": "case",
      "tag": "2.º lugar · Hackathon interno",
      "t": "Batalla de Datos · Open Finance",
      "d": "Caso completo del hackathon interno: un modelo que estima la capacidad de pago combinando datos de varios bancos (cross-bank). Se analizaron 720K clientes y se identificó R$3,2B de potencial de cartera.",
      "u": "cases-itau.html",
      "btn": "Ver caso completo →",
      "awarded": true
     },
     {
      "kind": "dash",
      "tag": "🥈 Caso premiado · Dashboard",
      "t": "Dashboard analítico Open Finance",
      "d": "Score cross-bank, features XGBoost y métricas del caso Batalla de Datos en tiempo real.",
      "u": "itau-analytics-dashboard.html",
      "btn": "Ver analytics →"
     }
    ],
    "stints": [
     {
      "r": "Ingeniera Senior → Tech Lead · Data Factory",
      "per": "2020 a 2021",
      "prob": "Cloudera CDP, Hadoop on-premises y AWS funcionaban como plataformas independientes. Conseguir acceso al dato exigía conocimiento especializado, permisos en ambientes distintos y ejecución directa en Hive por línea de comandos; para gran parte de la organización, el dato existía, pero no era realmente accesible. Además de limitar la productividad, consultas no optimizadas competían por recursos del clúster compartido y generaban incidentes difíciles de rastrear. El desafío era democratizar el acceso de forma segura, con autonomía por dominio, políticas preventivas, linaje y responsabilidad explícita sobre el consumo.",
      "decSections": [
       {
        "eye": "🏭 Data Factory · Plataforma Única de Procesamiento de Big Data",
        "body": "Se creó un producto llamado Data Factory: una plataforma única de procesamiento de big data (grandes volúmenes de datos) que oculta la complejidad de la infraestructura y ofrece un único lugar para ejecutar los análisis. A través de ella, analistas e ingenieros ejecutaban consultas (HQL y SQL) y aplicaciones Spark en una sola interfaz, sin necesidad de acceder directamente a los servidores. Data Factory reunía tres sistemas diferentes (Hadoop en servidores locales, Cloudera CDP y AWS) en una única plataforma, y sin importar dónde estuviera el dato, enviaba la ejecución al lugar correcto de forma automática y transparente para el usuario."
       },
       {
        "eye": "🛡️ Guard Rails · Gobernanza Preventiva",
        "body": "Se creó una capa automática que revisaba cada consulta antes de ejecutarla, funcionando como rieles de seguridad (guard rails). Las consultas que podían sobrecargar el ambiente compartido se bloqueaban al instante, junto con una sugerencia de cómo corregirlas. Así la gobernanza se volvió preventiva: en lugar de apagar incendios después, el problema se frenaba antes, protegiendo la capacidad de los servidores y reduciendo los incidentes causados por consultas mal hechas."
       },
       {
        "eye": "📋 Catálogo Corporativo · Gobernanza y Chargeback",
        "body": "La plataforma pasó a tener un catálogo de datos organizado por tema (lo que el área técnica llama dominio), control de quién accede a qué y un modelo de chargeback, que consiste en cobrar a cada área el costo que realmente consumió (un reparto de costos). Con esto, cada equipo pasó a usar los recursos de forma controlada y transparente, reforzando al mismo tiempo gobernanza, seguridad y disciplina de costos."
       },
       {
        "eye": "🚀 Evolución Arquitectónica · Modernización de los Servidores Locales hacia la Nube",
        "body": "Data Factory se convirtió en el puente entre Hadoop, Cloudera CDP y AWS, viabilizando la modernización de la infraestructura de datos del banco: de gran parte funcionando en servidores locales (on-premises) hacia una estrategia con la nube en primer lugar (cloud-first) en AWS. Esta arquitectura permitió evolucionar poco a poco y sostuvo, más adelante, la transición hacia un modelo de Data Mesh (datos organizados y cuidados por cada área dueña del tema), preservando gobernanza y autonomía."
       }
      ],
      "res": "La plataforma sustituyó un proceso altamente operativo por una capa corporativa de ejecución, gobernanza democrática y observabilidad. La trazabilidad de los workflows se volvió completa, los incidentes relacionados con la ejecución de consultas se redujeron en aproximadamente 60% (de cerca de 20 a 8 por mes) y el producto abrió el camino hacia Data Mesh: más autonomía para los dominios, acceso más simple y políticas de seguridad aplicadas de forma consistente. La solución fue adoptada como estándar corporativo y permaneció en producción.",
      "metrics": [
       "Tech Lead en < 1 mes",
       "100% de trazabilidad",
       "−60% de incidentes",
       "Data Mesh · acceso democratizado"
      ]
     },
     {
      "r": "Technical Product Manager · Formación e Ingeniería de Datos",
      "per": "2021 a 2022",
      "prob": "Tras la consolidación de Data Factory, el principal desafío pasó a ser escalar la capacidad técnica de la organización. Era necesario acelerar la formación de decenas de ingenieros en AWS y Python, difundir buenas prácticas de ingeniería de datos y estructurar una cultura de aprendizaje continuo que sostuviera la expansión de la estrategia de nube. En paralelo, la transición al rol de Technical Product Manager exigía ampliar la actuación hacia gestión de productos, desarrollo organizacional y liderazgo técnico a gran escala.",
      "decSections": [
       {
        "eye": "🎓 Programa Corporativo de Capacitación",
        "body": "Se estructuró un programa continuo de formación compuesto por bootcamps, workshops y rutas técnicas en AWS Cloud y Python. La iniciativa priorizó la formación de multiplicadores internos, permitiendo que nuevos líderes asumieran la evolución de los programas de capacitación y garantizaran su continuidad."
       },
       {
        "eye": "🎤 Difusión de Conocimiento",
        "body": "La estrategia se complementó con presentaciones en foros técnicos internos para miles de colaboradores, abordando ingeniería de datos, computación en la nube, arquitectura distribuida y desarrollo de liderazgo técnico. El objetivo era ampliar el alcance del conocimiento más allá de los equipos directamente involucrados en los proyectos."
       },
       {
        "eye": "☁️ Referencia Técnica AWS · Certificación y Multiplicación",
        "body": "Durante el proceso de modernización, la actuación como referencia técnica en AWS permitió apoyar y acelerar la adopción de la nube en múltiples equipos del banco. La certificación AWS se obtuvo en ese período, formalizando competencias ya aplicadas en producción. El modelo de multiplicadores garantizó continuidad y escala al programa de capacitación más allá del equipo directo."
       }
      ],
      "res": "El programa estableció una estructura continua de desarrollo técnico, formando a decenas de profesionales y preparando nuevos líderes para conducir la evolución de la ingeniería de datos. La iniciativa consolidó la transición hacia una actuación orientada a la estrategia de producto y al desarrollo organizacional.",
      "metrics": [
       "Certificación AWS",
       "Decenas de profesionales capacitados",
       "Miles alcanzados en foros técnicos",
       "Programa corporativo establecido"
      ]
     },
     {
      "r": "Chapter Lead · Plataforma Única de Crédito (PUC)",
      "per": "2022 a 2024",
      "prob": "La Plataforma Única de Crédito necesitaba sostener datos críticos a escala, con observabilidad continua, gobierno de costos en AWS y desarrollo técnico de un equipo diverso.",
      "decSections": [
       {
        "eye": "⚡ Plataforma de Crédito a Escala",
        "body": "La arquitectura combinó Amazon Aurora, Amazon Redshift, Amazon S3 y Amazon Keyspaces para sostener cargas críticas de análisis de crédito con alta disponibilidad y resiliencia. Keyspaces atendía consultas de baja latencia por clave; Aurora soportaba datos transaccionales; Redshift organizaba el consumo analítico; y S3 preservaba datos a escala. El diseño reducía el acoplamiento entre decisión operativa, historial y análisis sin exponer ninguna información de cliente."
       },
       {
        "eye": "📡 Observabilidad Corporativa",
        "body": "Observabilidad es poder ver, en tiempo real, si todo está funcionando. Se montó este seguimiento con Grafana (los paneles) conectado a AWS CloudWatch (la recolección de métricas de la nube), lo que permitió ver la salud de los procesos en vivo, disparar alertas automáticas y tener más previsibilidad sobre las bases más críticas de crédito de persona física."
       },
       {
        "eye": "💰 FinOps · Control y Reducción de Costos de la Nube",
        "body": "Cloudability apoyó el trabajo de FinOps y reducción de costos en AWS, junto con la revisión de consumo por servicio, rightsizing, capacidad reservada, niveles de almacenamiento y facturación de Keyspaces. Las pantallas financieras usan escenarios ilustrativos; sus importes no representan ahorros realizados."
       },
       {
        "eye": "🛡️ Gestión de Incidente Crítico",
        "body": "Coordinación técnica de un incidente crítico de seguridad que involucró a varios equipos al mismo tiempo, garantizando rápida estabilización del ambiente y la continuidad de la operación. Los detalles técnicos se preservan por confidencialidad."
       },
       {
        "eye": "🤝 Desarrollo Organizacional",
        "body": "El equipo incluía personas con discapacidad visual, auditiva, física y cognitiva. Las prácticas de ingeniería se diseñaban para todas ellas: documentación accesible, descripciones textuales de diagramas, procesos asíncronos e intérprete de lengua de señas brasileña (LIBRAS) en reuniones cuando era necesario. El trabajo conectó desarrollo individual, accesibilidad y evolución técnica de las entregas en producción."
       }
      ],
      "res": "El trabajo integró monitoreo continuo de datos de crédito, análisis de costos con Cloudability y desarrollo de hasta 29 profesionales. La accesibilidad y los planes individuales acompañaron la evolución técnica de las entregas en producción.",
      "metrics": [
       "2 PB monitoreados continuamente",
       "FinOps · gobernanza de costos",
       "Grafana + CloudWatch",
       "29 profesionales liderados"
      ]
     }
    ],
    "arch": [
     [
      "Fuentes",
      "sistemas transaccionales · on-premises · Cloudera CDP"
     ],
     [
      "Batch",
      "Hive · Glue · EMR · PySpark"
     ],
     [
      "Persistencia",
      "Keyspaces · Aurora · baja latencia y transaccional"
     ],
     [
      "Lake",
      "S3 · 2 PB · Parquet · Data Mesh"
     ],
     [
      "Analytics",
      "Redshift · Athena · Power BI"
     ],
     [
      "Observabilidad",
      "Grafana · CloudWatch · SLOs · alertas"
     ]
    ],
    "stat3": [
     {
      "v": "4 funciones",
      "l": "Ingeniería Senior · Tech Lead · TPM · Chapter Lead"
     },
     {
      "v": "3,5 años",
      "l": "de actuación con plataformas que permanecen en producción: Data Factory y la Plataforma Única de Crédito"
     },
     {
      "v": "100%",
      "l": "del equipo alcanzando entregas senior en producción, sostenido por planes individuales de desarrollo"
     }
    ],
    "layers": [
     {
      "icon": "🏭",
      "title": "Data Factory · Procesamiento y Democratización de Datos",
      "desc": "Patrón Façade sobre Cloudera CDP, Hadoop y AWS: una puerta única de ejecución para HQL, SQL y PySpark, con enrutamiento automático al sustrato correcto. Guard rails como Policy-as-Code, catálogo por dominio y chargeback integrados en la plataforma. Estándar corporativo en producción desde 2021."
     },
     {
      "icon": "🛡️",
      "title": "Guard Rails · Gobernanza Preventiva",
      "desc": "Policy-as-Code versionado en el repositorio: valida HQL antes de la ejecución y bloquea SELECT *, CROSS JOIN sin filtro y ausencia de partición en tablas grandes. Clúster compartido protegido, incidentes por consultas mal escritas eliminados en el origen."
     },
     {
      "icon": "📋",
      "title": "Catálogo Corporativo · Gobernanza y Chargeback",
      "desc": "Dominios versionados en el catálogo, RBAC por área y chargeback automático sobre el uso de la plataforma. Gobernanza integrada en el flujo de ejecución, no como proceso paralelo."
     },
     {
      "icon": "🗃️",
      "title": "PUC · Plataforma Única de Crédito",
      "desc": "La Plataforma Única de Crédito combina Amazon Aurora, Redshift, S3 y Keyspaces para separar datos transaccionales, consumo analítico, almacenamiento a escala y consultas de baja latencia. El diseño prioriza resiliencia, trazabilidad y decisión de crédito con respuesta predecible."
     },
     {
      "icon": "📡",
      "title": "Observabilidad · Grafana + CloudWatch",
      "desc": "Grafana + AWS CloudWatch sobre 2 PB+ de datos de crédito PF: paneles de salud por capa, alertas automáticas por deterioro de SLA. Antes: detección reactiva, el usuario reportaba el problema primero."
     },
     {
      "icon": "🤝",
      "title": "Liderazgo · Equipo de hasta 29 Profesionales",
      "desc": "Actuación como Chapter Lead y Coordinadora de Ingeniería de Datos, con plan individual de desarrollo para cada persona, documentación accesible y prácticas inclusivas. La evolución técnica del equipo llevó al 100% de los profesionales a entregas senior en producción."
     }
    ],
    "codeNotes": [
     {
      "tab": "HQL Guard Rails",
      "label": "[Modelo] Validador de consultas (HQL): el riel de seguridad de Data Factory para el Hadoop compartido (Python)",
      "note": "Data Factory revisaba toda consulta (HQL) antes de ejecutarla en Hive. Consultas demasiado pesadas (por ejemplo, SELECT *, que lee la tabla entera, una unión sin filtro o la falta de filtro por fecha en tablas gigantes) se bloqueaban al instante, devolviendo ya el ajuste necesario. Esto protegía la capacidad de los servidores, compartidos por varios equipos."
     },
     {
      "tab": "FinOps · PUC",
      "label": "[Modelo] Análisis de costo AWS para optimización FinOps de la PUC (Python + boto3)",
      "note": "Revisión de costos por servicio, rightsizing, capacidad reservada, almacenamiento por niveles y Keyspaces. Los montos de las pantallas son escenarios didácticos, no evidencia de ahorro realizado."
     },
     {
      "tab": "Credit Pipeline",
      "label": "Feature engineering para riesgo de crédito, AWS Glue (PySpark)",
      "note": "Imagina tomar todo el historial de transacciones de un cliente (lo que entró y salió de la cuenta) y resumirlo en pocos números que describen su comportamiento: cuánto mueve por mes, cuánto varía eso, cuánto gana, cuánto gasta y qué parte del ingreso ya está comprometida con deudas. Eso es lo que hace este programa, para millones de clientes a la vez. Esos números se convierten en la materia prima que el modelo usa para calcular el score de crédito. En jerga técnica, transformar datos crudos en estos números útiles se llama feature engineering."
     },
     {
      "tab": "Observability",
      "label": "Stack de observabilidad con CloudWatch + Grafana (Python + boto3)",
      "note": "Este código coloca sensores en cada ejecución de los procesos de crédito y envía los números a CloudWatch (el servicio de monitoreo de AWS): cuántos registros pasaron, cuánto tiempo tomó y si algún dato se perdió en el camino. También activa una alarma automática, que se dispara cuando la demora supera el límite (aquí, medio segundo) y avisa al equipo. Ese mismo aviso alimenta los paneles en Grafana y las alertas en tiempo real en Teams y en el celular corporativo de las bases más críticas."
     }
    ],
    "faq": [
     {
      "q": "¿Qué es Data Factory y por qué permanece en producción?",
      "a": "Data Factory es una plataforma corporativa que procesa grandes volúmenes de datos y organiza el acceso a ellos con gobernanza. La idea central es ofrecer una puerta de entrada simple a una infraestructura complicada por detrás (Cloudera CDP, Hadoop y AWS). Este tipo de solución, una fachada que oculta la complejidad, es lo que la ingeniería llama patrón Façade. Analistas e ingenieros ejecutaban consultas (HQL, SQL) y Spark por esta interfaz única, sin necesidad de saber dónde estaba el dato físicamente. Rieles de seguridad (guard rails), escritos como reglas en el propio código (Policy-as-Code), frenaban al instante las consultas peligrosas (como un SELECT * que lee la tabla entera). Un catálogo organizado por tema (dominio), con control de acceso y chargeback (reparto de costo por área), completa la gobernanza. Se convirtió en estándar corporativo y sigue en producción, sosteniendo la evolución de la estrategia de datos del banco."
     },
     {
      "q": "¿Qué es SAFe y cómo se aplicó en Itaú?",
      "a": "SAFe (Scaled Agile Framework) es un framework de agilidad a escala para coordinar múltiples squads: PI Planning, sprints sincronizados y retrospectivas colectivas. En Itaú, la aplicación era rigurosa y disciplinada, demostrando cómo la metodología ágil entrega resultados consistentes cuando se ejecuta con madurez organizacional."
     },
     {
      "q": "¿Qué es Chapter Lead y cuál era el alcance de gestión?",
      "a": "Chapter Lead es la referencia técnica de un grupo de personas con la misma especialidad: define buenas prácticas, orienta el crecimiento técnico y lidera por influencia, no por jerarquía. En Itaú, el rol se ejerció junto con la coordinación de Ingeniería de Datos, con gestión directa de hasta 29 profesionales, lo que incluía evaluación de desempeño, plan de desarrollo de cada persona y reclutamiento. Es decir, liderazgo técnico y gestión de personas al mismo tiempo."
     },
     {
      "q": "¿Cómo se refleja el liderazgo inclusivo en la práctica de ingeniería?",
      "a": "Cada persona del equipo tenía un plan individual de desarrollo. La documentación técnica incluía la descripción en texto de los diagramas (para quienes tienen discapacidad visual) y los procesos eran asíncronos, con contexto escrito en detalle, lo que ayuda a diferentes perfiles. El equipo reunía personas con discapacidad visual, auditiva, física y cognitiva, y las prácticas estaban pensadas para todas ellas (por ejemplo, intérprete de lengua de señas en las reuniones cuando era necesario). El trabajo conectó desarrollo individual, accesibilidad y evolución técnica de las entregas en producción."
     },
     {
      "q": "¿Para qué servía Amazon Keyspaces en la plataforma?",
      "a": "Keyspaces era la base de datos usada en las consultas que necesitaban ser muy rápidas: guardaba la información de crédito de cada cliente organizada por una clave (como el CPF) y devolvía la respuesta en milisegundos al momento de decidir un crédito, incluso con un volumen enorme de registros. Se eligió porque el equipo ya dominaba la tecnología detrás de ella (Apache Cassandra), lo que evitó reescribir código y redujo el riesgo de la migración."
     },
     {
      "q": "¿Cómo se presenta FinOps?",
      "a": "Cloudability apoyó el trabajo de FinOps y reducción de costos en AWS, junto con la revisión de consumo por servicio, rightsizing, capacidad reservada, niveles de almacenamiento y facturación de Keyspaces. Las pantallas financieras usan escenarios ilustrativos; sus importes no representan ahorros realizados."
     }
    ],
    "leadFeature": {
     "title": "Liderazgo inclusivo en la práctica de ingeniería.",
     "eye": "Personas · accesibilidad · entregas",
     "body": "El equipo incluía personas con discapacidad visual, auditiva, física y cognitiva. Las prácticas de ingeniería se diseñaban para todas ellas: documentación accesible, descripciones textuales de diagramas, procesos asíncronos e intérprete de lengua de señas brasileña (LIBRAS) en reuniones cuando era necesario. El trabajo conectó desarrollo individual, accesibilidad y evolución técnica de las entregas en producción.",
     "items": [
      "Hasta 29 profesionales liderados",
      "Planes individuales de desarrollo",
      "Accesibilidad en la rutina técnica"
     ]
    }
   },
   "ja": {
    "r": "シニアエンジニア → テックリード → テクニカルプロダクトマネージャー → チャプターリード",
    "per": "2020年〜2024年",
    "stintWord": "フェーズ",
    "d": "ラテンアメリカ最大の銀行で、2020年から2024年までシニアエンジニア、テックリード、TPM、チャプターリードを担当。Hadoop、Cloudera CDP、AWS間の安全なデータアクセスを民主化したData Factoryを技術面でリード。別の領域では、統合与信プラットフォームの可観測性、FinOps、技術的進化を推進。SAFe環境で統合計画、優先順位付けされたバックログ、インクリメンタルなサイクル、継続的改善のもとで納品を実施。テクニカルプロダクトマネージャーとしての業務は、研修とデータエンジニアリングに特化した別チームに所属。",
    "heroChips": [
     "Amazon Web Services · 認定資格",
     "Python · Java · Scala",
     "バッチ＆オンライン · ミリ秒単位のクエリ",
     "クレジットプラットフォーム · Data Mesh"
    ],
    "app": {
     "sub": "クレジットプラットフォーム",
     "h": "<em>ミリ秒で</em>与信を判断するプラットフォーム。",
     "d": "Data Factoryと統合与信プラットフォームの運用シミュレーション: ガードレール付きクエリ実行、チャージバック付きドメインカタログ、重要基盤の可観測性アラート。顧客データを使わない教育目的のシミュレーションです。"
    },
    "metrics": [
     {
      "v": "8,000+",
      "l": "実行、ガバナンス、トレーサビリティを統合した仕組みに整理されたワークフロー"
     },
     {
      "v": "FinOps",
      "l": "AWS · Cloudabilityとコスト管理"
     },
     {
      "v": "2 PB",
      "l": "継続的な監視のもとで本番稼働する個人向けクレジット基盤のデータ量"
     },
     {
      "v": "29名",
      "l": "チャプターリード兼データエンジニアリングコーディネーターとして直接率いた人数"
     }
    ],
    "lead": "チームには視覚、聴覚、身体、認知に障害のあるメンバーがいました。アクセシブルな文書、図のテキスト説明、非同期の業務プロセス、必要に応じた会議でのブラジル手話（LIBRAS）通訳など、全員に配慮した実践を行いました。個人の成長、アクセシビリティ、本番環境への技術的なデリバリーの向上を結び付けた取り組みです。",
    "dashKpis": [
     "本番稼働2 PB",
     "FinOps · コスト管理"
    ],
    "dashLabels": [
     "継続的な可観測性を備えた個人向けクレジット基盤",
     "PUCインフラにおける年間コスト削減"
    ],
    "mockItems": [
     {
      "l": "Data Factory · パフォーマンスガードレール付きのHQL・Spark統合実行",
      "v": "✓ 稼働中"
     },
     {
      "l": "エンドツーエンドのトレーサビリティとドメイン別データ契約を備えたワークフロー",
      "v": "✓ ガバナンス管理"
     },
     {
      "l": "企業カタログ · アクセス制御 · チャージバック（部門別コスト按分）",
      "v": "✓ 稼働中"
     },
     {
      "l": "Grafana + CloudWatch · 重要な個人向けクレジット基盤の可観測性",
      "v": "✓ 監視中"
     },
     {
      "l": "アーキテクチャの進化 Data Lake → Data Mesh · 本番稼働継続中",
      "v": "✓ 本番稼働中"
     }
    ],
    "methChips": [
     "SAFe · 大規模アジャイル",
     "AWS Certified",
     "クリーンアーキテクチャ",
     "ドメイン駆動設計",
     "CI/CD · GitLab",
     "DevSecOps",
     "FinOps · AWSコスト最適化",
     "SRE · SLO",
     "IaC · Terraform"
    ],
    "demos": [
     {
      "kind": "app",
      "t": "Data Factory · データプラットフォーム",
      "d": "製品の実際の流れをたどれるナビゲーション可能なMVP: 企業ログイン、プロジェクト選択、HQL・Spark・Pythonによる変換、関連DAG、ガードレール、カタログ、リネージ、部門別コスト。プラットフォームはHadoop、Cloudera CDP、AWSを連携させ、セキュリティとガバナンスを維持しながらアクセスを民主化します。",
      "u": "itau-data-factory-app.html",
      "btn": "Data Factoryを開く →"
     },
     {
      "kind": "dash",
      "t": "可観測性 · Grafana + CloudWatch",
      "d": "個人向けクレジット基盤の可観測性ダッシュボード: 層ごとのレイテンシ、パイプラインの健全性、最重要基盤向けにTeamsと企業携帯へ連携されたリアルタイムアラート。",
      "u": "itau-observability-dashboard.html",
      "btn": "ダッシュボードを見る →"
     },
     {
      "kind": "dash",
      "t": "FinOps · AWSコストと削減",
      "d": "FinOpsダッシュボード: サービス別コスト、達成した削減額、ライトサイジングの機会、ライフサイクルポリシー。",
      "u": "itau-finops-dashboard.html",
      "btn": "FinOpsを見る →"
     },
     {
      "kind": "case",
      "tag": "第2位 · 社内ハッカソン",
      "t": "Data Battle · Open Finance",
      "d": "社内ハッカソンの完全なケース: 複数銀行のデータを組み合わせて（クロスバンク）支払い能力を推定するモデル。72万人の顧客を分析し、R$32億のポートフォリオ潜在価値を特定。",
      "u": "cases-itau.html",
      "btn": "ケース全体を見る →",
      "awarded": true
     },
     {
      "kind": "dash",
      "tag": "🥈 受賞ケース · ダッシュボード",
      "t": "Open Financeアナリティクスダッシュボード",
      "d": "Data Battleケースのクロスバンクスコア、XGBoostの特徴量、リアルタイム指標。",
      "u": "itau-analytics-dashboard.html",
      "btn": "アナリティクスを見る →"
     }
    ],
    "stints": [
     {
      "r": "シニアエンジニア → テックリード · Data Factory",
      "per": "2020年〜2021年",
      "prob": "Cloudera CDP、オンプレミスHadoop、AWSは独立したプラットフォームとして機能していました。データへのアクセスには専門知識、異なる環境ごとの権限、Hiveへのコマンドラインによる直接実行が必要で、組織の多くにとってデータは存在していても実質的にアクセスできない状態でした。生産性の制約に加え、最適化されていないクエリが共有クラスタのリソースを奪い合い、追跡が難しいインシデントを引き起こしていました。課題は、ドメイン単位の自律性、予防的なポリシー、リネージ、消費に対する明確な説明責任を伴いながら、安全にアクセスを民主化することでした。",
      "decSections": [
       {
        "eye": "🏭 Data Factory · ビッグデータ処理の統合プラットフォーム",
        "body": "Data Factoryという製品が作られました。インフラの複雑さを隠し、分析を実行する単一の場所を提供するビッグデータ（大量データ）処理の統合プラットフォームです。これにより、アナリストやエンジニアはサーバーに直接アクセスすることなく、単一のインターフェースでクエリ（HQLおよびSQL）とSparkアプリケーションを実行できました。Data Factoryは3つの異なるシステム（ローカルサーバー上のHadoop、Cloudera CDP、AWS）を1つのプラットフォームに統合し、データがどこにあっても、ユーザーには自動的かつ透過的に適切な場所へ実行を振り分けました。"
       },
       {
        "eye": "🛡️ ガードレール · 予防的ガバナンス",
        "body": "実行前に各クエリを確認する自動レイヤーが構築され、安全レール（ガードレール）として機能しました。共有環境に過負荷をかける可能性のあるクエリはその場でブロックされ、修正のヒントとともに返されました。これによりガバナンスは予防的なものになりました。事後の火消しではなく、問題を事前に食い止めることで、サーバー容量を保護し、不適切なクエリによるインシデントを削減しました。"
       },
       {
        "eye": "📋 企業カタログ · ガバナンスとチャージバック",
        "body": "プラットフォームには、テーマ別（技術領域ではドメインと呼ぶ）に整理されたデータカタログ、誰が何にアクセスするかの制御、そして各部門が実際に消費したコストを請求するチャージバックモデル（コスト按分）が導入されました。これにより各チームは、ガバナンス・セキュリティ・コスト規律を同時に強化しながら、リソースを制御された透明な形で利用するようになりました。"
       },
       {
        "eye": "🚀 アーキテクチャの進化 · ローカルサーバーからクラウドへのモダナイゼーション",
        "body": "Data FactoryはHadoop、Cloudera CDP、AWSの橋渡しとなり、銀行のデータインフラのモダナイゼーションを可能にしました。大部分がローカルサーバー（オンプレミス）で稼働する状態から、AWSでのクラウドファースト戦略への移行です。このアーキテクチャは段階的な進化を可能にし、後にData Mesh（各テーマの担当領域がデータを整理・管理するモデル）への移行を支え、ガバナンスと自律性を維持しました。"
       }
      ],
      "res": "このプラットフォームは、高度に運用主導だったプロセスを、実行・民主的ガバナンス・可観測性を備えた企業レイヤーに置き換えました。ワークフローのトレーサビリティは完全になり、クエリ実行に関するインシデントは約60%減少（月間約20件から8件へ）、この製品はData Mesh実現への道を開きました: ドメインへのより大きな自律性、よりシンプルなアクセス、一貫して適用されるセキュリティポリシー。このソリューションは企業標準として採用され、本番稼働を継続しました。",
      "metrics": [
       "1か月未満でテックリードへ",
       "トレーサビリティ100%",
       "インシデント−60%",
       "Data Mesh · 民主化されたアクセス"
      ]
     },
     {
      "r": "テクニカルプロダクトマネージャー · 研修とデータエンジニアリング",
      "per": "2021年〜2022年",
      "prob": "Data Factoryの定着後、主な課題は組織の技術力のスケールへと移りました。AWSとPythonにおける数十名のエンジニアの育成を加速し、データエンジニアリングのベストプラクティスを広め、クラウド戦略の拡大を支える継続的学習の文化を構築する必要がありました。同時に、テクニカルプロダクトマネージャーへの移行には、プロダクトマネジメント、組織開発、大規模な技術リーダーシップへと業務範囲を広げることが求められました。",
      "decSections": [
       {
        "eye": "🎓 企業研修プログラム",
        "body": "AWS CloudとPythonにおけるブートキャンプ、ワークショップ、技術トラックからなる継続的な研修プログラムを構築しました。この取り組みは社内マルチプライヤーの育成を優先し、新しいリーダーが研修プログラムの発展を引き継ぎ、継続性を確保できるようにしました。"
       },
       {
        "eye": "🎤 知見の共有",
        "body": "この戦略は、数千人の従業員を対象とした社内技術フォーラムでの発表によって補完され、データエンジニアリング、クラウドコンピューティング、分散アーキテクチャ、技術リーダーシップの育成を扱いました。目的は、プロジェクトに直接関わるチームを超えて知見の到達範囲を広げることでした。"
       },
       {
        "eye": "☁️ AWS技術リファレンス · 認定とマルチプライヤー化",
        "body": "モダナイゼーションの過程で、AWSの技術リファレンスとしての活動は、銀行内の複数チームにおけるクラウド導入を支援・加速しました。この期間にAWS認定を取得し、すでに本番で応用していたスキルを正式なものにしました。マルチプライヤーモデルにより、直属チームを超えて研修プログラムに継続性とスケールを確保しました。"
       }
      ],
      "res": "このプログラムは継続的な技術育成の仕組みを確立し、数十名の専門家を育成し、データエンジニアリングの発展を導く新たなリーダーを育てました。この取り組みは、プロダクト戦略と組織開発に軸足を置いた業務への移行を定着させました。",
      "metrics": [
       "AWS認定取得",
       "数十名の専門家を育成",
       "技術フォーラムで数千人にリーチ",
       "企業プログラムの確立"
      ]
     },
     {
      "r": "チャプターリード · 統合与信プラットフォーム（PUC）",
      "per": "2022年〜2024年",
      "prob": "統合与信プラットフォームでは、大規模な重要データを支え、継続的な可観測性、AWSのコスト管理、多様なチームの技術育成を両立する必要がありました。",
      "decSections": [
       {
        "eye": "⚡ 大規模なクレジットプラットフォーム",
        "body": "アーキテクチャはAmazon Aurora、Amazon Redshift、Amazon S3、Amazon Keyspacesを組み合わせ、高可用性と耐障害性を備えた重要な与信分析ワークロードを支えました。Keyspacesはキーによる低レイテンシクエリを担当し、Auroraはトランザクションデータを支え、Redshiftは分析利用を整理し、S3は大規模にデータを保存しました。この設計は、顧客情報を一切露出させることなく、運用判断・履歴・分析間の結合度を下げました。"
       },
       {
        "eye": "📡 企業レベルの可観測性",
        "body": "可観測性とは、すべてが正常に機能しているかをリアルタイムで把握できることです。この仕組みはGrafana（ダッシュボード）とAWS CloudWatch（クラウドの指標収集）を連携させて構築し、プロセスの健全性をライブで確認し、自動アラートを発火させ、最も重要な個人向けクレジット基盤に対する予測可能性を高めました。"
       },
       {
        "eye": "💰 FinOps · クラウドコストの管理と削減",
        "body": "Cloudabilityを使用し、AWSのFinOpsとコスト削減の検討を支援しました。サービス別の利用量、適正なリソース容量、予約容量、ストレージ階層、Keyspacesの課金を見直しました。財務画面の金額は説明用のシナリオであり、実現した削減額ではありません。"
       },
       {
        "eye": "🛡️ 重大インシデント対応",
        "body": "複数チームが同時に関わった重大なセキュリティインシデントの技術的な調整を担い、環境の迅速な安定化と業務継続を確保しました。技術的な詳細は機密保持のため非公開です。"
       },
       {
        "eye": "🤝 組織開発",
        "body": "チームには視覚、聴覚、身体、認知に障害のあるメンバーがいました。アクセシブルな文書、図のテキスト説明、非同期の業務プロセス、必要に応じた会議でのブラジル手話（LIBRAS）通訳など、全員に配慮した実践を行いました。個人の成長、アクセシビリティ、本番環境への技術的なデリバリーの向上を結び付けた取り組みです。"
       }
      ],
      "res": "与信データの継続的な監視、Cloudabilityによるコスト分析、最大29名の育成を結び付けました。アクセシビリティと個別の育成計画を、本番環境への技術的なデリバリーの向上に組み込みました。",
      "metrics": [
       "継続的に監視された2 PB",
       "FinOps · コスト管理",
       "Grafana + CloudWatch",
       "29名をリード"
      ]
     }
    ],
    "arch": [
     [
      "ソース",
      "トランザクションシステム · オンプレミス · Cloudera CDP"
     ],
     [
      "バッチ",
      "Hive · Glue · EMR · PySpark"
     ],
     [
      "永続化",
      "Keyspaces · Aurora · 低レイテンシ・トランザクション"
     ],
     [
      "レイク",
      "S3 · 2 PB · Parquet · Data Mesh"
     ],
     [
      "アナリティクス",
      "Redshift · Athena · Power BI"
     ],
     [
      "可観測性",
      "Grafana · CloudWatch · SLO · アラート"
     ]
    ],
    "stat3": [
     {
      "v": "4職種",
      "l": "シニアエンジニア · テックリード · TPM · チャプターリード"
     },
     {
      "v": "3.5年",
      "l": "本番稼働を続けるプラットフォームでの活動: Data Factoryと統合与信プラットフォーム"
     },
     {
      "v": "100%",
      "l": "個別育成計画に支えられ、本番でシニアレベルの成果を達成したチーム比率"
     }
    ],
    "layers": [
     {
      "icon": "🏭",
      "title": "Data Factory · データ処理と民主化",
      "desc": "Cloudera CDP、Hadoop、AWS上のファサードパターン: HQL、SQL、PySparkのための単一実行ゲートウェイで、正しい基盤への自動ルーティングを提供。Policy-as-Codeとしてのガードレール、ドメイン別カタログ、チャージバックがプラットフォームに組み込まれています。2021年から本番稼働の企業標準。"
     },
     {
      "icon": "🛡️",
      "title": "ガードレール · 予防的ガバナンス",
      "desc": "リポジトリでバージョン管理されたPolicy-as-Code: 実行前にHQLを検証し、SELECT *、フィルタなしのCROSS JOIN、大規模テーブルでのパーティション未設定をブロック。共有クラスタを保護し、誤ったクエリによるインシデントを発生源で排除。"
     },
     {
      "icon": "📋",
      "title": "企業カタログ · ガバナンスとチャージバック",
      "desc": "カタログでバージョン管理されたドメイン、部門別RBAC、プラットフォーム利用に基づく自動チャージバック。並行プロセスではなく、実行フローに組み込まれたガバナンス。"
     },
     {
      "icon": "🗃️",
      "title": "PUC · 統合与信プラットフォーム",
      "desc": "統合与信プラットフォームはAmazon Aurora、Redshift、S3、Keyspacesを組み合わせ、トランザクションデータ、分析利用、大規模ストレージ、低レイテンシクエリを分離します。この設計は、予測可能な応答時間での耐障害性、トレーサビリティ、与信判断を優先します。"
     },
     {
      "icon": "📡",
      "title": "可観測性 · Grafana + CloudWatch",
      "desc": "2 PB超の個人向けクレジットデータに対するGrafana + AWS CloudWatch: 層ごとの健全性ダッシュボード、SLA悪化時の自動アラート。導入前は、利用者が問題を最初に報告する事後対応型の検知でした。"
     },
     {
      "icon": "🤝",
      "title": "リーダーシップ · 最大29名のチーム",
      "desc": "チャプターリード兼データエンジニアリングコーディネーターとして、各自の個別育成計画、アクセス可能なドキュメント、包摂的な実践を伴う活動。チームの技術的成長により、専門家の100%が本番でシニアレベルの成果を達成しました。"
     }
    ],
    "codeNotes": [
     {
      "tab": "HQLガードレール",
      "label": "[モデル] クエリ検証（HQL）: 共有Hadoop向けData Factoryの安全レール（Python）",
      "note": "Data FactoryはHiveで実行する前にすべてのクエリ（HQL）を確認していました。過度に重いクエリ（例: テーブル全体を読むSELECT *、フィルタなしの結合、巨大テーブルでの日付フィルタ欠如）はその場でブロックされ、必要な修正案をすぐに返しました。これにより、複数チームで共有されていたサーバーの容量が保護されました。"
     },
     {
      "tab": "FinOps · PUC",
      "label": "[モデル] PUC FinOps最適化のためのAWSコスト分析（Python + boto3）",
      "note": "サービス別コスト、リソース適正化、予約容量、階層化とKeyspaces課金を検討。画面の金額は説明用のシミュレーションであり、実現した削減額の証拠ではありません。"
     },
     {
      "tab": "クレジットパイプライン",
      "label": "与信リスクの特徴量エンジニアリング、AWS Glue（PySpark）",
      "note": "顧客の取引履歴全体（口座への入出金）を、その行動を表すいくつかの数値に要約することを想像してください: 月間の取引額、その変動幅、収入、支出、すでに債務に充てられている収入の割合。このプログラムは、数百万人の顧客に対して同時にこれを行います。これらの数値は、モデルが与信スコアを算出するための材料になります。専門用語では、生データをこうした有用な数値に変換することをフィーチャーエンジニアリングと呼びます。"
     },
     {
      "tab": "可観測性",
      "label": "CloudWatch + Grafanaによる可観測性スタック（Python + boto3）",
      "note": "このコードは与信プロセスの各実行にセンサーを配置し、処理件数、所要時間、途中でデータが失われなかったかをCloudWatch（AWSの監視サービス）に送信します。また、遅延がしきい値（ここでは0.5秒）を超えると発火する自動アラームを設定し、チームに通知します。この通知はGrafanaのダッシュボードや、最重要基盤向けのTeamsおよび企業携帯へのリアルタイムアラートにも反映されます。"
     }
    ],
    "faq": [
     {
      "q": "Data Factoryとは何で、なぜ本番稼働を続けているのですか?",
      "a": "Data Factoryは、大量のデータを処理し、ガバナンスとともにアクセスを整理する企業プラットフォームです。中心となる考え方は、背後にある複雑なインフラ（Cloudera CDP、Hadoop、AWS）へのシンプルな入口を提供することです。複雑さを隠すファサードとしてのこの種のソリューションは、エンジニアリングでファサードパターンと呼ばれます。アナリストとエンジニアは、データが物理的にどこにあるかを知る必要なく、この単一インターフェースでクエリ（HQL、SQL）とSparkを実行していました。コード自体にルールとして書かれた安全レール（ガードレール、Policy-as-Code）が、危険なクエリ（テーブル全体を読むSELECT *など）をその場でブロックしました。テーマ（ドメイン）別に整理されたカタログに、アクセス制御とチャージバック（部門別コスト按分）を加えることでガバナンスが完成します。これは企業標準となり、銀行のデータ戦略の発展を支えながら本番稼働を続けています。"
     },
     {
      "q": "SAFeとは何で、Itaúでどのように適用されましたか?",
      "a": "SAFe（Scaled Agile Framework）は、複数のスクワッドを調整するための大規模アジャイルフレームワークです: PI Planning、同期されたスプリント、集団でのレトロスペクティブ。Itaúでは、厳格かつ規律ある形で適用され、組織的な成熟度をもって実行されたときにアジャイル手法が一貫した成果をもたらすことを示しました。"
     },
     {
      "q": "チャプターリードとは何で、どのようなマネジメント範囲でしたか?",
      "a": "チャプターリードは、同じ専門性を持つ人々のグループにおける技術的なリファレンスであり、ベストプラクティスを定義し、技術的成長を導き、階層ではなく影響力によってリードします。Itaúでは、データエンジニアリングのコーディネーションと合わせてこの役割を担い、最大29名の専門家を直接マネジメントしました。これには人事評価、各自の育成計画、採用が含まれていました。つまり、技術リーダーシップと人材マネジメントを同時に担っていたということです。"
     },
     {
      "q": "インクルーシブなリーダーシップはエンジニアリングの実践にどう反映されましたか?",
      "a": "チームの全員が個別の育成計画を持っていました。技術文書には図表のテキスト説明が含まれ（視覚障がいのある人のため）、プロセスは非同期で、詳細に文脈が記述されており、さまざまなプロファイルの助けになりました。チームには視覚・聴覚・身体・認知の障がいを持つメンバーが含まれ、実践は全員のために設計されていました（例: 必要に応じて会議での手話通訳）。個別の育成とアクセシビリティを本番環境での技術的成長につなげました。"
     },
     {
      "q": "プラットフォームでAmazon Keyspacesは何に使われましたか?",
      "a": "Keyspacesは、非常に高速である必要があるクエリに使用されたデータベースです。各顧客の与信情報をキー（CPFなど）で整理して保存し、膨大な件数のレコードがあっても与信判断の際にミリ秒単位で応答を返しました。この技術（Apache Cassandra）をチームがすでに熟知していたため選ばれ、コードの書き直しを避け、移行リスクを下げることができました。"
     },
     {
      "q": "FinOpsをどのように示していますか?",
      "a": "Cloudabilityを使用し、AWSのFinOpsとコスト削減の検討を支援しました。サービス別の利用量、適正なリソース容量、予約容量、ストレージ階層、Keyspacesの課金を見直しました。財務画面の金額は説明用のシナリオであり、実現した削減額ではありません。"
     }
    ],
    "leadFeature": {
     "title": "エンジニアリングで実践するインクルーシブなリーダーシップ。",
     "eye": "人材 · アクセシビリティ · デリバリー",
     "body": "チームには視覚、聴覚、身体、認知に障害のあるメンバーがいました。アクセシブルな文書、図のテキスト説明、非同期の業務プロセス、必要に応じた会議でのブラジル手話（LIBRAS）通訳など、全員に配慮した実践を行いました。個人の成長、アクセシビリティ、本番環境への技術的なデリバリーの向上を結び付けた取り組みです。",
     "items": [
      "最大29名を率いた経験",
      "個別の育成計画",
      "技術業務でのアクセシビリティ"
     ]
    }
   }
  },
  "app": {
   "sub": "PLATAFORMA DE CRÉDITO",
   "h": "A plataforma que decide crédito <em>em milissegundos.</em>",
   "d": "Simulação da operação do Data Factory e da Plataforma Única de Crédito: execução de consultas com guard rails, catálogo por domínio com chargeback e alertas de observabilidade das bases críticas. Simulação didática, sem dados de clientes."
  },
  "heroGrad": "linear-gradient(135deg,#1c0800,#c96000)",
  "heroImg": "img/jen-itau-chibi.webp",
  "skipDefaultApp": true,
  "skipDefaultDash": true,
  "metrics": [
   {
    "v": "8.000+",
    "l": "workflows · governança e rastreabilidade"
   },
   {
    "v": "FinOps",
    "l": "AWS · Cloudability e governança de custos"
   },
   {
    "v": "2 PB",
    "l": "de dados em produção nas bases de crédito PF, com monitoramento contínuo"
   },
   {
    "v": "29 profissionais",
    "l": "liderados diretamente como Chapter Lead e Coordenadora de Engenharia de Dados"
   }
  ],
  "lead": "A equipe reunia pessoas com deficiência visual, auditiva, física e cognitiva. As práticas de engenharia eram pensadas para todas elas: documentação acessível, descrição textual dos diagramas, processos assíncronos e intérprete de LIBRAS nas reuniões quando necessário. O trabalho conectou desenvolvimento individual, acessibilidade e evolução técnica das entregas em produção.",
  "dashKpis": [
   "2 PB em produção",
   "FinOps · AWS"
  ],
  "dashLabels": [
   "bases de crédito PF com observabilidade contínua",
   "redução anual de custo na infraestrutura da PUC"
  ],
  "mockItems": [
   {
    "l": "Data Factory · execução unificada de HQL e Spark com guard rails de performance",
    "v": "✓ operacional"
   },
   {
    "l": "Workflows com rastreabilidade end-to-end e contratos de dados por domínio",
    "v": "✓ governado"
   },
   {
    "l": "Catálogo corporativo · acesso controlado · chargeback (rateio de custo por área)",
    "v": "✓ operacional"
   },
   {
    "l": "Grafana + CloudWatch · observabilidade das bases críticas de crédito PF",
    "v": "✓ monitorado"
   },
   {
    "l": "Evolução arquitetural Data Lake → Data Mesh · solução permanece em produção",
    "v": "✓ em produção"
   }
  ],
  "methChips": [
   "SAFe · Agile em escala",
   "AWS Certified",
   "Clean Architecture",
   "Domain-Driven Design",
   "CI/CD · GitLab",
   "DevSecOps",
   "FinOps · AWS Cost Optimization",
   "SRE · SLO",
   "IaC · Terraform"
  ],
  "demos": [
   {
    "kind": "app",
    "t": "Data Factory · Plataforma de Dados",
    "d": "MVP navegável da jornada real do produto: login corporativo, escolha do projeto, transformações HQL, Spark e Python, DAGs relacionados, guard rails, catálogo, linhagem e custo por área. A plataforma conecta Hadoop, Cloudera CDP e AWS para democratizar o acesso sem abrir mão de segurança e governança.",
    "u": "itau-data-factory-app.html",
    "btn": "Abrir Data Factory →"
   },
   {
    "kind": "dash",
    "t": "Observabilidade · Grafana + CloudWatch",
    "d": "Dashboard de observabilidade das bases de crédito PF: latência por camada, saúde dos pipelines e alertas em tempo real integrados ao Teams e a celular corporativo para as bases supercríticas.",
    "u": "itau-observability-dashboard.html",
    "btn": "Ver dashboard →"
   },
   {
    "kind": "dash",
    "t": "FinOps · Custo e Economia AWS",
    "d": "Dashboard de FinOps: custo por serviço, economia alcançada, oportunidades de rightsizing e lifecycle policies.",
    "u": "itau-finops-dashboard.html",
    "btn": "Ver FinOps →"
   },
   {
    "kind": "case",
    "tag": "2º lugar · Hackathon interno",
    "t": "Batalha de Dados · Open Finance",
    "d": "Case completo do hackathon interno: um modelo que estima a capacidade de pagamento juntando dados de vários bancos (cross-bank). Foram 720K clientes analisados e R$3,2B de potencial de carteira identificado.",
    "u": "cases-itau.html",
    "btn": "Ver case completo →",
    "awarded": true
   },
   {
    "kind": "dash",
    "tag": "🥈 Case premiado · Dashboard",
    "t": "Dashboard analítico Open Finance",
    "d": "Score cross-bank, features XGBoost e métricas do case Batalha de Dados em tempo real.",
    "u": "itau-analytics-dashboard.html",
    "btn": "Ver analytics →"
   }
  ],
  "stack": [
   "Python",
   "Java",
   "PySpark",
   "Apache Kafka",
   "AWS Glue",
   "Aura",
   "Keyspaces",
   "AWS Cloud",
   "Data Mesh",
   "EMR",
   "Aurora",
   "Airflow",
   "Step Functions",
   "Cloudera CDP",
   "Terraform",
   "Cloudability"
  ],
  "stintWord": "Fase",
  "stints": [
   {
    "r": "Engenheira Sênior → Tech Lead · Data Factory",
    "per": "2020 a 2021",
    "prob": "Cloudera CDP, Hadoop on-premises e AWS funcionavam como plataformas independentes. Conseguir acesso ao dado exigia conhecimento especializado, permissões em ambientes distintos e execução direta no Hive por linha de comando; para grande parte da organização, o dado existia, mas não era realmente acessível. Além de limitar a produtividade, consultas não otimizadas competiam por recursos do cluster compartilhado e geravam incidentes difíceis de rastrear. O desafio era democratizar o acesso de forma segura, com autonomia por domínio, políticas preventivas, linhagem e responsabilidade explícita sobre consumo.",
    "decSections": [
     {
      "eye": "🏭 Data Factory · Plataforma Única de Processamento de Big Data",
      "body": "Foi criado um produto chamado Data Factory: uma plataforma única de processamento de big data (grandes volumes de dados) que esconde a complexidade da infraestrutura e oferece um único lugar para rodar as análises. Por ela, analistas e engenheiros executavam consultas (HQL e SQL) e aplicações Spark em uma interface só, sem precisar acessar diretamente os servidores. O Data Factory reunia três sistemas diferentes (Hadoop nos servidores locais, Cloudera CDP e AWS) em uma única plataforma e, não importava onde o dado estivesse, ele mandava a execução para o lugar certo de forma automática e transparente para o usuário."
     },
     {
      "eye": "🛡️ Guard Rails · Governança Preventiva",
      "body": "Foi criada uma camada automática que checava cada consulta antes de rodar, funcionando como trilhos de segurança (guard rails). Consultas que poderiam sobrecarregar o ambiente compartilhado eram bloqueadas na hora, junto com uma dica de como corrigir. Assim a governança virou preventiva: em vez de apagar incêndio depois, o problema era barrado antes, protegendo a capacidade dos servidores e reduzindo os incidentes causados por consultas mal feitas."
     },
     {
      "eye": "📋 Catálogo Corporativo · Governança e Chargeback",
      "body": "A plataforma passou a ter um catálogo de dados organizado por assunto (o que a área técnica chama de domínio), controle de quem acessa o quê e um modelo de chargeback, que é cobrar de cada área o custo que ela realmente consumiu (um rateio de custos). Com isso, cada time passou a usar os recursos de forma controlada e transparente, reforçando ao mesmo tempo governança, segurança e disciplina de custos."
     },
     {
      "eye": "🚀 Evolução Arquitetural · Modernização dos Servidores Locais para a Nuvem",
      "body": "O Data Factory virou a ponte entre Hadoop, Cloudera CDP e AWS, viabilizando a modernização da infraestrutura de dados do banco: da maior parte rodando em servidores locais (on-premises) para uma estratégia com a nuvem em primeiro lugar (cloud-first) na AWS. Essa arquitetura permitiu evoluir aos poucos e sustentou, mais tarde, a transição para um modelo de Data Mesh (dados organizados e cuidados por cada área dona do assunto), preservando governança e autonomia."
     }
    ],
    "res": "A plataforma substituiu um processo altamente operacional por uma camada corporativa de execução, governança democrática e observabilidade. A rastreabilidade dos workflows tornou-se completa, os incidentes relacionados à execução de consultas foram reduzidos em aproximadamente 60% (de cerca de 20 para 8 por mês) e o produto abriu o caminho para Data Mesh: mais autonomia aos domínios, acesso mais simples e políticas de segurança aplicadas de forma consistente. A solução foi adotada como padrão corporativo e permaneceu em produção.",
    "metrics": [
     "Tech Lead em < 1 mês",
     "100% de rastreabilidade",
     "−60% de incidentes",
     "Data Mesh · acesso democratizado"
    ],
    "stack": [
     "AWS",
     "Cloudera CDP",
     "Python",
     "Angular",
     "PySpark",
     "HQL",
     "Airflow",
     "Step Functions",
     "Splunk",
     "GitLab CI/CD"
    ]
   },
   {
    "r": "Technical Product Manager · Formação e Engenharia de Dados",
    "per": "2021 a 2022",
    "prob": "Após a consolidação do Data Factory, o principal desafio passou a ser escalar a capacidade técnica da organização. Era necessário acelerar a formação de dezenas de engenheiros em AWS e Python, disseminar boas práticas de engenharia de dados e estruturar uma cultura de aprendizado contínuo que sustentasse a expansão da estratégia de cloud. Paralelamente, a transição para o papel de Technical Product Manager exigia ampliar a atuação para gestão de produtos, desenvolvimento organizacional e liderança técnica em larga escala.",
    "decSections": [
     {
      "eye": "🎓 Programa Corporativo de Capacitação",
      "body": "Foi estruturado um programa contínuo de formação composto por bootcamps, workshops e trilhas técnicas em AWS Cloud e Python. A iniciativa priorizou a formação de multiplicadores internos, permitindo que novos líderes assumissem a evolução dos programas de capacitação e garantissem sua continuidade."
     },
     {
      "eye": "🎤 Disseminação de Conhecimento",
      "body": "A estratégia foi complementada por apresentações em fóruns técnicos internos para milhares de colaboradores, abordando engenharia de dados, computação em nuvem, arquitetura distribuída e desenvolvimento de liderança técnica. O objetivo era ampliar o alcance do conhecimento para além das equipes diretamente envolvidas nos projetos."
     },
     {
      "eye": "☁️ Referência Técnica AWS · Certificação e Multiplicação",
      "body": "Durante o processo de modernização, a atuação como referência técnica em AWS permitiu apoiar e acelerar a adoção de cloud em múltiplas equipes do banco. A certificação AWS foi obtida nesse período, formalizando competências já aplicadas em produção. O modelo de multiplicadores garantiu continuidade e escala ao programa de capacitação além da equipe direta."
     }
    ],
    "res": "O programa estabeleceu uma estrutura contínua de desenvolvimento técnico, formando dezenas de profissionais e preparando novos líderes para conduzir a evolução da engenharia de dados. A iniciativa consolidou a transição para uma atuação orientada à estratégia de produto e ao desenvolvimento organizacional.",
    "metrics": [
     "Certificação AWS",
     "Dezenas de profissionais capacitados",
     "Milhares em fóruns técnicos",
     "Programa corporativo estabelecido"
    ],
    "stack": [
     "AWS",
     "Java",
     "Python",
     "Terraform",
     "Step Functions",
     "Lambda"
    ]
   },
   {
    "r": "Chapter Lead · Plataforma Única de Crédito (PUC)",
    "per": "2022 a 2024",
    "prob": "A Plataforma Única de Crédito precisava sustentar bases críticas em escala, com observabilidade contínua, governança de custos na AWS e desenvolvimento técnico de uma equipe diversa.",
    "decSections": [
     {
      "eye": "⚡ Plataforma de Crédito em Escala",
      "body": "A arquitetura combinou Amazon Aurora, Amazon Redshift, Amazon S3 e Amazon Keyspaces para sustentar cargas críticas de análise de crédito com alta disponibilidade e resiliência. O Keyspaces atendia consultas de baixa latência por chave; o Aurora suportava dados transacionais; o Redshift organizava consumo analítico; e o S3 preservava dados em escala. O desenho reduzia acoplamento entre decisão operacional, histórico e análise sem expor qualquer informação de cliente."
     },
     {
      "eye": "📡 Observabilidade Corporativa",
      "body": "Observabilidade é conseguir enxergar, em tempo real, se tudo está funcionando. Foi montado esse acompanhamento com o Grafana (os painéis) ligado ao AWS CloudWatch (a coleta de métricas da nuvem), o que permitiu ver a saúde dos processos ao vivo, disparar alertas automáticos e ter mais previsibilidade sobre as bases mais críticas de crédito de pessoa física."
     },
     {
      "eye": "💰 FinOps · Controle e Redução de Custos da Nuvem",
      "body": "O Cloudability foi usado para apoiar as demandas de FinOps e redução de custos na AWS, junto à revisão de consumo por serviço, rightsizing, capacidade reservada, armazenamento em camadas e cobrança do Keyspaces. Os valores nas telas financeiras são cenários didáticos; não representam economia realizada."
     },
     {
      "eye": "🛡️ Gestão de Incidente Crítico",
      "body": "Coordenação técnica de um incidente crítico de segurança que envolveu várias equipes ao mesmo tempo, garantindo rápida estabilização do ambiente e a continuidade da operação. Os detalhes técnicos são preservados por confidencialidade."
     },
     {
      "eye": "🤝 Desenvolvimento Organizacional",
      "body": "A equipe reunia pessoas com deficiência visual, auditiva, física e cognitiva. As práticas de engenharia eram pensadas para todas elas: documentação acessível, descrição textual dos diagramas, processos assíncronos e intérprete de LIBRAS nas reuniões quando necessário. O trabalho conectou desenvolvimento individual, acessibilidade e evolução técnica das entregas em produção."
     }
    ],
    "res": "A atuação integrou monitoramento contínuo das bases de crédito, análise de custos com Cloudability e desenvolvimento de até 29 profissionais. Acessibilidade e planos individuais de desenvolvimento fizeram parte da evolução técnica das entregas em produção.",
    "metrics": [
     "2 PB monitorados continuamente",
     "FinOps · governança de custos",
     "Grafana + CloudWatch",
     "29 profissionais liderados"
    ],
    "stack": [
     "AWS Keyspaces",
     "Java",
     "Aurora",
     "PySpark",
     "AWS Glue",
     "EMR",
     "Athena",
     "Lambda",
     "Grafana",
     "CloudWatch",
     "Scala",
     "Cloudability"
    ]
   }
  ],
  "arch": [
   [
    "Fontes",
    "sistemas transacionais · on-premises · Cloudera CDP"
   ],
   [
    "Batch",
    "Hive · Glue · EMR · PySpark"
   ],
   [
    "Persistência",
    "Keyspaces · Aurora · baixa latência e transacional"
   ],
   [
    "Lake",
    "S3 · 2 PB · Parquet · Data Mesh"
   ],
   [
    "Analytics",
    "Redshift · Athena · Power BI"
   ],
   [
    "Observabilidade",
    "Grafana · CloudWatch · SLOs · alertas"
   ]
  ],
  "stat3": [
   {
    "v": "4 funções",
    "l": "Engenharia Sênior · Tech Lead · TPM · Chapter Lead"
   },
   {
    "v": "3,5 anos",
    "l": "de atuação com plataformas que permanecem em produção: Data Factory e Plataforma Única de Crédito"
   },
   {
    "v": "100%",
    "l": "da equipe alcançando entregas sênior em produção, sustentado por planos individuais de desenvolvimento"
   }
  ],
  "layers": [
   {
    "icon": "🏭",
    "title": "Data Factory · Processamento e Democratização de Dados",
    "desc": "Padrão Façade sobre Cloudera CDP, Hadoop e AWS: uma porta única de execução para HQL, SQL e PySpark, com roteamento automático para o substrato correto. Guard rails como Policy-as-Code, catálogo por domínio e chargeback embutidos na plataforma. Padrão corporativo em produção desde 2021."
   },
   {
    "icon": "🛡️",
    "title": "Guard Rails · Governança Preventiva",
    "desc": "Policy-as-Code versionado no repositório: valida HQL antes da execução e bloqueia SELECT *, CROSS JOIN sem filtro e ausência de partição em tabelas grandes. Cluster compartilhado protegido, incidentes por consulta mal escrita eliminados na origem."
   },
   {
    "icon": "📋",
    "title": "Catálogo Corporativo · Governança e Chargeback",
    "desc": "Domínios versionados no catálogo, RBAC por área e chargeback automático sobre o uso da plataforma. Governança embutida no fluxo de execução, não como processo paralelo."
   },
   {
    "icon": "🗃️",
    "title": "PUC · Plataforma Única de Crédito",
    "desc": "A Plataforma Única de Crédito combina Amazon Aurora, Redshift, S3 e Keyspaces para separar dados transacionais, consumo analítico, armazenamento em escala e consultas de baixa latência. O desenho prioriza resiliência, rastreabilidade e decisão de crédito com resposta previsível."
   },
   {
    "icon": "📡",
    "title": "Observabilidade · Grafana + CloudWatch",
    "desc": "Grafana + AWS CloudWatch sobre 2 PB+ de dados de crédito PF: painéis de saúde por camada, alertas automáticos por deterioração de SLA. Antes: detecção reativa, o usuário relatava o problema primeiro."
   },
   {
    "icon": "🤝",
    "title": "Liderança · Equipe de até 29 Profissionais",
    "desc": "Atuação como Chapter Lead e Coordenadora de Engenharia de Dados, com plano individual de desenvolvimento para cada pessoa, documentação acessível e práticas inclusivas. A evolução técnica do time levou 100% dos profissionais a entregas sênior em produção."
   }
  ],
  "codeDisclaimer": "⚠️ Modelos didáticos de código, com dados fictícios. Nenhum trecho contém credenciais, nomes de recursos internos, dados de clientes ou informações sensíveis do Itaú Unibanco ou de qualquer outro projeto.",
  "code": [
   {
    "tab": "HQL Guard Rails",
    "label": "[Modelo] Validador de consultas (HQL): o trilho de segurança do Data Factory para o Hadoop compartilhado (Python)",
    "note": "O Data Factory conferia toda consulta (HQL) antes de rodar no Hive. Consultas pesadas demais (por exemplo, SELECT *, que lê a tabela inteira, uma junção sem filtro ou a falta de filtro por data em tabelas gigantes) eram barradas na hora, já devolvendo o ajuste necessário. Isso protegia a capacidade dos servidores, que eram compartilhados por várias equipes.",
    "code": "# Exemplo didático (dados e nomes fictícios)\nimport re\n\nRULES = [\n    (r'SELECTs+*s+FROM',\n     'Use colunas específicas em vez de SELECT *, que lê a tabela inteira e encarece o cluster'),\n    (r'CROSSs+JOIN',\n     'CROSS JOIN sem filtro pode explodir os recursos do cluster compartilhado'),\n    (r'FROMs+w+s*(?:WHEREs+(?!.*parti)|Z)',\n     'Adicione filtro por partição de data, obrigatório em tabelas grandes'),\n]\n\ndef validate_hql(query: str) -> dict:\n    issues = []\n    for pattern, msg in RULES:\n        if re.search(pattern, query, re.IGNORECASE):\n            issues.append(msg)\n    return {\n        'approved': len(issues) == 0,\n        'issues': issues,\n        'action': 'bloqueado' if issues else 'aprovado para execução'\n    }\n\n# Guard rail em ação\nresult = validate_hql(\"SELECT * FROM transacoes WHERE status = 'ativo'\")\n# → {'approved': False, 'issues': ['Use colunas específicas...', 'Adicione filtro por partição...']}"
   },
   {
    "tab": "FinOps · PUC",
    "label": "[Modelo] Análise de custo AWS para otimização FinOps da PUC (Python + boto3)",
    "note": "Revisão de custos por serviço, rightsizing, capacidade reservada, armazenamento em camadas e cobrança do Keyspaces. Valores monetários das telas financeiras são cenários didáticos, não comprovação de economia realizada.",
    "code": "# Exemplo didático (dados e nomes fictícios)\nimport boto3\nfrom datetime import datetime, timedelta\n\nce = boto3.client('cost-explorer', region_name='us-east-1')\n\ndef analyze_puc_costs(days_back=30):\n    end   = datetime.today().strftime('%Y-%m-%d')\n    start = (datetime.today() - timedelta(days=days_back)).strftime('%Y-%m-%d')\n\n    response = ce.get_cost_and_usage(\n        TimePeriod={'Start': start, 'End': end},\n        Granularity='MONTHLY',\n        Filter={'Tags': {'Key': 'Project', 'Values': ['puc-credit']}},\n        GroupBy=[{'Type': 'DIMENSION', 'Key': 'SERVICE'}],\n        Metrics=['UnblendedCost']\n    )\n\n    costs = {}\n    for result in response['ResultsByTime']:\n        for group in result['Groups']:\n            svc   = group['Keys'][0]\n            value = float(group['Metrics']['UnblendedCost']['Amount'])\n            costs[svc] = costs.get(svc, 0) + value\n\n    optimizations = []\n    if costs.get('Amazon EMR', 0) > 10000:\n        optimizations.append('EMR: rightsizing + Spot Instances para workloads batch tolerantes a falha')\n    if costs.get('Amazon Keyspaces', 0) > 5000:\n        optimizations.append('Keyspaces: revisar capacity mode (on-demand vs provisioned por tabela)')\n    if costs.get('Amazon S3', 0) > 2000:\n        optimizations.append('S3: lifecycle policy com Intelligent-Tiering para objetos de acesso irregular')\n\n    return {'custos_por_servico': costs, 'oportunidades': optimizations}\n\n# Resultado fictício ilustrativo\n# → {'oportunidades': ['EMR: rightsizing...', 'Keyspaces: capacity...', 'S3: lifecycle...']}"
   },
   {
    "tab": "Credit Pipeline",
    "label": "Feature engineering para risco de crédito, AWS Glue (PySpark)",
    "note": "Imagine pegar todo o histórico de transações de um cliente (o que entrou e o que saiu da conta) e resumir em poucos números que descrevem o comportamento dele: quanto movimenta por mês, o quanto isso varia, quanto ganha, quanto gasta e qual fatia da renda já está comprometida com dívidas. É isso que este programa faz, para milhões de clientes ao mesmo tempo. Esses números viram a matéria-prima que o modelo usa para calcular o score de crédito. No jargão técnico, transformar dados crus nesses números úteis se chama feature engineering.",
    "code": "# Exemplo didático (dados e nomes fictícios)\nfrom awsglue.context import GlueContext\nfrom pyspark.context import SparkContext\nfrom pyspark.sql import functions as F\n\nsc = SparkContext()\ngc = GlueContext(sc)\nspark = gc.spark_session\n\nraw = gc.create_dynamic_frame.from_catalog(\n    database=\"datalake_credit\", table_name=\"transactions_trusted\"\n).toDF()\n\nfeatures = raw.groupBy(\"cpf_hash\").agg(\n    F.avg(\"amount\").alias(\"avg_tx_30d\"),\n    F.stddev(\"amount\").alias(\"std_tx_30d\"),\n    F.count(\"*\").alias(\"tx_count_30d\"),\n    F.sum(F.when(F.col(\"type\")==\"credit\", F.col(\"amount\")).otherwise(0)).alias(\"income_30d\"),\n    F.sum(F.when(F.col(\"type\")==\"debit\",  F.col(\"amount\")).otherwise(0)).alias(\"spend_30d\")\n).withColumn(\"dsr\", F.col(\"spend_30d\") / F.col(\"income_30d\"))\n\ngc.write_dynamic_frame.from_options(\n    frame=gc.create_dynamic_frame.from_dataframe(features, gc),\n    connection_type=\"s3\",\n    connection_options={\"path\": \"s3://datalake-credit/features/\"},\n    format=\"parquet\")"
   },
   {
    "tab": "Observability",
    "label": "Stack de observabilidade com CloudWatch + Grafana (Python + boto3)",
    "note": "Este código coloca sensores em cada execução dos processos de crédito e manda os números para o CloudWatch (o serviço de monitoramento da AWS): quantos registros passaram, quanto tempo levou e se algum dado se perdeu no caminho. Ele também liga um alarme automático, que dispara quando a demora passa do limite (aqui, meio segundo) e avisa a equipe. Esse mesmo aviso alimenta os painéis no Grafana e os alertas em tempo real no Teams e no celular corporativo das bases mais críticas.",
    "code": "# Exemplo didático (dados e nomes fictícios)\nimport boto3\n\ncw = boto3.client(\"cloudwatch\", region_name=\"us-east-1\")\n\ndef publish_pipeline_metrics(pipeline_id, records_in, records_out, latency_ms):\n    cw.put_metric_data(\n        Namespace=\"CreditPlatform/Pipeline\",\n        MetricData=[\n            {\"MetricName\":\"RecordsProcessed\",\"Value\":records_out,\"Unit\":\"Count\",\n             \"Dimensions\":[{\"Name\":\"Pipeline\",\"Value\":pipeline_id}]},\n            {\"MetricName\":\"ProcessingLatencyMs\",\"Value\":latency_ms,\"Unit\":\"Milliseconds\",\n             \"Dimensions\":[{\"Name\":\"Pipeline\",\"Value\":pipeline_id}]},\n            {\"MetricName\":\"DataLossRate\",\n             \"Value\":(records_in-records_out)/max(records_in,1)*100,\"Unit\":\"Percent\",\n             \"Dimensions\":[{\"Name\":\"Pipeline\",\"Value\":pipeline_id}]}\n        ]\n    )\n    cw.put_metric_alarm(AlarmName=f\"{pipeline_id}-latency-high\",\n        MetricName=\"ProcessingLatencyMs\", Namespace=\"CreditPlatform/Pipeline\",\n        Threshold=500, ComparisonOperator=\"GreaterThanThreshold\", Period=60,\n        EvaluationPeriods=2, Statistic=\"Average\",\n        AlarmActions=[SNS_ALERT_TOPIC_ARN])"
   }
  ],
  "faq": [
   {
    "q": "O que é o Data Factory e por que permanece em produção?",
    "a": "O Data Factory é uma plataforma corporativa que processa grandes volumes de dados e organiza o acesso a eles com governança. A ideia central é oferecer uma porta de entrada simples para uma infraestrutura complicada por trás (Cloudera CDP, Hadoop e AWS). Esse tipo de solução, uma fachada que esconde a complexidade, é o que a engenharia chama de padrão Façade. Analistas e engenheiros rodavam consultas (HQL, SQL) e Spark por essa interface única, sem precisar saber onde o dado estava fisicamente. Trilhos de segurança (guard rails), escritos como regras no próprio código (Policy-as-Code), barravam na hora as consultas perigosas (como um SELECT *, que lê a tabela inteira). Um catálogo organizado por assunto (domínio), com controle de acesso e chargeback (rateio de custo por área), completa a governança. Virou padrão corporativo e segue em produção, sustentando a evolução da estratégia de dados do banco."
   },
   {
    "q": "O que é SAFe e como foi aplicado no Itaú?",
    "a": "SAFe (Scaled Agile Framework) é um framework de agilidade em escala para coordenação de múltiplas squads: PI Planning, sprints sincronizados e retrospectivas coletivas. No Itaú, a aplicação era rigorosa e disciplinada, demonstrando como metodologia ágil entrega resultados consistentes quando executada com maturidade organizacional."
   },
   {
    "q": "O que é Chapter Lead e qual era o escopo de gestão?",
    "a": "Chapter Lead é a referência técnica de um grupo de pessoas com a mesma especialidade: define boas práticas, orienta o crescimento técnico e lidera por influência, não por hierarquia. No Itaú, o papel foi exercido junto com a coordenação de Engenharia de Dados, com gestão direta de até 29 profissionais, o que incluía avaliação de desempenho, plano de desenvolvimento de cada pessoa e recrutamento. Ou seja, liderança técnica e gestão de gente ao mesmo tempo."
   },
   {
    "q": "Como a liderança inclusiva se reflete na prática de engenharia?",
    "a": "Cada pessoa da equipe tinha um plano individual de desenvolvimento. A documentação técnica incluía a descrição em texto dos diagramas (para quem tem deficiência visual) e os processos eram assíncronos, com contexto escrito em detalhe, o que ajuda diferentes perfis. A equipe reunia pessoas com deficiência visual, auditiva, física e cognitiva, e as práticas eram pensadas para todas elas (por exemplo, intérprete de LIBRAS nas reuniões quando necessário). O trabalho conectou desenvolvimento individual, acessibilidade e evolução técnica das entregas em produção."
   },
   {
    "q": "Para que servia o Amazon Keyspaces na plataforma?",
    "a": "O Keyspaces era o banco de dados usado nas consultas que precisavam ser muito rápidas: guardava as informações de crédito de cada cliente organizadas por uma chave (como o CPF) e devolvia a resposta em milissegundos na hora de decidir um crédito, mesmo com um volume enorme de registros. Foi escolhido porque a equipe já dominava a tecnologia por trás dele (o Apache Cassandra), o que evitou reescrever código e reduziu o risco da migração."
   },
   {
    "q": "Como o FinOps é apresentado?",
    "a": "O Cloudability foi usado para apoiar as demandas de FinOps e redução de custos na AWS, junto à revisão de consumo por serviço, rightsizing, capacidade reservada, armazenamento em camadas e cobrança do Keyspaces. Os valores nas telas financeiras são cenários didáticos; não representam economia realizada."
   }
  ],
  "leadFeature": {
   "title": "Liderança inclusiva, na prática da engenharia.",
   "eye": "Pessoas · acessibilidade · entregas",
   "body": "A equipe reunia pessoas com deficiência visual, auditiva, física e cognitiva. As práticas de engenharia eram pensadas para todas elas: documentação acessível, descrição textual dos diagramas, processos assíncronos e intérprete de LIBRAS nas reuniões quando necessário. O trabalho conectou desenvolvimento individual, acessibilidade e evolução técnica das entregas em produção.",
   "items": [
    "Até 29 profissionais liderados",
    "Plano individual de desenvolvimento",
    "Acessibilidade na rotina técnica"
   ]
  }
 },
 {
  "f": "fin",
  "flag": "br",
  "n": "Creditas",
  "dom": "creditas.com",
  "per": "2022",
  "r": "Engenheira de Dados",
  "d": "Na Creditas, reestruturei o data lake e programei pipelines incrementais com Apache Hudi. Também implementei qualidade automatizada com Great Expectations, conduzi uma POC do lakeFS e automatizei o provisionamento e a entrega da plataforma.",
  "heroChips": [
   "Amazon Web Services · Certificada",
   "Python · Scala",
   "Processamento de Dados em Batch · Ingestão Incremental",
   "Fundação da Plataforma Corporativa de Dados"
  ],
  "t": {
   "en": {
    "r": "Data Engineer",
    "per": "2022",
    "d": "Built the foundation of the AWS data stack: a restructured 13 TB data lake, incremental ingestion with Hudi, automated quality with Great Expectations, a lakeFS proof of concept and 100% infrastructure as code.",
    "heroChips": [
     "Amazon Web Services · Certified",
     "Python · Scala",
     "Batch Data Processing · Incremental Ingestion",
     "Enterprise Data Platform Foundation"
    ],
    "app": {
     "sub": "DATA LAKE & QUALITY",
     "h": "The lake that stops bad data <em>before it gets in.</em>",
     "d": "Simulation of the Creditas platform: incremental pipelines with Apache Hudi, a catalog of the Raw, Trusted and Refined zones, and Great Expectations alerts blocking failed promotions. Didactic simulation, no customer data."
    },
    "metrics": [
     {
      "v": "13 TB",
      "l": "data lake optimized and restructured on AWS"
     },
     {
      "v": "−35%",
      "l": "storage cost via FinOps practices"
     },
     {
      "v": "selective reads",
      "l": "Parquet, partitioning and pruning cut the bytes scanned per query"
     },
     {
      "v": "100%",
      "l": "infrastructure as code (Terraform), with Docker and Kubernetes"
     }
    ],
    "cliLines": [
     "13 TB · data lake optimized on AWS",
     "−35% storage cost (FinOps)",
     "queries with fewer bytes read and more predictable latency",
     "Great Expectations · automatic quality on every pipeline",
     "100% infrastructure as code: Terraform + Docker + Kubernetes"
    ],
    "dashKpis": [
     "13 TB",
     "−35%"
    ],
    "dashLabels": [
     "DATA LAKE · AWS S3",
     "STORAGE COST (FINOPS)"
    ],
    "mockItems": [
     {
      "l": "Incremental ingestion · Apache Hudi",
      "v": "✓ active"
     },
     {
      "l": "Data quality · Great Expectations",
      "v": "✓ active"
     },
     {
      "l": "Query efficiency",
      "v": "selective reads"
     },
     {
      "l": "Infrastructure as code · Terraform",
      "v": "100% IaC"
     },
     {
      "l": "Storage savings (FinOps)",
      "v": "−35%"
     }
    ],
    "demos": [
     {
      "kind": "app",
      "t": "Interactive Data Platform · the case 6 decisions",
      "d": "Interactive walkthrough of each architectural decision: Parquet vs CSV query simulator, an Apache Hudi upsert with a commit timeline, the Great Expectations quality gate, scenarios for the 3 protection layers, the 5 criteria of the lakeFS POC and a live terraform plan/apply.",
      "u": "creditas-dataplatform-app.html",
      "btn": "Open demonstration →"
     },
     {
      "kind": "app",
      "t": "Credit Risk Analyzer · Creditas",
      "d": "Interactive simulation: adjust income, history and collateral and watch the credit engine respond. Feature preparation runs in PySpark; the GBTClassifier combines several decision trees to estimate default risk; and the policy converts the score into approval, limit and rate. All values are demonstrative.",
      "u": "creditas-credit-app.html",
      "btn": "Open analyzer →"
     }
    ],
    "stints": [
     {
      "r": "Data Engineer · Data Engineering Foundation",
      "per": "2022",
      "prob": "The data lake had reached 13 TB with no consistent organization, partitioning or lifecycle strategy. Files with different structure and compression patterns increased the volume read by queries. Historical data sat in storage classes incompatible with its access frequency, and some loads required extensive reprocessing even when few records had changed. Three direct impacts: rising storage cost, credit queries taking minutes, and the risk of invalid data reaching analyses and models.",
      "decSections": [
       {
        "eye": "🏗️ Data Lake Restructuring · Parquet + Snappy",
        "body": "The data lake was reorganized into three zones with distinct responsibilities: Raw (raw data preserved), Trusted (validated and standardized) and Refined (ready for consumption). This separation prevented unvalidated data from reaching analyses. Data was converted to Parquet with Snappy compression and partitioned by date and product, letting Spark, Athena and Redshift Spectrum skip irrelevant partitions during reads. The combination reduced bytes scanned, cost per query and latency variability."
       },
       {
        "eye": "📥 Incremental Processing · Apache Hudi",
        "body": "Apache Hudi was adopted for loads that needed to insert or update records without rebuilding the entire dataset. Changes started being identified by key and processed incrementally, reducing reprocessing and making it more efficient to maintain tables subject to frequent updates. Hudi controls the logical evolution of tables: commits, valid files and change history over time."
       },
       {
        "eye": "✅ Automated Quality · Great Expectations",
        "body": "Great Expectations was deployed to validate data during pipeline execution, before promotion to the consumption layers. Rules checked for required columns, expected types, critical fields being filled in, values within valid ranges, unique identifiers and volume consistent with the historical pattern. When a critical rule failed, the pipeline halted the promotion and isolated the load, preventing invalid data from reaching reports and risk models."
       },
       {
        "eye": "🔐 S3 Versioning + Lifecycle + Hudi · Three Complementary Layers",
        "body": "The three capabilities were combined because they act at different levels. Apache Hudi controls the logical evolution of tables: upserts, incremental processing and commit history. S3 Versioning physically protects objects: when a file is overwritten or deleted, the previous version is preserved for recovery, protection Hudi does not offer at the object level. S3 Lifecycle prevents versioning from causing unbounded growth: it defines how long previous versions are kept and when they can be archived or removed. Each layer has a distinct responsibility, and the three complement each other with no overlap."
       },
       {
        "eye": "🔬 lakeFS POC · Decision Not to Adopt",
        "body": "A proof of concept was run with lakeFS to evaluate introducing Git-like versioning into the data lake: branches, commits, merges and rollback to previous states. The POC considered five dimensions: need for isolated branches, recovery of overwritten objects, integration with the AWS stack, operational impact of a new metadata layer, and retention cost. The analysis showed the priority need was recovering data after accidental overwrites, and the pipelines showed no demand for branches or commits spanning multiple objects. The decision was to keep the native combination: S3 Versioning, lifecycle and Apache Hudi. lakeFS remained an option for future evolution, should a concrete need for parallel experimentation or merge-based publishing arise. The initiative showed that architecture is not about picking the most sophisticated tool, but the one that meets requirements with the best balance of capability, cost and operational complexity."
       },
       {
        "eye": "📦 Infrastructure as Code · Terraform + Docker + Kubernetes",
        "body": "The platform infrastructure was entirely provisioned with Terraform: S3 buckets and configurations, versioning and lifecycle policies, EMR clusters, policies and permissions. Jobs were packaged in Docker containers, ensuring consistency between development and execution. Compatible workloads ran on Kubernetes, and larger-scale distributed processing used EMR clusters with Spot Instances."
       }
      ],
      "res": "The 13 TB data lake started operating with selective reads, a smaller volume scanned and 35% lower storage cost. Invalid data stopped reaching analyses and risk models: every batch was validated by Great Expectations before promotion. Full reprocessing was eliminated on tables using Apache Hudi, which began processing only the delta between commits. Objects became recoverable via S3 Versioning, with retention and cost controlled by lifecycle. Infrastructure, 100% declared in Terraform, made environments reproducible and auditable. The evolution happened in agile cycles, with a prioritized technical backlog, incremental deliveries, continuous review and CI/CD automation. And the lakeFS POC proved architectural maturity: no layer beyond what was needed.",
      "metrics": [
       "13 TB optimized",
       "−35% cost",
       "selective reads and predictable cost",
       "Docker · Kubernetes · Terraform"
      ]
     }
    ],
    "arch": [
     [
      "Sources",
      "credit · product"
     ],
     [
      "ETL",
      "Glue · EMR Spark · Docker/K8s"
     ],
     [
      "Lake",
      "S3 · 13 TB · Parquet · Hudi"
     ],
     [
      "Quality",
      "Great Expectations · automatic validation"
     ],
     [
      "Query",
      "Redshift Spectrum · Athena"
     ],
     [
      "Protection & FinOps",
      "S3 Versioning · lifecycle · Terraform"
     ]
    ],
    "stat3": [
     {
      "v": "13 TB",
      "l": "data lake restructured with Parquet partitioned by date/product"
     },
     {
      "v": "35%",
      "l": "storage cost reduction via lifecycle and Snappy compression"
     },
     {
      "v": "100%",
      "l": "infrastructure as code (Terraform), with jobs on Docker and Kubernetes"
     }
    ],
    "layers": [
     {
      "icon": "📥",
      "title": "Ingestion · Glue + EMR + Hudi",
      "desc": "Glue jobs for incremental ingestion from relational sources and credit APIs, and EMR for large-scale processing with PySpark. Tables were managed with Apache Hudi, which inserts and updates new records without reprocessing the entire table (incremental ingestion) and keeps a version history of the data."
     },
     {
      "icon": "🗃️",
      "title": "Data Lake · S3 Parquet",
      "desc": "Three zones: raw (raw data), trusted (validated) and refined (aggregated). Parquet compressed with Snappy. Partitioning by date and product makes each query read only the needed slice, making it much faster."
     },
     {
      "icon": "📈",
      "title": "Query · Redshift Spectrum + Athena",
      "desc": "Redshift Spectrum for querying directly on S3 without moving data. Athena for ad-hoc exploration by the data science team. Athena is serverless; Spectrum uses Redshift compute capacity and has its own billing. They are different operational models."
     },
     {
      "icon": "📦",
      "title": "Infra · Docker + Kubernetes + Terraform",
      "desc": "Jobs were packaged into Docker containers and ran on Kubernetes and EMR clusters, with the entire infrastructure created via code (Terraform). Environments spun up and down on demand, with Spot Instances in batch processing to cut cost."
     },
     {
      "icon": "✅",
      "title": "Quality · Great Expectations",
      "desc": "Great Expectations is the tool that defines \"data contracts\": correct format, values within the expected range, no forbidden nulls. If a rule fails, the pipeline stops before writing bad data into the lake. This protects every model and report that depends on the refined layer."
     },
     {
      "icon": "⚙️",
      "title": "FinOps · S3 Lifecycle",
      "desc": "Automatic policies: data older than 90 days moves to S3 Infrequent Access (cheaper), and data older than 180 days moves to Glacier (archival). Cost dropped 35% with an archive-access plan; Glacier Flexible Retrieval and Deep Archive require restoration before reading."
     }
    ],
    "codeNotes": [
     {
      "tab": "Terraform EMR",
      "label": "EMR cluster with auto-scaling and spot instances (Terraform HCL)",
      "note": "This Terraform code creates the processing cluster (EMR) already configured, with no manual setup. It uses Spot machines, much cheaper because they are idle AWS capacity, and it grows or shrinks on its own based on workload (auto-scaling). Since everything is declared in code, the same environment can be recreated identically at any time."
     },
     {
      "tab": "S3 Lifecycle",
      "label": "Automatic lifecycle policy in the data lake (Python · boto3)",
      "note": "Defines rules that move data on their own as it ages: up to 90 days it stays in fast, more expensive storage, then moves to a cheaper tier, and at 180 days to the \"cold archive\" (Glacier), the cheapest of all. Temporary data is deleted after 30 days. This way storage cost drops automatically, with storage classes and restoration workflows defined for each access pattern."
     },
     {
      "tab": "Great Expectations",
      "label": "Data-quality suite for the data lake refined layer (Python)",
      "note": "Great Expectations defines expectations (contracts) about the data: the national ID can never be null, the score must be between 0 and 1000, the DSR between 0 and 1. If any rule fails, the pipeline stops automatically before writing to the refined layer, protecting every downstream model and report."
     },
     {
      "tab": "Credit Features",
      "label": "Feature engineering for credit risk, PySpark + MLlib (Python)",
      "note": "Turns each customer transaction history (grouped by national ID) into numbers the credit model understands, the so-called features: number of transactions, average ticket, spending variation, income estimated from deposits, spending from withdrawals, category diversity and the DSR (the share of income already committed to debt). The result is written ready for the model to consume."
     }
    ],
    "faq": [
     {
      "q": "Why Parquet with Snappy instead of CSV?",
      "a": "CSV stores plain text, with no compression, no column types, no column skipping. Parquet stores data in columns (reads only what the query needs), compressed with Snappy (lossless, fast to decompress). For credit queries that read 3-4 columns out of 13 TB, this cut the scan by ~90%."
     },
     {
      "q": "How does the automatic lifecycle work?",
      "a": "S3 policies move data automatically by \"temperature\": recent data stays in Standard (frequent access), after 90 days it moves to Infrequent Access (40% cheaper), after 180 days to Glacier (80% cheaper). Glacier Flexible Retrieval and Deep Archive require restoration, not transparent query redirection. Athena queries over restored objects became available in 2023 and are not attributed to this 2022 project."
     },
     {
      "q": "What is Redshift Spectrum and when should it be used?",
      "a": "Spectrum is a Redshift extension that runs queries directly on S3 files without importing data into the cluster. Perfect for history: data older than 90 days stays in the lake (cheap) but is still queryable via SQL. When data is accessed frequently, that is when it is worth moving it into the Redshift cluster."
     },
     {
      "q": "Why use Hudi and S3 Versioning together if they seem to solve the same problem?",
      "a": "Because they act at different levels. Hudi controls the logical evolution of tables: upserts, incremental processing, commit history and which files belong to a table valid version. S3 Versioning physically protects objects: if a file is overwritten or deleted by mistake, the previous version can be recovered. Hudi knows which files form a table consistent state but does not protect against accidental overwriting of the physical object. S3 Versioning knows different versions of an object exist but does not understand transactions or business keys. Lifecycle controls the cost of that protection by defining how long versions are kept."
     },
     {
      "q": "Why was lakeFS not adopted?",
      "a": "A POC was run evaluating data branches, commits and merges. The analysis showed the priority need was recovering objects after accidental overwrites, and the pipelines showed no demand that justified a new operational layer. The combination of S3 Versioning, lifecycle and Apache Hudi already met the requirements with native AWS integration, lower complexity and no new metadata to maintain. lakeFS remains an option for future scenarios requiring parallel experimentation or merge-based publishing."
     }
    ]
   },
   "es": {
    "r": "Ingeniera de Datos",
    "per": "2022",
    "d": "Fundación de la stack de datos en AWS: data lake de 13 TB reestructurado, ingesta incremental con Hudi, calidad automatizada con Great Expectations, POC de lakeFS e infraestructura 100% como código.",
    "heroChips": [
     "Amazon Web Services · Certificada",
     "Python · Scala",
     "Procesamiento de Datos por Lotes · Ingesta Incremental",
     "Fundación de la Plataforma Corporativa de Datos"
    ],
    "app": {
     "sub": "DATA LAKE Y CALIDAD",
     "h": "El lake que frena el dato malo <em>antes de que entre.</em>",
     "d": "Simulación de la plataforma de Creditas: pipelines incrementales con Apache Hudi, catálogo de las zonas Raw, Trusted y Refined y alertas de Great Expectations bloqueando promociones fallidas. Simulación didáctica, sin datos de clientes."
    },
    "metrics": [
     {
      "v": "13 TB",
      "l": "data lake optimizado y reestructurado en AWS"
     },
     {
      "v": "−35%",
      "l": "de costo de almacenamiento con prácticas de FinOps"
     },
     {
      "v": "lectura selectiva",
      "l": "Parquet, particionamiento y pruning reducen los bytes escaneados por consulta"
     },
     {
      "v": "100%",
      "l": "de la infraestructura como código (Terraform), con Docker y Kubernetes"
     }
    ],
    "cliLines": [
     "13 TB · data lake optimizado en AWS",
     "−35% de costo de almacenamiento (FinOps)",
     "consultas con menos bytes leídos y latencia más predecible",
     "Great Expectations · calidad automática en cada pipeline",
     "infra 100% en código: Terraform + Docker + Kubernetes"
    ],
    "dashKpis": [
     "13 TB",
     "−35%"
    ],
    "dashLabels": [
     "DATA LAKE · AWS S3",
     "COSTO DE STORAGE (FINOPS)"
    ],
    "mockItems": [
     {
      "l": "Ingesta incremental · Apache Hudi",
      "v": "✓ activo"
     },
     {
      "l": "Calidad de datos · Great Expectations",
      "v": "✓ activo"
     },
     {
      "l": "Eficiencia de consulta",
      "v": "lectura selectiva"
     },
     {
      "l": "Infraestructura como código · Terraform",
      "v": "100% IaC"
     },
     {
      "l": "Ahorro de almacenamiento (FinOps)",
      "v": "−35%"
     }
    ],
    "demos": [
     {
      "kind": "app",
      "t": "Data Platform Interactiva · las 6 decisiones del caso",
      "d": "Demostración interactiva de cada decisión de arquitectura: simulador de consulta Parquet vs CSV, upsert de Apache Hudi con línea de tiempo de commits, portón de calidad de Great Expectations, escenarios de las 3 capas de protección, los 5 criterios de la POC de lakeFS y terraform plan/apply en vivo.",
      "u": "creditas-dataplatform-app.html",
      "btn": "Abrir demostración →"
     },
     {
      "kind": "app",
      "t": "Credit Risk Analyzer · Creditas",
      "d": "Simulación interactiva: ajusta ingreso, historial y garantía y sigue el motor de crédito. La preparación de variables corre en PySpark; el GBTClassifier combina varios árboles de decisión para estimar el riesgo de impago; y la política convierte el score en aprobación, límite y tasa. Todos los valores son demostrativos.",
      "u": "creditas-credit-app.html",
      "btn": "Abrir analyzer →"
     }
    ],
    "stints": [
     {
      "r": "Ingeniera de Datos · Data Engineering Foundation",
      "per": "2022",
      "prob": "El data lake había alcanzado 13 TB sin estrategia consistente de organización, particionamiento o ciclo de vida. Archivos con patrones diferentes de estructura y compresión aumentaban el volumen leído por las consultas. Los datos históricos permanecían en clases de almacenamiento incompatibles con su frecuencia de acceso, y algunas cargas exigían reprocesamientos extensos incluso cuando pocos registros habían cambiado. Tres impactos directos: crecimiento del costo de almacenamiento, consultas de crédito que tomaban minutos y riesgo de que datos inválidos llegaran a análisis y modelos.",
      "decSections": [
       {
        "eye": "🏗️ Reestructuración del Data Lake · Parquet + Snappy",
        "body": "El data lake se reorganizó en tres zonas con responsabilidades distintas: Raw (dato bruto preservado), Trusted (validado y estandarizado) y Refined (listo para consumo). La separación impidió que datos aún no validados llegaran a los análisis. Los datos se convirtieron a Parquet con compresión Snappy y se particionaron por fecha y producto, permitiendo que Spark, Athena y Redshift Spectrum descartaran particiones irrelevantes durante la lectura. La combinación redujo bytes escaneados, costo por consulta y variabilidad de latencia."
       },
       {
        "eye": "📥 Procesamiento Incremental · Apache Hudi",
        "body": "Apache Hudi se adoptó en las cargas que necesitaban insertar o actualizar registros sin reconstruir todo el conjunto de datos. Los cambios pasaron a identificarse por clave y procesarse de forma incremental, reduciendo reprocesamientos y haciendo más eficiente el mantenimiento de tablas sujetas a actualizaciones frecuentes. Hudi controla la evolución lógica de las tablas: commits, archivos válidos e historial de cambios a lo largo del tiempo."
       },
       {
        "eye": "✅ Calidad Automatizada · Great Expectations",
        "body": "Great Expectations se implementó para validar los datos durante la ejecución de los pipelines, antes de la promoción a las capas de consumo. Las reglas verificaban presencia de columnas obligatorias, tipos esperados, llenado de campos críticos, valores dentro de rangos válidos, unicidad de identificadores y volumen compatible con el patrón histórico. Cuando una regla crítica fallaba, el pipeline interrumpía la promoción y aislaba la carga, impidiendo que datos inválidos avanzaran hacia reportes y modelos de riesgo."
       },
       {
        "eye": "🔐 S3 Versioning + Lifecycle + Hudi · Tres Capas Complementarias",
        "body": "Las tres capacidades se combinaron porque actúan en niveles diferentes. Apache Hudi controla la evolución lógica de las tablas: upserts, procesamiento incremental e historial de commits. S3 Versioning protege físicamente los objetos: cuando un archivo se sobrescribe o elimina, la versión anterior se preserva para recuperación, protección que Hudi no ofrece a nivel de objeto. S3 Lifecycle impide que el versionado genere crecimiento ilimitado: define por cuánto tiempo se mantienen versiones anteriores y cuándo pueden archivarse o eliminarse. Cada capa tiene una responsabilidad distinta y las tres se complementan sin superposición."
       },
       {
        "eye": "🔬 POC lakeFS · Decisión de no adoptar",
        "body": "Se realizó una prueba de concepto con lakeFS para evaluar la introducción de versionado tipo Git en el data lake: branches, commits, merges y reversión a estados anteriores. La POC consideró cinco dimensiones: necesidad de branches aisladas, recuperación de objetos sobrescritos, integración con la stack AWS, impacto operativo de una nueva capa de metadatos y costo de retención. El análisis mostró que la necesidad prioritaria era recuperar datos en caso de sobrescritura accidental y que los pipelines no presentaban demanda de branches o commits que involucraran múltiples objetos. La decisión fue mantener la combinación nativa: S3 Versioning, lifecycle y Apache Hudi. lakeFS permaneció como alternativa para evolución futura, en caso de surgir una necesidad concreta de experimentación paralela o publicación basada en merge. La iniciativa demostró que la arquitectura no consiste en elegir la herramienta más sofisticada, sino la que cumple los requisitos con mejor equilibrio entre capacidad, costo y complejidad operativa."
       },
       {
        "eye": "📦 Infraestructura como Código · Terraform + Docker + Kubernetes",
        "body": "La infraestructura de la plataforma se aprovisionó íntegramente con Terraform: buckets y configuraciones de S3, políticas de versionado y lifecycle, clústeres EMR, políticas y permisos. Los jobs se empaquetaron en contenedores Docker, garantizando consistencia entre desarrollo y ejecución. Las cargas de trabajo compatibles corrían en Kubernetes y los procesamientos distribuidos de mayor escala usaban clústeres EMR con Spot Instances."
       }
      ],
      "res": "El data lake de 13 TB pasó a operar con lectura selectiva, menor volumen escaneado y costo de almacenamiento 35% menor. Los datos inválidos dejaron de llegar a análisis y modelos de riesgo: cada lote pasó a validarse con Great Expectations antes de la promoción. Los reprocesamientos completos se eliminaron en las tablas con Apache Hudi, que pasaron a procesar solo el delta entre commits. Los objetos se volvieron recuperables vía S3 Versioning, con retención y costo controlados por lifecycle. La infraestructura, 100% declarada en Terraform, hizo los ambientes reproducibles y auditables. La evolución ocurrió en ciclos ágiles, con backlog técnico priorizado, entregas incrementales, revisión continua y automatización por CI/CD. Y la POC de lakeFS probó madurez arquitectónica: ninguna capa más allá de lo necesario.",
      "metrics": [
       "13 TB optimizados",
       "−35% de costo",
       "lectura selectiva y costo predecible",
       "Docker · Kubernetes · Terraform"
      ]
     }
    ],
    "arch": [
     [
      "Fuentes",
      "crédito · producto"
     ],
     [
      "ETL",
      "Glue · EMR Spark · Docker/K8s"
     ],
     [
      "Lake",
      "S3 · 13 TB · Parquet · Hudi"
     ],
     [
      "Calidad",
      "Great Expectations · validación automática"
     ],
     [
      "Query",
      "Redshift Spectrum · Athena"
     ],
     [
      "Protección y FinOps",
      "S3 Versioning · lifecycle · Terraform"
     ]
    ],
    "stat3": [
     {
      "v": "13 TB",
      "l": "data lake reestructurado con Parquet particionado por fecha/producto"
     },
     {
      "v": "35%",
      "l": "reducción de costo de almacenamiento con lifecycle y compresión Snappy"
     },
     {
      "v": "100%",
      "l": "de la infraestructura como código (Terraform), con jobs en Docker y Kubernetes"
     }
    ],
    "layers": [
     {
      "icon": "📥",
      "title": "Ingesta · Glue + EMR + Hudi",
      "desc": "Jobs Glue para ingesta incremental de fuentes relacionales y APIs de crédito, y EMR para procesamiento a gran escala con PySpark. Las tablas se gestionaban con Apache Hudi, que inserta y actualiza registros nuevos sin reprocesar toda la tabla (ingesta incremental) y guarda el historial de versiones del dato."
     },
     {
      "icon": "🗃️",
      "title": "Data Lake · S3 Parquet",
      "desc": "Tres zonas: raw (dato bruto), trusted (validado) y refined (agregado). Parquet comprimido con Snappy. Particionar por fecha y producto hace que cada consulta lea solo la porción necesaria, siendo mucho más rápida."
     },
     {
      "icon": "📈",
      "title": "Query · Redshift Spectrum + Athena",
      "desc": "Redshift Spectrum para consultas directas en S3 sin mover los datos. Athena para exploración puntual por el equipo de data science. Athena es serverless; Spectrum utiliza capacidad de cómputo de Redshift y tiene facturación propia."
     },
     {
      "icon": "📦",
      "title": "Infra · Docker + Kubernetes + Terraform",
      "desc": "Los jobs se empaquetaban en contenedores Docker y corrían en Kubernetes y en clústeres EMR, con toda la infraestructura creada por código (Terraform). Los ambientes se levantaban y bajaban bajo demanda, con Spot Instances en el procesamiento batch para reducir costo."
     },
     {
      "icon": "✅",
      "title": "Calidad · Great Expectations",
      "desc": "Great Expectations es la herramienta que define \"contratos de dato\": formato correcto, valores dentro del rango esperado, sin nulos prohibidos. Si alguna regla falla, el pipeline se detiene antes de grabar un dato malo en el lake. Esto protege todos los modelos y reportes que dependen de la capa refined."
     },
     {
      "icon": "⚙️",
      "title": "FinOps · S3 Lifecycle",
      "desc": "Políticas automáticas: datos con más de 90 días van a S3 Infrequent Access (más barato) y con más de 180 días a Glacier (archivamiento). El costo cayó 35% con planificación del acceso al archivo; Glacier Flexible Retrieval y Deep Archive requieren restauración antes de la lectura."
     }
    ],
    "codeNotes": [
     {
      "tab": "Terraform EMR",
      "label": "Clúster EMR con auto-scaling y spot instances (Terraform HCL)",
      "note": "Este código (Terraform) crea el clúster de procesamiento (el EMR) ya configurado, sin que nadie lo arme a mano. Usa máquinas Spot, mucho más baratas por ser capacidad ociosa de AWS, y crece o se reduce solo según la carga de trabajo (auto-scaling). Como todo está declarado en código, el mismo ambiente puede recrearse idéntico en cualquier momento."
     },
     {
      "tab": "S3 Lifecycle",
      "label": "Política de lifecycle automático en el data lake (Python · boto3)",
      "note": "Define reglas que mueven los datos solas conforme envejecen: hasta 90 días quedan en almacenamiento rápido y más caro, luego pasan a uno más barato y, con 180 días, al \"archivo muerto\" (Glacier), el más barato de todos. Los datos temporales se borran a los 30 días. Así el costo de almacenamiento cae automáticamente, con clases de almacenamiento y procedimientos de restauración definidos para cada acceso."
     },
     {
      "tab": "Great Expectations",
      "label": "Suite de calidad de datos para la capa refined del data lake (Python)",
      "note": "Great Expectations define expectativas (contratos) sobre los datos: el CPF nunca puede ser nulo, el score debe estar entre 0 y 1000, el DSR entre 0 y 1. Si alguna regla falla, el pipeline se detiene automáticamente antes de grabar en la capa refined, protegiendo todos los modelos y reportes downstream."
     },
     {
      "tab": "Credit Features",
      "label": "Feature engineering para riesgo de crédito, PySpark + MLlib (Python)",
      "note": "Transforma el historial de transacciones de cada cliente (agrupado por CPF) en números que el modelo de crédito entiende, las llamadas features: cantidad de transacciones, ticket promedio, variación de gastos, ingreso estimado por las entradas, gasto por las salidas, diversidad de categorías y el DSR (la parte del ingreso ya comprometida con deuda). El resultado se graba listo para que el modelo lo consuma."
     }
    ],
    "faq": [
     {
      "q": "¿Por qué Parquet con Snappy en vez de CSV?",
      "a": "CSV almacena texto plano, sin compresión, sin tipos de columna, sin skip de columnas. Parquet almacena en columnas (lee solo lo que la query necesita), comprimido con Snappy (sin pérdida, rápido de descomprimir). Para las queries de crédito que leen 3-4 columnas de 13 TB, esto redujo el escaneo en ~90%."
     },
     {
      "q": "¿Cómo funciona el lifecycle automático?",
      "a": "Las políticas de S3 mueven los datos automáticamente por \"temperatura\": los datos recientes quedan en Standard (acceso frecuente), después de 90 días pasan a Infrequent Access (40% más barato), después de 180 días a Glacier (80% más barato). Glacier Flexible Retrieval y Deep Archive requieren restauración, no redirección transparente. Las consultas Athena sobre objetos restaurados llegaron en 2023 y no se atribuyen al proyecto de 2022."
     },
     {
      "q": "¿Qué es Redshift Spectrum y cuándo usarlo?",
      "a": "Spectrum es una extensión de Redshift que ejecuta queries directamente en los archivos S3 sin importar los datos al clúster. Perfecto para histórico: datos de más de 90 días quedan en el lake (barato), pero siguen siendo consultables vía SQL. Cuando el dato se accede con frecuencia, ahí vale la pena moverlo al clúster Redshift."
     },
     {
      "q": "¿Por qué usar Hudi y S3 Versioning juntos si parecen resolver el mismo problema?",
      "a": "Porque actúan en niveles diferentes. Hudi controla la evolución lógica de las tablas: upserts, procesamiento incremental, historial de commits y qué archivos pertenecen a la versión válida de una tabla. S3 Versioning protege físicamente los objetos: si un archivo se sobrescribe o elimina por error, la versión anterior puede recuperarse. Hudi sabe qué archivos forman el estado consistente de una tabla, pero no protege contra la sobrescritura accidental del objeto físico. S3 Versioning sabe que existen diferentes versiones de un objeto, pero no entiende transacciones ni claves de negocio. Lifecycle controla el costo de esa protección, definiendo por cuánto tiempo se mantienen las versiones."
     },
     {
      "q": "¿Por qué no se adoptó lakeFS?",
      "a": "Se realizó una POC que evaluó branches de datos, commits y merges. El análisis mostró que la necesidad prioritaria era recuperar objetos en caso de sobrescritura accidental y que los pipelines no presentaban demanda que justificara una nueva capa operativa. La combinación de S3 Versioning, lifecycle y Apache Hudi ya cumplía los requisitos con integración nativa a AWS, menor complejidad y sin introducir nuevos metadatos que mantener. lakeFS permanece como alternativa para escenarios futuros que exijan experimentación paralela o publicación basada en merge."
     }
    ]
   },
   "ja": {
    "r": "データエンジニア",
    "per": "2022年",
    "d": "AWSデータスタックの基盤構築: 13TBのデータレイクを再構築、Hudiによる増分取り込み、Great Expectationsによる自動品質管理、lakeFSのPOC、インフラの100%コード化。",
    "heroChips": [
     "Amazon Web Services · 認定資格",
     "Python · Scala",
     "バッチデータ処理 · 増分取り込み",
     "企業データプラットフォームの基盤構築"
    ],
    "app": {
     "sub": "データレイク＆品質",
     "h": "不良データを<em>取り込み前に食い止める</em>レイク。",
     "d": "Creditasのプラットフォームのシミュレーション: Apache Hudiによる増分パイプライン、Raw・Trusted・Refinedゾーンのカタログ、失敗した昇格をブロックするGreat Expectationsのアラート。顧客データを使わない教育目的のシミュレーションです。"
    },
    "metrics": [
     {
      "v": "13 TB",
      "l": "AWS上で最適化・再構築されたデータレイク"
     },
     {
      "v": "−35%",
      "l": "FinOpsの実践によるストレージコスト削減"
     },
     {
      "v": "選択的読み取り",
      "l": "Parquet、パーティショニング、プルーニングによりクエリごとのスキャンバイト数を削減"
     },
     {
      "v": "100%",
      "l": "コード化されたインフラ（Terraform）、Docker・Kubernetes活用"
     }
    ],
    "cliLines": [
     "13 TB · AWS上で最適化されたデータレイク",
     "−35%のストレージコスト（FinOps）",
     "読み取りバイト数削減とレイテンシの予測可能性向上",
     "Great Expectations · 各パイプラインでの自動品質管理",
     "インフラ100%コード化: Terraform + Docker + Kubernetes"
    ],
    "dashKpis": [
     "13 TB",
     "−35%"
    ],
    "dashLabels": [
     "データレイク · AWS S3",
     "ストレージコスト（FINOPS）"
    ],
    "mockItems": [
     {
      "l": "増分取り込み · Apache Hudi",
      "v": "✓ 稼働中"
     },
     {
      "l": "データ品質 · Great Expectations",
      "v": "✓ 稼働中"
     },
     {
      "l": "クエリ効率",
      "v": "選択的読み取り"
     },
     {
      "l": "コード化されたインフラ · Terraform",
      "v": "IaC 100%"
     },
     {
      "l": "ストレージコスト削減（FinOps）",
      "v": "−35%"
     }
    ],
    "demos": [
     {
      "kind": "app",
      "t": "インタラクティブデータプラットフォーム · ケースの6つの意思決定",
      "d": "各アーキテクチャ判断のインタラクティブなデモ: Parquet vs CSVクエリシミュレーター、コミットタイムライン付きApache Hudiのアップサート、Great Expectationsの品質ゲート、3層の保護シナリオ、lakeFS POCの5つの評価基準、ライブのterraform plan/apply。",
      "u": "creditas-dataplatform-app.html",
      "btn": "デモを開く →"
     },
     {
      "kind": "app",
      "t": "Credit Risk Analyzer · Creditas",
      "d": "インタラクティブシミュレーション: 収入、履歴、担保を調整し、与信エンジンの動きを確認できます。特徴量の準備はPySparkで実行され、GBTClassifierが複数の決定木を組み合わせて延滞リスクを推定し、ポリシーがスコアを承認・限度額・金利に変換します。すべての値はデモ用です。",
      "u": "creditas-credit-app.html",
      "btn": "アナライザーを開く →"
     }
    ],
    "stints": [
     {
      "r": "データエンジニア · データエンジニアリング基盤構築",
      "per": "2022年",
      "prob": "データレイクは一貫した整理・パーティショニング・ライフサイクル戦略のないまま13TBに達していました。構造や圧縮方式が異なるファイルが、クエリで読み取る量を増加させていました。過去データはアクセス頻度に合わないストレージクラスに置かれ、一部のロードは変更されたレコードがわずかでも大規模な再処理を必要としていました。直接的な影響は3つ: ストレージコストの増大、数分かかる与信クエリ、無効なデータが分析やモデルに届くリスクでした。",
      "decSections": [
       {
        "eye": "🏗️ データレイクの再構築 · Parquet + Snappy",
        "body": "データレイクは、責務の異なる3つのゾーンに再編成されました: Raw（保持された生データ）、Trusted（検証・標準化済み）、Refined（消費可能な状態）。この分離により、未検証のデータが分析に届くことを防ぎました。データはSnappy圧縮のParquetに変換され、日付と商品でパーティション化され、Spark、Athena、Redshift Spectrumが読み取り時に無関係なパーティションをスキップできるようになりました。この組み合わせにより、スキャンバイト数、クエリあたりのコスト、レイテンシのばらつきが削減されました。"
       },
       {
        "eye": "📥 増分処理 · Apache Hudi",
        "body": "Apache Hudiは、データセット全体を再構築せずにレコードの挿入・更新が必要なロードに導入されました。変更はキーで識別され、増分的に処理されるようになり、頻繁な更新を伴うテーブルの再処理を減らし、保守を効率化しました。Hudiはテーブルの論理的な変化を管理します: コミット、有効なファイル、時系列での変更履歴。"
       },
       {
        "eye": "✅ 自動化された品質管理 · Great Expectations",
        "body": "Great Expectationsは、消費層への昇格前、パイプライン実行中にデータを検証するために導入されました。ルールは、必須列の存在、想定されるデータ型、重要フィールドの入力状況、有効範囲内の値、識別子の一意性、過去のパターンと整合する量を確認しました。重要なルールが失敗した場合、パイプラインは昇格を中断してロードを隔離し、無効なデータがレポートやリスクモデルに進むのを防ぎました。"
       },
       {
        "eye": "🔐 S3 Versioning + Lifecycle + Hudi · 補完し合う3層",
        "body": "この3つの機能は、異なるレベルで機能するために組み合わされました。Apache Hudiはテーブルの論理的な変化（アップサート、増分処理、コミット履歴）を管理します。S3 Versioningはオブジェクトを物理的に保護します: ファイルが上書きまたは削除された際、以前のバージョンが復元用に保持されます。これはHudiがオブジェクトレベルでは提供しない保護です。S3 Lifecycleは、バージョニングが無制限に増大しないようにします: 以前のバージョンをどれだけ保持し、いつアーカイブまたは削除できるかを定義します。各層は明確な責務を持ち、3つは重複なく補完し合います。"
       },
       {
        "eye": "🔬 lakeFS POC · 採用しないという判断",
        "body": "データレイクにGitライクなバージョニング（ブランチ、コミット、マージ、以前の状態へのロールバック）を導入することを評価するため、lakeFSでの概念実証を実施しました。POCでは5つの観点を検討しました: 独立したブランチの必要性、上書きされたオブジェクトの復元、AWSスタックとの連携、新しいメタデータ層の運用への影響、保持コスト。分析の結果、優先すべきニーズは誤って上書きされたデータの復元であり、パイプラインには複数オブジェクトにまたがるブランチやコミットへの需要がないことが判明しました。判断はネイティブな組み合わせ（S3 Versioning、lifecycle、Apache Hudi）を維持することでした。lakeFSは、並行実験やマージベースの公開が具体的に必要になった場合の将来的な選択肢として残されました。この取り組みは、アーキテクチャとは最も高度なツールを選ぶことではなく、能力・コスト・運用の複雑さのバランスが最も取れたものを選ぶことだと示しました。"
       },
       {
        "eye": "📦 インフラのコード化 · Terraform + Docker + Kubernetes",
        "body": "プラットフォームのインフラはすべてTerraformでプロビジョニングされました: S3バケットと設定、バージョニングとlifecycleのポリシー、EMRクラスタ、ポリシーと権限。ジョブはDockerコンテナにパッケージ化され、開発と実行の一貫性を確保しました。互換性のあるワークロードはKubernetes上で稼働し、より大規模な分散処理にはSpot Instancesを使ったEMRクラスタが用いられました。"
       }
      ],
      "res": "13TBのデータレイクは、選択的な読み取り、スキャン量の削減、35%低いストレージコストで運用されるようになりました。無効なデータは分析やリスクモデルに届かなくなりました: すべてのバッチが昇格前にGreat Expectationsで検証されるようになったためです。Apache Hudiを使用するテーブルでは完全な再処理がなくなり、コミット間の差分のみを処理するようになりました。オブジェクトはS3 Versioningにより復元可能になり、保持期間とコストはlifecycleで管理されました。Terraformで100%宣言されたインフラにより、環境は再現可能かつ監査可能になりました。この進化はアジャイルなサイクルで進み、優先順位付けされた技術バックログ、インクリメンタルな納品、継続的なレビュー、CI/CDによる自動化が伴いました。そしてlakeFSのPOCは、必要以上の層を持たないというアーキテクチャの成熟度を証明しました。",
      "metrics": [
       "13TB最適化",
       "−35%のコスト",
       "選択的読み取りと予測可能なコスト",
       "Docker · Kubernetes · Terraform"
      ]
     }
    ],
    "arch": [
     [
      "ソース",
      "与信 · プロダクト"
     ],
     [
      "ETL",
      "Glue · EMR Spark · Docker/K8s"
     ],
     [
      "レイク",
      "S3 · 13TB · Parquet · Hudi"
     ],
     [
      "品質",
      "Great Expectations · 自動検証"
     ],
     [
      "クエリ",
      "Redshift Spectrum · Athena"
     ],
     [
      "保護＆FinOps",
      "S3 Versioning · lifecycle · Terraform"
     ]
    ],
    "stat3": [
     {
      "v": "13 TB",
      "l": "日付/商品でパーティション化されたParquetによるデータレイクの再構築"
     },
     {
      "v": "35%",
      "l": "lifecycleとSnappy圧縮によるストレージコスト削減"
     },
     {
      "v": "100%",
      "l": "コード化されたインフラ（Terraform）、Docker・Kubernetes上のジョブ"
     }
    ],
    "layers": [
     {
      "icon": "📥",
      "title": "取り込み · Glue + EMR + Hudi",
      "desc": "リレーショナルソースと与信APIからの増分取り込み用Glueジョブ、PySparkによる大規模処理用EMR。テーブルはApache Hudiで管理され、テーブル全体を再処理せずに新規レコードの挿入・更新（増分取り込み）を行い、データのバージョン履歴を保持します。"
     },
     {
      "icon": "🗃️",
      "title": "データレイク · S3 Parquet",
      "desc": "3つのゾーン: raw（生データ）、trusted（検証済み）、refined（集計済み）。Snappyで圧縮されたParquet。日付と商品でパーティション化することで、各クエリは必要な部分のみを読み取り、大幅に高速化されます。"
     },
     {
      "icon": "📈",
      "title": "クエリ · Redshift Spectrum + Athena",
      "desc": "Redshift Spectrumはデータを移動せずにS3に直接クエリを実行。AthenaはData Scienceチームによるアドホックな探索用。Athenaはサーバーレスです。SpectrumはRedshiftの計算資源を利用し、独自の課金があります。運用モデルは同じではありません。"
     },
     {
      "icon": "📦",
      "title": "インフラ · Docker + Kubernetes + Terraform",
      "desc": "ジョブはDockerコンテナにパッケージ化され、KubernetesとEMRクラスタ上で稼働し、インフラ全体がコード（Terraform）で構築されていました。環境は需要に応じて起動・停止し、バッチ処理にはコスト削減のためSpot Instancesを使用。"
     },
     {
      "icon": "✅",
      "title": "品質 · Great Expectations",
      "desc": "Great Expectationsは「データ契約」を定義するツールです: 正しい形式、想定範囲内の値、禁止されたnullがないこと。ルールが失敗すると、パイプラインは不良データをレイクに書き込む前に停止します。これにより、refined層に依存するすべてのモデルとレポートが保護されます。"
     },
     {
      "icon": "⚙️",
      "title": "FinOps · S3 Lifecycle",
      "desc": "自動ポリシー: 90日を超えたデータはS3 Infrequent Access（より安価）へ、180日を超えるとGlacier（アーカイブ）へ移動。コストが35%削減されました。Glacier Flexible RetrievalとDeep Archiveの読み取り前には復元が必要です。"
     }
    ],
    "codeNotes": [
     {
      "tab": "Terraform EMR",
      "label": "オートスケーリングとスポットインスタンスを備えたEMRクラスタ（Terraform HCL）",
      "note": "このTerraformコードは、手動設定なしで処理クラスタ（EMR）を構築済みの状態で作成します。AWSの遊休容量であるため大幅に安価なSpotマシンを使用し、ワークロードに応じて自動的に拡大・縮小します（オートスケーリング）。すべてがコードで宣言されているため、いつでも同じ環境を再現できます。"
     },
     {
      "tab": "S3 Lifecycle",
      "label": "データレイクにおける自動ライフサイクルポリシー（Python · boto3）",
      "note": "データが古くなるにつれ自動的に移動するルールを定義します: 90日までは高速で高価なストレージに、その後はより安価な層へ、180日で「コールドアーカイブ」（Glacier、最も安価）へ移動します。一時データは30日で削除されます。これにより、保持方針に基づいてコストを抑えます。アクセス先のクラスに応じて復元手順を設計します。"
     },
     {
      "tab": "Great Expectations",
      "label": "データレイクのrefined層向けデータ品質スイート（Python）",
      "note": "Great Expectationsはデータに関する期待値（契約）を定義します: CPFは決してnullにならない、スコアは0〜1000の範囲、DSRは0〜1の範囲。いずれかのルールが失敗すると、パイプラインはrefined層への書き込み前に自動停止し、下流のすべてのモデルとレポートを保護します。"
     },
     {
      "tab": "Credit Features",
      "label": "与信リスクの特徴量エンジニアリング、PySpark + MLlib（Python）",
      "note": "各顧客の取引履歴（CPFごとにグループ化）を、与信モデルが理解できる数値、いわゆる特徴量に変換します: 取引件数、平均チケット単価、支出の変動、入金から推定した収入、出金からの支出、カテゴリの多様性、DSR（すでに債務に充てられている収入の割合）。結果はモデルがすぐに利用できる形で保存されます。"
     }
    ],
    "faq": [
     {
      "q": "なぜCSVではなくSnappy付きParquetを使用したのですか?",
      "a": "CSVはプレーンテキストで保存され、圧縮も列の型指定も列スキップもありません。Parquetは列指向で保存され（クエリが必要な列のみ読み取る）、Snappyで圧縮されています（可逆圧縮で展開が高速）。13TBのうち3〜4列を読む与信クエリでは、これによりスキャン量が約90%削減されました。"
     },
     {
      "q": "自動ライフサイクルはどのように機能しますか?",
      "a": "S3のポリシーが「温度」に応じてデータを自動的に移動します: 直近のデータはStandard（頻繁アクセス）に置かれ、90日後にInfrequent Access（40%安価）へ、180日後にGlacier（80%安価）へ移動します。Glacier Flexible RetrievalとDeep Archiveは復元が必要で、クエリが自動的に透過アクセスできるわけではありません。復元済みオブジェクトに対するAthenaクエリは2023年以降の機能で、2022年の実績には含めません。"
     },
     {
      "q": "Redshift Spectrumとは何で、いつ使うべきですか?",
      "a": "Spectrumは、データをクラスタに取り込まずにS3のファイルへ直接クエリを実行できるRedshiftの拡張機能です。過去データに最適です: 90日以上前のデータはレイク（安価）に置かれたまま、SQLで照会可能です。頻繁にアクセスされるデータは、Redshiftクラスタへ移動する価値があります。"
     },
     {
      "q": "HudiとS3 Versioningが同じ問題を解決するように見えるのに、なぜ両方使うのですか?",
      "a": "異なるレベルで機能するためです。Hudiはテーブルの論理的な変化（アップサート、増分処理、コミット履歴、テーブルの有効な状態を構成するファイル）を管理します。S3 Versioningはオブジェクトを物理的に保護します: ファイルが誤って上書き・削除された場合、以前のバージョンを復元できます。Hudiはテーブルの一貫した状態を構成するファイルを把握していますが、物理オブジェクトの誤上書きからは保護しません。S3 Versioningはオブジェクトに複数バージョンが存在することを把握していますが、トランザクションやビジネスキーは理解しません。Lifecycleは、バージョンをどれだけ保持するかを定義することで、その保護のコストを管理します。"
     },
     {
      "q": "なぜlakeFSを採用しなかったのですか?",
      "a": "データブランチ、コミット、マージを評価するPOCを実施しました。分析の結果、優先すべきニーズは誤って上書きされたオブジェクトの復元であり、パイプラインには新しい運用層を正当化する需要がないことが判明しました。S3 Versioning、lifecycle、Apache Hudiの組み合わせは、AWSとのネイティブ連携、低い複雑さ、新たに管理すべきメタデータがないという条件で、すでに要件を満たしていました。lakeFSは、並行実験やマージベースの公開が必要になる将来のシナリオへの選択肢として残されています。"
     }
    ]
   }
  },
  "app": {
   "sub": "DATA LAKE & QUALIDADE",
   "h": "O lake que barra dado ruim <em>antes de entrar.</em>",
   "d": "Simulação da plataforma da Creditas: pipelines incrementais com Apache Hudi, catálogo das zonas Raw, Trusted e Refined e alertas do Great Expectations bloqueando promoções com falha. Simulação didática, sem dados de clientes."
  },
  "heroImg": "img/jen-creditas-chibi.webp",
  "heroGrad": "linear-gradient(135deg,#002200,#00691e)",
  "metrics": [
   {
    "v": "13 TB · −35% ARMAZENAMENTO",
    "l": "100% da infraestrutura como código"
   },
   {
    "v": "Hudi",
    "l": "ingestão incremental e histórico de alterações"
   },
   {
    "v": "Great Expectations",
    "l": "qualidade automatizada antes da publicação"
   },
   {
    "v": "lakeFS",
    "l": "POC de versionamento para o data lake"
   }
  ],
  "cliLines": [
   "13 TB · data lake otimizado na AWS",
   "−35% de custo de armazenamento (FinOps)",
   "consultas com menos bytes lidos e latência mais previsível",
   "Great Expectations · qualidade automática em cada pipeline",
   "infra 100% em código: Terraform + Docker + Kubernetes"
  ],
  "dashKpis": [
   "13 TB",
   "−35%"
  ],
  "dashLabels": [
   "DATA LAKE · AWS S3",
   "CUSTO DE STORAGE (FINOPS)"
  ],
  "mockItems": [
   {
    "l": "Ingestão incremental · Apache Hudi",
    "v": "✓ ativo"
   },
   {
    "l": "Qualidade de dados · Great Expectations",
    "v": "✓ ativo"
   },
   {
    "l": "Eficiência de consulta",
    "v": "leitura seletiva"
   },
   {
    "l": "Infraestrutura como código · Terraform",
    "v": "100% IaC"
   },
   {
    "l": "Economia de armazenamento (FinOps)",
    "v": "−35%"
   }
  ],
  "stack": [
   "AWS S3",
   "AWS Glue",
   "Amazon EMR",
   "Amazon Redshift",
   "Redshift Spectrum",
   "PySpark",
   "Apache Hudi",
   "Great Expectations",
   "Airflow",
   "Docker",
   "Kubernetes",
   "Python",
   "Terraform"
  ],
  "demos": [
   {
    "kind": "app",
    "t": "Data Platform Interativa · as 6 decisões do case",
    "d": "Demonstração interativa de cada decisão de arquitetura: simulador de consulta Parquet vs CSV, upsert do Apache Hudi com timeline de commits, portão de qualidade do Great Expectations, cenários das 3 camadas de proteção, os 5 critérios da POC lakeFS e terraform plan/apply ao vivo.",
    "u": "creditas-dataplatform-app.html",
    "btn": "Abrir demonstração →"
   },
   {
    "kind": "app",
    "t": "Credit Risk Analyzer · Creditas",
    "d": "Simulação interativa: ajuste renda, histórico e garantia e acompanhe o motor de crédito. A preparação das variáveis roda em PySpark; o GBTClassifier combina várias árvores de decisão para estimar risco de inadimplência; e a política converte o score em aprovação, limite e taxa. Todos os valores são demonstrativos.",
    "u": "creditas-credit-app.html",
    "btn": "Abrir analyzer →"
   }
  ],
  "stints": [
   {
    "r": "Engenheira de Dados · Data Engineering Foundation",
    "per": "2022",
    "prob": "O data lake havia alcançado 13 TB sem estratégia consistente de organização, particionamento ou ciclo de vida. Arquivos com padrões diferentes de estrutura e compressão aumentavam o volume lido pelas consultas. Dados históricos permaneciam em classes de armazenamento incompatíveis com sua frequência de acesso, e algumas cargas exigiam reprocessamentos extensos mesmo quando poucos registros haviam mudado. Três impactos diretos: crescimento do custo de armazenamento, consultas de crédito que levavam minutos e risco de dados inválidos chegarem a análises e modelos.",
    "decSections": [
     {
      "eye": "🏗️ Reestruturação do Data Lake · Parquet + Snappy",
      "body": "O data lake foi reorganizado em três zonas com responsabilidades distintas: Raw (dado bruto preservado), Trusted (validado e padronizado) e Refined (pronto para consumo). A separação impediu que dados ainda não validados chegassem às análises. Os dados foram convertidos para Parquet com compressão Snappy e particionados por data e produto, permitindo que Spark, Athena e Redshift Spectrum eliminassem partições irrelevantes durante a leitura. A combinação reduziu bytes varridos, custo por consulta e variabilidade de latência."
     },
     {
      "eye": "📥 Processamento Incremental · Apache Hudi",
      "body": "O Apache Hudi foi adotado nas cargas que precisavam inserir ou atualizar registros sem reconstruir todo o conjunto de dados. As alterações passaram a ser identificadas por chave e processadas de forma incremental, reduzindo reprocessamentos e tornando mais eficiente a manutenção de tabelas sujeitas a atualizações frequentes. O Hudi controla a evolução lógica das tabelas: commits, arquivos válidos e histórico de alterações ao longo do tempo."
     },
     {
      "eye": "✅ Qualidade Automatizada · Great Expectations",
      "body": "O Great Expectations foi implantado para validar os dados durante a execução dos pipelines, antes da promoção para as camadas de consumo. As regras verificavam presença de colunas obrigatórias, tipos esperados, preenchimento de campos críticos, valores dentro de intervalos válidos, unicidade de identificadores e volume compatível com o padrão histórico. Quando uma regra crítica falhava, o pipeline interrompia a promoção e isolava a carga, impedindo que dados inválidos avançassem para relatórios e modelos de risco."
     },
     {
      "eye": "🔐 S3 Versioning + Lifecycle + Hudi · Três camadas complementares",
      "body": "As três capacidades foram combinadas porque atuam em níveis diferentes. O Apache Hudi controla a evolução lógica das tabelas: upserts, processamento incremental e histórico de commits. O S3 Versioning protege fisicamente os objetos: quando um arquivo é sobrescrito ou excluído, a versão anterior é preservada para recuperação, proteção que o Hudi não oferece no nível do objeto. O S3 Lifecycle impede que o versionamento gere crescimento ilimitado: define por quanto tempo versões anteriores são mantidas e quando podem ser arquivadas ou removidas. Cada camada tem uma responsabilidade distinta e as três se complementam sem sobreposição."
     },
     {
      "eye": "🔬 POC lakeFS · Decisão de não adotar",
      "body": "Foi conduzida uma prova de conceito com o lakeFS para avaliar a introdução de versionamento Git-like no data lake: branches, commits, merges e reversão para estados anteriores. A POC considerou cinco dimensões: necessidade de branches isoladas, recuperação de objetos sobrescritos, integração com a stack AWS, impacto operacional de nova camada de metadados e custo de retenção. A análise mostrou que a necessidade prioritária era recuperar dados em caso de sobrescrita acidental e que os pipelines não apresentavam demanda por branches ou commits envolvendo múltiplos objetos. A decisão foi manter a combinação nativa: S3 Versioning, lifecycle e Apache Hudi. O lakeFS permaneceu como alternativa para evolução futura, caso surja necessidade concreta de experimentação paralela ou publicação baseada em merge. A iniciativa demonstrou que arquitetura não consiste em selecionar a ferramenta mais sofisticada, mas a que atende aos requisitos com melhor equilíbrio entre capacidade, custo e complexidade operacional."
     },
     {
      "eye": "📦 Infraestrutura como Código · Terraform + Docker + Kubernetes",
      "body": "A infraestrutura da plataforma foi integralmente provisionada com Terraform: buckets e configurações do S3, políticas de versionamento e lifecycle, clusters EMR, políticas e permissões. Jobs foram empacotados em contêineres Docker, garantindo consistência entre desenvolvimento e execução. Workloads compatíveis rodavam em Kubernetes e processamentos distribuídos de maior escala utilizavam clusters EMR com Spot Instances."
     }
    ],
    "res": "O data lake de 13 TB passou a operar com leitura seletiva, menor volume varrido e custo de armazenamento 35% menor. Dado inválido parou de chegar às análises e aos modelos de risco: cada lote passou a ser validado pelo Great Expectations antes da promoção. Reprocessamentos completos foram eliminados nas tabelas com Apache Hudi, que passaram a processar apenas o delta entre commits. Objetos tornaram-se recuperáveis via S3 Versioning, com retenção e custo controlados por lifecycle. A infraestrutura, 100% declarada em Terraform, tornou os ambientes reproduzíveis e auditáveis. A evolução ocorreu em ciclos ágeis, com backlog técnico priorizado, entregas incrementais, revisão contínua e automação por CI/CD. E a POC do lakeFS provou maturidade arquitetural: nenhuma camada além do necessário.",
    "metrics": [
     "13 TB otimizados",
     "−35% de custo",
     "leitura seletiva e custo previsível",
     "Docker · Kubernetes · Terraform"
    ],
    "stack": [
     "Python",
     "Scala",
     "EMR",
     "S3",
     "Glue",
     "Apache Hudi",
     "Great Expectations",
     "Redshift Spectrum",
     "Athena",
     "PostgreSQL",
     "Airflow",
     "Docker",
     "Kubernetes",
     "Terraform",
     "Lake Formation",
     "Agile · entregas incrementais",
     "CI/CD"
    ]
   }
  ],
  "arch": [
   [
    "Fontes",
    "crédito · produto"
   ],
   [
    "ETL",
    "Glue · EMR Spark · Docker/K8s"
   ],
   [
    "Lake",
    "S3 · 13 TB · Parquet · Hudi"
   ],
   [
    "Qualidade",
    "Great Expectations · validação automática"
   ],
   [
    "Query",
    "Redshift Spectrum · Athena"
   ],
   [
    "Proteção & FinOps",
    "S3 Versioning · lifecycle · Terraform"
   ]
  ],
  "stat3": [
   {
    "v": "13 TB",
    "l": "data lake reestruturado com Parquet particionado por data/produto"
   },
   {
    "v": "35%",
    "l": "redução de custo de armazenamento com lifecycle e compressão Snappy"
   },
   {
    "v": "100%",
    "l": "da infraestrutura como código (Terraform), com jobs em Docker e Kubernetes"
   }
  ],
  "layers": [
   {
    "icon": "📥",
    "title": "Ingestão · Glue + EMR + Hudi",
    "desc": "Jobs Glue para ingestão incremental de fontes relacionais e APIs de crédito, e EMR para processamento em larga escala com PySpark. As tabelas eram gerenciadas com Apache Hudi, que insere e atualiza registros novos sem reprocessar a tabela inteira (ingestão incremental) e guarda o histórico de versões do dado."
   },
   {
    "icon": "🗃️",
    "title": "Data Lake · S3 Parquet",
    "desc": "Três zonas: raw (dado bruto), trusted (validado) e refined (agregado). Parquet comprimido com Snappy. Particionar por data e produto faz cada consulta ler só a fatia necessária, ficando muito mais rápida."
   },
   {
    "icon": "📈",
    "title": "Query · Redshift Spectrum + Athena",
    "desc": "Redshift Spectrum para consultas direto no S3 sem mover os dados. Athena para exploração pontual pelo time de data science. Athena é serverless; Spectrum utiliza capacidade de computação do Redshift e tem cobrança própria. São modelos operacionais distintos."
   },
   {
    "icon": "📦",
    "title": "Infra · Docker + Kubernetes + Terraform",
    "desc": "Os jobs eram empacotados em contêineres Docker e rodavam em Kubernetes e em clusters EMR, com toda a infraestrutura criada por código (Terraform). Ambientes subiam e desciam sob demanda, com Spot Instances no processamento batch para reduzir custo."
   },
   {
    "icon": "✅",
    "title": "Qualidade · Great Expectations",
    "desc": "Great Expectations é a ferramenta que define \"contratos de dado\": formato correto, valores dentro do intervalo esperado, sem nulos proibidos. Se alguma regra falhar, o pipeline para antes de gravar dado ruim no lake. Isso protege todos os modelos e relatórios que dependem da camada refined."
   },
   {
    "icon": "⚙️",
    "title": "FinOps · S3 Lifecycle",
    "desc": "Políticas automáticas: dados com mais de 90 dias vão para o S3 Infrequent Access (mais barato) e com mais de 180 dias para o Glacier (arquivamento). O custo caiu 35% com planejamento do acesso aos arquivos; Glacier Flexible Retrieval e Deep Archive exigem restauração antes da leitura."
   }
  ],
  "codeDisclaimer": "⚠️ Modelos didáticos de código, com dados fictícios. Nenhum trecho contém credenciais, nomes de recursos internos, dados de clientes ou informações sensíveis da Creditas ou de qualquer outro projeto.",
  "code": [
   {
    "tab": "Terraform EMR",
    "label": "Cluster EMR com auto-scaling e spot instances (Terraform HCL)",
    "note": "Este código (Terraform) cria o cluster de processamento (o EMR) já configurado, sem ninguém montar nada na mão. Ele usa máquinas Spot, que são bem mais baratas por serem capacidade ociosa da AWS, e cresce ou encolhe sozinho conforme a carga de trabalho (auto-scaling). Como tudo é declarado em código, o mesmo ambiente pode ser recriado idêntico a qualquer momento.",
    "code": "resource \"aws_emr_cluster\" \"creditas_credit_cluster\" {\n  name          = \"creditas-credit-etl\"\n  release_label = \"emr-6.9.0\"\n  applications  = [\"Spark\", \"Hive\", \"Hadoop\"]\n\n  master_instance_group {\n    instance_type = \"m5.xlarge\"\n  }\n  core_instance_group {\n    instance_type  = \"m5.2xlarge\"\n    instance_count = 2\n    bid_price      = \"0.15\"  # spot: 70% mais barato\n  }\n  auto_scaling_role = aws_iam_role.emr_autoscaling.arn\n  configurations_json = jsonencode([{\n    \"Classification\" = \"spark-defaults\",\n    \"Properties\" = {\n      \"spark.sql.parquet.compression.codec\" = \"snappy\",\n      \"spark.sql.shuffle.partitions\"        = \"200\"\n    }\n  }])\n}"
   },
   {
    "tab": "S3 Lifecycle",
    "label": "Política de lifecycle automático no data lake (Python · boto3)",
    "note": "Define regras que movem os dados sozinhas conforme eles envelhecem: até 90 dias ficam no armazenamento rápido e mais caro, depois vão para um mais barato e, com 180 dias, para o \"arquivo morto\" (Glacier), o mais barato de todos. Dados temporários são apagados em 30 dias. Assim o custo de armazenamento cai automaticamente, com classes de armazenamento e restauração planejadas para cada tipo de acesso.",
    "code": "import boto3\n\ns3 = boto3.client(\"s3\")\ns3.put_bucket_lifecycle_configuration(\n    Bucket=\"creditas-datalake\",\n    LifecycleConfiguration={\n        \"Rules\": [{\n            \"ID\": \"auto-tiering\",\n            \"Status\": \"Enabled\",\n            \"Filter\": {\"Prefix\": \"refined/\"},\n            \"Transitions\": [\n                {\"Days\": 90,  \"StorageClass\": \"STANDARD_IA\"},\n                {\"Days\": 180, \"StorageClass\": \"GLACIER\"}\n            ]\n        },{\n            \"ID\": \"delete-raw-temp\",\n            \"Status\": \"Enabled\",\n            \"Filter\": {\"Prefix\": \"raw/temp/\"},\n            \"Expiration\": {\"Days\": 30}\n        }]\n    }\n)\nprint(\"Lifecycle configurado: -35% custo de storage\")"
   },
   {
    "tab": "Great Expectations",
    "label": "Suite de qualidade de dados para a camada refined do data lake (Python)",
    "note": "Great Expectations define expectativas (contratos) sobre os dados: o CPF nunca pode ser nulo, o score precisa estar entre 0 e 1000, o DSR entre 0 e 1. Se qualquer regra falhar, o pipeline para automaticamente antes de gravar na camada refined, protegendo todos os modelos e relatórios downstream.",
    "code": "# Exemplo didático (dados e nomes fictícios)\nimport great_expectations as gx\n\ncontext = gx.get_context()\nsuite_name = \"credit_features_suite\"\n\nvalidator = context.sources.pandas_default.read_parquet(\n    \"s3://creditas-datalake/refined/credit_features/dt=2022-09-01/\"\n)\n\n# Contratos de qualidade da camada refined\nvalidator.expect_column_to_exist(\"cpf_hash\")\nvalidator.expect_column_values_to_not_be_null(\"cpf_hash\")\nvalidator.expect_column_values_to_not_be_null(\"score\")\nvalidator.expect_column_values_to_be_between(\"score\", min_value=0, max_value=1000)\nvalidator.expect_column_values_to_not_be_null(\"dsr\")\nvalidator.expect_column_values_to_be_between(\"dsr\", min_value=0.0, max_value=1.0)\nvalidator.expect_column_values_to_be_between(\"ticket_medio\", min_value=0)\nvalidator.expect_column_values_to_not_be_null(\"renda_estimada\")\nvalidator.expect_table_row_count_to_be_between(min_value=10_000)\n\nresults = validator.validate()\nif not results[\"success\"]:\n    # Pipeline para: dado corrompido não avança para o lake refined\n    raise ValueError(f\"Qualidade reprovada: {results['statistics']['unsuccessful_expectations']} expectativas falharam.\")\n\nprint(\"Qualidade aprovada: pipeline pode continuar.\")"
   },
   {
    "tab": "Credit Features",
    "label": "Feature engineering para risco de crédito, PySpark + MLlib (Python)",
    "note": "Transforma o histórico de transações de cada cliente (agrupado por CPF) em números que o modelo de crédito entende, as chamadas features: quantidade de transações, ticket médio, variação dos gastos, renda estimada pelas entradas, gasto pelas saídas, diversidade de categorias e o DSR (a fatia da renda já comprometida com dívida). O resultado é gravado pronto para o modelo consumir.",
    "code": "from pyspark.sql import SparkSession\nfrom pyspark.sql import functions as F\nfrom pyspark.ml.feature import VectorAssembler\n\nspark = SparkSession.builder.appName(\"creditas-credit-features\").getOrCreate()\n\ntransactions = spark.read.parquet(\"s3://creditas-datalake/trusted/transactions/\")\n\nfeatures = transactions.groupBy(\"cpf\").agg(\n    F.count(\"*\").alias(\"tx_count_90d\"),\n    F.avg(\"amount\").alias(\"avg_tx_amount\"),\n    F.stddev(\"amount\").alias(\"stddev_amount\"),\n    F.sum(F.when(F.col(\"type\")==\"credit\", F.col(\"amount\")).otherwise(0)).alias(\"total_income\"),\n    F.sum(F.when(F.col(\"type\")==\"debit\",  F.col(\"amount\")).otherwise(0)).alias(\"total_spend\"),\n    F.countDistinct(\"merchant_category\").alias(\"diversity_score\")\n).withColumn(\"dsr\", F.col(\"total_spend\") / F.col(\"total_income\"))\n\nassembler = VectorAssembler(\n    inputCols=[\"tx_count_90d\",\"avg_tx_amount\",\"dsr\",\"diversity_score\"],\n    outputCol=\"features\"\n)\nfeature_vector = assembler.transform(features)\nfeature_vector.write.mode(\"overwrite\")     .parquet(\"s3://creditas-datalake/refined/credit_features/\")\nprint(f\"Features geradas para {feature_vector.count()} clientes, latência alvo < 10ms\")"
   }
  ],
  "faq": [
   {
    "q": "Por que Parquet com Snappy em vez de CSV?",
    "a": "CSV armazena texto puro, sem compressão, sem tipos de coluna, sem skip de colunas. Parquet armazena em colunas (lê só o que a query precisa), comprimido com Snappy (lossless, rápido de descomprimir). Para as queries de crédito que leem 3-4 colunas de 13 TB, isso reduziu o scan em ~90%."
   },
   {
    "q": "Como o lifecycle automático funciona?",
    "a": "Políticas S3 movem dados automaticamente por \"temperatura\": dados recentes ficam em Standard (acesso frequente), depois de 90 dias vão para Infrequent Access (40% mais barato), depois de 180 dias para Glacier (80% mais barato). Glacier Flexible Retrieval e Deep Archive exigem restauração, não acesso transparente por qualquer consulta. Athena sobre objetos restaurados chegou em 2023: não é uma capacidade atribuída ao projeto de 2022."
   },
   {
    "q": "O que é Redshift Spectrum e quando usar?",
    "a": "Spectrum é uma extensão do Redshift que executa queries diretamente nos arquivos S3 sem importar os dados para o cluster. Perfeito para histórico: dados de mais de 90 dias ficam no lake (barato), mas ainda são consultáveis via SQL. Quando o dado é acessado frequentemente, aí vale mover para o cluster Redshift."
   },
   {
    "q": "Por que usar Hudi e S3 Versioning juntos se parecem resolver o mesmo problema?",
    "a": "Porque atuam em níveis diferentes. O Hudi controla a evolução lógica das tabelas: upserts, processamento incremental, histórico de commits e quais arquivos pertencem à versão válida de uma tabela. O S3 Versioning protege fisicamente os objetos: se um arquivo for sobrescrito ou excluído por engano, a versão anterior pode ser recuperada. O Hudi sabe quais arquivos formam o estado consistente de uma tabela, mas não protege contra a sobrescrita acidental do objeto físico. O S3 Versioning sabe que existem diferentes versões de um objeto, mas não entende transações ou chaves de negócio. O Lifecycle controla o custo dessa proteção, definindo por quanto tempo as versões são mantidas."
   },
   {
    "q": "Por que o lakeFS não foi adotado?",
    "a": "Foi conduzida uma POC que avaliou branches de dados, commits e merges. A análise mostrou que a necessidade prioritária era recuperar objetos em caso de sobrescrita acidental e que os pipelines não apresentavam demanda que justificasse uma nova camada operacional. A combinação de S3 Versioning, lifecycle e Apache Hudi já atendia aos requisitos com integração nativa à AWS, menor complexidade e sem introduzir novos metadados a manter. O lakeFS permanece como alternativa para cenários futuros que exijam experimentação paralela ou publicação baseada em merge."
   }
  ]
 },
 {
  "f": "start",
  "flag": "br",
  "n": "QuintoAndar",
  "dom": "quintoandar.com.br",
  "per": "2021 a 2022",
  "r": "Data Reliability Engineer",
  "d": "No QuintoAndar, trabalhei diretamente na confiabilidade e modernização da plataforma de dados. Padronizei a implantação das aplicações, construí o catálogo e a linhagem desde a base e evoluí a observabilidade e a manutenção dos componentes.",
  "heroChips": [
   "Google Cloud · Certificada",
   "Python",
   "Plataforma · SRE · Kubernetes",
   "Catálogo · Apache Atlas"
  ],
  "t": {
   "en": {
    "r": "Data Reliability Engineer",
    "per": "2021 to 2022",
    "d": "Modernization and reliability of a data platform on Google Cloud and AWS: standardizing applications with Kubernetes and Helm (installation packages, a reusable \"recipe\" for how to deploy each service), Apache Atlas deployed from the ground up for catalog and lineage, and evolving observability and component maintenance.",
    "heroChips": [
     "Google Cloud · Certified",
     "Python",
     "Platform · SRE · Kubernetes",
     "Catalog · Apache Atlas"
    ],
    "app": {
     "sub": "DATA SRE",
     "h": "Pipelines that <em>don't go down.</em>",
     "d": "Simulation of the data SRE routine at QuintoAndar: health of pipelines running on Kubernetes, a dataset catalog with owners and reliability alerts with a response runbook. Didactic simulation, no corporate data."
    },
    "metrics": [
     {
      "v": "GCP + AWS",
      "l": "multicloud platform · Kubernetes and Helm"
     },
     {
      "v": "Apache Atlas",
      "l": "catalog built from the ground up"
     },
     {
      "v": "Lineage",
      "l": "data origins and dependencies"
     },
     {
      "v": "Reliability",
      "l": "observability and maintenance"
     }
    ],
    "demos": [
     {
      "kind": "app",
      "t": "SRE Live Dashboard · QuintoAndar",
      "d": "Live SRE dashboard: Kubernetes pod grid, SLO burn rate per pipeline, Prometheus alert feed and an incident simulation with real-time MTTR.",
      "u": "quintoandar-sre-dashboard.html",
      "btn": "Open SRE dashboard →"
     }
    ],
    "stints": [
     {
      "r": "Data Reliability Engineer",
      "per": "2021 to 2022",
      "prob": "The data platform ran on Google Cloud and AWS with scattered configurations and no formal deployment standard. It lacked a reproducible deployment base, consistent component observability and a catalog-and-governance foundation for data assets.",
      "dec": "Applications were modernized to Kubernetes and Helm Charts: scattered configurations became versioned packages, with environment-specific values, explicit dependencies and control over deployment and rollback. The charts organized images, configurations, secrets, CPU and memory resources, services, volumes and health probes (the automatic liveness and readiness checks that tell Kubernetes whether a service is alive and ready). Alongside sustaining the workloads (pod health, resource consumption, restarts and availability), Apache Atlas was deployed from the ground up, structuring the service, dependencies, persistence, security and integration to build a foundation for catalog, classification, metadata and lineage (the map of where each piece of data came from and what it passed through).",
      "res": "More predictable and reproducible deployments, standardized environments across Google Cloud and AWS, more structured operational recovery and greater visibility into component health. Apache Atlas began sustaining catalog and metadata, allowing governance to evolve as a capability of the platform itself, with less dependence on manual configuration.",
      "metrics": [
       "Versioned Kubernetes + Helm",
       "Apache Atlas from the ground up",
       "component observability",
       "GCP and AWS standardized"
      ],
      "stack": [
       "Kubernetes",
       "GKE",
       "Helm",
       "Docker",
       "Python",
       "Airflow",
       "Terraform",
       "Grafana",
       "Prometheus",
       "Apache Atlas",
       "SRE"
      ]
     }
    ],
    "arch": [
     [
      "Kubernetes Infrastructure",
      "GKE + AWS · execution base for the components"
     ],
     [
      "Observability",
      "Prometheus · Grafana · SLOs and incident response"
     ],
     [
      "Workload Delivery",
      "Helm Charts · Terraform · deployment and rollback"
     ],
     [
      "Platform Catalog",
      "Apache Atlas running on Kubernetes · metadata and lineage"
     ]
    ],
    "stat3": [
     {
      "v": "GCP + AWS",
      "l": "two cloud environments operated together on the data platform"
     },
     {
      "v": "Apache Atlas",
      "l": "catalog and metadata platform deployed from the ground up"
     },
     {
      "v": "Helm",
      "l": "versioned, reproducible deployment standard for the components"
     }
    ],
    "layers": [
     {
      "icon": "☸️",
      "title": "Kubernetes · orchestration",
      "desc": "Kubernetes is the system that keeps hundreds of software \"boxes\" running, restarting on its own whatever goes down, and distributing load. Here, on a GKE cluster (Google managed Kubernetes) that grows and shrinks with demand (auto-scaling), each pipeline ran in isolated pods (the smallest executable units) with defined resource limits, so one pipeline never brought down another. Services were installed via Helm charts, packages that describe, like a recipe, what to deploy and how to configure it."
     },
     {
      "icon": "📊",
      "title": "Prometheus + Grafana",
      "desc": "Real-time metrics for every pipeline. Dashboards by data domain. Alerts configured by SLO, not arbitrary thresholds."
     },
     {
      "icon": "⚙️",
      "title": "Terraform · IaC",
      "desc": "All infrastructure as code. Changes go through PR and review before reaching production. Rollback within minutes if something goes wrong."
     },
     {
      "icon": "🎯",
      "title": "Data as a product · SLOs",
      "desc": "Every critical pipeline has an SLO (a measurable reliability target, like keeping 95% of listings updated within an hour), an owner and a runbook. A runbook is the documented operational procedure guiding diagnosis, decision, recovery and validation of an incident. When an SLO is at risk, the alert arrives with context and the team follows a safe path instead of investigating everything from scratch."
     },
     {
      "icon": "🗂️",
      "title": "Apache Atlas · catalog and governance",
      "desc": "Apache Atlas is the data catalog and governance tool, deployed from the ground up on top of the Kubernetes platform itself. It registers every dataset, who owns it, and its lineage (the path data takes between source, transformations and consumption). It is what makes it possible to discover where data lives, understand where it came from, and assess impact before changing anything. Atlas is a governance layer that runs on top of the infrastructure, not a byproduct of deployment automation."
     }
    ],
    "codeNotes": [
     {
      "tab": "K8s Probe",
      "label": "Health check and liveness probe for a data pipeline (YAML + Python)",
      "note": "This example shows how Kubernetes continuously checks whether a data component is still healthy. The liveness probe runs a small Python health check every 60 seconds. If it fails three times, Kubernetes restarts only the affected pod. Requests reserve the minimum CPU and memory capacity; limits prevent a workload from consuming resources to the point of harming other platform components."
     },
     {
      "tab": "SRE DAG",
      "label": "Circuit breaker pattern in an Airflow DAG (Python · SRE)",
      "note": "The DAG represents a pipeline protected by reliability practices. Each run has a time limit, three automatic retries and a delay between reprocessing attempts. The received volume is validated before publishing; a significant deviation consumes the error budget and pages the on-call team. Before publishing to BigQuery, the flow checks the SLO to prevent a technically completed delivery from being treated as healthy when quality or timeliness fall outside the target."
     },
     {
      "tab": "Prometheus Alerts",
      "label": "SRE alert rules by SLO, Prometheus YAML (declarative)",
      "note": "These rules turn metrics into useful operational signals. The first alert tracks the proportion of failed tasks and only pages the on-call team when the SLO stays at risk for ten minutes, avoiding noise from an isolated failure that recovers on its own. The second identifies pipelines with no run within the expected window. Each alert reports severity, owning team, recovery target and the runbook: the documented procedure for diagnosis, fix and validation."
     }
    ],
    "faq": [
     {
      "q": "What is SRE applied to data?",
      "a": "SRE (Site Reliability Engineering) is the practice of treating infrastructure as software. In data, that means: defining SLOs per pipeline (e.g., 99.5% success), measuring error budget, having documented runbooks for each failure type, and automating incident response. The goal is to move from \"the pipeline went down, let's see what happened\" to \"the pipeline fell out of SLO, runbook #3 ran automatically\"."
     },
     {
      "q": "Why SLOs and not simple failure alerts?",
      "a": "A simple alert only responds to a technical event, for example: \"a task failed.\" That can page and interrupt the on-call team even when the pipeline itself reprocesses and recovers quickly. The SLO, Service Level Objective, measures the outcome perceived by whoever uses the data. Example: \"at least 95% of listings need to be updated within an hour.\" If a run fails, reprocesses within ten minutes and still delivers within that window, the commitment was met. The error budget is the margin of unavailability tolerated by the target; the burn rate shows how fast that margin is being consumed. This way, the team prioritizes incidents that threaten freshness, availability or quality, instead of reacting to every isolated error."
     },
     {
      "q": "How was Kubernetes applied specifically to data?",
      "a": "Kubernetes was QuintoAndar main infrastructure and also sustained part of the data platform. It organized components like Airflow, supporting services, observability and the Apache Atlas platform itself into pods, deployments and services. Helm Charts standardized installation, configuration and updates; requests and limits controlled CPU and memory; probes checked health; autoscaling and restart policies helped operational continuity. Apache Atlas was not a step in the automation: it was a catalog-and-governance product running on top of this Kubernetes infrastructure, with its own components, persistence and integrations to record metadata, classifications and lineage."
     }
    ]
   },
   "es": {
    "r": "Data Reliability Engineer",
    "per": "2021 a 2022",
    "d": "Modernización y confiabilidad de una plataforma de datos en Google Cloud y AWS: estandarización de las aplicaciones con Kubernetes y Helm (los paquetes de instalación, una \"receta\" reutilizable de cómo desplegar cada servicio), Apache Atlas implementado desde la base para catálogo y linaje, y evolución de la observabilidad y el mantenimiento de los componentes.",
    "heroChips": [
     "Google Cloud · Certificada",
     "Python",
     "Plataforma · SRE · Kubernetes",
     "Catálogo · Apache Atlas"
    ],
    "app": {
     "sub": "SRE DE DATOS",
     "h": "Pipelines que <em>no se caen.</em>",
     "d": "Simulación de la rutina de SRE de datos en QuintoAndar: salud de los pipelines corriendo en Kubernetes, catálogo de datasets con owners y alertas de confiabilidad con runbook de respuesta. Simulación didáctica, sin datos corporativos."
    },
    "metrics": [
     {
      "v": "GCP + AWS",
      "l": "plataforma multicloud · Kubernetes y Helm"
     },
     {
      "v": "Apache Atlas",
      "l": "catálogo implantado desde la base"
     },
     {
      "v": "Linaje",
      "l": "origen y dependencias de datos"
     },
     {
      "v": "Confiabilidad",
      "l": "observabilidad y mantenimiento"
     }
    ],
    "demos": [
     {
      "kind": "app",
      "t": "SRE Live Dashboard · QuintoAndar",
      "d": "Dashboard SRE en vivo: grid de pods Kubernetes, SLO burn rate por pipeline, feed de alertas Prometheus y simulación de incidente con MTTR en tiempo real.",
      "u": "quintoandar-sre-dashboard.html",
      "btn": "Abrir dashboard SRE →"
     }
    ],
    "stints": [
     {
      "r": "Data Reliability Engineer",
      "per": "2021 a 2022",
      "prob": "La plataforma de datos operaba sobre Google Cloud y AWS con configuraciones dispersas y sin un estándar formal de implementación. Faltaba una base reproducible de deploy, observabilidad consistente de los componentes y una base de catálogo y gobernanza para los activos de datos.",
      "dec": "Las aplicaciones se modernizaron hacia Kubernetes y Helm Charts: configuraciones dispersas se convirtieron en paquetes versionados, con valores específicos por ambiente, dependencias explícitas y control sobre implementación y rollback. Los charts organizaban imágenes, configuraciones, secrets, recursos de CPU y memoria, servicios, volúmenes y probes de salud (las verificaciones automáticas de liveness y readiness que le dicen a Kubernetes si el servicio está vivo y listo). En paralelo al sostenimiento de los workloads (salud de los pods, consumo de recursos, reinicios y disponibilidad), Apache Atlas se implementó desde la base, estructurando servicio, dependencias, persistencia, seguridad e integración para crear una base de catálogo, clasificación, metadatos y linaje (el mapa de dónde vino cada dato y por dónde pasó).",
      "res": "Implementaciones más predecibles y reproducibles, ambientes estandarizados entre Google Cloud y AWS, recuperación operativa más estructurada y mayor visibilidad sobre la salud de los componentes. Apache Atlas pasó a sostener catálogo y metadatos, permitiendo evolucionar la gobernanza como una capacidad de la propia plataforma, con menor dependencia de configuración manual.",
      "metrics": [
       "Kubernetes + Helm versionado",
       "Apache Atlas desde la base",
       "observabilidad de componentes",
       "GCP y AWS estandarizados"
      ],
      "stack": [
       "Kubernetes",
       "GKE",
       "Helm",
       "Docker",
       "Python",
       "Airflow",
       "Terraform",
       "Grafana",
       "Prometheus",
       "Apache Atlas",
       "SRE"
      ]
     }
    ],
    "arch": [
     [
      "Infraestructura Kubernetes",
      "GKE + AWS · base de ejecución de los componentes"
     ],
     [
      "Observabilidad",
      "Prometheus · Grafana · SLOs y respuesta a incidentes"
     ],
     [
      "Entrega de workloads",
      "Helm Charts · Terraform · implementación y rollback"
     ],
     [
      "Catálogo en la plataforma",
      "Apache Atlas ejecutado en Kubernetes · metadatos y linaje"
     ]
    ],
    "stat3": [
     {
      "v": "GCP + AWS",
      "l": "dos ambientes de nube operados en conjunto en la plataforma de datos"
     },
     {
      "v": "Apache Atlas",
      "l": "plataforma de catálogo y metadatos implementada desde la base"
     },
     {
      "v": "Helm",
      "l": "estándar de implementación versionado y reproducible para los componentes"
     }
    ],
    "layers": [
     {
      "icon": "☸️",
      "title": "Kubernetes · orquestación",
      "desc": "Kubernetes es el sistema que mantiene cientos de \"cajitas\" de software en funcionamiento, reinicia solo lo que se cae y distribuye la carga. Aquí, en un clúster GKE (el Kubernetes gestionado de Google) que crece y se reduce según la demanda (auto-scaling), cada pipeline corría en pods aislados (las unidades ejecutables más pequeñas) con límites de recursos definidos, de modo que un pipeline nunca derribaba a otro. Los servicios se instalaban mediante Helm charts, los paquetes que describen, como una receta, qué desplegar y cómo configurarlo."
     },
     {
      "icon": "📊",
      "title": "Prometheus + Grafana",
      "desc": "Métricas de todos los pipelines en tiempo real. Dashboards por dominio de datos. Alertas configuradas por SLO, no por umbrales arbitrarios."
     },
     {
      "icon": "⚙️",
      "title": "Terraform · IaC",
      "desc": "Toda la infraestructura como código. Los cambios pasan por PR y revisión antes de ir a producción. Rollback en minutos si algo sale mal."
     },
     {
      "icon": "🎯",
      "title": "Datos como producto · SLOs",
      "desc": "Cada pipeline crítico tiene un SLO (meta medible de confiabilidad, como mantener el 95% de los inmuebles actualizados en hasta una hora), un responsable y un runbook. Runbook es el procedimiento operativo documentado que guía diagnóstico, decisión, recuperación y validación de un incidente. Cuando el SLO entra en riesgo, la alerta llega con contexto y el equipo sigue un camino seguro, sin investigar todo desde cero."
     },
     {
      "icon": "🗂️",
      "title": "Apache Atlas · catálogo y gobernanza",
      "desc": "Apache Atlas es la herramienta de catálogo y gobernanza de datos, implementada desde la base sobre la propia plataforma Kubernetes. Registra cada dataset, quién es el responsable y el linaje (el camino que recorre el dato entre origen, transformaciones y consumo). Es lo que permite descubrir dónde vive un dato, entender de dónde vino y evaluar el impacto antes de cambiar cualquier cosa. Atlas es una capa de gobernanza que corre sobre la infraestructura, y no un resultado de la automatización de despliegue."
     }
    ],
    "codeNotes": [
     {
      "tab": "K8s Probe",
      "label": "Health check y liveness probe de pipeline de datos (YAML + Python)",
      "note": "Este ejemplo muestra cómo Kubernetes verifica continuamente si un componente de datos sigue saludable. La liveness probe ejecuta un pequeño health check en Python cada 60 segundos. Si falla tres veces, Kubernetes reinicia solo el pod afectado. Los requests reservan la capacidad mínima de CPU y memoria; los limits impiden que un workload consuma recursos al punto de perjudicar a los demás componentes de la plataforma."
     },
     {
      "tab": "SRE DAG",
      "label": "Patrón circuit breaker en DAG de Airflow (Python · SRE)",
      "note": "La DAG representa un pipeline protegido por prácticas de confiabilidad. Cada ejecución tiene límite de tiempo, tres intentos automáticos e intervalo entre reprocesamientos. El volumen recibido se valida antes de la publicación; una desviación relevante consume el error budget y activa el turno de guardia. Antes de publicar en BigQuery, el flujo verifica el SLO para impedir que una entrega técnicamente completada se trate como saludable cuando la calidad o la puntualidad estén fuera de la meta."
     },
     {
      "tab": "Prometheus Alerts",
      "label": "Reglas de alerta SRE por SLO, Prometheus YAML (declarativo)",
      "note": "Estas reglas transforman métricas en señales operativas útiles. La primera alerta monitorea la proporción de tareas fallidas y solo llama al turno de guardia cuando el SLO permanece en riesgo durante diez minutos, evitando ruido por una falla aislada que se recupera sola. La segunda identifica pipelines sin ejecución dentro de la ventana esperada. Cada alerta informa severidad, equipo responsable, objetivo de recuperación y el runbook: el procedimiento documentado de diagnóstico, corrección y validación."
     }
    ],
    "faq": [
     {
      "q": "¿Qué es SRE aplicado a datos?",
      "a": "SRE (Site Reliability Engineering) es la práctica de tratar la infraestructura como software. En datos, esto significa: definir SLOs por pipeline (ej: 99,5% de éxito), medir error budget, tener runbooks documentados para cada tipo de falla y automatizar la respuesta a incidentes. El objetivo es pasar de \"el pipeline se cayó, vamos a ver qué pasó\" a \"el pipeline salió del SLO, el runbook #3 se ejecutó automáticamente\"."
     },
     {
      "q": "¿Por qué SLOs y no alertas simples de falla?",
      "a": "Una alerta simple responde solo a un evento técnico, por ejemplo: \"una tarea falló\". Eso puede generar pager e interrumpir el turno de guardia incluso cuando el propio pipeline reprocesa y se recupera rápidamente. El SLO, Service Level Objective, mide el resultado percibido por quien usa el dato. Ejemplo: \"al menos el 95% de los inmuebles deben estar actualizados en hasta una hora\". Si una ejecución falla, reprocesa en diez minutos y aun así entrega dentro de esa ventana, el compromiso se cumplió. El error budget es el margen de indisponibilidad tolerado por la meta; el burn rate muestra la velocidad con que ese margen se está consumiendo. Así, el equipo prioriza incidentes que amenazan frescura, disponibilidad o calidad, en vez de reaccionar a cada error aislado."
     },
     {
      "q": "¿Cómo se aplicó Kubernetes específicamente a datos?",
      "a": "Kubernetes era la infraestructura principal de QuintoAndar y también sostenía parte de la plataforma de datos. Organizaba componentes como Airflow, servicios auxiliares, observabilidad y la propia plataforma Apache Atlas en pods, deployments y services. Los Helm Charts estandarizaban instalación, configuración y actualización; requests y limits controlaban CPU y memoria; los probes verificaban salud; autoscaling y políticas de reinicio ayudaban a la continuidad operativa. Apache Atlas no era una etapa de la automatización: era un producto de catálogo y gobernanza ejecutado sobre esa infraestructura Kubernetes, con sus propios componentes, persistencia e integraciones para registrar metadatos, clasificaciones y linaje."
     }
    ]
   },
   "ja": {
    "r": "データ信頼性エンジニア",
    "per": "2021年〜2022年",
    "d": "Google CloudとAWS上のデータプラットフォームのモダナイゼーションと信頼性向上: KubernetesとHelm（各サービスの展開方法を再利用可能な「レシピ」としてまとめたインストールパッケージ）によるアプリケーションの標準化、カタログとリネージのために基盤から導入したApache Atlas、可観測性とコンポーネント保守の進化。",
    "heroChips": [
     "Google Cloud · 認定資格",
     "Python",
     "プラットフォーム · SRE · Kubernetes",
     "カタログ · Apache Atlas"
    ],
    "app": {
     "sub": "データSRE",
     "h": "<em>止まらない</em>パイプライン。",
     "d": "QuintoAndarにおけるデータSRE業務のシミュレーション: Kubernetes上で稼働するパイプラインの健全性、オーナー付きデータセットカタログ、対応runbook付きの信頼性アラート。企業データを使わない教育目的のシミュレーションです。"
    },
    "metrics": [
     {
      "v": "GCP + AWS",
      "l": "マルチクラウド · KubernetesとHelm"
     },
     {
      "v": "Apache Atlas",
      "l": "カタログを基礎から実装"
     },
     {
      "v": "リネージ",
      "l": "データの出所と依存関係"
     },
     {
      "v": "信頼性",
      "l": "可観測性と保守"
     }
    ],
    "demos": [
     {
      "kind": "app",
      "t": "SRE Live Dashboard · QuintoAndar",
      "d": "ライブSREダッシュボード: Kubernetesポッドグリッド、パイプライン別SLOバーンレート、Prometheusアラートフィード、リアルタイムMTTRを伴うインシデントシミュレーション。",
      "u": "quintoandar-sre-dashboard.html",
      "btn": "SREダッシュボードを開く →"
     }
    ],
    "stints": [
     {
      "r": "データ信頼性エンジニア",
      "per": "2021年〜2022年",
      "prob": "データプラットフォームはGoogle CloudとAWS上で稼働していましたが、設定が分散し、正式なデプロイ標準がありませんでした。再現可能なデプロイ基盤、一貫したコンポーネントの可観測性、データ資産のカタログ・ガバナンス基盤が不足していました。",
      "dec": "アプリケーションはKubernetesとHelm Chartsへとモダナイズされました: 分散していた設定は、環境固有の値、明示的な依存関係、デプロイとロールバックの制御を備えたバージョン管理パッケージへと変わりました。ChartはイメージやSecrets、CPU・メモリのリソース、Service、Volume、ヘルスプローブ（サービスが生存し準備完了しているかをKubernetesに伝える自動的なliveness・readiness確認）を整理しました。ワークロード（ポッドの健全性、リソース消費、再起動、可用性）の維持と並行して、Apache Atlasが基盤から導入され、サービス、依存関係、永続化、セキュリティ、連携を体系化し、カタログ、分類、メタデータ、リネージ（データがどこから来てどこを通ったかの地図）の基盤を構築しました。",
      "res": "より予測可能で再現性のあるデプロイ、Google CloudとAWS間で標準化された環境、より体系的な運用復旧、コンポーネントの健全性に対するより高い可視性を実現しました。Apache Atlasはカタログとメタデータを支える存在となり、ガバナンスを手動設定への依存を減らしながらプラットフォーム自体の能力として進化させることを可能にしました。",
      "metrics": [
       "バージョン管理されたKubernetes + Helm",
       "基盤から導入したApache Atlas",
       "コンポーネントの可観測性",
       "GCPとAWSの標準化"
      ],
      "stack": [
       "Kubernetes",
       "GKE",
       "Helm",
       "Docker",
       "Python",
       "Airflow",
       "Terraform",
       "Grafana",
       "Prometheus",
       "Apache Atlas",
       "SRE"
      ]
     }
    ],
    "arch": [
     [
      "Kubernetesインフラ",
      "GKE + AWS · コンポーネントの実行基盤"
     ],
     [
      "可観測性",
      "Prometheus · Grafana · SLOとインシデント対応"
     ],
     [
      "ワークロード配信",
      "Helm Charts · Terraform · デプロイとロールバック"
     ],
     [
      "プラットフォームカタログ",
      "Kubernetes上で稼働するApache Atlas · メタデータとリネージ"
     ]
    ],
    "stat3": [
     {
      "v": "GCP + AWS",
      "l": "データプラットフォームで併用された2つのクラウド環境"
     },
     {
      "v": "Apache Atlas",
      "l": "基盤から導入されたカタログ・メタデータプラットフォーム"
     },
     {
      "v": "Helm",
      "l": "コンポーネント向けのバージョン管理された再現可能なデプロイ標準"
     }
    ],
    "layers": [
     {
      "icon": "☸️",
      "title": "Kubernetes · オーケストレーション",
      "desc": "Kubernetesは、数百の「ソフトウェアの箱」を稼働させ続け、落ちたものを自動で再起動し、負荷を分散するシステムです。ここでは、需要に応じて拡大・縮小するGKEクラスタ（Googleのマネージド Kubernetes、オートスケーリング）上で、各パイプラインがリソース上限を定義された分離ポッド（最小の実行単位）で稼働し、あるパイプラインが別のパイプラインを巻き込むことはありません。サービスは、何をどう構築・設定するかをレシピのように記述するパッケージであるHelm chartで導入されました。"
     },
     {
      "icon": "📊",
      "title": "Prometheus + Grafana",
      "desc": "全パイプラインのリアルタイム指標。データドメイン別ダッシュボード。恣意的な閾値ではなくSLOに基づいて設定されたアラート。"
     },
     {
      "icon": "⚙️",
      "title": "Terraform · IaC",
      "desc": "インフラをすべてコード化。変更は本番反映前にPRとレビューを経ます。問題発生時は数分でロールバック可能。"
     },
     {
      "icon": "🎯",
      "title": "プロダクトとしてのデータ · SLO",
      "desc": "すべての重要なパイプラインにSLO（不動産情報の95%を1時間以内に更新するといった測定可能な信頼性目標）、責任者、runbookが設定されています。runbookとは、インシデントの診断・判断・復旧・検証を導く文書化された運用手順です。SLOがリスクにさらされると、アラートは文脈情報とともに届き、チームはゼロから調査するのではなく、安全な手順に沿って対応します。"
     },
     {
      "icon": "🗂️",
      "title": "Apache Atlas · カタログとガバナンス",
      "desc": "Apache Atlasは、Kubernetesプラットフォーム自体の上に基盤から導入されたデータカタログ・ガバナンスツールです。すべてのデータセット、その責任者、リネージ（データがソース、変換、消費の間をたどる経路）を登録します。これにより、データがどこにあるかを発見し、その出所を理解し、変更前に影響を評価できます。Atlasはインフラの上で動くガバナンス層であり、デプロイ自動化の副産物ではありません。"
     }
    ],
    "codeNotes": [
     {
      "tab": "K8s Probe",
      "label": "データパイプラインのヘルスチェックとliveness probe（YAML + Python）",
      "note": "この例は、Kubernetesがデータコンポーネントの健全性を継続的に確認する方法を示しています。liveness probeは60秒ごとにPythonの小さなヘルスチェックを実行します。3回失敗すると、Kubernetesは影響を受けたポッドのみを再起動します。requestsは最小限のCPU・メモリ容量を確保し、limitsはあるワークロードが他のプラットフォームコンポーネントを損なうほどリソースを消費するのを防ぎます。"
     },
     {
      "tab": "SRE DAG",
      "label": "AirflowのDAGにおけるサーキットブレーカーパターン（Python · SRE）",
      "note": "このDAGは、信頼性の実践によって保護されたパイプラインを表しています。各実行には時間制限、3回の自動リトライ、再処理間の間隔があります。受信したデータ量は公開前に検証され、大きな乖離があるとエラーバジェットを消費してオンコール担当者に通知します。BigQueryへの公開前に、フローはSLOを確認し、品質や適時性が目標を外れているにもかかわらず技術的に完了した納品が健全とみなされることを防ぎます。"
     },
     {
      "tab": "Prometheus Alerts",
      "label": "SLOごとのSREアラートルール、Prometheus YAML（宣言的）",
      "note": "これらのルールは、指標を有用な運用シグナルに変換します。1つ目のアラートは失敗タスクの割合を追跡し、SLOが10分間リスクにさらされ続けた場合のみオンコール担当者を呼び出し、自然に回復する単発の障害によるノイズを防ぎます。2つ目は、想定されるウィンドウ内で実行のないパイプラインを特定します。各アラートには重大度、担当チーム、復旧目標、runbook（診断・修正・検証の文書化された手順）が記載されています。"
     }
    ],
    "faq": [
     {
      "q": "データに適用されたSREとは何ですか?",
      "a": "SRE（Site Reliability Engineering）は、インフラをソフトウェアとして扱う実践です。データにおいては、パイプラインごとのSLO定義（例: 成功率99.5%）、エラーバジェットの測定、障害の種類ごとに文書化されたrunbookの整備、インシデント対応の自動化を意味します。目標は、「パイプラインが落ちた、何が起きたか見てみよう」から「パイプラインがSLOを外れた、runbook #3が自動実行された」という状態への移行です。"
     },
     {
      "q": "なぜ単純な障害アラートではなくSLOなのですか?",
      "a": "単純なアラートは、「あるタスクが失敗した」といった技術的なイベントにのみ反応します。これは、パイプライン自体がすぐに再処理・復旧する場合でも、オンコール担当者を呼び出して業務を中断させる可能性があります。SLO（Service Level Objective）は、データを利用する側が体感する結果を測定します。例: 「不動産情報の少なくとも95%は1時間以内に更新される必要がある」。実行が失敗しても10分で再処理され、そのウィンドウ内に納品されれば、目標は達成されたことになります。エラーバジェットは目標が許容する不可用性の余地であり、バーンレートはその余地がどれだけの速さで消費されているかを示します。これにより、チームはすべての単発エラーに反応するのではなく、鮮度・可用性・品質を脅かすインシデントを優先できます。"
     },
     {
      "q": "Kubernetesはデータに対して具体的にどのように適用されましたか?",
      "a": "KubernetesはQuintoAndarの主要インフラであり、データプラットフォームの一部も支えていました。Airflow、補助サービス、可観測性、Apache Atlasプラットフォーム自体といったコンポーネントを、ポッド、デプロイメント、サービスとして整理していました。Helm Chartsはインストール、設定、更新を標準化し、requestsとlimitsがCPUとメモリを制御し、probeが健全性を確認し、オートスケーリングと再起動ポリシーが運用継続を支えました。Apache Atlasは自動化の一部ではなく、このKubernetesインフラの上で稼働する、独自のコンポーネント・永続化・連携を備えたカタログ・ガバナンス製品であり、メタデータ、分類、リネージを記録していました。"
     }
    ]
   }
  },
  "app": {
   "sub": "SRE DE DADOS",
   "h": "Pipelines que <em>não caem.</em>",
   "d": "Simulação da rotina de SRE de dados no QuintoAndar: saúde dos pipelines rodando em Kubernetes, catálogo de datasets com owners e alertas de confiabilidade com runbook de resposta. Simulação didática, sem dados corporativos."
  },
  "metrics": [
   {
    "v": "GCP + AWS",
    "l": "plataforma multicloud · Kubernetes e Helm"
   },
   {
    "v": "Apache Atlas",
    "l": "catálogo implantado desde a base"
   },
   {
    "v": "Linhagem",
    "l": "origem e dependências dos dados"
   },
   {
    "v": "Confiabilidade",
    "l": "observabilidade e manutenção"
   }
  ],
  "stack": [
   "Kubernetes",
   "GKE",
   "Helm",
   "Docker",
   "Apache Atlas",
   "Terraform",
   "Airflow",
   "Python",
   "Prometheus",
   "Grafana",
   "Google Cloud",
   "AWS",
   "SRE"
  ],
  "demos": [
   {
    "kind": "app",
    "t": "SRE Live Dashboard · QuintoAndar",
    "d": "Dashboard SRE ao vivo: grid de pods Kubernetes, SLO burn rate por pipeline, feed de alertas Prometheus e simulação de incidente com MTTR em tempo real.",
    "u": "quintoandar-sre-dashboard.html",
    "btn": "Abrir dashboard SRE →"
   }
  ],
  "stints": [
   {
    "r": "Data Reliability Engineer",
    "per": "2021 a 2022",
    "prob": "A plataforma de dados operava sobre Google Cloud e AWS com configurações dispersas e sem um padrão formal de implantação. Faltava uma base reproduzível de deploy, observabilidade consistente dos componentes e uma fundação de catálogo e governança para os ativos de dados.",
    "dec": "As aplicações foram modernizadas para Kubernetes e Helm Charts: configurações dispersas viraram pacotes versionados, com valores específicos por ambiente, dependências explícitas e controle sobre implantação e rollback. Os charts organizavam imagens, configurações, secrets, recursos de CPU e memória, serviços, volumes e probes de saúde (as verificações automáticas de liveness e readiness que dizem ao Kubernetes se o serviço está vivo e pronto). Em paralelo à sustentação dos workloads (saúde dos pods, consumo de recursos, reinicializações e disponibilidade), o Apache Atlas foi implantado desde a base, estruturando serviço, dependências, persistência, segurança e integração para criar uma fundação de catálogo, classificação, metadados e linhagem (o mapa de onde cada dado veio e por onde passou).",
    "res": "Implantações mais previsíveis e reproduzíveis, ambientes padronizados entre Google Cloud e AWS, recuperação operacional mais estruturada e maior visibilidade sobre a saúde dos componentes. O Apache Atlas passou a sustentar catálogo e metadados, permitindo evoluir a governança como uma capacidade da própria plataforma, com menor dependência de configuração manual.",
    "metrics": [
     "Kubernetes + Helm versionado",
     "Apache Atlas desde a base",
     "observabilidade de componentes",
     "GCP e AWS padronizados"
    ],
    "stack": [
     "Kubernetes",
     "GKE",
     "Helm",
     "Docker",
     "Python",
     "Airflow",
     "Terraform",
     "Grafana",
     "Prometheus",
     "Apache Atlas",
     "SRE"
    ]
   }
  ],
  "arch": [
   [
    "Infraestrutura Kubernetes",
    "GKE + AWS · base de execução dos componentes"
   ],
   [
    "Observabilidade",
    "Prometheus · Grafana · SLOs e resposta a incidentes"
   ],
   [
    "Entrega de workloads",
    "Helm Charts · Terraform · implantação e rollback"
   ],
   [
    "Catálogo na plataforma",
    "Apache Atlas executado no Kubernetes · metadados e linhagem"
   ]
  ],
  "archLinks": [
   [
    0,
    1
   ],
   [
    0,
    2
   ],
   [
    0,
    3
   ]
  ],
  "stat3": [
   {
    "v": "GCP + AWS",
    "l": "dois ambientes de cloud operados em conjunto na plataforma de dados"
   },
   {
    "v": "Apache Atlas",
    "l": "plataforma de catálogo e metadados implantada desde a base"
   },
   {
    "v": "Helm",
    "l": "padrão de implantação versionado e reproduzível para os componentes"
   }
  ],
  "layers": [
   {
    "icon": "☸️",
    "title": "Kubernetes · orquestração",
    "desc": "O Kubernetes é o sistema que mantém centenas de \"caixinhas\" de software no ar, reinicia sozinho o que cai e distribui a carga. Aqui, num cluster GKE (o Kubernetes gerenciado do Google) que cresce e encolhe conforme a demanda (auto-scaling), cada pipeline roda em pods isolados (os menores blocos executáveis) com limites de recurso definidos, então um pipeline nunca derruba o outro. Os serviços eram instalados por Helm charts, os pacotes que descrevem, como uma receita, o que subir e como configurar."
   },
   {
    "icon": "📊",
    "title": "Prometheus + Grafana",
    "desc": "Métricas de todos os pipelines em tempo real. Dashboards por domínio de dados. Alertas configurados por SLO, não por thresholds arbitrários."
   },
   {
    "icon": "⚙️",
    "title": "Terraform · IaC",
    "desc": "Toda infraestrutura como código. Mudanças passam por PR e revisão antes de ir para produção. Rollback em minutos se algo der errado."
   },
   {
    "icon": "🎯",
    "title": "Dados como produto · SLOs",
    "desc": "Cada pipeline crítico tem um SLO (meta mensurável de confiabilidade, como manter 95% dos imóveis atualizados em até uma hora), um responsável e um runbook. Runbook é o procedimento operacional documentado que orienta diagnóstico, decisão, recuperação e validação de um incidente. Quando o SLO entra em risco, o alerta chega com contexto e o time executa um caminho seguro, sem investigar tudo do zero."
   },
   {
    "icon": "🗂️",
    "title": "Apache Atlas · catálogo e governança",
    "desc": "O Apache Atlas é a ferramenta de catálogo e governança de dados, implantada desde a base sobre a própria plataforma Kubernetes. Ele registra cada dataset, quem é o responsável e a linhagem (o caminho que o dado percorre entre origem, transformações e consumo). É o que permite descobrir onde um dado vive, entender de onde ele veio e avaliar impacto antes de mudar qualquer coisa. O Atlas é uma camada de governança que roda sobre a infraestrutura, e não um resultado da automação de implantação."
   }
  ],
  "code": [
   {
    "tab": "K8s Probe",
    "label": "Health check e liveness probe de pipeline de dados (YAML + Python)",
    "code": "# Kubernetes liveness probe para pipeline crítico\napiVersion: v1\nkind: Pod\nmetadata:\n  name: quintoandar-pipeline-imoveis\nspec:\n  containers:\n  - name: pipeline\n    image: quintoandar/data-pipeline:latest\n    livenessProbe:\n      exec:\n        command: [\"python\", \"/app/healthcheck.py\"]\n      initialDelaySeconds: 30\n      periodSeconds: 60\n      failureThreshold: 3\n    resources:\n      requests: {memory: \"2Gi\", cpu: \"500m\"}\n      limits:   {memory: \"4Gi\", cpu: \"2000m\"}\n---\n# healthcheck.py\nimport sys\nfrom airflow.hooks.postgres_hook import PostgresHook\nhook = PostgresHook(\"pipeline_db\")\nresult = hook.get_first(\"SELECT COUNT(*) FROM pipeline_runs WHERE status='running'\")\nsys.exit(0 if result[0] >= 0 else 1)",
    "note": "Este exemplo mostra como o Kubernetes verifica continuamente se um componente de dados continua saudável. A liveness probe executa um pequeno health check em Python a cada 60 segundos. Se ele falhar três vezes, o Kubernetes reinicia somente o pod afetado. Requests reservam a capacidade mínima de CPU e memória; limits impedem que um workload consuma recursos a ponto de prejudicar os demais componentes da plataforma."
   },
   {
    "tab": "SRE DAG",
    "label": "Circuit breaker pattern em DAG Airflow (Python · SRE)",
    "code": "from airflow.decorators import dag, task\nfrom airflow.exceptions import AirflowException\nfrom datetime import datetime, timedelta\n\n@dag(schedule=\"@hourly\", start_date=datetime(2022, 1, 1),\n     default_args={\"retries\": 3, \"retry_delay\": timedelta(minutes=5),\n                   \"on_failure_callback\": page_on_call_engineer})\ndef quintoandar_imoveis_sre():\n\n    @task(execution_timeout=timedelta(minutes=30))\n    def ingest_listings():\n        try:\n            records = fetch_from_source()\n            if records < EXPECTED_MIN_RECORDS:\n                raise AirflowException(f\"Volume baixo: {records} < {EXPECTED_MIN_RECORDS}\")\n            return records\n        except Exception as e:\n            increment_error_budget(\"listings_pipeline\")\n            raise\n\n    @task\n    def validate_and_publish(records):\n        slo_ok = check_slo(\"listings_pipeline\", target=0.995)\n        if not slo_ok:\n            alert_sre_team(\"SLO em risco, error budget < 10%\")\n        return publish_to_bigquery(records)\n\n    validate_and_publish(ingest_listings())\n\nquintoandar_imoveis_sre()",
    "note": "A DAG representa um pipeline protegido por práticas de confiabilidade. Cada execução tem limite de tempo, três tentativas automáticas e intervalo entre reprocessamentos. O volume recebido é validado antes da publicação; um desvio relevante consome o error budget e aciona o plantão. Antes de publicar no BigQuery, o fluxo verifica o SLO para impedir que uma entrega tecnicamente concluída seja tratada como saudável quando a qualidade ou a pontualidade estiverem fora da meta."
   },
   {
    "tab": "Prometheus Alerts",
    "label": "Regras de alerta SRE por SLO, Prometheus YAML (declarativo)",
    "code": "# Prometheus alerting rules, SRE de dados QuintoAndar\ngroups:\n- name: data_platform_slos\n  rules:\n  - alert: PipelineSLOEmRisco\n    expr: |\n      (\n        sum(rate(airflow_task_failed_total[1h]))\n        / sum(rate(airflow_task_success_total[1h])\n            + rate(airflow_task_failed_total[1h]))\n      ) > 0.005\n    for: 10m\n    labels:\n      severity: critical\n      team: data-reliability\n    annotations:\n      summary: \"SLO em risco, taxa de falha {{ $value | humanizePercentage }}\"\n      runbook: \"https://wiki.quintoandar.com/runbooks/data-pipeline-slo\"\n\n  - alert: PipelineSemExecucao\n    expr: max_over_time(airflow_dag_run_duration_seconds[2h]) == 0\n    for: 30m\n    labels:\n      severity: warning\n    annotations:\n      summary: \"Pipeline parado > 2h: {{ $labels.dag_id }}\"\n      description: \"MTTR alvo: < 15min. Acionar runbook #{{ $labels.runbook_id }}\"",
    "note": "Estas regras transformam métricas em sinais operacionais úteis. O primeiro alerta acompanha a proporção de tarefas com falha e só chama o plantão quando o SLO permanece em risco por dez minutos, evitando ruído por uma falha isolada que se recupera sozinha. O segundo identifica pipelines sem execução dentro da janela esperada. Cada alerta informa severidade, time responsável, objetivo de recuperação e o runbook: o procedimento documentado de diagnóstico, correção e validação."
   }
  ],
  "faq": [
   {
    "q": "O que é SRE aplicado a dados?",
    "a": "SRE (Site Reliability Engineering) é a prática de tratar infra como software. Em dados, isso significa: definir SLOs por pipeline (ex: 99,5% de sucesso), medir error budget, ter runbooks documentados para cada tipo de falha e automatizar a resposta a incidentes. O objetivo é passar de \"o pipeline caiu, vamos ver o que aconteceu\" para \"o pipeline saiu do SLO, o runbook #3 foi executado automaticamente\"."
   },
   {
    "q": "Por que SLOs e não alertas simples de falha?",
    "a": "Um alerta simples responde apenas a um evento técnico, por exemplo: \"uma tarefa falhou\". Isso pode gerar pager e interromper o plantão mesmo quando o próprio pipeline reprocessa e se recupera rapidamente. O SLO, Service Level Objective, mede o resultado percebido por quem usa o dado. Exemplo: \"pelo menos 95% dos imóveis precisam estar atualizados em até uma hora\". Se uma execução falha, reprocessa em dez minutos e ainda entrega dentro dessa janela, o compromisso foi cumprido. O error budget é a margem de indisponibilidade tolerada pela meta; o burn rate mostra a velocidade com que essa margem está sendo consumida. Assim, o time prioriza incidentes que ameaçam frescor, disponibilidade ou qualidade, em vez de reagir a todo erro isolado."
   },
   {
    "q": "Como o Kubernetes foi aplicado especificamente a dados?",
    "a": "O Kubernetes era a infraestrutura principal do QuintoAndar e também sustentava parte da plataforma de dados. Ele organizava componentes como Airflow, serviços auxiliares, observabilidade e a própria plataforma Apache Atlas em pods, deployments e services. Helm Charts padronizavam instalação, configuração e atualização; requests e limits controlavam CPU e memória; probes verificavam saúde; autoscaling e políticas de reinício ajudavam na continuidade operacional. O Apache Atlas não era uma etapa da automação: era um produto de catálogo e governança executado sobre essa infraestrutura Kubernetes, com seus próprios componentes, persistência e integrações para registrar metadados, classificações e linhagem."
   }
  ],
  "heroImg": "assets/gallery-signatures/jen-leadership-ai.webp"
 },
 {
  "f": "start",
  "flag": "br",
  "n": "Cogna Educação",
  "dom": "cogna.com.br",
  "per": "2019 a 2020",
  "featured": true,
  "r": "Engenheira de Dados → Líder Técnica",
  "d": "Na Cogna/Kroton, atuei na engenharia de dados e evoluí para a liderança técnica. Com o time, migrei do zero o sistema financeiro de uma procedure monolítica on-premises para uma plataforma na AWS, com processamento distribuído, validação e consumo no Power BI.",
  "heroChips": [
   "Amazon Web Services · Certificada",
   "Python · PySpark",
   "Motor Financeiro · do legado à AWS",
   "Liderança Técnica"
  ],
  "t": {
   "en": {
    "r": "Data Engineer → Technical Lead",
    "d": "At Cogna/Kroton, I worked in data engineering and progressed to technical leadership. With the team, I migrated the financial system from a monolithic on-premises procedure to a new AWS platform, with distributed processing, validation and Power BI consumption.",
    "heroChips": [
     "Amazon Web Services · Certified",
     "Python · PySpark",
     "Financial Engine · legacy to AWS",
     "Technical Leadership"
    ],
    "app": {
     "sub": "FINANCIAL DATA ENGINE",
     "h": "From on-premises legacy <em>to Power BI.</em>",
     "d": "Simulation of the Kroton/Cogna financial engine: finance workloads on AWS, multi-stage validation blocking incorrect data before consumption, and publishing for analytical use. Didactic simulation, no corporate data."
    },
    "metrics": [
     {
      "v": "< 12 months",
      "l": "progression to technical leadership"
     },
     {
      "v": "On-prem → AWS",
      "l": "financial-engine modernization"
     },
     {
      "v": "Validation",
      "l": "quality before publication"
     },
     {
      "v": "Power BI",
      "l": "financial analytics consumption"
     }
    ],
    "demos": [
     {
      "kind": "app",
      "t": "Financial engine on AWS",
      "d": "Explore six stages from the monolithic procedure through ingestion, orchestration, PySpark, quality gates and Power BI. Run synthetic batches and inspect reconciliation.",
      "u": "cogna-data-validator.html",
      "btn": "Open app →"
     },
     {
      "kind": "app",
      "t": "Financial close · Power BI",
      "d": "Mobile financial cockpit with traceable processing, inconsistency blocking, published versions and revenue, cost and balance by unit.",
      "u": "cogna-finance-mobile.html",
      "btn": "Open app →"
     }
    ],
    "stints": [
     {
      "r": "Data Engineer and Technical Lead (via UOL Compasso · Sysmap)",
      "per": "2019 to 2020",
      "prob": "Kroton financial processing depended on extensive, monolithic and hard-to-maintain on-premises queries, which packed financial rules, complex joins, filters and aggregations into tightly coupled structures. There was no formal quality validation, and incorrect data compromised FP&A decisions (the financial planning and analysis team, which presents the numbers to the board), with month-end close relying on extensive manual checking.",
      "dec": "The engine responsible for ingesting, processing, validating, reconciling and delivering financial data was built from the ground up, far beyond a data lake. Legacy queries were understood, decomposed and rebuilt as PySpark pipelines running on Amazon EMR, with on-premises data ingested and stored in Amazon S3 across raw/trusted/curated zones. Apache Airflow controlled dependencies, scheduling, retries, reprocessing, alerts and publishing; AWS Glue supported catalog and metadata; and, after validation, financial datasets were published to Amazon Redshift, consumed in Power BI by analysts, managers, directors and vice-presidents. A validator prevented inconsistencies from moving between layers, checking schema, types, nullability, uniqueness, integrity and value reconciliation; Pytest tests were part of CI/CD, and every change had to pass validation before promotion. Infrastructure was provisioned as code with Terraform.",
      "res": "The monolithic financial processing was replaced by an end-to-end, traceable AWS platform, with controlled reprocessing and validation before publishing, serving everyone from analysts to vice-presidents in Power BI. The work was organized with agile practices, a prioritized technical backlog, short delivery cycles, frequent review with consuming areas and CI/CD protecting every promotion. In under 12 months, the role evolved into technical leadership of the team, a progression backed by a recommendation letter from management.",
      "metrics": [
       "end-to-end financial engine",
       "on-prem legacy → AWS",
       "validation before publishing",
       "technical leadership in < 12 months"
      ],
      "stack": [
       "Python",
       "PySpark",
       "Apache Airflow",
       "Amazon EMR",
       "Amazon S3",
       "AWS Glue",
       "Amazon Redshift",
       "Power BI",
       "Terraform",
       "Pytest",
       "CI/CD",
       "SNS",
       "SAFe"
      ]
     }
    ],
    "arch": [
     [
      "Sources",
      "on-premises finance"
     ],
     [
      "Ingestion",
      "Spark · EMR · S3"
     ],
     [
      "Validation",
      "Pytest · publication block"
     ],
     [
      "Publishing",
      "Glue · Redshift"
     ],
     [
      "Consumption",
      "Power BI · analysts to VPs"
     ],
     [
      "Control",
      "Airflow · Terraform · CI/CD"
     ]
    ],
    "stat3": [
     {
      "v": "end-to-end",
      "l": "complete financial engine: source, ingestion, processing, validation, publishing and consumption"
     },
     {
      "v": "< 12 months",
      "l": "progression to technical leadership of the team, backed by a recommendation letter from management"
     },
     {
      "v": "CI/CD",
      "l": "every change validated by tests before promotion, with publication blocked on critical failure"
     }
    ],
    "layers": [
     {
      "icon": "📥",
      "title": "Ingestion · Spark + EMR + S3",
      "desc": "Spark jobs on EMR rebuild the legacy on-premises financial queries and ingest data into Amazon S3. Schema enforcement on entry: data is only accepted if it matches the expected format, so bad data never even enters the lake."
     },
     {
      "icon": "✅",
      "title": "Automated validation · Pytest",
      "desc": "Multi-stage framework: schema validation (raw→trusted), value validation (trusted→curated) and cross-consistency checks between financial entities. A critical-rule failure blocks publishing and triggers an alert."
     },
     {
      "icon": "🗃️",
      "title": "S3 · raw / trusted / curated zones",
      "desc": "Raw preserves the original data. Trusted validates types and completeness. Curated applies financial business rules, the only zone consumed by Redshift and Power BI."
     },
     {
      "icon": "🔔",
      "title": "SNS + Slackbot · alerts",
      "desc": "Every validation failure generates a Slack alert with the reason, the affected table and the number of records. Automatic priority: critical (blocks publishing) vs. informational."
     },
     {
      "icon": "📊",
      "title": "Redshift + Power BI · executive consumption",
      "desc": "After validation, financial datasets are published to Amazon Redshift and consumed in Power BI by analysts, managers, directors and vice-presidents. An S3 → Power BI integration gives business areas visibility into lake status on every cycle."
     }
    ],
    "codeNotes": [
     {
      "tab": "01 · Financial legacy",
      "label": "Financial legacy",
      "note": "The monolithic procedure concentrated financial-system rules. Migration started by understanding dependencies and separating ingestion, calculation, validation and consumption."
     },
     {
      "tab": "02 · AWS ingestion",
      "label": "AWS ingestion",
      "note": "Extraction moves the source batch to S3, preserving its period and records. The raw layer provides the baseline for verification and replay."
     },
     {
      "tab": "03 · Orchestration",
      "label": "Orchestration",
      "note": "Airflow coordinates task order and dependencies. A period progresses only after the previous stage finishes, with batch replay when needed."
     },
     {
      "tab": "04 · Processing",
      "label": "Processing",
      "note": "Rules previously concentrated in the procedure become distributed transformations. The demo consolidates revenue and cost by unit for reconciliation."
     },
     {
      "tab": "05 · Quality gate",
      "label": "Quality gate",
      "note": "Checks verify IDs, amounts, contracts and reconciliation. One failure prevents batch publication. The invalid scenario removes an amount to demonstrate this guardrail."
     },
     {
      "tab": "06 · Publication and DataViz",
      "label": "Publication and DataViz",
      "note": "After the gate, the curated dataset is served through Redshift to Power BI. In the simulation, the approved version feeds the financial view; an invalid cycle preserves the previous report."
     }
    ],
    "faq": [
     {
      "q": "Why didn't FP&A trust the data before?",
      "a": "The pipeline had no validation, so a null field, a malformed tax ID or an unreconciled financial value could go unnoticed and reach the board report. The finance team needed weeks to manually validate every number before closing. With the automated validator blocking incorrect data before publishing, trust and speed now move together."
     },
     {
      "q": "What is multi-stage validation?",
      "a": "Each lake zone has its own set of rules. The raw layer validates schema and basic types. Trusted validates values, absence of nulls in required fields and expected ranges. Curated validates business rules: reconciliation, accounting signs and business-approved tolerances; negative revenue or costs above revenue are not universal errors, tax IDs must be valid. A failure at any stage blocks promotion of the data to the next zone."
     },
     {
      "q": "Why did FP&A adopt the platform without resistance?",
      "a": "Because the platform was built with the finance team, not just for it. Workshops held from the start mapped out which validations were critical and what the ideal format for the month-end close should be. When the platform went live, it already reflected FP&A language and processes, so no extensive training was needed and adoption happened organically."
     }
    ],
    "dashKpis": [
     "AWS",
     "Validation"
    ],
    "dashLabels": [
     "financial engine",
     "before publication"
    ],
    "mockItems": [
     {
      "l": "Ingestion",
      "v": "S3 · raw"
     },
     {
      "l": "Processing",
      "v": "PySpark · EMR"
     },
     {
      "l": "Quality",
      "v": "Pytest · CI/CD"
     },
     {
      "l": "Consumption",
      "v": "Redshift · Power BI"
     }
    ]
   },
   "es": {
    "r": "Ingeniera de Datos → Líder Técnica",
    "d": "En Cogna/Kroton trabajé en ingeniería de datos y evolucioné al liderazgo técnico. Con el equipo migré desde cero el sistema financiero de un procedimiento monolítico on-premises a una plataforma AWS, con procesamiento distribuido, validación y consumo en Power BI.",
    "heroChips": [
     "Amazon Web Services · Certificada",
     "Python · PySpark",
     "Motor Financiero · del legado a AWS",
     "Liderazgo Técnico"
    ],
    "app": {
     "sub": "MOTOR FINANCIERO DE DATOS",
     "h": "Del legado on-premises <em>a Power BI.</em>",
     "d": "Simulación del motor financiero de Kroton/Cogna: cargas del área financiera en AWS, validación multi-etapa que frena datos incorrectos antes del consumo y publicación para consumo analítico. Simulación didáctica, sin datos corporativos."
    },
    "metrics": [
     {
      "v": "< 12 meses",
      "l": "evolución hacia el liderazgo técnico"
     },
     {
      "v": "On-prem → AWS",
      "l": "modernización del motor financiero"
     },
     {
      "v": "Validación",
      "l": "calidad antes de la publicación"
     },
     {
      "v": "Power BI",
      "l": "consumo analítico financiero"
     }
    ],
    "demos": [
     {
      "kind": "app",
      "t": "Motor financiero en AWS",
      "d": "Explora seis etapas: del procedimiento monolítico a ingesta, orquestación, PySpark, calidad y Power BI. Ejecuta lotes sintéticos y revisa la conciliación.",
      "u": "cogna-data-validator.html",
      "btn": "Abrir aplicación →"
     },
     {
      "kind": "app",
      "t": "Cierre financiero · Power BI",
      "d": "Cockpit móvil con trazabilidad, bloqueo de inconsistencias, versiones publicadas e ingresos, costos y resultado por unidad.",
      "u": "cogna-finance-mobile.html",
      "btn": "Abrir aplicación →"
     }
    ],
    "stints": [
     {
      "r": "Ingeniera de Datos y Líder Técnica (vía UOL Compasso · Sysmap)",
      "per": "2019 a 2020",
      "prob": "El procesamiento financiero de Kroton dependía de consultas on-premises extensas, monolíticas y difíciles de mantener, que concentraban reglas financieras, joins complejos, filtros y agregaciones en estructuras con alto acoplamiento. No había validación de calidad formal, y datos incorrectos comprometían decisiones de FP&A (el equipo de planificación y análisis financiero, que presenta los números al directorio), con un cierre mensual dependiente de una extensa revisión manual.",
      "dec": "Se construyó, desde la base, el motor responsable de ingerir, procesar, validar, reconciliar y disponibilizar los datos financieros, mucho más allá de un data lake. Las consultas legadas fueron comprendidas, descompuestas y reconstruidas como pipelines PySpark ejecutados en Amazon EMR, con los datos on-premises ingeridos y almacenados en Amazon S3 en zonas raw/trusted/curated. Apache Airflow controlaba dependencias, programación, reintentos, reprocesamientos, alertas y publicación; AWS Glue apoyaba catálogo y metadatos; y, tras las validaciones, los conjuntos financieros se publicaban en Amazon Redshift, con consumo final en Power BI por analistas, gerentes, directores y vicepresidencias. Un validador impedía que inconsistencias avanzaran entre las capas, verificando esquema, tipos, nulidad, unicidad, integridad y reconciliación de valores; las pruebas con Pytest formaban parte del CI/CD, y todo cambio debía pasar las validaciones antes de ser promovido. La infraestructura se aprovisionaba como código con Terraform.",
      "res": "El procesamiento financiero monolítico fue sustituido por una plataforma AWS end-to-end, trazable, con reprocesamiento controlado y validación antes de la publicación, atendiendo desde analistas hasta vicepresidencias en Power BI. El trabajo se organizó con prácticas ágiles, backlog técnico priorizado, ciclos cortos de entrega, revisión frecuente con las áreas consumidoras y CI/CD protegiendo cada promoción. En menos de 12 meses, la actuación evolucionó hacia el liderazgo técnico del equipo, evolución sostenida por la carta de recomendación de la gestión.",
      "metrics": [
       "motor financiero end-to-end",
       "legado on-prem → AWS",
       "validación antes de publicar",
       "liderazgo técnico en < 12 meses"
      ],
      "stack": [
       "Python",
       "PySpark",
       "Apache Airflow",
       "Amazon EMR",
       "Amazon S3",
       "AWS Glue",
       "Amazon Redshift",
       "Power BI",
       "Terraform",
       "Pytest",
       "CI/CD",
       "SNS",
       "SAFe"
      ]
     }
    ],
    "arch": [
     [
      "Fuentes",
      "financiero on-premises"
     ],
     [
      "Ingesta",
      "Spark · EMR · S3"
     ],
     [
      "Validación",
      "Pytest · bloqueo de publicación"
     ],
     [
      "Publicación",
      "Glue · Redshift"
     ],
     [
      "Consumo",
      "Power BI · analistas a VPs"
     ],
     [
      "Control",
      "Airflow · Terraform · CI/CD"
     ]
    ],
    "stat3": [
     {
      "v": "end-to-end",
      "l": "motor financiero completo: origen, ingesta, procesamiento, validación, publicación y consumo"
     },
     {
      "v": "< 12 meses",
      "l": "evolución hacia el liderazgo técnico del equipo, sostenida por carta de recomendación de la gestión"
     },
     {
      "v": "CI/CD",
      "l": "todo cambio validado por pruebas antes de ser promovido, con bloqueo de publicación ante fallo crítico"
     }
    ],
    "layers": [
     {
      "icon": "📥",
      "title": "Ingesta · Spark + EMR + S3",
      "desc": "Jobs Spark en EMR reconstruyen las consultas financieras legadas on-premises e ingieren los datos hacia Amazon S3. Schema enforcement en la entrada: el dato solo se acepta si está en el formato esperado, así que un dato malo ni siquiera llega a entrar al lake."
     },
     {
      "icon": "✅",
      "title": "Validación automática · Pytest",
      "desc": "Framework multi-etapas: validación de esquema (raw→trusted), de valores (trusted→curated) y de consistencia cruzada entre entidades financieras. Un fallo en regla crítica bloquea la publicación y dispara una alerta."
     },
     {
      "icon": "🗃️",
      "title": "S3 · Zonas raw / trusted / curated",
      "desc": "Raw preserva el dato original. Trusted valida tipos y completitud. Curated aplica las reglas de negocio financieras, la única zona que Redshift y Power BI consumen."
     },
     {
      "icon": "🔔",
      "title": "SNS + Slackbot · alertas",
      "desc": "Cada fallo de validación genera una alerta en Slack con el motivo, la tabla afectada y el número de registros. Prioridad automática: crítico (bloquea publicación) vs. informativo."
     },
     {
      "icon": "📊",
      "title": "Redshift + Power BI · consumo ejecutivo",
      "desc": "Tras las validaciones, los conjuntos financieros se publican en Amazon Redshift y se consumen en Power BI por analistas, gerentes, directores y vicepresidencias. Una integración S3 → Power BI da visibilidad del estado del lake a las áreas de negocio en cada ciclo."
     }
    ],
    "codeNotes": [
     {
      "tab": "01 · Legado financiero",
      "label": "Legado financiero",
      "note": "El procedimiento monolítico concentraba las reglas financieras. La migración empezó por entender dependencias y separar ingesta, cálculo, validación y consumo."
     },
     {
      "tab": "02 · Ingesta en AWS",
      "label": "Ingesta en AWS",
      "note": "La extracción lleva el lote a S3 y conserva período y registros. La capa raw permite verificar lo recibido y reprocesar."
     },
     {
      "tab": "03 · Orquestación",
      "label": "Orquestación",
      "note": "Airflow coordina tareas y dependencias. El período solo avanza al concluir la etapa anterior, con reprocesamiento cuando hace falta."
     },
     {
      "tab": "04 · Procesamiento",
      "label": "Procesamiento",
      "note": "Las reglas del procedimiento se organizan en transformaciones distribuidas. La demo consolida ingresos y costos por unidad para conciliarlos."
     },
     {
      "tab": "05 · Gate de calidad",
      "label": "Gate de calidad",
      "note": "Las verificaciones revisan IDs, importes, contrato y conciliación. Un fallo impide publicar el lote. El escenario inválido elimina un importe para mostrar la protección."
     },
     {
      "tab": "06 · Publicación y DataViz",
      "label": "Publicación y DataViz",
      "note": "Tras el gate, el conjunto curado pasa a Redshift y Power BI. En la simulación, la versión aprobada alimenta la vista financiera; un ciclo inválido conserva el informe anterior."
     }
    ],
    "faq": [
     {
      "q": "¿Por qué FP&A no confiaba en los datos antes?",
      "a": "El pipeline no tenía validación, un campo nulo, un CNPJ mal formado o un valor sin conciliar pasaban desapercibidos y llegaban al informe del directorio. El equipo financiero necesitaba semanas validando manualmente cada número antes del cierre. Con el validador automático que bloquea datos incorrectos antes de la publicación, confianza y velocidad ahora van de la mano."
     },
     {
      "q": "¿Qué es la validación multi-etapa?",
      "a": "Cada zona del lake tiene su propio conjunto de reglas. La capa raw valida esquema y tipos básicos. La trusted valida valores, ausencia de nulos en campos obligatorios y rangos esperados. La curated valida reglas de negocio: conciliación, signos contables y tolerancias del negocio; ingresos negativos o costos superiores no son errores universales, los CNPJ deben ser válidos. Un fallo en cualquier etapa bloquea la promoción del dato a la zona siguiente."
     },
     {
      "q": "¿Por qué FP&A adoptó la plataforma sin resistencia?",
      "a": "Porque la plataforma se construyó con el equipo financiero, y no solo para él. Talleres realizados desde el inicio mapearon qué validaciones eran críticas y cuál sería el formato ideal del cierre mensual. Cuando la plataforma entró en operación, ya reflejaba el lenguaje y los procesos de FP&A, no fue necesario un entrenamiento extenso y la adopción ocurrió de forma orgánica."
     }
    ],
    "dashKpis": [
     "AWS",
     "Validación"
    ],
    "dashLabels": [
     "motor financiero",
     "antes de publicar"
    ],
    "mockItems": [
     {
      "l": "Ingesta",
      "v": "S3 · raw"
     },
     {
      "l": "Procesamiento",
      "v": "PySpark · EMR"
     },
     {
      "l": "Calidad",
      "v": "Pytest · CI/CD"
     },
     {
      "l": "Consumo",
      "v": "Redshift · Power BI"
     }
    ]
   },
   "ja": {
    "r": "データエンジニア → 技術リーダー",
    "d": "Cogna/Krotonではデータエンジニアリングから技術リーダーへと役割を広げました。チームと共に、巨大なオンプレミスの財務プロシージャをAWS基盤へ移行し、分散処理・検証・Power BIでの活用を実現しました。",
    "heroChips": [
     "Amazon Web Services · 認定資格",
     "Python · PySpark",
     "財務エンジン · レガシーからAWSへ",
     "技術リーダーシップ"
    ],
    "app": {
     "sub": "財務データエンジン",
     "h": "オンプレミスのレガシーから<em>Power BIへ。</em>",
     "d": "Kroton/Cognaの財務エンジンのシミュレーション: AWS上での財務処理、消費前に不正データをブロックする多段階検証、分析利用向けの公開。企業データを使わない教育目的のシミュレーションです。"
    },
    "metrics": [
     {
      "v": "12か月未満",
      "l": "技術リーダーへの成長"
     },
     {
      "v": "On-prem → AWS",
      "l": "財務処理基盤のモダナイゼーション"
     },
     {
      "v": "品質検証",
      "l": "公開前のデータ品質チェック"
     },
     {
      "v": "Power BI",
      "l": "財務分析データの活用"
     }
    ],
    "demos": [
     {
      "kind": "app",
      "t": "AWSの財務データ基盤",
      "d": "プロシージャから取り込み・オーケストレーション・PySpark・品質検証・Power BIまで、6段階を確認します。架空のバッチで照合を試せます。",
      "u": "cogna-data-validator.html",
      "btn": "アプリを開く →"
     },
     {
      "kind": "app",
      "t": "財務締め · Power BI",
      "d": "処理履歴、不整合の停止、公開版と拠点別収益・費用・収支を確認できるモバイル財務コックピット。",
      "u": "cogna-finance-mobile.html",
      "btn": "アプリを開く →"
     }
    ],
    "stints": [
     {
      "r": "データエンジニア兼テクニカルリード（UOL Compasso · Sysmap経由）",
      "per": "2019年〜2020年",
      "prob": "Krotonの財務処理は、財務ルール、複雑な結合、フィルタ、集計を密結合な構造に詰め込んだ、大規模でモノリシック、保守困難なオンプレミスクエリに依存していました。正式な品質検証はなく、不正なデータがFP&A（財務計画・分析チーム、取締役会に数値を提示する部門）の意思決定を損ない、月次決算は広範な手動確認に依存していました。",
      "dec": "データレイクをはるかに超える、財務データの取り込み・処理・検証・照合・提供を担うエンジンを基盤から構築しました。レガシークエリを理解・分解し、Amazon EMR上で稼働するPySparkパイプラインとして再構築し、オンプレミスデータをAmazon S3のraw/trusted/curatedゾーンに取り込み・保存しました。Apache Airflowが依存関係、スケジューリング、リトライ、再処理、アラート、公開を制御し、AWS Glueがカタログとメタデータを支え、検証後の財務データセットはAmazon Redshiftに公開され、アナリスト、マネージャー、ディレクター、副社長がPower BIで利用しました。バリデーターは、スキーマ、型、null許容、一意性、整合性、値の照合を確認し、不整合が層間を通過するのを防ぎました。Pytestによるテストはこの取り組みのCI/CDの一部であり、あらゆる変更は昇格前に検証を通過する必要がありました。インフラはTerraformでコードとしてプロビジョニングされました。",
      "res": "モノリシックな財務処理は、公開前の制御された再処理と検証を備えた、トレーサブルなエンドツーエンドのAWSプラットフォームに置き換わり、アナリストから副社長までをPower BIで支えました。この取り組みはアジャイルな実践、優先順位付けされた技術バックログ、短い納品サイクル、利用部門との頻繁なレビュー、あらゆる昇格を保護するCI/CDで進められました。12か月未満で、この役割はチームの技術リーダーシップへと発展し、その進化は経営陣からの推薦状によって裏付けられています。",
      "metrics": [
       "エンドツーエンドの財務エンジン",
       "オンプレミスレガシー → AWS",
       "公開前の検証",
       "12か月未満での技術リーダーシップ"
      ],
      "stack": [
       "Python",
       "PySpark",
       "Apache Airflow",
       "Amazon EMR",
       "Amazon S3",
       "AWS Glue",
       "Amazon Redshift",
       "Power BI",
       "Terraform",
       "Pytest",
       "CI/CD",
       "SNS",
       "SAFe"
      ]
     }
    ],
    "arch": [
     [
      "ソース",
      "オンプレミス財務データ"
     ],
     [
      "取り込み",
      "Spark · EMR · S3"
     ],
     [
      "検証",
      "Pytest · 公開ブロック"
     ],
     [
      "公開",
      "Glue · Redshift"
     ],
     [
      "消費",
      "Power BI · アナリストから副社長まで"
     ],
     [
      "制御",
      "Airflow · Terraform · CI/CD"
     ]
    ],
    "stat3": [
     {
      "v": "エンドツーエンド",
      "l": "ソース、取り込み、処理、検証、公開、消費を網羅する財務エンジン全体"
     },
     {
      "v": "12か月未満",
      "l": "経営陣からの推薦状に裏付けられた、チームの技術リーダーシップへの進化"
     },
     {
      "v": "CI/CD",
      "l": "あらゆる変更をテストで検証してから昇格、重大な失敗時は公開をブロック"
     }
    ],
    "layers": [
     {
      "icon": "📥",
      "title": "取り込み · Spark + EMR + S3",
      "desc": "EMR上のSparkジョブがレガシーのオンプレミス財務クエリを再構築し、データをAmazon S3に取り込みます。入力時のスキーマ強制: 想定される形式のデータのみが受け入れられるため、不正なデータはレイクに入る前に排除されます。"
     },
     {
      "icon": "✅",
      "title": "自動検証 · Pytest",
      "desc": "多段階フレームワーク: スキーマ検証（raw→trusted）、値の検証（trusted→curated）、財務エンティティ間のクロス整合性チェック。重要ルールの失敗は公開をブロックし、アラートを発火させます。"
     },
     {
      "icon": "🗃️",
      "title": "S3 · raw / trusted / curatedゾーン",
      "desc": "Rawは元データを保持。Trustedは型と完全性を検証。Curatedは財務ビジネスルールを適用し、RedshiftとPower BIが消費する唯一のゾーンです。"
     },
     {
      "icon": "🔔",
      "title": "SNS + Slackbot · アラート",
      "desc": "検証失敗のたびに、理由・対象テーブル・レコード数を含むSlackアラートが生成されます。重大（公開をブロック）と情報提供のみを自動で区別します。"
     },
     {
      "icon": "📊",
      "title": "Redshift + Power BI · 経営層の利用",
      "desc": "検証後、財務データセットはAmazon Redshiftに公開され、アナリスト、マネージャー、ディレクター、副社長がPower BIで利用します。S3 → Power BI連携により、事業部門は各サイクルでレイクの状態を把握できます。"
     }
    ],
    "codeNotes": [
     {
      "tab": "01 · レガシー財務処理",
      "label": "レガシー財務処理",
      "note": "巨大なプロシージャに財務ルールが集中していました。依存関係を把握し、取り込み・計算・検証・活用へ分解します。"
     },
     {
      "tab": "02 · AWSへの取り込み",
      "label": "AWSへの取り込み",
      "note": "対象期間とレコードを保ち、抽出データをS3へ取り込みます。raw層を照合と再処理の基準にします。"
     },
     {
      "tab": "03 · オーケストレーション",
      "label": "オーケストレーション",
      "note": "Airflowでタスクの順序と依存関係を管理します。前段の完了後に進め、必要なバッチを再処理します。"
     },
     {
      "tab": "04 · 分散処理",
      "label": "分散処理",
      "note": "プロシージャのルールを分散変換へ整理します。デモでは拠点別に収益と費用を集計し、照合に備えます。"
     },
     {
      "tab": "05 · 品質ゲート",
      "label": "品質ゲート",
      "note": "ID・金額・契約・照合を検証します。不合格ならバッチを公開しません。金額欠損シナリオで保護動作を確認できます。"
     },
     {
      "tab": "06 · 公開と可視化",
      "label": "公開と可視化",
      "note": "検証後、加工済みデータをRedshiftからPower BIへ提供します。デモでも承認済みの版だけを表示し、失敗時は前版を保持します。"
     }
    ],
    "faq": [
     {
      "q": "なぜFP&Aは以前データを信頼していなかったのですか?",
      "a": "パイプラインには検証がなく、null項目、不正な形式のCPF、マイナスの収益が見過ごされて取締役会の報告書に届いていました。財務チームは決算前に、手動ですべての数値を検証するのに数週間を要していました。公開前に不正なデータをブロックする自動バリデーターにより、信頼性とスピードが両立するようになりました。"
     },
     {
      "q": "多段階検証とは何ですか?",
      "a": "レイクの各ゾーンにはそれぞれのルールセットがあります。raw層はスキーマと基本的な型を検証します。trusted層は値、必須フィールドのnullの有無、想定範囲を検証します。curated層はビジネスルールを検証します: 元データとの照合、会計上の符号と業務で定める許容差を確認する。負の収益や収益を上回る費用は一律のエラーではない、CPFは有効でなければならない。いずれかの段階での失敗は、データの次ゾーンへの昇格をブロックします。"
     },
     {
      "q": "なぜFP&Aは抵抗なくこのプラットフォームを採用したのですか?",
      "a": "このプラットフォームは財務チームのためだけでなく、財務チームと共に構築されたからです。開始当初から実施されたワークショップで、どの検証が重要か、月次決算の理想的な形式は何かを洗い出しました。プラットフォームが稼働を始めた時点で、すでにFP&Aの言葉とプロセスを反映していたため、大がかりな研修は不要で、採用は自然に進みました。"
     }
    ],
    "dashKpis": [
     "AWS",
     "品質検証"
    ],
    "dashLabels": [
     "財務処理基盤",
     "公開前のチェック"
    ],
    "mockItems": [
     {
      "l": "取り込み",
      "v": "S3 · raw"
     },
     {
      "l": "処理",
      "v": "PySpark · EMR"
     },
     {
      "l": "品質",
      "v": "Pytest · CI/CD"
     },
     {
      "l": "活用",
      "v": "Redshift · Power BI"
     }
    ]
   }
  },
  "app": {
   "sub": "MOTOR FINANCEIRO DE DADOS",
   "h": "Do legado on-premises <em>ao Power BI.</em>",
   "d": "Simulação do motor financeiro da Kroton/Cogna: cargas do financeiro na AWS, validação multi-estágio que barra dado incorreto antes do consumo e publicação para consumo analítico. Simulação didática, sem dados corporativos."
  },
  "metrics": [
   {
    "v": "< 12 meses",
    "l": "evolução para liderança técnica"
   },
   {
    "v": "On-prem → AWS",
    "l": "modernização do motor financeiro"
   },
   {
    "v": "Validação",
    "l": "qualidade antes da publicação"
   },
   {
    "v": "Power BI",
    "l": "consumo analítico dos dados financeiros"
   }
  ],
  "stack": [
   "Python",
   "PySpark",
   "Apache Airflow",
   "Amazon EMR",
   "Amazon S3",
   "AWS Glue",
   "Amazon Redshift",
   "Power BI",
   "Terraform",
   "Pytest",
   "CI/CD",
   "SNS"
  ],
  "demos": [
   {
    "kind": "app",
    "t": "Motor financeiro na AWS",
    "d": "Explore seis etapas: da procedure monolítica à ingestão, orquestração, PySpark, gate de qualidade e consumo no Power BI. Execute lotes sintéticos e confira a reconciliação.",
    "u": "cogna-data-validator.html",
    "btn": "Abrir aplicativo →"
   },
   {
    "kind": "app",
    "t": "Fechamento financeiro · Power BI",
    "d": "Cockpit financeiro móvel com ciclo rastreável, bloqueio de inconsistências, versão publicada e visão de receita, custo e resultado por unidade.",
    "u": "cogna-finance-mobile.html",
    "btn": "Abrir aplicativo →"
   }
  ],
  "stints": [
   {
    "r": "Engenheira de Dados e Líder Técnica (via UOL Compasso · Sysmap)",
    "per": "2019 a 2020",
    "prob": "O processamento financeiro da Kroton dependia de consultas on-premises extensas, monolíticas e difíceis de manter, que concentravam regras financeiras, joins complexos, filtros e agregações em estruturas com alto acoplamento. Não havia validação de qualidade formal, e dados incorretos comprometiam decisões de FP&A (o time de planejamento e análise financeira, que apresenta os números ao conselho), com fechamento mensal dependente de conferência manual extensa.",
    "dec": "Foi construído, desde a base, o motor responsável por ingerir, processar, validar, reconciliar e disponibilizar os dados financeiros, muito além de um data lake. As consultas legadas foram compreendidas, decompostas e reconstruídas como pipelines PySpark executados no Amazon EMR, com os dados on-premises ingeridos e armazenados no Amazon S3 em zonas raw/trusted/curated. O Apache Airflow controlava dependências, agendamentos, retentativas, reprocessamentos, alertas e publicação; o AWS Glue apoiava catálogo e metadados; e, após as validações, os conjuntos financeiros eram publicados no Amazon Redshift, com consumo final no Power BI por analistas, gestores, diretorias e vice-presidências. Um validador impedia que inconsistências avançassem entre as camadas, verificando schema, tipos, nulidade, unicidade, integridade e reconciliação de valores; os testes com Pytest faziam parte do CI/CD, e toda alteração precisava passar pelas validações antes de ser promovida. A infraestrutura era provisionada como código com Terraform.",
    "res": "O processamento financeiro monolítico foi substituído por uma plataforma AWS end-to-end, rastreável, com reprocessamento controlado e validação antes da publicação, atendendo de analistas a vice-presidências no Power BI. O trabalho foi organizado com práticas ágeis, backlog técnico priorizado, ciclos curtos de entrega, revisão frequente com as áreas consumidoras e CI/CD protegendo cada promoção. Em menos de 12 meses, a atuação evoluiu para a liderança técnica do time, evolução sustentada pela carta de recomendação da gestão.",
    "metrics": [
     "liderança técnica em menos de 12 meses",
     "legado on-prem → AWS",
     "qualidade validada antes da publicação",
     "Airflow · Spark · EMR · Redshift"
    ],
    "stack": [
     "Python",
     "PySpark",
     "Apache Airflow",
     "Amazon EMR",
     "Amazon S3",
     "AWS Glue",
     "Amazon Redshift",
     "Power BI",
     "Terraform",
     "Pytest",
     "CI/CD",
     "SNS",
     "SAFe"
    ]
   }
  ],
  "arch": [
   [
    "Fontes",
    "financeiro on-premises"
   ],
   [
    "Ingestão",
    "Spark · EMR · S3"
   ],
   [
    "Validação",
    "Pytest · bloqueio de publicação"
   ],
   [
    "Publicação",
    "Glue · Redshift"
   ],
   [
    "Consumo",
    "Power BI · analistas a VPs"
   ],
   [
    "Controle",
    "Airflow · Terraform · CI/CD"
   ]
  ],
  "stat3": [
   {
    "v": "end-to-end",
    "l": "motor financeiro completo: origem, ingestão, processamento, validação, publicação e consumo"
   },
   {
    "v": "< 12 meses",
    "l": "evolução para a liderança técnica do time, sustentada por carta de recomendação da gestão"
   },
   {
    "v": "CI/CD",
    "l": "toda alteração validada por testes antes de ser promovida, com bloqueio de publicação em falha crítica"
   }
  ],
  "layers": [
   {
    "icon": "📥",
    "title": "Ingestão · Spark + EMR + S3",
    "desc": "Jobs Spark no EMR reconstroem as consultas financeiras legadas on-premises e ingerem os dados para o Amazon S3. Schema enforcement na entrada: o dado só é aceito se estiver no formato esperado, então dado ruim nem chega a entrar no lake."
   },
   {
    "icon": "✅",
    "title": "Validação automática · Pytest",
    "desc": "Framework multi-estágios: validação de schema (raw→trusted), de valores (trusted→curated) e de consistência cruzada entre entidades financeiras. Falha em regra crítica bloqueia a publicação e dispara alerta."
   },
   {
    "icon": "🗃️",
    "title": "S3 · Zonas raw / trusted / curated",
    "desc": "Raw preserva o dado original. Trusted valida tipos e completude. Curated aplica as regras de negócio financeiras, a única zona que o Redshift e o Power BI consomem."
   },
   {
    "icon": "🔔",
    "title": "SNS + Slackbot · alertas",
    "desc": "Cada falha de validação gera alerta no Slack com o motivo, a tabela afetada e o número de registros. Prioridade automática: crítico (bloqueia publicação) vs. informativo."
   },
   {
    "icon": "📊",
    "title": "Redshift + Power BI · consumo executivo",
    "desc": "Após as validações, os conjuntos financeiros são publicados no Amazon Redshift e consumidos no Power BI por analistas, gestores, diretorias e vice-presidências. Uma integração S3 → Power BI dá visibilidade do status do lake às áreas de negócio a cada ciclo."
   }
  ],
  "code": [
   {
    "tab": "01 · Legado financeiro",
    "label": "Legado financeiro · exemplo didático",
    "code": "-- Decompose the legacy contract before migration.\nSELECT competencia, unidade, tipo, valor\nFROM financeiro_origem\nWHERE competencia = :competencia;",
    "note": "A procedure monolítica concentrava regras do sistema financeiro. A migração começou por entender essas dependências e separar ingestão, cálculo, validação e consumo."
   },
   {
    "tab": "02 · Ingestão na AWS",
    "label": "Ingestão na AWS · exemplo didático",
    "code": "# Example of the landing contract.\nlanding = {\n  \"period\": period,\n  \"records\": len(batch),\n  \"zone\": \"raw\",\n  \"format\": \"parquet\"\n}",
    "note": "A extração leva o lote de origem ao S3, preservando a competência e os registros. A camada raw mantém a referência para conferir o que foi recebido e permitir reprocessamento."
   },
   {
    "tab": "03 · Orquestração",
    "label": "Orquestração · exemplo didático",
    "code": "# Conceptual task dependencies.\ningest >> transform >> validate >> publish\n\n# Publication depends on validation success.\n# A retry reuses the selected period.",
    "note": "O Airflow coordena a ordem das tarefas e suas dependências. Uma competência só avança quando a etapa anterior termina, com reprocessamento do lote quando necessário."
   },
   {
    "tab": "04 · Processamento",
    "label": "Processamento · exemplo didático",
    "code": "from pyspark.sql import functions as F\n\nsummary = (batch\n  .groupBy(\"competencia\", \"unidade\", \"tipo\")\n  .agg(F.sum(\"valor\").alias(\"total\")))",
    "note": "As regras antes concentradas na procedure são organizadas em transformações distribuídas. A demonstração consolida receita e custo por unidade e prepara os totais para reconciliação."
   },
   {
    "tab": "05 · Gate de qualidade",
    "label": "Gate de qualidade · exemplo didático",
    "code": "assert ids_are_unique(batch)\nassert required_amounts_are_valid(batch)\nassert input_totals == output_totals\n\n# A negative balance is a business result,\n# not automatically a data-quality failure.",
    "note": "As verificações conferem IDs, valores, contrato e reconciliação. Uma falha impede a publicação do lote inteiro. O cenário inválido remove um valor para mostrar essa proteção funcionando."
   },
   {
    "tab": "06 · Publicação e DataViz",
    "label": "Publicação e DataViz · exemplo didático",
    "code": "-- Curated financial view for analytical use.\nSELECT competencia, unidade,\n       receita, custo, receita - custo AS resultado\nFROM finance.curated_close\nWHERE competencia = :competencia;",
    "note": "Após o gate, o conjunto curado segue para Redshift e consumo no Power BI. Na simulação, a versão aprovada alimenta a visão financeira; um ciclo inválido preserva o relatório anterior."
   }
  ],
  "faq": [
   {
    "q": "Por que o FP&A não confiava nos dados antes?",
    "a": "O pipeline não tinha validação, um campo nulo, um CNPJ mal formatado ou uma receita negativa passavam despercebidos e chegavam ao relatório do conselho. O time financeiro precisava de semanas validando manualmente cada número antes do fechamento. Com o validador automático que bloqueia dado incorreto antes da publicação, confiança e velocidade passam a andar juntas."
   },
   {
    "q": "O que é a validação multi-estágio?",
    "a": "Cada zona do lake possui seu conjunto de regras. A camada raw valida schema e tipos básicos. A trusted valida valores, ausência de nulos em campos obrigatórios e faixas esperadas. A curated valida regras de negócio: conciliação, sinais contábeis e tolerâncias definidos pelo negócio; receita negativa ou custo maior que receita não são erros universais, CNPJs devem ser válidos. Falha em qualquer estágio bloqueia a promoção do dado para a zona seguinte."
   },
   {
    "q": "Por que o FP&A adotou a plataforma sem resistência?",
    "a": "Porque a plataforma foi construída com o time financeiro, e não apenas para ele. Workshops conduzidos desde o início mapearam quais validações eram críticas e qual seria o formato ideal do fechamento mensal. Quando a plataforma entrou em operação, já refletia a linguagem e os processos do FP&A, nenhum treinamento extenso foi necessário e a adoção ocorreu de forma orgânica."
   }
  ],
  "dashKpis": [
   "AWS",
   "Validação"
  ],
  "dashLabels": [
   "motor financeiro",
   "antes da publicação"
  ],
  "mockItems": [
   {
    "l": "Ingestão",
    "v": "S3 · raw"
   },
   {
    "l": "Processamento",
    "v": "PySpark · EMR"
   },
   {
    "l": "Qualidade",
    "v": "Pytest · CI/CD"
   },
   {
    "l": "Consumo",
    "v": "Redshift · Power BI"
   }
  ],
  "heroImg": "assets/gallery-signatures/jen-leadership-ai.webp",
  "skipDefaultApp": true
 },
 {
  "f": "fin",
  "flag": "br",
  "n": "Serasa Experian",
  "dom": "serasaexperian.com.br",
  "per": "2018 a 2019",
  "r": "Engenheira de Dados · DataLab",
  "d": "No DataLab da Serasa Experian, atuei como Engenheira de Dados, programando pipelines de enriquecimento que incorporavam múltiplas fontes aos modelos e produtos de dados. Trabalhei com processamento distribuído, armazenamento em larga escala e consultas de baixa latência para acelerar a exploração das informações.",
  "heroChips": [
   "Amazon Web Services · Certificada",
   "Python · Spark",
   "DataLab · Enriquecimento de Dados",
   "Elasticsearch · Baixa Latência"
  ],
  "t": {
   "en": {
    "r": "Data Engineer · DataLab",
    "per": "2018 to 2019",
    "d": "At Serasa Experian’s DataLab, I worked as a Data Engineer, implementing enrichment pipelines that brought multiple sources into data models and products. I worked with distributed processing, large-scale storage and low-latency queries to support data exploration.",
    "heroChips": [
     "Amazon Web Services · Certified",
     "Python · Spark",
     "DataLab · Data Enrichment",
     "Elasticsearch · Low Latency"
    ],
    "app": {
     "sub": "ANALYTICAL ENRICHMENT",
     "h": "Multiple sources, <em>one query.</em>",
     "d": "Simulation of the DataLab enrichment engine: sources queried in cascade, processed in Spark and indexed in Elasticsearch for low-latency queries. Didactic simulation, with fictitious sources and data."
    },
    "metrics": [
     {
      "v": "Spark",
      "l": "distributed processing"
     },
     {
      "v": "Multiple sources",
      "l": "data enrichment"
     },
     {
      "v": "Elasticsearch",
      "l": "low-latency queries"
     },
     {
      "v": "DataLab",
      "l": "data engineering"
     }
    ],
    "demos": [
     {
      "kind": "app",
      "t": "Query Engine · Serasa Experian",
      "d": "Simulated enrichment: pick a fictitious company and watch sources (bureaus, Central Bank, courts, positive records) get queried in cascade, processed and consolidated into a report. Sources, companies and data are entirely fictitious.",
      "u": "serasa-query-engine.html",
      "btn": "Open query engine →"
     }
    ],
    "stints": [
     {
      "r": "Data Engineer · DataLab (MIP · PoC-Hands projects)",
      "per": "2018 to 2019",
      "prob": "DataLab, Serasa Experian innovation office, needed to incorporate multiple data sources into the company models and products. The challenge was turning heterogeneous datasets, with different structures, frequencies and quality levels, into information that was consistent, searchable and usable by applications, analyses and experiments.",
      "dec": "The architecture organized ingestion, standardization, treatment, cross-referencing, aggregation, indexing and querying. Spark handled distributed processing and data preparation; HDFS sustained storage for large datasets; and Elasticsearch provided low-latency indexing and retrieval. Python development supported transformations, automation, analysis and prototypes, and AWS components were used in parts of ingestion and infrastructure. Since sources varied in structure and quality, engineering normalized fields, checked consistency, prepared relationship keys, handled missing data and built aggregations suited for consumption; after processing, results became documents ready for indexing, with fields organized for filters, text queries and analytical aggregations.",
      "res": "New sources began to be incorporated on top of a reusable enrichment base, with data prepared for search and analysis and lower-latency queries over large volumes, supporting DataLab experiments and products. The role combined engineering and innovation: evaluating new sources, understanding their usefulness and building an architecture able to turn experimentation into a usable solution. This period also included the volunteer project Lilith, teaching Android programming to girls from a vulnerable community.",
      "metrics": [
       "multi-source enrichment",
       "Spark + HDFS + Elasticsearch",
       "low query latency",
       "reusable DataLab base"
      ],
      "stack": [
       "Python",
       "Spark",
       "HDFS",
       "Elasticsearch",
       "AWS Lambda",
       "CloudFormation",
       "pandas",
       "NumPy"
      ]
     }
    ],
    "arch": [
     [
      "Sources",
      "multiple · heterogeneous"
     ],
     [
      "Ingestion",
      "HDFS · AWS Lambda"
     ],
     [
      "Processing",
      "Spark · normalization · cross-referencing"
     ],
     [
      "Index",
      "Elasticsearch · low latency"
     ],
     [
      "Consumption",
      "applications · DataLab experiments"
     ]
    ],
    "stat3": [
     {
      "v": "Spark + ES",
      "l": "distributed processing and low-latency analytical index"
     },
     {
      "v": "multi-source",
      "l": "incorporation of heterogeneous sources into a reusable enrichment base"
     },
     {
      "v": "DataLab",
      "l": "engineering applied to innovation: from source evaluation to usable product"
     }
    ],
    "layers": [
     {
      "icon": "📥",
      "title": "Ingestion · HDFS + Lambda",
      "desc": "Large batch datasets arrive via HDFS from the Hadoop ecosystem, and part of ingestion is supported by AWS Lambda functions. Each source can have different structure, frequency and quality, handled right at entry."
     },
     {
      "icon": "⚡",
      "title": "Spark · enrichment",
      "desc": "Spark jobs normalize fields, check consistency, prepare relationship keys, cross-reference sources and build aggregations suited for consumption. This is where heterogeneous datasets become usable information."
     },
     {
      "icon": "🔍",
      "title": "Elasticsearch · analytical index",
      "desc": "Results become documents indexed in Elasticsearch, with fields organized for filters, text queries and aggregations. Low-latency queries even over large volumes."
     },
     {
      "icon": "📓",
      "title": "Jupyter + Pandas + Numpy",
      "desc": "Exploratory analysis environment for DataLab. POCs of new models and ad-hoc analyses in Python, accessing Elasticsearch directly, with no need to move the data."
     },
     {
      "icon": "🎯",
      "title": "Consumption · applications and experiments",
      "desc": "Enriched, indexed data is made available to DataLab applications, analyses and experiments, with low-latency queries over large volumes."
     }
    ],
    "codeNotes": [
     {
      "tab": "Spark → Elasticsearch",
      "label": "Spark aggregation pipeline indexing into Elasticsearch (Python)",
      "note": "Querying millions of credit events for every question would be slow. The strategy here is to pre-compute: Spark reads raw data from HDFS and summarizes everything by product, segment and month (count, sum, average and the 95th percentile of the score). This much smaller aggregated result is written to Elasticsearch, a search engine optimized to respond in milliseconds. This way, the final query returns a ready-made result instead of recalculating from scratch every time."
     },
     {
      "tab": "Lambda Ingest",
      "label": "Real-time ingestion with AWS Lambda + CloudFormation (Python)",
      "note": "While Spark handles the historical batch, this Lambda function handles the real-time stream: every incoming event is enriched with an ingestion timestamp and source, and written in two places at once. It goes to S3, which holds the full history for batch processing, and to Elasticsearch, which feeds the live dashboards. This is the architecture pattern that combines the fast response of real time with the completeness of batch."
     },
     {
      "tab": "Data Contract",
      "label": "Data contract: schema, quality and lineage of a source (YAML)",
      "note": "A data contract is the formal agreement on how a source behaves, written so both machines and people can understand it. This contract declares the schema (which fields exist and their types), sensitive-data protection (the national ID never appears in plain text, always encrypted), quality targets (at most 1% nulls, updated within 48h, no duplicates) and lineage (which sources the data comes from and who consumes it). Documenting this prevents a silent change at the source from breaking a report or a model down the line."
     }
    ],
    "faq": [
     {
      "q": "Why Elasticsearch and not a relational database for enrichment?",
      "a": "Elasticsearch supported text search, filters and aggregations over documents prepared by Spark. Properly designed relational databases can also support analytics; the choice depends on access patterns and operations. The search index complemented distributed processing rather than replacing every relational database function."
     },
     {
      "q": "What is Lambda architecture (not AWS Lambda)?",
      "a": "Lambda architecture is a data pattern combining two layers: the batch layer (periodically processes all historical data) and the speed layer (processes events with lower latency). Consumption uses both. Here, HDFS + Spark covered the batch layer, and AWS Lambda supported the lower-latency layer."
     },
     {
      "q": "How were such different sources integrated into a single query?",
      "a": "Each source could have its own structure, frequency and quality. Engineering normalized fields into a common format, prepared relationship keys between sources, handled missing data and built aggregations before indexing. This is what makes it possible to query bureaus, public data and other datasets as if they spoke the same language, without every query having to scan the entire lake."
     }
    ]
   },
   "es": {
    "r": "Ingeniera de Datos · DataLab",
    "per": "2018 a 2019",
    "d": "En el DataLab de Serasa Experian, trabajé como Ingeniera de Datos, programando pipelines de enriquecimiento que incorporaban múltiples fuentes a modelos y productos de datos. Trabajé con procesamiento distribuido, almacenamiento a gran escala y consultas de baja latencia.",
    "heroChips": [
     "Amazon Web Services · Certificada",
     "Python · Spark",
     "DataLab · Enriquecimiento de Datos",
     "Elasticsearch · Baja Latencia"
    ],
    "app": {
     "sub": "ENRIQUECIMIENTO ANALÍTICO",
     "h": "Múltiples fuentes, <em>una consulta.</em>",
     "d": "Simulación del motor de enriquecimiento de DataLab: fuentes consultadas en cascada, procesamiento en Spark e índice en Elasticsearch para consulta de baja latencia. Simulación didáctica, con fuentes y datos ficticios."
    },
    "metrics": [
     {
      "v": "Spark",
      "l": "procesamiento distribuido"
     },
     {
      "v": "Múltiples fuentes",
      "l": "enriquecimiento de datos"
     },
     {
      "v": "Elasticsearch",
      "l": "consultas de baja latencia"
     },
     {
      "v": "DataLab",
      "l": "ingeniería de datos"
     }
    ],
    "demos": [
     {
      "kind": "app",
      "t": "Query Engine · Serasa Experian",
      "d": "Enriquecimiento simulado: selecciona una empresa ficticia y observa cómo las fuentes (bureaus, banco central, judicial, positivos) se consultan en cascada, se procesan y se consolidan en un informe. Fuentes, empresas y datos enteramente ficticios.",
      "u": "serasa-query-engine.html",
      "btn": "Abrir query engine →"
     }
    ],
    "stints": [
     {
      "r": "Ingeniera de Datos · DataLab (proyectos MIP · PoC-Hands)",
      "per": "2018 a 2019",
      "prob": "DataLab, la oficina de innovación de Serasa Experian, necesitaba incorporar múltiples fuentes de datos a los modelos y productos de la compañía. El desafío era transformar conjuntos heterogéneos, con estructuras, frecuencias y niveles de calidad diferentes, en información consistente, buscable y utilizable por aplicaciones, análisis y experimentos.",
      "dec": "La arquitectura organizaba ingesta, estandarización, tratamiento, cruce, agregación, indexación y consulta. Spark se usaba para procesamiento distribuido y preparación de los datos; HDFS sostenía el almacenamiento de grandes conjuntos; y Elasticsearch proporcionaba indexación y recuperación de información con baja latencia. El desarrollo en Python apoyaba transformaciones, automatizaciones, análisis y prototipos, y componentes AWS se usaban en partes de la ingesta y la infraestructura. Como las fuentes variaban en estructura y calidad, la ingeniería normalizaba campos, verificaba consistencia, preparaba claves de relación, trataba ausencias y construía agregaciones adecuadas al consumo; tras el procesamiento, los resultados se convertían en documentos apropiados para indexación, con campos organizados para filtros, consultas textuales y agregaciones analíticas.",
      "res": "Nuevas fuentes pasaron a incorporarse sobre una base reutilizable de enriquecimiento, con datos preparados para búsqueda y análisis y consultas de menor latencia sobre grandes volúmenes, apoyando experimentos y productos de DataLab. La actuación combinaba ingeniería e innovación: evaluar nuevas fuentes, entender su utilidad y construir una arquitectura capaz de transformar experimentación en solución utilizable. De esta etapa también formó parte el proyecto voluntario Lilith, enseñando programación Android a niñas de una comunidad en situación de vulnerabilidad.",
      "metrics": [
       "enriquecimiento multi-fuente",
       "Spark + HDFS + Elasticsearch",
       "baja latencia de consulta",
       "base reutilizable de DataLab"
      ],
      "stack": [
       "Python",
       "Spark",
       "HDFS",
       "Elasticsearch",
       "AWS Lambda",
       "CloudFormation",
       "pandas",
       "NumPy"
      ]
     }
    ],
    "arch": [
     [
      "Fuentes",
      "múltiples · heterogéneas"
     ],
     [
      "Ingesta",
      "HDFS · AWS Lambda"
     ],
     [
      "Procesamiento",
      "Spark · normalización · cruce"
     ],
     [
      "Índice",
      "Elasticsearch · baja latencia"
     ],
     [
      "Consumo",
      "aplicaciones · experimentos DataLab"
     ]
    ],
    "stat3": [
     {
      "v": "Spark + ES",
      "l": "procesamiento distribuido e índice analítico de baja latencia"
     },
     {
      "v": "multi-fuente",
      "l": "incorporación de fuentes heterogéneas en una base de enriquecimiento reutilizable"
     },
     {
      "v": "DataLab",
      "l": "ingeniería aplicada a la innovación: de la evaluación de fuentes al producto utilizable"
     }
    ],
    "layers": [
     {
      "icon": "📥",
      "title": "Ingesta · HDFS + Lambda",
      "desc": "Grandes conjuntos por lotes (batch) llegan vía HDFS del ecosistema Hadoop y parte de la ingesta se apoya en funciones AWS Lambda. Cada fuente puede tener estructura, frecuencia y calidad diferentes, tratadas ya en la entrada."
     },
     {
      "icon": "⚡",
      "title": "Spark · enriquecimiento",
      "desc": "Los jobs Spark normalizan campos, verifican consistencia, preparan claves de relación, cruzan fuentes y construyen agregaciones adecuadas al consumo. Es donde los conjuntos heterogéneos se convierten en información utilizable."
     },
     {
      "icon": "🔍",
      "title": "Elasticsearch · índice analítico",
      "desc": "Los resultados se convierten en documentos indexados en Elasticsearch, con campos organizados para filtros, consultas textuales y agregaciones. Consulta de baja latencia incluso sobre grandes volúmenes."
     },
     {
      "icon": "📓",
      "title": "Jupyter + Pandas + Numpy",
      "desc": "Ambiente de análisis exploratorio para DataLab. POCs de nuevos modelos y análisis ad-hoc en Python, accediendo a Elasticsearch directamente, sin necesidad de mover los datos."
     },
     {
      "icon": "🎯",
      "title": "Consumo · aplicaciones y experimentos",
      "desc": "Los datos enriquecidos e indexados quedan disponibles para aplicaciones, análisis y experimentos de DataLab, con consulta de baja latencia sobre grandes volúmenes."
     }
    ],
    "codeNotes": [
     {
      "tab": "Spark → Elasticsearch",
      "label": "Pipeline de agregaciones Spark indexando en Elasticsearch (Python)",
      "note": "Consultar millones de eventos de crédito en cada pregunta sería lento. La estrategia aquí es precalcular: Spark lee los datos brutos de HDFS y resume todo por producto, segmento y mes (conteo, suma, promedio y el percentil 95 del score). Ese resultado agregado, mucho menor, se graba en Elasticsearch, un motor de búsqueda optimizado para responder en milisegundos. Así, la consulta final entrega el resultado listo en vez de recalcular desde cero cada vez."
     },
     {
      "tab": "Lambda Ingest",
      "label": "Ingesta en tiempo real con AWS Lambda + CloudFormation (Python)",
      "note": "Mientras Spark trata el histórico por lotes, esta función Lambda se ocupa del flujo en tiempo real: cada evento que llega se enriquece con fecha de ingesta y origen, y se graba en dos lugares a la vez. Va a S3, que guarda el histórico completo para el procesamiento por lotes, y a Elasticsearch, que alimenta los dashboards inmediatos. Es el patrón de arquitectura que combina la respuesta rápida del tiempo real con la completitud del lote."
     },
     {
      "tab": "Data Contract",
      "label": "Contrato de datos: esquema, calidad y linaje de una fuente (YAML)",
      "note": "Un contrato de datos es el acuerdo formal sobre cómo se comporta una fuente, escrito de forma que máquina y persona lo entiendan. Este contrato declara el esquema (qué campos existen y sus tipos), la protección de datos sensibles (el CPF nunca aparece en texto plano, siempre cifrado), las metas de calidad (máximo 1% de nulos, actualización en hasta 48h, sin duplicados) y el linaje (de qué fuentes viene el dato y quién lo consume). Documentar esto evita que un cambio silencioso en el origen rompa un informe o un modelo más adelante."
     }
    ],
    "faq": [
     {
      "q": "¿Por qué Elasticsearch y no una base relacional para el enriquecimiento?",
      "a": "Elasticsearch atendía búsquedas de texto, filtros y agregaciones sobre documentos preparados por Spark. Las bases relacionales bien diseñadas también admiten analítica; la elección depende del patrón de acceso y la operación. El índice complementaba el procesamiento distribuido."
     },
     {
      "q": "¿Qué es la arquitectura Lambda (no el AWS Lambda)?",
      "a": "Lambda architecture es un patrón de datos que combina dos capas: batch layer (procesa todos los datos históricos periódicamente) y speed layer (procesa eventos con menor latencia). El consumo usa ambas. Aquí, HDFS + Spark cubrían el batch y AWS Lambda apoyaba la capa de menor latencia."
     },
     {
      "q": "¿Cómo se integraban fuentes tan diferentes en una sola consulta?",
      "a": "Cada fuente podía tener estructura, frecuencia y calidad propias. La ingeniería normalizaba los campos a un formato común, preparaba claves de relación entre las fuentes, trataba ausencias y construía agregaciones antes de indexar. Es lo que permite consultar bureaus, datos públicos y otros conjuntos como si hablaran el mismo idioma, sin que cada consulta necesite escanear todo el lake."
     }
    ]
   },
   "ja": {
    "r": "データエンジニア · DataLab",
    "per": "2018年〜2019年",
    "d": "Serasa ExperianのDataLabでデータエンジニアとして、複数の情報源をモデルやデータ製品に取り込むエンリッチメントパイプラインを実装しました。分散処理、大規模ストレージ、低遅延クエリを担当しました。",
    "heroChips": [
     "Amazon Web Services · 認定資格",
     "Python · Spark",
     "DataLab · データエンリッチメント",
     "Elasticsearch · 低レイテンシ"
    ],
    "app": {
     "sub": "分析エンリッチメント",
     "h": "複数ソースを<em>1つのクエリに。</em>",
     "d": "DataLabのエンリッチメントエンジンのシミュレーション: カスケード方式でソースを照会し、Sparkで処理し、Elasticsearchにインデックスして低レイテンシクエリを実現。架空のソースとデータによる教育目的のシミュレーションです。"
    },
    "metrics": [
     {
      "v": "Spark",
      "l": "分散処理"
     },
     {
      "v": "複数の情報源",
      "l": "データの付加情報処理"
     },
     {
      "v": "Elasticsearch",
      "l": "低遅延クエリ"
     },
     {
      "v": "DataLab",
      "l": "データエンジニアリング"
     }
    ],
    "demos": [
     {
      "kind": "app",
      "t": "Query Engine · Serasa Experian",
      "d": "エンリッチメントのシミュレーション: 架空の企業を選ぶと、複数のソース（信用調査機関、中央銀行、司法、ポジティブ情報）がカスケード方式で照会・処理され、レポートに統合される様子を確認できます。ソース、企業、データはすべて架空のものです。",
      "u": "serasa-query-engine.html",
      "btn": "クエリエンジンを開く →"
     }
    ],
    "stints": [
     {
      "r": "データエンジニア · DataLab（MIP・PoC-Handsプロジェクト）",
      "per": "2018年〜2019年",
      "prob": "Serasa Experianのイノベーション部門であるDataLabは、複数のデータソースを会社のモデルとプロダクトに組み込む必要がありました。課題は、構造・頻度・品質レベルの異なる多様なデータセットを、一貫性があり、検索可能で、アプリケーション・分析・実験で利用可能な情報に変換することでした。",
      "dec": "アーキテクチャは、取り込み、標準化、加工、クロス参照、集計、インデックス作成、クエリを体系化しました。Sparkは分散処理とデータ準備を担当し、HDFSは大規模データセットのストレージを支え、Elasticsearchは低レイテンシのインデックス作成と検索を提供しました。Pythonでの開発が変換、自動化、分析、プロトタイプを支え、AWSのコンポーネントが取り込みとインフラの一部で使用されました。ソースごとに構造と品質が異なるため、エンジニアリングはフィールドを正規化し、整合性を確認し、関連付けキーを準備し、欠損を処理し、消費に適した集計を構築しました。処理後、結果はフィルタ、テキストクエリ、分析用集計向けにフィールドが整理されたインデックス化用ドキュメントになりました。",
      "res": "新しいソースは再利用可能なエンリッチメント基盤の上に組み込まれるようになり、データは検索・分析向けに準備され、大規模なデータ量に対しても低レイテンシのクエリが可能になり、DataLabの実験とプロダクトを支えました。この役割はエンジニアリングとイノベーションを組み合わせたものでした: 新しいソースを評価し、その有用性を理解し、実験を利用可能なソリューションへと変えるアーキテクチャを構築しました。この期間には、脆弱な立場にあるコミュニティの女子にAndroidプログラミングを教えるボランティアプロジェクトLilithも含まれます。",
      "metrics": [
       "複数ソースのエンリッチメント",
       "Spark + HDFS + Elasticsearch",
       "低クエリレイテンシ",
       "再利用可能なDataLab基盤"
      ],
      "stack": [
       "Python",
       "Spark",
       "HDFS",
       "Elasticsearch",
       "AWS Lambda",
       "CloudFormation",
       "pandas",
       "NumPy"
      ]
     }
    ],
    "arch": [
     [
      "ソース",
      "複数 · 多様"
     ],
     [
      "取り込み",
      "HDFS · AWS Lambda"
     ],
     [
      "処理",
      "Spark · 正規化 · クロス参照"
     ],
     [
      "インデックス",
      "Elasticsearch · 低レイテンシ"
     ],
     [
      "消費",
      "アプリケーション · DataLabの実験"
     ]
    ],
    "stat3": [
     {
      "v": "Spark + ES",
      "l": "分散処理と低レイテンシの分析インデックス"
     },
     {
      "v": "複数ソース",
      "l": "多様なソースを再利用可能なエンリッチメント基盤に統合"
     },
     {
      "v": "DataLab",
      "l": "イノベーションに応用されたエンジニアリング: ソース評価から利用可能なプロダクトまで"
     }
    ],
    "layers": [
     {
      "icon": "📥",
      "title": "取り込み · HDFS + Lambda",
      "desc": "大規模なバッチデータセットはHadoopエコシステムのHDFS経由で届き、取り込みの一部はAWS Lambda関数によって支えられます。各ソースは構造・頻度・品質が異なる場合があり、入口ですでに処理されます。"
     },
     {
      "icon": "⚡",
      "title": "Spark · エンリッチメント",
      "desc": "Sparkジョブがフィールドを正規化し、整合性を確認し、関連付けキーを準備し、ソースをクロス参照し、消費に適した集計を構築します。ここで多様なデータセットが利用可能な情報に変わります。"
     },
     {
      "icon": "🔍",
      "title": "Elasticsearch · 分析インデックス",
      "desc": "結果はElasticsearchにインデックス化されたドキュメントとなり、フィルタ、テキストクエリ、集計向けにフィールドが整理されます。大規模なデータ量でも低レイテンシでクエリ可能です。"
     },
     {
      "icon": "📓",
      "title": "Jupyter + Pandas + Numpy",
      "desc": "DataLab向けの探索的分析環境。データを移動させることなくElasticsearchへ直接アクセスし、新しいモデルのPOCやアドホック分析をPythonで実施。"
     },
     {
      "icon": "🎯",
      "title": "消費 · アプリケーションと実験",
      "desc": "エンリッチメントされインデックス化されたデータは、DataLabのアプリケーション、分析、実験で利用可能になり、大規模なデータ量でも低レイテンシでクエリできます。"
     }
    ],
    "codeNotes": [
     {
      "tab": "Spark → Elasticsearch",
      "label": "ElasticsearchへインデックスするSparkの集計パイプライン（Python）",
      "note": "質問のたびに数百万件の信用イベントを照会するのは低速です。ここでの戦略は事前計算です: SparkがHDFSから生データを読み込み、商品・セグメント・月ごとにすべてを要約します（件数、合計、平均、スコアの95パーセンタイル）。このはるかに小さな集計結果はElasticsearch（ミリ秒単位で応答するよう最適化された検索エンジン）に書き込まれます。これにより、最終的なクエリは毎回ゼロから再計算するのではなく、準備済みの結果を返します。"
     },
     {
      "tab": "Lambda Ingest",
      "label": "AWS Lambda + CloudFormationによるリアルタイム取り込み（Python）",
      "note": "Sparkが過去データのバッチを処理する一方、このLambda関数はリアルタイムストリームを処理します: 到着する各イベントは取り込み日時とソース情報でエンリッチされ、2か所に同時に書き込まれます。バッチ処理用の完全な履歴を保持するS3と、ライブダッシュボードに供給するElasticsearchです。これは、リアルタイムの高速応答とバッチの完全性を組み合わせるアーキテクチャパターンです。"
     },
     {
      "tab": "Data Contract",
      "label": "データ契約: あるソースのスキーマ、品質、リネージ（YAML）",
      "note": "データ契約とは、ソースの挙動に関する正式な合意であり、機械と人間の両方が理解できる形で記述されます。この契約は、スキーマ（存在するフィールドとその型）、機密データの保護（CPFは決して平文で現れず、常に暗号化される）、品質目標（null許容は最大1%、48時間以内の更新、重複なし）、リネージ（データがどのソースから来て誰が利用するか）を宣言します。これを文書化することで、ソース側での気づかれない変更が、後にレポートやモデルを壊すことを防ぎます。"
     }
    ],
    "faq": [
     {
      "q": "なぜエンリッチメントにリレーショナルデータベースではなくElasticsearchを使ったのですか?",
      "a": "ElasticsearchはSparkで準備した文書に対する全文検索、フィルター、集計を担いました。適切に設計したリレーショナルDBも分析に対応でき、選択はアクセスパターンと運用要件によります。検索インデックスは分散処理を補完するものです。"
     },
     {
      "q": "Lambdaアーキテクチャとは何ですか（AWS Lambdaとは別物です）?",
      "a": "Lambdaアーキテクチャは、2つの層を組み合わせるデータパターンです: バッチ層（すべての過去データを定期的に処理）とスピード層（より低いレイテンシでイベントを処理）。消費側は両方を利用します。ここでは、HDFS + Sparkがバッチ層を、AWS Lambdaがより低レイテンシの層を支えました。"
     },
     {
      "q": "これほど異なるソースを、どのように1つのクエリに統合したのですか?",
      "a": "各ソースは独自の構造、頻度、品質を持つ場合がありました。エンジニアリングはフィールドを共通フォーマットに正規化し、ソース間の関連付けキーを準備し、欠損を処理し、インデックス作成前に集計を構築しました。これにより、各クエリがレイク全体をスキャンする必要なく、信用調査機関、公開データ、その他のデータセットをあたかも同じ言語を話すかのように照会できます。"
     }
    ]
   }
  },
  "app": {
   "sub": "ENRIQUECIMENTO ANALÍTICO",
   "h": "Múltiplas fontes, <em>uma consulta.</em>",
   "d": "Simulação do motor de enriquecimento do DataLab: fontes consultadas em cascata, processamento em Spark e índice no Elasticsearch para consulta de baixa latência. Simulação didática, com fontes e dados fictícios."
  },
  "metrics": [
   {
    "v": "Spark",
    "l": "processamento distribuído"
   },
   {
    "v": "Múltiplas fontes",
    "l": "enriquecimento de dados"
   },
   {
    "v": "Elasticsearch",
    "l": "consultas de baixa latência"
   },
   {
    "v": "DataLab",
    "l": "engenharia de dados"
   }
  ],
  "stack": [
   "Python",
   "Spark",
   "Hadoop",
   "HDFS",
   "Elasticsearch",
   "AWS Lambda",
   "CloudFormation",
   "pandas",
   "NumPy"
  ],
  "demos": [
   {
    "kind": "app",
    "t": "Query Engine · Serasa Experian",
    "d": "Enriquecimento simulado: selecione uma empresa fictícia e veja fontes (bureaus, BACEN, judiciário, positivos) sendo consultadas em cascata, processadas e consolidadas em um relatório. Fontes, empresas e dados inteiramente fictícios.",
    "u": "serasa-query-engine.html",
    "btn": "Abrir query engine →"
   }
  ],
  "stints": [
   {
    "r": "Engenheira de Dados · DataLab (projetos MIP · PoC-Hands)",
    "per": "2018 a 2019",
    "prob": "O DataLab, escritório de inovação da Serasa Experian, precisava incorporar múltiplas fontes de dados aos modelos e produtos da companhia. O desafio era transformar conjuntos heterogêneos, com estruturas, frequências e níveis de qualidade diferentes, em informações consistentes, pesquisáveis e utilizáveis por aplicações, análises e experimentos.",
    "dec": "A arquitetura organizava ingestão, padronização, tratamento, cruzamento, agregação, indexação e consulta. O Spark era usado para processamento distribuído e preparação dos dados; o HDFS sustentava o armazenamento de grandes conjuntos; e o Elasticsearch fornecia indexação e recuperação de informações com baixa latência. O desenvolvimento em Python apoiava transformações, automações, análises e protótipos, e componentes AWS eram usados em partes da ingestão e da infraestrutura. Como as fontes variavam em estrutura e qualidade, a engenharia normalizava campos, verificava consistência, preparava chaves de relacionamento, tratava ausências e construía agregações adequadas ao consumo; depois do processamento, os resultados viravam documentos apropriados para indexação, com campos organizados para filtros, consultas textuais e agregações analíticas.",
    "res": "Novas fontes passaram a ser incorporadas sobre uma base reutilizável de enriquecimento, com dados preparados para pesquisa e análise e consultas de menor latência sobre grandes volumes, apoiando experimentos e produtos do DataLab. A atuação combinava engenharia e inovação: avaliar novas fontes, entender sua utilidade e construir uma arquitetura capaz de transformar experimentação em solução utilizável. Dessa fase também fez parte o projeto voluntário Lilith, ensinando programação Android para meninas de uma comunidade em situação de vulnerabilidade.",
    "metrics": [
     "enriquecimento multi-fonte",
     "Spark + HDFS + Elasticsearch",
     "baixa latência de consulta",
     "base reutilizável do DataLab"
    ],
    "stack": [
     "Python",
     "Spark",
     "HDFS",
     "Elasticsearch",
     "AWS Lambda",
     "CloudFormation",
     "pandas",
     "NumPy"
    ]
   }
  ],
  "arch": [
   [
    "Fontes",
    "múltiplas · heterogêneas"
   ],
   [
    "Ingestão",
    "HDFS · AWS Lambda"
   ],
   [
    "Processamento",
    "Spark · normalização · cruzamento"
   ],
   [
    "Índice",
    "Elasticsearch · baixa latência"
   ],
   [
    "Consumo",
    "aplicações · experimentos DataLab"
   ]
  ],
  "stat3": [
   {
    "v": "Spark + ES",
    "l": "processamento distribuído e índice analítico de baixa latência"
   },
   {
    "v": "multi-fonte",
    "l": "incorporação de fontes heterogêneas em uma base de enriquecimento reutilizável"
   },
   {
    "v": "DataLab",
    "l": "engenharia aplicada à inovação: da avaliação de fontes ao produto utilizável"
   }
  ],
  "layers": [
   {
    "icon": "📥",
    "title": "Ingestão · HDFS + Lambda",
    "desc": "Grandes conjuntos em lote (batch) chegam via HDFS do ecossistema Hadoop e parte da ingestão é apoiada por funções AWS Lambda. Cada fonte pode ter estrutura, frequência e qualidade diferentes, tratadas já na entrada."
   },
   {
    "icon": "⚡",
    "title": "Spark · enriquecimento",
    "desc": "Jobs Spark normalizam campos, verificam consistência, preparam chaves de relacionamento, cruzam fontes e constroem agregações adequadas ao consumo. É onde os conjuntos heterogêneos viram informação utilizável."
   },
   {
    "icon": "🔍",
    "title": "Elasticsearch · índice analítico",
    "desc": "Os resultados viram documentos indexados no Elasticsearch, com campos organizados para filtros, consultas textuais e agregações. Consulta de baixa latência mesmo sobre grandes volumes."
   },
   {
    "icon": "📓",
    "title": "Jupyter + Pandas + Numpy",
    "desc": "Ambiente de análise exploratória para o DataLab. PoCs de novos modelos e análises ad-hoc em Python, acessando o Elasticsearch diretamente, sem precisar mover os dados."
   },
   {
    "icon": "🎯",
    "title": "Consumo · aplicações e experimentos",
    "desc": "Os dados enriquecidos e indexados ficam disponíveis para aplicações, análises e experimentos do DataLab, com consulta de baixa latência sobre grandes volumes."
   }
  ],
  "code": [
   {
    "tab": "Spark → Elasticsearch",
    "label": "Pipeline de agregações Spark indexando no Elasticsearch (Python)",
    "code": "from pyspark.sql import SparkSession\nfrom pyspark.sql import functions as F\nfrom elasticsearch import Elasticsearch, helpers\n\nspark = SparkSession.builder     .config(\"es.nodes\", ES_HOST)     .config(\"es.port\", \"9200\")     .getOrCreate()\n\n# Lê do HDFS e pré-computa agregações\nraw = spark.read.parquet(\"hdfs:///serasa/credit-events/\")\naggs = raw.groupBy(\"product\", \"segment\", \"month\").agg(\n    F.count(\"*\").alias(\"total_events\"),\n    F.sum(\"value\").alias(\"total_value\"),\n    F.avg(\"score\").alias(\"avg_score\"),\n    F.percentile_approx(\"score\", 0.95).alias(\"p95_score\")\n)\n\n# Indexa no Elasticsearch via conector nativo\naggs.write     .format(\"org.elasticsearch.spark.sql\")     .option(\"es.resource\", \"serasa-aggs/month\")     .option(\"es.mapping.id\", \"product\")     .mode(\"overwrite\").save()\nprint(f\"Indexados: {aggs.count()} segmentos\")",
    "note": "Consultar milhões de eventos de crédito a cada pergunta seria lento. A estratégia aqui é pré-calcular: o Spark lê os dados brutos do HDFS e resume tudo por produto, segmento e mês (contagem, soma, média e o percentil 95 do score). Esse resultado agregado, muito menor, é gravado no Elasticsearch, um motor de busca otimizado para responder em milissegundos. Assim, a consulta final entrega o resultado pronto em vez de recalcular do zero toda vez."
   },
   {
    "tab": "Lambda Ingest",
    "label": "Ingestão em tempo real com AWS Lambda + CloudFormation (Python)",
    "code": "import json, boto3\nfrom datetime import datetime\n\ndef handler(event, context):\n    \"\"\"Lambda: captura eventos de dispositivo e persiste no S3/ES\"\"\"\n    es = boto3.client(\"es\")\n\n    for record in event[\"Records\"]:\n        payload = json.loads(record[\"body\"])\n        enriched = {\n            **payload,\n            \"ingested_at\": datetime.utcnow().isoformat(),\n            \"source\": \"lambda-realtime\",\n            \"ttl\": 86400 * 30  # 30 dias no índice\n        }\n        # Persiste no S3 para batch e no ES para dashboards\n        boto3.client(\"s3\").put_object(\n            Bucket=\"serasa-lake\", Body=json.dumps(enriched),\n            Key=f\"events/{enriched['product']}/{enriched['ingested_at'][:10]}/evt.json\"\n        )\n    return {\"statusCode\": 200, \"processed\": len(event[\"Records\"])}",
    "note": "Enquanto o Spark trata o histórico em lote, esta função Lambda cuida do fluxo em tempo real: cada evento que chega é enriquecido com data de ingestão e origem, e gravado em dois lugares ao mesmo tempo. Vai para o S3, que guarda o histórico completo para o processamento em lote, e para o Elasticsearch, que alimenta os dashboards imediatos. É o padrão de arquitetura que combina a resposta rápida do tempo real com a completude do lote."
   },
   {
    "tab": "Data Contract",
    "label": "Contrato de dados: schema, qualidade e linhagem de uma fonte (YAML)",
    "code": "# Contrato de dados: schema, PII, qualidade e linhagem de uma fonte\napiVersion: datacontract/v1\nkind: DataContract\n\nmetadata:\n  name: credit-scores-monthly\n  domain: credit-analytics\n  owner: data-lab-team\n  sla: \"99.5%\"\n  refreshCadence: monthly\n  status: production\n\nschema:\n  table: serasa_credit_score\n  fields:\n    - name: cpf_hash        # jamais o CPF em texto puro, sempre SHA-256\n      type: string\n      nullable: false\n      pii: true\n      masking: sha256\n    - name: score\n      type: integer\n      range: [0, 1000]\n      nullable: false\n    - name: reference_month\n      type: date\n      format: \"YYYY-MM\"\n\nquality:\n  completeness: \"99%\"    # máx 1% de nulos permitido\n  freshness: \"48h\"       # atualizado em até 2 dias úteis\n  uniqueness: \"cpf_hash\" # sem duplicata por mês\n\nlineage:\n  sources:\n    - \"hadoop://hdfs/credit-events\"\n    - \"aws://lambda/realtime-ingest\"\n  consumers:\n    - BI dashboards\n    - scoring-api\n    - modelos e experimentos do DataLab",
    "note": "Um contrato de dados é o acordo formal sobre como uma fonte se comporta, escrito de forma que máquina e pessoa entendam. Este contrato declara o schema (quais campos existem e seus tipos), a proteção de dados sensíveis (o CPF nunca aparece em texto puro, sempre criptografado), as metas de qualidade (no máximo 1% de nulos, atualização em até 48h, sem duplicatas) e a linhagem (de quais fontes o dado vem e quem o consome). Documentar isso evita que uma mudança silenciosa na origem quebre um relatório ou um modelo lá na frente."
   }
  ],
  "faq": [
   {
    "q": "Por que Elasticsearch e não um banco relacional para o enriquecimento?",
    "a": "A escolha do Elasticsearch atendia à busca textual, aos filtros e às agregações sobre documentos preparados pelo Spark. Bancos relacionais também podem atender cargas analíticas quando bem modelados; a escolha depende do padrão de acesso e da operação. O índice de busca complementava o processamento distribuído, sem substituir todas as funções de um banco relacional."
   },
   {
    "q": "O que é arquitetura Lambda (não o AWS Lambda)?",
    "a": "Lambda architecture é um padrão de dados que combina duas camadas: batch layer (processa todos os dados históricos periodicamente) e speed layer (processa eventos com menor latência). O consumo usa ambas. Aqui, HDFS + Spark cobrem o batch e o AWS Lambda apoia a camada de menor latência."
   },
   {
    "q": "Como fontes tão diferentes eram integradas em uma consulta só?",
    "a": "Cada fonte podia ter estrutura, frequência e qualidade próprias. A engenharia normalizava os campos para um formato comum, preparava chaves de relacionamento entre as fontes, tratava ausências e construía agregações antes de indexar. É o que permite consultar bureaus, dados públicos e outros conjuntos como se falassem a mesma língua, sem que cada consulta precise varrer todo o lake."
   }
  ],
  "heroImg": "assets/gallery-signatures/jen-leadership-ai.webp",
  "heroGrad": "linear-gradient(125deg,#32105b,#7224b8)"
 },
 {
  "f": "var",
  "flag": "de",
  "n": "Dafiti",
  "dom": "dafiti.com.br",
  "per": "2018",
  "r": "Desenvolvedora Python",
  "d": "Na Dafiti, introduzi processamento distribuído e uma nova arquitetura cloud na engenharia de dados. Programei a modernização das cargas existentes, ampliei a capacidade de processamento e preparei a base para aplicar machine learning na detecção de vendas fora do padrão.",
  "heroChips": [
   "Amazon Web Services · Certificada",
   "Python · PySpark",
   "Processamento Distribuído · Machine Learning",
   "Spark como novo padrão"
  ],
  "t": {
   "en": {
    "r": "Python Developer",
    "per": "2018",
    "d": "Jennifer brought Apache Spark and AWS into Dafiti data engineering, redesigning workloads previously concentrated in BigQuery as distributed pipelines in PySpark, Amazon EMR and Amazon S3. The modernization expanded processing capacity and made room for machine learning applied to detecting off-pattern sales.",
    "heroChips": [
     "Amazon Web Services · Certified",
     "Python · PySpark",
     "Distributed Processing · Machine Learning",
     "Spark as the new standard"
    ],
    "app": {
     "sub": "ETL & ANOMALY DETECTION",
     "h": "Off-pattern sales detected <em>in minutes.</em>",
     "d": "Simulation of the Dafiti platform: distributed ETL on EMR, a catalog of sales tables and alerts from the anomaly-detection model. Didactic simulation, no corporate data."
    },
    "metrics": [
     "Spark introduced as the standard",
     "BigQuery → PySpark/EMR/S3",
     "multicloud AWS + GCP",
     "sales anomaly ML"
    ],
    "demos": [
     {
      "kind": "app",
      "t": "ML Anomaly Detector · Dafiti",
      "d": "Sales anomaly detection: IsolationForest per SKU, 3 scenarios (normal day / Black Friday / campaign), a Slack alert and a comparison of distributed ETL vs. BigQuery. Simulated data and metrics for demonstration.",
      "u": "dafiti-anomaly-detector.html",
      "btn": "Open detector →"
     }
    ],
    "stints": [
     {
      "r": "Python Developer · Big Data Performance & Automation",
      "per": "2018",
      "prob": "Analytical processing ran on BigQuery and could not keep up with the volume and speed of a large e-commerce operation. On top of that, off-pattern sales, suspicious spikes for a product or unexpected drops, went unnoticed and could lead to incorrect stock replenishment.",
      "dec": "Apache Spark was introduced into the engineering environment as the new processing standard, and analytical processing was migrated to a distributed architecture with PySpark and Amazon EMR, using Amazon S3 to store inputs, intermediate results and outputs. The modernization went beyond translating SQL into Python: data started being read, partitioned, cross-referenced, aggregated and persisted differently, with transformations broken into smaller steps organized as DataFrames, paying attention to partitioning, joins, shuffle and storage formats. In addition, a machine-learning approach with scikit-learn began analyzing series and deviations to flag off-pattern sales. The environment combined Google Cloud and AWS, a multicloud experience applied to analytical processing.",
      "res": "Greater processing capacity for heavier workloads, more modular and testable transformations, and better use of distributed processing, creating a more scalable foundation for new analytical and machine-learning use cases, with detection of atypical sales to guide replenishment decisions.",
      "metrics": [
       "Spark introduced as the standard",
       "BigQuery → PySpark/EMR/S3",
       "multicloud AWS + GCP",
       "sales anomaly ML"
      ],
      "stack": [
       "Python",
       "PySpark",
       "Apache Spark",
       "Amazon EMR",
       "Amazon S3",
       "Google BigQuery",
       "scikit-learn",
       "Airflow"
      ]
     }
    ],
    "arch": [
     [
      "Sources",
      "e-commerce sales"
     ],
     [
      "Migration",
      "BigQuery → Spark · EMR · S3"
     ],
     [
      "Processing",
      "distributed PySpark"
     ],
     [
      "ML",
      "anomaly detection · IsolationForest"
     ],
     [
      "Consumption",
      "signals for replenishment"
     ]
    ],
    "stat3": [
     {
      "v": "Apache Spark",
      "l": "introduced into engineering as the new distributed-processing standard"
     },
     {
      "v": "AWS + GCP",
      "l": "multicloud architecture: PySpark and Amazon EMR/S3 alongside Google BigQuery"
     },
     {
      "v": "ML",
      "l": "off-pattern sales detection model guiding replenishment"
     }
    ],
    "layers": [
     {
      "icon": "🛍️",
      "title": "Sources · e-commerce sales",
      "desc": "Sales, inventory and pricing events from a large e-commerce operation. Highly seasonal volume, with peaks like Black Friday far above the average day."
     },
     {
      "icon": "⚡",
      "title": "ETL Spark · EMR · S3",
      "desc": "Migration of processing from BigQuery to PySpark on Amazon EMR, with Amazon S3 as storage. Spark native parallelism replaced the legacy sequential processing, with attention to partitioning, joins and shuffle."
     },
     {
      "icon": "🤖",
      "title": "ML · Anomaly detection",
      "desc": "A machine-learning model (Isolation Forest) compares each product against its own history to find what falls outside the pattern. The calculation runs per SKU (the unique code for each product/variation) every cycle, producing signals for investigation."
     },
     {
      "icon": "🔔",
      "title": "Automatic alerts",
      "desc": "A Slack alert to the operations team with the product, variation and historical context. The replenishment team starts acting on data, not intuition."
     }
    ],
    "codeNotes": [
     {
      "tab": "ETL Migration",
      "label": "ETL migration from BigQuery to PySpark + EMR (Python)",
      "note": "Before, sales processing concentrated everything in SQL queries on BigQuery, which grew heavy as volume increased. Here the same transformation runs on PySpark over Amazon EMR: instead of a sequential scan, the work is split and processed in parallel across several nodes. The code reads sales from S3, filters completed ones, aggregates by product, category and day, and writes the result partitioned by date, which makes subsequent reads faster by accessing only the needed slice."
     },
     {
      "tab": "Anomaly Detection",
      "label": "Sales anomaly detection model (Python · scikit-learn)",
      "note": "This model learns each product normal sales behavior to recognize when something falls outside the pattern. For each item, it calculates indicators like the mean and variance of daily sales, the trend over the last 7 days and the weekend weight. The IsolationForest algorithm is trained to isolate atypical cases: when run on the current day, it flags products whose behavior deviates from what is expected and triggers an alert. This is what allows reacting to a stock-out or an unusual spike before it turns into a loss."
     },
     {
      "tab": "Airflow DAG",
      "label": "Airflow DAG scheduling anomaly detection every 2h (Python)",
      "note": "This DAG puts anomaly detection on autopilot: every 2 hours Airflow pulls recent sales, trains the model on the week history and checks the current day. If it finds off-pattern products, it builds a message with the SKU, observed and expected sales, and notifies the inventory team on Slack right away. Instead of relying on someone opening a report, the problem reaches operations on its own, with enough context to act."
     }
    ],
    "faq": [
     {
      "q": "Why Isolation Forest for sales anomalies?",
      "a": "Isolation Forest can identify unusual observations without labeled anomalies. Seasonality and campaigns still require feature preparation and validation; the algorithm does not automatically understand them. Training per product or across product groups is a modeling choice."
     },
     {
      "q": "Why migrate from BigQuery to Spark on EMR?",
      "a": "The change reorganized transformations in PySpark on EMR and S3, with attention to partitioning, joins and shuffle. It addressed this project’s workload; it does not establish that Spark is always faster or cheaper than BigQuery. A comparison requires equivalent data, queries and transfer costs."
     },
     {
      "q": "What was the impact of the anomaly model on inventory operations?",
      "a": "Before the model, replenishment relied on D+1 reports, the day after the problem occurred. Anomalies like a sudden drop in sales for a SKU went hours without action. With automatic detection and an alert to the operations team, response time dropped from hours to minutes, and replenishment decisions started relying on data, reducing incorrect restocking."
     }
    ]
   },
   "es": {
    "r": "Desarrolladora Python",
    "per": "2018",
    "d": "Jennifer llevó Apache Spark y AWS a la ingeniería de datos de Dafiti, rediseñando cargas antes concentradas en BigQuery como pipelines distribuidos en PySpark, Amazon EMR y Amazon S3. La modernización amplió la capacidad de procesamiento y abrió espacio para machine learning aplicado a la detección de ventas fuera de patrón.",
    "heroChips": [
     "Amazon Web Services · Certificada",
     "Python · PySpark",
     "Procesamiento Distribuido · Machine Learning",
     "Spark como nuevo estándar"
    ],
    "app": {
     "sub": "ETL Y DETECCIÓN DE ANOMALÍAS",
     "h": "Ventas fuera de patrón detectadas <em>en minutos.</em>",
     "d": "Simulación de la plataforma de Dafiti: ETL distribuido en EMR, catálogo de las tablas de ventas y alertas del modelo de detección de anomalías. Simulación didáctica, sin datos corporativos."
    },
    "metrics": [
     "Spark introducido como estándar",
     "BigQuery → PySpark/EMR/S3",
     "multicloud AWS + GCP",
     "ML de anomalías de venta"
    ],
    "demos": [
     {
      "kind": "app",
      "t": "ML Anomaly Detector · Dafiti",
      "d": "Detección de anomalías de venta: IsolationForest por SKU, 3 escenarios (día normal / Black Friday / campaña), alerta en Slack y comparativo de ETL distribuido vs. BigQuery. Datos y métricas simulados para demostración.",
      "u": "dafiti-anomaly-detector.html",
      "btn": "Abrir detector →"
     }
    ],
    "stints": [
     {
      "r": "Desarrolladora Python · Performance y Automatización Big Data",
      "per": "2018",
      "prob": "Los procesamientos analíticos corrían en BigQuery y no acompañaban el volumen y la velocidad de un gran e-commerce. Además, ventas fuera de patrón, picos sospechosos de un producto o caídas inesperadas, pasaban desapercibidas y podían generar reposiciones incorrectas de inventario.",
      "dec": "Apache Spark se introdujo en el ambiente de ingeniería como nuevo estándar de procesamiento, y los procesamientos analíticos se migraron a una arquitectura distribuida con PySpark y Amazon EMR, usando Amazon S3 como almacenamiento de entradas, resultados intermedios y salidas. La modernización no se limitó a traducir SQL a Python: los datos pasaron a leerse, particionarse, cruzarse, agregarse y persistirse de otra forma, con transformaciones descompuestas en etapas menores y organizadas en DataFrames, atendiendo a particionamiento, joins, shuffle y formatos de almacenamiento. En complemento, un enfoque de machine learning con scikit-learn pasó a analizar series y desviaciones para señalar ventas fuera de patrón. El ambiente combinaba Google Cloud y AWS, en una experiencia multicloud aplicada a procesamiento analítico.",
      "res": "Mayor capacidad de procesamiento para cargas más pesadas, transformaciones más modulares y testeables y mejor aprovechamiento del procesamiento distribuido, creando una base más escalable para nuevos casos analíticos y de machine learning, con detección de ventas atípicas para orientar las decisiones de reposición.",
      "metrics": [
       "Spark introducido como estándar",
       "BigQuery → PySpark/EMR/S3",
       "multicloud AWS + GCP",
       "ML de anomalías de venta"
      ],
      "stack": [
       "Python",
       "PySpark",
       "Apache Spark",
       "Amazon EMR",
       "Amazon S3",
       "Google BigQuery",
       "scikit-learn",
       "Airflow"
      ]
     }
    ],
    "arch": [
     [
      "Fuentes",
      "ventas e-commerce"
     ],
     [
      "Migración",
      "BigQuery → Spark · EMR · S3"
     ],
     [
      "Procesamiento",
      "PySpark distribuido"
     ],
     [
      "ML",
      "detección de anomalía · IsolationForest"
     ],
     [
      "Consumo",
      "señales para reposición"
     ]
    ],
    "stat3": [
     {
      "v": "Apache Spark",
      "l": "introducido en la ingeniería como nuevo estándar de procesamiento distribuido"
     },
     {
      "v": "AWS + GCP",
      "l": "arquitectura multicloud: PySpark y Amazon EMR/S3 junto con Google BigQuery"
     },
     {
      "v": "ML",
      "l": "modelo de detección de ventas fuera de patrón para orientar la reposición"
     }
    ],
    "layers": [
     {
      "icon": "🛍️",
      "title": "Fuentes · ventas e-commerce",
      "desc": "Eventos de venta, inventario y precio de un gran e-commerce. Volumen altamente estacional, con picos como el Black Friday muy por encima del día promedio."
     },
     {
      "icon": "⚡",
      "title": "ETL Spark · EMR · S3",
      "desc": "Migración de los procesamientos de BigQuery a PySpark en Amazon EMR, con Amazon S3 como almacenamiento. El paralelismo nativo de Spark sustituyó el procesamiento secuencial del legado, con atención a particionamiento, joins y shuffle."
     },
     {
      "icon": "🤖",
      "title": "ML · Detección de anomalía",
      "desc": "Un modelo de machine learning (Isolation Forest) compara cada producto con su propio histórico para encontrar lo que se sale del patrón. El cálculo es por SKU (el código único de cada producto/variación) en cada ciclo, produciendo señales para investigación."
     },
     {
      "icon": "🔔",
      "title": "Alertas automáticas",
      "desc": "Alerta en Slack para el equipo de operaciones con producto, variación y contexto histórico. El equipo de reposición pasa a actuar con datos, no con intuición."
     }
    ],
    "codeNotes": [
     {
      "tab": "ETL Migration",
      "label": "Migración ETL de BigQuery a PySpark + EMR (Python)",
      "note": "Antes, el procesamiento de ventas concentraba todo en consultas SQL en BigQuery, que se volvían pesadas conforme crecía el volumen. Aquí la misma transformación corre en PySpark sobre Amazon EMR: en vez de un escaneo secuencial, el trabajo se divide y procesa en paralelo por varios nodos. El código lee las ventas de S3, filtra las completadas, agrega por producto, categoría y día, y graba el resultado particionado por fecha, lo que hace las lecturas siguientes más rápidas al acceder solo a la porción necesaria."
     },
     {
      "tab": "Anomaly Detection",
      "label": "Modelo de detección de anomalía de ventas (Python · scikit-learn)",
      "note": "Este modelo aprende el comportamiento normal de venta de cada producto para reconocer cuándo algo se sale del patrón. Para cada ítem, calcula indicadores como media y variación de ventas diarias, tendencia de los últimos 7 días y peso del fin de semana. El algoritmo IsolationForest se entrena para aislar los casos atípicos: al correr sobre el día actual, marca los productos cuyo comportamiento se aparta de lo esperado y dispara una alerta. Es lo que permite reaccionar ante una ruptura de stock o un pico inusual antes de que se convierta en pérdida."
     },
     {
      "tab": "Airflow DAG",
      "label": "DAG de Airflow programando detección de anomalías cada 2h (Python)",
      "note": "Esta DAG pone la detección de anomalías en piloto automático: cada 2 horas Airflow extrae las ventas recientes, entrena el modelo con el histórico de la semana y verifica el día actual. Si encuentra productos fuera de patrón, arma un mensaje con el SKU, la venta observada y la esperada, y avisa al equipo de inventario en Slack al instante. En vez de depender de que alguien abra un informe, el problema llega a la operación por sí solo, con contexto suficiente para actuar."
     }
    ],
    "faq": [
     {
      "q": "¿Por qué Isolation Forest para anomalías de venta?",
      "a": "Isolation Forest puede identificar observaciones atípicas sin anomalías etiquetadas. La estacionalidad y las campañas requieren preparación de variables y validación; el algoritmo no las entiende automáticamente. Entrenar por producto o por grupos es una decisión de modelado."
     },
     {
      "q": "¿Por qué migrar de BigQuery a Spark en EMR?",
      "a": "La migración reorganizó las transformaciones en PySpark sobre EMR y S3, considerando particiones, joins y shuffle. Respondía a esas cargas; no demuestra que Spark siempre sea más rápido o barato que BigQuery. La comparación requiere datos, consultas y costes de transferencia equivalentes."
     },
     {
      "q": "¿Cuál fue el impacto del modelo de anomalías en las operaciones de inventario?",
      "a": "Antes del modelo, la reposición dependía de informes D+1, al día siguiente del problema. Anomalías como una caída brusca de ventas de un SKU quedaban horas sin acción. Con detección automática y alerta al equipo de operaciones, el tiempo de respuesta bajó de horas a minutos y las decisiones de reposición pasaron a basarse en datos, reduciendo reposiciones incorrectas."
     }
    ]
   },
   "ja": {
    "r": "Python開発者",
    "per": "2018年",
    "d": "JenniferはApache SparkとAWSをDafitiのデータエンジニアリングに導入し、それまでBigQueryに集中していたワークロードをPySpark、Amazon EMR、Amazon S3による分散パイプラインとして再設計しました。このモダナイゼーションにより処理能力が拡大し、異常な売上検知への機械学習応用の余地が生まれました。",
    "heroChips": [
     "Amazon Web Services · 認定資格",
     "Python · PySpark",
     "分散処理 · 機械学習",
     "新標準としてのSpark"
    ],
    "app": {
     "sub": "ETL＆異常検知",
     "h": "異常な売上を<em>数分で検知。</em>",
     "d": "Dafitiのプラットフォームのシミュレーション: EMR上の分散ETL、売上テーブルのカタログ、異常検知モデルからのアラート。企業データを使わない教育目的のシミュレーションです。"
    },
    "metrics": [
     "新標準として導入されたSpark",
     "BigQuery → PySpark/EMR/S3",
     "マルチクラウド AWS + GCP",
     "売上異常のML検知"
    ],
    "demos": [
     {
      "kind": "app",
      "t": "ML Anomaly Detector · Dafiti",
      "d": "売上異常検知: SKUごとのIsolationForest、3つのシナリオ（通常日・ブラックフライデー・キャンペーン）、Slackアラート、分散ETLとBigQueryの比較。デモ用のシミュレーションデータと指標。",
      "u": "dafiti-anomaly-detector.html",
      "btn": "検出器を開く →"
     }
    ],
    "stints": [
     {
      "r": "Python開発者 · ビッグデータのパフォーマンスと自動化",
      "per": "2018年",
      "prob": "分析処理はBigQuery上で稼働しており、大規模なEコマースの量と速度に追いついていませんでした。さらに、異常な売上（ある商品の不審な急増や予期しない減少）が見過ごされ、誤った在庫補充につながることがありました。",
      "dec": "Apache Sparkがエンジニアリング環境に新しい処理標準として導入され、分析処理はPySparkとAmazon EMRによる分散アーキテクチャへ移行し、Amazon S3を入力・中間結果・出力の保存先として使用しました。このモダナイゼーションはSQLをPythonに翻訳するだけにとどまりませんでした: データの読み取り、パーティショニング、クロス参照、集計、永続化の方法が変わり、変換はDataFrameとして整理された小さなステップに分解され、パーティショニング、結合、シャッフル、保存形式に注意が払われました。加えて、scikit-learnを用いた機械学習アプローチが、系列と偏差を分析して異常な売上を検知するようになりました。この環境はGoogle CloudとAWSを組み合わせた、分析処理に適用されたマルチクラウド体験でした。",
      "res": "より重いワークロードに対応する処理能力の向上、よりモジュール化されテスト可能な変換、分散処理のより良い活用により、新しい分析・機械学習ユースケースに向けたよりスケーラブルな基盤が生まれ、異常な売上検知が補充判断を導くようになりました。",
      "metrics": [
       "新標準として導入されたSpark",
       "BigQuery → PySpark/EMR/S3",
       "マルチクラウド AWS + GCP",
       "売上異常のML検知"
      ],
      "stack": [
       "Python",
       "PySpark",
       "Apache Spark",
       "Amazon EMR",
       "Amazon S3",
       "Google BigQuery",
       "scikit-learn",
       "Airflow"
      ]
     }
    ],
    "arch": [
     [
      "ソース",
      "Eコマース売上"
     ],
     [
      "移行",
      "BigQuery → Spark · EMR · S3"
     ],
     [
      "処理",
      "分散PySpark"
     ],
     [
      "ML",
      "異常検知 · IsolationForest"
     ],
     [
      "消費",
      "補充向けシグナル"
     ]
    ],
    "stat3": [
     {
      "v": "Apache Spark",
      "l": "新しい分散処理標準としてエンジニアリングに導入"
     },
     {
      "v": "AWS + GCP",
      "l": "マルチクラウドアーキテクチャ: PySpark、Amazon EMR/S3とGoogle BigQueryの併用"
     },
     {
      "v": "ML",
      "l": "補充判断を導く異常な売上検知モデル"
     }
    ],
    "layers": [
     {
      "icon": "🛍️",
      "title": "ソース · Eコマース売上",
      "desc": "大規模Eコマースの売上、在庫、価格イベント。季節性が非常に強く、ブラックフライデーのようなピークは平均日をはるかに上回ります。"
     },
     {
      "icon": "⚡",
      "title": "ETL Spark · EMR · S3",
      "desc": "BigQueryからAmazon EMR上のPySparkへ処理を移行し、Amazon S3をストレージとして使用。Sparkのネイティブな並列処理がレガシーの逐次処理に置き換わり、パーティショニング、結合、シャッフルに注意が払われました。"
     },
     {
      "icon": "🤖",
      "title": "ML · 異常検知",
      "desc": "機械学習モデル（Isolation Forest）が各商品を自身の履歴と比較し、パターンから外れたものを見つけます。計算はサイクルごとにSKU（各商品・バリエーションの一意なコード）単位で行われ、調査すべきシグナルを生成します。"
     },
     {
      "icon": "🔔",
      "title": "自動アラート",
      "desc": "商品、バリエーション、履歴の文脈を含むSlackアラートが運用チームに届きます。補充チームは直感ではなくデータに基づいて行動するようになります。"
     }
    ],
    "codeNotes": [
     {
      "tab": "ETL Migration",
      "label": "BigQueryからPySpark + EMRへのETL移行（Python）",
      "note": "以前、売上処理はBigQuery上のSQLクエリにすべてを集中させており、データ量の増加とともに重くなっていました。ここでは同じ変換がAmazon EMR上のPySparkで実行されます: 逐次スキャンの代わりに、作業は複数ノードに分割され並列処理されます。コードはS3から売上を読み込み、完了したものをフィルタし、商品・カテゴリ・日付で集計し、結果を日付でパーティション化して書き込みます。これにより、以降の読み取りは必要な部分のみにアクセスするため高速化されます。"
     },
     {
      "tab": "Anomaly Detection",
      "label": "売上異常検知モデル（Python · scikit-learn）",
      "note": "このモデルは各商品の通常の売上パターンを学習し、パターンから外れたものを認識します。各商品について、日次売上の平均と分散、直近7日間のトレンド、週末の重みなどの指標を計算します。IsolationForestアルゴリズムは異常なケースを分離するよう訓練され、当日のデータに適用すると、想定から外れた挙動を示す商品を検出しアラートを発火させます。これにより、在庫切れや異常な急増が損失に変わる前に対応できます。"
     },
     {
      "tab": "Airflow DAG",
      "label": "2時間ごとに異常検知をスケジュールするAirflow DAG（Python）",
      "note": "このDAGは異常検知を自動運転にします: Airflowは2時間ごとに直近の売上を取得し、1週間分の履歴でモデルを訓練し、当日のデータを確認します。パターン外の商品が見つかると、SKU、観測値、期待値を含むメッセージを作成し、在庫チームにSlackで即座に通知します。誰かがレポートを開くのを待つ代わりに、問題は十分な文脈とともに自動的に運用チームに届きます。"
     }
    ],
    "faq": [
     {
      "q": "なぜ売上異常検知にIsolation Forestを使ったのですか?",
      "a": "Isolation Forestは異常ラベルなしで外れた観測を検出できます。季節性やキャンペーンは特徴量の準備と検証で考慮する必要があり、アルゴリズムが自動的に理解するわけではありません。商品別・商品群別の学習は設計上の選択です。"
     },
     {
      "q": "なぜBigQueryからEMR上のSparkへ移行したのですか?",
      "a": "EMRとS3上のPySparkに変換を再構成し、パーティション、結合、シャッフルを調整しました。これは対象ワークロードに対する選択で、Sparkが常にBigQueryより速い・安いことを意味しません。比較には同等のデータ、クエリ、転送費用が必要です。"
     },
     {
      "q": "異常検知モデルは在庫運用にどのような影響を与えましたか?",
      "a": "モデル導入前は、補充は問題発生の翌日に届くD+1レポートに依存していました。あるSKUの急激な売上減少といった異常は、何時間も対応されないままでした。自動検知と運用チームへのアラートにより、対応時間は数時間から数分へ短縮され、補充判断はデータに基づくようになり、誤った補充が減少しました。"
     }
    ]
   }
  },
  "app": {
   "sub": "ETL & DETECÇÃO DE ANOMALIAS",
   "h": "Vendas fora do padrão detectadas <em>em minutos.</em>",
   "d": "Simulação da plataforma da Dafiti: ETL distribuído em EMR, catálogo das tabelas de vendas e alertas do modelo de detecção de anomalias. Simulação didática, sem dados corporativos."
  },
  "metrics": [
   "BigQuery → PySpark · EMR · S3",
   "Spark adotado pela engenharia de dados",
   "AWS + GCP",
   "ML para anomalias de venda"
  ],
  "stack": [
   "Python",
   "PySpark",
   "Apache Spark",
   "Amazon EMR",
   "Amazon S3",
   "Google BigQuery",
   "scikit-learn",
   "Airflow"
  ],
  "demos": [
   {
    "kind": "app",
    "t": "ML Anomaly Detector · Dafiti",
    "d": "Detecção de anomalias de venda: IsolationForest por SKU, 3 cenários (dia normal / Black Friday / campanha), alerta Slack e comparativo de ETL distribuído vs. BigQuery. Dados e métricas simulados para demonstração.",
    "u": "dafiti-anomaly-detector.html",
    "btn": "Abrir detector →"
   }
  ],
  "stints": [
   {
    "r": "Desenvolvedora Python · Performance & Automação Big Data",
    "per": "2018",
    "prob": "Os processamentos analíticos rodavam em BigQuery e não acompanhavam o volume e a velocidade de um grande e-commerce. Além disso, vendas fora do padrão, picos suspeitos de um produto ou quedas inesperadas, passavam despercebidas e podiam gerar reposições incorretas de estoque.",
    "dec": "O Apache Spark foi introduzido no ambiente de engenharia como novo padrão de processamento, e os processamentos analíticos foram migrados para uma arquitetura distribuída com PySpark e Amazon EMR, usando o Amazon S3 como armazenamento de entradas, resultados intermediários e saídas. A modernização não se limitou a traduzir SQL para Python: os dados passaram a ser lidos, particionados, cruzados, agregados e persistidos de outra forma, com transformações decompostas em etapas menores e organizadas em DataFrames, atentando a particionamento, joins, shuffle e formatos de armazenamento. Em complemento, uma abordagem de machine learning com scikit-learn passou a analisar séries e desvios para sinalizar vendas fora do padrão. O ambiente combinava Google Cloud e AWS, em uma experiência multicloud aplicada a processamento analítico.",
    "res": "Maior capacidade de processamento para cargas mais pesadas, transformações mais modulares e testáveis e melhor aproveitamento do processamento distribuído, criando uma base mais escalável para novos casos analíticos e de machine learning, com detecção de vendas atípicas para orientar as decisões de reposição.",
    "metrics": [
     "Spark introduzido como padrão",
     "BigQuery → PySpark/EMR/S3",
     "multicloud AWS + GCP",
     "ML de anomalias de venda"
    ],
    "stack": [
     "Python",
     "PySpark",
     "Apache Spark",
     "Amazon EMR",
     "Amazon S3",
     "Google BigQuery",
     "scikit-learn",
     "Airflow"
    ]
   }
  ],
  "arch": [
   [
    "Fontes",
    "vendas e-commerce"
   ],
   [
    "Migração",
    "BigQuery → Spark · EMR · S3"
   ],
   [
    "Processamento",
    "PySpark distribuído"
   ],
   [
    "ML",
    "detecção de anomalia · IsolationForest"
   ],
   [
    "Consumo",
    "sinais para reposição"
   ]
  ],
  "stat3": [
   {
    "v": "Apache Spark",
    "l": "introduzido na engenharia como novo padrão de processamento distribuído"
   },
   {
    "v": "AWS + GCP",
    "l": "arquitetura multicloud: PySpark e Amazon EMR/S3 com Google BigQuery"
   },
   {
    "v": "ML",
    "l": "modelo de detecção de vendas fora do padrão para orientar a reposição"
   }
  ],
  "layers": [
   {
    "icon": "🛍️",
    "title": "Fontes · vendas e-commerce",
    "desc": "Eventos de venda, estoque e preço de um grande e-commerce. Volume altamente sazonal, com picos como a Black Friday muito acima do dia médio."
   },
   {
    "icon": "⚡",
    "title": "ETL Spark · EMR · S3",
    "desc": "Migração dos processamentos de BigQuery para PySpark no Amazon EMR, com Amazon S3 como armazenamento. O paralelismo nativo do Spark substituiu o processamento sequencial do legado, com atenção a particionamento, joins e shuffle."
   },
   {
    "icon": "🤖",
    "title": "ML · Detecção de anomalia",
    "desc": "Um modelo de machine learning (o Isolation Forest) compara cada produto com o próprio histórico para achar o que foge do padrão. O cálculo é por SKU (o código único de cada produto/variação) a cada ciclo, produzindo sinais para investigação."
   },
   {
    "icon": "🔔",
    "title": "Alertas automáticos",
    "desc": "Alerta no Slack para o time de operations com produto, variação e contexto histórico. O time de reposição passa a agir com dado, não com intuição."
   }
  ],
  "code": [
   {
    "tab": "ETL Migration",
    "label": "Migração ETL de BigQuery para PySpark + EMR (Python)",
    "code": "from pyspark.sql import SparkSession\nfrom pyspark.sql import functions as F\n\nspark = SparkSession.builder.appName(\"dafiti-etl-migration\").getOrCreate()\n\n# BigQuery: varredura SQL sequencial e pesada\n# PySpark no EMR: leitura particionada e processamento distribuído\n\nsales = spark.read     .option(\"header\", True)     .parquet(\"s3://dafiti-lake/raw/sales/\")\n\ndaily_agg = sales     .filter(F.col(\"status\") == \"completed\")     .groupBy(\"product_id\", \"category\", F.to_date(\"event_ts\").alias(\"date\"))     .agg(\n        F.sum(\"quantity\").alias(\"units_sold\"),\n        F.sum(\"revenue\").alias(\"revenue\"),\n        F.avg(\"price\").alias(\"avg_price\"),\n        F.stddev(\"quantity\").alias(\"std_units\")\n    ).repartition(50, \"category\")\n\ndaily_agg.write.partitionBy(\"date\").parquet(\"s3://dafiti-lake/refined/sales_daily/\")\nprint(\"ETL distribuido concluido, saida particionada em S3\")",
    "note": "Antes, o processamento de vendas concentrava tudo em consultas SQL no BigQuery, que ficavam pesadas conforme o volume crescia. Aqui a mesma transformação roda em PySpark sobre o Amazon EMR: em vez de uma varredura sequencial, o trabalho é dividido e processado em paralelo por vários nós. O código lê as vendas do S3, filtra as concluídas, agrega por produto, categoria e dia, e grava o resultado particionado por data, o que torna as leituras seguintes mais rápidas por acessar só a fatia necessária."
   },
   {
    "tab": "Anomaly Detection",
    "label": "Modelo de detecção de anomalia de vendas (Python · scikit-learn)",
    "code": "from sklearn.ensemble import IsolationForest\nimport pandas as pd, numpy as np\n\ndef train_anomaly_detector(df_history):\n    features = df_history.groupby(\"product_id\").apply(lambda g: pd.Series({\n        \"mean_daily_units\": g[\"units_sold\"].mean(),\n        \"std_daily_units\":  g[\"units_sold\"].std(),\n        \"trend_7d\":         np.polyfit(range(7), g[\"units_sold\"].tail(7), 1)[0],\n        \"weekend_ratio\":    g.loc[g[\"dow\"].isin([5,6]),\"units_sold\"].mean() /\n                            (g[\"units_sold\"].mean() + 1e-9)\n    })).fillna(0)\n    model = IsolationForest(contamination=0.05, random_state=42)\n    model.fit(features)\n    return model, features.index.tolist()\n\ndef detect_today(model, today_df):\n    anomalies = today_df[model.predict(today_df) == -1]\n    return anomalies  # alerta automatico: Slack + email",
    "note": "Este modelo aprende o comportamento normal de venda de cada produto para reconhecer quando algo foge do padrão. Para cada item, calcula indicadores como média e variação de vendas diárias, tendência dos últimos 7 dias e peso do fim de semana. O algoritmo IsolationForest é treinado para isolar os casos atípicos: ao rodar sobre o dia atual, marca os produtos cujo comportamento destoa do esperado e dispara um alerta. É o que permite reagir a uma ruptura de estoque ou a um pico incomum antes que vire prejuízo."
   },
   {
    "tab": "Airflow DAG",
    "label": "DAG Airflow agendando detecção de anomalias a cada 2h (Python)",
    "code": "from airflow.decorators import dag, task\nfrom datetime import datetime, timedelta\n\n@dag(schedule=\"0 */2 * * *\",   # a cada 2 horas\n     start_date=datetime(2018, 3, 1),\n     default_args={\"retries\": 1, \"retry_delay\": timedelta(minutes=5)})\ndef dafiti_anomaly_pipeline():\n\n    @task\n    def extract_recent_sales():\n        spark = get_spark_session()\n        return spark.read.parquet(\"s3://dafiti-lake/refined/sales_daily/\")                    .filter(\"date >= date_sub(current_date(), 7)\")                    .toPandas()\n\n    @task\n    def detect_and_alert(df):\n        model, products = train_anomaly_detector(df)\n        today = df[df[\"date\"] == df[\"date\"].max()]\n        anomalies = detect_today(model, today)\n\n        if not anomalies.empty:\n            lines = [\n                f\"• SKU {r.product_id}: {r.units_sold} un (esperado: {r.mean_daily_units:.0f})\"\n                for _, r in anomalies.iterrows()\n            ]\n            notify_slack(\n                \"#operacoes-estoque\",\n                f\":rotating_light: *{len(anomalies)} anomalias detectadas*\n\" + \"\n\".join(lines)\n            )\n        return {\"anomalies_count\": len(anomalies)}\n\n    detect_and_alert(extract_recent_sales())\n\ndafiti_anomaly_pipeline()",
    "note": "Esta DAG coloca a detecção de anomalias em piloto automático: a cada 2 horas o Airflow extrai as vendas recentes, treina o modelo com o histórico da semana e verifica o dia atual. Se encontra produtos fora do padrão, monta uma mensagem com o SKU, a venda observada e a esperada, e avisa o time de estoque no Slack na hora. Em vez de depender de alguém abrir um relatório, o problema chega até a operação sozinho, com contexto suficiente para agir."
   }
  ],
  "faq": [
   {
    "q": "Por que Isolation Forest para anomalias de venda?",
    "a": "Isolation Forest pode identificar observações atípicas sem rótulos prévios de anomalia. Sazonalidade e campanhas precisam ser consideradas na preparação dos dados e na validação; o algoritmo não as entende automaticamente. Treinar por produto ou em grupos de produtos é uma decisão de modelagem, não uma propriedade garantida do algoritmo."
   },
   {
    "q": "Por que migrar de BigQuery para Spark no EMR?",
    "a": "A mudança reorganizou as transformações em PySpark sobre EMR e S3, com atenção a particionamento, joins e shuffle. A escolha atendia ao contexto das cargas descritas no projeto; não significa que Spark seja sempre mais rápido ou barato que BigQuery. Uma comparação exige o mesmo conjunto de dados, consultas e custos de transferência."
   },
   {
    "q": "Qual o impacto do modelo de anomalias nas operações de estoque?",
    "a": "Antes do modelo, a reposição dependia de relatórios D+1, no dia seguinte ao problema. Anomalias como queda brusca de vendas de uma SKU ficavam horas sem ação. Com detecção automática e alerta para o time de operações, o tempo de resposta cai de horas para minutos e as decisões de reposição passam a se basear em dado, reduzindo reposições incorretas."
   }
  ],
  "heroImg": "assets/gallery-signatures/jen-leadership-ai.webp",
  "heroGrad": "linear-gradient(125deg,#281a28,#7d2248)",
  "displayName": "Global Fashion Group",
  "brandNote": "GFG · Dafiti"
 },
 {
  "f": "big",
  "flag": "us",
  "n": "Oracle",
  "dom": "oracle.com",
  "per": "2022",
  "r": "Arquiteta de Soluções · Customer Success",
  "d": "Na Oracle, fui responsável pelo acompanhamento técnico de oito bancos nacionais no pós-venda de produtos Oracle. Atuei com arquitetura de soluções, adoção e modernização de bancos de dados, incluindo OCI e Autonomous Database.",
  "heroChips": [
   "Oracle Cloud · Certificada",
   "PL/SQL",
   "Arquitetura de Soluções",
   "Customer Success · Setor Financeiro"
  ],
  "t": {
   "en": {
    "r": "Solutions Architect · Customer Success",
    "d": "At Oracle, I was responsible for technical support to eight Brazilian banks, primarily in post-sales for Oracle products. My work covered solution architecture, database adoption and modernization, including OCI and Autonomous Database.",
    "heroChips": [
     "Oracle Cloud · Certified",
     "PL/SQL",
     "Solution Architecture",
     "Customer Success · Financial Sector"
    ],
    "app": {
     "sub": "ENTERPRISE ACCOUNT INTELLIGENCE",
     "h": "Every client technological health <em>in one dashboard.</em>",
     "d": "Simulation of managing a bank portfolio at Oracle: consolidated adoption health score per account, a catalog of deployed solutions, database estate, technical risks and modernization opportunities. Didactic simulation, no customer data."
    },
    "metrics": [
     {
      "v": "8",
      "l": "banks in the portfolio · including Banco BV as a strategic account"
     },
     {
      "v": "OCI",
      "l": "Oracle Cloud Infrastructure · solution architecture for the financial sector"
     },
     {
      "v": "FEBRABAN",
      "l": "Oracle representation at strategic banking-sector events"
     },
     {
      "v": "end-to-end",
      "l": "from deployment to tracking adoption, risk and modernization"
     }
    ],
    "demos": [
     {
      "kind": "app",
      "t": "Solutions Map by Account",
      "d": "Interactive matrix of the 8 banks in the portfolio: which Oracle solutions each had, whether they were actually being used, which were purchased but idle, and which modernization opportunities were identified. Click any bank to see risks and next steps.",
      "u": "oracle-solutions-map.html",
      "btn": "Open solutions map →"
     },
     {
      "kind": "app",
      "t": "Customer Success Health Score",
      "d": "Account Health Score calculator: drag the adoption, stability, consumption, support and technological-evolution sliders and watch the 0-100 score calculated in real time, with risk classification and a recommended action, with didactic weights and thresholds created for this portfolio, not an official Oracle method or a reproduction of the historical formula.",
      "u": "oracle-cs-health.html",
      "btn": "Calculate health score →"
     }
    ],
    "stints": [
     {
      "r": "Solutions Architect · Customer Success",
      "per": "",
      "prob": "A portfolio of 8 banks, including strategic accounts like Banco BV, with heterogeneous environments: legacy Oracle Database installations coexisting with early Oracle Cloud adoption. In many cases, Oracle solutions had been purchased but were not being used correctly, generating low return, non-renewal risk and unidentified expansion opportunities. There was no consolidated visibility into each client technological journey: what was deployed, the real level of adoption, open technical risks and the next modernization steps.",
      "decSections": [
       {
        "eye": "🏗️ Solution Architecture for the Financial Sector",
        "body": "The role supported banks in defining and evolving architectures based on Oracle Database and Oracle Cloud Infrastructure, translating availability, security, performance and continuity requirements into technical decisions applicable to critical environments. Coverage included both new and legacy environments: Oracle Exadata for critical workloads, Oracle RAC for high availability, Oracle Data Guard for continuity and recovery, and Oracle GoldenGate for replication and low-downtime data movement."
       },
       {
        "eye": "📊 Consolidated Portfolio View · Health Score",
        "body": "Every account in the portfolio was tracked across four dimensions: account health (a combination of adoption, stability, consumption, support and technological evolution), deployed solutions (Oracle products in use, versions, environments and adoption stage), technical and adoption risks (legacy technologies, low utilization, recurring incidents or dependency on components nearing end-of-life) and modernization opportunities (Autonomous Database, managed services, high availability, security, automation and expansion to OCI). The consolidated view enabled proactive action, without waiting for the client to report a problem."
       },
       {
        "eye": "⚡ Database Modernization · Autonomous Database",
        "body": "Opportunities were identified to modernize traditional environments through Oracle Autonomous Database and other OCI managed services. Each recommendation considered workload compatibility, environment criticality, migration effort, operational impact, security and continuity. Oracle Enterprise Manager was used for centralized monitoring and administration of environments, giving visibility into database health before any modernization decision."
       },
       {
        "eye": "🎯 Technical Adoption and FEBRABAN",
        "body": "The work did not end at deployment. Clients were tracked after go-live to ensure purchased solutions were being used correctly and generating value. When adoption was low, the process involved identifying the root cause, technically guiding the client team and building an evolution plan. Oracle was also represented at strategic financial-sector events, including FEBRABAN, bringing banks needs closer to the Oracle portfolio capabilities and generating concrete expansion opportunities."
       }
      ],
      "res": "The role connected three perspectives usually kept separate: architecture, customer success and opportunity development. Every bank in the portfolio began being tracked with full visibility: what was deployed, whether it was being used correctly, what technical risks were open and what the next modernization steps were. Clients with low adoption had root causes identified and evolution plans built. Migration opportunities to Oracle Autonomous Database and OCI were mapped with objective technical criteria. Presence at FEBRABAN generated expansion opportunities by connecting real banking-sector challenges to the Oracle portfolio.",
      "metrics": [
       "8 banks in the portfolio",
       "Banco BV · strategic account",
       "FEBRABAN · Oracle representation",
       "OCI + Autonomous DB"
      ]
     }
    ],
    "arch": [
     [
      "Bank",
      "identified technical need"
     ],
     [
      "Diagnosis",
      "health score · risk · adoption"
     ],
     [
      "Architecture",
      "Oracle DB · OCI · Autonomous"
     ],
     [
      "Modernization",
      "Exadata · RAC · GoldenGate · Data Guard"
     ],
     [
      "Expansion",
      "FEBRABAN · opportunities · renewal"
     ]
    ],
    "stat3": [
     {
      "v": "8",
      "l": "banks tracked in the portfolio · including Banco BV as a strategic financial-sector account"
     },
     {
      "v": "FEBRABAN",
      "l": "Oracle representation at strategic Brazilian banking-sector events"
     },
     {
      "v": "end-to-end",
      "l": "from deployment through the full cycle: adoption, risk, modernization and expansion"
     }
    ],
    "layers": [
     {
      "icon": "🏦",
      "title": "Portfolio of 8 Banks",
      "desc": "Technical tracking of enterprise financial-sector accounts, including Banco BV as a strategic account. Heterogeneous environments: legacy Oracle installations coexisting with Oracle Cloud Infrastructure adoption."
     },
     {
      "icon": "📊",
      "title": "Health Score · Consolidated View",
      "desc": "Every account monitored across four dimensions: account health, deployed solutions, technical risks and modernization opportunities. A proactive view, without waiting for the client to report the problem."
     },
     {
      "icon": "⚡",
      "title": "Modernization · Autonomous Database",
      "desc": "Identifying and recommending migration of legacy databases to Oracle Autonomous Database and OCI managed services. Every opportunity assessed for compatibility, criticality, effort and operational impact."
     },
     {
      "icon": "🏗️",
      "title": "Architecture · Oracle DB and OCI",
      "desc": "Oracle Exadata for critical workloads, RAC for high availability, Data Guard for continuity and recovery, GoldenGate for low-downtime replication. Enterprise Manager for centralized monitoring."
     },
     {
      "icon": "🎯",
      "title": "FEBRABAN · Financial Sector",
      "desc": "Oracle representation at strategic banking-sector events. Bringing real bank needs closer to the Oracle portfolio capabilities, generating concrete expansion opportunities."
     }
    ],
    "codeNotes": [
     {
      "tab": "PL/SQL Analytics",
      "label": "Advanced analytical query, Oracle PL/SQL, architecture pattern",
      "note": "This procedure recalculates a KPI summary (revenue, unique customers, average ticket, conversion rate) every day from raw sales events, and logs how long it took to run. Client dashboards query this ready-made table instead of recalculating everything on the fly, making them much faster."
     },
     {
      "tab": "Health Score CS",
      "label": "Customer Health Score model, proactive churn detection (Python)",
      "note": "This function calculates each account health grade (0 to 100): it penalizes a bank that underuses its purchased license, that opens repeat tickets for the same problem, and that has not completed its planned training, and it rewards a recent expansion. Below 40 triggers an urgent action (EBR), between 40 and 70 becomes a proactive check-in; the idea is to act before the client complains."
     },
     {
      "tab": "Oracle Cloud Blueprint",
      "label": "Oracle Cloud Infrastructure architecture (Terraform, enterprise pattern)",
      "note": "This Terraform stands up a client network (VCN) and Autonomous Database in a standardized, repeatable way: it scales on its own based on usage and only accepts connections from within the client private network, with mandatory mTLS and no public exposure. An environment that would take days to build manually is ready, and always identical, in minutes."
     }
    ],
    "faq": [
     {
      "q": "How was the Health Score composed and where did those numbers come from?",
      "a": "In this reconstruction, weights and thresholds are didactic examples, not an official Oracle method or a confirmed historical formula. The illustrative Health Score is a 0-to-100 grade built for each bank in the portfolio. Think of it like this: imagine you bought a gym membership. The Health Score measures whether you are actually going, how many times you canceled, whether you are using every service you paid for or just the treadmill. It had 5 dimensions: Adoption (35% weight): was the bank really using what it bought? A bank with Oracle Autonomous Database purchased but everyone still using the old database has low adoption. Stability (25%): did the same problems keep coming up? If the bank opened a ticket every week for the same error, stability dropped. Consumption (20%): was the bank using it at the right level? Far below what was contracted signals they will want to scale down at renewal. Support (10%): how many open tickets, how long without a response. Technological evolution (10%): was the bank moving forward, testing new features, or stuck in the same spot for months? Weighting all dimensions produced the number. Below 65, contact happened proactively, before the bank itself reported the problem."
     },
     {
      "q": "How did the Solutions Map work in practice?",
      "a": "It was the consolidated view of the portfolio. Each bank had a row, each Oracle product a column. Green: the product was deployed and the bank team was actually using it. Yellow: deployed but with low adoption, meaning the bank was paying but not getting value. Orange: purchased but not yet deployed, a risk of dissatisfaction and non-renewal. Dotted blue: an identified opportunity, the bank did not yet have that solution but it made sense for their environment. With this view, it was clear exactly where to focus each week."
     },
     {
      "q": "What sets solution architecture apart from regular customer success?",
      "a": "Regular CS tracks the contract: monthly call, usage checklist, health report. Solution architecture goes into the client environment, understands what is installed, how it is configured, what should work differently. Combining both fronts made it possible to go beyond the report: it was possible to identify that a bank Oracle RAC had 2 nodes when volume required 4, and bring that as a recommendation before it turned into an incident. That is what sets renewal by inertia apart from renewal by value."
     },
     {
      "q": "Why was FEBRABAN strategic for this role?",
      "a": "FEBRABAN is the Brazilian Federation of Banks. Industry events and meetings enabled discussions with technology leaders about database performance, modernization and Oracle product operations, supporting technical follow-up for the portfolio of eight banks."
     }
    ]
   },
   "es": {
    "r": "Arquitecta de Soluciones · Customer Success",
    "d": "En Oracle, fui responsable del acompañamiento técnico de ocho bancos brasileños, principalmente en la posventa de productos Oracle. Trabajé con arquitectura de soluciones, adopción y modernización de bases de datos, incluidas OCI y Autonomous Database.",
    "heroChips": [
     "Oracle Cloud · Certificada",
     "PL/SQL",
     "Arquitectura de Soluciones",
     "Customer Success · Sector Financiero"
    ],
    "app": {
     "sub": "ENTERPRISE ACCOUNT INTELLIGENCE",
     "h": "La salud tecnológica de cada cliente <em>en un panel.</em>",
     "d": "Simulación del seguimiento de cartera de bancos en Oracle: health score de adopción consolidado por cuenta, catálogo de soluciones implementadas, parque de bases de datos, riesgos técnicos y oportunidades de modernización. Simulación didáctica, sin datos de clientes."
    },
    "metrics": [
     {
      "v": "8",
      "l": "bancos en la cartera · incluyendo Banco BV como cuenta estratégica"
     },
     {
      "v": "OCI",
      "l": "Oracle Cloud Infrastructure · arquitectura de soluciones para el sector financiero"
     },
     {
      "v": "FEBRABAN",
      "l": "representación de Oracle en eventos estratégicos del sector bancario"
     },
     {
      "v": "end-to-end",
      "l": "de la implementación al seguimiento de adopción, riesgos y modernización"
     }
    ],
    "demos": [
     {
      "kind": "app",
      "t": "Mapa de Soluciones por Cuenta",
      "d": "Matriz interactiva de los 8 bancos de la cartera: qué soluciones Oracle tenía cada uno, si se estaban usando de verdad, cuáles estaban contratadas pero paradas, y qué oportunidades de modernización se identificaron. Haz clic en cualquier banco para ver riesgos y próximos pasos.",
      "u": "oracle-solutions-map.html",
      "btn": "Abrir mapa de soluciones →"
     },
     {
      "kind": "app",
      "t": "Customer Success Health Score",
      "d": "Calculadora del Health Score de cuenta: arrastra los sliders de adopción, estabilidad, consumo, soporte y evolución tecnológica y observa el score 0-100 calcularse en tiempo real, con clasificación de riesgo y recomendación de acción, con pesos y umbrales didácticos del portafolio, no una metodología oficial de Oracle ni la fórmula histórica.",
      "u": "oracle-cs-health.html",
      "btn": "Calcular health score →"
     }
    ],
    "stints": [
     {
      "r": "Arquitecta de Soluciones · Customer Success",
      "per": "",
      "prob": "Una cartera de 8 bancos, incluyendo cuentas estratégicas como Banco BV, con ambientes heterogéneos: bases Oracle Database legadas conviviendo con adopción incipiente de Oracle Cloud. En muchos casos, soluciones Oracle habían sido contratadas pero no se estaban utilizando correctamente, generando bajo retorno, riesgo de no renovación y oportunidades de expansión no identificadas. No había visibilidad consolidada del recorrido tecnológico de cada cliente: qué estaba implementado, el nivel real de adopción, los riesgos técnicos abiertos y las próximas etapas de modernización.",
      "decSections": [
       {
        "eye": "🏗️ Arquitectura de Soluciones para el Sector Financiero",
        "body": "La actuación apoyaba a los bancos en la definición y evolución de arquitecturas basadas en Oracle Database y Oracle Cloud Infrastructure, traduciendo requisitos de disponibilidad, seguridad, desempeño y continuidad en decisiones técnicas aplicables a ambientes críticos. La cobertura incluía tanto ambientes nuevos como legados: Oracle Exadata para workloads críticos, Oracle RAC para alta disponibilidad, Oracle Data Guard para continuidad y recuperación, y Oracle GoldenGate para replicación y movimiento de datos con baja indisponibilidad."
       },
       {
        "eye": "📊 Visión Consolidada de la Cartera · Health Score",
        "body": "Cada cuenta de la cartera se seguía en cuatro dimensiones: salud de la cuenta (combinación de adopción, estabilidad, consumo, soporte y evolución tecnológica), soluciones implementadas (productos Oracle utilizados, versiones, ambientes y etapa de adopción), riesgos técnicos y de adopción (tecnologías legadas, baja utilización, incidentes recurrentes o dependencia de componentes próximos a la descontinuación) y oportunidades de modernización (Autonomous Database, servicios gestionados, alta disponibilidad, seguridad, automatización y expansión hacia OCI). La visión consolidada permitía actuar de forma proactiva, sin esperar a que el cliente reportara un problema."
       },
       {
        "eye": "⚡ Modernización de Bases de Datos · Autonomous Database",
        "body": "Se identificaron oportunidades para modernizar ambientes tradicionales mediante Oracle Autonomous Database y otros servicios gestionados de OCI. Cada recomendación consideraba compatibilidad de workload, criticidad del ambiente, esfuerzo de migración, impacto operativo, seguridad y continuidad. Oracle Enterprise Manager se utilizaba para monitoreo y administración centralizada de los ambientes, dando visibilidad de la salud de las bases antes de cualquier decisión de modernización."
       },
       {
        "eye": "🎯 Adopción técnica y FEBRABAN",
        "body": "El trabajo no terminaba con la implementación. Los clientes eran acompañados tras el go-live para garantizar que las soluciones contratadas estuvieran siendo utilizadas correctamente y generando valor. Cuando había baja adopción, el proceso involucraba identificar la causa raíz, orientar técnicamente al equipo del cliente y construir un plan de evolución. Oracle también fue representada en eventos estratégicos del sector financiero, incluyendo FEBRABAN, acercando las necesidades de los bancos a las capacidades tecnológicas del portafolio Oracle y generando oportunidades concretas de expansión."
       }
      ],
      "res": "La actuación conectaba tres perspectivas normalmente separadas: arquitectura, éxito del cliente y desarrollo de oportunidades. Cada banco de la cartera pasó a ser acompañado con visibilidad completa: qué estaba implementado, si se estaba utilizando correctamente, cuáles eran los riesgos técnicos abiertos y cuáles los próximos pasos de modernización. Clientes con baja adopción tuvieron causas identificadas y planes de evolución construidos. Oportunidades de migración hacia Oracle Autonomous Database y OCI fueron mapeadas con criterios técnicos objetivos. La presencia en FEBRABAN generó oportunidades de expansión conectando desafíos reales del sector bancario con el portafolio Oracle.",
      "metrics": [
       "8 bancos en la cartera",
       "Banco BV · cuenta estratégica",
       "FEBRABAN · representación Oracle",
       "OCI + Autonomous DB"
      ]
     }
    ],
    "arch": [
     [
      "Banco",
      "necesidad técnica identificada"
     ],
     [
      "Diagnóstico",
      "health score · riesgos · adopción"
     ],
     [
      "Arquitectura",
      "Oracle DB · OCI · Autonomous"
     ],
     [
      "Modernización",
      "Exadata · RAC · GoldenGate · Data Guard"
     ],
     [
      "Expansión",
      "FEBRABAN · oportunidades · renovación"
     ]
    ],
    "stat3": [
     {
      "v": "8",
      "l": "bancos acompañados en la cartera · incluyendo Banco BV como cuenta estratégica del sector financiero"
     },
     {
      "v": "FEBRABAN",
      "l": "representación de Oracle en eventos estratégicos del sector bancario brasileño"
     },
     {
      "v": "end-to-end",
      "l": "de la implementación al ciclo completo: adopción, riesgos, modernización y expansión"
     }
    ],
    "layers": [
     {
      "icon": "🏦",
      "title": "Cartera de 8 Bancos",
      "desc": "Seguimiento técnico de cuentas enterprise del sector financiero, incluyendo Banco BV como cuenta estratégica. Ambientes heterogéneos: bases legadas Oracle conviviendo con adopción de Oracle Cloud Infrastructure."
     },
     {
      "icon": "📊",
      "title": "Health Score · Visión Consolidada",
      "desc": "Cada cuenta monitoreada en cuatro dimensiones: salud de la cuenta, soluciones implementadas, riesgos técnicos y oportunidades de modernización. Visión proactiva, sin esperar a que el cliente reporte el problema."
     },
     {
      "icon": "⚡",
      "title": "Modernización · Autonomous Database",
      "desc": "Identificación y recomendación de migración de bases legadas hacia Oracle Autonomous Database y servicios gestionados de OCI. Cada oportunidad evaluada por compatibilidad, criticidad, esfuerzo e impacto operativo."
     },
     {
      "icon": "🏗️",
      "title": "Arquitectura · Oracle DB y OCI",
      "desc": "Oracle Exadata para workloads críticos, RAC para alta disponibilidad, Data Guard para continuidad y recuperación, GoldenGate para replicación con baja indisponibilidad. Enterprise Manager para monitoreo centralizado."
     },
     {
      "icon": "🎯",
      "title": "FEBRABAN · Sector Financiero",
      "desc": "Representación de Oracle en eventos estratégicos del sector bancario. Acercamiento entre necesidades reales de los bancos y capacidades del portafolio Oracle, generando oportunidades concretas de expansión."
     }
    ],
    "codeNotes": [
     {
      "tab": "PL/SQL Analytics",
      "label": "Consulta analítica avanzada Oracle PL/SQL, patrón de arquitectura",
      "note": "Este procedimiento recalcula cada día un resumen de KPIs (ingresos, clientes únicos, ticket promedio, tasa de conversión) a partir de los eventos de venta brutos, y registra en log cuánto tardó en correr. Los dashboards del cliente consultan esta tabla ya lista en vez de recalcular todo al momento, siendo mucho más rápidos."
     },
     {
      "tab": "Health Score CS",
      "label": "Modelo de Customer Health Score, detección proactiva de churn (Python)",
      "note": "Esta función calcula la nota de salud (0 a 100) de cada cuenta: penaliza a un banco que usa poco la licencia contratada, que abre tickets repetidos por el mismo problema y que no completó las capacitaciones planificadas, y da un bono si la cuenta se expandió recientemente. Por debajo de 40 dispara una acción urgente (EBR), entre 40 y 70 se convierte en check-in proactivo; la idea es actuar antes de que el cliente reclame."
     },
     {
      "tab": "Oracle Cloud Blueprint",
      "label": "Arquitectura Oracle Cloud Infrastructure (Terraform, patrón enterprise)",
      "note": "Este Terraform levanta la red (VCN) y la base Autonomous Database de un cliente de forma estandarizada y repetible: escala solo según el uso y solo acepta conexión dentro de la red privada del cliente, con mTLS obligatorio y sin exposición pública. Un ambiente que tomaría días montar manualmente queda listo, y siempre igual, en minutos."
     }
    ],
    "faq": [
     {
      "q": "¿Cómo se componía el Health Score y de dónde venían esos números?",
      "a": "En esta reconstrucción, pesos y umbrales son ejemplos didácticos, no una metodología oficial de Oracle ni una fórmula histórica confirmada. El Health Score ilustrativo es una nota de 0 a 100 construida para cada banco de la cartera. Piénsalo así: imagina que compraste una membresía de gimnasio. El Health Score mide si realmente vas, cuántas veces cancelaste, si usas todos los servicios que pagaste o solo la cinta. Tenía 5 dimensiones: Adopción (35% del peso): ¿el banco realmente usaba lo que compró? Un banco con Oracle Autonomous Database contratado pero con todos usando aún la base antigua tiene adopción baja. Estabilidad (25%): ¿aparecían los mismos problemas varias veces? Si el banco abría un ticket cada semana con el mismo error, la estabilidad bajaba. Consumo (20%): ¿el banco lo usaba en la medida correcta? Muy por debajo de lo contratado es señal de que querrán reducir en la renovación. Soporte (10%): cuántos tickets abiertos, cuánto tiempo sin respuesta. Evolución tecnológica (10%): ¿el banco avanzaba, probaba nuevas funciones, o estaba estancado meses en el mismo punto? La ponderación de todas las dimensiones daba el número. Por debajo de 65, el contacto ocurría de forma proactiva, antes de que el propio banco reportara el problema."
     },
     {
      "q": "¿Cómo funcionaba el Mapa de Soluciones en la práctica?",
      "a": "Era la visión consolidada de la cartera. Cada banco tenía una fila, cada producto Oracle era una columna. Verde: el producto estaba implementado y el equipo del banco lo estaba usando de verdad. Amarillo: implementado pero con baja adopción, es decir, el banco pagaba pero no lo estaba aprovechando. Naranja: contratado pero aún no implementado, riesgo de insatisfacción y no renovación. Punteado azul: una oportunidad identificada, el banco aún no tenía esa solución pero tenía sentido para su ambiente. Con esta visión, quedaba claro exactamente dónde concentrar el foco cada semana."
     },
     {
      "q": "¿Qué diferencia la arquitectura de soluciones del customer success común?",
      "a": "El CS común sigue el contrato: llamada mensual, checklist de uso, informe de salud. La arquitectura de soluciones entra en el ambiente del cliente, entiende qué está instalado, cómo está configurado, qué debería funcionar diferente. La combinación de ambos frentes permitía ir más allá del informe: se podía identificar que el Oracle RAC de un banco tenía 2 nodos cuando el volumen exigía 4, y llevarlo como recomendación antes de que se convirtiera en un incidente. Es lo que diferencia la renovación por inercia de la renovación por valor."
     },
     {
      "q": "¿Por qué FEBRABAN era estratégico en esta actuación?",
      "a": "FEBRABAN es la Federación Brasileña de Bancos. Los eventos y reuniones del sector permitían conversar con responsables de tecnología sobre rendimiento de bases de datos, modernización y operación de productos Oracle, en el contexto del seguimiento técnico de ocho bancos."
     }
    ]
   },
   "ja": {
    "r": "ソリューションアーキテクト · Customer Success",
    "d": "Oracleでは、主にOracle製品の導入後支援として、ブラジル国内の銀行8行を技術面で担当しました。OCIやAutonomous Databaseを含むソリューションアーキテクチャ、データベースの導入とモダナイゼーションに取り組みました。",
    "heroChips": [
     "Oracle Cloud · 認定資格",
     "PL/SQL",
     "ソリューションアーキテクチャ",
     "Customer Success · 金融セクター"
    ],
    "app": {
     "sub": "エンタープライズアカウントインテリジェンス",
     "h": "各顧客の技術的健全性を<em>1つのダッシュボードに。</em>",
     "d": "Oracleにおける銀行ポートフォリオ管理のシミュレーション: アカウント別に統合された導入ヘルススコア、導入済みソリューションのカタログ、データベース構成、技術リスク、モダナイゼーション機会。顧客データを使わない教育目的のシミュレーションです。"
    },
    "metrics": [
     {
      "v": "8",
      "l": "ポートフォリオ内の銀行数 · Banco BVを戦略的顧客として含む"
     },
     {
      "v": "OCI",
      "l": "Oracle Cloud Infrastructure · 金融セクター向けソリューションアーキテクチャ"
     },
     {
      "v": "FEBRABAN",
      "l": "銀行セクターの戦略的イベントでのOracle代表"
     },
     {
      "v": "エンドツーエンド",
      "l": "導入から採用状況・リスク・モダナイゼーションの追跡まで"
     }
    ],
    "demos": [
     {
      "kind": "app",
      "t": "アカウント別ソリューションマップ",
      "d": "ポートフォリオ内8行のインタラクティブマトリクス: 各行がどのOracleソリューションを持っていたか、実際に使われていたか、契約済みだが未稼働のものは何か、特定されたモダナイゼーション機会は何か。任意の銀行をクリックしてリスクと次のステップを確認できます。",
      "u": "oracle-solutions-map.html",
      "btn": "ソリューションマップを開く →"
     },
     {
      "kind": "app",
      "t": "Customer Success Health Score",
      "d": "アカウントヘルススコア計算機: 導入・安定性・利用状況・サポート・技術的進化のスライダーを操作すると、0〜100のスコアがリアルタイムで計算され、リスク分類と推奨アクションが表示されます。重みと閾値は教育用に作成したもので、Oracle公式手法や当時の計算式を再現したものではありません。",
      "u": "oracle-cs-health.html",
      "btn": "ヘルススコアを計算 →"
     }
    ],
    "stints": [
     {
      "r": "ソリューションアーキテクト · Customer Success",
      "per": "",
      "prob": "Banco BVのような戦略的顧客を含む8行のポートフォリオは、多様な環境を抱えていました: レガシーOracle Databaseの導入とOracle Cloudの初期採用が混在していました。多くの場合、Oracleソリューションは購入されていたものの正しく利用されておらず、低いリターン、更新リスク、未特定の拡大機会を生んでいました。各顧客の技術的な歩みについて統合された可視性はありませんでした: 何が導入されているか、実際の採用レベル、未解決の技術リスク、次のモダナイゼーションステップ。",
      "decSections": [
       {
        "eye": "🏗️ 金融セクター向けソリューションアーキテクチャ",
        "body": "この役割は、Oracle DatabaseとOracle Cloud Infrastructureに基づくアーキテクチャの定義と進化を銀行に対して支援し、可用性、セキュリティ、パフォーマンス、継続性の要件を重要な環境に適用可能な技術判断へと変換しました。対象は新規環境とレガシー環境の両方でした: 重要ワークロード向けOracle Exadata、高可用性向けOracle RAC、継続性と復旧向けOracle Data Guard、低ダウンタイムのレプリケーションとデータ移動向けOracle GoldenGate。"
       },
       {
        "eye": "📊 ポートフォリオの統合ビュー · ヘルススコア",
        "body": "ポートフォリオの各アカウントは4つの観点で追跡されました: アカウントの健全性（導入・安定性・利用状況・サポート・技術的進化の組み合わせ）、導入済みソリューション（利用中のOracle製品、バージョン、環境、採用段階）、技術・導入リスク（レガシー技術、低い利用率、繰り返すインシデント、サポート終了間近のコンポーネントへの依存）、モダナイゼーション機会（Autonomous Database、マネージドサービス、高可用性、セキュリティ、自動化、OCIへの拡大）。この統合ビューにより、顧客が問題を報告するのを待たずに能動的な対応が可能になりました。"
       },
       {
        "eye": "⚡ データベースのモダナイゼーション · Autonomous Database",
        "body": "Oracle Autonomous Databaseや他のOCIマネージドサービスを通じて、従来型環境をモダナイズする機会が特定されました。各推奨事項は、ワークロードの互換性、環境の重要度、移行の労力、運用への影響、セキュリティ、継続性を考慮していました。Oracle Enterprise Managerは環境の一元的な監視・管理に使用され、モダナイゼーションの判断前にデータベースの健全性を可視化しました。"
       },
       {
        "eye": "🎯 技術的な採用とFEBRABAN",
        "body": "この業務は導入で終わりませんでした。顧客はgo-live後も追跡され、購入したソリューションが正しく利用され価値を生んでいるかを確認しました。採用が低い場合、根本原因を特定し、顧客チームを技術的に導き、進化計画を構築するプロセスを踏みました。OracleはFEBRABANを含む金融セクターの戦略的イベントでも代表を務め、銀行のニーズをOracleポートフォリオの能力に結びつけ、具体的な拡大機会を生み出しました。"
       }
      ],
      "res": "この役割は、通常は別々に扱われる3つの視点、アーキテクチャ、顧客の成功、機会創出をつなぎました。ポートフォリオ内の各銀行は、何が導入されているか、正しく利用されているか、未解決の技術リスクは何か、次のモダナイゼーションステップは何かについて、完全な可視性を持って追跡されるようになりました。採用が低い顧客については根本原因が特定され、進化計画が構築されました。Oracle Autonomous DatabaseとOCIへの移行機会は、客観的な技術基準でマッピングされました。FEBRABANでの存在感は、銀行セクターの実際の課題をOracleポートフォリオに結びつけることで、拡大機会を生み出しました。",
      "metrics": [
       "ポートフォリオ内8行",
       "Banco BV · 戦略的顧客",
       "FEBRABAN · Oracle代表",
       "OCI + Autonomous DB"
      ]
     }
    ],
    "arch": [
     [
      "銀行",
      "特定された技術的ニーズ"
     ],
     [
      "診断",
      "ヘルススコア · リスク · 採用状況"
     ],
     [
      "アーキテクチャ",
      "Oracle DB · OCI · Autonomous"
     ],
     [
      "モダナイゼーション",
      "Exadata · RAC · GoldenGate · Data Guard"
     ],
     [
      "拡大",
      "FEBRABAN · 機会 · 更新"
     ]
    ],
    "stat3": [
     {
      "v": "8",
      "l": "ポートフォリオで追跡された銀行数 · Banco BVを戦略的な金融セクター顧客として含む"
     },
     {
      "v": "FEBRABAN",
      "l": "ブラジル銀行セクターの戦略的イベントでのOracle代表"
     },
     {
      "v": "エンドツーエンド",
      "l": "導入からサイクル全体まで: 採用状況、リスク、モダナイゼーション、拡大"
     }
    ],
    "layers": [
     {
      "icon": "🏦",
      "title": "8行のポートフォリオ",
      "desc": "Banco BVを戦略的顧客として含む、金融セクターのエンタープライズ顧客の技術的追跡。多様な環境: レガシーOracle導入とOracle Cloud Infrastructureの採用が混在。"
     },
     {
      "icon": "📊",
      "title": "ヘルススコア · 統合ビュー",
      "desc": "各アカウントは4つの観点で監視されます: アカウントの健全性、導入済みソリューション、技術リスク、モダナイゼーション機会。顧客が問題を報告するのを待たない能動的なビュー。"
     },
     {
      "icon": "⚡",
      "title": "モダナイゼーション · Autonomous Database",
      "desc": "レガシーデータベースからOracle Autonomous DatabaseおよびOCIマネージドサービスへの移行の特定と推奨。各機会は互換性、重要度、労力、運用への影響で評価されます。"
     },
     {
      "icon": "🏗️",
      "title": "アーキテクチャ · Oracle DBとOCI",
      "desc": "重要ワークロード向けOracle Exadata、高可用性向けRAC、継続性と復旧向けData Guard、低ダウンタイムレプリケーション向けGoldenGate。一元的な監視向けEnterprise Manager。"
     },
     {
      "icon": "🎯",
      "title": "FEBRABAN · 金融セクター",
      "desc": "銀行セクターの戦略的イベントでのOracle代表。銀行の実際のニーズとOracleポートフォリオの能力を結びつけ、具体的な拡大機会を生み出します。"
     }
    ],
    "codeNotes": [
     {
      "tab": "PL/SQL Analytics",
      "label": "高度な分析クエリ、Oracle PL/SQL、アーキテクチャパターン",
      "note": "このプロシージャは、生の販売イベントから毎日KPIサマリー（収益、ユニーク顧客数、平均チケット単価、コンバージョン率）を再計算し、実行にかかった時間をログに記録します。顧客のダッシュボードは、その都度すべてを再計算する代わりに、この準備済みテーブルを参照するため、大幅に高速化されます。"
     },
     {
      "tab": "Health Score CS",
      "label": "Customer Health Scoreモデル、能動的なチャーン検知（Python）",
      "note": "この関数は各アカウントの健全性スコア（0〜100）を計算します: 契約したライセンスをあまり使っていない銀行、同じ問題で繰り返しチケットを起票する銀行、計画された研修を完了していない銀行にはペナルティを与え、最近拡大したアカウントにはボーナスを与えます。40未満は緊急対応（EBR）を発動し、40〜70は能動的なチェックインになります。顧客からの苦情の前に対応することが狙いです。"
     },
     {
      "tab": "Oracle Cloud Blueprint",
      "label": "Oracle Cloud Infrastructureアーキテクチャ（Terraform、エンタープライズパターン）",
      "note": "このTerraformは、顧客のネットワーク（VCN）とAutonomous Databaseを標準化された再現可能な方法で構築します: 利用状況に応じて自動的にスケールし、必須のmTLSとともに顧客のプライベートネットワーク内からの接続のみを受け付け、公開エクスポージャーはありません。手動構築なら数日かかる環境が、常に同一の状態で数分で準備完了になります。"
     }
    ],
    "faq": [
     {
      "q": "ヘルススコアはどのように構成され、その数値はどこから来ていましたか?",
      "a": "この再構築の重みと閾値は教育用で、Oracle公式手法や確認済みの過去の計算式ではありません。以下はシミュレーションの説明です。ヘルススコアは、架空の各銀行向けの0〜100の評価でした。こう考えてください: ジムの会員権を購入したとします。ヘルススコアは、実際に通っているか、何回キャンセルしたか、購入したすべてのサービスを使っているのか、それともランニングマシンだけなのかを測るものです。5つの観点がありました: 導入（重み35%）: 銀行は購入したものを実際に使っていたか? Oracle Autonomous Databaseを契約していても全員が旧データベースを使い続けている銀行は導入が低いことになります。安定性（25%）: 同じ問題が何度も発生していたか? 毎週同じエラーでチケットを起票していれば、安定性は下がりました。利用状況（20%）: 適切な量を使っていたか? 契約に対して大きく下回っていれば、更新時に縮小を希望する兆候です。サポート（10%）: 未対応のチケット数、応答までの時間。技術的進化（10%）: 銀行は前進していたか、新機能を試していたか、それとも何か月も同じ状態で止まっていたか? すべての観点を加重して数値が算出されました。65を下回ると、銀行自身が問題を報告する前に能動的に連絡が行われました。"
     },
     {
      "q": "ソリューションマップは実際にどのように機能していましたか?",
      "a": "それはポートフォリオの統合ビューでした。各銀行が1行、各Oracle製品が1列でした。緑: 製品が導入され、銀行のチームが実際に使用していた。黄: 導入済みだが採用が低い、つまり銀行は費用を払っているが活用できていない。オレンジ: 契約済みだがまだ未導入、不満と更新見送りのリスク。青の点線: 特定された機会、その銀行はまだそのソリューションを持っていないが、その環境には意味があるもの。このビューにより、毎週どこに注力すべきかが明確になりました。"
     },
     {
      "q": "ソリューションアーキテクチャは一般的なCustomer Successと何が違いますか?",
      "a": "一般的なCSは契約を追跡します: 月次の電話、利用チェックリスト、健全性レポート。ソリューションアーキテクチャは顧客の環境に入り込み、何がインストールされているか、どう設定されているか、何が違う動作をすべきかを理解します。この2つを組み合わせることで、レポートを超えた対応が可能になりました: ある銀行のOracle RACがノード2つで稼働していたが、実際の負荷には4つ必要だと特定し、インシデントになる前に推奨事項として提示できました。これが、惰性による更新と価値による更新の違いです。"
     },
     {
      "q": "なぜFEBRABANはこの役割において戦略的だったのですか?",
      "a": "FEBRABANはブラジル銀行連盟です。業界のイベントや会合で、データベース性能、モダナイゼーション、Oracle製品の運用について技術責任者と協議し、8行の技術フォローにつなげました。"
     }
    ]
   }
  },
  "app": {
   "sub": "ENTERPRISE ACCOUNT INTELLIGENCE",
   "h": "A saúde tecnológica de cada cliente <em>em um painel.</em>",
   "d": "Simulação do acompanhamento de carteira de bancos na Oracle: health score de adoção consolidado por conta, catálogo de soluções implantadas, parque de bancos de dados, riscos técnicos e oportunidades de modernização. Simulação didática, sem dados de clientes."
  },
  "metrics": [
   {
    "v": "8 BANCOS · BANCO BV",
    "l": "carteira estratégica do setor financeiro"
   },
   {
    "v": "OCI",
    "l": "arquitetura e modernização de bases legadas"
   },
   {
    "v": "FEBRABAN",
    "l": "representação em agendas do setor bancário"
   },
   {
    "v": "end-to-end",
    "l": "implantação, adoção, riscos e evolução"
   }
  ],
  "heroImg": "img/jen-oracle-chibi.webp",
  "stack": [
   "Oracle Database",
   "Oracle Cloud Infrastructure",
   "Oracle Autonomous Database",
   "Oracle Exadata",
   "Oracle Data Guard",
   "Oracle RAC",
   "Oracle GoldenGate",
   "Oracle Enterprise Manager",
   "PL/SQL"
  ],
  "skipDefaultApp": true,
  "skipDefaultDash": true,
  "demos": [
   {
    "kind": "app",
    "t": "Mapa de Soluções por Conta",
    "d": "Matriz interativa dos 8 bancos da carteira: quais soluções Oracle cada um tinha, se estavam de fato sendo usadas, quais estavam contratadas mas paradas, e quais oportunidades de modernização foram identificadas. Clique em qualquer banco para ver riscos e próximos passos.",
    "u": "oracle-solutions-map.html",
    "btn": "Abrir mapa de soluções →"
   },
   {
    "kind": "app",
    "t": "Customer Success Health Score",
    "d": "Calculadora do Health Score de conta: arraste os sliders de adoção, estabilidade, consumo, suporte e evolução tecnológica e veja o score 0-100 ser calculado em tempo real, com classificação de risco e recomendação de ação, com pesos e limiares didáticos criados para o portfólio, não uma metodologia oficial da Oracle nem reprodução da fórmula histórica.",
    "u": "oracle-cs-health.html",
    "btn": "Calcular health score →"
   }
  ],
  "stints": [
   {
    "r": "Arquiteta de Soluções · Customer Success",
    "per": "",
    "prob": "Uma carteira de 8 bancos, incluindo contas estratégicas como o Banco BV, com ambientes heterogêneos: bases Oracle Database legadas convivendo com adoção incipiente de Oracle Cloud. Em muitos casos, soluções Oracle haviam sido contratadas mas não estavam sendo utilizadas corretamente, gerando baixo retorno, risco de não renovação e oportunidades de expansão não identificadas. Não havia visibilidade consolidada da jornada tecnológica de cada cliente: o que estava implantado, o nível real de adoção, os riscos técnicos em aberto e as próximas etapas de modernização.",
    "decSections": [
     {
      "eye": "🏗️ Arquitetura de Soluções para o Setor Financeiro",
      "body": "A atuação apoiava os bancos na definição e evolução de arquiteturas baseadas em Oracle Database e Oracle Cloud Infrastructure, traduzindo requisitos de disponibilidade, segurança, desempenho e continuidade em decisões técnicas aplicáveis a ambientes críticos. A cobertura incluía tanto ambientes novos quanto legados: Oracle Exadata para workloads críticos, Oracle RAC para alta disponibilidade, Oracle Data Guard para continuidade e recuperação, e Oracle GoldenGate para replicação e movimentação de dados com baixa indisponibilidade."
     },
     {
      "eye": "📊 Visão Consolidada da Carteira · Health Score",
      "body": "Cada conta da carteira era acompanhada em quatro dimensões: saúde da conta (combinação de adoção, estabilidade, consumo, suporte e evolução tecnológica), soluções implantadas (produtos Oracle utilizados, versões, ambientes e estágio de adoção), riscos técnicos e de adoção (tecnologias legadas, baixa utilização, incidentes recorrentes ou dependência de componentes próximos da descontinuação) e oportunidades de modernização (Autonomous Database, serviços gerenciados, alta disponibilidade, segurança, automação e expansão para OCI). A visão consolidada permitia agir de forma proativa, sem esperar que o cliente relatasse um problema."
     },
     {
      "eye": "⚡ Modernização de Bancos de Dados · Autonomous Database",
      "body": "Foram identificadas oportunidades para modernizar ambientes tradicionais por meio do Oracle Autonomous Database e de outros serviços gerenciados da OCI. Cada recomendação considerava compatibilidade de workload, criticidade do ambiente, esforço de migração, impacto operacional, segurança e continuidade. O Oracle Enterprise Manager era utilizado para monitoramento e administração centralizada dos ambientes, dando visibilidade da saúde das bases antes de qualquer decisão de modernização."
     },
     {
      "eye": "🎯 Adoção técnica e FEBRABAN",
      "body": "O trabalho não terminava com a implantação. Os clientes eram acompanhados após o go-live para garantir que as soluções contratadas estivessem sendo utilizadas corretamente e gerando valor. Quando havia baixa adoção, o processo envolvia identificar a causa raiz, orientar tecnicamente o time do cliente e construir um plano de evolução. A Oracle também foi representada em eventos estratégicos do setor financeiro, incluindo a FEBRABAN, aproximando as necessidades dos bancos das capacidades tecnológicas do portfólio Oracle e gerando oportunidades concretas de expansão."
     }
    ],
    "res": "A atuação conectava três perspectivas normalmente separadas: arquitetura, sucesso do cliente e desenvolvimento de oportunidades. Cada banco da carteira passou a ser acompanhado com visibilidade completa: o que estava implantado, se estava sendo utilizado corretamente, quais os riscos técnicos em aberto e quais os próximos passos de modernização. Clientes com baixa adoção tiveram causas identificadas e planos de evolução construídos. Oportunidades de migração para Oracle Autonomous Database e OCI foram mapeadas com critérios técnicos objetivos. A presença na FEBRABAN gerou oportunidades de expansão conectando desafios reais do setor bancário ao portfólio Oracle.",
    "metrics": [
     "8 bancos na carteira",
     "Banco BV · conta estratégica",
     "FEBRABAN · representação Oracle",
     "OCI + Autonomous DB"
    ],
    "stack": [
     "Oracle Database",
     "Oracle Cloud Infrastructure",
     "Oracle Autonomous Database",
     "Oracle Exadata",
     "Oracle Data Guard",
     "Oracle RAC",
     "Oracle GoldenGate",
     "Oracle Enterprise Manager",
     "PL/SQL"
    ]
   }
  ],
  "arch": [
   [
    "Banco",
    "necessidade técnica identificada"
   ],
   [
    "Diagnóstico",
    "health score · riscos · adoção"
   ],
   [
    "Arquitetura",
    "Oracle DB · OCI · Autonomous"
   ],
   [
    "Modernização",
    "Exadata · RAC · GoldenGate · Data Guard"
   ],
   [
    "Expansão",
    "FEBRABAN · oportunidades · renovação"
   ]
  ],
  "stat3": [
   {
    "v": "8",
    "l": "bancos acompanhados na carteira · incluindo Banco BV como conta estratégica do setor financeiro"
   },
   {
    "v": "FEBRABAN",
    "l": "representação Oracle em eventos estratégicos do setor bancário brasileiro"
   },
   {
    "v": "end-to-end",
    "l": "da implantação ao ciclo completo: adoção, riscos, modernização e expansão"
   }
  ],
  "layers": [
   {
    "icon": "🏦",
    "title": "Carteira de 8 Bancos",
    "desc": "Acompanhamento técnico de contas enterprise do setor financeiro, incluindo Banco BV como conta estratégica. Ambientes heterogêneos: bases legadas Oracle convivendo com adoção de Oracle Cloud Infrastructure."
   },
   {
    "icon": "📊",
    "title": "Health Score · Visão Consolidada",
    "desc": "Cada conta monitorada em quatro dimensões: saúde da conta, soluções implantadas, riscos técnicos e oportunidades de modernização. Visão proativa, sem esperar o cliente relatar o problema."
   },
   {
    "icon": "⚡",
    "title": "Modernização · Autonomous Database",
    "desc": "Identificação e recomendação de migração de bases legadas para Oracle Autonomous Database e serviços gerenciados da OCI. Cada oportunidade avaliada por compatibilidade, criticidade, esforço e impacto operacional."
   },
   {
    "icon": "🏗️",
    "title": "Arquitetura · Oracle DB e OCI",
    "desc": "Oracle Exadata para workloads críticos, RAC para alta disponibilidade, Data Guard para continuidade e recuperação, GoldenGate para replicação com baixa indisponibilidade. Enterprise Manager para monitoramento centralizado."
   },
   {
    "icon": "🎯",
    "title": "FEBRABAN · Setor Financeiro",
    "desc": "Representação Oracle em eventos estratégicos do setor bancário. Aproximação entre necessidades reais dos bancos e capacidades do portfólio Oracle, gerando oportunidades concretas de expansão."
   }
  ],
  "code": [
   {
    "tab": "PL/SQL Analytics",
    "label": "Consulta analítica avançada em Oracle PL/SQL, padrão de arquitetura",
    "note": "Esse procedimento recalcula diariamente um resumo de KPIs (receita, clientes únicos, ticket médio e taxa de conversão) a partir dos eventos de venda brutos e registra o tempo de execução. Os dashboards do cliente consultam essa tabela preparada, sem recalcular todos os dados a cada acesso, o que reduz o tempo de resposta.",
    "code": "-- Pipeline analítico em Oracle PL/SQL para clientes enterprise\nCREATE OR REPLACE PROCEDURE p_refresh_kpi_dashboard AS\n    v_start_time TIMESTAMP := SYSTIMESTAMP;\nBEGIN\n    -- Limpa e recomputa agregações diárias\n    EXECUTE IMMEDIATE 'TRUNCATE TABLE kpi_daily_summary';\n\n    INSERT INTO kpi_daily_summary\n    SELECT\n        TRUNC(event_date) AS dt,\n        product_category,\n        SUM(revenue)      AS total_revenue,\n        COUNT(DISTINCT customer_id) AS unique_customers,\n        AVG(ticket_value) AS avg_ticket,\n        ROUND(SUM(CASE WHEN status='completed' THEN 1 ELSE 0 END)\n              / COUNT(*) * 100, 2) AS conversion_rate\n    FROM sales_events\n    WHERE event_date >= TRUNC(SYSDATE) - 90\n    GROUP BY TRUNC(event_date), product_category;\n\n    -- Log de execução\n    INSERT INTO etl_log (proc_name, exec_time, rows_processed, status)\n    VALUES ('p_refresh_kpi', SYSTIMESTAMP - v_start_time, SQL%ROWCOUNT, 'SUCCESS');\n    COMMIT;\nEND;"
   },
   {
    "tab": "Health Score CS",
    "label": "Modelo de Customer Health Score, detecção proativa de churn (Python)",
    "note": "Essa função calcula a nota de saúde (0 a 100) de cada conta: penaliza banco que usa pouco a licença contratada, que abre chamado repetido pelo mesmo problema e que não fez os treinamentos planejados, e dá bônus se a conta expandiu recentemente. Abaixo de 40 dispara ação urgente (EBR), entre 40 e 70 vira check-in proativo, a ideia é agir antes do cliente reclamar.",
    "code": "import pandas as pd\nimport numpy as np\n\ndef compute_health_score(customer: dict) -> dict:\n    \"\"\"\n    Score 0-100: < 40 = risco, 40-70 = atenção, > 70 = saudável\n    \"\"\"\n    score = 100.0\n\n    # Penaliza por subutilização de licença\n    lic_usage = customer.get('license_utilization', 1.0)\n    if lic_usage < 0.5:\n        score -= 30 * (0.5 - lic_usage) / 0.5\n\n    # Penaliza por suporte recorrente (mesmo problema)\n    repeat_tickets = customer.get('repeat_support_tickets', 0)\n    score -= min(20, repeat_tickets * 5)\n\n    # Penaliza por ausência de treinamentos realizados\n    trainings_done = customer.get('trainings_completed', 0)\n    trainings_planned = customer.get('trainings_planned', 1)\n    if trainings_planned > 0:\n        ratio = trainings_done / trainings_planned\n        score -= (1 - ratio) * 15\n\n    # Bônus por expansão recente\n    if customer.get('recent_expansion', False):\n        score += 10\n\n    return {\n        'score': round(max(0, min(100, score)), 1),\n        'risk': 'alto' if score < 40 else ('medio' if score < 70 else 'baixo'),\n        'action': 'EBR urgente' if score < 40 else 'check-in proativo'\n    }"
   },
   {
    "tab": "Oracle Cloud Blueprint",
    "label": "Arquitetura Oracle Cloud Infrastructure (Terraform, padrão enterprise)",
    "note": "Este Terraform sobe a rede (VCN) e o banco Autonomous Database de um cliente de forma padronizada e repetível: escala sozinho conforme o uso e só aceita conexão dentro da rede privada do cliente, com mTLS obrigatório e sem exposição pública. Um ambiente que levaria dias para montar manualmente fica pronto, e sempre igual, em minutos.",
    "code": "# Oracle Cloud Infrastructure, blueprint para clientes enterprise\nresource \"oci_core_vcn\" \"client_vcn\" {\n  compartment_id = var.compartment_id\n  display_name   = \"client-data-platform\"\n  cidr_block     = \"10.0.0.0/16\"\n}\n\nresource \"oci_database_autonomous_database\" \"adb\" {\n  compartment_id           = var.compartment_id\n  db_name                  = \"CLIENTDW\"\n  display_name             = \"Client Autonomous DW\"\n  db_workload              = \"DW\"\n  cpu_core_count           = 4\n  data_storage_size_in_tbs = 1\n  is_auto_scaling_enabled  = true\n\n  # Segurança: network access restrito à VCN do cliente\n  is_mtls_connection_required = true\n  subnet_id                   = oci_core_subnet.private.id\n}\n\noutput \"adb_connection_string\" {\n  value     = oci_database_autonomous_database.adb.connection_strings\n  sensitive = true\n}\n# Padrão: Autonomous DW + Data Integration + Analytics Cloud"
   }
  ],
  "faq": [
   {
    "q": "Como era composto o Health Score e de onde vinham esses números?",
    "a": "Nesta reconstrução, pesos e limiares são exemplos didáticos, não uma metodologia oficial da Oracle ou uma fórmula histórica confirmada. O Health Score ilustrativo é uma nota de 0 a 100 montada para cada banco da carteira. Pensa assim: imagine que você comprou uma academia. O Health Score mede se você está indo, quantas vezes cancelou, se está usando todos os serviços que pagou ou só a esteira. Ele tinha 5 dimensões: Adoção (35% do peso): o banco estava realmente usando o que comprou? Um banco com Oracle Autonomous Database contratado mas todo mundo ainda usando o banco antigo tem adoção baixa. Estabilidade (25%): apareceram os mesmos problemas várias vezes? Se o banco abria ticket toda semana com o mesmo erro, a estabilidade caía. Consumo (20%): o banco estava usando na medida certa? Muito abaixo do contratado é sinal de que vão querer reduzir na renovação. Suporte (10%): quantos chamados abertos, há quanto tempo sem resposta. Evolução tecnológica (10%): o banco estava avançando, testando novos recursos, ou parado há meses no mesmo ponto? A ponderação de todas as dimensões resultava no número. Abaixo de 65, o contato acontecia de forma proativa, antes de o próprio banco relatar o problema."
   },
   {
    "q": "Como o Mapa de Soluções funcionava na prática?",
    "a": "Era a visão consolidada da carteira. Cada banco tinha uma linha, cada produto Oracle era uma coluna. Verde: o produto estava implantado e o time do banco estava usando de fato. Amarelo: implantado mas com baixa adoção, ou seja, o banco pagava mas não estava aproveitando. Laranja: contratado mas ainda não implantado, risco de insatisfação e não renovação. Pontilhado azul: uma oportunidade identificada, o banco ainda não tinha aquela solução mas fazia sentido para o ambiente dele. Com essa visão, ficava claro exatamente onde concentrar o foco em cada semana."
   },
   {
    "q": "O que diferencia arquitetura de soluções de customer success comum?",
    "a": "CS comum acompanha o contrato: ligação mensal, checklist de uso, relatório de saúde. Arquitetura de soluções entra no ambiente do cliente, entende o que está instalado, como está configurado, o que deveria funcionar diferente. A combinação das duas frentes permitia ir além do relatório: dava para identificar que o Oracle RAC de um banco estava com 2 nós quando o volume exigia 4, e levar isso como recomendação antes que virasse um incidente. É o que diferencia renovação por inércia de renovação por valor."
   },
   {
    "q": "Por que a FEBRABAN era estratégica nessa atuação?",
    "a": "A FEBRABAN é a Federação Brasileira de Bancos. A participação em eventos e agendas do setor permitia conversar com decisores de tecnologia sobre desempenho de bancos de dados, modernização e operação dos produtos Oracle. Essa atuação se conectava ao acompanhamento técnico da carteira de oito bancos."
   }
  ]
 },
 {
  "f": "big",
  "flag": "us",
  "n": "IBM",
  "dom": "ibm.com",
  "per": "2017",
  "r": "Engenheira de Dados · Big Data",
  "d": "Na IBM, programei duas soluções de dados: uma ingestão quase em tempo real para o CRM do Santander e uma plataforma de monitoramento de campanhas pelas APIs da Amazon, com dashboards e chatbot de alertas. As duas entregas fazem parte da mesma experiência profissional na IBM.",
  "heroChips": [
   "Big Data On-premises",
   "Java",
   "Streaming · Near Real-Time",
   "CRM Santander · D+1 → 5 min"
  ],
  "t": {
   "en": {
    "r": "Data Engineer · Big Data",
    "d": "Two projects within IBM: near real-time ingestion for Santander CRM and a campaign-monitoring solution via Amazon APIs, with dashboards and an alert chatbot. The MarTech project remains part of the IBM experience, with no separate professional engagement.",
    "heroChips": [
     "On-premises Big Data",
     "Java",
     "Streaming · Near Real-Time",
     "Santander CRM · D+1 → 5 min"
    ],
    "app": {
     "sub": "NEAR REAL-TIME INGESTION",
     "h": "Data that used to arrive tomorrow, <em>now in 5 minutes.</em>",
     "d": "Simulation of the Santander CRM near real-time ingestion: Kafka → Flume → Hive flow, a catalog of the ingestion layers and queue-delay alerts. Didactic simulation, no customer data."
    },
    "metrics": [
     {
      "v": "D+1 → < 5 min",
      "l": "CRM integration evolution"
     },
     {
      "v": "NRT",
      "l": "near-real-time events"
     },
     {
      "v": "Amazon Ads",
      "l": "metrics, dashboards and KPI Bot"
     },
     {
      "v": "Recognition",
      "l": "IBMer Appreciation"
     }
    ],
    "demos": [
     {
      "kind": "app",
      "t": "NRT Integration · IBM · Santander",
      "d": "Live NRT pipeline: send a CRM event and watch each hop (Mainframe→MQ→Flume→Kafka→Storm→ES→Camel) with latency per hop, D+1 → < 5min, 288× faster.",
      "u": "ibm-crm-integration.html",
      "btn": "Open integration →"
     },
     {
      "kind": "app",
      "t": "MarTech Project · Amazon APIs",
      "d": "Technical reconstruction of publisher monitoring: CTR, ROAS and latency in a synthetic scenario, a KPI chatbot and an impressions time series. Project presented within the IBM experience.",
      "u": "jellyfish-martech-app.html",
      "btn": "Open analytics →"
     }
    ],
    "stints": [
     {
      "r": "Big Data Developer · Santander CRM project",
      "per": "2017",
      "prob": "Santander CRM (the system the team used to serve and offer products to clients) received data with a one-day delay (called D+1): it arrived through an overnight batch process and was already outdated by the time of service, preventing personalized offers in the moment.",
      "dec": "Near real-time ingestion was deployed from the mainframe via an MQ queue, with Flume → Kafka → Storm → Elasticsearch for the NRT flow, complemented by batch processing with Control-M, Pig, Hive and Impala for history. Endpoints were exposed via Apache Camel for consumption by the CRM.",
      "res": "The CRM started receiving customer data with latency under 5 minutes, establishing the foundation for real-time credit campaigns. The work was recognized with the IBMer Appreciation Award for sharing expertise with the team.",
      "metrics": [
       "D+1 → < 5min",
       "mainframe integrated via MQ",
       "Camel endpoints",
       "IBMer Appreciation"
      ],
      "stack": [
       "Hadoop",
       "Flume",
       "Kafka",
       "Storm",
       "Elasticsearch",
       "Apache Pig",
       "Hive",
       "Impala",
       "Apache Camel",
       "Java",
       "Control-M"
      ]
     },
     {
      "r": "Software Engineer · Martech Monitoring · Amazon APIs",
      "per": "2017",
      "prob": "Publishers (the outlets and accounts displaying the ads) needed to see campaign latency (response delay) and performance in real time. Without it, inventory decisions and bid adjustments (the amount paid per ad in the auction) were delayed by hours or days.",
      "dec": "Monitoring applications were developed in Node.js integrated with Amazon APIs to measure latency and performance in real time, complemented by a chatbot that automatically tracked critical metrics.",
      "res": "Clients started tracking that same day metrics, with automated latency and performance monitoring and campaign-adjustment decisions made on the same day.",
      "metrics": [
       "Amazon APIs integrated",
       "live dashboards",
       "monitoring chatbot",
       "tracked latency"
      ],
      "stack": [
       "Node.js",
       "AWS",
       "Amazon API",
       "JavaScript",
       "Chart.js"
      ]
     }
    ],
    "arch": [
     [
      "Mainframe",
      "MQ queue · IBM MQ"
     ],
     [
      "NRT",
      "Flume · Kafka · Storm"
     ],
     [
      "Batch",
      "Control-M · Pig · Hive"
     ],
     [
      "Index",
      "Elasticsearch · HBase"
     ],
     [
      "API",
      "Apache Camel"
     ],
     [
      "CRM",
      "Santander · data < 5min"
     ]
    ],
    "stat3": [
     {
      "v": "D+1 → < 5min",
      "l": "Santander CRM data latency after the near real-time architecture"
     },
     {
      "v": "IBMer Award",
      "l": "IBMer Appreciation for sharing Big Data Hadoop expertise with the team"
     },
     {
      "v": "NRT",
      "l": "near real-time: Flume → Kafka → Storm → Elasticsearch in production"
     }
    ],
    "layers": [
     {
      "icon": "🗄️",
      "title": "Mainframe · IBM MQ",
      "desc": "The mainframe (the central legacy computer running the core of the bank) emits transaction events into a message queue (IBM MQ). The integration does not touch the mainframe, it only reads from that queue, preserving the stability of the core system."
     },
     {
      "icon": "⚡",
      "title": "NRT · Flume + Kafka + Storm",
      "desc": "Flume captures messages from the MQ queue, Kafka acts as a durable buffer, and Storm processes events in a stream with millisecond latency before indexing into Elasticsearch."
     },
     {
      "icon": "⚙️",
      "title": "Batch · Control-M + Pig + Hive",
      "desc": "Control-M orchestrates the nightly batch jobs. Apache Pig transforms historical data, Hive and Impala expose it via SQL for analytics and reports."
     },
     {
      "icon": "🔍",
      "title": "Elasticsearch · HBase",
      "desc": "Elasticsearch for fast customer-profile lookup in the CRM (< 100ms). HBase for transaction history that NRT does not need but analytics does."
     },
     {
      "icon": "🎯",
      "title": "Apache Camel · API for CRM",
      "desc": "Camel exposes RESTful endpoints unifying NRT and batch data. The CRM consumes a single API, with no need to know whether the data came from Kafka or Hive."
     },
     {
      "icon": "🔌",
      "title": "Amazon Ads API",
      "desc": "Integration with the Amazon Advertising API to collect impressions, clicks, CTR (click-through rate, how many clicks per 100 ads shown) and latency per publisher and campaign. OAuth2 authentication (secure login between systems) with automatic token renewal."
     },
     {
      "icon": "⚡",
      "title": "Node.js · collection",
      "desc": "A Node.js server polling Amazon APIs every minute and processing real-time event webhooks. Data persisted in PostgreSQL."
     },
     {
      "icon": "📊",
      "title": "Dashboard · Chart.js",
      "desc": "Web interface with real-time charts: historical latency, impression volume and CTR per publisher. Automatic updates with no reload."
     },
     {
      "icon": "🤖",
      "title": "Chatbot · automatic alerts",
      "desc": "A bot that monitors configured thresholds (latency above X, CTR below Y) and automatically notifies the team, with no need to watch the dashboard."
     }
    ],
    "codeNotes": [
     {
      "tab": "Flume Config",
      "label": "Flume agent for near real-time capture from an MQ queue (configuration)",
      "note": "This is the entry point of the near real-time flow. Flume is a collector that \"listens\" to the legacy system message queue (IBM MQ): as soon as a customer event arrives, it captures it in batches and delivers it to Kafka, the conveyor that distributes those events to the rest of the pipeline. This is what replaces waiting for the next day batch: instead of D+1, the event starts being processed within minutes."
     },
     {
      "tab": "Camel API",
      "label": "Apache Camel endpoint unifying NRT and batch for the CRM (Java DSL)",
      "note": "The CRM needed two pieces of information living in different places: the latest transaction (arriving in real time, in Elasticsearch) and the last 12 months of history (coming from the batch, in Hive). Apache Camel acts as an integrator: it exposes a single API route that fetches both sources, merges the results giving priority to the most recent data, and returns one response. This way, the service team queries a single endpoint and gets the customer full profile, without needing to know it came from two different worlds."
     },
     {
      "tab": "Hive Analytics",
      "label": "Santander CRM historical analysis, Hive SQL with window functions (HQL)",
      "note": "With events already in Hive, this query turns behavior into a business opportunity. For each customer and product, it calculates the number of interactions, average ticket, when the last activity happened, and the accumulated revenue over the last 4 weeks (a rolling window, summing in time order). At the end, it classifies credit propensity as high, medium or low using simple rules. The result feeds personalized campaigns, and since the data arrives within minutes through the near real-time flow, the offer matches the customer moment."
     },
     {
      "tab": "Amazon API",
      "label": "Real-time Amazon Ads metrics collection (Node.js)",
      "note": "This is the MarTech project collector: every minute it queries the Amazon Ads API and fetches, for each publisher, campaign numbers: impressions, clicks, click-through rate (CTR) and latency. Each reading is written to a PostgreSQL database with the exact timestamp. Collecting continuously and with timestamps is what makes it possible to track near-real-time performance and later compare how it evolved throughout the day, instead of looking at just a snapshot at the end of the period."
     },
     {
      "tab": "Chatbot Alerts",
      "label": "Automatic monitoring chatbot (Node.js)",
      "note": "Collecting data is not enough if nobody looks at the right time. This automatic watchdog runs every minute, calculates the average latency and CTR of the last 5 minutes per publisher, and compares them to the defined thresholds. If latency crosses the ceiling or CTR drops too much, it notifies the team on Slack itself, with the publisher and the number behind the problem. This is what trades \"finding out about the drop in tomorrow report\" for \"being notified the moment it happens\"."
     },
     {
      "tab": "PostgreSQL Analytics",
      "label": "Compared Amazon publisher performance, window functions (SQL)",
      "note": "This query answers the question the business cares about: which publishers are doing well and which are degrading? It groups 30 days of metrics by day and uses window functions for three comparisons: each publisher latency against its own average (index 100 = normal), the CTR ranking among all publishers on the day, and the trend of the last week against the month. Instead of loose numbers, the result shows every publisher in context, which separates normal variation from a real problem worth acting on."
     }
    ],
    "faq": [
     {
      "q": "Why use Flume instead of connecting Kafka directly to MQ?",
      "a": "The flow separated extraction from IBM MQ and distribution through Kafka. Reading MQ requires a compatible client or connector, for example JMS; Kafka does not consume an MQ queue simply because both share a network. The adapter maps messages to the pipeline contract and handles failures and redelivery."
     },
     {
      "q": "What is Apache Camel and why was it chosen?",
      "a": "Camel is an integration framework implementing the Enterprise Integration Patterns. It was chosen because the CRM needed a single API unifying 2 sources (ES and Hive) with transformations, routing and error handling. Camel delivers all of that with declarative code, without reinventing integration from scratch."
     },
     {
      "q": "What was the IBMer Appreciation Award?",
      "a": "An internal recognition formalized by the team for impact beyond assigned responsibilities. Beyond delivering the NRT integration, I actively shared Hadoop and Big Data ecosystem knowledge with the other IBMers on the project through documentation, pair programming and technical sessions. The team formalized the recognition at the end of the project."
     },
     {
      "q": "Why Node.js for this project?",
      "a": "Node.js is ideal for heavy I/O with multiple simultaneous APIs; its event-loop model processes hundreds of parallel requests without blocking. For a system polling Amazon APIs every minute for dozens of publishers at once, asynchronous Node.js I/O fits concurrent API requests. This does not demonstrate superiority over Python or Java; that requires equivalent benchmarks."
     },
     {
      "q": "What was the chatbot business impact?",
      "a": "Before, the team had to check the dashboard manually to spot problems. The chatbot flipped that logic: instead of requiring active monitoring, the system started notifying proactively. Publishers began receiving alerts within under 1 minute of anomalies, instead of discovering them hours later, when the impact was already bigger."
     },
     {
      "q": "What was the technical challenge of integrating the Amazon Ads API at scale?",
      "a": "The Amazon Ads API enforces strict rate limits per publisher, per endpoint and per time window. With more than 30 publishers polling simultaneously, limits were easily exceeded. The solution was a queue with exponential retry and a circuit breaker in Node.js: when a publisher hit the rate limit, the system waited and retried without impacting the others, enabling the 1-minute cycle."
     }
    ]
   },
   "es": {
    "r": "Ingeniera de Datos · Big Data",
    "d": "Dos proyectos dentro de IBM: ingesta near real-time para el CRM de Santander y una solución de monitoreo de campañas vía APIs de Amazon, con dashboards y chatbot de alertas. El proyecto de MarTech permanece integrado a la experiencia IBM, sin vínculo profesional separado.",
    "heroChips": [
     "Big Data On-premises",
     "Java",
     "Streaming · Near Real-Time",
     "CRM Santander · D+1 → 5 min"
    ],
    "app": {
     "sub": "INGESTA NEAR REAL-TIME",
     "h": "El dato que llegaba mañana, <em>en 5 minutos.</em>",
     "d": "Simulación de la ingesta near real-time del CRM Santander: flujo Kafka → Flume → Hive, catálogo de las capas de ingesta y alertas de retraso de cola. Simulación didáctica, sin datos de clientes."
    },
    "metrics": [
     {
      "v": "D+1 → < 5 min",
      "l": "evolución de la integración con CRM"
     },
     {
      "v": "NRT",
      "l": "eventos casi en tiempo real"
     },
     {
      "v": "Amazon Ads",
      "l": "indicadores, dashboards y KPI Bot"
     },
     {
      "v": "Reconocimiento",
      "l": "IBMer Appreciation"
     }
    ],
    "demos": [
     {
      "kind": "app",
      "t": "NRT Integration · IBM · Santander",
      "d": "Pipeline NRT en vivo: envía un evento CRM y observa cada salto (Mainframe→MQ→Flume→Kafka→Storm→ES→Camel) con latencia por salto, D+1 → < 5min, 288× más rápido.",
      "u": "ibm-crm-integration.html",
      "btn": "Abrir integración →"
     },
     {
      "kind": "app",
      "t": "Proyecto MarTech · APIs Amazon",
      "d": "Reconstrucción técnica del monitoreo de publishers: CTR, ROAS y latencia en escenario sintético, chatbot de KPI y serie temporal de impresiones. Proyecto presentado dentro de la experiencia IBM.",
      "u": "jellyfish-martech-app.html",
      "btn": "Abrir analytics →"
     }
    ],
    "stints": [
     {
      "r": "Big Data Developer · proyecto CRM Santander",
      "per": "2017",
      "prob": "El CRM de Santander (el sistema que el equipo usaba para atender y ofrecer productos a los clientes) recibía los datos con un día de retraso (el llamado D+1): llegaban en un procesamiento por lotes durante la noche y ya estaban desactualizados a la hora de la atención, lo que impedía ofertas personalizadas en el momento.",
      "dec": "Se implementó la ingesta near real-time desde el mainframe vía cola MQ, con Flume → Kafka → Storm → Elasticsearch para el flujo NRT, complementada por procesamiento batch con Control-M, Pig, Hive e Impala para el histórico. Los endpoints se expusieron vía Apache Camel para consumo por el CRM.",
      "res": "El CRM pasó a recibir datos de clientes con latencia inferior a 5 minutos, estableciendo la base para campañas de crédito en tiempo real. El trabajo fue reconocido con el IBMer Appreciation Award por compartir experiencia con el equipo.",
      "metrics": [
       "D+1 → < 5min",
       "mainframe integrado vía MQ",
       "endpoints Camel",
       "IBMer Appreciation"
      ],
      "stack": [
       "Hadoop",
       "Flume",
       "Kafka",
       "Storm",
       "Elasticsearch",
       "Apache Pig",
       "Hive",
       "Impala",
       "Apache Camel",
       "Java",
       "Control-M"
      ]
     },
     {
      "r": "Ingeniera de Software · Monitoreo Martech · APIs Amazon",
      "per": "2017",
      "prob": "Los publishers (los medios y cuentas que muestran los anuncios) necesitaban ver en tiempo real la latencia (el retraso de las respuestas) y el desempeño de las campañas. Sin eso, las decisiones de inventario y el ajuste del bid (la puja pagada por anuncio en la subasta) se retrasaban horas o días.",
      "dec": "Se desarrollaron aplicaciones de monitoreo en Node.js integradas a las APIs de Amazon para medición de latencia y performance en tiempo real, complementadas por un chatbot de seguimiento automático de métricas críticas.",
      "res": "Los clientes pasaron a seguir las métricas del propio día, con monitoreo automatizado de latencia y performance y decisiones de ajuste de campaña realizadas el mismo día.",
      "metrics": [
       "APIs Amazon integradas",
       "dashboards en vivo",
       "chatbot de monitoreo",
       "latencia monitoreada"
      ],
      "stack": [
       "Node.js",
       "AWS",
       "Amazon API",
       "JavaScript",
       "Chart.js"
      ]
     }
    ],
    "arch": [
     [
      "Mainframe",
      "cola MQ · IBM MQ"
     ],
     [
      "NRT",
      "Flume · Kafka · Storm"
     ],
     [
      "Batch",
      "Control-M · Pig · Hive"
     ],
     [
      "Índice",
      "Elasticsearch · HBase"
     ],
     [
      "API",
      "Apache Camel"
     ],
     [
      "CRM",
      "Santander · datos < 5min"
     ]
    ],
    "stat3": [
     {
      "v": "D+1 → < 5min",
      "l": "latencia de datos del CRM Santander tras la arquitectura near real-time"
     },
     {
      "v": "IBMer Award",
      "l": "IBMer Appreciation por compartir experiencia en Big Data Hadoop con el equipo"
     },
     {
      "v": "NRT",
      "l": "near real-time: Flume → Kafka → Storm → Elasticsearch en producción"
     }
    ],
    "layers": [
     {
      "icon": "🗄️",
      "title": "Mainframe · IBM MQ",
      "desc": "El mainframe (la computadora central y legada que ejecuta el corazón del banco) emite los eventos de transacciones en una cola de mensajes (IBM MQ). La integración no toca el mainframe, solo lee de esa cola, preservando la estabilidad del sistema central."
     },
     {
      "icon": "⚡",
      "title": "NRT · Flume + Kafka + Storm",
      "desc": "Flume capta mensajes de la cola MQ, Kafka funciona como buffer duradero y Storm procesa eventos en stream con latencia de milisegundos antes de indexar en Elasticsearch."
     },
     {
      "icon": "⚙️",
      "title": "Batch · Control-M + Pig + Hive",
      "desc": "Control-M orquesta los jobs batch nocturnos. Apache Pig transforma los datos históricos, Hive e Impala los exponen vía SQL para analytics e informes."
     },
     {
      "icon": "🔍",
      "title": "Elasticsearch · HBase",
      "desc": "Elasticsearch para búsqueda rápida de perfil de cliente en el CRM (< 100ms). HBase para historial de transacciones que el NRT no necesita, pero analytics sí."
     },
     {
      "icon": "🎯",
      "title": "Apache Camel · API para CRM",
      "desc": "Camel expone endpoints RESTful unificando datos NRT y batch. El CRM consume una API única, sin saber si el dato vino de Kafka o de Hive."
     },
     {
      "icon": "🔌",
      "title": "Amazon Ads API",
      "desc": "Integración con la Amazon Advertising API para recolectar impresiones, clics, CTR (la tasa de clics, cuántos clics por cada 100 anuncios mostrados) y latencia por publisher y campaña. Autenticación OAuth2 (login seguro entre sistemas) con renovación automática de tokens."
     },
     {
      "icon": "⚡",
      "title": "Node.js · recolección",
      "desc": "Servidor Node.js haciendo polling de las APIs Amazon cada minuto y procesando webhooks de eventos en tiempo real. Datos persistidos en PostgreSQL."
     },
     {
      "icon": "📊",
      "title": "Dashboard · Chart.js",
      "desc": "Interfaz web con gráficos en tiempo real: latencia histórica, volumen de impresiones y CTR por publisher. Actualización automática sin reload."
     },
     {
      "icon": "🤖",
      "title": "Chatbot · alertas automáticas",
      "desc": "Bot que monitorea los umbrales configurados (latencia por encima de X, CTR por debajo de Y) y notifica automáticamente al equipo, sin necesidad de mirar el dashboard."
     }
    ],
    "codeNotes": [
     {
      "tab": "Flume Config",
      "label": "Agente Flume para captura near real-time de cola MQ (configuración)",
      "note": "Este es el punto de entrada del flujo near real-time. Flume es un colector que \"escucha\" la cola de mensajes del sistema legado (IBM MQ): en cuanto llega un evento de cliente, lo captura en lotes y lo entrega a Kafka, la cinta transportadora que distribuye esos eventos al resto del pipeline. Es lo que reemplaza la espera por el lote del día siguiente: en vez de D+1, el evento comienza a procesarse en minutos."
     },
     {
      "tab": "Camel API",
      "label": "Endpoint Apache Camel unificando NRT y batch para el CRM (Java DSL)",
      "note": "El CRM necesitaba dos informaciones que vivían en lugares diferentes: la última transacción (que llega en tiempo real, en Elasticsearch) y el histórico de los últimos 12 meses (que viene del lote, en Hive). Apache Camel funciona como integrador: expone una única ruta de API que busca ambas fuentes, combina los resultados dando prioridad al dato más reciente y devuelve una sola respuesta. Así, el equipo de atención consulta una sola dirección y recibe el perfil completo del cliente, sin saber (ni necesitar saber) que vino de dos mundos distintos."
     },
     {
      "tab": "Hive Analytics",
      "label": "Análisis histórico CRM Santander, Hive SQL con funciones de ventana (HQL)",
      "note": "Con los eventos ya en Hive, esta consulta transforma comportamiento en oportunidad de negocio. Para cada cliente y producto, calcula número de interacciones, ticket promedio, cuándo fue la última interacción y el ingreso acumulado en las últimas 4 semanas (una ventana deslizante, que suma respetando el orden del tiempo). Al final, clasifica la propensión al crédito en alta, media o baja según reglas simples. El resultado alimenta campañas personalizadas, y como el dato llega en minutos por el flujo near real-time, la oferta acompaña el momento del cliente."
     },
     {
      "tab": "Amazon API",
      "label": "Recolección de métricas Amazon Ads en tiempo real (Node.js)",
      "note": "Este es el recolector del proyecto MarTech: cada minuto consulta la API de Amazon Ads y busca, para cada publisher, los números de la campaña, impresiones, clics, tasa de clics (CTR) y latencia. Cada lectura se graba en una base PostgreSQL con la hora exacta. Recolectar de forma continua y con marca de tiempo es lo que permite seguir la performance en tiempo casi real y, después, comparar la evolución a lo largo del día, en vez de mirar solo una foto del final del período."
     },
     {
      "tab": "Chatbot Alerts",
      "label": "Chatbot de monitoreo automático (Node.js)",
      "note": "Recolectar datos no basta si nadie los mira en el momento correcto. Este vigilante automático corre cada minuto, calcula la latencia y el CTR promedio de los últimos 5 minutos por publisher y los compara con los límites definidos. Si la latencia supera el techo o el CTR cae demasiado, él mismo avisa al equipo en Slack, con el publisher y el número del problema. Es lo que cambia \"descubrir la caída en el informe de mañana\" por \"ser avisado en el momento en que ocurre\"."
     },
     {
      "tab": "PostgreSQL Analytics",
      "label": "Performance comparada de publishers Amazon, window functions (SQL)",
      "note": "Esta consulta responde a la pregunta que le interesa al negocio: ¿qué publishers están yendo bien y cuáles se están degradando? Agrupa 30 días de métricas por día y usa window functions para tres comparaciones: la latencia de cada publisher frente a su propio promedio (índice 100 = normal), el ranking de CTR entre todos en el día, y la tendencia de la última semana contra el mes. En vez de números sueltos, el resultado muestra cada publisher en contexto, lo que separa una variación normal de un problema real que merece acción."
     }
    ],
    "faq": [
     {
      "q": "¿Por qué usar Flume en vez de conectar Kafka directo al MQ?",
      "a": "El flujo separaba la extracción de IBM MQ y la distribución por Kafka. Leer MQ requiere un cliente o conector compatible, por ejemplo JMS. El adaptador convierte los mensajes al contrato del pipeline y debe gestionar fallos y reentregas."
     },
     {
      "q": "¿Qué es Apache Camel y por qué fue elegido?",
      "a": "Camel es un framework de integración que implementa los Enterprise Integration Patterns. Fue elegido porque el CRM necesitaba una API única que unificara 2 fuentes (ES y Hive) con transformaciones, enrutamiento y manejo de errores. Camel entrega todo eso con código declarativo, sin reinventar la integración desde cero."
     },
     {
      "q": "¿Qué fue el IBMer Appreciation Award?",
      "a": "Un reconocimiento interno formalizado por el equipo por el impacto más allá de las responsabilidades asignadas. Además de entregar la integración NRT, compartí activamente conocimiento de Hadoop y el ecosistema Big Data con los demás IBMers del proyecto vía documentación, pair programming y sesiones técnicas. El equipo formalizó el reconocimiento al final del proyecto."
     },
     {
      "q": "¿Por qué Node.js para este proyecto?",
      "a": "Node.js es ideal para I/O intenso con múltiples APIs simultáneas; su modelo event-loop procesa cientos de requests paralelos sin bloqueo. Para un sistema que hace polling de APIs Amazon cada minuto para decenas de publishers a la vez, el I/O asíncrono de Node.js encaja con la concurrencia entre APIs. No demuestra superioridad frente a Python o Java sin un benchmark equivalente."
     },
     {
      "q": "¿Cuál fue el impacto del chatbot para el negocio?",
      "a": "Antes, el equipo necesitaba consultar el dashboard manualmente para identificar problemas. El chatbot invirtió esa lógica: en vez de exigir monitoreo activo, el sistema pasó a notificar proactivamente. Los publishers pasaron a recibir alertas en menos de 1 minuto tras las anomalías, en vez de descubrirlas horas después, cuando el impacto ya era mayor."
     },
     {
      "q": "¿Cuál era el desafío técnico de integrar la Amazon Ads API a escala?",
      "a": "La Amazon Ads API impone rate limits rigurosos por publisher, por endpoint y por ventana de tiempo. Con más de 30 publishers en polling simultáneo, los límites se superaban fácilmente. La solución fue una cola con retry exponencial y circuit breaker en Node.js: cuando un publisher alcanzaba el rate limit, el sistema esperaba y reintentaba sin impactar a los demás, viabilizando el ciclo de 1 minuto."
     }
    ]
   },
   "ja": {
    "r": "データエンジニア · ビッグデータ",
    "d": "IBM内の2つのプロジェクト: SantanderのCRM向け準リアルタイム取り込みと、Amazon APIを介したキャンペーンモニタリングソリューション（ダッシュボードとアラートチャットボット付き）。MarTechプロジェクトはIBMでの経験の一部であり、別個の職務関係ではありません。",
    "heroChips": [
     "オンプレミス · ビッグデータ",
     "Java",
     "ストリーミング · 準リアルタイム",
     "Santander CRM · D+1 → 5分"
    ],
    "app": {
     "sub": "準リアルタイム取り込み",
     "h": "翌日に届いていたデータを<em>5分で。</em>",
     "d": "Santander CRMの準リアルタイム取り込みのシミュレーション: Kafka → Flume → Hiveのフロー、取り込み層のカタログ、キュー遅延アラート。顧客データを使わない教育目的のシミュレーションです。"
    },
    "metrics": [
     {
      "v": "D+1 → < 5 min",
      "l": "CRM連携の改善"
     },
     {
      "v": "NRT",
      "l": "準リアルタイムイベント"
     },
     {
      "v": "Amazon Ads",
      "l": "指標、ダッシュボード、KPI Bot"
     },
     {
      "v": "表彰",
      "l": "IBMer Appreciation"
     }
    ],
    "demos": [
     {
      "kind": "app",
      "t": "NRT Integration · IBM · Santander",
      "d": "ライブNRTパイプライン: CRMイベントを送信し、各ホップ（メインフレーム→MQ→Flume→Kafka→Storm→ES→Camel）のレイテンシを確認できます。D+1 → 5分未満、288倍高速化。",
      "u": "ibm-crm-integration.html",
      "btn": "連携を開く →"
     },
     {
      "kind": "app",
      "t": "MarTechプロジェクト · Amazon API",
      "d": "パブリッシャーモニタリングの技術的再構築: 合成シナリオでのCTR、ROAS、レイテンシ、KPIチャットボット、インプレッションの時系列。IBMでの経験の一部として提示されたプロジェクトです。",
      "u": "jellyfish-martech-app.html",
      "btn": "アナリティクスを開く →"
     }
    ],
    "stints": [
     {
      "r": "ビッグデータ開発者 · Santander CRMプロジェクト",
      "per": "2017年",
      "prob": "Santanderの CRM（チームが顧客対応と提案に使用するシステム）は、1日遅れ（いわゆるD+1）でデータを受け取っていました: データは夜間バッチ処理で届き、対応時にはすでに古くなっており、その場でのパーソナライズされた提案を妨げていました。",
      "dec": "メインフレームからMQキュー経由での準リアルタイム取り込みを導入し、NRTフローにはFlume → Kafka → Storm → Elasticsearchを使用、過去データにはControl-M、Pig、Hive、Impalaによるバッチ処理を補完しました。エンドポイントはCRMが利用できるようApache Camel経由で公開されました。",
      "res": "CRMは5分未満のレイテンシで顧客データを受け取るようになり、リアルタイムの与信キャンペーンの基盤を確立しました。この取り組みは、チームへの知見共有によりIBMer Appreciation Awardで表彰されました。",
      "metrics": [
       "D+1 → 5分未満",
       "MQ経由でメインフレーム統合",
       "Camelエンドポイント",
       "IBMer Appreciation"
      ],
      "stack": [
       "Hadoop",
       "Flume",
       "Kafka",
       "Storm",
       "Elasticsearch",
       "Apache Pig",
       "Hive",
       "Impala",
       "Apache Camel",
       "Java",
       "Control-M"
      ]
     },
     {
      "r": "ソフトウェアエンジニア · Martechモニタリング · Amazon API",
      "per": "2017年",
      "prob": "パブリッシャー（広告を表示するメディアとアカウント）は、キャンペーンのレイテンシ（応答の遅延）とパフォーマンスをリアルタイムで把握する必要がありました。それがなければ、在庫判断や入札（オークションで広告ごとに支払う額）の調整が数時間から数日遅れていました。",
      "dec": "AmazonのAPIと連携し、リアルタイムでレイテンシとパフォーマンスを測定するNode.jsのモニタリングアプリケーションを開発し、重要指標を自動追跡するチャットボットで補完しました。",
      "res": "顧客はその日のうちに指標を追跡できるようになり、自動化されたレイテンシ・パフォーマンス監視により、キャンペーン調整の判断が当日中に行われるようになりました。",
      "metrics": [
       "Amazon API連携",
       "ライブダッシュボード",
       "モニタリングチャットボット",
       "レイテンシ監視"
      ],
      "stack": [
       "Node.js",
       "AWS",
       "Amazon API",
       "JavaScript",
       "Chart.js"
      ]
     }
    ],
    "arch": [
     [
      "メインフレーム",
      "MQキュー · IBM MQ"
     ],
     [
      "NRT",
      "Flume · Kafka · Storm"
     ],
     [
      "バッチ",
      "Control-M · Pig · Hive"
     ],
     [
      "インデックス",
      "Elasticsearch · HBase"
     ],
     [
      "API",
      "Apache Camel"
     ],
     [
      "CRM",
      "Santander · 5分未満のデータ"
     ]
    ],
    "stat3": [
     {
      "v": "D+1 → 5分未満",
      "l": "準リアルタイムアーキテクチャ導入後のSantander CRMデータレイテンシ"
     },
     {
      "v": "IBMer Award",
      "l": "チームへのビッグデータ・Hadoopの知見共有によるIBMer Appreciation"
     },
     {
      "v": "NRT",
      "l": "準リアルタイム: 本番稼働するFlume → Kafka → Storm → Elasticsearch"
     }
    ],
    "layers": [
     {
      "icon": "🗄️",
      "title": "メインフレーム · IBM MQ",
      "desc": "メインフレーム（銀行の中核を担う中央のレガシーコンピュータ）は、トランザクションイベントをメッセージキュー（IBM MQ）に発行します。この連携はメインフレームに触れず、そのキューから読み取るだけで、中核システムの安定性を維持します。"
     },
     {
      "icon": "⚡",
      "title": "NRT · Flume + Kafka + Storm",
      "desc": "FlumeがMQキューからメッセージを取得し、Kafkaが耐久性のあるバッファとして機能し、Stormがミリ秒単位のレイテンシでイベントをストリーム処理してからElasticsearchにインデックス化します。"
     },
     {
      "icon": "⚙️",
      "title": "バッチ · Control-M + Pig + Hive",
      "desc": "Control-Mが夜間バッチジョブをオーケストレーションします。Apache Pigが過去データを変換し、HiveとImpalaがSQL経由でアナリティクスとレポートに公開します。"
     },
     {
      "icon": "🔍",
      "title": "Elasticsearch · HBase",
      "desc": "CRMでの高速な顧客プロファイル検索（100ms未満）にはElasticsearch。NRTには不要だがアナリティクスには必要なトランザクション履歴にはHBase。"
     },
     {
      "icon": "🎯",
      "title": "Apache Camel · CRM向けAPI",
      "desc": "CamelはNRTとバッチのデータを統合したRESTfulエンドポイントを公開します。CRMはKafkaかHiveのどちらから来たかを意識せず、単一のAPIを利用します。"
     },
     {
      "icon": "🔌",
      "title": "Amazon Ads API",
      "desc": "Amazon Advertising APIとの連携により、パブリッシャーとキャンペーンごとのインプレッション、クリック、CTR（クリック率、広告100回表示あたりのクリック数）、レイテンシを収集。OAuth2認証（システム間の安全なログイン）でトークンを自動更新。"
     },
     {
      "icon": "⚡",
      "title": "Node.js · 収集",
      "desc": "Amazon APIを毎分ポーリングし、リアルタイムイベントのWebhookを処理するNode.jsサーバー。データはPostgreSQLに永続化。"
     },
     {
      "icon": "📊",
      "title": "ダッシュボード · Chart.js",
      "desc": "リアルタイムグラフを備えたWebインターフェース: パブリッシャーごとの過去のレイテンシ、インプレッション量、CTR。リロード不要の自動更新。"
     },
     {
      "icon": "🤖",
      "title": "チャットボット · 自動アラート",
      "desc": "設定されたしきい値（レイテンシがX以上、CTRがY未満）を監視し、ダッシュボードを見なくてもチームへ自動通知するボット。"
     }
    ],
    "codeNotes": [
     {
      "tab": "Flume Config",
      "label": "MQキューからの準リアルタイム取得用Flumeエージェント（設定）",
      "note": "これは準リアルタイムフローの入口です。Flumeはレガシーシステムのメッセージキュー（IBM MQ）を「リッスン」するコレクターです: 顧客イベントが届くとすぐにバッチで取得し、パイプラインの残りにイベントを配信するコンベアであるKafkaに届けます。これにより、翌日のバッチを待つ必要がなくなり、D+1ではなく数分でイベントの処理が始まります。"
     },
     {
      "tab": "Camel API",
      "label": "CRM向けにNRTとバッチを統合するApache Camelエンドポイント（Java DSL）",
      "note": "CRMは異なる場所にある2つの情報を必要としていました: 最新のトランザクション（Elasticsearchでリアルタイムに届く）と過去12か月の履歴（Hiveのバッチから来る）。Apache Camelは統合レイヤーとして機能します: 両方のソースを取得し、より新しいデータを優先してマージし、1つのレスポンスを返す単一のAPIルートを公開します。これにより、対応チームは1つのエンドポイントだけを問い合わせれば、2つの異なる世界から来たことを意識せずに顧客の完全なプロファイルを取得できます。"
     },
     {
      "tab": "Hive Analytics",
      "label": "Santander CRMの過去データ分析、ウィンドウ関数を用いたHive SQL（HQL）",
      "note": "すでにHiveにあるイベントを使い、このクエリは行動をビジネス機会に変換します。顧客と商品ごとに、インタラクション数、平均チケット単価、最後の活動日時、直近4週間の累積収益（時系列順に合計するローリングウィンドウ）を計算します。最後に、シンプルなルールに基づいて与信可能性を高・中・低に分類します。結果はパーソナライズされたキャンペーンに供給され、準リアルタイムフローによりデータが数分で届くため、提案は顧客のタイミングに追従します。"
     },
     {
      "tab": "Amazon API",
      "label": "Amazon Ads指標のリアルタイム収集（Node.js）",
      "note": "これはMarTechプロジェクトのコレクターです: 毎分Amazon Ads APIに問い合わせ、パブリッシャーごとにキャンペーンの数値（インプレッション、クリック、クリック率(CTR)、レイテンシ）を取得します。各読み取りは正確なタイムスタンプ付きでPostgreSQLデータベースに書き込まれます。継続的かつタイムスタンプ付きで収集することで、ほぼリアルタイムでパフォーマンスを追跡し、期間終了時のスナップショットだけを見るのではなく、後で1日を通じた推移を比較できます。"
     },
     {
      "tab": "Chatbot Alerts",
      "label": "自動モニタリングチャットボット（Node.js）",
      "note": "データを収集するだけでは、誰も適切なタイミングで確認しなければ意味がありません。この自動監視は毎分実行され、パブリッシャーごとに直近5分間の平均レイテンシとCTRを計算し、定義されたしきい値と比較します。レイテンシが上限を超えたり、CTRが低下しすぎたりすると、パブリッシャーと問題の数値とともにSlackでチームに自ら通知します。これにより「翌日のレポートで低下に気づく」から「発生した瞬間に通知される」へと変わります。"
     },
     {
      "tab": "PostgreSQL Analytics",
      "label": "Amazonパブリッシャーのパフォーマンス比較、ウィンドウ関数（SQL）",
      "note": "このクエリは、ビジネスが気にする問い、どのパブリッシャーが好調でどれが劣化しているかに答えます。30日分の指標を日次で集計し、3つの比較にウィンドウ関数を使用します: 各パブリッシャーのレイテンシを自身の平均と比較（インデックス100が正常）、当日の全パブリッシャー間でのCTRランキング、直近1週間と1か月のトレンド比較。単発の数値ではなく、結果は各パブリッシャーを文脈の中で示し、通常の変動と対応が必要な実際の問題を区別します。"
     }
    ],
    "faq": [
     {
      "q": "なぜKafkaを直接MQに接続せずFlumeを使ったのですか?",
      "a": "IBM MQからの抽出とKafkaによる配信を分離しました。MQの読み取りにはJMSなどの互換クライアントやコネクターが必要です。アダプターはメッセージをパイプラインの仕様へ変換し、障害や再配信を処理します。"
     },
     {
      "q": "Apache Camelとは何で、なぜ選ばれたのですか?",
      "a": "Camelはエンタープライズ統合パターンを実装する統合フレームワークです。CRMには、変換・ルーティング・エラー処理を伴う2つのソース（ESとHive）を統合する単一のAPIが必要だったため選ばれました。Camelは統合をゼロから作り直すことなく、宣言的なコードでこれらすべてを実現します。"
     },
     {
      "q": "IBMer Appreciation Awardとは何でしたか?",
      "a": "割り当てられた責務を超えた影響に対して、チームが正式に授与する社内表彰です。NRT連携の納品に加え、ドキュメント作成、ペアプログラミング、技術セッションを通じて、プロジェクトの他のIBM社員にHadoopとビッグデータエコシステムの知見を積極的に共有しました。チームはプロジェクト終了時にこの表彰を正式に授与しました。"
     },
     {
      "q": "なぜこのプロジェクトにNode.jsを使ったのですか?",
      "a": "Node.jsは、複数のAPIを同時に扱う重いI/Oに最適です。そのイベントループモデルは、ブロッキングなしで数百の並列リクエストを処理できます。数十のパブリッシャーに対して毎分Amazon APIをポーリングするシステムにとって、Node.jsの非同期I/OはAPIの並行処理に適しています。ただし、PythonやJavaより高性能だと示すには同条件のベンチマークが必要です。"
     },
     {
      "q": "チャットボットのビジネスへの影響はどのようなものでしたか?",
      "a": "以前は、問題を特定するためにチームがダッシュボードを手動で確認する必要がありました。チャットボットはこのロジックを逆転させました: 能動的な監視を求める代わりに、システムが能動的に通知するようになりました。パブリッシャーは異常発生から1分未満でアラートを受け取るようになり、影響がすでに大きくなった数時間後に発見することがなくなりました。"
     },
     {
      "q": "Amazon Ads APIを大規模に連携する技術的課題は何でしたか?",
      "a": "Amazon Ads APIは、パブリッシャー・エンドポイント・時間枠ごとに厳格なレート制限を課しています。30以上のパブリッシャーが同時にポーリングすると、制限は容易に超過していました。解決策は、Node.jsでの指数バックオフ付きリトライとサーキットブレーカーを備えたキューでした: あるパブリッシャーがレート制限に達すると、システムは他に影響を与えることなく待機・再試行し、1分サイクルを実現しました。"
     }
    ]
   }
  },
  "app": {
   "sub": "INGESTÃO NEAR REAL-TIME",
   "h": "O dado que chegava amanhã, <em>em 5 minutos.</em>",
   "d": "Simulação da ingestão near real-time do CRM Santander: fluxo Kafka → Flume → Hive, catálogo das camadas de ingestão e alertas de atraso de fila. Simulação didática, sem dados de clientes."
  },
  "metrics": [
   {
    "v": "D+1 → < 5 min",
    "l": "evolução da integração com o CRM"
   },
   {
    "v": "NRT",
    "l": "eventos quase em tempo real"
   },
   {
    "v": "Amazon Ads",
    "l": "indicadores, dashboards e KPI Bot"
   },
   {
    "v": "Reconhecimento",
    "l": "IBMer Appreciation"
   }
  ],
  "stack": [
   "Hadoop",
   "Apache Kafka",
   "Flume",
   "Hive",
   "Apache Camel",
   "Control-M",
   "Java"
  ],
  "demos": [
   {
    "kind": "app",
    "t": "NRT Integration · IBM · Santander",
    "d": "Pipeline NRT ao vivo: envie um evento CRM e veja cada hop (Mainframe→MQ→Flume→Kafka→Storm→ES→Camel) com latência por salto, D+1 → < 5min, 288× mais rápido.",
    "u": "ibm-crm-integration.html",
    "btn": "Abrir integração →"
   },
   {
    "kind": "app",
    "t": "Projeto MarTech · APIs Amazon",
    "d": "Reconstrução técnica do monitoramento de publishers: CTR, ROAS e latência em cenário sintético, chatbot de KPI e série temporal de impressões. Projeto apresentado dentro da experiência IBM.",
    "u": "jellyfish-martech-app.html",
    "btn": "Abrir analytics →"
   }
  ],
  "stints": [
   {
    "r": "Big Data Developer · projeto CRM Santander",
    "per": "2017",
    "prob": "O CRM do Santander (o sistema que a equipe usa para atender e ofertar aos clientes) recebia os dados com um dia de atraso (o chamado D+1): eles chegavam num processamento em lote durante a noite e já estavam desatualizados na hora do atendimento, o que impedia ofertas personalizadas no momento.",
    "dec": "Foi implantada a ingestão near real-time a partir do mainframe via fila MQ, com Flume → Kafka → Storm → Elasticsearch para o fluxo NRT, complementada por processamento batch com Control-M, Pig, Hive e Impala para o histórico. Os endpoints foram expostos via Apache Camel para consumo pelo CRM.",
    "res": "O CRM passou a receber dados de clientes com latência inferior a 5 minutos, estabelecendo a base para campanhas de crédito em tempo real. O trabalho foi reconhecido com o IBMer Appreciation Award pelo compartilhamento de expertise com a equipe.",
    "metrics": [
     "D+1 → < 5min",
     "mainframe integrado via MQ",
     "endpoints Camel",
     "IBMer Appreciation"
    ],
    "stack": [
     "Hadoop",
     "Flume",
     "Kafka",
     "Storm",
     "Elasticsearch",
     "Apache Pig",
     "Hive",
     "Impala",
     "Apache Camel",
     "Java",
     "Control-M"
    ]
   },
   {
    "r": "Engenheira de Software · Monitoramento Martech · APIs Amazon",
    "per": "2017",
    "prob": "Os publishers (os veículos e contas que exibem os anúncios) precisavam enxergar em tempo real a latência (o atraso das respostas) e o desempenho das campanhas. Sem isso, as decisões de estoque e o ajuste do bid (o lance pago por anúncio no leilão) atrasavam horas ou dias.",
    "dec": "Foram desenvolvidas aplicações de monitoramento em Node.js integradas às APIs da Amazon para medição de latência e performance em tempo real, complementadas por um chatbot de acompanhamento automático de métricas críticas.",
    "res": "Os clientes passaram a acompanhar as métricas do próprio dia, com monitoramento automatizado de latência e performance e decisões de ajuste de campanha realizadas no mesmo dia.",
    "metrics": [
     "APIs Amazon integradas",
     "dashboards ao vivo",
     "chatbot de monitoramento",
     "latência monitorada"
    ],
    "stack": [
     "Node.js",
     "AWS",
     "Amazon API",
     "JavaScript",
     "Chart.js"
    ]
   }
  ],
  "arch": [
   [
    "Mainframe",
    "fila MQ · IBM MQ"
   ],
   [
    "NRT",
    "Flume · Kafka · Storm"
   ],
   [
    "Batch",
    "Control-M · Pig · Hive"
   ],
   [
    "Índice",
    "Elasticsearch · HBase"
   ],
   [
    "API",
    "Apache Camel"
   ],
   [
    "CRM",
    "Santander · dados < 5min"
   ]
  ],
  "stat3": [
   {
    "v": "D+1 → < 5min",
    "l": "latência de dados do CRM Santander após arquitetura near real-time"
   },
   {
    "v": "IBMer Award",
    "l": "IBMer Appreciation por compartilhar expertise em Big Data Hadoop com o time"
   },
   {
    "v": "NRT",
    "l": "near real-time: Flume → Kafka → Storm → Elasticsearch em produção"
   }
  ],
  "layers": [
   {
    "icon": "🗄️",
    "title": "Mainframe · IBM MQ",
    "desc": "O mainframe (o computador central e legado que roda o coração do banco) emite os eventos de transações numa fila de mensagens (IBM MQ). A integração não toca o mainframe, apenas lê dessa fila, preservando a estabilidade do sistema central."
   },
   {
    "icon": "⚡",
    "title": "NRT · Flume + Kafka + Storm",
    "desc": "Flume capta mensagens da fila MQ, Kafka funciona como buffer durável e Storm processa eventos em stream com latência de milissegundos antes de indexar no Elasticsearch."
   },
   {
    "icon": "⚙️",
    "title": "Batch · Control-M + Pig + Hive",
    "desc": "Control-M orquestra os jobs batch noturnos. Apache Pig transforma os dados históricos, Hive e Impala expõem via SQL para analytics e relatórios."
   },
   {
    "icon": "🔍",
    "title": "Elasticsearch · HBase",
    "desc": "Elasticsearch para busca rápida de perfil de cliente no CRM (< 100ms). HBase para histórico de transações que o NRT não precisa, mas analytics sim."
   },
   {
    "icon": "🎯",
    "title": "Apache Camel · API para CRM",
    "desc": "Camel expõe endpoints RESTful unificando dados NRT e batch. O CRM consome uma API única, sem saber se o dado veio do Kafka ou do Hive."
   },
   {
    "icon": "🔌",
    "title": "Amazon Ads API",
    "desc": "Integração com a Amazon Advertising API para coletar impressões, cliques, CTR (a taxa de cliques, quantos cliques a cada 100 anúncios exibidos) e latência por publisher e campanha. Autenticação OAuth2 (login seguro entre sistemas) com renovação automática de tokens."
   },
   {
    "icon": "⚡",
    "title": "Node.js · coleta",
    "desc": "Servidor Node.js fazendo polling das APIs Amazon a cada minuto e processando webhooks de eventos em tempo real. Dados persistidos no PostgreSQL."
   },
   {
    "icon": "📊",
    "title": "Dashboard · Chart.js",
    "desc": "Interface web com gráficos em tempo real: latência histórica, volume de impressões e CTR por publisher. Atualização automática sem reload."
   },
   {
    "icon": "🤖",
    "title": "Chatbot · alertas automáticos",
    "desc": "Bot que monitora os thresholds configurados (latência acima de X, CTR abaixo de Y) e notifica automaticamente o time, sem precisar olhar o dashboard."
   }
  ],
  "code": [
   {
    "tab": "Flume Config",
    "label": "Agente Flume para captura near real-time de fila MQ (configuração)",
    "code": "# Agente Flume: IBM MQ → Kafka (near real-time)\nsantander.sources  = mq_source\nsantander.channels = kafka_channel\nsantander.sinks    = kafka_sink\n\nsantander.sources.mq_source.type = org.apache.flume.source.ibmmq.IBMMQSource\nsantander.sources.mq_source.hostName   = mq-santander-prod.ibm.com\nsantander.sources.mq_source.port       = 1414\nsantander.sources.mq_source.queueManager = QMGR.SANTANDER.PROD\nsantander.sources.mq_source.queue        = CRM.EVENTS.IN\nsantander.sources.mq_source.batchSize    = 1000\n\nsantander.channels.kafka_channel.type     = org.apache.flume.channel.kafka.KafkaChannel\nsantander.channels.kafka_channel.topic    = santander.crm.events\nsantander.channels.kafka_channel.brokers  = kafka01:9092,kafka02:9092\n\nsantander.sinks.kafka_sink.channel = kafka_channel\n# Resultado: D+1 → < 5 minutos de latência",
    "note": "Este é o ponto de entrada do fluxo near real-time. O Flume é um coletor que fica \"escutando\" a fila de mensagens do sistema legado (IBM MQ): assim que um evento de cliente chega, ele o captura em lotes e entrega ao Kafka, a esteira que distribui esses eventos para o restante do pipeline. É o que substitui a espera pelo lote do dia seguinte: em vez de D+1, o evento começa a ser processado em minutos."
   },
   {
    "tab": "Camel API",
    "label": "Endpoint Apache Camel unificando NRT e batch para o CRM (Java DSL)",
    "code": "// Apache Camel: unifica Elasticsearch (NRT) e Hive (batch) em uma API REST\nfrom(\"rest:get:/crm/customer/{cpf}\")\n    .routeId(\"customer-profile-unified\")\n    .to(\"direct:enrich-from-es\")       // Dados NRT, última transação\n    .to(\"direct:enrich-from-hive\")     // Histórico batch, últimos 12 meses\n    .process(exchange -> {\n        Map<String, Object> nrt  = exchange.getProperty(\"es_data\",  Map.class);\n        Map<String, Object> hist = exchange.getProperty(\"hive_data\", Map.class);\n        // Merge NRT + histórico em resposta unificada\n        Map<String, Object> unified = new HashMap<>(hist);\n        unified.putAll(nrt);  // NRT sobrescreve se mais recente\n        exchange.getIn().setBody(unified);\n    })\n    .marshal().json()\n    .setHeader(\"Content-Type\", constant(\"application/json\"));\n// CRM consome uma API única, latência < 200ms",
    "note": "O CRM precisava de duas informações que viviam em lugares diferentes: a última transação (que chega em tempo real, no Elasticsearch) e o histórico dos últimos 12 meses (que vem do lote, no Hive). O Apache Camel funciona como um integrador: expõe uma única rota de API que busca as duas fontes, combina os resultados dando prioridade ao dado mais recente e devolve uma resposta só. Assim, o time de atendimento consulta um endereço apenas e recebe o perfil completo do cliente, sem saber (nem precisar saber) que veio de dois mundos distintos."
   },
   {
    "tab": "Hive Analytics",
    "label": "Análise histórica CRM Santander, Hive SQL com funções de janela (HQL)",
    "code": "-- Análise de comportamento de clientes para campanha de crédito\n-- Dados persistidos via batch Control-M: Flume → Kafka → HDFS → Hive\n\nSELECT\n    cpf_hash,\n    produto,\n    COUNT(*)                                            AS qtd_interacoes_90d,\n    AVG(valor_transacao)                                AS ticket_medio,\n    SUM(CASE WHEN canal = 'NRT' THEN 1 ELSE 0 END)    AS eventos_nrt,\n    MAX(data_evento)                                    AS ultima_interacao,\n    -- Janela deslizante: crescimento de transações nas últimas 4 semanas\n    SUM(valor_transacao) OVER (\n        PARTITION BY cpf_hash, produto\n        ORDER BY TRUNC(data_evento, 'WW')\n        ROWS BETWEEN 3 PRECEDING AND CURRENT ROW\n    )                                                   AS receita_4sem_rolling,\n    -- Score de propensidade ao crédito\n    CASE\n        WHEN COUNT(*) > 10 AND AVG(valor_transacao) > 5000 THEN 'ALTA'\n        WHEN COUNT(*) > 5                                   THEN 'MEDIA'\n        ELSE                                                     'BAIXA'\n    END                                                 AS propensidade_credito\nFROM crm_eventos_historico\nWHERE dt_particao >= DATE_SUB(CURRENT_DATE, 90)  -- partition pruning\n  AND status_evento = 'CONCLUIDO'\nGROUP BY cpf_hash, produto, data_evento, valor_transacao, canal\nHAVING COUNT(*) >= 2\nORDER BY ticket_medio DESC\nLIMIT 10000;\n-- Alimenta campanha de crédito personalizado < 5min após ingestão NRT",
    "note": "Com os eventos já no Hive, esta consulta transforma comportamento em oportunidade de negócio. Para cada cliente e produto, calcula número de interações, ticket médio, quando foi a última movimentação e a receita acumulada nas últimas 4 semanas (uma janela deslizante, que soma respeitando a ordem do tempo). No fim, classifica a propensidade ao crédito em alta, média ou baixa segundo regras simples. O resultado alimenta campanhas personalizadas, e como o dado chega em minutos pelo fluxo near real-time, a oferta acompanha o momento do cliente."
   },
   {
    "tab": "Amazon API",
    "label": "Coleta de métricas Amazon Ads em tempo real (Node.js)",
    "code": "const axios = require(\"axios\");\nconst { Pool } = require(\"pg\");\nconst db = new Pool({ connectionString: process.env.DATABASE_URL });\n\nasync function collectPublisherMetrics(publisherId) {\n    const res = await axios.get(\"https://advertising-api.amazon.com/v2/reports\", {\n        headers: { Authorization: \"Bearer \" + await getAccessToken() },\n        params: {\n            publisherId, reportDate: new Date().toISOString().slice(0,10),\n            metrics: \"impressions,clicks,ctr,latencyMs\"\n        }\n    });\n    const { impressions, clicks, ctr, latencyMs } = res.data;\n    await db.query(\n        \"INSERT INTO publisher_metrics (publisher_id, impressions, clicks, ctr, latency_ms, collected_at) VALUES ($1,$2,$3,$4,$5,NOW())\",\n        [publisherId, impressions, clicks, ctr, latencyMs]\n    );\n    return { publisherId, latencyMs, ctr };\n}\n\n// Executa a cada 60 segundos\nsetInterval(() => PUBLISHERS.forEach(collectPublisherMetrics), 60_000);",
    "note": "Este é o coletor do projeto MarTech: a cada minuto ele consulta a API da Amazon Ads e busca, para cada publisher, os números da campanha, impressões, cliques, taxa de clique (CTR) e latência. Cada leitura é gravada num banco PostgreSQL com a hora exata. Coletar de forma contínua e datada é o que permite acompanhar a performance em tempo quase real e, depois, comparar a evolução ao longo do dia, em vez de olhar só um retrato do fim do período."
   },
   {
    "tab": "Chatbot Alerts",
    "label": "Chatbot de monitoramento automático (Node.js)",
    "code": "const { IncomingWebhook } = require(\"@slack/webhook\");\nconst webhook = new IncomingWebhook(process.env.SLACK_WEBHOOK_URL);\n\nasync function checkThresholdsAndAlert() {\n    const metrics = await db.query(\n        \"SELECT publisher_id, AVG(latency_ms) as avg_lat, AVG(ctr) as avg_ctr \" +\n        \"FROM publisher_metrics WHERE collected_at > NOW() - INTERVAL '5 minutes' \" +\n        \"GROUP BY publisher_id\"\n    );\n    for (const row of metrics.rows) {\n        if (row.avg_lat > LATENCY_THRESHOLD_MS) {\n            await webhook.send({\n                text: \":warning: *Alerta de latência*\",\n                blocks: [{type:\"section\", text:{type:\"mrkdwn\",\n                    text: \"Publisher *\" + row.publisher_id + \"*, Latência: \" +\n                          Math.round(row.avg_lat) + \"ms (limite: \" + LATENCY_THRESHOLD_MS + \"ms)\"}}]\n            });\n        }\n        if (row.avg_ctr < CTR_THRESHOLD) {\n            await webhook.send({ text: \":chart_with_downwards_trend: CTR baixo: \" + row.publisher_id });\n        }\n    }\n}\nsetInterval(checkThresholdsAndAlert, 60_000);",
    "note": "Coletar dados não basta se ninguém olha na hora certa. Este vigia automático roda a cada minuto, calcula a latência e o CTR médios dos últimos 5 minutos por publisher e compara com os limites definidos. Se a latência passa do teto ou o CTR cai demais, ele mesmo avisa a equipe no Slack, com o publisher e o número do problema. É o que troca \"descobrir a queda no relatório de amanhã\" por \"ser avisado no momento em que ela acontece\"."
   },
   {
    "tab": "PostgreSQL Analytics",
    "label": "Performance comparada de publishers Amazon, window functions (SQL)",
    "code": "-- Análise de performance de publishers Amazon, PostgreSQL\n-- Identifica publishers acima/abaixo da própria média histórica\n\nWITH publisher_daily AS (\n    SELECT\n        publisher_id,\n        DATE_TRUNC('day', collected_at)  AS day,\n        AVG(latency_ms)                  AS avg_latency,\n        AVG(ctr)                         AS avg_ctr,\n        SUM(impressions)                 AS total_impressions\n    FROM publisher_metrics\n    WHERE collected_at >= NOW() - INTERVAL '30 days'\n    GROUP BY publisher_id, DATE_TRUNC('day', collected_at)\n)\nSELECT\n    publisher_id,\n    day,\n    ROUND(avg_latency, 1)               AS latency_ms,\n    ROUND(avg_ctr * 100, 3)             AS ctr_pct,\n    total_impressions,\n    -- Latência relativa à média do próprio publisher (índice 100 = normal)\n    ROUND(avg_latency\n        / AVG(avg_latency) OVER (PARTITION BY publisher_id) * 100, 1) AS latency_index,\n    -- Ranking de CTR entre todos os publishers no dia\n    RANK() OVER (PARTITION BY day ORDER BY avg_ctr DESC)               AS ctr_rank,\n    -- Tendência de latência (7d vs 30d)\n    ROUND(AVG(avg_latency) OVER (PARTITION BY publisher_id ORDER BY day\n          ROWS BETWEEN 6 PRECEDING AND CURRENT ROW)\n        - AVG(avg_latency) OVER (PARTITION BY publisher_id), 1)        AS latency_trend_7d\nFROM publisher_daily\nWHERE total_impressions > 1000\nORDER BY day DESC, ctr_rank;",
    "note": "Esta consulta responde à pergunta que interessa ao negócio: quais publishers estão indo bem e quais estão degradando? Ela agrupa 30 dias de métricas por dia e usa window functions para três comparações: a latência de cada publisher frente à própria média (índice 100 = normal), o ranking de CTR entre todos no dia, e a tendência da última semana contra o mês. Em vez de números soltos, o resultado mostra cada publisher em contexto, o que separa uma variação normal de um problema real que merece ação."
   }
  ],
  "faq": [
   {
    "q": "Por que usar Flume em vez de conectar Kafka direto ao MQ?",
    "a": "O fluxo separava a extração do IBM MQ e a distribuição no Kafka. A leitura do MQ exige um cliente ou conector compatível, por exemplo via JMS; Kafka não consome uma fila MQ apenas por compartilhar uma rede. O adaptador transforma as mensagens no contrato esperado pelo pipeline e precisa tratar falhas e reentregas."
   },
   {
    "q": "O que é Apache Camel e por que foi escolhido?",
    "a": "Camel é um framework de integração que implementa os Enterprise Integration Patterns. Foi escolhido porque o CRM precisava de uma API única que unificava 2 fontes (ES e Hive) com transformações, roteamento e tratamento de erros. Camel entrega tudo isso com código declarativo, sem reinventar a roda de integração."
   },
   {
    "q": "O que foi o IBMer Appreciation Award?",
    "a": "Um reconhecimento interno formalizado pelo time pelo impacto além das responsabilidades atribuídas. Além de entregar a integração NRT, compartilhei ativamente conhecimento de Hadoop e ecossistema Big Data com os demais IBMers do projeto via documentação, pair programming e sessões técnicas. O time formalizou o reconhecimento ao final do projeto."
   },
   {
    "q": "Por que Node.js para esse projeto?",
    "a": "Node.js é ideal para I/O intenso com múltiplas APIs simultâneas, seu modelo event-loop processa centenas de requests paralelos sem bloqueio. Para um sistema que faz polling de APIs Amazon a cada minuto para dezenas de publishers ao mesmo tempo, o I/O assíncrono do Node.js atende bem à concorrência entre APIs. Isso não demonstra superioridade sobre Python ou Java: essa comparação exige benchmark equivalente."
   },
   {
    "q": "Qual o impacto do chatbot para o negócio?",
    "a": "Antes, o time precisava consultar o dashboard manualmente para identificar problemas. O chatbot inverteu essa lógica: em vez de exigir monitoramento ativo, o sistema passou a notificar proativamente. Publishers passaram a receber alertas em menos de 1 minuto após anomalias, em vez de descobri-las horas depois, quando o impacto já era maior."
   },
   {
    "q": "Qual era o desafio técnico de integrar a Amazon Ads API em escala?",
    "a": "A Amazon Ads API impõe rate limits rigorosos por publisher, por endpoint e por janela de tempo. Com mais de 30 publishers em polling simultâneo, os limites eram facilmente ultrapassados. A solução foi uma fila com retry exponencial e circuit breaker em Node.js: quando um publisher atingia o rate limit, o sistema aguardava e retentava sem impactar os demais, viabilizando o ciclo de 1 minuto."
   }
  ],
  "heroImg": "assets/gallery-signatures/jen-leadership-ai.webp",
  "heroGrad": "linear-gradient(125deg,#001d6c,#0f62fe)"
 },
 {
  "f": "fin",
  "flag": "es",
  "n": "Santander",
  "dom": "santander.com.br",
  "per": "2017",
  "r": "Engenheira de Dados",
  "d": "No Santander, construí e automatizei pipelines batch que levavam dados de bancos relacionais para o ecossistema corporativo de Big Data. Programei o processamento distribuído e a disponibilização analítica, incluindo os controles de acesso e segurança da plataforma.",
  "heroChips": [
   "Cloudera e Ecossistema Hadoop",
   "Sqoop · Spark · Shell",
   "Processamento de Dados em Batch",
   "Setor Financeiro · Santander"
  ],
  "t": {
   "en": {
    "r": "Data Engineer",
    "d": "Batch pipeline engineering in the Santander Big Data environment: automated ingestion from relational databases into Hadoop with Sqoop, processing with Spark and analytical availability with Hive and Impala on the Cloudera platform.",
    "heroChips": [
     "Cloudera and Hadoop Ecosystem",
     "Sqoop · Spark · Shell",
     "Batch Data Processing",
     "Financial Sector · Santander"
    ],
    "app": {
     "sub": "BIG DATA PIPELINE · SANTANDER",
     "h": "Ingestion that runs on its own, <em>every night.</em>",
     "d": "Simulation of the Santander Big Data environment: batch ingestion of relational tables into Hadoop, processing with Spark and analytical queries with Hive and Impala. Didactic simulation, with fictitious tables and data."
    },
    "metrics": [
     "automated batch ingestion",
     "Sqoop → HDFS → Spark",
     "Hive and Impala",
     "Cloudera · Sentry · Kerberos"
    ],
    "demos": [
     {
      "kind": "app",
      "t": "Santander Big Data Pipeline",
      "d": "Batch pipeline: pick the source tables and watch each stage (Sqoop → HDFS → Spark → Hive/Impala) with logs, reconciliation and reprocessing. Tables, volumes and results entirely fictitious.",
      "u": "santander-big-data-pipeline.html",
      "btn": "Open pipeline →"
     }
    ],
    "stints": [
     {
      "r": "Data Engineer · Santander Big Data",
      "per": "2017",
      "prob": "Santander new Big Data operating model required standardized, reliable batch pipelines to move datasets from relational systems into the Hadoop ecosystem, with integrity, traceability and reprocessing capability.",
      "dec": "Batch ingestion was automated with Sqoop (the tool that copies tables from relational databases like Oracle into HDFS), with incremental strategies, partitioning and control of the last processed position. After ingestion, data was processed with Apache Spark: type and field standardization, handling of invalid records and preparation for analytical queries. Results were persisted in HDFS and made available through Hive tables, with Impala serving lower-latency queries. The environment ran on the Cloudera platform, with Sentry and Kerberos for authorization, authentication and security. A reliable pipeline needed to identify what had already been processed, restart from a known point and prevent a partial run from contaminating the next result.",
      "res": "Standardized ingestion with less reliance on manual execution, load traceability, reprocessing capability and data prepared for querying in the bank Hadoop environment. The experience deepened specialization in distributed processing applied to the financial sector.",
      "metrics": [
       "automated batch ingestion",
       "Sqoop → HDFS → Spark",
       "Hive and Impala",
       "Cloudera · Sentry · Kerberos"
      ],
      "stack": [
       "Sqoop",
       "Apache Spark",
       "Hadoop",
       "HDFS",
       "Hive",
       "Impala",
       "Cloudera",
       "Shell Script",
       "Sentry",
       "Kerberos"
      ]
     }
    ],
    "arch": [
     [
      "Sources",
      "relational tables · Oracle"
     ],
     [
      "Sqoop",
      "incremental batch ingestion"
     ],
     [
      "Spark",
      "standardization · cleaning"
     ],
     [
      "HDFS · Hive",
      "storage and query"
     ],
     [
      "Impala",
      "lower-latency query"
     ],
     [
      "Security",
      "Cloudera · Sentry · Kerberos"
     ]
    ],
    "stat3": [
     {
      "v": "Sqoop → Hadoop",
      "l": "automated batch ingestion from relational databases into the Hadoop ecosystem"
     },
     {
      "v": "Spark + Hive/Impala",
      "l": "distributed processing and analytical querying over the ingested data"
     },
     {
      "v": "reprocessable",
      "l": "last-position control, with reprocessing and failure recovery"
     }
    ],
    "layers": [
     {
      "icon": "🗄️",
      "title": "Sources · transactional Oracle",
      "desc": "The bank transactional tables in relational databases like Oracle. Sqoop connects via JDBC and extracts incrementally, with no impact on the production database."
     },
     {
      "icon": "⚙️",
      "title": "Sqoop · batch ingestion",
      "desc": "Sqoop coordinates parallel ingestion with multiple mappers. Partitioning by key and control of the last processed position ensure balanced loads and traceable incremental loads."
     },
     {
      "icon": "⚡",
      "title": "Spark · transformation",
      "desc": "Spark jobs standardize types and fields, handle invalid records and prepare raw data in analytical format for Hive and Impala."
     },
     {
      "icon": "🏗️",
      "title": "Cloudera · Hadoop",
      "desc": "Cloudera platform for cluster monitoring, job scheduling and resource management, with Sentry and Kerberos for authorization and authentication."
     },
     {
      "icon": "📊",
      "title": "Hive + Impala · analytical consumption",
      "desc": "Processed data is made available in Hive tables, with Impala serving lower-latency analytical queries for the bank areas."
     }
    ],
    "codeNotes": [
     {
      "tab": "Sqoop Batch",
      "label": "Automatic ingestion of Oracle tables → HDFS with Sqoop (Shell)",
      "note": "This script brings data from the Oracle database into the Hadoop ecosystem, every night, with no intervention. The important detail is \"incremental\": instead of copying the entire table on every run, Sqoop keeps a marker of the last update and brings only what changed since then, drastically reducing the volume transferred. The result is written already in Parquet format, compressed and split across 8 parallel processes, and every run leaves a traceable log."
     },
     {
      "tab": "Spark Transform",
      "label": "Spark transformation of ingested data (PySpark)",
      "note": "After ingestion, raw data still is not fit for analysis. This Spark step does the cleaning and standardization: discards cancelled entries, converts dollar values to reais using the exchange rate, creates the accounting-period field (the fiscal month), normalizes the cost-center code and removes duplicates. The result is written to a refined layer, partitioned by month, ready for querying. This is the step that turns \"copied data\" into \"trustworthy data\"."
     },
     {
      "tab": "Impala Report",
      "label": "Analytical report via Impala, margins by cost center (SQL)",
      "note": "This is where processed data becomes business information. This query runs on Impala, the engine that answers SQL fast over Hadoop, and calculates, by cost center and month, revenue, cost, contribution margin and the year-to-date total. Margin comes out directly in the result (revenue minus cost, divided by revenue), and the running total uses a window function, a SQL feature that sums row by row respecting time order. The analyst receives the finished dashboard with no need to export and recalculate in a spreadsheet."
     }
    ],
    "faq": [
     {
      "q": "How did incremental ingestion work?",
      "a": "Incremental loads use a check column and the previous run’s boundary, with Sqoop append or lastmodified mode as appropriate. Orchestration must record the completed boundary and define replay behavior to avoid duplicates or lost changes. This is not automatic resumption from any interrupted row."
     },
     {
      "q": "Why Sqoop instead of a custom Python pipeline?",
      "a": "Sqoop was designed specifically to move data between relational databases and Hadoop efficiently. It has native parallelism, support for incremental checkpoints, JDBC type handling and built-in compression. For the Oracle → HDFS ingestion pattern, it is more robust and monitorable than custom Python code."
     },
     {
      "q": "How was the quality of data ingested by Sqoop guaranteed?",
      "a": "Every Sqoop job generates a record count at the end, validated against a COUNT(*) run directly on Oracle. A divergence above 0.1% triggers an alert and a re-run with a checkpoint from the point of failure. The subsequent Spark step applies additional schema and business-rule validations before promoting the data to the analytical layer."
     }
    ]
   },
   "es": {
    "r": "Ingeniera de Datos",
    "d": "Ingeniería de pipelines batch en el ambiente de Big Data de Santander: ingestas automatizadas de bases relacionales hacia Hadoop con Sqoop, procesamiento con Spark y disponibilización analítica con Hive e Impala en la plataforma Cloudera.",
    "heroChips": [
     "Cloudera y Ecosistema Hadoop",
     "Sqoop · Spark · Shell",
     "Procesamiento de Datos por Lotes",
     "Sector Financiero · Santander"
    ],
    "app": {
     "sub": "BIG DATA PIPELINE · SANTANDER",
     "h": "Ingesta que corre sola, <em>cada noche.</em>",
     "d": "Simulación del ambiente de Big Data de Santander: ingestas batch de tablas relacionales hacia Hadoop, procesamiento con Spark y consulta analítica con Hive e Impala. Simulación didáctica, con tablas y datos ficticios."
    },
    "metrics": [
     "ingestas batch automatizadas",
     "Sqoop → HDFS → Spark",
     "Hive e Impala",
     "Cloudera · Sentry · Kerberos"
    ],
    "demos": [
     {
      "kind": "app",
      "t": "Santander Big Data Pipeline",
      "d": "Pipeline batch: selecciona las tablas de origen y observa cada etapa (Sqoop → HDFS → Spark → Hive/Impala) con log, reconciliación y reprocesamiento. Tablas, volúmenes y resultados enteramente ficticios.",
      "u": "santander-big-data-pipeline.html",
      "btn": "Abrir pipeline →"
     }
    ],
    "stints": [
     {
      "r": "Ingeniera de Datos · Big Data Santander",
      "per": "2017",
      "prob": "El nuevo modelo operativo de Big Data de Santander exigía pipelines batch estandarizados y confiables para transportar conjuntos de datos de sistemas relacionales hacia el ecosistema Hadoop, con integridad, trazabilidad y capacidad de reprocesamiento.",
      "dec": "La ingesta por lotes (batch) se automatizó con Sqoop (la herramienta que copia tablas de bases relacionales como Oracle hacia HDFS), con estrategias incrementales, particionamiento y control de la última posición procesada. Después de la ingesta, los datos se procesaban con Apache Spark: estandarización de tipos y campos, tratamiento de registros inválidos y preparación para consulta analítica. Los resultados se persistían en HDFS y se disponibilizaban mediante tablas Hive, con Impala atendiendo consultas de menor latencia. El ambiente se operaba en la plataforma Cloudera, con Sentry y Kerberos para autorización, autenticación y seguridad. Un pipeline confiable necesitaba identificar lo que ya había sido procesado, reiniciar desde un punto conocido e impedir que una ejecución parcial contaminara el resultado siguiente.",
      "res": "Ingestas estandarizadas y con menor dependencia de ejecución manual, con trazabilidad de las cargas, capacidad de reprocesamiento y datos preparados para consulta en el ambiente Hadoop del banco. La experiencia profundizó la especialización en procesamiento distribuido aplicado al sector financiero.",
      "metrics": [
       "ingestas batch automatizadas",
       "Sqoop → HDFS → Spark",
       "Hive e Impala",
       "Cloudera · Sentry · Kerberos"
      ],
      "stack": [
       "Sqoop",
       "Apache Spark",
       "Hadoop",
       "HDFS",
       "Hive",
       "Impala",
       "Cloudera",
       "Shell Script",
       "Sentry",
       "Kerberos"
      ]
     }
    ],
    "arch": [
     [
      "Fuentes",
      "tablas relacionales · Oracle"
     ],
     [
      "Sqoop",
      "ingesta batch incremental"
     ],
     [
      "Spark",
      "estandarización · limpieza"
     ],
     [
      "HDFS · Hive",
      "almacenamiento y consulta"
     ],
     [
      "Impala",
      "consulta de menor latencia"
     ],
     [
      "Seguridad",
      "Cloudera · Sentry · Kerberos"
     ]
    ],
    "stat3": [
     {
      "v": "Sqoop → Hadoop",
      "l": "ingesta batch automatizada de bases relacionales hacia el ecosistema Hadoop"
     },
     {
      "v": "Spark + Hive/Impala",
      "l": "procesamiento distribuido y consulta analítica sobre los datos ingeridos"
     },
     {
      "v": "reprocesable",
      "l": "control de última posición, con reprocesamiento y recuperación de fallas"
     }
    ],
    "layers": [
     {
      "icon": "🗄️",
      "title": "Fuentes · Oracle transaccional",
      "desc": "Tablas transaccionales del banco en bases relacionales como Oracle. Sqoop conecta vía JDBC y extrae de forma incremental, sin impacto en la base de producción."
     },
     {
      "icon": "⚙️",
      "title": "Sqoop · ingesta batch",
      "desc": "Sqoop coordina la ingesta paralela con múltiples mappers. El particionamiento por clave y el control de la última posición procesada garantizan carga balanceada y cargas incrementales trazadas."
     },
     {
      "icon": "⚡",
      "title": "Spark · transformación",
      "desc": "Los jobs Spark estandarizan tipos y campos, tratan registros inválidos y preparan los datos brutos en formato analítico para Hive e Impala."
     },
     {
      "icon": "🏗️",
      "title": "Cloudera · Hadoop",
      "desc": "Plataforma Cloudera para monitoreo del clúster, programación de jobs y gestión de recursos, con Sentry y Kerberos para autorización y autenticación."
     },
     {
      "icon": "📊",
      "title": "Hive + Impala · consumo analítico",
      "desc": "Los datos procesados quedan disponibles en tablas Hive, con Impala atendiendo consultas analíticas de menor latencia para las áreas del banco."
     }
    ],
    "codeNotes": [
     {
      "tab": "Sqoop Batch",
      "label": "Ingesta automática de tablas Oracle → HDFS con Sqoop (Shell)",
      "note": "Este script trae los datos de la base Oracle hacia el ecosistema Hadoop, cada noche, sin intervención. El detalle importante es el \"incremental\": en vez de copiar la tabla entera en cada ejecución, Sqoop guarda un marcador de la última actualización y trae solo lo que cambió desde entonces, lo que reduce drásticamente el volumen transferido. El resultado se graba ya en formato Parquet, comprimido y dividido entre 8 procesos paralelos, y cada ejecución deja un log trazable."
     },
     {
      "tab": "Spark Transform",
      "label": "Transformación Spark de los datos ingeridos (PySpark)",
      "note": "Después de la ingesta, el dato bruto todavía no sirve para análisis. Este paso en Spark hace la limpieza y la estandarización: descarta asientos cancelados, convierte valores de dólar a real usando la tasa de cambio, crea el campo de período contable (el mes fiscal), normaliza el código de centro de costo y elimina duplicados. El resultado se graba en una capa refinada, particionada por mes, lista para consulta. Es la etapa que transforma \"dato copiado\" en \"dato confiable\"."
     },
     {
      "tab": "Impala Report",
      "label": "Informe analítico vía Impala, márgenes por centro de costo (SQL)",
      "note": "Es aquí donde el dato tratado se convierte en información de negocio. Esta consulta corre en Impala, el motor que responde SQL rápido sobre Hadoop, y calcula, por centro de costo y por mes, ingreso, costo, margen de contribución y el acumulado del año. El margen sale directo en el resultado (ingreso menos costo, dividido por el ingreso), y la suma acumulada usa una window function, recurso de SQL que suma línea a línea respetando el orden del tiempo. El analista recibe el panel listo sin necesitar exportar y recalcular en una planilla."
     }
    ],
    "faq": [
     {
      "q": "¿Cómo funcionaba la ingesta incremental?",
      "a": "Las cargas incrementales usan una columna de control y el límite de la ejecución anterior, con append o lastmodified de Sqoop. La orquestación registra el límite completado y define la reejecución para evitar duplicados o pérdidas. No equivale a reanudar automáticamente en cualquier fila interrumpida."
     },
     {
      "q": "¿Por qué Sqoop en vez de un pipeline Python personalizado?",
      "a": "Sqoop fue diseñado específicamente para mover datos entre bases relacionales y Hadoop de forma eficiente. Tiene paralelismo nativo, soporte para checkpoints incrementales, manejo de tipos JDBC y compresión integrada. Para el patrón de ingesta Oracle → HDFS, es más robusto y monitoreable que código Python personalizado."
     },
     {
      "q": "¿Cómo se garantizaba la calidad de los datos ingeridos por Sqoop?",
      "a": "Cada job Sqoop genera un conteo de registros al final, validado contra un COUNT(*) ejecutado directamente en Oracle. Una divergencia superior a 0,1% dispara una alerta y una reejecución con checkpoint desde el punto de falla. El Spark posterior aplica validaciones adicionales de esquema y reglas de negocio antes de promover los datos a la capa analítica."
     }
    ]
   },
   "ja": {
    "r": "データエンジニア",
    "d": "Santanderのビッグデータ環境におけるバッチパイプラインエンジニアリング: Sqoopによるリレーショナルデータベースからのデータ取り込み自動化、Sparkによる処理、Cloudera基盤上のHiveとImpalaによる分析利用。",
    "heroChips": [
     "ClouderaとHadoopエコシステム",
     "Sqoop · Spark · Shell",
     "バッチデータ処理",
     "金融セクター · Santander"
    ],
    "app": {
     "sub": "ビッグデータパイプライン · SANTANDER",
     "h": "<em>毎晩</em>自動で稼働する取り込み。",
     "d": "Santanderのビッグデータ環境のシミュレーション: リレーショナルテーブルからHadoopへのバッチ取り込み、Sparkによる処理、HiveとImpalaによる分析クエリ。架空のテーブルとデータによる教育目的のシミュレーションです。"
    },
    "metrics": [
     "自動化されたバッチ取り込み",
     "Sqoop → HDFS → Spark",
     "HiveとImpala",
     "Cloudera · Sentry · Kerberos"
    ],
    "demos": [
     {
      "kind": "app",
      "t": "Santander Big Data Pipeline",
      "d": "バッチパイプライン: ソーステーブルを選択し、各段階（Sqoop → HDFS → Spark → Hive/Impala）をログ・照合・再処理とともに確認できます。テーブル、データ量、結果はすべて架空のものです。",
      "u": "santander-big-data-pipeline.html",
      "btn": "パイプラインを開く →"
     }
    ],
    "stints": [
     {
      "r": "データエンジニア · Santanderビッグデータ",
      "per": "2017年",
      "prob": "Santanderの新しいビッグデータ運用モデルは、整合性、トレーサビリティ、再処理能力を備えて、リレーショナルシステムからHadoopエコシステムへデータセットを移動する、標準化された信頼性の高いバッチパイプラインを必要としていました。",
      "dec": "バッチ取り込みはSqoop（OracleなどのリレーショナルデータベースからテーブルをコピーしてHDFSへ送るツール）で自動化され、増分戦略、パーティショニング、最後に処理した位置の管理を伴いました。取り込み後、データはApache Sparkで処理されました: 型とフィールドの標準化、不正レコードの処理、分析クエリに向けた準備。結果はHDFSに永続化され、Hiveテーブルとして提供され、Impalaがより低いレイテンシのクエリに対応しました。この環境はClouderaプラットフォーム上で運用され、認可・認証・セキュリティにはSentryとKerberosが使用されました。信頼できるパイプラインには、すでに処理済みのものを識別し、既知の地点から再開し、部分的な実行が次の結果を汚染しないようにする仕組みが必要でした。",
      "res": "手動実行への依存を減らした標準化された取り込み、ロードのトレーサビリティ、再処理能力、そして銀行のHadoop環境でクエリ可能なデータが実現しました。この経験により、金融セクターに応用された分散処理の専門性が深まりました。",
      "metrics": [
       "自動化されたバッチ取り込み",
       "Sqoop → HDFS → Spark",
       "HiveとImpala",
       "Cloudera · Sentry · Kerberos"
      ],
      "stack": [
       "Sqoop",
       "Apache Spark",
       "Hadoop",
       "HDFS",
       "Hive",
       "Impala",
       "Cloudera",
       "Shell Script",
       "Sentry",
       "Kerberos"
      ]
     }
    ],
    "arch": [
     [
      "ソース",
      "リレーショナルテーブル · Oracle"
     ],
     [
      "Sqoop",
      "増分バッチ取り込み"
     ],
     [
      "Spark",
      "標準化 · クレンジング"
     ],
     [
      "HDFS · Hive",
      "保存とクエリ"
     ],
     [
      "Impala",
      "低レイテンシクエリ"
     ],
     [
      "セキュリティ",
      "Cloudera · Sentry · Kerberos"
     ]
    ],
    "stat3": [
     {
      "v": "Sqoop → Hadoop",
      "l": "リレーショナルデータベースからHadoopエコシステムへの自動化されたバッチ取り込み"
     },
     {
      "v": "Spark + Hive/Impala",
      "l": "取り込まれたデータに対する分散処理と分析クエリ"
     },
     {
      "v": "再処理可能",
      "l": "最終位置の管理、再処理と障害復旧"
     }
    ],
    "layers": [
     {
      "icon": "🗄️",
      "title": "ソース · トランザクションOracle",
      "desc": "Oracleなどのリレーショナルデータベースにある銀行のトランザクションテーブル。SqoopはJDBC経由で接続し、本番データベースに影響を与えずに増分抽出します。"
     },
     {
      "icon": "⚙️",
      "title": "Sqoop · バッチ取り込み",
      "desc": "Sqoopは複数のマッパーによる並列取り込みを調整します。キーによるパーティショニングと最終処理位置の管理により、バランスの取れたロードとトレース可能な増分ロードが保証されます。"
     },
     {
      "icon": "⚡",
      "title": "Spark · 変換",
      "desc": "Sparkジョブが型とフィールドを標準化し、不正レコードを処理し、生データをHiveとImpala向けの分析形式に準備します。"
     },
     {
      "icon": "🏗️",
      "title": "Cloudera · Hadoop",
      "desc": "クラスタ監視、ジョブスケジューリング、リソース管理のためのClouderaプラットフォーム。認可・認証にはSentryとKerberosを使用。"
     },
     {
      "icon": "📊",
      "title": "Hive + Impala · 分析利用",
      "desc": "処理済みデータはHiveテーブルで利用可能になり、Impalaが銀行の各部門向けに低レイテンシの分析クエリを提供します。"
     }
    ],
    "codeNotes": [
     {
      "tab": "Sqoop Batch",
      "label": "SqoopによるOracleテーブル → HDFSの自動取り込み（Shell）",
      "note": "このスクリプトは、Oracleデータベースのデータを毎晩、介入なしでHadoopエコシステムへ届けます。重要な点は「増分」です: 実行のたびにテーブル全体をコピーする代わりに、Sqoopは最終更新のマーカーを保持し、それ以降に変更されたものだけを取得することで、転送量を大幅に削減します。結果はすでにParquet形式で圧縮され、8つの並列プロセスに分割されて書き込まれ、各実行はトレース可能なログを残します。"
     },
     {
      "tab": "Spark Transform",
      "label": "取り込まれたデータのSpark変換（PySpark）",
      "note": "取り込み後、生データはまだ分析に使える状態ではありません。このSparkのステップでクレンジングと標準化を行います: キャンセルされた仕訳を除外し、為替レートを使ってドル建ての値をレアルに変換し、会計期間（会計月）のフィールドを作成し、コストセンターコードを正規化し、重複を除去します。結果は月単位でパーティション化されたrefined層に書き込まれ、クエリ可能になります。これが「コピーされたデータ」を「信頼できるデータ」に変える工程です。"
     },
     {
      "tab": "Impala Report",
      "label": "Impala経由の分析レポート、コストセンター別マージン（SQL）",
      "note": "ここで処理済みデータがビジネス情報に変わります。このクエリはHadoop上で高速にSQLに応答するエンジンであるImpalaで実行され、コストセンターと月ごとに収益、コスト、貢献利益率、年初来累計を計算します。マージンは結果に直接算出され（収益からコストを引いて収益で割る）、累計にはウィンドウ関数（時系列順に行ごとに合計するSQL機能）を使用します。アナリストはスプレッドシートにエクスポートして再計算する必要なく、完成したパネルを受け取ります。"
     }
    ],
    "faq": [
     {
      "q": "増分取り込みはどのように機能していましたか?",
      "a": "増分取り込みは制御列と前回の境界値を使い、ソースに応じてSqoopのappendまたはlastmodifiedを選びます。完了した境界と再実行方針を管理し、重複や欠落を防ぎます。中断した任意の行から自動再開する機能とは異なります。"
     },
     {
      "q": "なぜカスタムPythonパイプラインではなくSqoopを使ったのですか?",
      "a": "Sqoopは、リレーショナルデータベースとHadoop間でデータを効率的に移動するために特別に設計されています。ネイティブな並列処理、増分チェックポイントのサポート、JDBC型の処理、組み込みの圧縮機能を備えています。Oracle → HDFSの取り込みパターンにおいて、カスタムPythonコードよりも堅牢で監視しやすいものでした。"
     },
     {
      "q": "Sqoopで取り込んだデータの品質はどのように保証されていましたか?",
      "a": "各Sqoopジョブは最後にレコード数を生成し、Oracleに対して直接実行されたCOUNT(*)と照合されます。0.1%を超える乖離があるとアラートが発火し、障害地点からチェックポイントを使って再実行されます。その後のSparkのステップでは、データを分析層に昇格させる前に、スキーマとビジネスルールの追加検証が適用されます。"
     }
    ]
   }
  },
  "app": {
   "sub": "BIG DATA PIPELINE · SANTANDER",
   "h": "Ingestão que roda sozinha, <em>toda noite.</em>",
   "d": "Simulação do ambiente de Big Data do Santander: ingestões batch de tabelas relacionais para o Hadoop, processamento com Spark e consulta analítica com Hive e Impala. Simulação didática, com tabelas e dados fictícios."
  },
  "metrics": [
   "Sqoop → HDFS → Spark",
   "ingestões batch automatizadas",
   "Hive · Impala · Cloudera",
   "Sentry · Kerberos"
  ],
  "stack": [
   "Sqoop",
   "Apache Spark",
   "Hadoop",
   "HDFS",
   "Hive",
   "Impala",
   "Cloudera",
   "Shell Script",
   "Sentry",
   "Kerberos"
  ],
  "demos": [
   {
    "kind": "app",
    "t": "Santander Big Data Pipeline",
    "d": "Pipeline batch: selecione as tabelas de origem e veja cada etapa (Sqoop → HDFS → Spark → Hive/Impala) com log, reconciliação e reprocessamento. Tabelas, volumes e resultados inteiramente fictícios.",
    "u": "santander-big-data-pipeline.html",
    "btn": "Abrir pipeline →"
   }
  ],
  "stints": [
   {
    "r": "Engenheira de Dados · Big Data Santander",
    "per": "2017",
    "prob": "O novo modelo operacional de Big Data do Santander exigia pipelines batch padronizados e confiáveis para transportar conjuntos de dados de sistemas relacionais para o ecossistema Hadoop, com integridade, rastreabilidade e capacidade de reprocessamento.",
    "dec": "A ingestão em lote (batch) foi automatizada com Sqoop (a ferramenta que copia tabelas de bancos relacionais como o Oracle para o HDFS), com estratégias incrementais, particionamento e controle da última posição processada. Depois da ingestão, os dados eram processados com Apache Spark: padronização de tipos e campos, tratamento de registros inválidos e preparação para consulta analítica. Os resultados eram persistidos no HDFS e disponibilizados por tabelas Hive, com o Impala atendendo consultas de menor latência. O ambiente era operado na plataforma Cloudera, com Sentry e Kerberos para autorização, autenticação e segurança. Um pipeline confiável precisava identificar o que já havia sido processado, reiniciar de um ponto conhecido e impedir que uma execução parcial contaminasse o resultado seguinte.",
    "res": "Ingestões padronizadas e com menor dependência de execução manual, com rastreabilidade das cargas, capacidade de reprocessamento e dados preparados para consulta no ambiente Hadoop do banco. A experiência aprofundou a especialização em processamento distribuído aplicado ao setor financeiro.",
    "metrics": [
     "ingestões batch automatizadas",
     "Sqoop → HDFS → Spark",
     "Hive e Impala",
     "Cloudera · Sentry · Kerberos"
    ],
    "stack": [
     "Sqoop",
     "Apache Spark",
     "Hadoop",
     "HDFS",
     "Hive",
     "Impala",
     "Cloudera",
     "Shell Script",
     "Sentry",
     "Kerberos"
    ]
   }
  ],
  "arch": [
   [
    "Fontes",
    "tabelas relacionais · Oracle"
   ],
   [
    "Sqoop",
    "ingestão batch incremental"
   ],
   [
    "Spark",
    "padronização · limpeza"
   ],
   [
    "HDFS · Hive",
    "armazenamento e consulta"
   ],
   [
    "Impala",
    "consulta de menor latência"
   ],
   [
    "Segurança",
    "Cloudera · Sentry · Kerberos"
   ]
  ],
  "stat3": [
   {
    "v": "Sqoop → Hadoop",
    "l": "ingestão batch automatizada de bancos relacionais para o ecossistema Hadoop"
   },
   {
    "v": "Spark + Hive/Impala",
    "l": "processamento distribuído e consulta analítica sobre os dados ingeridos"
   },
   {
    "v": "reprocessável",
    "l": "controle de última posição, com reprocessamento e recuperação de falhas"
   }
  ],
  "layers": [
   {
    "icon": "🗄️",
    "title": "Fontes · Oracle transacional",
    "desc": "Tabelas transacionais do banco em bancos relacionais como o Oracle. O Sqoop conecta via JDBC e extrai de forma incremental, sem impacto na base de produção."
   },
   {
    "icon": "⚙️",
    "title": "Sqoop · ingestão batch",
    "desc": "O Sqoop coordena a ingestão paralela com múltiplos mappers. O particionamento por chave e o controle da última posição processada garantem carga balanceada e cargas incrementais rastreadas."
   },
   {
    "icon": "⚡",
    "title": "Spark · transformação",
    "desc": "Jobs Spark padronizam tipos e campos, tratam registros inválidos e preparam os dados brutos em formato analítico para Hive e Impala."
   },
   {
    "icon": "🏗️",
    "title": "Cloudera · Hadoop",
    "desc": "Plataforma Cloudera para monitoramento do cluster, agendamento de jobs e gestão de recursos, com Sentry e Kerberos para autorização e autenticação."
   },
   {
    "icon": "📊",
    "title": "Hive + Impala · consumo analítico",
    "desc": "Os dados processados ficam disponíveis em tabelas Hive, com o Impala atendendo consultas analíticas de menor latência para as áreas do banco."
   }
  ],
  "code": [
   {
    "tab": "Sqoop Batch",
    "label": "Ingestão automática de tabelas Oracle → HDFS com Sqoop (Shell)",
    "code": "#!/bin/bash\n# Ingestão incremental Oracle → HDFS, Big Data Santander\n\nTABLE=$1\nLAST_VALUE_FILE=\"/data/sqoop/checkpoints/${TABLE}.lastval\"\nLAST_VALUE=$(cat $LAST_VALUE_FILE 2>/dev/null || echo \"0\")\n\nsqoop import   --connect \"jdbc:oracle:thin:@santander-prod:1521:BIGDATA\"   --username $DB_USER --password-file /secure/db.pass   --table $TABLE   --incremental lastmodified   --check-column UPDATED_AT   --last-value \"$LAST_VALUE\"   --target-dir \"/data/santander/$TABLE/$(date +%Y%m%d)\"   --as-parquetfile   --num-mappers 8   --compress   2>&1 | tee /logs/sqoop_${TABLE}_$(date +%Y%m%d).log\n\n# Atualiza checkpoint\necho \"$(date -Iseconds)\" > $LAST_VALUE_FILE\necho \"[OK] $TABLE ingerida com sucesso → HDFS\"",
    "note": "Este script traz os dados do banco Oracle para o ecossistema Hadoop, toda noite, sem intervenção. O detalhe importante é o \"incremental\": em vez de copiar a tabela inteira a cada execução, o Sqoop guarda um marcador da última atualização e traz apenas o que mudou desde então, o que reduz drasticamente o volume transferido. O resultado é gravado já em formato Parquet, comprimido e dividido entre 8 processos paralelos, e cada execução deixa um log rastreável."
   },
   {
    "tab": "Spark Transform",
    "label": "Transformação Spark dos dados ingeridos (PySpark)",
    "code": "from pyspark.sql import SparkSession\nfrom pyspark.sql import functions as F\n\nspark = SparkSession.builder.appName(\"santander-batch-transform\").getOrCreate()\n\n# Lê tabela ingerida pelo Sqoop\nraw = spark.read.parquet(f\"hdfs:///data/santander/{TABLE}/latest/\")\n\n# Aplica padronização e regras de negócio\nprocessed = raw     .filter(F.col(\"STATUS\") != \"CANCELLED\")     .withColumn(\"VALOR_BRL\", F.col(\"VALOR_USD\") * F.col(\"TAXA_CAMBIO\"))     .withColumn(\"COMPETENCIA\", F.date_format(F.col(\"DATA_LANCAMENTO\"), \"yyyy-MM\"))     .withColumn(\"CENTRO_CUSTO_NORM\",\n        F.regexp_replace(F.col(\"CENTRO_CUSTO\"), \"[^0-9]\", \"\").cast(\"int\"))     .dropDuplicates([\"ID_LANCAMENTO\"])\n\nprocessed.write     .mode(\"overwrite\")     .partitionBy(\"COMPETENCIA\")     .saveAsTable(f\"refined.{TABLE}\")\n\nprint(f\"Processados: {processed.count()} registros para a camada analitica\")",
    "note": "Depois da ingestão, o dado bruto ainda não serve para análise. Este passo em Spark faz a limpeza e a padronização: descarta lançamentos cancelados, converte valores de dólar para real usando a taxa de câmbio, cria o campo de competência (o mês contábil), normaliza o código de centro de custo e remove duplicatas. O resultado é gravado numa camada refinada, particionado por mês, pronto para consulta. É a etapa que transforma \"dado copiado\" em \"dado confiável\"."
   },
   {
    "tab": "Impala Report",
    "label": "Relatório analítico via Impala, margens por centro de custo (SQL)",
    "code": "-- Relatorio analitico, Impala sobre os dados ingeridos (Santander)\n-- Dados ingeridos pelo Sqoop, transformados pelo Spark, consumidos aqui\n\nSELECT\n    CENTRO_CUSTO,\n    TRUNC(DATA_LANCAMENTO, 'MM')                               AS competencia,\n    SUM(VALOR_BRL)                                             AS total_brl,\n    SUM(CASE WHEN TIPO = 'RECEITA' THEN VALOR_BRL ELSE 0 END) AS receita_brl,\n    SUM(CASE WHEN TIPO = 'CUSTO'   THEN VALOR_BRL ELSE 0 END) AS custo_brl,\n    COUNT(DISTINCT CONTA_CONTABIL)                             AS contas_ativas,\n    -- Margem de contribuição por centro de custo\n    ROUND(\n      (SUM(CASE WHEN TIPO='RECEITA' THEN VALOR_BRL ELSE 0 END)\n       - SUM(CASE WHEN TIPO='CUSTO' THEN VALOR_BRL ELSE 0 END))\n      / NULLIF(SUM(CASE WHEN TIPO='RECEITA' THEN VALOR_BRL ELSE 0 END), 0) * 100\n    , 2)                                                        AS margem_pct,\n    -- Acumulado do ano (window function)\n    SUM(VALOR_BRL) OVER (\n        PARTITION BY CENTRO_CUSTO\n        ORDER BY TRUNC(DATA_LANCAMENTO, 'MM')\n        ROWS UNBOUNDED PRECEDING\n    )                                                           AS acumulado_ytd\nFROM refined.lancamentos\nWHERE COMPETENCIA >= DATE_TRUNC('MONTH', NOW() - INTERVAL 3 MONTHS)\n  AND STATUS != 'CANCELADO'\nGROUP BY CENTRO_CUSTO, TRUNC(DATA_LANCAMENTO, 'MM'), VALOR_BRL\nORDER BY competencia DESC, total_brl DESC;\n-- Rastreabilidade via checkpoint incremental do Sqoop",
    "note": "É aqui que o dado tratado vira informação de negócio. Esta consulta roda no Impala, o motor que responde SQL rápido sobre o Hadoop, e calcula, por centro de custo e por mês, receita, custo, margem de contribuição e o acumulado do ano. A margem sai direto no resultado (receita menos custo, dividido pela receita), e a soma acumulada usa uma window function, recurso de SQL que soma linha a linha respeitando a ordem do tempo. O analista recebe o painel pronto sem precisar exportar e recalcular em planilha."
   }
  ],
  "faq": [
   {
    "q": "Como a ingestão incremental funcionava?",
    "a": "As cargas incrementais usam uma coluna de controle e um limite da execução anterior, com os modos append ou lastmodified do Sqoop conforme a fonte. A orquestração precisa registrar o limite concluído e definir como reexecutar sem duplicar ou perder alterações. Isso é diferente de uma retomada automática em qualquer linha de uma execução interrompida."
   },
   {
    "q": "Por que Sqoop em vez de um pipeline Python customizado?",
    "a": "Sqoop foi projetado especificamente para mover dados entre bancos relacionais e Hadoop de forma eficiente. Tem paralelismo nativo, suporte a checkpoints incrementais, tratamento de tipos JDBC e compressão embutida. Para o padrão de ingestão Oracle → HDFS, é mais robusto e monitorável que código Python customizado."
   },
   {
    "q": "Como garantir qualidade dos dados ingeridos pelo Sqoop?",
    "a": "Cada job Sqoop gera contagem de registros ao final, validada contra COUNT(*) executado diretamente no Oracle. Divergência acima de 0,1% aciona alerta e reexecução com checkpoint a partir do ponto de falha. O Spark posterior aplica validações adicionais de schema e regras de negócio antes de promover os dados para a camada analítica."
   }
  ],
  "heroImg": "assets/gallery-signatures/jen-leadership-ai.webp"
 },
 {
  "f": "fin",
  "flag": "br",
  "n": "B3",
  "dom": "b3.com.br",
  "nologo": false,
  "per": "2016 a 2017",
  "r": "Engenharia de Dados e Gestão da Informação",
  "d": "Na B3, programei automações para rotinas estatísticas e análises de gestão da informação no mercado financeiro. Também atuei no suporte técnico da plataforma distribuída, consolidando minha especialização inicial em ecossistemas de Big Data.",
  "heroChips": [
   "Cloudera e Ecossistema Hadoop",
   "Oracle PL/SQL · Spotfire",
   "Automação Estatística",
   "Segurança · Kerberos · Sentry"
  ],
  "t": {
   "en": {
    "r": "Data Engineering and Information Management",
    "per": "2016 to 2017",
    "d": "Automation of statistical routines with Oracle PL/SQL and TIBCO Spotfire, combined with technical support on a Cloudera platform with Hadoop, Hive, Impala, Sentry and Kerberos: the start of a specialization in distributed platforms within financial-market infrastructure.",
    "heroChips": [
     "Cloudera and Hadoop Ecosystem",
     "Oracle PL/SQL · Spotfire",
     "Statistical Automation",
     "Security · Kerberos · Sentry"
    ],
    "app": {
     "sub": "CLOUDERA PLATFORM + AUTOMATION",
     "h": "The exchange Hadoop environment and <em>statistical automation.</em>",
     "d": "Simulation of the B3/B3 Cloudera environment and statistical routines: Hadoop service health, access control via Sentry and Kerberos, and routine automation with PL/SQL. Didactic simulation, no corporate data."
    },
    "metrics": [
     {
      "v": "PL/SQL",
      "l": "statistical routine automation"
     },
     {
      "v": "Spotfire",
      "l": "information-management analysis"
     },
     {
      "v": "Cloudera",
      "l": "Hadoop · Hive · Impala"
     },
     {
      "v": "Security",
      "l": "Sentry and Kerberos"
     }
    ],
    "demos": [
     {
      "kind": "app",
      "t": "PL/SQL · statistical automation",
      "d": "Validate a batch, consolidate product indicators and rerun without duplicate reports. Browser simulation with illustrative PL/SQL code.",
      "btn": "Explore PL/SQL routine →",
      "u": "b3-plsql-lab.html"
     },
     {
      "kind": "app",
      "t": "Statistical Automation & Hadoop Platform · B3 B3",
      "d": "Didactic reconstruction of the Cloudera platform support work: PL/SQL automation, Spotfire exploration, Hive/Impala queries and HDFS, Sentry and Kerberos observability. Synthetic data and volumes.",
      "u": "cetip-hadoop-admin.html",
      "btn": "Open demonstration →"
     }
    ],
    "stints": [
     {
      "r": "Data Engineering and Information Management",
      "per": "2016 to 2017",
      "prob": "In the Information Management area, statistical production relied on manually run queries, with no standardized, reproducible routines. In parallel, the company was adopting a Cloudera Big Data platform, a distributed ecosystem new to the team, which required organizing data, queries, permissions and tracking processing jobs.",
      "dec": "Oracle PL/SQL routines were developed and evolved to collect, consolidate, treat and make data available, with procedures, functions, analytical queries, transformation rules and validations that replaced the recurring execution of isolated queries. TIBCO Spotfire acted as the analytical and visualization layer over the prepared datasets. In parallel, the role supported Cloudera platform activities, working with Hadoop, HDFS, Hive, Impala, Sentry and Kerberos: organizing data in the distributed environment, queries, permissions, tracking processing jobs and investigating issues. Hive structured queries over the distributed data, Impala served lower-latency queries, and Sentry and Kerberos were part of the environment security, authentication and authorization.",
      "res": "Automation reduced manual activities and standardized statistical production, turning rules into structured routines with parameters, controls and reproducible results, and making the data available for analysis in Spotfire. Exposure to the Hadoop ecosystem built the technical foundation that later evolved into Spark, distributed architectures and cloud data platforms.",
      "metrics": [
       "PL/SQL statistical automation",
       "analytical Spotfire",
       "Cloudera environment support",
       "foundation for Spark and cloud"
      ],
      "stack": [
       "Oracle PL/SQL",
       "TIBCO Spotfire",
       "Cloudera",
       "Hadoop",
       "HDFS",
       "Hive",
       "Impala",
       "Sentry",
       "Kerberos",
       "Shell Script"
      ]
     }
    ],
    "arch": [
     [
      "Sources",
      "internal systems · market"
     ],
     [
      "Automation",
      "Oracle PL/SQL · routines"
     ],
     [
      "Analytical",
      "TIBCO Spotfire"
     ],
     [
      "Distributed",
      "Cloudera · Hadoop · Hive · Impala"
     ],
     [
      "Security",
      "Sentry · Kerberos"
     ]
    ],
    "stat3": [
     {
      "v": "PL/SQL + Spotfire",
      "l": "statistical automation and analytical visualization layer"
     },
     {
      "v": "Cloudera",
      "l": "support for the Hadoop ecosystem: Hive, Impala, Sentry and Kerberos"
     },
     {
      "v": "first",
      "l": "Big Data project and start of specialization in distributed platforms"
     }
    ],
    "layers": [
     {
      "icon": "🗄️",
      "title": "Sources · market and internal systems",
      "desc": "Financial-market data, custody transactions and internal B3 systems (pre-B3 merger). High regulatory criticality, wrong data has systemic impact."
     },
     {
      "icon": "⚙️",
      "title": "Statistical automation · Oracle PL/SQL",
      "desc": "PL/SQL routines with procedures, functions, analytical queries, transformation rules and validations. Replaced the manual, recurring execution of isolated queries with parameterized, reproducible processes."
     },
     {
      "icon": "📊",
      "title": "TIBCO Spotfire · analytical layer",
      "desc": "Datasets prepared in Oracle fed dashboards and analyses in Spotfire, used to explore indicators and track statistical information."
     },
     {
      "icon": "☁️",
      "title": "Cloudera CDH · Hadoop",
      "desc": "Support for the Cloudera environment: organizing data in the cluster, queries, tracking processing jobs and investigating issues, alongside the team responsible for the platform. First contact with distributed processing (Hive and Impala)."
     },
     {
      "icon": "🔐",
      "title": "Sentry + Kerberos · security",
      "desc": "Sentry for granular (column-level) access control. Kerberos for mutual authentication in the cluster. Compliance with financial-market regulation."
     }
    ],
    "codeNotes": [
     {
      "tab": "Hive Optimization",
      "label": "Hive query optimization with partitioning and bucketing (HQL)",
      "note": "A query scanning three years of trades took dozens of minutes. Two techniques solve this. Partitioning organizes the table into drawers by year and month, so a query for one specific month only reads that drawer instead of the entire table (called partition pruning). Bucketing groups records by asset, speeding up sums and joins. Storing in compressed ORC format and keeping statistics up to date completes the gain. This is query engineering: same question, a fraction of the time."
     },
     {
      "tab": "Shell Admin",
      "label": "Cloudera cluster administration automation (Shell Script)",
      "note": "Keeping an exchange cluster running requires constant vigilance. This script runs a daily health check automatically: it measures how much HDFS storage is used and, if it exceeds 80%, sends an alert email to the team; it also checks whether any DataNode (the machines storing the data) went down. Everything is logged with a timestamp. This is the difference between finding a problem through preventive monitoring and finding out once the service has already stopped."
     },
     {
      "tab": "PL/SQL Stats",
      "label": "B3 website statistics automation, Oracle 11g PL/SQL (parameterized, reproducible routine)",
      "note": "Producing B3 website statistics was manual and repeated every day. This PL/SQL procedure encapsulates that routine: clears the day table, recalculates volume, average price, number of trades and the change versus the previous day (using LAG, a function that looks at the previous row value), and logs the run in an audit log. Turning the repetitive task into a parameterized, reproducible routine eliminates human error and makes every run predictable and traceable."
     }
    ],
    "faq": [
     {
      "q": "What are the particularities of working with stock-exchange data on Hadoop?",
      "a": "B3 (today B3) operates with systemically critical data; service unavailability during market hours carries regulatory impact. In the financial context, availability and integrity outweigh performance, and every decision needs to answer the question: \"what if this fails on a trading day?\""
     },
     {
      "q": "Why automate statistics with PL/SQL and Spotfire?",
      "a": "Statistical production relied on manually run queries, which made the process slow, error-prone and hard to reproduce. By encapsulating the rules in parameterized PL/SQL procedures, every run became predictable, with validations and an execution log, and Spotfire consumed the already-prepared datasets to explore indicators. Instead of repeating isolated queries every time, the rule lives in a structured routine."
     },
     {
      "q": "Why Kerberos and Sentry together?",
      "a": "Kerberos handles authentication (who you are), Sentry handles authorization (what you can do). In a regulated environment like the financial market, it is not enough to know it is so-and-so; you need to guarantee that so-and-so does not access the price column before the correct time. The combination of the two delivers that in an auditable way."
     }
    ]
   },
   "es": {
    "r": "Ingeniería de Datos y Gestión de la Información",
    "per": "2016 a 2017",
    "d": "Automatización de rutinas estadísticas con Oracle PL/SQL y TIBCO Spotfire, combinada con apoyo técnico en una plataforma Cloudera con Hadoop, Hive, Impala, Sentry y Kerberos: el inicio de la especialización en plataformas distribuidas dentro de la infraestructura del mercado financiero.",
    "heroChips": [
     "Cloudera y Ecosistema Hadoop",
     "Oracle PL/SQL · Spotfire",
     "Automatización Estadística",
     "Seguridad · Kerberos · Sentry"
    ],
    "app": {
     "sub": "PLATAFORMA CLOUDERA + AUTOMATIZACIÓN",
     "h": "El ambiente Hadoop de la bolsa y la <em>automatización estadística.</em>",
     "d": "Simulación del ambiente Cloudera de B3/B3 y de las rutinas estadísticas: salud de los servicios Hadoop, control de acceso vía Sentry y Kerberos y automatización de rutinas con PL/SQL. Simulación didáctica, sin datos corporativos."
    },
    "metrics": [
     {
      "v": "PL/SQL",
      "l": "automatización estadística"
     },
     {
      "v": "Spotfire",
      "l": "análisis de gestión de información"
     },
     {
      "v": "Cloudera",
      "l": "Hadoop · Hive · Impala"
     },
     {
      "v": "Seguridad",
      "l": "Sentry y Kerberos"
     }
    ],
    "demos": [
     {
      "kind": "app",
      "t": "PL/SQL · automatización estadística",
      "d": "Valida un lote, consolida indicadores por producto y reejecuta sin duplicar informes. Simulación con código PL/SQL ilustrativo.",
      "btn": "Explorar rutina PL/SQL →",
      "u": "b3-plsql-lab.html"
     },
     {
      "kind": "app",
      "t": "Automatización Estadística y Plataforma Hadoop · B3 B3",
      "d": "Reconstrucción didáctica del apoyo a la plataforma Cloudera: automatización con PL/SQL, exploración en Spotfire, consultas Hive/Impala y observabilidad de HDFS, Sentry y Kerberos. Datos y volúmenes sintéticos.",
      "u": "cetip-hadoop-admin.html",
      "btn": "Abrir demostración →"
     }
    ],
    "stints": [
     {
      "r": "Ingeniería de Datos y Gestión de la Información",
      "per": "2016 a 2017",
      "prob": "En el área de Gestión de la Información, la producción estadística dependía de consultas ejecutadas manualmente, sin rutinas estandarizadas y reproducibles. En paralelo, la compañía adoptaba una plataforma Cloudera de Big Data, un ecosistema distribuido nuevo para el equipo, que exigía organización de datos, consultas, permisos y seguimiento de procesamientos.",
      "dec": "Se desarrollaron y evolucionaron rutinas en Oracle PL/SQL para recolectar, consolidar, tratar y disponibilizar datos, con procedures, funciones, consultas analíticas, reglas de transformación y validaciones que sustituyeron la ejecución recurrente de consultas aisladas. TIBCO Spotfire funcionaba como capa analítica y de visualización sobre los conjuntos preparados. En paralelo, la actuación apoyaba las actividades de la plataforma Cloudera, trabajando con Hadoop, HDFS, Hive, Impala, Sentry y Kerberos: organización de los datos en el ambiente distribuido, consultas, permisos, seguimiento de procesamientos e investigación de problemas. Hive estructuraba consultas sobre los datos distribuidos, Impala atendía consultas de menor latencia, y Sentry y Kerberos formaban parte de la seguridad, autenticación y autorización del ambiente.",
      "res": "La automatización redujo actividades manuales y estandarizó la producción estadística, convirtiendo las reglas en rutinas estructuradas, con parámetros, controles y resultados reproducibles, y disponibilizando los datos para análisis en Spotfire. El contacto con el ecosistema Hadoop creó la base técnica que posteriormente evolucionó hacia Spark, arquitecturas distribuidas y plataformas de datos en la nube.",
      "metrics": [
       "automatización estadística PL/SQL",
       "Spotfire analítico",
       "apoyo al ambiente Cloudera",
       "base para Spark y la nube"
      ],
      "stack": [
       "Oracle PL/SQL",
       "TIBCO Spotfire",
       "Cloudera",
       "Hadoop",
       "HDFS",
       "Hive",
       "Impala",
       "Sentry",
       "Kerberos",
       "Shell Script"
      ]
     }
    ],
    "arch": [
     [
      "Fuentes",
      "sistemas internos · mercado"
     ],
     [
      "Automatización",
      "Oracle PL/SQL · rutinas"
     ],
     [
      "Analítico",
      "TIBCO Spotfire"
     ],
     [
      "Distribuido",
      "Cloudera · Hadoop · Hive · Impala"
     ],
     [
      "Seguridad",
      "Sentry · Kerberos"
     ]
    ],
    "stat3": [
     {
      "v": "PL/SQL + Spotfire",
      "l": "automatización estadística y capa analítica de visualización"
     },
     {
      "v": "Cloudera",
      "l": "apoyo al ecosistema Hadoop: Hive, Impala, Sentry y Kerberos"
     },
     {
      "v": "primer",
      "l": "proyecto de Big Data e inicio de la especialización en plataformas distribuidas"
     }
    ],
    "layers": [
     {
      "icon": "🗄️",
      "title": "Fuentes · mercado y sistemas internos",
      "desc": "Datos de mercado financiero, transacciones de custodia y sistemas internos de B3 (pre-fusión B3). Alta criticidad regulatoria, un dato erróneo tiene impacto sistémico."
     },
     {
      "icon": "⚙️",
      "title": "Automatización estadística · Oracle PL/SQL",
      "desc": "Rutinas en PL/SQL con procedures, funciones, consultas analíticas, reglas de transformación y validaciones. Sustituyeron la ejecución manual y recurrente de consultas aisladas por procesos parametrizados y reproducibles."
     },
     {
      "icon": "📊",
      "title": "TIBCO Spotfire · capa analítica",
      "desc": "Los conjuntos preparados en Oracle alimentaban paneles y análisis en Spotfire, usados para explorar indicadores y seguir la información estadística."
     },
     {
      "icon": "☁️",
      "title": "Cloudera CDH · Hadoop",
      "desc": "Apoyo al ambiente Cloudera: organización de los datos en el clúster, consultas, seguimiento de procesamientos e investigación de problemas, junto al equipo responsable de la plataforma. Primer contacto con procesamiento distribuido (Hive e Impala)."
     },
     {
      "icon": "🔐",
      "title": "Sentry + Kerberos · seguridad",
      "desc": "Sentry para control de acceso granular (columna a columna). Kerberos para autenticación mutua en el clúster. Cumplimiento con la regulación del mercado financiero."
     }
    ],
    "codeNotes": [
     {
      "tab": "Hive Optimization",
      "label": "Optimización de query Hive con particionamiento y bucketing (HQL)",
      "note": "Una consulta que escaneaba tres años de negociaciones tomaba decenas de minutos. Dos técnicas resuelven esto. El particionamiento organiza la tabla en cajones por año y mes, así una consulta de un mes específico lee solo ese cajón en vez de la tabla entera (el llamado partition pruning). El bucketing agrupa los registros por activo, acelerando sumas y joins. Guardar en formato ORC comprimido y mantener estadísticas actualizadas completa la ganancia. Es ingeniería de consulta: la misma pregunta, una fracción del tiempo."
     },
     {
      "tab": "Shell Admin",
      "label": "Automatización de administración del clúster Cloudera (Shell Script)",
      "note": "Mantener un clúster de la bolsa en funcionamiento exige vigilancia constante. Este script corre la verificación de salud diaria automáticamente: mide cuánto del almacenamiento HDFS está ocupado y, si supera el 80%, envía un correo de alerta al equipo; también verifica si algún DataNode (las máquinas que guardan los datos) cayó. Todo queda registrado en log con fecha. Es la diferencia entre descubrir un problema por monitoreo preventivo y descubrirlo cuando el servicio ya se detuvo."
     },
     {
      "tab": "PL/SQL Stats",
      "label": "Automatización de las estadísticas del sitio B3, PL/SQL Oracle 11g (rutina parametrizada y reproducible)",
      "note": "La producción de las estadísticas del sitio de B3 era manual y se repetía cada día. Esta procedure en PL/SQL encapsula esa rutina: limpia la tabla del día, recalcula volumen, precio promedio, número de negociaciones y la variación frente al día anterior (usando LAG, una función que mira el valor de la fila anterior), y registra la ejecución en un log de auditoría. Transformar la tarea repetitiva en una rutina parametrizada y reproducible elimina el error humano y hace que cada corrida sea predecible y trazable."
     }
    ],
    "faq": [
     {
      "q": "¿Cuáles son las particularidades de trabajar con datos de una bolsa de valores en Hadoop?",
      "a": "B3 (hoy B3) opera con datos sistémicamente críticos; la indisponibilidad de un servicio en horario de mercado tiene impacto regulatorio. En el contexto financiero, disponibilidad e integridad prevalecen sobre el rendimiento, y cada decisión necesita responder a la pregunta: \"¿y si esto falla en día de negociación?\"."
     },
     {
      "q": "¿Por qué automatizar las estadísticas con PL/SQL y Spotfire?",
      "a": "La producción estadística dependía de consultas ejecutadas manualmente, lo que hacía el proceso lento, propenso a error y difícil de reproducir. Al encapsular las reglas en procedures PL/SQL parametrizadas, cada corrida pasó a ser predecible, con validaciones y log de ejecución, y Spotfire consumía los conjuntos ya preparados para explorar indicadores. En vez de repetir consultas aisladas cada vez, la regla vive en una rutina estructurada."
     },
     {
      "q": "¿Por qué Kerberos y Sentry juntos?",
      "a": "Kerberos resuelve autenticación (quién eres), Sentry resuelve autorización (qué puedes hacer). En un ambiente regulado como el mercado financiero, no basta con saber que es fulano, hay que garantizar que fulano no accede a la columna de precio antes del horario correcto. La combinación de ambos entrega eso de forma auditable."
     }
    ]
   },
   "ja": {
    "r": "データエンジニアリングと情報管理",
    "per": "2016年〜2017年",
    "d": "Oracle PL/SQLとTIBCO Spotfireによる統計ルーチンの自動化、Hadoop、Hive、Impala、Sentry、Kerberosを備えたClouderaプラットフォームでの技術サポートを兼務: 金融市場インフラにおける分散プラットフォーム専門性の出発点。",
    "heroChips": [
     "ClouderaとHadoopエコシステム",
     "Oracle PL/SQL · Spotfire",
     "統計自動化",
     "セキュリティ · Kerberos · Sentry"
    ],
    "app": {
     "sub": "CLOUDERAプラットフォーム＋自動化",
     "h": "取引所のHadoop環境と<em>統計自動化。</em>",
     "d": "B3/B3のCloudera環境と統計ルーチンのシミュレーション: Hadoopサービスの健全性、SentryとKerberosによるアクセス制御、PL/SQLによるルーチン自動化。企業データを使わない教育目的のシミュレーションです。"
    },
    "metrics": [
     {
      "v": "PL/SQL",
      "l": "統計処理の自動化"
     },
     {
      "v": "Spotfire",
      "l": "情報管理の分析"
     },
     {
      "v": "Cloudera",
      "l": "Hadoop · Hive · Impala"
     },
     {
      "v": "セキュリティ",
      "l": "SentryとKerberos"
     }
    ],
    "demos": [
     {
      "kind": "app",
      "t": "PL/SQL · 統計処理の自動化",
      "d": "バッチを検証し、商品別に集計します。再実行してもレポートが重複しないブラウザー上のシミュレーションです。",
      "btn": "PL/SQLの処理を見る →",
      "u": "b3-plsql-lab.html"
     },
     {
      "kind": "app",
      "t": "統計自動化＆Hadoopプラットフォーム · B3 B3",
      "d": "Clouderaプラットフォームサポート業務の教育目的の再構築: PL/SQL自動化、Spotfireでの探索、Hive/Impalaクエリ、HDFS・Sentry・Kerberoの可観測性。合成データと合成データ量。",
      "u": "cetip-hadoop-admin.html",
      "btn": "デモを開く →"
     }
    ],
    "stints": [
     {
      "r": "データエンジニアリングと情報管理",
      "per": "2016年〜2017年",
      "prob": "情報管理部門では、統計生成は標準化・再現可能なルーチンのない手動実行のクエリに依存していました。並行して、会社はチームにとって新しい分散エコシステムであるCloudera Big Dataプラットフォームを導入しており、データ整理、クエリ、権限、処理の追跡が必要でした。",
      "dec": "データの収集、統合、加工、提供のためにOracle PL/SQLルーチンが開発・発展し、プロシージャ、関数、分析クエリ、変換ルール、検証が個別クエリの繰り返し実行に取って代わりました。TIBCO Spotfireは、準備済みデータセットに対する分析・可視化層として機能しました。並行して、この役割はHadoop、HDFS、Hive、Impala、Sentry、Kerberosを扱うCloudera プラットフォームの活動を支援しました: 分散環境でのデータ整理、クエリ、権限、処理の追跡、問題調査。Hiveは分散データへのクエリを体系化し、Impalaはより低いレイテンシのクエリに対応し、SentryとKerberosは環境のセキュリティ、認証、認可を担いました。",
      "res": "自動化により手動作業が削減され、統計生成が標準化されました。ルールはパラメータ、制御、再現可能な結果を備えた体系化されたルーチンとなり、データはSpotfireでの分析に利用可能になりました。Hadoopエコシステムとの接点は、後にSpark、分散アーキテクチャ、クラウドデータプラットフォームへと発展する技術基盤を築きました。",
      "metrics": [
       "PL/SQL統計自動化",
       "分析用Spotfire",
       "Cloudera環境サポート",
       "Sparkとクラウドへの基盤"
      ],
      "stack": [
       "Oracle PL/SQL",
       "TIBCO Spotfire",
       "Cloudera",
       "Hadoop",
       "HDFS",
       "Hive",
       "Impala",
       "Sentry",
       "Kerberos",
       "Shell Script"
      ]
     }
    ],
    "arch": [
     [
      "ソース",
      "社内システム · 市場"
     ],
     [
      "自動化",
      "Oracle PL/SQL · ルーチン"
     ],
     [
      "分析",
      "TIBCO Spotfire"
     ],
     [
      "分散",
      "Cloudera · Hadoop · Hive · Impala"
     ],
     [
      "セキュリティ",
      "Sentry · Kerberos"
     ]
    ],
    "stat3": [
     {
      "v": "PL/SQL + Spotfire",
      "l": "統計自動化と分析可視化層"
     },
     {
      "v": "Cloudera",
      "l": "Hadoopエコシステムへのサポート: Hive、Impala、Sentry、Kerberos"
     },
     {
      "v": "最初",
      "l": "ビッグデータプロジェクトと分散プラットフォーム専門性の出発点"
     }
    ],
    "layers": [
     {
      "icon": "🗄️",
      "title": "ソース · 市場と社内システム",
      "desc": "金融市場データ、カストディ取引、B3（B3合併前）の社内システム。規制上の重要度が高く、誤ったデータはシステミックな影響を及ぼします。"
     },
     {
      "icon": "⚙️",
      "title": "統計自動化 · Oracle PL/SQL",
      "desc": "プロシージャ、関数、分析クエリ、変換ルール、検証を備えたPL/SQLルーチン。個別クエリの手動での繰り返し実行を、パラメータ化された再現可能なプロセスに置き換えました。"
     },
     {
      "icon": "📊",
      "title": "TIBCO Spotfire · 分析層",
      "desc": "Oracleで準備されたデータセットはSpotfireのダッシュボードと分析に供給され、指標の探索と統計情報の追跡に使用されました。"
     },
     {
      "icon": "☁️",
      "title": "Cloudera CDH · Hadoop",
      "desc": "Cloudera環境へのサポート: クラスタ内のデータ整理、クエリ、処理の追跡、問題調査を、プラットフォーム担当チームとともに実施。分散処理（HiveとImpala）との最初の接点。"
     },
     {
      "icon": "🔐",
      "title": "Sentry + Kerberos · セキュリティ",
      "desc": "列単位の細かなアクセス制御にはSentry。クラスタ内の相互認証にはKerberos。金融市場規制への準拠。"
     }
    ],
    "codeNotes": [
     {
      "tab": "Hive Optimization",
      "label": "パーティショニングとバケッティングによるHiveクエリ最適化（HQL）",
      "note": "3年分の取引をスキャンするクエリは数十分かかっていました。2つの手法でこれを解決します。パーティショニングはテーブルを年・月ごとの引き出しに整理し、特定月のクエリはテーブル全体ではなくその引き出しだけを読みます（パーティションプルーニングと呼ばれます）。バケッティングは銘柄ごとにレコードをグループ化し、合計や結合を高速化します。圧縮されたORC形式での保存と統計情報の更新維持が、この効果を完成させます。これはクエリエンジニアリングです: 同じ質問を、はるかに短い時間で。"
     },
     {
      "tab": "Shell Admin",
      "label": "Clouderaクラスタ管理の自動化（Shell Script）",
      "note": "取引所のクラスタを稼働させ続けるには、常時の監視が必要です。このスクリプトは日次ヘルスチェックを自動実行します: HDFSストレージの使用率を測定し、80%を超えるとチームにアラートメールを送信します。また、DataNode（データを保持するマシン）がダウンしていないかも確認します。すべてがタイムスタンプ付きでログに記録されます。これが、予防的な監視で問題を発見することと、サービスがすでに停止してから発見することの違いです。"
     },
     {
      "tab": "PL/SQL Stats",
      "label": "B3サイトの統計自動化、Oracle 11g PL/SQL（パラメータ化された再現可能なルーチン）",
      "note": "B3サイトの統計生成は手動で、毎日繰り返されていました。このPL/SQLプロシージャはそのルーチンをカプセル化します: 当日分のテーブルをクリアし、出来高、平均価格、取引件数、前日比の変化（前の行の値を参照するLAG関数を使用）を再計算し、実行を監査ログに記録します。反復作業をパラメータ化された再現可能なルーチンに変えることで、ヒューマンエラーをなくし、各実行を予測可能でトレース可能にします。"
     }
    ],
    "faq": [
     {
      "q": "Hadoop上で証券取引所のデータを扱う特有の難しさは何ですか?",
      "a": "B3（現B3）はシステミックに重要なデータを扱っており、市場時間中のサービス停止は規制上の影響を伴います。金融の文脈では、可用性と整合性がパフォーマンスに優先し、あらゆる判断は「取引日にこれが失敗したらどうなるか」という問いに答える必要があります。"
     },
     {
      "q": "なぜPL/SQLとSpotfireで統計を自動化したのですか?",
      "a": "統計生成は手動実行のクエリに依存しており、プロセスが遅く、エラーが起きやすく、再現が困難でした。ルールをパラメータ化されたPL/SQLプロシージャにカプセル化することで、各実行は検証と実行ログを備えた予測可能なものになり、Spotfireは指標を探索するために準備済みのデータセットを利用しました。毎回個別のクエリを繰り返す代わりに、ルールは体系化されたルーチンの中に存在するようになりました。"
     },
     {
      "q": "なぜKerberosとSentryを併用したのですか?",
      "a": "Kerberosは認証（あなたが誰か）を解決し、Sentryは認可（あなたが何をできるか）を解決します。金融市場のような規制環境では、それが誰であるかを知るだけでは不十分で、その人が正しい時間より前に価格列にアクセスしないことを保証する必要があります。この2つの組み合わせが、それを監査可能な形で実現します。"
     }
    ]
   }
  },
  "app": {
   "sub": "PLATAFORMA CLOUDERA + AUTOMAÇÃO",
   "h": "O ambiente Hadoop da bolsa e a <em>automação estatística.</em>",
   "d": "Simulação do ambiente Cloudera da B3/B3 e das rotinas estatísticas: saúde dos serviços Hadoop, controle de acesso via Sentry e Kerberos e automação de rotinas com PL/SQL. Simulação didática, sem dados corporativos."
  },
  "metrics": [
   {
    "v": "PL/SQL",
    "l": "automação de rotinas estatísticas"
   },
   {
    "v": "Spotfire",
    "l": "análises para gestão da informação"
   },
   {
    "v": "Cloudera",
    "l": "Hadoop · Hive · Impala"
   },
   {
    "v": "Segurança",
    "l": "Sentry e Kerberos"
   }
  ],
  "stack": [
   "Oracle PL/SQL",
   "TIBCO Spotfire",
   "Cloudera",
   "Hadoop",
   "Hive",
   "Impala",
   "Sentry",
   "Kerberos",
   "Shell Script"
  ],
  "demos": [
   {
    "kind": "app",
    "t": "PL/SQL · automação estatística",
    "d": "Valide um lote, consolide indicadores por produto e reexecute sem duplicar o relatório. Simulação no navegador com código PL/SQL ilustrativo.",
    "btn": "Explorar rotina PL/SQL →",
    "u": "b3-plsql-lab.html"
   },
   {
    "kind": "app",
    "t": "Automação Estatística & Plataforma Hadoop · B3 B3",
    "d": "Reconstrução didática do apoio à plataforma Cloudera: automação com PL/SQL, exploração no Spotfire, consultas Hive/Impala e observabilidade de HDFS, Sentry e Kerberos. Dados e volumes sintéticos.",
    "u": "cetip-hadoop-admin.html",
    "btn": "Abrir demonstração →"
   }
  ],
  "stints": [
   {
    "r": "Engenharia de Dados e Gestão da Informação",
    "per": "2016 a 2017",
    "prob": "Na área de Gestão da Informação, a produção estatística dependia de consultas executadas manualmente, sem rotinas padronizadas e reproduzíveis. Em paralelo, a companhia adotava uma plataforma Cloudera de Big Data, um ecossistema distribuído novo para o time, que exigia organização de dados, consultas, permissões e acompanhamento de processamentos.",
    "dec": "Rotinas em Oracle PL/SQL foram desenvolvidas e evoluídas para coletar, consolidar, tratar e disponibilizar dados, com procedures, funções, consultas analíticas, regras de transformação e validações que substituíram a execução recorrente de consultas isoladas. O TIBCO Spotfire funcionava como camada analítica e de visualização sobre os conjuntos preparados. Em paralelo, a atuação apoiava as atividades da plataforma Cloudera, trabalhando com Hadoop, HDFS, Hive, Impala, Sentry e Kerberos: organização dos dados no ambiente distribuído, consultas, permissões, acompanhamento de processamentos e investigação de problemas. Hive estruturava consultas sobre os dados distribuídos, Impala atendia consultas de menor latência, e Sentry e Kerberos faziam parte da segurança, autenticação e autorização do ambiente.",
    "res": "A automação reduziu atividades manuais e padronizou a produção estatística, tornando as regras parte de rotinas estruturadas, com parâmetros, controles e resultados reproduzíveis, e disponibilizando os dados para análise no Spotfire. O contato com o ecossistema Hadoop criou a base técnica que posteriormente evoluiu para Spark, arquiteturas distribuídas e plataformas de dados em cloud.",
    "metrics": [
     "automação estatística PL/SQL",
     "Spotfire analítico",
     "apoio ao ambiente Cloudera",
     "base para Spark e cloud"
    ],
    "stack": [
     "Oracle PL/SQL",
     "TIBCO Spotfire",
     "Cloudera",
     "Hadoop",
     "HDFS",
     "Hive",
     "Impala",
     "Sentry",
     "Kerberos",
     "Shell Script"
    ]
   }
  ],
  "arch": [
   [
    "Fontes",
    "sistemas internos · mercado"
   ],
   [
    "Automação",
    "Oracle PL/SQL · rotinas"
   ],
   [
    "Analítico",
    "TIBCO Spotfire"
   ],
   [
    "Distribuído",
    "Cloudera · Hadoop · Hive · Impala"
   ],
   [
    "Segurança",
    "Sentry · Kerberos"
   ]
  ],
  "stat3": [
   {
    "v": "PL/SQL + Spotfire",
    "l": "automação estatística e camada analítica de visualização"
   },
   {
    "v": "Cloudera",
    "l": "apoio ao ecossistema Hadoop: Hive, Impala, Sentry e Kerberos"
   },
   {
    "v": "primeiro",
    "l": "projeto de Big Data e início da especialização em plataformas distribuídas"
   }
  ],
  "layers": [
   {
    "icon": "🗄️",
    "title": "Fontes · mercado e sistemas internos",
    "desc": "Dados de mercado financeiro, transações de custódia e sistemas internos da B3 (pré-fusão B3). Alta criticidade regulatória, dado errado tem impacto sistêmico."
   },
   {
    "icon": "⚙️",
    "title": "Automação estatística · Oracle PL/SQL",
    "desc": "Rotinas em PL/SQL com procedures, funções, consultas analíticas, regras de transformação e validações. Substituíram a execução manual e recorrente de consultas isoladas por processos parametrizados e reproduzíveis."
   },
   {
    "icon": "📊",
    "title": "TIBCO Spotfire · camada analítica",
    "desc": "Os conjuntos preparados no Oracle alimentavam painéis e análises no Spotfire, usados para explorar indicadores e acompanhar as informações estatísticas."
   },
   {
    "icon": "☁️",
    "title": "Cloudera CDH · Hadoop",
    "desc": "Apoio ao ambiente Cloudera: organização dos dados no cluster, consultas, acompanhamento de processamentos e investigação de problemas, junto ao time responsável pela plataforma. Primeiro contato com processamento distribuído (Hive e Impala)."
   },
   {
    "icon": "🔐",
    "title": "Sentry + Kerberos · segurança",
    "desc": "Sentry para controle de acesso granular (coluna a coluna). Kerberos para autenticação mútua no cluster. Conformidade com a regulação do mercado financeiro."
   }
  ],
  "code": [
   {
    "tab": "Hive Optimization",
    "label": "Otimização de query Hive com particionamento e bucketing (HQL)",
    "code": "-- Antes: query varrendo 3 anos inteiros, 45 minutos\n-- Depois: com particionamento + bucket, 4 minutos\n\n-- 1. Recria tabela com particionamento temporal\nCREATE TABLE cetip_negociacoes_part\n    PARTITIONED BY (ano INT, mes INT)\n    CLUSTERED BY (codigo_ativo) INTO 64 BUCKETS\n    STORED AS ORC TBLPROPERTIES (\"orc.compress\"=\"SNAPPY\")\nAS SELECT *, YEAR(data_negociacao) ano, MONTH(data_negociacao) mes\n   FROM cetip_negociacoes_raw;\n\n-- 2. Habilita estatísticas automáticas\nSET hive.stats.autogather=true;\nANALYZE TABLE cetip_negociacoes_part PARTITION(ano=2016, mes=12) COMPUTE STATISTICS;\n\n-- 3. Usa partition pruning automático\nSELECT codigo_ativo, SUM(volume) AS vol_total, AVG(preco) AS preco_medio\nFROM cetip_negociacoes_part\nWHERE ano = 2016 AND mes = 12  -- lê só 1/36 da tabela\nGROUP BY codigo_ativo\nORDER BY vol_total DESC\nLIMIT 100;\n-- Resultado: 45min → 4min (11x mais rápido)",
    "note": "Uma consulta que varria três anos de negociações levava dezenas de minutos. Duas técnicas resolvem isso. O particionamento organiza a tabela em gavetas por ano e mês, então uma consulta de um mês específico lê só aquela gaveta em vez da tabela inteira (o chamado partition pruning). O bucketing agrupa os registros por ativo, acelerando somas e junções. Guardar em formato ORC comprimido e manter estatísticas atualizadas completa o ganho. É engenharia de consulta: mesma pergunta, uma fração do tempo."
   },
   {
    "tab": "Shell Admin",
    "label": "Automação de administração do cluster Cloudera (Shell Script)",
    "code": "#!/bin/bash\n# Monitoramento diário do cluster B3/B3, Cloudera CDH\nLOG=\"/var/log/cloudera/health-check-$(date +%Y%m%d).log\"\n\ncheck_hdfs_health() {\n    HDFS_USAGE=$(hdfs dfs -df -h / | awk 'NR==2 {print $5}' | tr -d '%')\n    if [ \"$HDFS_USAGE\" -gt 80 ]; then\n        echo \"ALERT: HDFS usage ${HDFS_USAGE}% > 80%\" | tee -a $LOG\n        mail -s \"B3 HDFS Alert\" sre-team@cetip.com.br <<< \"HDFS: ${HDFS_USAGE}%\"\n    else\n        echo \"[OK] HDFS: ${HDFS_USAGE}% utilizado\" | tee -a $LOG\n    fi\n}\n\ncheck_datanode_health() {\n    DEAD=$(hdfs dfsadmin -report | grep \"Dead datanodes\" | awk '{print $3}')\n    if [ \"$DEAD\" -gt 0 ]; then\n        echo \"ALERT: ${DEAD} DataNode(s) morto(s)!\" | tee -a $LOG\n    else\n        echo \"[OK] Todos DataNodes ativos\" | tee -a $LOG\n    fi\n}\n\ncheck_hdfs_health\ncheck_datanode_health\necho \"Health check concluído: $(date)\" | tee -a $LOG",
    "note": "Manter um cluster da bolsa no ar exige vigilância constante. Este script roda a checagem de saúde diária automaticamente: mede quanto do armazenamento HDFS está ocupado e, se passar de 80%, envia um e-mail de alerta para o time; verifica também se algum DataNode (as máquinas que guardam os dados) caiu. Tudo fica registrado em log com data. É a diferença entre descobrir um problema por monitoramento preventivo e descobrir quando o serviço já parou."
   },
   {
    "tab": "PL/SQL Stats",
    "label": "Automação das estatísticas do site B3, PL/SQL Oracle 11g (rotina parametrizada e reproduzível)",
    "code": "-- Automação de estatísticas do site B3/B3, PL/SQL Oracle 11g\n-- Antes: geração manual e recorrente. Depois: rotina automatizada e parametrizada.\n\nCREATE OR REPLACE PROCEDURE p_gerar_estatisticas_cetip AS\n    v_inicio TIMESTAMP := SYSTIMESTAMP;\n    v_total  NUMBER;\nBEGIN\n    EXECUTE IMMEDIATE 'TRUNCATE TABLE cetip_stats_diario';\n\n    INSERT INTO cetip_stats_diario (\n        ativo, data_ref, vol_total, preco_medio, num_negocios, variacao_pct\n    )\n    SELECT\n        codigo_ativo,\n        TRUNC(data_negociacao)                         AS data_ref,\n        SUM(volume_financeiro)                         AS vol_total,\n        AVG(preco_unitario)                            AS preco_medio,\n        COUNT(*)                                       AS num_negocios,\n        -- Variação em relação ao dia anterior (LAG window function)\n        ROUND(\n            (AVG(preco_unitario)\n             - LAG(AVG(preco_unitario), 1)\n               OVER (PARTITION BY codigo_ativo ORDER BY TRUNC(data_negociacao)))\n            / NULLIF(\n                LAG(AVG(preco_unitario), 1)\n                OVER (PARTITION BY codigo_ativo ORDER BY TRUNC(data_negociacao)),\n              0) * 100\n        , 2)                                           AS variacao_pct\n    FROM cetip_negociacoes_raw\n    WHERE data_negociacao >= SYSDATE - 30\n    GROUP BY codigo_ativo, TRUNC(data_negociacao);\n\n    v_total := SQL%ROWCOUNT;\n    INSERT INTO etl_log VALUES\n        ('p_gerar_estatisticas_cetip', v_inicio, SYSTIMESTAMP, v_total, 'SUCESSO');\n    COMMIT;\n    DBMS_OUTPUT.PUT_LINE('[OK] ' || v_total || ' registros processados pela rotina automatizada');\nEND;",
    "note": "A produção das estatísticas do site da B3 era manual e se repetia todo dia. Esta procedure em PL/SQL encapsula essa rotina: limpa a tabela do dia, recalcula volume, preço médio, número de negócios e a variação frente ao dia anterior (usando LAG, uma função que olha o valor da linha anterior), e registra a execução num log de auditoria. Transformar a tarefa repetitiva em uma rotina parametrizada e reproduzível elimina erro humano e deixa cada rodada previsível e rastreável."
   }
  ],
  "faq": [
   {
    "q": "Quais são as particularidades de trabalhar com dados de uma bolsa de valores em Hadoop?",
    "a": "A B3 (hoje B3) opera com dados sistemicamente críticos, a indisponibilidade de um serviço em horário de mercado tem impacto regulatório. No contexto financeiro, disponibilidade e integridade prevalecem sobre performance, e cada decisão precisa responder à pergunta: \"e se isso falhar em dia de pregão?\"."
   },
   {
    "q": "Por que automatizar as estatísticas com PL/SQL e Spotfire?",
    "a": "A produção estatística dependia de consultas executadas manualmente, o que tornava o processo lento, sujeito a erro e difícil de reproduzir. Ao encapsular as regras em procedures PL/SQL parametrizadas, cada rodada passa a ser previsível, com validações e log de execução, e o Spotfire consome os conjuntos já preparados para explorar indicadores. Em vez de repetir consultas isoladas toda vez, a regra vive em uma rotina estruturada."
   },
   {
    "q": "Por que Kerberos e Sentry juntos?",
    "a": "Kerberos resolve autenticação (quem você é), Sentry resolve autorização (o que você pode fazer). Em um ambiente regulado como mercado financeiro, não basta saber que é fulano, precisa garantir que fulano não acessa a coluna de preço antes do horário correto. A combinação dos dois entrega isso de forma auditável."
   }
  ],
  "heroImg": "assets/gallery-signatures/jen-leadership-ai.webp",
  "heroGrad": "linear-gradient(125deg,#003552,#006b94)",
  "heroLogo": "assets/brand-logos/b3.png"
 }
];
