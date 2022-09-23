"use strict";

{
  const modal = document.querySelector(".js-modal");
  const modalInner = document.querySelector(".js-modal-inner");
  const nowLoading = document.querySelector(".js-now-loading");
  const recordDone = document.querySelector(".js-record-done");
  const checkBoxes = document.querySelectorAll(".js-checkbox");
  const inputedTexts = document.querySelectorAll(".js-inputed-text");

  const unChecked = (checkBoxes) => {
    checkBoxes.forEach((checkbox) => {
      checkbox.checked = false;
    });
  }; //チェックを全て外す

  const clearText = (inputedTexts) => {
    inputedTexts.forEach((text) => {
      text.value = "";
    });
  }; //テキストを入力前の状態にする

  const tweetArea = document.getElementById("js-tweetarea");
  const regulationAlert = document.querySelector(".js-alert");
  const shareTweet = document.getElementById("js-tweet-share");

  const countLetters = () => {
    tweetArea.addEventListener("input", (e) => {
      if (e.target.value.length > 140) {
        regulationAlert.classList.add("u-display-block");
        shareTweet.checked = false;
        shareTweet.disabled = true;
      } else if (e.target.value.length <= 140) {
        regulationAlert.classList.remove("u-display-block");
        shareTweet.disabled = false;
      }
    });
  }; //ツイートテキスト文字数カウンター

  const tweet = () => {
    if (shareTweet.checked) {
      const tweetText = `${tweetArea.value}`;
      // const hashtag = "";
      window.open(
        // `http://twitter.com/intent/tweet?&text=${tweetText}&hashtags=${hashtag}`
        `http://twitter.com/intent/tweet?&text=${tweetText}`
      );
    }
  }; //ツイート機能

  const showRecordDone = () => {
    nowLoading.classList.remove("u-display-block");
    modalClose.classList.remove("u-display-hidden");
    recordDone.classList.add("u-display-flex");
  }; //記録・投稿完了画面を表示

  const recordButtons = document.querySelectorAll(".js-record");
  const clickRecord = (recordButtons) => {
    recordButtons.forEach((recordButton) => {
      recordButton.addEventListener("click", () => {
        countLetters();
        window.scroll({ top: 0, behavior: "smooth" });
        modal.classList.toggle("u-display-block");
      });
    });
  }; //モーダルを開く
  clickRecord(recordButtons);

  const modalClose = document.querySelector(".js-modal-close");
  modalClose.addEventListener("click", () => {
    modal.classList.toggle("u-display-block");
    modalInner.classList.remove("u-display-hidden");
    recordDone.classList.remove("u-display-flex");
    nowLoading.classList.remove("u-display-block");
    regulationAlert.classList.remove("u-display-block");
    unChecked(checkBoxes);
    clearText(inputedTexts);
  }); //モーダルを閉じる

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
