"use strict";
{
  //棒グラフここから

  const STUDYING_TIME_DATA =
    "http://posse-task.anti-pattern.co.jp/1st-work/study_time.json";
  fetch(STUDYING_TIME_DATA)
    .then((response) => {
      return response.json();
    })
    .then((jsonData) => {
      createBarChart(jsonData);
    });

  function createBarChart(jsonData) {
    const convertedDayData = jsonData.map((d) => {
      return d.day;
    });
    const convertedTimeData = jsonData.map((d) => {
      return d.time;
    });

    const bar_ctx = document.getElementById("js-bar-chart").getContext("2d");
    bar_ctx.canvas.height = 280;
    const gradient = bar_ctx.createLinearGradient(0, 300, 0, 0);
    gradient.addColorStop(0, "#0f71bc");
    gradient.addColorStop(1, "#3ccfff");

    const barChart = new Chart(bar_ctx, {
      type: "bar",
      data: {
        labels: convertedDayData,
        datasets: [
          {
            // label: "",
            data: convertedTimeData,
            backgroundColor: gradient,
            borderWidth: 1,
            borderRadius: 50,
            borderSkipped: false,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          x: {
            grid: {
              display: false,
              drawBorder: false,
              //borderを消す
            },
            ticks: {
              maxRotation: 0,
              minRotation: 0,
              //回転させない
              min: 1,
              max: 31,
              color: "#97b9d1",
              autoSkip: false,
              //画面を小さくしても、非表示させない
              callback: function (value, index) {
                return index % 2 === 1 ? this.getLabelForValue(value) : "";
              },
            },
          },
          y: {
            grid: {
              display: false,
              drawBorder: false,
              //borderを消す
            },
            max: 8,
            min: 0,
            ticks: {
              stepSize: 2,
              callback: function (value) {
                return value + "h";
              },
              color: "#97b9d1",
            },
          },
        },
        plugins: {
          legend: {
            display: false,
          }
        },
      },
    });
  }
}
