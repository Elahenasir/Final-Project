
CREATE TABLE IF NOT EXISTS questions (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  title varchar,
  question_describe text,
  created_by_date  datetime,
  created_by_id integer ,
   foreign key( created_by_id) references users(id)
  );
INSERT INTO questions
(title,created_by_id)
VALUES
('Create a React app ',1);
INSERT INTO questions
(title,created_by_id)
VALUES
(' JavaScript arrays',1);


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

create table answers (
  id integer primary key AUTOINCREMENT,
  question_id integer not null,
  title text,
  created_by_date datetime,
  foreign key (question_id) references questions(id)
);

INSERT INTO answers 
(title, created_by_date, question_id)
VALUES 
('the first step is npm install', '2018-12-07', 1);
