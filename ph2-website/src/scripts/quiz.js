"use strict";

{
  const ALL_QUIZ = [
    {
      question: "日本のIT人材が2030年には最大どれくらい不足すると言われているでしょうか？",
      img: "./img/quiz/img-quiz01.png",
      choices: ["約28万人", "約79万人", "約183万人"],
      quote: "経済産業省 2019年3月 － IT 人材需給に関する調査",
      correctnum: "1" 
    },
    {
      question: "既存業界のビジネスと、先進的なテクノロジーを結びつけて生まれた、新しいビジネスのことをなんと言うでしょう？",
      img: "./img/quiz/img-quiz02.png",
      choices: ["INTECH", "BIZZTECH", "X-TECH"],
      correctnum: "2" 
    },
    {
      question: "IoTとは何の略でしょう？",
      img: "./img/quiz/img-quiz03.png",
      choices: ["Internet of Things", "Integrate into Technology", "Information  on Tool"],
      correctnum: "0"
    },
    {
      question: "日本が目指すサイバー空間とフィジカル空間を高度に融合させたシステムによって開かれる未来社会のことをなんと言うでしょうか？",
      img: "./img/quiz/img-quiz04.png",
      choices: ["Society 5.0", "CyPhy", "SDGs"],
      quote: "Society5.0 - 科学技術政策 - 内閣府",
      correctnum: "0"
    },
    {
      question: "イギリスのコンピューター科学者であるギャビン・ウッド氏が提唱した、ブロックチェーン技術を活用した「次世代分散型インターネット」のことをなんと言うでしょう？",
      img: "./img/quiz/img-quiz05.png",
      choices: ["Web3.0", "NFT", "メタバース"],
      correctnum: "0"
    },
    {
      question: "先進テクノロジー活用企業と出遅れた企業の収益性の差はどれくらいあると言われているでしょうか？",
      img: "./img/quiz/img-quiz06.png",
      choices: ["約2倍", "約5倍", "約11倍"],
      quote: "Accenture Technology Vision 2021",
      correctnum: "1"
    },
  ];

  function shuffleArray(arrays){
    const array = arrays.slice();
    for (let i = array.length - 1; i >= 0; i--) {
      const randomIndex = Math.floor(Math.random() * (i + 1));
      [array[i], array[randomIndex]] = [array[randomIndex], array[i]];
    }
    return array
  }

  const shuffledQuiz = shuffleArray(ALL_QUIZ);

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
    allQuiz.forEach((quiz, index) => {
      const answers = quiz.querySelectorAll('.js-answer');
      const answerTrue = quiz.querySelector('.js-true');
      const answerFalse = quiz.querySelector('.js-false');
      const correctNum = shuffledQuiz[index].correctnum;
      const correctAnswer = shuffledQuiz[index].choices[correctNum];
  
      answers.forEach((answer)=>{
        answer.addEventListener('click', () => {
          setDisabled(answers);
          removeArrows(answers);
          answer.classList.add('is-selected');
          if(answer.textContent === correctAnswer){
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
