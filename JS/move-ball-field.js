'use strict'
const ballEl = document.querySelector('#ball');
const fieldEl = document.querySelector('#field');
const ballSize = ballEl.width;
const fieldWidth = fieldEl.clientWidth;
const fieldHeight = fieldEl.clientHeight;


fieldEl.style.position = 'relative';
fieldEl.style.cursor = 'pointer';
ballEl.style.position = 'absolute';
ballEl.style.transform = 'translate(-50%, -50%)';
ballEl.style.transition = 'top 500ms ease-in-out, left 500ms ease-in-out';

ballEl.style.top = (ballSize/2)+'px' ;
ballEl.style.left = (ballSize/2)+'px';

fieldEl.addEventListener('click', onFieldClick)
function onFieldClick(event) {
  const X = findX(event);
  const Y = findY(event);

  ballEl.style.top = Y+'px' ;
  ballEl.style.left = X+'px';
}

function findX(event) {
    if (event.offsetX<(ballSize/2)) {
      return ballSize/2;
    }
    if (fieldWidth-event.offsetX<(ballSize/2)) {
      return fieldWidth-(ballSize/2);
    }
    return event.offsetX;
}
function findY(event) {
  if (event.offsetY<(ballSize/2)) {
    return ballSize/2;
  }
  if (fieldHeight-event.offsetY<(ballSize/2)) {
    return fieldHeight-(ballSize/2);
  }
  return event.offsetY;
}
