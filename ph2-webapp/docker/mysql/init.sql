-- データベースを作成
DROP DATABASE IF EXISTS webapp;
CREATE DATABASE webapp;
use webapp;


-- 学習言語データ
DROP TABLE IF EXISTS studying_languages;
CREATE TABLE studying_languages (
  id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
  language VARCHAR(255) NOT NULL
  ) CHARSET=utf8;

INSERT INTO studying_languages(language) VALUES 
("HTML"),
("CSS"),
("JavaScript"),
("PHP"),
("Laravel"),
("SQL"),
("SHELL"),
("情報システム基礎知識（その他）")

-- 学習コンテンツデータ
DROP TABLE IF EXISTS studying_contents;
CREATE TABLE studying_contents (
  id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
  content VARCHAR(255) NOT NULL
  ) CHARSET=utf8;

INSERT INTO studying_contents(content) VALUES 
("N予備校"),
("ドットインストール"),
("課題")

-- 日付・学習時間データ
DROP TABLE IF EXISTS records;
CREATE TABLE records (
  id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
  record_at DATETIME NOT NULL,
  language_id INT NOT NULL,
  content_id INT NOT NULL,
  FOREIGN KEY (language_id) REFERENCES studying_languages (id), 
  FOREIGN KEY (content_id) REFERENCES studying_contents (id)
)

INSERT INTO records(record_at, language_id, content_id) VALUES
('2022-12-1', 1, 1),
('2022-12-2', 2, 2),
('2022-12-3', 3, 3),
('2022-12-4', 4, 3),
('2022-12-5', 5, 2),
('2022-12-6', 1, 1),
('2022-12-7', 7, 2),
('2022-12-8', 3, 1),
('2022-12-9', 4, 3),
('2022-12-10', 5, 2),
('2022-12-11', 1, 1),
('2022-12-12', 6, 2),
('2022-12-13', 3, 3),
('2022-12-14', 6, 3),
('2022-12-15', 7, 2),
('2022-12-16', 1, 1),
('2022-12-17', 2, 2),
('2022-12-18', 8, 1),
('2022-12-19', 4, 3),
('2022-12-20', 5, 2),
('2022-12-21', 1, 1),
('2022-12-22', 2, 2),
('2022-12-23', 8, 3),
('2022-12-24', 4, 3),
('2022-12-25', 7, 2),
('2022-12-26', 1, 1),
('2022-12-27', 2, 2),
('2022-12-28', 3, 1),
('2022-12-29', 8, 3),
('2022-12-30', 5, 2),
('2022-12-31', 6, 2)


