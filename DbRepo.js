var fs = require("fs");
var Database = require('better-sqlite3');

const createDb = `CREATE TABLE AccuriteAccessData (id INTEGER PRIMARY KEY, barometer NUMERIC NOT NULL, humidity NUMERIC NOT NULL, tempf NUMERIC NOT NULL,
    windspeed NUMERIC NOT NULL, winddir NUMERIC NOT NULL, windgust NUMERIC NOT NULL, windgustdir NUMERIC NOT NULL, dewpoint NUMERIC NOT NULL,
    dailyrain NUMERIC NOT NULL, totalrain NUMERIC NOT NULL);`

let db = new Database("./accessweather.db", {});

let initDb = function(dbFilePath) {
    try {
        db.prepare(createDb).run();
        console.info("The database was created...");
    } catch(ex) {
        console.info("The database already exists... continuing");
    }
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
