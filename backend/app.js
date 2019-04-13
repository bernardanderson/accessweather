var express = require("express");
var socketIo  = require("./Services/SocketIoService.js");
var weatherDataService = require("./Services/WeatherDataService.js");
const config = require('./config.js');
var app = express();
const applicationPort = config.app.port;

app.get('/weatherstation/updateweatherstation.php', (req, res) => {
    let dbInsertResult = weatherDataService.insertWeatherDataIntoDb(req.query);
    socketIo.io.sockets.emit('currentWeatherData', weatherDataService.getTheCurrentWeatherData());
    return (dbInsertResult) ? res.status(200).send() : res.status(400).send();
});

app.use('/', express.static('public'));
app.use('/scripts', express.static(__dirname + '/node_modules/'));
app.listen(applicationPort, () => console.log(`The AccuriteAccess Weather Data Application has started on port ${applicationPort}`));
