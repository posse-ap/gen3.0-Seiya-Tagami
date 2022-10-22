"use strict";

{
  const modal = document.querySelector(".js-modal");
  const modalInner = document.querySelector(".js-modal-inner");
  const nowLoading = document.querySelector(".js-now-loading");
  const recordDone = document.querySelector(".js-record-done");
  const inputTexts = document.querySelectorAll(".js-input-text");
  const contentsCheckBoxes = document.querySelectorAll(".js-contents-checkbox");
  const languagesCheckBoxes = document.querySelectorAll(".js-languages-checkbox");
  const tweetCheckBox = document.querySelector('.js-tweet-checkbox')
  const checkBoxes = [...contentsCheckBoxes, ...languagesCheckBoxes, tweetCheckBox];

  const unChecked = (checkBoxes) => {
    checkBoxes.forEach((checkbox) => {
      checkbox.checked = false;
    });
  }; //チェックを全て外す

  const clearText = (inputTexts) => {
    inputTexts.forEach((inputText) => {
      inputText.value = "";
    });
  }; //テキストを入力前の状態にする


  let allowedRecord;
  const regulationAlerts = document.querySelectorAll('.js-alert');

  const clearRegulationAlerts = (regulationAlerts) => {
    regulationAlerts.forEach((regulationAlert) =>{
      regulationAlert.classList.remove('u-display-block')
    })
  }; //アラート表示をなくす
  
  const checkInputThings = () => {
    clearRegulationAlerts(regulationAlerts);
    const studyingTime = document.querySelector(".js-studying-time");
    let ContentsCount = 0;
    let LanguagesCount = 0;

    for (let i = 0; i < contentsCheckBoxes.length; i++) {
      if (contentsCheckBoxes[i].checked) {
        ContentsCount++;
      }
    }
    for (let i = 0; i < languagesCheckBoxes.length; i++) {
      if (languagesCheckBoxes[i].checked) {
        LanguagesCount++;
      }
    }
    if (ContentsCount > 0 && LanguagesCount > 0 && studyingTime.value.length !== 0) {
      allowedRecord = true;
    } else {
      allowedRecord = false;
      if(ContentsCount <= 0){
        regulationAlerts[0].classList.add('u-display-block');
      }
      if(LanguagesCount <= 0){
        regulationAlerts[1].classList.add('u-display-block');
      }
      if(studyingTime.value.length === 0){
        regulationAlerts[2].classList.add('u-display-block');
      }
    }
  }; //validation

  const tweetArea = document.getElementById("js-tweet-area");

  const countLetters = () => {
    tweetArea.addEventListener("input", (e) => {
      if (e.target.value.length > 140) {
        regulationAlerts[3].classList.add("u-display-block");
        tweetCheckBox.checked = false;
        tweetCheckBox.disabled = true;
      } else if (e.target.value.length <= 140) {
        regulationAlerts[3].classList.remove("u-display-block");
        tweetCheckBox.disabled = false;
      }
    });
  }; //ツイートテキスト文字数カウンター

  const tweet = () => {
    if (tweetCheckBox.checked) {
      const tweetText = `${tweetArea.value}`;
      window.open(`http://twitter.com/intent/tweet?&text=${tweetText}`);
    }
  }; //ツイート機能

  const showRecordDone = () => {
    nowLoading.classList.remove("u-display-block");
    modalClose.classList.remove("u-display-hidden");
    recordDone.classList.add("u-display-flex");
    allowedClose = true;
  }; //記録・投稿完了画面を表示

  const modalOpen = document.querySelectorAll(".js-modal-open");
  const clickRecord = (modalOpens) => {
    modalOpens.forEach((modalOpen) => {
      modalOpen.addEventListener("click", () => {
        countLetters();
        window.scroll({ top: 0, behavior: "smooth" });
        modal.classList.toggle("u-display-block");
      });
    });
  }; //モーダルを開く
  clickRecord(modalOpen);

  const modalClose = document.querySelector(".js-modal-close");
  modalClose.addEventListener("click", () => {
    modal.classList.toggle("u-display-block");
    modalInner.classList.remove("u-display-hidden");
    recordDone.classList.remove("u-display-flex");
    nowLoading.classList.remove("u-display-block");
    unChecked(checkBoxes);
    clearText(inputTexts);
    clearRegulationAlerts(regulationAlerts);
  }); //モーダルを閉じる
  
  let allowedClose = true;
  const modalMask = document.querySelector(".js-mask");
  modalMask.addEventListener('click', () => {
    if(allowedClose === true) {
      modalClose.click();
    }
  }); //mask部分に触れても、モーダルを閉じる

  const studyingDate = document.getElementById("js-studying-date");
  const modalBack = document.querySelector(".js-modal-back");
  const calendar = document.querySelector(".js-calendar");

  studyingDate.addEventListener("click", () => {
    modalClose.classList.add("u-display-hidden");
    modalInner.classList.add("u-display-hidden");
    modalBack.classList.add("u-display-block");
    calendar.classList.add("u-display-block");
  }); //カレンダー画面へ移る

  const record = document.querySelector(".js-button-record-done");

  record.addEventListener("click", () => {
    checkInputThings();
    if (allowedRecord === false) {
      return;
    }
    
    allowedClose = false;
    tweet();
    window.scroll({ top: 0, behavior: "smooth" });
    modalInner.classList.add("u-display-hidden");
    modalClose.classList.add("u-display-hidden");
    nowLoading.classList.add("u-display-block");
    const cleartimeoutId = setTimeout(showRecordDone, 3000);

    modalClose.addEventListener("click", () => {
      clearTimeout(cleartimeoutId);
    });
  }); //記録・投稿する
}
