(()=>{
 'use strict';
 const text={pt:{hint:'Clique em uma etapa para entender sua função no fluxo.',about:'Sobre esta etapa',tools:'Tecnologias e contexto',previous:'Etapa anterior',next:'Próxima etapa',start:'Entrada do fluxo',end:'Saída para consumo',input:'Recebe de',output:'Entrega para'},en:{hint:'Select a stage to understand its role in the flow.',about:'About this stage',tools:'Technology and context',previous:'Previous stage',next:'Next stage',start:'Flow input',end:'Output for consumption',input:'Receives from',output:'Delivers to'},es:{hint:'Selecciona una etapa para entender su función en el flujo.',about:'Sobre esta etapa',tools:'Tecnología y contexto',previous:'Etapa anterior',next:'Próxima etapa',start:'Entrada del flujo',end:'Salida para consumo',input:'Recibe de',output:'Entrega a'},ja:{hint:'各ステップを選択して、フロー内の役割を確認できます。',about:'このステップについて',tools:'技術とコンテキスト',previous:'前のステップ',next:'次のステップ',start:'フローの入力',end:'データの活用',input:'入力元',output:'出力先'}};
 const roles=[
 [/mainframe/i,['Sistema de origem que emite mudanças de cadastro, limite ou outros eventos de negócio.','Source system that emits profile, credit-limit and other business events.','Sistema de origen que emite cambios de registro, límite y otros eventos de negocio.','顧客情報や与信枠などの変更イベントを発行する基幹システム。']],
 [/\bmq\b/i,['Mensageria que desacopla a origem dos consumidores e mantém as mensagens disponíveis para processamento.','Messaging decouples the source from consumers and makes events available for processing.','La mensajería desacopla el origen de los consumidores y mantiene los eventos disponibles.','送信元と受信側を分離し、イベントを処理できるようにするメッセージング。']],
 [/flume/i,['Coleta e encaminha eventos para a camada distribuída de ingestão.','Collects and forwards events to the distributed ingestion layer.','Recoge y envía eventos a la capa distribuida de ingesta.','イベントを収集し、分散取り込みレイヤーに渡します。']],
 [/kafka/i,['Organiza eventos em tópicos e partições, permitindo consumo independente e reprocessamento.','Organizes events into topics and partitions for independent consumption and replay.','Organiza eventos en temas y particiones para consumo independiente y reprocesamiento.','イベントをトピックとパーティションに整理し、独立した処理や再処理を可能にします。']],
 [/storm/i,['Processa o fluxo contínuo para transformar eventos e preparar dados para as próximas etapas.','Processes the continuous stream to transform events for downstream stages.','Procesa el flujo continuo y transforma los eventos para las siguientes etapas.','継続的なストリームを処理し、後続の処理に適したイベントへ変換します。']],
 [/elastic/i,['Indexa os dados para recuperação e consultas de baixa latência.','Indexes data for retrieval and low-latency queries.','Indexa datos para búsquedas y consultas de baja latencia.','低遅延の検索や参照に向けてデータを索引化します。']],
 [/camel/i,['Integra sistemas com rotas de mensagens, transformação e encaminhamento para o destino.','Integrates systems through message routing, transformation and delivery.','Integra sistemas mediante rutas de mensajes, transformación y entrega.','メッセージのルーティングや変換により、システム間を連携します。']],
 [/crm/i,['Disponibiliza o contexto atualizado para atendimento e relacionamento com clientes.','Makes updated context available for customer service and relationship workflows.','Disponibiliza contexto actualizado para la atención y relación con clientes.','更新された情報を顧客対応や顧客管理の業務に提供します。']],
 [/oracle|jdbc/i,['Fonte relacional consultada por JDBC; fornece os registros que serão ingeridos no lote.','Relational source accessed through JDBC; provides records for batch ingestion.','Origen relacional consultado por JDBC; proporciona registros para la ingesta batch.','JDBC経由で参照し、バッチ取り込みの対象レコードを提供する関係データベース。']],
 [/sqoop/i,['Importa dados relacionais para Hadoop em paralelo, usando mapeadores para distribuir a leitura.','Imports relational data into Hadoop with parallel mappers.','Importa datos relacionales a Hadoop mediante mappers paralelos.','複数のマッパーを使い、関係データベースのデータを並列にHadoopへ取り込みます。']],
 [/hdfs/i,['Armazenamento distribuído para os dados ingeridos, com arquivos preparados para o processamento.','Distributed storage holds ingested files for processing.','Almacenamiento distribuido de los archivos ingeridos para su procesamiento.','取り込んだファイルを後続の処理に向けて保持する分散ストレージ。']],
 [/spark|pyspark/i,['Executa transformações distribuídas e validações antes da disponibilização analítica.','Runs distributed transformations and validation before analytical publication.','Ejecuta transformaciones distribuidas y validaciones antes de publicar los datos.','分析向けに公開する前に、分散変換処理と品質検証を実行します。']],
 [/hive|pig/i,['Organiza o processamento em lote e a disponibilização de tabelas no ambiente Hadoop.','Supports batch processing and table availability in the Hadoop environment.','Organiza el procesamiento batch y las tablas en el entorno Hadoop.','Hadoop環境でバッチ処理やテーブルとしてのデータ提供を支えます。']],
 [/impala/i,['Consulta tabelas do ecossistema Hadoop para o consumo analítico.','Queries Hadoop tables for analytical consumption.','Consulta tablas del ecosistema Hadoop para el consumo analítico.','分析利用に向けてHadoopのテーブルをクエリします。']],
 [/control.m/i,['Agenda e coordena o lote histórico; a entrega depende da conclusão da janela de processamento.','Schedules and coordinates the historical batch delivery within its processing window.','Agenda y coordina el lote histórico dentro de su ventana de procesamiento.','処理ウィンドウに従い、従来のバッチ処理をスケジュールし、調整します。']],
 [/ingest|coleta|entrada/i,['Reúne as fontes e prepara os dados para o processamento, preservando sua origem.','Collects sources and prepares data for processing while preserving provenance.','Reúne los orígenes y prepara los datos para procesarlos, preservando su procedencia.','情報源を集約し、出所を保持しながら処理の準備を行います。']],
 [/modelo|score|xgboost/i,['Aplica o modelo ao conjunto de atributos preparado. A saída apoia a análise no cenário demonstrativo.','Applies the model to prepared features; its output supports this demonstration analysis.','Aplica el modelo a los atributos preparados para apoyar el análisis de la demostración.','準備した特徴量にモデルを適用し、デモ内の分析を支援します。']],
 [/feature|atributo|agrega/i,['Transforma dados em atributos e agregações para consultas ou modelos.','Transforms data into features and aggregates for queries or models.','Transforma datos en atributos y agregaciones para consultas o modelos.','クエリやモデルに利用する特徴量や集計データへ変換します。']],
 [/consumo|api|serv|publica|produto/i,['Entrega os dados preparados à aplicação ou à camada de consumo indicada no fluxo.','Delivers prepared data to the application or consumption layer shown in the flow.','Entrega los datos preparados a la aplicación o capa de consumo indicada.','整えたデータを、フローで示すアプリケーションや利用レイヤーへ渡します。']]
 ];
 let language=()=>{let l=(document.documentElement.lang||'pt').slice(0,2);return text[l]?l:'en';};
 const esc=value=>String(value??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
 function role(label){let found=roles.find(([rx])=>rx.test(label));return found?found[1][['pt','en','es','ja'].indexOf(language())]:'';}
 function mount(host,nodes,items){
   if(!nodes.length||host.dataset.flowReady)return;host.dataset.flowReady='true';host.classList.add('flow-explorer');
   const hint=document.createElement('p');hint.className='flow-hint';host.prepend(hint);
   const detail=document.createElement('section');detail.className='flow-detail';detail.setAttribute('aria-live','polite');detail.id='flow-detail-'+(++mount.sequence);host.append(detail);
   let active=0;
   function select(index,focus=false){active=(index+nodes.length)%nodes.length;const t=text[language()],item=items[active];hint.textContent=t.hint;nodes.forEach((node,i)=>{node.classList.add('flow-interactive-node');node.setAttribute('role','button');node.setAttribute('tabindex',i===active?'0':'-1');node.setAttribute('aria-pressed',String(i===active));node.setAttribute('aria-controls',detail.id);});
     const description=item.description||role(item.title)||item.context;
     detail.innerHTML='<div><span class="flow-detail-eyebrow">'+esc(t.about)+' · '+(active+1)+' / '+items.length+'</span><h3>'+esc(item.title)+'</h3><p>'+esc(description)+'</p></div><div class="flow-detail-context"><span class="flow-detail-eyebrow">'+esc(t.tools)+'</span><dl><div><dt>'+esc(t.input)+'</dt><dd>'+esc(Array.isArray(item.inputs)?(item.inputs.join(' · ')||t.start):(items[active-1]?.title||t.start))+'</dd></div><div><dt>'+esc(t.output)+'</dt><dd>'+esc(Array.isArray(item.outputs)?(item.outputs.join(' · ')||t.end):(items[active+1]?.title||t.end))+'</dd></div></dl></div><div class="flow-detail-controls"><button type="button" data-flow-prev>'+esc(t.previous)+'</button><button type="button" data-flow-next>'+esc(t.next)+'</button></div>';
     if(focus)nodes[active].focus({preventScroll:true});
   }
   nodes.forEach((node,i)=>{node.addEventListener('click',()=>select(i));node.addEventListener('keydown',event=>{if(['Enter',' '].includes(event.key)){event.preventDefault();select(i);}if(['ArrowRight','ArrowLeft','Home','End'].includes(event.key)){event.preventDefault();select(event.key==='Home'?0:event.key==='End'?nodes.length-1:i+(event.key==='ArrowRight'?1:-1),true);}});});
   detail.addEventListener('click',event=>{if(event.target.closest('[data-flow-prev]'))select(active-1,true);if(event.target.closest('[data-flow-next]'))select(active+1,true);});
   document.addEventListener('jen:languagechange',()=>select(active));select(0);
 }
 mount.sequence=0;
 function scan(){
   document.querySelectorAll('[data-flow-model]:not([data-flow-ready])').forEach(host=>{let items;try{items=JSON.parse(decodeURIComponent(host.dataset.flowModel));}catch{return;}mount(host,[...host.querySelectorAll('[data-flow-index]')],items);});
   let file=location.pathname.split('/').pop()||'index.html';if(!/\.html?$/.test(file))file+='.html';
   const groups={
     'ibm-crm-integration.html':['.pipeline-section .pipe-row','.pipe-node'],
     'santander-big-data-pipeline.html':['.pipeline-card','.stage'],
     'itau-analytics-dashboard.html':['.pipe-flow,.pipe-row,.pipeline','.pipe-step'],
     'serasa-query-engine.html':['.pipe-steps','.pipe-step']
   };
   if(groups[file]){const [container,selector]=groups[file];let hosts=[...document.querySelectorAll(container)];if(!hosts.length){const first=document.querySelector(selector);if(first)hosts=[first.parentElement];}hosts.forEach(host=>{const nodes=[...host.querySelectorAll(selector)];const items=nodes.map(node=>({title:(node.querySelector('.stage-name,.pipe-step-name,.pipe-label,.pipe-name')?.textContent||node.textContent).trim().split('\n')[0],description:node.dataset.flowDescription||'',context:node.querySelector('.stage-sub,.pipe-step-desc,.pipe-sub')?.textContent?.trim()||''}));mount(host,nodes,items);});}
 }
 function start(){scan();let app=document.getElementById('app');if(app)new MutationObserver(records=>{if(records.some(r=>r.target===app))scan();}).observe(app,{childList:true});}
 if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',start);else start();
})();
