const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",
  password: "Database0894",
  host: "localhost",
  port: 5432,
  database: "amesiteToDo",
});

module.exports = pool;
