const express = require('express');
const app = express();
const port = 4000;
const test = require("./router/test");

app.use("/api", test);

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})