"use strict";

{
  const modal = document.querySelector(".js-modal-open");
  const modalInner = document.querySelector(".js-modal-inner");

  document.querySelector(".js-record").addEventListener("click", () => {
    modal.classList.toggle("u-display-block");
    modalInner.classList.remove("u-display-hidden");
    //改良の余地あり
  });

  document.querySelector(".js-modal-close").addEventListener("click", () => {
    modal.classList.toggle("u-display-block");
  });

  document.querySelector(".js-record-is-done").addEventListener("click", () => {
    modalInner.classList.add("u-display-hidden");
  });
}
