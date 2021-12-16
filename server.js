//dependencies required
const mysql = require("mysql");
const inquirer = require("inquirer");
require("console.table");
//const sql = require("./sql");

//mysql connection
const connection = mysql.createConnection({
    host: 'localhost',

    // Your port; if not 3306
    port: 3306,

    // Your username
    user: 'root',

    // Your password
    password: 'PlacePassWordHere',
    database: 'employeesDB'
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
    console.log(`
    ▀▄▀▄▀▄   𝓔𝓶𝓹𝓵𝓸𝔂𝓮𝓮 𝓜𝓪𝓷𝓪𝓰𝓮𝓻   ▄▀▄▀▄▀
    `)
    // runs the app
    firstPrompt();
});
