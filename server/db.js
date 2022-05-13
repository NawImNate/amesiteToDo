const { Pool } = require("pg");

//Instance pool, specify credentials
const pool = new Pool({
  user: "postgres",
  password: "Database0894",
  host: "localhost",
  port: 5432,
  database: "amesiteToDo",
});

module.exports = pool;
