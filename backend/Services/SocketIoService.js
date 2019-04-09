const io = require('socket.io')();
const weatherDataService = require('./WeatherDataService');

let startServer = function() {

    console.log("Socket.io server starting");

    io.on('connection', function(socket) {
        console.log("Connection established...");

        socket.on('getCurrentWeatherData', function() {
            console.log("Asking for current weather data")
            const currentData = weatherDataService.getTheCurrentWeatherData();
            socket.emit('currentWeatherData', currentData);
        });
    })
    

   io.listen(7024);
}

module.exports = { 
    startServer : startServer
}
