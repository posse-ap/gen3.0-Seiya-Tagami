<?php

declare(strict_types=1);

require(dirname(__FILE__) . '/../db/dbconnect.php');


$question = $_POST["question"];
$correct_choice = $_POST["correctChoice"];

try {

} catch(Error $e) {

}

// <!-- 
//   ・question_idはlastInsertedを使うのかな？
// -->