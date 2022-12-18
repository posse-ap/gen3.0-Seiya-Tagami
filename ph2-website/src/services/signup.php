<?php


$username = $_POST["name"];
$email = $_POST['email'];
$password = password_hash($_POST['password'], PASSWORD_DEFAULT);

require(dirname(__FILE__) . '/../db/dbconnect.php');

$sql = "SELECT * FROM users WHERE email = :email";
$stmt = $pdo->prepare($sql);
$stmt->bindValue(':email', $email);
$stmt->execute();
$member = $stmt->fetch();
if ($member['email'] === $email) {

  // $msg = '同じメールアドレスが存在します。';
  // $link = '<a href="signup.php">戻る</a>';

} else {

  $sql = "INSERT INTO users(name, email, password) VALUES (:name, :email, :password)";
  $stmt = $dbh->prepare($sql);
  $stmt->bindValue(':name', $name);
  $stmt->bindValue(':email', $email);
  $stmt->bindValue(':password', $password);
  $stmt->execute();

}