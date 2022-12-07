<?php

require(dirname(__FILE__) . '/../db/dbconnect.php');

$record_at = str_replace('年', '-', $_POST['record_at']);
$record_at = str_replace('月', '-', $record_at);
$record_at = str_replace('日', '', $record_at);

$time = $_POST['time'];
$language_id = $_POST['language_id'];
$content_id = $_POST['content_id'];


$pdo->beginTransaction();

try {
  // postされた問題情報をrecordsテーブルに登録
  $sql = "INSERT INTO records(record_at, time, language_id, content_id) VALUES 
  (:record_at, :time, :language_id, :content_id)";
  $stmt = $pdo->prepare($sql);
  $stmt->bindValue(":record_at", $record_at);
  $stmt->bindValue(":time", $_POST["time"]);
  $stmt->bindValue(":language_id", $_POST["language_id"]);
  $stmt->bindValue(":content_id", $_POST["content_id"]);
  $stmt->execute();

  $pdo->commit();
  header("HTTP/1.1 200 OK");

} catch (Error $e) {
  $pdo->rollBack();
  echo '投稿失敗: ' . $e->getMessage();

  header("HTTP/1.1 500 OK");
}