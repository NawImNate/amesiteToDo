CREATE DATABASE amesiteToDo;

CREATE TABLE todo_item (
    todo_id SERIAL NOT NULL PRIMARY KEY,
    title varchar(255), 
    description varchar(255),
    due_date date,
    tag_id INT NOT NULL,
    list_id INT NOT NULL 
);

CREATE EXTENSION pgcrypto;

CREATE TABLE users (
    id serial PRIMARY KEY, 
    password TEXT NOT NULL
    );

ALTER TABLE users (ADD COLUMN email TEXT); 
