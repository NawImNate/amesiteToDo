const express = require("express");
const app = express();
const cors = require("cors");
const Pool = require("./db");

//Middleware
app.use(cors());
app.use(express.json());

app.listen(5000, () => {
  console.log("working, on 5000.");
});
