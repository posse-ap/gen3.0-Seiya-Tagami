<?php

require(dirname(__FILE__) . '/../db/dbconnect.php');

try {
  // data of study_time
  $sql = "SELECT DATE_FORMAT(records.record_at, '%Y-%m-%d') day, sum(records.time) time FROM records WHERE
  DATE_FORMAT(CURDATE() - INTERVAL $num MONTH, '%Y%m') = DATE_FORMAT(records.record_at, '%Y%m') group by day ORDER BY day ASC";
  $studies = $pdo->query($sql)->fetchAll(\PDO::FETCH_CLASS);

  // convert to json
  $chart_data = json_encode($studies);
  file_put_contents("./assets/json/study_time.json", $chart_data);

  // data of study_languages
  $sql = "SELECT language, sum(records.time) time, chart_bgcolor FROM records 
  join studying_languages on records.language_id = studying_languages.id 
  WHERE DATE_FORMAT(CURDATE() - INTERVAL $num MONTH, '%Y%m') = DATE_FORMAT(records.record_at, '%Y%m')
  group by language, chart_bgcolor";
  $contents = $pdo->query($sql)->fetchAll();

  // convert to json
  $chart_data = json_encode($contents);
  file_put_contents("./assets/json/study_languages.json", $chart_data);

  // data of study_contents
  $sql = "SELECT content, sum(records.time) time, chart_bgcolor FROM records
  join studying_contents on records.content_id = studying_contents.id 
  WHERE DATE_FORMAT(CURDATE() - INTERVAL $num MONTH, '%Y%m') = DATE_FORMAT(records.record_at, '%Y%m')
  group by content, chart_bgcolor";
  $contents = $pdo->query($sql)->fetchAll();

  // convert to json
  $chart_data = json_encode($contents);
  file_put_contents("./assets/json/study_contents.json", $chart_data);

} catch (PDOException $e) {
  exit($e->getMessage()); 
}


