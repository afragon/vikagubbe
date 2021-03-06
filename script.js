'use strict';

const partEl = document.querySelector('.part');
const headEl = document.querySelector('.head');
const torsoEl = document.querySelector('.torso');
const legsEl = document.querySelector('.legs');
const feetEl = document.querySelector('.feet');

const btn1El = document.querySelector('.btn1');
const btn2El = document.querySelector('.btn2');
const btn3El = document.querySelector('.btn3');
const btn4El = document.querySelector('.btn4');
const btnResetEl = document.querySelector('.btnReset');

/* btnEl1.addEventListener('click', function () {
  let head = Math.trunc(Math.random() * 3) + 1;
  let torso = Math.trunc(Math.random() * 3) + 1;
  let legs = Math.trunc(Math.random() * 3) + 1;
  let feet = Math.trunc(Math.random() * 3) + 1;

  headEl.style.backgroundImage = `url(bilder/body--${head}_01.gif)`;
  torsoEl.style.backgroundImage = `url(bilder/body--${torso}_02.gif)`;
  legsEl.style.backgroundImage = `url(bilder/body--${legs}_03.gif)`;
  feetEl.style.backgroundImage = `url(bilder/body--${feet}_04.png)`;
}); */

btn1El.addEventListener('click', function () {
  let head = Math.trunc(Math.random() * 3) + 1;
  headEl.style.backgroundImage = `url(bilder/body--${head}_01.gif)`;
  btn1El.classList.add('hidden');
  headEl.style.height = `0%`;
});

btn2El.addEventListener('click', function () {
  let torso = Math.trunc(Math.random() * 3) + 1;
  torsoEl.style.backgroundImage = `url(bilder/body--${torso}_02.gif)`;
  btn2El.classList.add('hidden');
  torsoEl.style.height = `0%`;
});

btn3El.addEventListener('click', function () {
  let legs = Math.trunc(Math.random() * 3) + 1;
  legsEl.style.backgroundImage = `url(bilder/body--${legs}_03.gif)`;
  btn3El.classList.add('hidden');
  legsEl.style.height = `0%`;
});

btn4El.addEventListener('click', function () {
  let feet = Math.trunc(Math.random() * 3) + 1;
  feetEl.style.backgroundImage = `url(bilder/body--${feet}_04.png)`;
  btn4El.classList.add('hidden');

  headEl.style.height = `25%`;
  torsoEl.style.height = `25%`;
  legsEl.style.height = `25%`;
  feetEl.style.height = `25%`;
});

btnResetEl.addEventListener('click', function () {
  headEl.style.backgroundImage = `url(paper.jpeg)`;
  torsoEl.style.backgroundImage = `url(paper.jpeg)`;
  legsEl.style.backgroundImage = `url(paper.jpeg)`;
  feetEl.style.backgroundImage = `url(paper.jpeg)`;

  btn1El.classList.remove('hidden');
  btn2El.classList.remove('hidden');
  btn3El.classList.remove('hidden');
  btn4El.classList.remove('hidden');
});
