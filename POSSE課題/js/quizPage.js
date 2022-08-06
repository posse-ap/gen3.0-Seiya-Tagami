'use strict'

{ 
  const quizSet = shuffle([
    {q:"日本のIT人材が2030年には最大どれくらい不足すると言われているでしょうか？",o:['約28万人','約79万人','約11倍'],h:"../img/quiz/img-quiz01.png",d:'経済産業省 2019年3月 － IT 人材需給に関する調査',dsrc:'https://www.meti.go.jp/policy/it_policy/jinzai/houkokusyo.pdf'},
    {q:'既存業界のビジネスと、先進的なテクノロジーを結びつけて生まれた、新しいビジネスのことをなんと言うでしょう？',o:['X-TECH','INTECH','BIZZTECH'],h:"../img/quiz/img-quiz02.png",d:'',dsrc:''},
    {q:'IoTとは何の略でしょう？',o:['Internet of Things','Integrate into Technology','Information  on Tool'],h:"../img/quiz/img-quiz03.png",d:'',dsrc:''},
    {q:'日本が目指すサイバー空間とフィジカル空間を高度に融合させたシステムによって開かれる未来社会のことをなんと言うでしょうか？',o:['Society 5.0','CyPhy','SDGs'],h:"../img/quiz/img-quiz04.png",d:'Society5.0 - 科学技術政策 - 内閣府',dsrc:'https://www8.cao.go.jp/cstp/society5_0/'},
    {q:' イギリスのコンピューター科学者であるギャビン・ウッド氏が提唱した、ブロックチェーン技術を活用した「次世代分散型インターネット」のことをなんと言うでしょう？',o:['Web3.0','NFT','メタバース'],h:'../img/quiz/img-quiz05.png',d:'',dsrc:''},
    {q:'先進テクノロジー活用企業と出遅れた企業の収益性の差はどれくらいあると言われているでしょうか？',o:['約5倍','約2倍','約11倍'],h:'../img/quiz/img-quiz06.png',d:'Accenture Technology Vision 2021 ',dsrc:'https://www.accenture.com/jp-ja/insights/technology/technology-trends-2022'},
    {q:'法律とITが組み合わさった新たな仕事の領域をなんというか',o:['リーガルテック','ローテック','アイティーリーガル'],h:'https://wealthroad.jp/wp-content/uploads/2019/09/11shutterstock_1079923613.jpg',d:'法律×IT「リーガルテック」で何がどう変わりつつあるのか？',dsrc:'https://wealthroad.jp/archives/157'}
  ]);
  

  function shuffle(arr) {
    for(let i = arr.length-1; i>0;i--){
    const j = Math.floor(Math.random()*(i+1));
    [arr[j],arr[i]]=[arr[i],arr[j]];
  }
  return arr;
}

  const showTrue = document.getElementsByClassName('p_quiz_answer_t');
  const showFalse = document.getElementsByClassName('p_quiz_answer_f');
  const optBox = document.getElementsByClassName('p_quiz_optbox');
  let isAnswered;


  for(let currentNum = 0; currentNum < quizSet.length; currentNum++) {
    Set(currentNum);
    checkAnswer(currentNum);
  }
  
  function Set(currentNum){
      const createSection =document.createElement('section');
      const article = document.getElementById('p_article');
      article.before(createSection);
      createSection.classList.add('quizFrame'); //sectionを生成

      const createQN = document.createElement('div');
      createQN.textContent = `Q${currentNum + 1}`;
      const Section = document.getElementsByClassName('quizFrame');
      Section[currentNum].appendChild(createQN);
      createQN.classList.add('p_quiz_qnum') //設問ナンバーを生成 

      const createQ = document.createElement('div');
      Section[currentNum].appendChild(createQ);
      createQ.classList.add('p_quiz_q') //設問の大枠を生成

      const makeQuiz = document.getElementsByClassName('p_quiz_q');
      const createTxt = document.createElement('span');
      createTxt.textContent = quizSet[currentNum].q;
      makeQuiz[currentNum].appendChild(createTxt);
      createTxt.classList.add('p_quiz_qtxt');//設問を生成
      
      const createImg = document.createElement('img');
      createImg.src = quizSet[currentNum].h;
      makeQuiz[currentNum].appendChild(createImg);
      createImg.classList.add('p_quiz_qimg');//設問の画像を生成

      const createA = document.createElement('div');
      Section[currentNum].appendChild(createA);
      createA.textContent = 'A';
      createA.classList.add('p_quiz_a');//アンサーのアルファベット生成

      const createQuizbox = document.createElement('div');
      Section[currentNum].appendChild(createQuizbox);
      createQuizbox.classList.add('p_quiz_box');//選択肢の大枠生成

      const quizBox = document.getElementsByClassName('p_quiz_box');
      const createOptbox = document.createElement('ul');
      quizBox[currentNum].appendChild(createOptbox);
      createOptbox.classList.add('p_quiz_optbox');//選択肢の箱生成
      
      const shuffledChoices = shuffle([...quizSet[currentNum].o]);
      shuffledChoices.forEach(option =>{
      const createli = document.createElement('li');
      createli.textContent = option;
      optBox[currentNum].appendChild(createli);
      createli.classList.add('p_quiz_option','p_quiz_option_disappear')
      });//選択肢生成

      const createQuizTrue = document.createElement('div');
      quizBox[currentNum].appendChild(createQuizTrue);
      createQuizTrue.classList.add('p_quiz_answer_t');

      const creatQuizFalse = document.createElement('div');
      quizBox[currentNum].appendChild(creatQuizFalse);
      creatQuizFalse.classList.add('p_quiz_answer_f'); //正解不正解の生成

      const createSeikai = document.createElement('h2');
      const spanA = document.createElement('span');
      const spanB = document.createElement('span');
      const showTrue = document.getElementsByClassName('p_quiz_answer_t');
      createSeikai.textContent = '正解！'
      spanA.textContent = 'A';
      spanB.textContent = `${quizSet[currentNum].o[0]}`;
      showTrue[currentNum].appendChild(createSeikai);
      showTrue[currentNum].appendChild(spanA);
      showTrue[currentNum].appendChild(spanB);
      spanA.classList.add('p_quiz_answer_txt_01');
      spanB.classList.add('p_quiz_answer_txt_02'); 

      const createHuseikai = document.createElement('h2');
      const spanC = document.createElement('span');
      const spanD = document.createElement('span');
      const showFalse = document.getElementsByClassName('p_quiz_answer_f');
      createHuseikai.textContent = '不正解...';
      spanC.textContent = 'A';
      spanD.textContent = `${quizSet[currentNum].o[0]}`;
      showFalse[currentNum].appendChild(createHuseikai);
      showFalse[currentNum].appendChild(spanC);
      showFalse[currentNum].appendChild(spanD);
      spanC.classList.add('p_quiz_answer_txt_01');
      spanD.classList.add('p_quiz_answer_txt_02'); //正解不正解の内容を生成 
      
      if(quizSet[currentNum].d === ''){
        return;
      } else {
        const createDetail = document.createElement('a');
          quizBox[currentNum].appendChild(createDetail);
          createDetail.setAttribute('href',`${quizSet[currentNum].dsrc}`);
          createDetail.classList.add('p_quiz_art');
    
          const quizArt = document.getElementsByClassName('p_quiz_art');
          const createdetailTxt = document.createElement('p');
          createdetailTxt.textContent = quizSet[currentNum].d;
    
          for(let d = 0; d < quizArt.length; d++){
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

      if(e.target.textContent === quizSet[currentNum].o[0]){
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
