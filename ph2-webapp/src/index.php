<?php

require(dirname(__FILE__) . '/db/dbconnect.php');
require_once(dirname(__FILE__) . '/functions.php');



// today(unchanging)
$sql = "SELECT sum(time) FROM records WHERE DATE_FORMAT(record_at, '%Y%m%d') = DATE_FORMAT(NOW(), '%Y%m%d')";
$stmt = $pdo->query($sql);
$today = $stmt->fetch();


//month
$num = 0;
if (isset($_GET['location']) && preg_match('/^[1-9][0-9]*$/', $_GET['location'])) {
  $num = (int)$_GET['location'];
} else {
  $num = 0;
};

$sql = "SELECT sum(time) FROM records WHERE DATE_FORMAT(record_at, '%Y%m') = DATE_FORMAT(CURDATE() - INTERVAL :num MONTH, '%Y%m')";
$stmt = $pdo->prepare($sql);
$stmt->bindValue(":num", $num);
$stmt->execute();
$month = $stmt->fetch();


// total(unchanging)
$sql = "SELECT sum(time) FROM records";
$stmt = $pdo->query($sql);
$total = $stmt->fetch();

$prevNum = -1 * $num;
$objDateTime = new DateTime("$prevNum month");

// chart
require(dirname(__FILE__) . '/charts.php');

?>


<!DOCTYPE html>
<html lang="ja">

<head>
  <meta charset="UTF-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link rel="stylesheet" href="./sass/common.css" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap" rel="stylesheet" />
  <script src="./assets/scripts/modal.js" defer></script>
  <script src="./assets/scripts/calendar.js" defer></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/3.9.1/chart.min.js" defer></script>
  <script src="https://cdn.jsdelivr.net/npm/chartjs-plugin-datalabels@2.0.0" defer></script>
  <script src="./assets/scripts/chart.js" defer></script>
  <title>ph2-webapp</title>
</head>

