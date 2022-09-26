'use strict';

document.querySelector('.js-hamburger').addEventListener('click', ()=> {
  const navigation = document.querySelector('.js-navigation');
  navigation.classList.toggle('u-display-flex');
})