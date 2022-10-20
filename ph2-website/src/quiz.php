<?php
declare(strict_types=1);

$dsn = 'mysql:host=db;dbname=quiz;charset=utf8mb4';
$user = 'root';
$password = 'root';

try {
  $pdo = new PDO($dsn, $user, $password, [
    PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC
  ]);
} catch (PDOException $e) {
  echo '接続失敗: ' . $e->getMessage();
  exit();
}

?>

<!DOCTYPE html>
<html lang="ja">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;700&display=swap" rel="stylesheet" />
    <link rel="stylesheet" href="./sass/common.css" />
    <script src="./scripts/common.js" defer></script>
    <script src="./scripts/quiz.js" defer></script>
    <title>クイズページ</title>
  </head>
  <body>
    <!--headerここから  -->
    <header class="p-header">
      <div class="p-header__container">
        <a href="./index.html" class="p-header__logo"><img src="./img/logo.svg" alt="" /></a>
        <nav>
          <ul class="p-header__items-list js-navigation">
            <li class="p-header__items-list__text01"><a href="./index.html">POSSEとは</a></li>
            <li class="p-header__items-list__text02"><a href="./quiz.php">クイズ</a></li>
            <li class="p-header__items-list__sns">
              <a href="https://twitter.com/posse_program?s=20&t=cMS9Ly9_ZmsxjGV-K3i7sw"><img src="./img/icon/icon-twitter.svg" alt="" /></a>
            </li>
            <li class="p-header__items-list__sns">
              <a href="https://www.instagram.com/posse_programming/channel/"><img src="./img/icon/icon-instagram.svg" alt="" /></a>
            </li>
            <ul class="p-header__items-list-mobile">
              <li class="p-header__items-list-mobile__line-add">
                <div class="p-header__items-list-mobile__line-add__container">
                  <div class="p-header__items-list-mobile__line-add__image01"><img src="./img/icon/icon-line.svg" alt="" /></div>
                  <span>POSSE公式LINE追加</span>
                  <div class="p-header__items-list-mobile__line-add__image02"><img src="./img/icon/icon-link-light.svg" alt="" /></div>
                </div>
              </li>
              <li>POSSE公式サイト<img src="./img/icon/icon-link-gray-dark.svg" alt="" /></li>
              <li>
                <a href="https://twitter.com/posse_program?s=20&t=cMS9Ly9_ZmsxjGV-K3i7sw"><img src="./img/icon/icon-twitter.svg" alt="" /></a>
                <a href="https://www.instagram.com/posse_programming/channel/"><img src="./img/icon/icon-instagram.svg" alt="" /></a>
              </li>
            </ul>
          </ul>
        </nav>
        <div class="p-header__hamburger js-hamburger">
          <span></span>
        </div>
      </div>
    </header>
    <!-- headerここまで -->

    <!-- mainここから -->
    <main class="l-main">
      <article>
        <section class="p-quizhero">
          <div class="p-quizhero__title">
            <h1>POSSE課題</h1>
            <span>ITクイズ</span>
          </div>
        </section>
        <section class="p-quiz-container" id="js-quiz-area"></section>
        <section class="p-line">
          <div class="p-line__container">
            <div class="p-line__content">
              <div class="p-line__inner">
                <div class="p-line__header">
                  <div class="p-line__header__image"><img src="./img/icon/icon-line.svg" alt="" /></div>
                  <span class="p-line__header__title">POSSE 公式LINE</span>
                </div>
                <span>
                  公式LINEにてご質問を随時受け付けております。<br />詳細やPOSSE最新情報につきましては、公式LINEにてお知らせ致しますので<br />下記ボタンより友達追加をお願いします！
                </span>
                <a href="" class="p-line__link">LINE追加</a>
              </div>
            </div>
          </div>
        </section>
      </article>
    </main>
    <!-- mainここまで -->

    <!-- footerここから -->
    <footer class="p-footer">
      <div class="p-footer__links">
        <div class="p-footer__links__image"><img src="./img/logo.svg" alt="" /></div>
        <a href="" class="p-footer__links__link">POSSE公式サイト<img src="./img/icon/icon-link-gray-dark.svg" alt="" /></a>
        <ul class="p-footer__links__sns">
          <li>
            <a href="https://twitter.com/posse_program?s=20&t=cMS9Ly9_ZmsxjGV-K3i7sw"><img src="./img/icon/icon-twitter.svg" alt="" /></a>
          </li>
          <li>
            <a href="https://www.instagram.com/posse_programming/channel/"><img src="./img/icon/icon-instagram.svg" alt="" /></a>
          </li>
        </ul>
      </div>
      <div class="p-footer__copyright"><small>©︎2022 POSSE</small></div>
    </footer>
    <!-- footerここまで -->
  </body>
</html>
