const express = require("express");
const router = express.Router();

const filename = "database/database.sqlite";
const sqlite3 = require("sqlite3").verbose();
let db = new sqlite3.Database(filename);
router.post("/answers/", function(req, res) {
    const item = req.body;
    const sql = `INSERT INTO answers (question_id,description,created_date,created_by_id) VALUES
  (${ item.question_id},'${item.description}',DateTime('now'),1)`;

    db.all(sql, [], (err, rows) => {
        if (err) {
            console.log("ERROR fetching from the database:", sql);
            return;
        }
        console.log("Request succeeded, new data fetched", rows);
        res.sendStatus(200);
    });
});
module.exports = router;