var http = require('http');

//create a server object
http:createServer(function (req, res) {
	//http header, status 200
	res.writeHead(200, {'Content-Type': 'text/html'});
	//write a response to the client
	res.write('Hello, world!');
	//end the response
	res.end();
}).listen(8080); //server object listens on port 8080