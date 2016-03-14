var net = require('net');

// Creates a new TCP server. The handler argument is automatically set as a listener for the 'connection' event
var server = net.createServer(function (socket) {

  // Every time someone connects, tell them hello and then close the connection.
  socket.on('data',function(data){
  console.log("Connection from " + socket.remoteAddress+" "+data+" from the client");
  socket.write("you said"+data);
});

  socket.on('close',function(data){
 console.log("Connection from  "+data);
 socket.end();
});

socket.setTimeout(5000,function(){
	socket.end();
});
});

// Fire up the server bound to port 7000 on localhost
server.listen(7000);

// Put a friendly message on the terminal
console.log("TCP server listening on port 7000 at localhost.")