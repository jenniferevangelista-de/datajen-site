(function () {
  'use strict';
  // Supplemental copy for the approved publication corrections. Loaded before
  // the shared translator so new safety labels work in all supported languages.
  const entries = [
    ['Cartão de contato','Contact card','Tarjeta de contacto','連絡先カード'],
    ['Frente · E-mail e Pix','Front · Email & Pix','Frente · Email y Pix','表面 · メールとPix'],
    ['Verso · Pix','Back · Pix','Reverso · Pix','裏面 · Pix'],
    ['Baixar cartão (PDF · frente e verso)','Download card (PDF · front & back)','Descargar tarjeta (PDF · ambas caras)','カードをダウンロード（PDF・両面）'],
    ['Cartão para acompanhar os registros da galeria. Contato por e-mail e QR Pix. 88,9 × 50,8 mm. Imprima em tamanho real.','A contact card for gallery records. Email and Pix QR. 88.9 × 50.8 mm. Print at actual size.','Tarjeta de contacto para la galería. Email y QR Pix. 88,9 × 50,8 mm. Imprimir a tamaño real.','ギャラリー用連絡先カード。メールとPix QR。88.9 × 50.8 mm。実寸で印刷してください。'],
    ['Liderei a implementação de governança e qualidade de dados no Carrefour Brasil que se tornou case internacional publicado pela OpenMetadata.','Jennifer led data governance and quality at Carrefour Brazil in an initiative published internationally by OpenMetadata.','Jennifer lideró la gobernanza y la calidad de datos en Carrefour Brasil en una iniciativa publicada internacionalmente por OpenMetadata.','JenniferはCarrefour Brasilでデータガバナンスと品質の導入を主導。この取り組みはOpenMetadataの国際事例として公開されています。'],
    ['📄 Liderança · case internacional','📄 Leadership · international case','📄 Liderazgo · caso internacional','📄 リーダーシップ · 国際事例'],
    ['Case Study OpenMetadata','OpenMetadata Case Study','Caso de estudio OpenMetadata','OpenMetadataの事例'],
    ['Mentoria no evento','Event mentoring','Mentoría en el evento','イベントでのメンタリング'],
    ['Experiência e certificação','Experience and certification','Experiencia y certificación','職務経験と資格'],
    ["38 palestras · hackathons premiados","38 talks · award-winning hackathons","38 charlas · hackathons premiados","38講演 · ハッカソンで受賞"],
    ["Trajetória em perspectiva","Career in perspective","Trayectoria en perspectiva","経歴の概要"],
    ["Colaboração com equipes internacionais","Collaboration with international teams","Colaboración con equipos internacionales","国際チームとの協働"],
    ["Pódios","Podiums","Podios","受賞"],
    ["hackathons e premiações","hackathons and awards","hackathons y premios","ハッカソン・表彰"],
    ["Certificação profissional em engenharia de dados. Confira a credencial e o perfil no diretório oficial da Databricks pelos links abaixo.","Professional data engineering certification. Check the credential and profile in the official Databricks directory using the links below.","Certificación profesional en ingeniería de datos. Consulta la credencial y el perfil en el directorio oficial de Databricks mediante los enlaces siguientes.","データエンジニアリングの専門資格です。以下のリンクから資格とDatabricks公式ディレクトリのプロフィールを確認できます。"],
    ["Baseline (dados internos apenas): AUC 0,71. Comparação pela AUC informada no hackathon, sem atribuir um Gini ao baseline.","Baseline (internal data only): AUC 0.71. Comparison uses the AUC reported in the hackathon, without assigning a Gini to the baseline.","Baseline (solo datos internos): AUC 0,71. La comparación usa el AUC informado en el hackathon, sin atribuir un Gini al baseline.","ベースライン（内部データのみ）：AUC 0.71。ハッカソンで報告されたAUCで比較し、ベースラインのGiniは示していません。"],
    ["Como foi estimada a economia de €15 mil/ano em FinOps?","How was the €15k/year FinOps saving estimated?","¿Cómo se estimó el ahorro de €15 mil/año en FinOps?","年間€1.5万のFinOps削減はどのように推定しましたか?"],
    ["A análise identificou 107 TB de logs de diagnóstico armazenados em camada Standard (quente) de um blob storage. Logs históricos sem acesso ativo não justificam camada quente, a migração para Archive reduziu o custo em até 10×. Somada à remoção de 500+ pipelines ADF sem execução havia mais de 90 dias, a iniciativa fundamentou uma economia anual estimada de €15k, não uma medição de economia já realizada.","The analysis identified 107 TB of diagnostic logs stored in the Standard (hot) tier of a blob storage. Historical logs with no active access do not justify a hot tier; migration to Archive cut the cost by up to 10×. Combined with removing 500+ ADF pipelines with no execution for over 90 days, the initiative supported an estimated annual saving of €15k, not a measurement of realized savings.","El análisis identificó 107 TB de logs de diagnóstico almacenados en capa Standard (caliente) de un blob storage. Logs históricos sin acceso activo no justifican capa caliente; la migración a Archive redujo el costo hasta 10×. Sumado a la eliminación de 500+ pipelines ADF sin ejecución hacía más de 90 días, la iniciativa fundamentó un ahorro anual estimado de €15k, no una medición de ahorro ya realizado.","分析により、blobストレージのStandard（頻繁アクセス）層に107 TBの診断ログが保存されていることが判明しました。アクティブなアクセスのない過去ログは頻繁アクセス層を必要とせず、Archiveへの移行によりコストを最大10分の1に削減しました。90日以上実行のない500以上のADFパイプラインの削除と合わせ、この取り組みに基づく年間削減額の推定は€1.5万であり、実現済み削減額の測定ではありません。"],
    ['Mentora NASA Space Apps', 'NASA Space Apps Mentor', 'Mentora NASA Space Apps', 'NASA Space Appsメンター'],
    ['MENTORA NASA SPACE APPS', 'NASA SPACE APPS MENTOR', 'MENTORA NASA SPACE APPS', 'NASA SPACE APPSメンター'],
    ['Mentoria · NASA Space Apps Challenge', 'Mentoring · NASA Space Apps Challenge', 'Mentoría · NASA Space Apps Challenge', 'メンタリング · NASA Space Apps Challenge'],
    ['Mentoria no evento', 'Event mentoring', 'Mentoría en el evento', 'イベントでのメンター活動'],
    ['Hackathon interno do Itaú', 'Internal Itaú hackathon', 'Hackathon interno de Itaú', 'Itaú社内ハッカソン'],
    ['FINALISTA', 'FINALIST', 'FINALISTA', 'ファイナリスト'],
    ['TIME MENTORADO PREMIADO', 'AWARD-WINNING MENTORED TEAM', 'EQUIPO MENTORADO PREMIADO', '指導したチームが受賞'],
    ['Time mentorado venceu todas as categorias', 'The mentored team won all categories', 'El equipo mentorado ganó todas las categorías', '指導したチームが全部門で受賞'],
    ['Explore 3 canais na reconstrução. WhatsApp é uma extensão posterior a 2017.', 'Explore 3 channels in this reconstruction. WhatsApp is a post-2017 extension.', 'Explora 3 canales en la reconstrucción. WhatsApp es una extensión posterior a 2017.', '再構築版の3チャネルを体験。WhatsAppは2017年以降の追加例です。'],
    ['Extensão demonstrativa posterior a 2017', 'Demonstrative extension after 2017', 'Extensión demostrativa posterior a 2017', '2017年以降のデモ用拡張'],
    ['Reconstrução atualizada · AWS EMR · Airflow 2.6 (2023) · não a versão de 2019–2020', 'Updated reconstruction · AWS EMR · Airflow 2.6 (2023) · not the 2019–2020 version', 'Reconstrucción actualizada · AWS EMR · Airflow 2.6 (2023) · no la versión de 2019–2020', '更新版 · AWS EMR · Airflow 2.6（2023年）· 2019〜2020年当時の版ではありません'],
    ['Canal corporativo de mensagens', 'Corporate messaging channel', 'Canal corporativo de mensajes', '社内メッセージ通知先'],
    ['Sinais contábeis fora do contrato', 'Accounting signs outside the agreed contract', 'Signos contables fuera del contrato', '会計上の符号が定義と不一致'],
    ['Controles demonstrativos · não é certificação BACEN', 'Demonstrative controls · not a BACEN certification', 'Controles demostrativos · no es certificación BACEN', '管理のデモ · BACEN認証ではありません'],
    ['oportunidades de atendimento com mais contexto, sem garantia de aumento de vendas', 'more contextual service opportunities, with no guarantee of increased sales', 'oportunidades de atención con más contexto, sin garantizar aumento de ventas', '文脈に基づく対応機会であり、売上増加を保証しません'],
    ['sem provar ausência de discriminação. Importância de variáveis não exclui proxies: avaliar equidade exige testes específicos por grupos, documentação e revisão humana.', 'without proving the absence of discrimination. Feature importance does not rule out proxies: fairness assessment requires group-specific tests, documentation and human review.', 'sin probar ausencia de discriminación. La importancia de variables no descarta proxies: evaluar equidad requiere pruebas por grupos, documentación y revisión humana.', 'ただし差別がない証明にはなりません。特徴量の重要度だけでは代理変数を除外できず、公平性の評価には集団別テスト、記録、人による確認が必要です。'],
    ['✓ Cenário simulado · ✓ Sem acesso a contas reais', '✓ Simulated scenario · ✓ No access to real accounts', '✓ Escenario simulado · ✓ Sin acceso a cuentas reales', '✓ シミュレーション · ✓ 実口座へのアクセスなし'],
    ['Continuar apenas navega pela demonstração; não concede uma autorização bancária real. Uma implantação precisa observar a regulamentação aplicável do Open Finance, incluindo a Resolução Conjunta nº 1/2020 e suas alterações. Consentimento, validade de token e retenção de dados são controles distintos.', 'Continuing only navigates this demo; it does not grant real banking authorization. Deployment must follow applicable Open Finance regulation, including Joint Resolution 1/2020 and its amendments. Consent, token validity and data retention are separate controls.', 'Continuar solo navega por la demo; no concede autorización bancaria real. Una implantación debe observar la regulación aplicable de Open Finance, incluida la Resolución Conjunta 1/2020 y sus modificaciones. Consentimiento, validez del token y retención son controles distintos.', '続行はデモ内の移動であり、実際の銀行への許可ではありません。実運用には共同決議1/2020とその改正を含む適用規則の確認が必要です。同意、トークンの有効期間、データ保存は別の管理事項です。'],
    ['Simular autorização', 'Simulate authorization', 'Simular autorización', '許可をシミュレーション'],
    ['Sem dados bancários reais', 'No real banking data', 'Sin datos bancarios reales', '実際の銀行データなし'],
    ['Personagem fictício · exemplo didático', 'Fictional character · illustrative example', 'Personaje ficticio · ejemplo didáctico', '架空の人物 · 教材用の例'],
    ['Registro cível', 'Civil record', 'Registro civil', '民事記録'],
    ['Improbidade · fictício', 'Administrative misconduct · fictional', 'Improbidad · ficticia', '行政上の不正行為 · 架空'],
    ['Regra ilustrativa do jogo:', 'Illustrative game rule:', 'Regla ilustrativa del juego:', '教材用のゲーム規則：'],
    ['indicadores fictícios', 'fictional indicators', 'indicadores ficticios', '架空の指標'],
    ['alteram os atributos da carta. Não representam culpa, corrupção detectada ou avaliação de uma pessoa real.', 'change card attributes. They do not establish guilt, detect corruption or assess a real person.', 'cambian los atributos de la carta. No representan culpabilidad, corrupción detectada ni la evaluación de una persona real.', 'がカード属性を変えます。有罪や汚職の認定、実在する人の評価ではありません。'],
    ['Regra ilustrativa: indicadores fictícios alteram os atributos do jogo. A pontuação não mede corrupção nem representa uma avaliação de pessoas reais.', 'Illustrative rule: fictional indicators change game attributes. The score does not measure corruption or assess real people.', 'Regla ilustrativa: indicadores ficticios cambian los atributos del juego. El score no mide corrupción ni evalúa personas reales.', '教材用の規則：架空の指標がゲーム属性を変えます。汚職の測定や実在する人の評価ではありません。'],
    ['Efeito especial fictício: +500 de Transparência por rodada completa. É uma regra de jogo, não uma imunidade jurídica ou avaliação de idoneidade.', 'Fictional effect: +500 Transparency per completed round. This is a game rule, not legal immunity or an integrity assessment.', 'Efecto ficticio: +500 de Transparencia por ronda completa. Es una regla de juego, no inmunidad jurídica ni evaluación de idoneidad.', '架空の効果：ラウンド完了ごとに透明性+500。法的免責や適格性の評価ではなくゲーム規則です。'],
    ['Efeito especial fictício: Alto Apoio Popular (ATK máximo 7). Eventos simulados alteram a defesa. Nenhum evento equivale à constatação de um crime.', 'Fictional effect: High Popular Support (maximum ATK 7). Simulated events change defense. No event establishes a crime.', 'Efecto ficticio: Alto Apoyo Popular (ATK máximo 7). Eventos simulados cambian la defensa. Ninguno acredita un delito.', '架空の効果：高い支持（ATK最大7）。仮想イベントが防御を変えますが、犯罪の認定ではありません。'],
    ['sem apontamentos simulados', 'no simulated findings', 'sin registros simulados', '仮想の指摘なし'],
    ['processos simulados', 'simulated proceedings', 'procesos simulados', '架空の訴訟'],
    ['revisar contexto fictício', 'review fictional context', 'revisar contexto ficticio', '架空の文脈を確認'],
    ['Condenações fictícias', 'Fictional convictions', 'Condenas ficticias', '架空の有罪判決']
  ];
  const dictionaries = window.JEN_TRANSLATIONS || (window.JEN_TRANSLATIONS = {});
  ['en', 'es', 'ja'].forEach((language, index) => {
    const dictionary = dictionaries[language] || (dictionaries[language] = {});
    entries.forEach(entry => { dictionary[entry[0]] = entry[index + 1]; });
  });
})();
