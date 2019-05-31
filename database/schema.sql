

CREATE TABLE  users (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  email TEXT (64),
  question_id integer not null,
  answer_id integer not null,
  foreign key(question_id) references questions(id),
  foreign key(answer_id) references answers(id)
);

INSERT INTO users 
(email,question_id,answer_id)
VALUES 
( 'nasirelahe@gmail.com',1,1);

CREATE TABLE IF NOT EXISTS questions (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  title varchar,
  description text,
  created_date  datetime,
  created_by_id integer ,
   foreign key( created_by_id) references users(id)
  );
INSERT INTO questions
(title,description,created_date,created_by_id)
VALUES
('What is the first step of Create a React app ',"Get Started Immediately. You don't need to install or configure tools like Webpack or Babel.",'2019-01-01 10:00:00',1);
INSERT INTO questions
(title,description,created_date,created_by_id)
VALUES
('How I can create a server in Node.js '," Create a project folder. First, create a folder using the following command",'2019-02-02 23:15:32',1);
create table answers (
  id integer primary key AUTOINCREMENT,
  question_id integer not null,
  description text,
  created_date datetime,
    created_by_id integer ,
   foreign key( created_by_id) references users(id),
  foreign key (question_id) references questions(id)
);

INSERT INTO answers 
(description, created_date, question_id,created_by_id)
VALUES 
('the first step is npm install', '2018-12-07', 1,1);
INSERT INTO answers (question_id,description,created_date,created_by_id) VALUES
  (1,'234234','2018-02-02',1)

