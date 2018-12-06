var weatherData = require("../Models/WeatherData.js");
var dbRepository = require("../DbRepo.js");
const config = require('../config.js');

let currentWeatherData, dbSaveThreshold = null;

let insertWeatherDataIntoDb = function(weatherQuery) {
    try {
        currentWeatherData = new weatherData(weatherQuery);
        if (currentWeatherData.time >= dbSaveThreshold) updateDbAndSetSaveThreshold(currentWeatherData);
    } catch (exception){
        console.log('The insert of weather data into the Database failed with an exception');
        console.log(exception);
        return false;
    }
    return true;
}

let getDailyTemperatureHighsAndLows = function() {
    let temperatureHighsAndLows = dbRepository.retrieveDailyTempHighAndLow();

    // Create v-echarts class and move that logic into there
    let chartData = {
        columns: ['date', 'highTemp', 'lowTemp'],
        rows: Object.values(temperatureHighsAndLows)
    };
    chartData.settings = {
        area: true,
        yAxisName: ['Temp F']
    };

    return chartData;
}

let getTheCurrentWeatherData = function() {
    return currentWeatherData || new weatherData(dbRepository.retrieveLatestWeatherdata());
}

let updateDbAndSetSaveThreshold = function(incomingWeatherData){
    dbRepository.insertWeatherdata(incomingWeatherData);

    dbSaveThreshold = new Date();
    dbSaveThreshold.setSeconds(dbSaveThreshold.getSeconds() + config.db.writeDelayInSeconds);
    dbSaveThreshold.setHours(dbSaveThreshold.getHours() - (dbSaveThreshold.getTimezoneOffset() / 60))
}

module.exports = { 
    insertWeatherDataIntoDb : insertWeatherDataIntoDb,
    getTheCurrentWeatherData: getTheCurrentWeatherData,
    getDailyTemperatureHighsAndLows: getDailyTemperatureHighsAndLows
}
