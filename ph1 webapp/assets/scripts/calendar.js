"use strict";

{
  (function(){

  
  const today = new Date();
  let year = today.getFullYear();
  let month = today.getMonth();

  const getCalendarHead = () => {
    const dates = [];
    const d = new Date(year, month, 0).getDate();
    const n = new Date(year, month, 1).getDay(); 
    //曜日を取得
    //memo: 0は日曜日、1は月曜日と続く

    for ( let i = 0; i < n; i++) {
      dates.unshift({
        date: d - i,
        isToday: false,
        isDisabled: true,
      });
    }
    return dates;
  }

  const getCalenderBody = () => {
    const dates = [];
    const lastDate = new Date(year, month + 1, 0).getDate();

    for (let i = 1; i <= lastDate; i++) {
      dates.push({
        date: i,
        isToday: false,
        isDisabled: false,
        isFutureDay:false
      });
    }

    if(year === today.getFullYear() && month == today.getMonth()){
      dates[today.getDate() - 1].isToday = true;
    }

    return dates;
  };

  const getCalendarTail = () => {
    const dates = [];
    const lastDay =  new Date(year, month + 1, 0).getDay();

    for ( let i = 1; i < 7 - lastDay; i++) {
      dates.push({
        date: i,
        isToday: false,
        isDisabled: true,
      });
    }
    return dates;
  }

  const clearCalendar = () => {
    const tbody = document.querySelector('tbody');
    tbody.innerHTML = "";
  } //カレンダーの中身を削除

  const renderTitle = () => {
    const title = `${year}年${String(month + 1).padStart(2, '0')}月`;
    document.getElementById('js-title').textContent = title;
  }

  const renderWeeks = () => {
    const dates = [
      ...getCalendarHead(),
      ...getCalenderBody(),
      ...getCalendarTail(),
    ];

    const weeks = [];
    const weekCount = dates.length/7;

    for(let i = 0; i < weekCount; i++){
      weeks.push(dates.splice(0,7))
    }

    weeks.forEach(week => {
      const tr = document.createElement('tr');
      week.forEach(date => {
        const td = document.createElement('td');

        td.textContent = date.date;
        if (date.isToday){
          td.classList.add('today');
        }
        if (date.isDisabled) {
          td.classList.add('disabled');
        }

        tr.appendChild(td);
      });
      document.querySelector('tbody').appendChild(tr);
    })
  }

  function createCalendar() {
    clearCalendar();
    renderTitle();
    renderWeeks();
  }

  document.getElementById('js-prev').addEventListener('click', ()=>{
    month--;
    if (month < 0) {
      year--;
      month = 11; 
    }

    createCalendar();
  });

  document.getElementById('js-next').addEventListener('click', ()=>{
    month++;
    if (month > 11) {
      year++;
      month = 0; 
    }

    createCalendar();
  });

  createCalendar();
})();

  const calenderDates = document.querySelectorAll('td');
  let dateInner;
  calenderDates.forEach((date)=>{
    date.addEventListener('click', () =>{
      dateInner = date.textContent;
      console.log(dateInner);
    })
  })
  //eを使うべきかもしれない、それでtargetとかやるやつ。querySelectorだと全部取得できない
}
