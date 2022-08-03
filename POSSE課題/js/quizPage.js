'use strict'

{ 
  const quizSet = [
    {q:'法律とITが組み合わさった新たな仕事の領域をなんというか',o:['リーガルテック','ローテック','アイティーリーガル'],h:'https://wealthroad.jp/wp-content/uploads/2019/09/11shutterstock_1079923613.jpg',d:'法律×IT「リーガルテック」で何がどう変わりつつあるのか？',dsrc:'https://wealthroad.jp/archives/157'}
  ];
  
  const answersSet = ['約28万人','X-TECH','Internet of Things','Society 5.0','Web3.0','約5倍','リーガルテック'];

  const showTrue = document.getElementsByClassName('p_quiz_answer_t');
  const showFalse = document.getElementsByClassName('p_quiz_answer_f');
  const optBox = document.getElementsByClassName('p_quiz_optbox');
  let isAnswered;

  for(let Qs = 0; Qs < quizSet.length; Qs++) {
    Set(Qs);
  }
  for(let currentNum = 0; currentNum < optBox.length; currentNum++) {
    checkAnswer(currentNum);
  }
  
  function Set(Qs){
      const createSection =document.createElement('section');
      const article = document.getElementById('p_article');
      article.before(createSection);
      createSection.classList.add('quizFrame'); //sectionを生成

      const createQN = document.createElement('div');
      createQN.textContent = `Q${Qs + 7}`;
      const Section = document.getElementsByClassName('quizFrame');
      Section[Qs].appendChild(createQN);
      createQN.classList.add('p_quiz_qnum') //設問ナンバーを生成 

      const createQ = document.createElement('div');
      Section[Qs].appendChild(createQ);
      createQ.classList.add('p_quiz_q') //設問の大枠を生成

      const makeQuiz = document.getElementsByClassName('p_quiz_q');
      const createTxt = document.createElement('span');
      createTxt.textContent = quizSet[Qs].q;
      makeQuiz[Qs + 6].appendChild(createTxt);
      createTxt.classList.add('p_quiz_qtxt');//設問を生成
      
      const createImg = document.createElement('img');
      createImg.src = quizSet[Qs].h;
      makeQuiz[Qs + 6].appendChild(createImg);
      createImg.classList.add('p_quiz_qimg');//設問の画像を生成

      const createA = document.createElement('div');
      Section[Qs].appendChild(createA);
      createA.textContent = 'A';
      createA.classList.add('p_quiz_a');//アンサーのアルファベット生成

      const createQuizbox = document.createElement('div');
      Section[Qs].appendChild(createQuizbox);
      createQuizbox.classList.add('p_quiz_box');//選択肢の大枠生成

      const quizBox = document.getElementsByClassName('p_quiz_box');
      const createOptbox = document.createElement('ul');
      quizBox[Qs + 6].appendChild(createOptbox);
      createOptbox.classList.add('p_quiz_optbox');//選択肢の箱生成
      
      const Choices = [...quizSet[Qs].o];
      Choices.forEach(option =>{
      const createli = document.createElement('li');
      createli.textContent = option;
      optBox[Qs + 6].appendChild(createli);
      createli.classList.add('p_quiz_option','p_quiz_option_disappear')
      });//選択肢生成

      const createQuizTrue = document.createElement('div');
      quizBox[Qs + 6].appendChild(createQuizTrue);
      createQuizTrue.classList.add('p_quiz_answer_t');

      const creatQuizFalse = document.createElement('div');
      quizBox[Qs + 6].appendChild(creatQuizFalse);
      creatQuizFalse.classList.add('p_quiz_answer_f'); //正解不正解の生成

      const createSeikai = document.createElement('h2');
      const spanA = document.createElement('span');
      const spanB = document.createElement('span');
      const showTrue = document.getElementsByClassName('p_quiz_answer_t');
      createSeikai.textContent = '正解！'
      spanA.textContent = 'A';
      spanB.textContent = `${quizSet[Qs].o[0]}`;
      showTrue[Qs + 6].appendChild(createSeikai);
      showTrue[Qs + 6].appendChild(spanA);
      showTrue[Qs + 6].appendChild(spanB);
      spanA.classList.add('p_quiz_answer_txt_01');
      spanB.classList.add('p_quiz_answer_txt_02'); 

      const createHuseikai = document.createElement('h2');
      const spanC = document.createElement('span');
      const spanD = document.createElement('span');
      const showFalse = document.getElementsByClassName('p_quiz_answer_f');
      createHuseikai.textContent = '不正解...';
      spanC.textContent = 'A';
      spanD.textContent = `${quizSet[Qs].o[0]}`;
      showFalse[Qs + 6].appendChild(createHuseikai);
      showFalse[Qs + 6].appendChild(spanC);
      showFalse[Qs + 6].appendChild(spanD);
      spanC.classList.add('p_quiz_answer_txt_01');
      spanD.classList.add('p_quiz_answer_txt_02'); //正解不正解の内容を生成 
      
      if(quizSet[Qs].d === ''){
        return;
      } else {
        const createDetail = document.createElement('a');
          quizBox[Qs +6].appendChild(createDetail);
          createDetail.setAttribute('href',`${quizSet[Qs].dsrc}`);
          createDetail.classList.add('p_quiz_art');
    
          const quizArt = document.getElementsByClassName('p_quiz_art');
          const createdetailTxt = document.createElement('p');
          createdetailTxt.textContent = quizSet[Qs].d;
    
          for(let d = 3; d < quizArt.length; d++){
            quizArt[d].appendChild(createdetailTxt);
            createdetailTxt.classList.add('p_quiz_art_txt');;
          }
      }
  }//資料の生成

  function checkAnswer(currentNum){
    optBox[currentNum].addEventListener('click', e => {
      if(optBox[currentNum].isAnswered === true){
        return;
      }

      if(e.target.textContent === answersSet[currentNum]){
        showTrue[currentNum].classList.add('p_quiz_answer_t_show');
      } else {
      showFalse[currentNum].classList.add('p_quiz_answer_f_show');
    }

      if (e.target.nodeName === 'LI'){ 
        const option = optBox[currentNum].getElementsByClassName('p_quiz_option');

        for(let listNum = 0; listNum < option.length; listNum++) {
          option[listNum].classList.remove('p_quiz_option_disappear');      ;
        }
        e.target.classList.add('color');
        optBox[currentNum].isAnswered = true;
  }
  });
}//ボタンを押した時の動き
}
