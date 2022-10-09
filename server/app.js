const express = require('express');
const app = express();
const port = 4000;
const nothing = require("./router/nothing");

app.use("/api", nothing);

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})