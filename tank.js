// wiring-pi
var wpi = require('wiring-pi');
var forwardPin = 15;
var leftPin = 11;
var backPin = 29;
var rightPin = 7;
wpi.setup('wpi');
wpi.pinMode(forwardPin, wpi.OUTPUT);
wpi.pinMode(leftPin, wpi.OUTPUT);
wpi.pinMode(backPin, wpi.OUTPUT);
wpi.pinMode(rightPin, wpi.OUTPUT);

// // socket.io
// var app = require('http').createServer(handler)
// var io = require('socket.io')(app);
// var fs = require('fs');

// app.listen(1337);

// function handler (req, res) {
//   fs.readFile(__dirname + '/app/views/index.html',
//   function (err, data) {
//     if (err) {
//       res.writeHead(500);
//       return res.end('Error loading index.html');
//     }

//     res.writeHead(200);
//     res.end(data);
//   });
// }

// io.on('connection', function (socket) {
//   socket.on('command', function (data) {
//     console.log('Command Received: ', data);

//     // forward
//     if( data.forward ) {
//     	console.log('forward - ON');
//     	wpi.digitalWrite(forwardPin, 1 );
//     } else {
//     	console.log('forward - OFF');
//     	wpi.digitalWrite(forwardPin, 0 );
//     }

//     // left
//     if( data.left ) {
//     	console.log('left - ON');
//     	wpi.digitalWrite(leftPin, 1 );
//     } else {
//     	console.log('left - OFF');
//     	wpi.digitalWrite(leftPin, 0 );
//     }

//     // back
//     if( data.back ) {
//     	console.log('back - ON');
//     	wpi.digitalWrite(backPin, 1 );
//     } else {
//     	console.log('back - OFF');
//     	wpi.digitalWrite(backPin, 0 );
//     }

//     // right
//     if( data.right ) {
//     	console.log('right - ON');
//     	wpi.digitalWrite(rightPin, 1 );
//     } else {
//     	console.log('right - OFF');
//     	wpi.digitalWrite(rightPin, 0 );
//     }

//     console.log('Command Executed');
//   });
// });



// "wiring-pi": ">=2.1.1",
// GPIO pin of the led

// var configPin = 7;
// Blinking interval in usec
var configTimeout = 1000;

// wpi.setup('wpi');
// wpi.pinMode(configPin, wpi.OUTPUT);

var isLedOn = 0;

setInterval(function() {
	isLedOn = +!isLedOn;
	//isLedOn = !isLedOn;
	wpi.digitalWrite(forwardPin, isLedOn );
	wpi.digitalWrite(leftPin, isLedOn );
	wpi.digitalWrite(backPin, isLedOn );
	wpi.digitalWrite(rightPin, isLedOn );
	// console.log(configPin, isLedOn);
}, configTimeout);


console.log('Server - Running');
