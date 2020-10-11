const mysql = require("mysql");
// const { user, password } = require("./config");

if (process.env.JAWSDB_URL) {
  const connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
 connection = mysql.createConnection({
  host: "localhost",
  // Your port if not 3306
  port: 3306,
  // Your username
  user: "root",
  // Your password
  password:"DUmn612Hcd",
  database: "burgers_db",
});
connection.connect(function (err) {
  if (err) throw err;
  //   console.log("connected as id " + connection.threadId + "\n");
});
}

module.exports = connection;