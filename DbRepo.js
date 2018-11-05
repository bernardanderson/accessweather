var fs = require("fs");
var sqlite3 = require('sqlite3').verbose();

const createDb = `CREATE TABLE AccuriteAccessData (id INTEGER PRIMARY KEY, barometer NUMERIC NOT NULL, humidity NUMERIC NOT NULL, tempf NUMERIC NOT NULL,
    windspeed NUMERIC NOT NULL, winddir NUMERIC NOT NULL, windgust NUMERIC NOT NULL, windgustdir NUMERIC NOT NULL, dewpoint NUMERIC NOT NULL,
    dailyrain NUMERIC NOT NULL, totalrain NUMERIC NOT NULL);`

let db = new sqlite3.Database("./accessweather.db", (err) => {
    if (err) {
        return console.error(err.message);
    }
    console.log("Database file present...");
});

let initDb = function(dbFilePath) {
    db.run(createDb);
}
 
let RunSqlStatement = function(sqlStatement) {
    this.OpenDbConnection();
    db.run(sqlStatement)
    this.CloseDbConnection();
}

function OpenDbConnection() {
    db = new sqlite3.Database(dbFile, (err) => {
        if (err) {
            return console.error(err.message);
        }
        console.log("Successfully connected to database");
    });
}

function CloseDbConnection(){
    db.close((err) => {
        if (err) {
            return console.error(err.message);
        }
        console.log('Close the database connection.');
    });
}

module.exports = {
    initDb: initDb,
    db: db
}
