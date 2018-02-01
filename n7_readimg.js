var http = require('http');
var outputfile = require('./module/outputfile');
http.createServer(function(request, response) {
	response.writeHead(200, {
		'Content-Type': 'image/jpeg'
	});
	if (request.url !== '/favicon.ico') {
		outputfile.readImg('./images/111.png', response);
	}

}).listen(5000)
console.log('http://localhost:5000');
