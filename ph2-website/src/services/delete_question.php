<?php

require(dirname(__FILE__) . '/../db/dbconnect.php');

if (isset($_GET["id"]) && preg_match('/^[1-9][0-9]*$/', $_GET['id'])) {
  $question_id = (int)$_GET["id"];
};

//memo:トランザクション開始
$pdo->beginTransaction();
try {
  $sql = "DELETE FROM choices WHERE question_id = :question_id";
  $stmt = $pdo->prepare($sql);
  $stmt->bindValue(":question_id", $question_id);
  $stmt->execute();

  $sql = "DELETE FROM questions WHERE id = :question_id";
  $stmt = $pdo->prepare($sql);
  $stmt->bindValue(":question_id", $question_id);
  $stmt->execute();

  //memo:コミットしてデータ保存
  $pdo->commit();

  header('Refresh: 3; url=http://localhost:8080/admin/index.php');
  echo "<h2>正常に削除されました。3秒後元のページへリダイレクトします。</h2>";
  exit();
} catch (Error $e) {
  //memo:エラー時ロールバックでキャンセル
  $pdo->rollBack();
  header('Refresh: 3; url=http://localhost:8080/admin/index.php');
  echo "<h2>エラーが発生したため、処理を中断しました。3秒後元のページへリダイレクトします。</h2>";
  exit();
}

?>