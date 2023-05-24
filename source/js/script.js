// Navigation menu
let navMain = document.querySelector('.main-nav');
let navToggle = document.querySelector('.main-nav__toggle');

navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', function () {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
  }
});

// Sedona-map
let map = document.querySelector(".sedona-map");
map.classList.remove("sedona-map--nojs");

// Form
/*
let form = document.querySelector('.feedback');

if (form) {
let submit = document.querySelector('.form__button');
let confirmButtonOk = document.querySelector('.window__button--close');
let confirmButtonError = document.querySelector('.window__button--ok');
let modalOk = document.querySelector('.modal--success');
let modalError = document.querySelector('.modal--error');
let modalActive = document.querySelector('.modal--opened');

function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
};

submit.addEventListener('click', function () {
  let rndNum = randomIntFromInterval(1, 100);
  if (rndNum<51) {
    modalOk.classList.add('modal--opened');
    console.log('success')
  } else {
    modalError.classList.add('modal--opened');
    console.log('error')
  }
});

confirmButtonOk.addEventListener('click', function () {
  modalOk.classList.remove('modal--opened');
});

confirmButtonError.addEventListener('click', function () {
  modalError.classList.remove('modal--opened');
});
}*/
