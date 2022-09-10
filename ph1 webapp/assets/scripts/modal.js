"use strict";

{
  const modal = document.querySelector(".js-modal-open");
  const modalInner = document.querySelector(".js-modal-inner");
  const recordDone = document.querySelector(".js-record-done");
  const checkBoxes = document.querySelectorAll(".js-checkbox");
  const writtenTexts = document.querySelectorAll(".js-written-text");

  const unChecked = (checkBoxes) => {
    checkBoxes.forEach((checkbox) => {
      checkbox.checked = false;
    });
  };

  const clearText = (writtenTexts) => {
    writtenTexts.forEach((text)=>{
      text.value = "";
    })
  }

  document.querySelector(".js-record").addEventListener("click", () => {
    modal.classList.toggle("u-display-block");
    //改良の余地あり
  });

  document.querySelector(".js-modal-close").addEventListener("click", () => {
    modal.classList.toggle("u-display-block");
    modalInner.classList.remove("u-display-hidden");
    recordDone.classList.remove("u-display-flex");
    unChecked(checkBoxes);
    clearText(writtenTexts);
    //改良の余地あり
  });

  document
    .querySelector(".js-button-record-done")
    .addEventListener("click", () => {
      modalInner.classList.add("u-display-hidden");
      recordDone.classList.add("u-display-flex");
    });
}
