<?php

$dsn = 'mysql:host=db;dbname=posse;charset=utf8mb4';
$user = 'root';
$password = 'root';

try {
  $pdo = new PDO($dsn, $user, $password, [
    PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC
  ]);
} catch (PDOException $e) {
  echo '接続失敗: ' . $e->getMessage();
  exit;
}

$sql = "SELECT * FROM questions";
$questions = array();
foreach($pdo->query($sql) as $row) {
  array_push($questions, $row);
}

$sql_2 = "SELECT * FROM choices";
$choices = array();
foreach($pdo->query($sql_2) as $row) {
  array_push($questions, $row);
}

var_dump($questions);
var_dump($choices);
