/* Home-only brand registry: original artwork, never an enlarged favicon. */
(function () {
  'use strict';
  const assets = {
    heineken: 'logos/home-heineken.svg',
    carrefour: 'logos/home-carrefour.svg',
    itau: 'logos/stage-itau.png',
    creditas: 'logos/home-creditas-card.svg',
    quintoandar: 'logos/home-quintoandar.svg',
    cogna: 'assets/brand-logos/cogna.png',
    serasa: 'logos/home-serasa.webp',
    dafiti: 'logos/home-dafiti.svg',
    oracle: 'logos/trust-oracle.svg',
    ibm: 'logos/trust-ibm.svg',
    santander: 'logos/home-santander.svg',
    b3: 'logos/home-b3.svg',
    petrobras: 'logos/trust-petrobras.svg',
    nasa: 'logos/trust-nasa.svg',
    google: 'logos/trust-google.svg',
    natura: 'logos/home-natura.svg',
    fiap: 'assets/brand-logos/fiap-official.svg',
    espm: 'logos/home-espm.png',
    nubank: 'logos/home-nubank.svg',
    fatec: 'logos/stage-fatec.png',
    'women-game-jam': 'logos/home-women-game-jam.png',
    endeavor: 'assets/brand-logos/endeavor.png',
    sprinklr: 'assets/brand-logos/sprinklr.png',
    imasters: 'assets/brand-logos/imasters.png',
    tdc: 'assets/brand-logos/tdc.png'
  };
  const frame = document.querySelector('.site-frame');
  if (!frame) return;
  function upgrade(image) {
    const raw = image.getAttribute('src') || '';
    if (!/^(?:assets\/brand-logos\/|logos\/stage-)/.test(raw)) return;
    const key = raw.split('/').pop().replace(/^stage-/, '').replace(/\.(svg|png|webp)$/i, '');
    const asset = assets[key];
    if (!asset) return;
    image.dataset.homeBrand = key;
    if (raw !== asset) {
      image.removeAttribute('srcset');
      image.setAttribute('src', asset);
    }
  }
  function scan(root) {
    if (root.matches?.('img')) upgrade(root);
    root.querySelectorAll?.('img').forEach(upgrade);
  }
  scan(frame);
  new MutationObserver(records => records.forEach(record => {
    if (record.type === 'attributes') upgrade(record.target);
    else record.addedNodes.forEach(node => { if (node.nodeType === 1) scan(node); });
  })).observe(frame, { childList: true, subtree: true, attributes: true, attributeFilter: ['src'] });
})();
