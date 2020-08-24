DROP database if exists burgers_db;

CREATE database burgers_db;

USE burgers_db;

CREATE TABLE burgers (
id INT NOT NULL auto_increment,
burger_name varchar(250) NOT NULL,
devoured BOOLEAN,
PRIMARY KEY(id)
)