<body>
  <!-- headerここから -->
  <header>
    <div class="p-header">
      <div class="p-header__container">
        <div class="p-header__logo">
          <a><img src="./assets/img/logo.svg" alt="" /></a>
          <span>4th week</span>
        </div>
        <div class="p-header__button">
          <button class="p-header__button__inner js-modal-open-button">記録・投稿</button>
        </div>
      </div>
    </div>
  </header>
  <!-- headerここまで -->

  <!-- mainここから -->
  <main>
    <div class="p-main">
      <div class="p-main__contents">
        <div class="p-main__time">
          <div class="p-main__time__item">
            <span>Today</span>
            <span><?= !empty($today["sum(time)"])  ? h($today["sum(time)"]) : 0; ?></span>
            <span>hour</span>
          </div>
          <div class="p-main__time__item">
            <span>Month</span>
            <span><?= !empty($month["sum(time)"]) ? h($month["sum(time)"]) : 0; ?></span>
            <span>hour</span>
          </div>
          <div class="p-main__time__item">
            <span>Total</span>
            <span><?= !empty($total["sum(time)"]) ? h($total["sum(time)"]) : 0; ?></span>
            <span>hour</span>
          </div>
          <div class="p-main__time__chart">
            <div class="p-main__time__chart__container">
              <canvas id="js-bar-chart"></canvas>
            </div>
          </div>
        </div>
        <div class="p-main__studying-data">
          <div class="p-main__studying-data__doughnut">
            <div class="p-main__studying-data__doughnut__container">
              <span class="p-main__studying-data__doughnut__title">学習言語</span>
              <div class="p-main__studying-data__doughnut__content">
                <canvas id="js-doughnut1"></canvas>
              </div>
              <ul class="p-main__studying-data__doughnut__legends" id="js-languages-legends"></ul>
            </div>
          </div>
          <div class="p-main__studying-data__doughnut">
            <div class="p-main__studying-data__doughnut__container">
              <span class="p-main__studying-data__doughnut__title">学習コンテンツ</span>
              <div class="p-main__studying-data__doughnut__content">
                <canvas id="js-doughnut2"></canvas>
              </div>
              <ul class="p-main__studying-data__doughnut__legends" id="js-contents-legends"></ul>
            </div>
          </div>
        </div>
      </div>
      <div class="p-main__change-month">
        <a href="?location=<?= $num + 1 ?>"></a>
        <h3><?= $objDateTime->format('Y年m月')?></h3>
        <?php if (0 < $num) : ?>
          <a href="?location=<?= $num - 1; ?>"></a>
        <?php else : ?>
          <span></span>
        <?php endif ?>
      </div>
      <div class="p-main__button-mobile">
        <button class="js-modal-open-button">記録・投稿</button>
      </div>
    </div>

    <!-- modalここから -->
    <div class="p-modal js-modal">
      <div class="p-modal__overlay js-overlay"></div>
      <div class="p-modal__container">
        <div class="p-modal__header">
          <button type="button" class="p-modal__close-button js-modal-close-button"></button>
          <button class="p-modal__back-button js-modal-back-button">
            <span class="p-modal__back-button__arrow"></span>
          </button>
        </div>
        <form class="p-modal__inner js-modal-inner" method="POST">
          <!-- modal左半分ここから -->
          <div class="p-modal__left">
            <dl class="p-modal__left__date">
              <dt>学習日</dt>
              <dd>
                <input type="text" id="js-studying-date" readonly />
              </dd>
            </dl>
            <dl class="p-modal__left__contents">
              <div class="p-modal__left__contents__title">
                <dt>学習コンテンツ</dt>
                <span class="p-modal__left__contents__alert js-alert">1項目以上選択してください</span>
              </div>
              <div class="p-modal__left__contents__checkboxes">
                <dd class="c-checkbutton">
                  <input id="checkbox1" class="js-contents-checkbox" type="checkbox" />
                  <label for="checkbox1" class="c-checkbutton__container">
                    <span class="c-checkbutton__dummy-input"></span>
                    N予備校
                  </label>
                </dd>
                <dd class="c-checkbutton">
                  <input id="checkbox2" class="js-contents-checkbox" type="checkbox" />
                  <label for="checkbox2" class="c-checkbutton__container">
                    <span class="c-checkbutton__dummy-input"></span>
                    ドットインストール
                  </label>
                </dd>
                <dd class="c-checkbutton">
                  <input id="checkbox3" class="js-contents-checkbox" type="checkbox" />
                  <label for="checkbox3" class="c-checkbutton__container">
                    <span class="c-checkbutton__dummy-input"></span>
                    POSSE課題
                  </label>
                </dd>
              </div>
            </dl>
            <dl class="p-modal__left__languages">
              <div class="p-modal__left__languages__title">
                <dt>学習言語</dt>
                <span class="p-modal__left__languages__alert js-alert">1項目以上選択してください</span>
              </div>
              <div class="p-modal__left__languages__checkboxes">
                <dd class="c-checkbutton">
                  <input id="checkbox4" class="js-languages-checkbox" type="checkbox" />
                  <label for="checkbox4" class="c-checkbutton__container">
                    <span class="c-checkbutton__dummy-input"></span>
                    HTML
                  </label>
                </dd>
                <dd class="c-checkbutton">
                  <input id="checkbox5" class="js-languages-checkbox" type="checkbox" />
                  <label for="checkbox5" class="c-checkbutton__container">
                    <span class="c-checkbutton__dummy-input"></span>
                    CSS
                  </label>
                </dd>
                <dd class="c-checkbutton">
                  <input id="checkbox6" class="js-languages-checkbox" type="checkbox" />
                  <label for="checkbox6" class="c-checkbutton__container">
                    <span class="c-checkbutton__dummy-input"></span>
                    JavaScript
                  </label>
                </dd>
                <dd class="c-checkbutton">
                  <input id="checkbox7" class="js-languages-checkbox" type="checkbox" />
                  <label for="checkbox7" class="c-checkbutton__container">
                    <span class="c-checkbutton__dummy-input"></span>
                    PHP
                  </label>
                </dd>
                <dd class="c-checkbutton">
                  <input id="checkbox8" class="js-languages-checkbox" type="checkbox" />
                  <label for="checkbox8" class="c-checkbutton__container">
                    <span class="c-checkbutton__dummy-input"></span>
                    Laravel
                  </label>
                </dd>
                <dd class="c-checkbutton">
                  <input id="checkbox10" class="js-languages-checkbox" type="checkbox" />
                  <label for="checkbox10" class="c-checkbutton__container">
                    <span class="c-checkbutton__dummy-input"></span>
                    SQL
                  </label>
                </dd>
                <dd class="c-checkbutton">
                  <input id="checkbox11" class="js-languages-checkbox" type="checkbox" />
                  <label for="checkbox11" class="c-checkbutton__container">
                    <span class="c-checkbutton__dummy-input"></span>
                    SHELL
                  </label>
                </dd>
                <dd class="c-checkbutton">
                  <input id="checkbox12" class="js-languages-checkbox" type="checkbox" />
                  <label for="checkbox12" class="c-checkbutton__container">
                    <span class="c-checkbutton__dummy-input"></span>
                    情報システム基礎知識（その他)
                  </label>
                </dd>
              </div>
            </dl>
          </div>
          <!-- modal左半分ここまで -->

          <!-- modal右半分ここから -->
          <div class="p-modal__right">
            <dl class="p-modal__right__time">
              <div class="p-modal__right__time__title">
                <dt>学習時間</dt>
                <span class="p-modal__right__time__alert js-alert">学習時間を入力してください</span>
              </div>
              <dd>
                <select class="js-studying-time" placeholder="時間を選択してください">
                  <option value="1">1時間</option>
                  <option value="2">2時間</option>
                  <option value="3">3時間</option>
                  <option value="4">4時間</option>
                  <option value="5">5時間</option>
                  <option value="6">6時間</option>
                  <option value="7">7時間</option>
                  <option value="8">8時間</option>
                </select>
              </dd>
            </dl>
            <dl class="p-modal__right__twitter">
              <div class="p-modal__right__twitter__title">
                <dt>Twitter用コメント</dt>
                <span class="p-modal__right__twitter__alert js-alert">140文字以内で入力してください</span>
              </div>
              <dd>
                <textarea class="js-input-text" id="js-tweet-area" cols="30" rows="10" placeholder="140文字以内で入力"></textarea>
              </dd>
              <div class="p-modal__right__twitter__share">
                <label>
                  <input type="checkbox" class="js-tweet-checkbox" />
                  <span class="p-modal__right__twitter__dummy-input"></span>
                  <span>Twitterにシェアする</span>
                </label>
              </div>
            </dl>
          </div>
          <!-- modal右半分ここまで -->

          <!-- modal記録・投稿ボタンここから -->
          <div class="p-modal__record-button">
            <button type="button" class="p-modal__record-button__inner js-button-record-done">記録・投稿</button>
          </div>
          <!-- modal記録・投稿ボタンここまで -->
        </form>

        <div class="p-modal__nowloading js-now-loading">
          <div class="p-modal__nowloading__inner"></div>
        </div>
        <!-- modal記録・投稿完了表示ここから -->
        <div class="p-modal__record-done js-record-done">
          <span>AWESOME!</span>
          <span class="p-modal__record-done__circle"></span>
          <span>記録・投稿<br />完了しました</span>
        </div>
        <!-- modal記録・投稿完了表示ここまで -->

        <!-- calenderここから -->
        <div class="p-calendar js-calendar">
          <div class="p-calendar__header">
            <span id="js-prev"></span>
            <h1 id="js-title">2022/05</h1>
            <span id="js-next"></span>
          </div>
          <table class="p-calendar__inner">
            <thead>
              <tr class="p-calendar__inner__days">
                <th>Sun</th>
                <th>Mon</th>
                <th>Tue</th>
                <th>Wed</th>
                <th>Thu</th>
                <th>Fri</th>
                <th>Sat</th>
              </tr>
            </thead>
            <tbody id="js-dates"></tbody>
          </table>
          <div class="p-calendar__button">
            <button type="button" class="p-calendar__button__inner js-calendar-button">決定</button>
          </div>
        </div>
        <!-- calenderここまで -->
      </div>
    </div>
    <!-- modalここまで -->
  </main>
  <!-- mainここまで -->
</body>

</html>