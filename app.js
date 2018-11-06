var express = require("express");
var weatherData = require("./Models/WeatherData.js");
var dbRepository = require("./DbRepo.js");
var app = express();

// Initialize the Sqlite3 Database
dbRepository.initDb();

app.get('/weatherstation/updateweatherstation.php', (req, res) => {
    let currentWeatherData = new weatherData(req.query);

    try {
        dbRepository.insertWeatherdata(currentWeatherData);
    } catch (exception){
        console.log('The insert of weather data into the Database failed with an exception');
        console.log(exception);
    }
    // console.log(`This is from WeatherUnderground. The current time is ${new Date()} and the pressure is ${currentWeatherData.baromin}`);
    res.status(200).send("Success");
})

app.listen(7025, () => console.log('The AccuriteAccess Weather Data Application has started'));
