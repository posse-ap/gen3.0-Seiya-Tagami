"use strict";

{
  const allQuiz = document.querySelectorAll('.js-quiz');

  const setDisabled = (answers) => {
    answers.forEach(answer => {
      answer.disabled = true;
    })
  } //ボタン非活性化

  const removeArrows = (answers) => {
    answers.forEach(answer => {
      answer.classList.remove('is-attached-arrow')
    })
  } //ボタンの三角アイコンを外す

  function checkAnswer(){
    allQuiz.forEach( quiz => {
      const answers = quiz.querySelectorAll('.js-answer');
      const answerTrue = quiz.querySelector('.js-true');
      const answerFalse = quiz.querySelector('.js-false');
      const correctNum = 1;
  
      answers.forEach(answer => {  
        answer.addEventListener('click', () => {
          answer.classList.add('is-selected');
          setDisabled(answers);
          removeArrows(answers);

          const selectedAnswerNumber = Number(answer.getAttribute('data-answer'));
          const iscorrect = selectedAnswerNumber === correctNum;

          if(iscorrect == true){
            answerTrue.classList.add('u-display-block');
          } else {
            answerFalse.classList.add('u-display-block');
          }
        })
      })
    })
  }
  checkAnswer();
}
