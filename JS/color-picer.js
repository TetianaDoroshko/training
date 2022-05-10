const colors = [
  { hex: '#f44336', rgb: '244,67,54' },
  { hex: '#3a3ace', rgb: '58, 58, 206' },
  { hex: '#6fb69e', rgb: '111, 182, 158' },
  { hex: '#518347', rgb: '81, 131, 71' },
  { hex: '#a8ce85', rgb: '168, 206, 133' },
  { hex: '#ec904a', rgb: '236, 144, 74' },
  { hex: '#918f00', rgb: '145, 143, 0' },
  { hex: '#245564', rgb: '36, 85, 100' },
  { hex: '#7a62ff', rgb: '122, 98, 255' },
  { hex: '#ff62dd', rgb: '255, 98, 221' },
  { hex: '#ff627c', rgb: '255, 98, 124' },
  { hex: '#910000', rgb: '145, 0, 0' },
];

const paletteContainer = document.querySelector('.js-palette');

const cardsMarkUp = CreaetColorCardsMarkup(colors);

paletteContainer.insertAdjacentHTML('beforeend', cardsMarkUp);

function CreaetColorCardsMarkup(colors) {
  const markup = colors.map(({ hex, rgb }) => {
    return `
  <div class="color-card">
    <div class="color-swatch"
      data-hex="${hex}"
      data-rgb="${rgb}"
      style="background-color: ${hex}"
    ></div>
    <div class="color-meta">
      <p>HEX: ${hex}</p>
      <p>RGB: ${rgb}</p>
    </div>
  </div>
  `;
  });
  console.log(markup.join(''));
  return markup.join('');
}

paletteContainer.addEventListener('click', onPaletteContainerClick);

function onPaletteContainerClick(event) {
  if (!event.target.classList.contains('color-swatch')) {
    return;
  }
  const currentCard = paletteContainer.querySelector('.is-active');
  currentCard?.classList.remove('is-active');
  event.target.closest('.color-card').classList.add('is-active');
  document.body.style.backgroundColor = event.target.dataset.hex;
}
