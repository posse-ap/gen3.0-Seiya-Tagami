'use strict'

{
  const show_answer_t = document.getElementsByClassName('p_quiz_answer');
  const show_answer_f = document.getElementsByClassName('p_quiz_answer_f');
  const p_quiz_optBox = document.getElementsByClassName('p_quiz_optbox');

  const quizSet = ['約28万人','X-TECH','Internet of Things','Society 5.0','Web3.0','約5倍'
  ]
  let isAnswered;

  for(let currentNum = 0; currentNum < p_quiz_optBox.length; currentNum++) {
    Set(currentNum);
  }

  function Set(currentNum){
    
    p_quiz_optBox[currentNum].addEventListener('click', e => {
      if(p_quiz_optBox[currentNum].isAnswered === true){
        return;
      }

      if(e.target.textContent === quizSet[currentNum]){
        show_answer_t[currentNum].classList.add('p_quiz_answer_true');
      } else {
      show_answer_f[currentNum].classList.add('p_quiz_answer_false');
    }

      if (e.target.nodeName === 'LI'){ 
        const p_quiz_optBox_list = p_quiz_optBox[currentNum].getElementsByClassName('p_quiz_optbox_list');

        for(let listNum = 0; listNum < p_quiz_optBox_list.length; listNum++) {
          p_quiz_optBox_list[listNum].classList.remove('p_quiz_optbox_list_min');      ;
        }
        e.target.classList.add('color');
        p_quiz_optBox[currentNum].isAnswered = true;
  }
  });
}
  
}
