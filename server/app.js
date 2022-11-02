const express = require('express');
const app = express();
const port = 4000;

// Configure access
const cors = require('cors');
app.use(cors({
  origin: ['http://localhost:3000']
}));

// Import Endpoints
const questionsRouter = require("./router/questions");

app.use("/api", questionsRouter);

app.get('/', (req, res) => {
  res.send("I am running! I'm gonna talk to a database!")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})