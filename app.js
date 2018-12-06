var express = require("express");
var weatherDataService = require("./Services/WeatherDataService.js");
const config = require('./config.js');

const applicationPort = config.app.port;
var app = express();

// Create v-echarts class and move that logic into there

app.get('/weatherstation/updateweatherstation.php', (req, res) => {
    let dbInsertResult = weatherDataService.insertWeatherDataIntoDb(req.query);
    return (dbInsertResult) ? res.status(200).send() : res.status(400).send();
});

// app.get('/weatherdata/temperatures/getmonthlyhighslows', (req, res) => {
//     let temperatureHighsAndLows = dbRepository.retrieveDailyTempHighAndLow();
//     let chartData = {
//         columns: ['date', 'highTemp', 'lowTemp'],
//         rows: Object.values(temperatureHighsAndLows)
//     };
//     chartData.settings = {
//         area: true,
//         yAxisName: ['Temp F']
//     };
//     res.status(200).send(chartData);
// });

app.get('/weatherstation/getcurrentweather', (req, res) => {
    let latestWeather = weatherDataService.getTheCurrentWeatherData();
    res.status(200).send(latestWeather);
});

app.use('/', express.static('public'));
app.use('/scripts', express.static(__dirname + '/node_modules/'));
app.listen(applicationPort, () => console.log(`The AccuriteAccess Weather Data Application has started on port ${applicationPort}`));
