"use strict";

// Register the plugin to all charts:
Chart.register(ChartDataLabels);

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
          },
          datalabels: {
            display: false,
          }
        },
      },
    });
  }
  //棒グラフここまで

  //学習言語ここから
  const bgColors = [
    "#0345ec",
    "#0f71bd",
    "#20bdde",
    "#3ccefe",
    "#b29ef3",
    "#6d46ec",
    "#4a17ef",
    "#3105c0",
  ];

  const STUDYING_LANGUAGES_DATA =
    "http://posse-task.anti-pattern.co.jp/1st-work/study_language.json";
  fetch(STUDYING_LANGUAGES_DATA)
    .then((response) => {
      return response.json();
    })
    .then((jsonData) => {
      createLanguagesChart(jsonData);
    });

  function createLanguagesChart(jsonData) {
    const convertedLangauagesData = Object.keys(jsonData[0]);
    const convertedRatioDataOfLanguages = Object.values(jsonData[0]);
    const doughnut1_ctx = document
      .getElementById("js-doughnut1")
      .getContext("2d");
    const doughnutChart1 = new Chart(doughnut1_ctx, {
      type: "doughnut",
      data: {
        labels: convertedLangauagesData,
        datasets: [
          {
            data: convertedRatioDataOfLanguages,
            backgroundColor: bgColors,
            datalabels: {
              color: "#ffffff",
              formatter: function (value, context) {
                return value + "%";
              },
            },
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display:false,
          }
        }
      },
    });
  }
  //学習言語ここまで

  //学習コンテンツここから
  const STUDYING_CONTENTS_DATA =
    "http://posse-task.anti-pattern.co.jp/1st-work/study_contents.json";
  fetch(STUDYING_CONTENTS_DATA)
    .then((response) => {
      return response.json();
    })
    .then((jsonData) => {
      createContentsChart(jsonData);
    });

  function createContentsChart(jsonData) {
    const convertedContentsData = Object.keys(jsonData[0]);
    const convertedRatioDataOfContents = Object.values(jsonData[0]);
    const doughnut2_ctx = document.getElementById("js-doughnut2").getContext("2d");
    const doughnutChart2 = new Chart(doughnut2_ctx, {
      type: "doughnut",
      data: {
        labels: convertedContentsData,
        datasets: [
          {
            data: convertedRatioDataOfContents,
            backgroundColor: bgColors,
            datalabels: {
              color: "#ffffff",
              formatter: function (value, context) {
                return value + "%";
              },
            },
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display:false,
          }
        }
      },
    });
  }
  //学習コンテンツここまで
}
