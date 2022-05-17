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

app.get("/todos/:id", async (req, res) => {
  try {
    const { id } = req.params;
    console.log("test");
    const result = await pool.query(
      `SELECT * FROM todo_item WHERE todo_id = $1`,
      [id]
    );
    console.log(result.rows);
    res.json(result.rows);
  } catch (err) {
    console.log(err.message);
  }
});

//Creating/Logging in a user
// crypt($1, gen_salt('bf'))
app.post("/users", async (req, res) => {
  //create a function that retrieves if there is an email.
  const getCryptoPw = await pool.query(
    `select password from users where email = $1`,
    [req.body.login.email]
  );
  //CL if there is a result
  console.log(getCryptoPw.rows);
  // const existingUser = await pool.query(
  //   // edit this select statement after using state for overall login, email and password input boxes.
  //   `select id from users where password = crypt($1, gen_salt('bf'))`,
  //   [req.body.login]
  // );
  // get hashed pw from the db table

  //if email is not found in users table then I need to create a new user.
  if (getCryptoPw.rows == 0) {
    const newUser = await pool.query(
      `INSERT INTO "users" ("password", "email") VALUES ((crypt($1, gen_salt('bf'))), $2)
        RETURNING id`,
      [req.body.login.password, req.body.login.email]
    );
    console.log(newUser.rows);
  } else {
  }

  // const result = await pool.query(
  //   `INSERT INTO "users" ("password") VALUES (crypt($1, gen_salt('bf')))
  //    RETURNING id`,
  //   [req.body.Password]
  // );
  // console.log(result);
  // console.log(req.body.Password);
  // console.log(result.rows[0].todo_id);
  // res.json(result.rows[0].id);
});

//get a todo

//update a todo

//delete a todo

app.listen(5000, () => {
  console.log("working, on 5000.");
});
