// db.js
const mysql = require("mysql2");

const connection = mysql.createConnection({
    host: process.env.DBHOST,
    user: process.env.DBUSER,
    password: process.env.DBPASSWORD,
    database: process.env.DBDATABASE,
});

connection.connect((err) => {
    if (err) {
        console.error("Fejl ved forbindelse til databasen:", err.message);
        process.exit(1);
    } else {
        console.log("Forbundet til MySQL databasen!");
    }
});

module.exports = connection;
