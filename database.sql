CREATE DATABASE "todo_list";

CREATE TABLE "todo_list" (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR (100) NOT NULL,
    "is_complete" BOOLEAN DEFAULT FALSE
);

INSERT INTO "todo_list"
  ("name", "is_complete")
  VALUES 
  ('trash', FALSE),
  ('sleep', FALSE),
  ('nap', FALSE);
