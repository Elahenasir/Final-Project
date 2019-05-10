CREATE TABLE IF NOT EXISTS customers (
  ID INTEGER PRIMARY KEY AUTOINCREMENT,
  title TEXT(16),
  first_name TEXT(64) NOT NULL,
  surname TEXT (64) NOT NULL,
  email TEXT (64)
);
-- INSERT INTO customers(title, first_name, surname, email) VALUES ('Mr','John','Dove','john.doe@domain.com');
-- INSERT INTO customers(title,first_name,surname,email) VALUES( 'Miss', 'Ela', 'Nasir', 'nasirelahe@gmail.com');
-- insert into customers(title, first_name,surname,EMAIl) values ( 'Mr', 'Faz', 'Aghaii', 'rezaaghaii01@gmail.com');
-- insert into customers(title, first_name,surname,EMAIL) values ('Mr','Reza','Aghai','rezaaghai@gmail.com');
-- insert into customers(title, first_name,surname,EMAIL) values ( 'Mr','Fardam','Aghaii','Fardamaghaii@gmail.com');
-- customers
    -- create table invoices(
    -- id                  integer primary key autoincrement,
    -- reservation_id      integer,
    -- total               number,
    -- surcharges          number,
    -- invoice_date_time   datetime not null,
    -- paid                boolean default 0,
    -- foreign key(reservation_id)     references reservations(id)
-- );
-- insert into invoices(reservation_id,total,surcharges,invoice_date_time,paid) values ('11','1300.35','100.25','2017-01-01','1');
-- insert into invoices( reservation_id,total,surcharges,invoice_date_time,paid) values('12','1000.50', '80.25','2017-02-01','0');
-- insert into invoices(reservation_id,total,surcharges,invoice_date_time,paid) values('123','1000.50', '80.25','2017-02-01','0');
-- insert into invoices(reservation_id,total,surcharges,invoice_date_time,paid) values('22','1000.50', '80.25','2017-02-01','0');
-- insert into invoices(reservation_id,total,surcharges,invoice_date_time,paid) values('223','1800.50','810.25','2017-02-13','1');
-- insert into invoices(reservation_id,total,surcharges,invoice_date_time,paid ) values('234','1880.50','540.25','2017-07-06','1');
-- invoices
-- create table reservations (
--     id                    integer primary key autoincrement,
--     customer_id           integer,
--     room_id               integer,
--     check_in_date         datetime not null,
--     check_out_date        datetime,
--     room_price_per_night  real,
--     foreign key(customer_id)     references customres(id),
--      foreign key(room_id)        references rooms(id)
);
-- insert into reservations(customer_id,room_id,check_in_date,check_out_date,room_price_per_night) values('1','3','2017-01-01','2017-01-4','85') 
-- insert into reservations(customer_id,room_id,check_in_date,check_out_date,room_price_per_night) values('2','5','2017-01-03','2017-01-4','150') 
-- insert into reservations(customer_id,room_id,check_in_date,check_out_date,room_price_per_night) values('3','23','2017-01-08','2017-01-15','185') 
-- insert into reservations(customer_id,room_id,check_in_date,check_out_date,room_price_per_night) values('4','33','2017-01-09','2017-01-14','120') 
-- insert into reservations(customer_id,room_id,check_in_date,check_out_date,room_price_per_night) values('5','35','2017-01-21','2017-01-24','50') 

-- reservations
-- create table rooms(
--     id                  integer primary key autoincrement,
--     room_type_id       integer ,
--     sea_view             boolean default 0,
--    foreign key(room_type_id)        references room_types(id)
--     );
--     insert into rooms(room_type_id,sea_view) values('1','0');
--     insert into rooms(room_type_id,sea_view) values('2','1');
--     insert into rooms(room_type_id,sea_view) values('1','1');
--     insert into rooms(room_type_id,sea_view) values('3','0');
--     insert into rooms(room_type_id,sea_view) values('2','0');

    -- rooms
-- create table room-types(
-- id                     integer primary key autoincrement,
-- type_name              varchar,
-- original_price         number,
-- current_price          number
  --  );
  --  insert into room-types(type_name,original_price,current_price)values ('single','85','70');
  --  insert into room-types(type_name,original_price,current_price)values ('double','130','110');
  --  insert into room-types(type_name,original_price,current_price)values ('triple','180','150');
  --  insert into room-types(type_name,original_price,current_price)values ('single','85','70');
  --  insert into room-types(type_name,original_price,current_price)values ('single','85','70');
  -- --  room_type
-- create table reviews(
--   id       integer primary key autoincrement,
--   customer_id   integer,
--   room_type_id   integer,
--   rating             number,
--   comment             text,
--   review_date    datetime,
--   foreign key(customer_id)    references customers(id),
--    foreign key(room_type_id)   references  room-types(id)
-- );
