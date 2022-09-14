"use strict";

{
  const today = new Date();
  let year = today.getFullYear();
  let month = today.getMonth();

  const getCalendarHead = () => {
    const dates = [];
    const d = new Date(year, month, 0).getDate();
    const n = new Date(year, month, 1).getDay();
    //曜日を取得
    //memo: 0は日曜日、1は月曜日と続く

    for (let i = 0; i < n; i++) {
      dates.unshift({
        date: d - i,
        isToday: false,
        isDisabled: true,
      });
    }
    return dates;
  };

  const getCalenderBody = () => {
    const dates = [];
    const lastDate = new Date(year, month + 1, 0).getDate();

    for (let i = 1; i <= lastDate; i++) {
      dates.push({
        date: i,
        isToday: false,
        isDisabled: false,
        isFutureDay: true,
      });
    }

    if (year === today.getFullYear() && month == today.getMonth()) {
      dates[today.getDate() - 1].isToday = true;
    }

    return dates;
  };

  const clearCalendar = () => {
    const tbody = document.querySelector("tbody");
    tbody.innerHTML = "";
  }; //カレンダーの中身を削除

  const renderTitle = () => {
    const title = `${year}年${String(month + 1).padStart(2, "0")}月`;
    document.getElementById("js-title").textContent = title;
  };

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
        if (date.isToday) {
          td.classList.add("u-colors-calendar-pushed");
        }
        if (date.isDisabled) {
          td.classList.add("disabled");
        }
        if (today.getFullYear() < year || today.getMonth() < month) {
          td.classList.add("u-colors-black");
        } else if (
          today.getFullYear() > year ||
          today.getMonth() > month ||
          (year === today.getFullYear() &&
            month == today.getMonth() &&
            today.getDate() > date.date)
        ) {
          td.classList.add("u-colors-gray");
        }
        tr.appendChild(td);
      });
      document.querySelector("tbody").appendChild(tr);
    });
  };

  function createCalendar() {
    clearCalendar();
    renderTitle();
    renderWeeks();
  }
  createCalendar();
  // カレンダー生成

  document.getElementById("js-prev").addEventListener("click", () => {
    month--;
    if (month < 0) {
      year--;
      month = 11;
    }
    createCalendar();
    setToday();
  }); //前の月へ

  document.getElementById("js-next").addEventListener("click", () => {
    month++;
    if (month > 11) {
      year++;
      month = 0;
    }
    createCalendar();
    setToday();
  }); //次の月へ

  const studyingDate = document.getElementById("js-studying-date");
  const dates = document.getElementById("js-dates");
  let dateInner = `${year}年${String(month + 1).padStart(
    2,
    "0"
  )}月${today.getDate()}日`;

  const initializeDate = () => {
    studyingDate.value = dateInner;
  }; // 初期値は今日の日付にする
  initializeDate();

  const setToday = () => {
    if (year === today.getFullYear() && month == today.getMonth()) {
      dateInner = `${year}年${String(month + 1).padStart(
        2,
        "0"
      )}月${today.getDate()}日`;
    }
  }; //今月に戻ったら、強制的に今日の日付を指すようにする。これどうなん？分からん

  dates.addEventListener("click", (e) => {
    if (e.target.nodeName === "TD") {
      const allDates = dates.querySelectorAll("td");
      allDates.forEach((date) => {
        date.classList.remove("u-colors-calendar-pushed");
      });

      dateInner = `${year}年${String(month + 1).padStart(2, "0")}月${
        e.target.textContent
      }日`; //dateInnerに日付を格納
      e.target.classList.add("u-colors-calendar-pushed");
    }
  });

  const backToModal = () => {
    document
      .querySelector(".js-modal-inner")
      .classList.remove("u-display-hidden");
    document
      .querySelector(".js-modal-close")
      .classList.remove("u-display-hidden");
    document
      .querySelector(".js-modal-back")
      .classList.remove("u-display-block");
    document.querySelector(".js-calendar").classList.remove("u-display-block");
  }; //もとの画面へ戻る

  const modalBack = document.querySelector(".js-modal-back");
  const calendarButton = document.querySelector(".js-calendar-button");
  modalBack.addEventListener("click", () => {
    backToModal();
  });

  calendarButton.addEventListener("click", () => {
    studyingDate.value = dateInner;
    backToModal();
  });
}
