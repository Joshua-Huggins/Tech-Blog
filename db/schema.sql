DROP DATABASE IF EXISTS tech_blogdb;

CREATE DATABASE tech_blogdb;

\c tech_blogdb;

CREATE TABLE user (username VARCHAR(30), email VARCHAR(30), password VARCHAR(30));

INSERT INTO user (username, email, password) VALUES (Josh, joshua.huggins@sbcglobal.net, blahblahblah);