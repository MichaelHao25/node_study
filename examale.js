var http = require('http');
var otherfunction = require('./otherfuntions.js');
http.createServer(function(request, response) {
	response.writeHead(500, {
		'content-type': 'text/html;charset=utf-8'
	})
	if (request.url !== "/favicon.ico") {
		fun1(response);
		var funname = 'fun3';
		otherfunction[funname](response);
		// otherfunction['fun2'](response);
		// otherfunction['fun3'](response);
		response.end('');
	}
}).listen(5000);
console.log('http:127.0.0.1:5000')

function fun1(response) {
	console.log('fun1');
	response.write('hello ,I"m fnc1');
}

// var http = require('http');
// http.createServer(function(request, response) {
// 	response.writeHead(200, {
// 		'Content-Type': 'text/html;  charset=utf-8'
// 	});
// 	// if (request.url !== "/favicon.ico") { //清除第2此访问  
// 	console.log('访问');
// 	response.write('hello,world');
// 	response.end('hell,世界'); //不写则没有http协议尾,但写了会产生两次访问  
// 	// }
// }).listen(8000);
// console.log('Server  running  at  http://127.0.0.1:8000/');

// const http = require('http');

// const hostname = '127.0.0.1';
// const port = 3000;

// const server = http.createServer((req, res) => {
// 	res.statusCode = 200;
// 	res.setHeader('Content-Type', 'text/plain');
// 	res.end('Hello World\n');
// });

// server.listen(port, hostname, () => {
// 	console.log(`Server running at http://${hostname}:${port}/`);
// });
