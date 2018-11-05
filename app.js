var express = require("express");
var weatherData = require("./Models/WeatherData.js");
var dbRepo = require("./DbRepo.js");
var app = express();

// Create Db
dbRepo.initDb();

app.get('/weatherstation/updateweatherstation.php', (req, res) => {
    var query = req.query;
    let currentWeatherData = new weatherData(query.baromin, query.humidity,
        query.tempf, query.windspeedmph, query.winddir, query.windgustmph, query.windgustdir,
        query.dewptf, query.dailyrainin, query.rainin);

    console.log(`This is from WeatherUnderground. The current time is ${new Date()} and the pressure is ${currentWeatherData.baromin}`);
    res.status(200).send("Success");
})

app.listen(7025, () => console.log('Example node API'));
