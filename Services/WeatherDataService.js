var weatherData = require("../Models/WeatherData.js");
var dbRepository = require("../DbRepo.js");

let currentWeatherDataObject = null;

let insertWeatherDataIntoDb = function(weatherQuery) {
    try {
        // If currentWeatherDataObject null, add to Db and populate currentWeatherDataObject
        // Next query, do time check in here if within time populate currentWeatherDataObject but don't add to Db
        let currentWeatherData = new weatherData(weatherQuery);
        dbRepository.insertWeatherdata(currentWeatherData);
    } catch (exception){
        console.log('The insert of weather data into the Database failed with an exception');
        console.log(exception);
        return false;
    }
    return true;
}

let getTheCurrentWeatherData = function() {
    let latestWeather =  (currentWeatherDataObject === null) ? new weatherData(dbRepository.retrieveLatestWeatherdata()) : currentWeatherDataObject;
    return latestWeather;
}

module.exports = { 
    insertWeatherDataIntoDb : insertWeatherDataIntoDb,
    getTheCurrentWeatherData: getTheCurrentWeatherData
}
