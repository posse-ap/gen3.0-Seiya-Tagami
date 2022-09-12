"use strict";

{
  const modal = document.querySelector(".js-modal-open");
  const modalInner = document.querySelector(".js-modal-inner");
  const nowLoading = document.querySelector(".js-now-loading");
  const recordDone = document.querySelector(".js-record-done");
  const checkBoxes = document.querySelectorAll(".js-checkbox");
  const writtenTexts = document.querySelectorAll(".js-written-text");

  const unChecked = (checkBoxes) => {
    checkBoxes.forEach((checkbox) => {
      checkbox.checked = false;
    });
  }; //チェックを全て外す

  const clearText = (writtenTexts) => {
    writtenTexts.forEach((text) => {
      text.value = "";
    });
  }; //テキストを入力前の状態にする

  const tweetArea = document.getElementById("js-tweetarea");
  const tweetSharebutton = document.getElementById("js-tweet-share");

  const tweetShare = () => {
    if (tweetSharebutton.checked) {
      if ((tweetArea.value = "")) {
        alert("kora!");
      }
    }
  };
  tweetShare();

  const tweet = () => {
    if (tweetSharebutton.checked) {
      const tweetText = `${tweetArea.value}`;
      const hashtag = "今日も一日頑張ったぞい";
      window.open(
        `http://twitter.com/intent/tweet?&text=${tweetText}&hashtags=${hashtag}`
      );
    }
  }; //ツイート機能

  const showRecorddone = () => {
    nowLoading.classList.remove("u-display-block");
    recordDone.classList.add("u-display-flex");
  }; //記録・投稿完了画面を表示

  document.querySelector(".js-record").addEventListener("click", () => {
    modal.classList.toggle("u-display-block");
    //改良の余地あり
  });

  document.querySelector(".js-record-mobile").addEventListener("click", () => {
    window.scroll({ top: 0, behavior: "smooth" });
    modal.classList.toggle("u-display-block");
    //改良の余地あり
  });

  const modalClose = document.querySelector(".js-modal-close");
  modalClose.addEventListener("click", () => {
    modal.classList.toggle("u-display-block");
    modalInner.classList.remove("u-display-hidden");
    recordDone.classList.remove("u-display-flex");
    nowLoading.classList.remove("u-display-block");
    unChecked(checkBoxes);
    clearText(writtenTexts);
  }); //モーダルを閉じる

  const record = document.querySelector(".js-button-record-done");
  record.addEventListener("click", () => {
    tweet();
    window.scroll({ top: 0, behavior: "smooth" });
    modalInner.classList.add("u-display-hidden");
    nowLoading.classList.add("u-display-block");
    const cleartimeoutId = setTimeout(showRecorddone, 3000);

    modalClose.addEventListener("click", () => {
      clearTimeout(cleartimeoutId);
    });
  }); //記録・投稿する
}
