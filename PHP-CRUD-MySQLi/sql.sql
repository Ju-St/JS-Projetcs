GRANT CREATE, SELECT, INSERT, UPDATE, DELETE ON *.* TO 'crud'@'localhost' IDENTIFIED BY 'password';

CREATE DATABASE crud;

USE crud;

CREATE TABLE data (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(100),
  location VARCHAR(100),
  PRIMARY KEY (id)
  );
