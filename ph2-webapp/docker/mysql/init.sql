-- データベースを作成
DROP DATABASE IF EXISTS webapp;
CREATE DATABASE webapp;
use webapp;


-- 学習言語データ
DROP TABLE IF EXISTS studying_languages;
CREATE TABLE studying_languages (
  id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
  language VARCHAR(255) NOT NULL,
  chart_bgcolor VARCHAR(255) NOT NULL
  ) CHARSET=utf8mb4;

INSERT INTO studying_languages(language, chart_bgcolor) VALUES 
("HTML","#0345ec"),
("CSS","#0f71bd"),
("JavaScript", "#20bdde"),
("PHP", "#3ccefe"),
("Laravel", "#b29ef3"),
("SQL", "#6d46ec"),
("SHELL", "#4a17ef"),
("情報システム基礎知識（その他）", "#3105c0")

-- 学習コンテンツデータ
DROP TABLE IF EXISTS studying_contents;
CREATE TABLE studying_contents (
  id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
  content VARCHAR(255) NOT NULL,
  chart_bgcolor VARCHAR(255) NOT NULL
  ) CHARSET=utf8mb4;

INSERT INTO studying_contents(content, chart_bgcolor) VALUES 
("N予備校","#0345ec"),
("ドットインストール","#0f71bd"),
("POSSE課題", "#20bdde")

-- 日付・学習時間データ
DROP TABLE IF EXISTS records;
CREATE TABLE records (
  id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
  record_at DATETIME,
  time INT NOT NULL,
  language_id INT NOT NULL,
  content_id INT NOT NULL,
  FOREIGN KEY (language_id) REFERENCES studying_languages (id), 
  FOREIGN KEY (content_id) REFERENCES studying_contents (id)
) CHARSET=utf8mb4;

INSERT INTO records(record_at, time, language_id, content_id) VALUES
('2022-11-01', 5, 1, 1),
('2022-11-02', 8, 2, 2),
('2022-11-03', 4, 3, 3),
('2022-11-04', 3, 1, 3),
('2022-11-05', 8, 5, 3),
('2022-11-06', 2, 2, 3),
('2022-11-07', 9, 1, 3),
('2022-11-08', 8, 3, 3),
('2022-11-09', 1, 4, 3),
('2022-11-10', 4, 5, 2),
('2022-11-11', 3, 1, 1),
('2022-11-12', 7, 6, 2),
('2022-11-13', 8, 1, 3),
('2022-11-14', 2, 6, 3),
('2022-11-15', 3, 7, 3),
('2022-11-16', 4, 2, 1),
('2022-11-17', 8, 4, 2),
('2022-11-18', 5, 4, 1),
('2022-11-19', 8, 4, 3),
('2022-11-20', 5, 5, 2),
('2022-11-21', 7, 1, 1),
('2022-11-22', 3, 2, 2),
('2022-11-23', 3, 8, 3),
('2022-11-24', 7, 5, 3),
('2022-11-25', 9, 7, 2),
('2022-11-26', 5, 1, 1),
('2022-11-27', 3, 5, 2),
('2022-11-28', 3, 3, 1),
('2022-11-29', 1, 8, 3),
('2022-11-30', 3, 5, 2),
('2022-12-01', 5, 1, 1),
('2022-12-02', 3, 2, 2),
('2022-12-03', 4, 3, 3),
('2022-12-04', 3, 4, 3),
('2022-12-05', 1, 5, 2),
('2022-12-06', 2, 1, 1),
('2022-12-07', 9, 7, 2),
('2022-12-08', 2, 3, 1),
('2022-12-09', 1, 4, 3),
('2022-12-10', 4, 5, 2),
('2022-12-11', 3, 1, 1),
('2022-12-12', 2, 6, 2),
('2022-12-13', 8, 3, 3),
('2022-12-14', 2, 6, 3),
('2022-12-15', 3, 7, 2),
('2022-12-16', 4, 1, 1),
('2022-12-17', 3, 2, 2),
('2022-12-18', 5, 8, 1),
('2022-12-19', 8, 4, 3),
('2022-12-20', 3, 5, 2),
('2022-12-21', 7, 1, 1),
('2022-12-22', 3, 2, 2),
('2022-12-23', 3, 8, 3),
('2022-12-24', 7, 4, 3),
('2022-12-25', 9, 7, 2),
('2022-12-26', 5, 1, 1),
('2022-12-27', 3, 2, 2),
('2022-12-28', 3, 3, 1),
('2022-12-29', 1, 8, 3),
('2022-12-30', 3, 5, 2),
('2022-12-31', 3, 6, 2)

