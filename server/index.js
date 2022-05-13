const express = require("express");
const app = express();
const cors = require("cors");
const Pool = require("./db");

//Middleware
app.use(cors());
app.use(express.json());

//Routes//

//Create a todo

app.post("/todos", async (req, res) => {
  try {
    console.log(req.body);
  } catch (err) {
    console.log(err.message);
  }
});

//get all todos

//get a todo

//update a todo

//delete a todo

app.listen(5000, () => {
  console.log("working, on 5000.");
});
