"use strict";

// Register the plugin to all charts:
Chart.register(ChartDataLabels);

{
  //棒グラフここから
  const STUDYING_TIME_DATA = "http://localhost:8080/assets/json/study_time.json";
  fetch(STUDYING_TIME_DATA)
    .then((response) => {
      return response.json();
    })
    .then((jsonData) => {
      createBarChart(jsonData);
    });

  function createBarChart(jsonData) {
    const convertedDayData = jsonData.map((d) => {
      return d.day.slice(-2).replace(/^0+/, "");
    });
    const convertedTimeData = jsonData.map((d) => {
      return d.time;
    });

    const bar_ctx = document.getElementById("js-bar-chart").getContext("2d");
    const gradient_desktop = bar_ctx.createLinearGradient(0, 0, 0, 300);
    const gradient_mobile = bar_ctx.createLinearGradient(0, 0, 0, 100);
    gradient_desktop.addColorStop(0, "#3ccfff");
    gradient_desktop.addColorStop(1, "#0f71bc");
    gradient_mobile.addColorStop(0, "#3ccfff");
    gradient_mobile.addColorStop(1, "#0f71bc");

    const barChart = new Chart(bar_ctx, {
      type: "bar",
      data: {
        labels: convertedDayData,
        datasets: [
          {
            data: convertedTimeData,
            barPercentage: 0.6,
            backgroundColor: screen.width > 520 ? gradient_desktop : gradient_mobile,
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
              max: 30,
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
          },
        },
      },
    });
  }
  //棒グラフここまで

  // 百分率にデータを転換
  const calculateSum = (datasets) => {
    let dataSum = 0;
    datasets.forEach((data) => {
      dataSum = dataSum + parseInt(data);
    });
    return dataSum;
  };

  const calculateRatio = (datasets, dataSum) => {
    datasets.forEach((data, index) => {
      let ratioData = Math.round((data / dataSum) * 100 * 10) / 10;
      datasets.splice(index, 1, ratioData);
    });
    return datasets;
  };

  function calculateData(datasets) {
    let dataSum = calculateSum(datasets);
    return calculateRatio(datasets, dataSum);
  }

  //学習言語ここから

  const STUDYING_LANGUAGES_DATA = "http://localhost:8080/assets/json/study_languages.json";
  fetch(STUDYING_LANGUAGES_DATA)
    .then((response) => {
      return response.json();
    })
    .then((jsonData) => {
      createLanguagesChart(jsonData);
    });

  function createLanguagesChart(jsonData) {
    const convertedLanguagesData = jsonData.map((d) => {
      return d.language;
    });

    const convertedRatioDataOfLanguages = jsonData.map((d) => {
      return d.time;
    });

    const languagesBgColors = jsonData.map((d) => {
      return d.chart_bgcolor;
    });

    const doughnut1_ctx = document.getElementById("js-doughnut1").getContext("2d");
    const doughnutChart1 = new Chart(doughnut1_ctx, {
      type: "doughnut",
      data: {
        labels: convertedLanguagesData,
        datasets: [
          {
            data: calculateData(convertedRatioDataOfLanguages),
            backgroundColor: languagesBgColors,
            datalabels: {
              color: "#ffffff",
              formatter: function (value, context) {
                return value + "%";
              },
            },
            hoverOffset: 4,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false,
          },
        },
      },
    });
  }
  //学習言語ここまで

  //学習コンテンツここから
  const STUDYING_CONTENTS_DATA = "http://localhost:8080/assets/json/study_contents.json";
  fetch(STUDYING_CONTENTS_DATA)
    .then((response) => {
      return response.json();
    })
    .then((jsonData) => {
      createContentsChart(jsonData);
    });

  function createContentsChart(jsonData) {
    const convertedContentsData = jsonData.map((d) => {
      return d.content;
    });

    const convertedRatioDataOfContents = jsonData.map((d) => {
      return d.time;
    });

    const contentsBgColors = jsonData.map((d) => {
      return d.chart_bgcolor;
    });

    const doughnut2_ctx = document.getElementById("js-doughnut2").getContext("2d");
    const doughnutChart2 = new Chart(doughnut2_ctx, {
      type: "doughnut",
      data: {
        labels: convertedContentsData,
        datasets: [
          {
            data: calculateData(convertedRatioDataOfContents),
            backgroundColor: contentsBgColors,
            datalabels: {
              color: "#ffffff",
              formatter: function (value, context) {
                return value + "%";
              },
            },
            hoverOffset: 4,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false,
          },
        },
      },
    });
  }
  //学習コンテンツここまで
}
