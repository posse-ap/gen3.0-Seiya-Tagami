-- データベース作成
DROP DATABASE IF EXISTS quiz;
CREATE DATABASE quiz;
use quiz;

-- questionsテーブル作成 
DROP TABLE IF EXISTS questions;
CREATE TABLE questions (
  question_id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
  question VARCHAR(255) NOT NULL,
  img VARCHAR(255) NOT NULL
  );

INSERT INTO questions(question, img) VALUES 
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
DROP TABLE IF EXISTS choices;
CREATE TABLE choices (
  question_id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
  choice0 VARCHAR(255) NOT NULL,
  choice1 VARCHAR(255) NOT NULL,
  choice2 VARCHAR(255) NOT NULL
  );

INSERT INTO choices(choice0, choice1, choice2) VALUES 
  (
  '約28万人',
  '約79万人',
  '約183万人'
  ),
  (
  'INTECH',
  'BIZZTECH',
  'X-TECH'
  ),
  (
  'Internet of Things',
  'Integrate into Technology',
  'Information  on Tool'
  ),
  (
  'Society 5.0',
  'CyPhy',
  'SDGs'
  ),
  (
  'Web3.0',
  'NFT',
  'メタバース'
  ),
  (
  '約2倍',
  '約5倍',
  '約11倍'
  )
  
-- quotesテーブル作成
DROP TABLE IF EXISTS quotes;
CREATE TABLE quotes (
  id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
  question_id INT NOT NULL,
  quote VARCHAR(255) NOT NULL
  );

INSERT INTO quotes(question_id, quote) VALUES 
  (1, '経済産業省 2019年3月 － IT 人材需給に関する調査'),
  (4, 'Society5.0 - 科学技術政策 - 内閣府'),
  (6, 'Accenture Technology Vision 2021')
