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
    res.status(200).send();
});

app.get('/weatherstation/getcurrentweather', (req, res) => {
    let latestWeather = new weatherData(dbRepository.retrieveLatestWeatherdata());
    res.status(200).send(latestWeather);
});

app.use('/', express.static('public'));
app.use('/scripts', express.static(__dirname + '/node_modules/'));
app.listen(7025, () => console.log('The AccuriteAccess Weather Data Application has started'));
