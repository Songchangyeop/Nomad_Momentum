'use strict';

const body = document.querySelector('body');

const IMG_NUMBER = 6;

function paintImage(imgNumber) {
  const img = new Image();
  img.src = `imgs/${imgNumber}.jpg`;
  img.classList.add('bgImage');
  body.prepend(img);
}

function getRandom() {
  const number = Math.floor(Math.random() * IMG_NUMBER + 1);
  return number;
}

function init() {
  const randomNumber = getRandom();
  paintImage(randomNumber);
}

init();
