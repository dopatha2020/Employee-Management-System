const util = require("util");
const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Fastcars20$",
  database: "employee_db"
});

connection.connect();
connection.query = util.promisify(connection.query);

module.exports = connection;