const io = require('socket.io')();
const weatherDataService = require('./WeatherDataService');

function startServer() {
    io.on('connection', function(socket) {

        socket.on('getCurrentWeatherData', function() {
            socket.emit('currentWeatherData', weatherDataService.getTheCurrentWeatherData());
        })
        
    })
    
    io.listen(7024);
    console.log("The Socket.io server is starting");
}

startServer()

module.exports.io = io;
