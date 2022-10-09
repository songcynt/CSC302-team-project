const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.send("hi");
});

module.exports = router;

test('this is sample test', () => {
   console.log("I am running lots of tests!"); 
});