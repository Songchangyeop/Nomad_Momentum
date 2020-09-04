'use strict';

const clockContainer = document.querySelector('.js-clock');
const clockTitle = clockContainer.querySelector('h1');

function getTime() {
  const date = new Date();
  const minutes = date.getMinutes();
  const hours = date.getHours();
  const second = date.getSeconds();
  clockTitle.innerText = `${hours}:${minutes}:${second}`;
}

function init() {
  getTime();
}
init();
