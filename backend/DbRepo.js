const Database = require('better-sqlite3');
const SqlCommands = require('./Constants/SqlCommands');
const config = require('./config.js');

const db = new Database(config.db.path, {});
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

    let sqliteUnderstandableTime = new Date(currentWeatherData.time).toISOString();

    db.prepare(sqlCommands.insertWeatherdata).run(currentWeatherData.baromin, currentWeatherData.humidity, 
        currentWeatherData.tempf, currentWeatherData.windspeedmph, currentWeatherData.winddir, 
        currentWeatherData.windgustmph, currentWeatherData.windgustdir, currentWeatherData.dewptf, 
        currentWeatherData.dailyrainin, currentWeatherData.rainin, sqliteUnderstandableTime);
}

let retrieveLatestWeatherdata = function() {
    let weatherData = db.prepare(sqlCommands.retrieveLatestWeatherdata).get();
    return weatherData; 
}

let retrieveDailyTempHighAndLow = function() {
    return db.prepare(sqlCommands.retrieveDailyTempHighAndLow).all();
}

initDb();

module.exports = {
    initDb: initDb,
    insertWeatherdata: insertWeatherdata,
    retrieveLatestWeatherdata: retrieveLatestWeatherdata,
    retrieveDailyTempHighAndLow: retrieveDailyTempHighAndLow
}
