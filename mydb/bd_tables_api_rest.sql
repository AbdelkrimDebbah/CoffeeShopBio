-- SQLBook: Code
DROP DATABASE IF EXISTS api_rest;
CREATE DATABASE api_rest;
USE api_rest;
CREATE TABLE
IF NOT EXISTS users(
id INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
username VARCHAR(255) NOT NULL,
password VARCHAR(255) NOT NULL,
role VARCHAR(255) NOT NULL,
email VARCHAR(255) NOT NULL,
adresse VARCHAR(255) NOT NULL
);
CREATE TABLE
IF NOT EXISTS products(
id INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
name VARCHAR(255) NOT NULL,
price INT NOT NULL,
user_id INT NOT NULL,
link VARCHAR(500)
);
