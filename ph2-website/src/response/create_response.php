<?php

function create_response($status, $message)
{
  // $messageの内容をjsonにエンコード
  $json = json_encode($message, JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT);
  // CORSについて：ワイルドカードで全てのサイトを許可する(危険なのでプロダクトでは基本的には使わない)
  header("Access-Control-Allow-Origin: *");
  header("Content-Type: application/json; charset=utf-8");
  // http_response_codeでステータスコードを出力
  http_response_code($status);
  echo $json;
}

