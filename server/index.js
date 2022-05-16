const express = require("express");
const app = express();
const cors = require("cors");
// const pool = require("./db");

//Middleware
app.use(cors());
app.use(express.json());

const { Pool, Client } = require("pg");

//Instance pool, specify credentials
const credentials = {
  user: "postgres",
  password: "Database0894",
  host: "localhost",
  port: 5432,
  database: "amesiteToDo",
};

const pool = new Pool(credentials);

//Routes//

//Create a todo
app.post("/todos", async (req, res) => {
  // const { TodoItem } = req.body;

  const result = await pool.query(
    `INSERT INTO "todo_item" ("title", "description", "due_date", "tag_id", "list_id") VALUES ($1, $2, $3, $4, $5) RETURNING todo_id`,
    [req.body.title, req.body.description, req.body.dueDate, 1, 1]
  );
  console.log(result.rows[0].todo_id);
  res.json(result.rows[0].todo_id);
});

//get all todos

app.get("/todos", async (req,res) => {
  try {
    const 
  } catch (error) {
    
  }
})

//get a todo

//update a todo

//delete a todo

app.listen(5000, () => {
  console.log("working, on 5000.");
});
