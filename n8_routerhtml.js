var http = require('http');
var url = require('url');
var router = require('./module/router');
http.createServer(function(request, response) {
	if (request.url !== '/favicon.ico') {
		var pathname = url.parse(request.url).pathname;
		console.log(request.url);
		pathname = pathname.replace(/\//, '');
		var parameter = url.parse(request.url).query != '' ? url.parse(request.url).query : 'null';
		router[pathname](response, parameter);
	}
}).listen(5000)
console.log('http://localhost:5000');
