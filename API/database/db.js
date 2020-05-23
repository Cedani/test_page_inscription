const mysql = require('mysql');

const con = mysql.createConnection({
    host: 'yourhost',
    user: 'youruser',
    password: 'yourpassword'
})

con.connect((err) => {
    if (err) {
        console.log("database not loaded");
        return;
    }
    console.log("succesfully connected to database");
})

const create_database = `create database IF NOT exists PERSON character set utf8mb4 collate utf8mb4_bin;`;

const use_database = `USE PERSON;`;

con.query(create_database, (err) => {
    if (err) throw err;
    console.log("database created");
})

con.query(use_database, (err) => {
    if (err) throw err;
    console.log("PERSON database selected");
})

const create_table = ` CREATE TABLE IF NOT EXISTS user_info (
	id int NOT NULL auto_increment PRIMARY KEY,
    LastName varchar(100) NOT NULL,
    FirtsName varchar(100) NOT NULL,
    Email varchar(100) NOT NULL,
    passwd varchar(100) NOT NULL
) ENGINE=InnoDB;`;


con.query(create_table, (err) => {
    if (err) throw err;
    console.log("table created");
})

module.exports = {
    con
}