DROP DATABASE IF EXISTS namesdb;
CREATE DATABASE namesdb;

USE namesdb;

CREATE TABLE names
(
	id int NOT NULL AUTO_INCREMENT,
	name varchar(255) NOT NULL,
	year INT,
	gender VARCHAR(1),
	count int,
	PRIMARY KEY (id)
);
