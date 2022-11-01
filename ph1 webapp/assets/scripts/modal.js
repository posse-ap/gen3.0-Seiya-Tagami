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
  }; //フォーム送信時のvalidation

  const tweetArea = document.getElementById("js-tweet-area");

  const countLetters = () => {
    tweetArea.addEventListener("input", (e) => {
      if (e.target.value.length > 140) {
        regulationAlerts[3].classList.add("u-display-block");
        tweetCheckBox.checked = false;
        tweetCheckBox.disabled = true;
      } else {
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
    modalCloseButton.classList.remove("u-display-hidden");
    recordDone.classList.add("u-display-flex");
    allowedClose = true;
  }; //記録・投稿完了画面を表示

  const modalOpenButtons = document.querySelectorAll(".js-modal-open-button");
  const clickRecord = (modalOpenButtons) => {
    modalOpenButtons.forEach((modalOpenButton) => {
      modalOpenButton.addEventListener("click", () => {
        countLetters();
        window.scroll({ top: 0, behavior: "smooth" });
        modal.classList.toggle("u-display-block");
      });
    });
  }; //モーダルを開く
  clickRecord(modalOpenButtons);

  const modalCloseButton = document.querySelector(".js-modal-close-button");
  modalCloseButton.addEventListener("click", () => {
    modal.classList.toggle("u-display-block");
    modalInner.classList.remove("u-display-hidden");
    recordDone.classList.remove("u-display-flex");
    nowLoading.classList.remove("u-display-block");
    unChecked(checkBoxes);
    clearText(inputTexts);
    clearRegulationAlerts(regulationAlerts);
  }); //モーダルを閉じる
  
  let allowedClose = true;
  const modalOverlay = document.querySelector(".js-overlay");
  modalOverlay.addEventListener('click', () => {
    if(allowedClose === true) {
      modalCloseButton.click();
      closeCalendar();
    }
  }); //overlay部分に触れても、モーダルを閉じる

  const studyingDate = document.getElementById("js-studying-date");
  const modalBackButton = document.querySelector(".js-modal-back-button");
  const calendar = document.querySelector(".js-calendar");

  studyingDate.addEventListener("click", () => {
    openCalendar();
  }); //カレンダー画面へ移る

  const openCalendar = () => {
    modalCloseButton.classList.add("u-display-hidden");
    modalInner.classList.add("u-display-hidden");
    modalBackButton.classList.add("u-display-block");
    calendar.classList.add("u-display-block");
  } //カレンダーを開く

  const closeCalendar = () => {
    modalCloseButton.classList.remove("u-display-hidden");
    modalInner.classList.remove("u-display-hidden");
    modalBackButton.classList.remove("u-display-block");
    calendar.classList.remove("u-display-block");
  }; //カレンダーを閉じる

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
    modalCloseButton.classList.add("u-display-hidden");
    nowLoading.classList.add("u-display-block");
    const cleartimeoutId = setTimeout(showRecordDone, 3000);

    modalCloseButton.addEventListener("click", () => {
      clearTimeout(cleartimeoutId);
    });
  }); //記録・投稿する
}
