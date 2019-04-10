const io = require('socket.io')();
const weatherDataService = require('./WeatherDataService');

let startServer = function() {

    console.log("Socket.io server starting");

    io.on('connection', function(socket) {
        console.log("A connection to a Client is established...");

        socket.on('getCurrentWeatherData', function() {
            console.log("A Client is asking for most recent weather data")
            socket.emit('currentWeatherData', weatherDataService.getTheCurrentWeatherData());
        });
    })

   io.listen(7024);
}

module.exports = { 
    startServer : startServer
}
