DROP IF EXISTS DATABASE inventario;

CREATE DATABASE inventario CHARACTER SET utf8 COLLATE utf8_general_ci;

USE inventario;

CREATE TABLE produtos (
  id INT NOT NULL AUTO_INCREMENT,
  nome VARCHAR(45) NOT NULL,
  descricao VARCHAR(255) NOT NULL,
  valor DECIMAL(7,2) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE usuario (
  id INT NOT NULL AUTO_INCREMENT,
  username VARCHAR(45) NOT NULL,
  password VARCHAR(45) NOT NULL,
  PRIMARY KEY (id)
);

INSERT INTO usuario (username, password) VALUES ('admin', 'admin');


SHOW TABLES;

DESCRIBE produtos;

DESCRIBE usuario;