<?php
require(dirname(__FILE__) . '/../db/dbconnect.php');

$email = $_POST['email'];
$hash_pass = password_hash($_POST['password'], PASSWORD_DEFAULT);

$sql = "SELECT * FROM users WHERE email = :email";
$stmt = $pdo->prepare($sql);
$stmt->bindParam(":email", $email);
$stmt->execute();
$user = $stmt->fetch();


if (password_verify($user["password"], $hash_pass)) {
  session_start();
  $_SESSION['id'] = $user["id"];
  $_SESSION['name'] = $user["name"];
  header('Location: http://' . $_SERVER['HTTP_HOST'] . '/admin/index.php');
  exit;
} else {
  echo '認証情報が正しくありません' . '<br/><a href="/admin/auth/signin.php">ログイン画面に戻る</a>';
  exit;
}
