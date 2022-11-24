"use strict";

{
  const allQuiz = document.querySelectorAll(".js-quiz");

  const setDisabled = (choices) => {
    choices.forEach((choice) => {
      choice.disabled = true;
    });
  }; //ボタン非活性化

  const removeArrows = (choices) => {
    choices.forEach((choice) => {
      choice.classList.remove("is-attached-arrow");
    });
  }; //ボタンの三角アイコンを外す

  function checkAnswer() {
    allQuiz.forEach((quiz) => {
      const choices = quiz.querySelectorAll(".js-choice");
      const answerTrue = quiz.querySelector(".js-answer");
      const answerTitle = quiz.querySelector(".js-answer-title");
      const correctNum = 1;

      choices.forEach((choice) => {
        choice.addEventListener("click", () => {
          choice.classList.add("is-selected");
          setDisabled(choices);
          removeArrows(choices);

          const selectedAnswerNumber = Number(choice.getAttribute("data-answer"));
          const iscorrect = selectedAnswerNumber === correctNum;

          if (iscorrect == true) {
            answerTrue.classList.add("u-display-block", "u-bg-color-pink");
            answerTitle.innerText = "正解";
            answerTitle.classList.add("u-color-red");
          } else {
            answerTrue.classList.add("u-display-block", "u-bg-color-lightblue");
            answerTitle.innerText = "不正解...";
            answerTitle.classList.add("u-color-blue");
          }
        });
      });
    });
  }
  checkAnswer();
}
