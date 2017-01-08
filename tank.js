// wiring-pi
// var wpi = require('wiring-pi');
// socket.io
var app = require('http').createServer(handler)
var io = require('socket.io')(app);
var fs = require('fs');

app.listen(1337);

function handler (req, res) {
  fs.readFile(__dirname + '/app/views/index.html',
  function (err, data) {
    if (err) {
      res.writeHead(500);
      return res.end('Error loading index.html');
    }

    res.writeHead(200);
    res.end(data);
  });
}

io.on('connection', function (socket) {
  socket.emit('news', { hello: 'world' });
  socket.on('command', function (data) {
    console.log(data);
  });
});

console.log('Server - Running');


// "wiring-pi": ">=2.1.1",
// GPIO pin of the led

// var configPin = 7;
// // Blinking interval in usec
// var configTimeout = 1000;

// wpi.setup('wpi');
// wpi.pinMode(configPin, wpi.OUTPUT);

// var isLedOn = 0;

// setInterval(function() {
// 	isLedOn = +!isLedOn;
// 	//isLedOn = !isLedOn;
// 	wpi.digitalWrite(configPin, isLedOn );
// }, configTimeout);
