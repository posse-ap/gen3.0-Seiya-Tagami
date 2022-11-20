<?php

declare(strict_types=1);

require(dirname(__FILE__) . '/dbconnect.php');
require_once(dirname(__FILE__) . '/functions.php');


// 問題データを取得
$questions = array();

$sql = "SELECT * FROM questions";
foreach ($pdo->query($sql) as $row) {
  array_push($questions, $row);
}

// question_idで結び付けて、全ての選択肢を取得
const QUESTION_NUM = 6;
$all_choices = array();

for($i = 1; $i < QUESTION_NUM + 1; $i++) {
  $question_id = $i;
  $sql = "SELECT * FROM choices WHERE question_id = :question_id";
  $stmt = $pdo->prepare($sql);
  $stmt->bindValue(':question_id', $question_id, PDO::PARAM_INT);
  $stmt->execute();
  $choices = $stmt->fetchAll();
  shuffle($choices);
  array_push($all_choices, $choices);
};

// 正解の選択肢を取得
$correct_answers = array();

$sql = "SELECT * FROM choices WHERE valid = :valid";
$stmt = $pdo->prepare($sql);
$stmt->bindValue(':valid', 1, PDO::PARAM_INT);
$stmt->execute();
$correct_answers = $stmt->fetchAll();
// [
//     {
//       question_id: 1;
//       text: "なんでしょう？";
//       choices: [
//       {choice_id: 1, text: "問1"}
//       {choice_id: 2, text: "問2"}
//       {choice_id: 3, text: "問3"}
//       ]
//     },
//     {
//       question_id: 2;
//       text: "なんでしょう？";
//       choices: [
//       {choice_id: 1, text: "問1"}
//       {choice_id: 2, text: "問2"}
//       {choice_id: 3, text: "問3"}
//       ]
//     }
// ]

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
      <section class="p-quiz-container" id="js-quiz-area">

        <?php foreach ($questions as $key => $question) : ?>
          <div class="p-quiz js-quiz">
            <div class="p-quiz__header">
              <div class="p-quiz__header__quizlabel">Q<?= h($key) + 1 ?></div>
              <span class="p-quiz__header__question"><?= h($question['question']) ?></span>
              <div class="p-quiz__header__image"><img src="./img/quiz/<?= h($question['image']) ?>" alt="" /></div>
            </div>
            <div class="p-quiz__answerlabel">A</div>
            <div class="p-quiz__answer-box">
              <ul class="p-quiz__answer-box__choices">
                <?php foreach ($all_choices[$key] as $choice) : ?>
                  <li><button class="p-quiz__answer-box__choices__button is-attached-arrow js-answer" data-answer="<?= h($choice['valid'])?>"><?= h($choice['name']) ?></button></li>
                <?php endforeach; ?>
              </ul>
              <div class="p-quiz__answer-box__answer-true js-true">
                <div class="p-quiz__answer-box__answer-true__textbox">
                  <span>正解！</span>
                  <div><span>A</span><span><?= h($correct_answers[$key]['name']) ?></span></div>
                </div>
              </div>
              <div class="p-quiz__answer-box__answer-false js-false">
                <div class="p-quiz__answer-box__answer-false__textbox">
                  <span>不正解...</span>
                  <div><span>A</span><span><?= h($correct_answers[$key]['name']) ?></span></div>
                </div>
              </div>
              <?php if (!empty($question['quote'])) : ?>
                <cite><a href="<?= h($question['quote_url']) ?>"><?= h($question['quote']) ?></a></cite>
              <?php endif; ?>
            </div>
          </div>
        <?php endforeach; ?>

      </section>
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