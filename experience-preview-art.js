/* Each entry is a separate drawing for one public application. No company-wide fallback. */
(()=>{'use strict';
const E=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const L=a=>a[({pt:0,en:1,es:2,ja:3})[(document.documentElement.lang||'pt').slice(0,2)]]||a[1];
const R=(x,y,w,h,cls='u-card',radius=7)=>`<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${radius}" class="${cls}"/>`;
const C=(x,y,r,cls='u-node')=>`<circle cx="${x}" cy="${y}" r="${r}" class="${cls}"/>`;
const P=(d,cls='u-line')=>`<path d="${d}" class="${cls}"/>`;
const T=(x,y,s,cls='u-label')=>`<text x="${x}" y="${y}" class="${cls}">${E(s)}</text>`;
const G=(phase,s)=>`<g data-u-phase="${phase}">${s}</g>`;
const I=(name,x,y,size=24)=>{const shapes={bank:'M2 8 12 2l10 6M3 10h18M5 11v9M10 11v9M15 11v9M20 11v9M2 22h20',cloud:'M6 18h12a5 5 0 0 0 0-10 7 7 0 0 0-13-2 6 6 0 0 0 1 12',shield:'m12 2 9 4v6c0 5-9 10-9 10S3 17 3 12V6ZM8 12l3 3 5-6',doc:'M5 2h10l5 5v15H5ZM14 2v6h6M8 12h9M8 16h9M8 19h6',search:'M16 16 22 22M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0',coin:'M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0M9 7h5M9 12h5M9 17h5M12 5v14',bell:'M5 17h14l-2-4V9A5 5 0 0 0 7 9v4ZM10 21h4',mail:'M2 5h20v14H2ZM2 5l10 8L22 5',key:'M14 8a6 6 0 1 0-4 6L2 22M5 19l-2-2M8 16l-2-2',cube:'m12 2 10 6v9l-10 6-10-6V8ZM2 8l10 6 10-6M12 14v9',check:'m4 12 5 5L21 5',filter:'M2 3h20l-8 9v8l-4 2V12Z',cart:'M2 3h3l3 13h11l3-10H6M9 21h1M18 21h1',house:'m2 11 10-9 10 9M5 9v13h14V9M10 22v-8h4v8',code:'m8 5-6 7 6 7M16 5l6 7-6 7M14 2l-4 20',db:'M3 6c0-5 18-5 18 0s-18 5-18 0v12c0 5 18 5 18 0V6M3 12c0 5 18 5 18 0',gear:'M9 2h6l1 4 4 1 2 5-3 3v5l-5 2-3-3H6l-4-5 3-4V6ZM16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0',calendar:'M3 5h18v17H3ZM7 2v6M17 2v6M3 11h18M7 15h3M14 15h3',tag:'M2 3h10l10 10-9 9L2 11ZM7 7h1',chat:'M2 3h20v14H9l-5 5v-5H2ZM6 8h12M6 12h8',balance:'M12 2v19M5 21h14M3 7h18M6 7l-4 8h8ZM18 7l-4 8h8Z'};return `<g transform="translate(${x} ${y}) scale(${size/24})" class="u-icon">${P(shapes[name]||shapes.doc)}</g>`;};
const N=(x,y,w,h,label,ico='doc')=>R(x,y,w,h)+I(ico,x+9,y+(h<50?5:8),h<50?16:22)+T(x+w/2,y+h-7,label);
const S=d=>P(d,'u-signal');
const profiles={};
function add(key,phases,caption,draw){profiles[key]={key,phases,caption,draw,labels:()=>L(phases),summary:()=>L(caption),render(){return `<svg viewBox="0 0 420 132" class="u-artwork" data-phase="0" role="img" aria-label="${E(L(caption))}">${draw()}</svg>`;}};}
add('carrefour-datacatalog-app',[
 ['Buscar','Linhagem','Qualidade'],['Search','Lineage','Quality'],['Buscar','Linaje','Calidad'],['検索','リネージ','品質']],['Catálogo pesquisável, ativos conectados e qualidade dos dados.','Searchable catalog, connected assets and data quality.','Catálogo, activos conectados y calidad de datos.','検索できるカタログ、資産のつながり、データ品質。'],()=>
 G(0,R(13,8,238,23)+I('search',21,12,15)+P('M46 19h150')+N(15,43,75,76,'SQL','db'))+
 G(1,R(106,43,143,76)+[0,1,2].map(i=>R(116,53+i*19,122,12,'u-soft',3)+P(`M125 ${59+i*19}h35`)).join('')+S('M249 81H278V36H324M278 81h46M278 81v31h46')+C(335,36,12)+C(335,81,12)+C(335,112,12))+
 G(2,I('shield',367,50,39)+I('check',373,91,25)));
add('carrefour-datadog-app',[
 ['SLA','Carga','Incidentes'],['SLA','Load','Incidents'],['SLA','Carga','Incidentes'],['SLA','負荷','障害']],['Saúde dos serviços, mapa de carga e alertas de operação.','Service health, load heatmap and operational alerts.','Salud de servicios, mapa de carga y alertas.','サービスの状態、負荷ヒートマップ、運用アラート。'],()=>
 G(0,I('cloud',17,14,46)+P('M18 103H129M18 103V76l14-4 11 12 16-37 18 32 14-14 16 9 20-7','u-trace')+T(79,27,'SLA'))+
 G(1,Array.from({length:24},(_,i)=>R(153+(i%6)*27,17+Math.floor(i/6)*25,20,18,i%7===0?'u-warn':i%3===0?'u-tint':'u-soft',4)).join(''))+
 G(2,R(334,19,73,94)+I('bell',355,30,30)+P('M345 77h51M345 89h35M345 101h44')+C(394,27,5,'u-alert')));
add('itau-data-factory-app',[
 ['Workspace','Guard rails','Publicar'],['Workspace','Guard rails','Publish'],['Workspace','Protección','Publicar'],['作業環境','保護ルール','公開']],['Uma bancada de transformação com governança antes da entrega.','A transformation workbench with governance before delivery.','Transformación con gobierno antes de la entrega.','変換の作業環境と、配信前のガバナンス。'],()=>
 G(0,R(12,10,220,110)+R(12,10,220,22,'u-soft')+C(24,21,2)+C(33,21,2)+C(42,21,2)+[0,1,2].map((i)=>N(24+i*67,46,58,59,['HQL','Spark','Python'][i],'code')).join(''))+
 G(1,S('M232 65h35')+I('shield',266,40,46)+C(287,108,9)+I('check',280,101,14))+
 G(2,S('M314 65h31')+N(346,31,62,70,'DAG','gear')));
add('itau-observability-dashboard',[
 ['Camadas','Latência','Alerta'],['Layers','Latency','Alert'],['Capas','Latencia','Alerta'],['レイヤー','遅延','通知']],['Latência por camada e encaminhamento de alertas críticos.','Latency by layer and routing of critical alerts.','Latencia por capa y alertas críticas.','レイヤー別の遅延と重要アラートの通知経路。'],()=>
 G(0,[0,1,2,3].map(i=>R(14,13+i*28,81,20,'u-card',5)+T(54,27+i*28,['RAW','HDFS','Spark','BI'][i])).join(''))+
 G(1,[114,169,232,286].map((end,i)=>P(`M108 ${23+i*28}H${end}`,'u-trace')+C(end,23+i*28,4)+S(`M108 ${23+i*28}H${end}`)).join('')+P('M304 8v115','u-grid'))+
 G(2,C(359,54,28)+I('bell',345,39,28)+P('M359 83v20h36')+I('chat',382,93,22)+C(381,30,5,'u-alert')));
add('itau-finops-dashboard',[
 ['Serviços','Rightsizing','Economia'],['Services','Rightsizing','Savings'],['Servicios','Ajuste','Ahorro'],['サービス','適正化','節約']],['Custos por serviço, recursos ajustados e oportunidades de economia.','Costs by service, resource sizing and saving opportunities.','Costos por servicio, ajuste y oportunidades de ahorro.','サービス別コスト、リソース適正化、節約の機会。'],()=>
 G(0,R(13,13,152,106)+R(21,21,83,89,'u-tint')+R(111,21,46,39,'u-soft')+R(111,67,46,43,'u-soft')+T(62,67,'EC2')+T(134,46,'S3')+T(134,94,'RDS'))+
 G(1,P('M187 34h57M187 65h37M187 96h19','u-trace')+P('M251 27v79m-7-8 7 8 7-8')+S('M187 34h57'))+
 G(2,C(335,65,47,'u-ring')+I('coin',316,45,38)+P('M298 28a47 47 0 0 1 75 65','u-trace')+P('m371 85 2 10-11-2')));
add('cases-itau',[
 ['Consentir','Reunir','Capacidade'],['Consent','Combine','Capacity'],['Consentir','Reunir','Capacidad'],['同意','集約','支払能力']],['Dados de diferentes bancos ampliam o contexto da capacidade de pagamento.','Data from different banks broadens payment-capacity context.','Datos de varios bancos amplían el contexto de pago.','複数銀行のデータで支払能力の状況を把握。'],()=>
 G(0,[12,126,240].map(x=>I('bank',x+21,4,33)+R(x,43,75,12,'u-soft',4)).join('')+I('shield',360,10,29))+
 G(1,S('M49 59v22h130M164 59v22h15M278 59v22h-40')+R(181,67,59,32,'u-tint')+I('filter',198,70,24))+
 G(2,P('M240 83h88')+R(331,66,71,55)+I('balance',352,73,29)+T(366,116,'PF')));
add('itau-analytics-dashboard',[
 ['Entradas','Comparar','Composição'],['Receipts','Compare','Composition'],['Ingresos','Comparar','Composición'],['入金','比較','構成']],['Comparação mensal de recebimentos e composição PF/PJ.','Monthly receipts comparison and individual/business composition.','Comparación mensual de ingresos y composición PF/PJ.','月別入金の比較と個人・法人の構成。'],()=>
 G(0,P('M18 110H269M18 110V18','u-grid')+[37,83,129,175,221].map((x,i)=>R(x,59,12,50,'u-soft',2)+R(x+14,[42,30,50,21,35][i],12,[67,79,59,88,74][i],'u-tint',2)).join(''))+
 G(1,P('M18 59H269','u-dash')+C(188,21,7,'u-focus')+S('M188 21V110')+P('M173 13h31M188 7v28'))+
 G(2,C(341,60,37,'u-ring')+P('M341 23a37 37 0 1 1-7 1','u-trace')+T(341,65,'PF / PJ')+T(341,119,'Open Finance')));
add('creditas-dataplatform-app',[
 ['Hudi','Qualidade','lakeFS'],['Hudi','Quality','lakeFS'],['Hudi','Calidad','lakeFS'],['Hudi','品質','lakeFS']],['Commits incrementais, gate de qualidade e versionamento do lake.','Incremental commits, a quality gate and lake versioning.','Commits incrementales, validación y versiones del lake.','増分コミット、品質ゲート、レイクのバージョン管理。'],()=>
 G(0,P('M21 77h135','u-line')+[35,83,131].map((x,i)=>C(x,77,8)+P(`M${x} 69V${30+i*8}`)+R(x-18,13+i*8,36,17,'u-soft',4)).join('')+T(83,115,'Hudi'))+
 G(1,R(180,18,68,97)+I('shield',198,30,32)+[0,1].map(i=>I('check',196,72+i*17,17)).join('')+S('M156 77h24'))+
 G(2,P('M270 104V26h45M270 68h45M315 26v42h67')+C(270,104,7)+C(315,26,7)+C(315,68,7)+C(382,68,7)+T(349,114,'lakeFS')));
add('creditas-credit-app',[
 ['Variáveis','Árvores','Política'],['Features','Trees','Policy'],['Variables','Árboles','Política'],['特徴量','決定木','審査方針']],['Variáveis alimentam as árvores; a política interpreta o resultado.','Features feed the trees; policy interprets the result.','Las variables alimentan árboles y la política interpreta el resultado.','特徴量を決定木へ渡し、その結果を審査方針で解釈。'],()=>
 G(0,[0,1,2].map(i=>P(`M15 ${26+i*39}h87`)+C([44,75,56][i],26+i*39,6)).join(''))+
 G(1,C(209,20,12)+P('M209 32v16h-43v22M209 48h43v22M166 82v18h-26v16M166 100h25v16M252 82v32')+[166,252].map(x=>R(x-15,69,30,16,'u-tint',5)).join('')+[140,191,252].map(x=>C(x,118,7)).join(''))+
 G(2,P('M309 97a45 45 0 0 1 90 0','u-ring')+P('M354 97l27-34','u-trace')+C(354,97,5)+I('shield',342,25,25)+S('M281 69h29')));
add('experiencia-app#creditas',[
 ['Objetos','Proteção','IaC'],['Objects','Protection','IaC'],['Objetos','Protección','IaC'],['オブジェクト','保護','インフラ']],['Objetos do lake protegidos por camadas de segurança e infraestrutura como código.','Lake objects protected by security layers and infrastructure as code.','Objetos protegidos por seguridad e infraestructura como código.','レイクのオブジェクトを多層保護とIaCで管理。'],()=>
 G(0,[0,1,2].map(i=>N(14+i*32,17+i*28,70,41,['Parquet','S3','Hudi'][i],'doc')).join(''))+
 G(1,C(246,65,52,'u-dash-ring')+C(246,65,37,'u-ring')+I('shield',229,45,34)+S('M139 65h54'))+
 G(2,N(334,26,71,78,'IaC','code')+P('M298 65h36')+P('M345 111h50')));
add('quintoandar-sre-dashboard',[
 ['Pods','SLO','Incidente'],['Pods','SLO','Incident'],['Pods','SLO','Incidente'],['Pod','SLO','障害']],['Cluster Kubernetes, orçamento de erro e resposta a incidentes.','Kubernetes cluster, error budget and incident response.','Kubernetes, presupuesto de error y respuesta a incidentes.','Kubernetes、エラーバジェット、障害対応。'],()=>
 G(0,[[48,27],[98,16],[148,27],[48,103],[98,115],[148,103]].map(([x,y],i)=>P(`M98 65L${x} ${y}`,'u-dash')+`<path d="M${x-11} ${y-6}l11-6 11 6v12l-11 6-11-6Z" class="${i===4?'u-warn':'u-tint'}"/>`).join('')+`<path d="M82 56l16-9 16 9v18l-16 9-16-9Z" class="u-card"/>`+T(98,69,'K8s'))+
 G(1,C(238,65,40,'u-ring')+P('M210 36a40 40 0 1 1-9 42','u-trace')+T(238,69,'SLO'))+
 G(2,R(310,24,94,87)+I('bell',343,32,29)+P('M322 76h70M322 88h43M322 99h58')+C(390,33,5,'u-alert')));
add('experiencia-app#quintoandar',[
 ['Catálogo','Linhagem','Impacto'],['Catalog','Lineage','Impact'],['Catálogo','Linaje','Impacto'],['カタログ','リネージ','影響']],['Um mapa de dependências conecta datasets e mostra a linhagem no Atlas.','A dependency map connects datasets and shows Atlas lineage.','Dependencias entre datasets y linaje en Atlas.','Atlasでデータセットの依存関係とリネージを確認。'],()=>
 G(0,N(17,44,75,59,'Atlas','search'))+
 G(1,S('M92 74h62V28h49M154 74h49M154 74v38h49')+[28,74,112].map((y,i)=>R(205,y-11,78,22,'u-card',5)+T(244,y+4,['Dataset','Schema','Owner'][i])).join(''))+
 G(2,P('M283 28h33v46h41M283 74h74M283 112h33V74')+C(375,74,18)+I('house',363,62,24)));
add('cogna-data-validator',[
 ['Procedure','AWS','Conferir'],['Procedure','AWS','Reconcile'],['Procedure','AWS','Conciliar'],['プロシージャ','AWS','照合']],['Da procedure monolítica ao processamento distribuído com validação.','From a monolithic procedure to distributed processing with validation.','De una procedure monolítica al procesamiento distribuido validado.','巨大プロシージャから、検証付き分散処理へ。'],()=>
 G(0,R(15,12,78,109)+T(54,31,'SQL')+[0,1,2,3,4,5].map(i=>P(`M28 ${44+i*11}h${i%2?39:51}`)).join(''))+
 G(1,S('M96 65h40M136 65V29h38M136 65h38M136 65v37h38')+[21,58,95].map((y,i)=>R(176,y,93,24,'u-tint',6)+T(222,y+16,['Airflow','PySpark','EMR'][i])).join(''))+
 G(2,P('M269 33h20v32h23M269 70h43M269 107h20V70')+I('balance',316,41,48)+I('check',371,56,25)));
add('cogna-finance-mobile',[
 ['Receita','Custos','Fechamento'],['Revenue','Costs','Close'],['Ingresos','Costos','Cierre'],['収益','費用','締め処理']],['Receita, custo e resultado acompanham o fechamento no Power BI.','Revenue, cost and results follow the Power BI close cycle.','Ingresos, costos y resultado en el cierre de Power BI.','Power BIで収益・費用・損益と締め処理を追跡。'],()=>
 G(0,R(15,11,94,29)+T(62,30,'Power BI')+R(20,65,35,50,'u-tint',3)+P('M55 65h36','u-dash'))+
 G(1,R(91,65,35,20,'u-soft',3)+P('M126 85h36','u-dash')+R(162,85,35,17,'u-soft',3)+P('M197 102h36','u-dash')+R(233,102,35,13,'u-tint',3)+P('M15 116h263','u-grid'))+
 G(2,R(305,19,96,98)+I('calendar',322,30,30)+I('check',365,38,24)+P('M319 81h68M319 96h42')+S('M280 103h25')));
add('serasa-query-engine',[
 ['Entidade','Fontes','Relatório'],['Entity','Sources','Report'],['Entidad','Fuentes','Informe'],['対象企業','情報源','レポート']],['Fontes distintas convergem para uma consulta explicável sobre uma entidade fictícia.','Different sources converge into an explainable query about a fictional entity.','Fuentes reunidas en una consulta sobre una entidad ficticia.','架空企業について複数の情報源を統合して説明可能な照会へ。'],()=>
 G(0,R(11,45,93,44)+I('search',23,56,21)+T(77,72,'ID'))+
 G(1,[16,51,86,121].map((y,i)=>C(190,y,10)+P(`M104 66H142V${y}h38`)+T(230,y+4,['API','BACEN','DATA','INDEX'][i])).join('')+S('M256 16h25v50h27M256 51h25M256 86h25V66M256 121h25V66'))+
 G(2,N(311,33,92,69,'Report','doc')+I('check',373,11,22)));
add('experiencia-app#serasa-experian',[
 ['Indexar','Pesquisar','Encontrar'],['Index','Search','Find'],['Indexar','Buscar','Encontrar'],['索引作成','検索','取得']],['Um índice invertido conecta termos e documentos para a busca analítica.','An inverted index connects terms and documents for analytical search.','Un índice invertido conecta términos y documentos.','転置インデックスで語句と文書を結び、分析検索へ。'],()=>
 G(0,[0,1,2].map(i=>R(14,15+i*37,90,27,'u-soft',4)+P(`M25 ${28+i*37}h59`)).join(''))+
 G(1,R(151,12,111,111)+[0,1,2,3].map(i=>P(`M151 ${34+i*22}h111`)+T(169,29+i*22,String.fromCharCode(65+i))+C(207,25+i*22,4)+C(232,25+i*22,4)).join('')+S('M104 28h47M104 65h47M104 102h47'))+
 G(2,I('search',308,15,36)+P('M280 68h20')+R(308,67,95,23,'u-tint',5)+R(308,97,75,23,'u-soft',5)+T(355,83,'Elastic')));
add('dafiti-anomaly-detector',[
 ['SKUs','Desvio','Investigar'],['SKUs','Deviation','Investigate'],['SKUs','Desvío','Investigar'],['SKU','異常','調査']],['Um ponto fora do padrão destaca o SKU que precisa de investigação.','An outlying point highlights the SKU needing investigation.','Un punto atípico identifica el SKU que necesita revisión.','外れ値から調査すべきSKUを見つける。'],()=>
 G(0,P('M20 16v103h235','u-grid')+[[43,91],[57,70],[75,88],[94,62],[107,78],[124,53],[140,70],[160,46],[176,59],[199,37],[216,52],[234,29]].map(p=>C(...p,4,'u-dot')).join(''))+
 G(1,C(134,110,5,'u-alert')+C(134,110,14,'u-focus')+P('M144 105l43-14 48 5','u-dash'))+
 G(2,R(286,26,116,81)+I('tag',297,37,28)+I('search',358,42,27)+T(344,91,'IsolationForest')+S('M248 96h38')));
add('experiencia-app#dafiti',[
 ['Particionar','Distribuir','Consolidar'],['Partition','Distribute','Consolidate'],['Particionar','Distribuir','Consolidar'],['分割','分散','集約']],['O processamento se divide entre workers e volta a uma saída consolidada.','Processing fans out to workers and returns to a consolidated output.','El trabajo se distribuye y vuelve a una salida consolidada.','処理をワーカーへ分散し、結果を一つに集約。'],()=>
 G(0,I('cart',16,44,37)+P('M61 65h34V20h35M95 65h35M95 65v45h35'))+
 G(1,[7,52,97].map((y,i)=>R(132,y,140,28,'u-card')+T(201,y+18,['Spark / 01','Spark / 02','Spark / 03'][i])+S(`M151 ${y+23}h102`)).join(''))+
 G(2,P('M272 20h24v45h44M272 65h68M272 110h24V65')+I('db',354,41,45)+T(376,115,'S3')));
add('oracle-solutions-map',[
 ['Contas','Adoção','Modernizar'],['Accounts','Adoption','Modernize'],['Cuentas','Adopción','Modernizar'],['顧客','活用','刷新']],['Uma matriz relaciona contas, soluções contratadas e oportunidades de evolução.','A matrix relates accounts, contracted solutions and modernization opportunities.','Matriz de cuentas, soluciones y oportunidades de evolución.','顧客・契約ソリューション・刷新の機会をマトリクスで確認。'],()=>
 G(0,Array.from({length:8},(_,i)=>I('bank',14,4+i*15,13)+P(`M36 ${12+i*15}h58`)).join(''))+
 G(1,Array.from({length:32},(_,i)=>R(119+(i%4)*32,6+Math.floor(i/4)*15,25,10,i%5===0?'u-warn':i%3===0?'u-tint':'u-soft',2)).join(''))+
 G(2,I('db',286,18,40)+S('M309 62v26h40')+I('cloud',352,74,48)+T(375,128,'OCI')));
add('oracle-cs-health',[
 ['Dimensões','Equilíbrio','Ação'],['Dimensions','Balance','Action'],['Dimensiones','Equilibrio','Acción'],['評価軸','バランス','対応']],['Cinco dimensões compõem a leitura de saúde da conta.','Five dimensions compose the account-health view.','Cinco dimensiones componen la salud de la cuenta.','5つの評価軸から顧客アカウントの状態を把握。'],()=>
 G(0,P('M99 8 154 48 133 112H65L44 48Z','u-grid')+P('M99 36 126 56 116 88H82L72 56Z','u-grid')+P('M99 65V8M99 65l55-17M99 65l34 47M99 65l-34 47M99 65L44 48','u-grid'))+
 G(1,P('M99 22 143 51 122 99 74 88 57 53Z','u-area')+[22,44,66,88,110].map((y,i)=>P(`M202 ${y}h93`)+C([253,275,237,265,247][i],y,5)).join(''))+
 G(2,C(365,66,35,'u-ring')+I('check',349,49,32)+P('M338 106h54')));
add('ibm-crm-integration',[
 ['Evento','Mensageria','CRM'],['Event','Messaging','CRM'],['Evento','Mensajería','CRM'],['イベント','メッセージ','CRM']],['O evento percorre a mensageria até ficar disponível no CRM.','An event traverses messaging until it is available in CRM.','El evento recorre la mensajería hasta el CRM.','メッセージ経路を通してイベントをCRMへ届ける。'],()=>
 G(0,I('mail',9,13,31)+P('M43 29h29'))+
 G(1,[[75,14,'MQ'],[148,14,'Flume'],[221,14,'Kafka'],[221,88,'Storm'],[148,88,'ES'],[75,88,'Camel']].map(([x,y,l])=>R(x,y,61,29,'u-card',5)+T(x+30,y+19,l)).join('')+S('M136 28h12M209 28h12M282 28h14v74h-14M221 102h-12M148 102h-12'))+
 G(2,R(337,45,68,44,'u-tint')+T(371,72,'CRM')+S('M75 102H61V67h276')));
add('jellyfish-martech-app',[
 ['Publishers','Campanhas','KPI Bot'],['Publishers','Campaigns','KPI Bot'],['Publishers','Campañas','KPI Bot'],['媒体','広告','KPI Bot']],['Comparação entre publishers conectada a perguntas sobre os indicadores.','Publisher comparison connected to questions about performance indicators.','Comparación de publishers y preguntas sobre indicadores.','媒体を比較し、指標についてKPI Botへ質問。'],()=>
 G(0,[0,1,2,3].map(i=>C(26,21+i*29,9)+P(`M42 ${21+i*29}h45`)).join(''))+
 G(1,[145,113,95,63].map((w,i)=>R(105,12+i*29,w,16,'u-tint',4)+P(`M${105+w+5} ${20+i*29}h15`)).join('')+T(183,130,'CTR / ROAS'))+
 G(2,R(299,12,107,72)+I('chat',314,25,37)+P('M358 35h34M358 47h25')+R(326,94,77,22,'u-soft')+T(365,109,'KPI Bot')));
add('experiencia-app#ibm',[
 ['APIs','Integração','Canais'],['APIs','Integration','Channels'],['APIs','Integración','Canales'],['API','統合','チャネル']],['Duas frentes de integração: eventos CRM e dados de campanhas.','Two integration fronts: CRM events and campaign data.','Dos frentes: eventos CRM y datos de campañas.','CRMイベントと広告データ、2つの統合領域。'],()=>
 G(0,N(13,8,80,45,'CRM','mail')+N(13,79,80,45,'Ads','tag'))+
 G(1,S('M93 31h59v35h28M93 102h59V66')+C(217,66,37)+I('gear',198,47,38)+P('M205 9h25M205 123h25'))+
 G(2,S('M254 66h38V26h30M292 66v40h30')+N(323,5,82,43,'Data','db')+N(323,85,82,43,'Alert','bell')));
add('santander-big-data-pipeline',[
 ['Selecionar','Lote','Reconciliar'],['Select','Batch','Reconcile'],['Seleccionar','Lote','Conciliar'],['選択','バッチ','照合']],['Tabelas selecionadas seguem em lote até a reconciliação.','Selected tables travel in a batch through reconciliation.','Tablas seleccionadas procesadas en lote y conciliadas.','選択したテーブルをバッチ処理して照合。'],()=>
 G(0,[0,1,2].map(i=>R(13,14+i*36,107,28,'u-card',5)+R(21,22+i*36,10,10,'u-soft',2)+I('check',22,22+i*36,10)+P(`M40 ${27+i*36}h65`)).join(''))+
 G(1,S('M120 63h28')+[0,1,2].map(i=>R(151+i*11,28+i*17,108,51,'u-soft')+T(204+i*11,57+i*17,['Sqoop','Spark','Hive'][i])).join(''))+
 G(2,I('balance',331,26,52)+P('M324 102h74M336 115h50')+S('M281 80h47')));
add('experiencia-app#santander',[
 ['Partições','Reprocessar','Commit'],['Partitions','Reprocess','Commit'],['Particiones','Reprocesar','Commit'],['パーティション','再処理','コミット']],['A partição de um lote pode ser reprocessada e publicada com controle.','A batch partition can be reprocessed and published under control.','Reprocesamiento y publicación controlada de una partición.','バッチのパーティションを再処理し、制御して公開。'],()=>
 G(0,R(13,17,161,102)+Array.from({length:15},(_,i)=>R(24+(i%5)*28,32+Math.floor(i/5)*25,20,17,i===7?'u-tint':'u-soft',3)).join(''))+
 G(1,P('M206 47a27 27 0 1 1 1 42','u-trace')+P('m200 45 10-3-2 10M212 91l-10 1 3-9')+T(235,120,'Batch'))+
 G(2,N(327,28,78,75,'Commit','shield')+S('M276 65h51')));
add('b3-plsql-lab',[
 ['Validar','Consolidar','Reexecutar'],['Validate','Aggregate','Rerun'],['Validar','Consolidar','Reejecutar'],['検証','集計','再実行']],['Uma rotina PL/SQL valida o lote e produz indicadores sem duplicar a saída.','A PL/SQL routine validates a batch and aggregates without duplicating output.','PL/SQL valida y consolida sin duplicar la salida.','PL/SQLでバッチを検証・集計し、出力の重複を防ぐ。'],()=>
 G(0,R(12,10,141,112)+T(81,32,'BEGIN')+P('M27 45h106M27 59h79M27 73h91M27 87h65')+T(81,111,'END;'))+
 G(1,S('M153 65h37')+R(194,21,98,91)+[0,1,2].map(i=>P(`M194 ${44+i*23}h98M${220+i*24} 21v91`)).join('')+T(243,36,'SQL'))+
 G(2,I('doc',339,24,41)+C(371,91,20)+I('check',359,79,24)+S('M292 65h42')));
add('cetip-hadoop-admin',[
 ['HDFS','Cloudera','Segurança'],['HDFS','Cloudera','Security'],['HDFS','Cloudera','Seguridad'],['HDFS','Cloudera','保護']],['Nós de armazenamento, administração do cluster e controles de acesso.','Storage nodes, cluster administration and access controls.','Nodos de almacenamiento, administración y acceso.','ストレージノード、クラスタ管理、アクセス制御。'],()=>
 G(0,[0,1,2].map(i=>R(13,13+i*38,73,28,'u-card',4)+P(`M23 ${24+i*38}h51M23 ${31+i*38}h31`)).join(''))+
 G(1,C(216,66,22)+[[-46,-37],[45,-37],[-46,38],[45,38]].map(([x,y])=>P(`M216 66l${x} ${y}`)+R(216+x-18,66+y-13,36,26,'u-tint',5)).join('')+T(216,70,'CDP'))+
 G(2,I('key',329,18,30)+I('shield',366,52,38)+T(351,118,'Kerberos')));
add('experiencia-app#b3',[
 ['Distribuição','Estatística','Spotfire'],['Distribution','Statistics','Spotfire'],['Distribución','Estadística','Spotfire'],['分布','統計','Spotfire']],['Distribuições e indicadores estatísticos apoiam a exploração no Spotfire.','Distributions and statistical indicators support Spotfire exploration.','Distribuciones e indicadores para explorar en Spotfire.','分布と統計指標をSpotfireで探索。'],()=>
 G(0,P('M15 117H263M15 117V13','u-grid')+[12,28,54,85,97,80,51,28,14].map((h,i)=>R(29+i*25,116-h,18,h,'u-soft',2)).join(''))+
 G(1,P('M21 109C62 109 82 17 139 17S216 110 263 109','u-trace')+P('M139 18v99','u-dash')+C(139,17,5))+
 G(2,R(304,18,99,98)+P('M319 42h70M319 62h50M319 82h63')+T(353,105,'Spotfire')));
window.JEN_APP_ART=Object.freeze(profiles);
})();
