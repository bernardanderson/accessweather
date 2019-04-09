const io = require('socket.io')();

let startServer = function() {

    console.log("Socket.io server starting");
    io.on('connection', function() {
        console.log("Connection establish...")
    });

   io.listen(7024);
}

module.exports = { 
    startServer : startServer
}
