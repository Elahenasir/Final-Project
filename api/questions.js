const express = require("express");
const router = express.Router();

const filename = "database/database.sqlite";
const sqlite3 = require("sqlite3").verbose();
let db = new sqlite3.Database(filename);

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



router.get("/questions/:id", function(req, res) {
    let id = req.params.id;
    let sql = `select q.*,u.email from questions q,users u where q.id = ${id} and u.id = q.created_by_id`;
    
    db.all(sql, [], (err, rows) => {
        if (err) {
            console.log("ERROR fetching from the database:", err);
            return;
        }
        console.log("Request succeeded, new data fetched", rows);
        let answersSql = `select a.*,u.email from answers a,users u where a.question_id = ${rows[0].id} and u.id = a.created_by_id`
        db.all(answersSql, [], (err2, answers) => {
            if (err2) {
                console.log("ERROR fetching from the database:", err2);
                return;
            }
            res.status(200).json({
                questions: rows,
                answers: answers
            }); 
        });
    });
});


router.post("/questions/", function(req, res) {
    const item = req.body;

    const sql = `INSERT INTO questions (title,description,created_date,created_by_id) VALUES
  ('${ item.title}','${item.description}',DateTime('now'),1)`;

    db.all(sql, [], (err, rows) => {
        if (err) {
            console.log("ERROR fetching from the database:", err);
            return;
        }
        console.log("Request succeeded, new data fetched", rows);
        res.sendStatus(200);
    });
});


module.exports = router;