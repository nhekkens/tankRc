// wiring-pi
var wpi = require('wiring-pi');
var forwardPin = 10;
var leftPin = 11;
var backPin = 12;
var rightPin = 13;
wpi.setup('wpi');
wpi.pinMode(forwardPin, wpi.OUTPUT);
wpi.pinMode(leftPin, wpi.OUTPUT);
wpi.pinMode(backPin, wpi.OUTPUT);
wpi.pinMode(rightPin, wpi.OUTPUT);

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
  socket.on('command', function (data) {
    console.log('Command Received: ', data);

    // forward
    if( data.forward ) {
    	wpi.digitalWrite(forwardPin, wpi.HIGH );
    } else {
    	wpi.digitalWrite(forwardPin, wpi.LOW );
    }

    // left
    if( data.left ) {
    	wpi.digitalWrite(leftPin, wpi.HIGH );
    } else {
    	wpi.digitalWrite(leftPin, wpi.LOW );
    }

    // back
    if( data.back ) {
    	wpi.digitalWrite(backPin, wpi.HIGH );
    } else {
    	wpi.digitalWrite(backPin, wpi.LOW );
    }

    // right
    if( data.right ) {
    	wpi.digitalWrite(rightPin, wpi.HIGH );
    } else {
    	wpi.digitalWrite(rightPin, wpi.LOW );
    }

    console.log('Command Executed');
  });
});

console.log('Server - Running');


// // "wiring-pi": ">=2.1.1",
// // GPIO pin of the led

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
