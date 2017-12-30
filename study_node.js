// var http = require('http');
// http.createServer(function(request, response) {
// 	response.writeHead(200, {
// 		'Content-Type': 'text/html'
// 	})
// });

// console.log('hello,word.');
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
	res.statusCode = 200;
	res.setHeader('Content-Type', 'text/plain');
	res.end('Hello World\n');
});

server.listen(port, hostname, () => {
	console.log(`Server running at http://${hostname}:${port}/`);
});
