'use strict'

{
  const modal = document.querySelector('.js-modal-open');
  document.querySelector('.js-record').addEventListener('click', ()=> {
    modal.classList.add('u-display-block');
  })

  document.querySelector('.js-modal-close').addEventListener('click', ()=> {
    modal.classList.remove('u-display-block');
  })
}