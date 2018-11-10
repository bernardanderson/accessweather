const Database = require('better-sqlite3');
const SqlCommands= require('./Constants/SqlCommands.js');

const db = new Database('./accessweather.db', {});
const sqlCommands = new SqlCommands();

let initDb = function() {
    try {
        db.prepare(sqlCommands.intializeDataTable).run();
        console.info("The database and the AccuriteAccessData Table was created.");
    } catch(ex) {
        console.info("The database and required tables already exist... continuing.");
    }
}

let insertWeatherdata = function(currentWeatherData) {
    db.prepare(sqlCommands.insertWeatherdata).run(currentWeatherData.baromin, currentWeatherData.humidity, currentWeatherData.tempf, currentWeatherData.windspeedmph, currentWeatherData.winddir, 
        currentWeatherData.windgustmph, currentWeatherData.windgustdir, currentWeatherData.dewptf, currentWeatherData.dailyrainin, currentWeatherData.rainin);
}

let retrieveLatestWeatherdata = function() {
    return db.prepare(sqlCommands._retrieveLatestWeatherData).get();
}

module.exports = {
    initDb: initDb,
    insertWeatherdata: insertWeatherdata,
    retrieveLatestWeatherdata: retrieveLatestWeatherdata
}
