-- データベース作成
DROP DATABASE IF EXISTS quiz;
CREATE DATABASE quiz;
use quiz;

-- big_questionsテーブル作成 
DROP TABLE IF EXISTS big_questions;
CREATE TABLE big_questions (
  id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
  question VARCHAR(255) NOT NULL,
  img VARCHAR(255) NOT NULL
  );

INSERT INTO big_questions(question, img) VALUES 
  (
  '日本のIT人材が2030年には最大どれくらい不足すると言われているでしょうか?',
  'img-quiz01.png'
  ),
  (
  '既存業界のビジネスと、先進的なテクノロジーを結びつけて生まれた、新しいビジネスのことをなんと言うでしょう？',
  'img-quiz02.png'
  ),
  (
  'IoTとは何の略でしょう？',
  'img-quiz03.png'
  ),
  (
  '日本が目指すサイバー空間とフィジカル空間を高度に融合させたシステムによって開かれる未来社会のことをなんと言うでしょうか？',
  'img-quiz04.png'
  ),
  (
  'イギリスのコンピューター科学者であるギャビン・ウッド氏が提唱した、ブロックチェーン技術を活用した「次世代分散型インターネット」のことをなんと言うでしょう？',
  'img-quiz05.png'
  ),
  (
  '先進テクノロジー活用企業と出遅れた企業の収益性の差はどれくらいあると言われているでしょうか？',
  'img-quiz06.png'
  );

-- choicesテーブル作成

-- noteテーブル作成