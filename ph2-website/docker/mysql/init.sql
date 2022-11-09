DROP DATABASE IF EXISTS posse;
CREATE DATABASE posse;
use posse;

DROP TABLE IF EXISTS questions;
CREATE TABLE questions (
  id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
  question VARCHAR(255) NOT NULL,
  image VARCHAR(255) NOT NULL
  ) CHARSET=utf8;

INSERT INTO questions(question, image) VALUES 
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

DROP TABLE IF EXISTS choices;
CREATE TABLE choices (
  id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
  question_id INT NOT NULL,
  name VARCHAR(255) NOT NULL,
  valid boolean
  ) CHARSET=utf8;

INSERT INTO choices(question_id, name, valid) VALUES 
  (1, '約28万人', false),
  (1, '約79万人', true),
  (1, '約183万人', false),
  (2, 'INTECH', false),
  (2, 'BIZZTECH', false),
  (2, 'X-TECH', true),
  (3, 'Internet of Things', true),
  (3, 'Integrate into Technology', false),
  (3, 'Information  on Tool', false),
  (4, 'Society 5.0', true),
  (4, 'CyPhy', false),
  (4, 'SDGs', false),
  (5, 'Web3.0', true),
  (5, 'NFT', false),
  (5, 'メタバース', false),
  (6, '約2倍', false),
  (6, '約5倍', true),
  (6, '約11倍', false);
