const express = require("express");
const router = express.Router();
const sqlite3 = require("sqlite3").verbose();
const fs = require("fs");

const DATABASE_ROUTE = "../data/source.db";

fs.stat(DATABASE_ROUTE, (err, stats) => {
  //Make sure the database exists
  if (err) {
    console.log(err);
    console.log("Database file does not exist");
    return;
  } else {
    console.log(stats);
  }
  const db = new sqlite3.Database(
    DATABASE_ROUTE,
    sqlite3.OPEN_READWRITE,
    (err) => {
      if (err) {
        console.error(err.message);
      }
      console.log("Connected to the database.");
    }
  );
  router.get("/question1", (req, res) => {
    db.all("SELECT Salaries, Department FROM Employee_Compensation_SF", (err, rows) => {
      if (err) {
        console.error(err.message);
      }
      let n = rows.length;
      let info = {};
      for(let i = 0; i < n; i++){
        if(rows[i].Department in info){
          info[rows[i].Department].push(rows[i].Salaries);
        }else{
          info[rows[i].Department] = [rows[i].Salaries];
        }
      }
      let salaries = [];
      let departments = [];
      for(let key in info){
        salaries.push((info[key].reduce((a, b) => a + b, 0) / info[key].length).toFixed(2));
        departments.push(key);
      }
      res.send({salaries, departments});
    });
  });

  router.get("/question2", (req, res) => {
    db.all("SELECT TotalBenefits, TotalCompensation, Department FROM Employee_Compensation_SF", (err, rows) => {
      if (err) {
        console.error(err.message);
      }
      let n = rows.length;
      let benefits = {};
      let compenstations = {};
      for(let i = 0; i < n; i++){
        if(rows[i].Department in benefits && rows[i].Department in compenstations){
          benefits[rows[i].Department].push(rows[i].TotalBenefits);
          compenstations[rows[i].Department].push(rows[i].TotalCompensation);
        }else{
          benefits[rows[i].Department] = [rows[i].TotalBenefits];
          compenstations[rows[i].Department] = [rows[i].TotalCompensation];
        }
      }
      let labels = [];
      let benefit = [];
      let compensation = [];
      for(let key in benefits){
        benefit.push((benefits[key].reduce((a, b) => a + b, 0) / benefits[key].length).toFixed(2));
        compensation.push((compenstations[key].reduce((a, b) => a + b, 0) / compenstations[key].length).toFixed(2));
        labels.push(key);
      }
      let data = [];
      for(let i = 0; i < benefit.length; i++){
        data[i] = benefit[i]/compensation[i]
      }
      res.send({labels, data});
    });
  });
});
module.exports = router;
