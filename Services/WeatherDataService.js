var weatherData = require("../Models/WeatherData.js");
var dbRepository = require("../DbRepo.js");

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

let getTheCurrentWeatherData = function() {
    return currentWeatherData || new weatherData(dbRepository.retrieveLatestWeatherdata());
}

let updateDbAndSetSaveThreshold = function(incomingWeatherData){
    dbRepository.insertWeatherdata(incomingWeatherData);

    dbSaveThreshold = new Date();
    dbSaveThreshold.setSeconds(dbSaveThreshold.getSeconds() + 10);
    dbSaveThreshold.setHours(dbSaveThreshold.getHours() - (dbSaveThreshold.getTimezoneOffset() / 60))
}

module.exports = { 
    insertWeatherDataIntoDb : insertWeatherDataIntoDb,
    getTheCurrentWeatherData: getTheCurrentWeatherData
}
