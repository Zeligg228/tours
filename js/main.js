'use strict'

const headerNavigation = document.querySelector('.header__navigation');
const headerListIcon = document.querySelector('.header__list__icon');
const navigationText = document.querySelector('.navigation__text');
const body = document.querySelector('body');

headerListIcon.addEventListener('click', function() {
  if (headerNavigation.classList.contains('visible')) {
    headerNavigation.classList.remove('visible');
    // navigationText.classList.remove('visible');
    headerListIcon.classList.remove('active');
    body.style.overflow = 'visible';
  } else {
    headerNavigation.classList.add('visible');
    // navigationText.classList.add('visible');
    headerListIcon.classList.add('active');
    body.style.overflow = 'hidden';
  }
  });