"use strict";

{
  const modal = document.querySelector(".js-modal");
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
  const regulationAlert = document.querySelector(".js-alert");
  const shareTweet = document.getElementById("js-tweet-share");

  const countlettersOftweet = () => {
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

  const showRecorddone = () => {
    nowLoading.classList.remove("u-display-block");
    recordDone.classList.add("u-display-flex");
  }; //記録・投稿完了画面を表示

//短縮できないか？
  document.querySelector(".js-record").addEventListener("click", () => {
    countlettersOftweet();
    modal.classList.toggle("u-display-block");
  });

  document.querySelector(".js-record-mobile").addEventListener("click", () => {
    countlettersOftweet();
    window.scroll({ top: 0, behavior: "smooth" });
    modal.classList.toggle("u-display-block");
  });
//

  const modalClose = document.querySelector(".js-modal-close");
  modalClose.addEventListener("click", () => {
    modal.classList.toggle("u-display-block");
    modalInner.classList.remove("u-display-hidden");
    recordDone.classList.remove("u-display-flex");
    nowLoading.classList.remove("u-display-block");
    regulationAlert.classList.remove("u-display-block");
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
