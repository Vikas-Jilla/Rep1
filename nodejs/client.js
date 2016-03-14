var net = require('net');

// Creates a new TCP server. The handler argument is automatically set as a listener for the 'connection' event
var client = new net.Socket();
client.connect(7000,'127.0.0.1',function(){

	console.log("Connected");
	client.write(" hello");

});
client.on('data',function(data){
console.log("server has sent: "+data);
client.destroy();
});
client.on('close',function(){
	console.log("connection is closed ");
});
client.on('error',function(){
	console.log("unable to establish connection");
});
// Put a friendly message on the terminal
