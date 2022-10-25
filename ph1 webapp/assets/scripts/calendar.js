"use strict";

{
  const today = new Date();
  let year = today.getFullYear();
  let month = today.getMonth();

  const getCalendarHead = () => {
    const dates = [];
    const d = new Date(year, month, 0).getDate();
    const n = new Date(year, month, 1).getDay();
    //memo: 曜日を取得。0は日曜日、1は月曜日と続いていく

    for (let i = 0; i < n; i++) {
      dates.unshift({
        date: d - i,
        isToday: false,
        isDisabled: true,
      });
    }
    return dates;
  }; //前月の日付を一部を取得

  const getCalenderBody = () => {
    const dates = [];
    const lastDate = new Date(year, month + 1, 0).getDate();

    for (let i = 1; i <= lastDate; i++) {
      dates.push({
        date: i,
        isToday: false,
        isDisabled: false,
      });
    }

    if (year === today.getFullYear() && month == today.getMonth()) {
      dates[today.getDate() - 1].isToday = true;
    }

    return dates;
  }; //その月の日付を取得

  const clearCalendar = () => {
    const tbody = document.querySelector("tbody");
    tbody.innerHTML = "";
  }; //カレンダーの中身を削除

  const renderTitle = () => {
    const title = `${year}年${String(month + 1).padStart(2, "0")}月`;
    document.getElementById("js-title").textContent = title;
  }; //カレンダー上部に年月日を表示

  const renderWeeks = () => {
    const dates = [...getCalendarHead(), ...getCalenderBody()];
    const weeks = [];
    const weekCount = dates.length / 7;

    for (let i = 0; i < weekCount; i++) {
      weeks.push(dates.splice(0, 7));
    }

    weeks.forEach((week) => {
      const tr = document.createElement("tr");
      week.forEach((date) => {
        const td = document.createElement("td");

        td.textContent = date.date;
        if (date.isDisabled) {
          td.classList.add("disabled");
        }
        if (today.getFullYear() < year) {
          td.classList.add("u-colors-black");
        } else if (today.getFullYear() > year || today.getMonth() > month || (year === today.getFullYear() && month == today.getMonth() && today.getDate() > date.date)) {
          td.classList.add("u-colors-gray");
        }
        tr.appendChild(td);
      });
      document.querySelector("tbody").appendChild(tr);
    });
  }; //カレンダーの日付を表示

  function createCalendar() {
    clearCalendar();
    renderTitle();
    renderWeeks();
    fixClickedDate();
  } // カレンダー生成
  
  document.getElementById("js-prev").addEventListener("click", () => {
    month--;
    if (month < 0) {
      year--;
      month = 11;
    }
    createCalendar();
  }); //前の月へ

  document.getElementById("js-next").addEventListener("click", () => {
    month++;
    if (month > 11) {
      year++;
      month = 0;
    }
    createCalendar();
  }); //次の月へ

  const studyingDate = document.getElementById("js-studying-date");
  const dates = document.getElementById("js-dates");
  let dateData = `${year}年${String(month + 1).padStart(2, "0")}月${today.getDate()}日`;

  const initializeDate = () => {
    studyingDate.value = dateData;
  }; // 初期値は今日の日付にする

  const fixClickedDate = () => {
    if (year == dateData.substring(0, 4) && month + 1 == dateData.substring(5, 7)) {
      const allDates = dates.querySelectorAll("td");
      allDates.forEach((date) => {
        if (`${date.textContent}日` === dateData.substring(8, 10)) {
          //日にちが一桁なら"日"まで含むようにする。
          date.classList.add("p-calendar-is-pushed");
        } else if (date.textContent === dateData.substring(8, 10)) {
          date.classList.add("p-calendar-is-pushed");
        }
      });
    }
  }; // dateDataに格納されている日付に対して".p-calendar-is-pushed"を付与し続ける

  dates.addEventListener("click", (e) => {
    if (e.target.nodeName === "TD") {
      const allDates = dates.querySelectorAll("td");
      allDates.forEach((date) => {
        date.classList.remove("p-calendar-is-pushed");
      });

      dateData = `${year}年${String(month + 1).padStart(2, "0")}月${e.target.textContent}日`; //dateDataに日付を格納
      e.target.classList.add("p-calendar-is-pushed");
    }
  });

  const modalBack = () => {
    document.querySelector(".js-modal-inner").classList.remove("u-display-hidden");
    document.querySelector(".js-modal-close-button").classList.remove("u-display-hidden");
    document.querySelector(".js-modal-back").classList.remove("u-display-block");
    document.querySelector(".js-calendar").classList.remove("u-display-block");
  }; //もとの画面へ戻る

  document.querySelector(".js-modal-back").addEventListener("click", () => {
    modalBack();
  }); //戻るボタン押下時

  document.querySelector(".js-calendar-button").addEventListener("click", () => {
    studyingDate.value = dateData;
    modalBack();
  }); //決定ボタン押下時

  initializeDate();
  createCalendar();
}
