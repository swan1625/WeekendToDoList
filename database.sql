CREATE TABLE "tasks" (
  "id" serial PRIMARY KEY,
  "task" varchar(255) NOT NULL,
  "status" BOOLEAN default FALSE 
);