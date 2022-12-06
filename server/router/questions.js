const express = require("express");
const router = express.Router();
const sqlite3 = require("sqlite3").verbose();
const fs = require("fs");

// Configure logger
const log = require("./logger");

const DATABASE_ROUTE = "./data/source.db";

fs.stat(DATABASE_ROUTE, (err, stats) => {
  //Make sure the database exists
  if (err) {
    log.fatal(err, "Database file does not exist");
    return;
  } else {
    log.info(stats)
  }
  const db = new sqlite3.Database(
    DATABASE_ROUTE,
    sqlite3.OPEN_READWRITE,
    (err) => {
      if (err) {
        log.fatal(err, "Couldn't connect to the database");
        console.error(err.message);
      }
      log.info("Successfully connected to the database")
    }
  );
  router.get("/question1", (req, res) => {
    log.info("Q1 route has been called")
    db.all("SELECT Salaries, Department FROM Employee_Compensation_SF", (err, rows) => {
      if (err) {
        log.error(err, "An error occurred while running a query")
        console.error(err.message);
      }
      let n = rows.length;
      log.info(`Query contains ${n} rows of data`)
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
      log.info(`salaries DTO: ${salaries}; departments DTO: ${departments}`);
      res.send({salaries, departments});
    });
  });

  router.get("/question2", (req, res) => {
    log.info("Q2 route has been called")
    db.all("SELECT TotalBenefits, TotalCompensation, Department FROM Employee_Compensation_SF", (err, rows) => {
      if (err) {
        log.error(err, "An error occurred while running a query")
        console.error(err.message);
      }
      let n = rows.length;
      log.info(`Query contains ${n} rows of data`)
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
      log.info(`labels DTO: ${labels}; data DTO: ${data}`);
      res.send({labels, data});
    });
  });

  router.get("/question3", (req, res) => {
    log.info("Q3 route has been called")
    db.all("SELECT Retirement, TotalCompensation FROM Employee_Compensation_SF WHERE JobFamily = 'Professional Engineering' OR JobFamily = 'Sub-Professional Engineering' ORDER BY TotalCompensation", (err, rows) => {
      if (err) {
        log.error(err, "An error occurred while running a query")
        console.error(err.message);
      }
      let n = Math.round(rows.length/10)-1;
      log.info(`Query contains ${n} rows of data`)
      let datapoints = []

      for (let i = 0; i < n; i++){
        let totalComp = Math.round(rows[i*10].TotalCompensation)
        let retirement = Math.round(rows[i*10].Retirement)
        datapoints.push({x: totalComp, y: retirement});
      }

      res.send({datapoints});
    });
  });
});
module.exports = router;
