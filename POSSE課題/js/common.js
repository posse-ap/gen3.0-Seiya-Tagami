document.getElementById('hamburger_menu').addEventListener('click',() =>{
  const clickBefore = document.getElementsByClassName('hamburger_menu_clickbefore')[0];
  clickBefore.classList.toggle('hamburger_menu_clickafter');

  const clickAfter = document.getElementsByClassName('p_header_ul')[0];
  clickAfter.classList.toggle('p_header_ul_clickafter');

  const fotterLine = document.getElementsByClassName('p_footer_line')[0];
  fotterLine.classList.toggle('p_footer_line_disappear');
  
})
