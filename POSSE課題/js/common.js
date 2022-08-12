const hamburgurMenu = document.getElementById('hamburger_menu');
hamburgurMenu.addEventListener('click',() =>{
  const clickBefore = document.getElementsByClassName('hamburger_menu_clickbefore');
  clickBefore[0].classList.toggle('hamburger_menu_clickafter');

  const clickAfter = document.getElementsByClassName('p_header_ul');
  clickAfter[0].classList.toggle('p_header_ul_clickafter');

  const fotterLine = document.getElementsByClassName('p_footter_line');
  fotterLine[0].classList.toggle('p_footter_line_disappear');
  
})
