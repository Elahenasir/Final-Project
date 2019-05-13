const express = require("express");
const router = express.Router();

const filename = "database/database.sqlite";
const sqlite3 = require("sqlite3").verbose();
let db = new sqlite3.Database(filename);
// db.run("PRAGMA foreign_keys = ON");
router.get("/questions", function(req, res) {
    let sql = "select * from questions";
    db.all(sql, [], (err, rows) =>{
        if (err) {
            console.log("ERROR fetching from the database:", err);
            return;
        }
        console.log("Request succeeded, new data fetched", rows);
        res.status(200).json({
            questions: rows
        });
    });
});


// // // (up function is showing all customers)

// router.get("/questions/:id", function(req, res) {
//     let id = req.params.id;
//     let sql = `select * from questions where id = ${id}`;
//     db.all(sql, [], (err, rows) => {
//         if (err) {
//             console.log("ERROR fetching from the database:", err);
//             return;
//         }
//         console.log("Request succeeded, new data fetched", rows);
//         res.status(200).json({
//             questions: rows
//         });
//     });
// });

// router.get("/questions/:surname", function(req, res) {
//     const surname = req.params.surname;
//     const sql = `select * from customers where surname like '%${surname}%'`;
//
//     db.all(sql, [], (err, rows) => {
//         if (err) {
//             console.log("ERROR fetching from the database:", err);
//             return;
//         }
//         console.log("Request succeeded, new data fetched", rows);
//         res.status(200).json({
//             customers: rows
//         });
//     });
// });
//
router.post("/questions/", function(req, res) {
    const item = req.body;

    const sql = `INSERT INTO questions (title) VALUES
  ("${ item.title}")`;

    db.all(sql, [], (err, rows) => {
        if (err) {
            console.log("ERROR fetching from the database:", err);
            return;
        }
        console.log("Request succeeded, new data fetched", rows);
        res.sendStatus(200);
    });
});
//
// router.put("/questions/:id", function(req, res) {
//     let id = req.params.id;
//     let newCustomer=req.body;
//     let sql= `update  customers set email= '${newCustomer.email}' where id= '${id}' `;
//     db.all(sql, [], (err, rows) => {
//         if (err) {
//             console.log("ERROR fetching from the database:", err);
//             return;
//         }
//         console.log("Request succeeded, new data updatet", rows);
//         res.sendStatus(200);
//     });
// });
//
// router.get("/questions/", function(req, res) {
//     const sql = `select * from customers where firstname in ("John" , "Carrie")`  ;
//     db.all(sql, [], (err, rows) => {
//         if (err) {
//             console.log("ERROR fetching from the database:", err);
//             return;
//         }
//         console.log("Request succeeded, new data fetched", rows);
//         res.status(200).json({
//             customers: rows
//         });
//     });
// });
//
// router.delete("/questions/:surname",function(req,res){
//     const surname = req.params.surname;
//     const sql = `delete from customers where surname like '%${surname}%'`;
//     db.all(sql, [], (err, rows) => {
//         if (err) {
//             console.log("ERROR fetching from the database:", err);
//             return;
//         }
//         console.log("Request succeeded, new data fetched", rows);
//         res.sendStatus(200);
//     });
// });
//
// // get '/reservations/:id'
// // TODO: add code here
//
// // delete '/reservations/:id'
// router.delete('/reservations/:id', function(req, res) {
//     const id = req.params.id;
//     const sql = `delete from reservations where id = ${id}`;
//     db.run(sql, (err, rows) => {
//         if (err) {
//             console.log('ERROR fetching from the database:', err);
//             return;
//         }
//         console.log("Successfully removed reservation");
//         res.status(200).json({
//             message: "Successfully removed reservation"
//         });
//     });
// });
//
//
// // homework1
//
//
//
// // homework2
// router.post("/reservations/", function(req, res) {
//     const newreservation = req.body;
//     const sql = `INSERT INTO reservations (customer_id, room_id, check_in_date, check_out_date,room_price) VALUES
//    ("${ newreservation.customer_id}", "${newreservation.room_id}", "${newreservation.check_in_date}",
//     "${ newreservation.check_out_date}" , "${ newreservation.room_price}")`;
//     db.all(sql, [], (err, rows) => {
//         if (err) {
//             console.log("ERROR fetching from the database:", err);
//             return;
//         }
//         console.log("Request succeeded, new data fetched", rows);
//         res.status(200).json({
//             reservations: rows
//         });
//     });
// });
// //  post '/reservations'
// // EXPECTED JSON Object:
// // {
// //   customer_id: 1,
// //   room_id: 1,
// //   check_in_date: '2018-01-20',
// //   check_out_date: '2018-01-22',
// //   room_price: 129.90
// // }
// // TODO: add code here
//
// // homework3
// router.get("/reservations", function(req, res) {
//     var sql = "select * from reservations";
//     db.all(sql, [], (err, rows) => {
//         if (err) {
//             console.log("ERROR fetching from the database:", err);
//             return;
//         }
//         console.log("Request succeeded, new data fetched", rows);
//         res.status(200).json({
//             reservations: rows
//         });
//     });
// });
// //  homework4
// router.get("/reservations/:id", function(req, res) {
//     let id = req.params.id;
//     let sql = `select * from reservations where id = ${id}`;
//     db.all(sql, [], (err, rows) => {
//         if (err) {
//             console.log("ERROR fetching from the database:", err);
//             return;
//         }
//         console.log("Request succeeded, new data fetched", rows);
//         res.status(200).json({
//             reservations: rows
//         });
//     });
// });
//
// //  homework5
// router.get("/reservations/starting-on/:startDate", function(req, res) {
//     const startDate = req.params.startDate;
//     const sql = `SELECT * FROM reservations WHERE check_in_date = '${startDate}'`;
//     db.all(sql, [], (err, rows) => {
//         if (err) {
//             console.log("ERROR fetching from the database:", err);
//             return;
//         }
//         console.log("Request succeeded, new data fetched", rows);
//         res.status(200).json({
//             reservations: rows
//         });
//     });
// });
// //  and in postman (http://localhost:8080/api/reservations/starting-on/2018-09-24)
//
// // homework6
// router.get("/reservations/active-on/:date", function(req, res) {
//     const date = req.params.date;
//     const sql = `select * from reservations where check_in_date <= '${date}' and check_out_date >= '${date}'`;
//     db.all(sql, [], (err, rows) => {
//         if (err) {
//             console.log("ERROR fetching from the database:", err);
//             return;
//         }
//         console.log("Request succeeded, new data fetched", rows);
//         res.status(200).json({
//             reservations: rows
//         });
//     });
// });
//
// // get `/detailed-invoices'
// // TODO: add code here
//
// // get `/reservations/details-between/:from_day/:to_day`
// // TODO: add code here

module.exports = router;