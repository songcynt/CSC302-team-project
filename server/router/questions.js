const express = require("express");
const router = express.Router();
const sqlite3 = require("sqlite3").verbose();
const fs = require("fs");
fs.stat("../data/source.db", (err, stats) => {
  //Make sure the database exists
  if (err) {
    console.log(err);
    console.log("Database file does not exist");
    return;
  } else {
    console.log(stats);
  }
  const db = new sqlite3.Database(
    "../data/source.db",
    sqlite3.OPEN_READWRITE,
    (err) => {
      if (err) {
        console.error(err.message);
      }
      console.log("Connected to the database.");
    }
  );
  router.get("/question1", (req, res) => {
    db.all("SELECT * FROM Employee_Compensation_SF", (err, rows) => {
      if (err) {
        console.error(err.message);
      }
      res.send(rows);
    });
  });
});
module.exports = router;
