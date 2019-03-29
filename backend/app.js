var express = require("express");
var cors = require('cors');
var weatherDataService = require("./Services/WeatherDataService.js");
const config = require('./config.js');
var app = express();
const applicationPort = config.app.port;

app.use(cors());

app.get('/weatherstation/updateweatherstation.php', (req, res) => {
    let dbInsertResult = weatherDataService.insertWeatherDataIntoDb(req.query);
    return (dbInsertResult) ? res.status(200).send() : res.status(400).send();
});

app.get('/weatherdata/temperatures/getmonthlyhighslows', (req, res) => {
    let tempChartData = weatherDataService.getDailyTemperatureHighsAndLows();
    res.status(200).send(tempChartData);
});

app.get('/weatherstation/getcurrentweather', (req, res) => {
    let latestWeather = weatherDataService.getTheCurrentWeatherData();
    res.status(200).send(latestWeather);
});

app.use('/', express.static('public'));
app.use('/scripts', express.static(__dirname + '/node_modules/'));
app.listen(applicationPort, () => console.log(`The AccuriteAccess Weather Data Application has started on port ${applicationPort}`));
