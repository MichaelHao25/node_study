var http = require('http');
var url = require('url');
var router = require('./module/router');

var outputfile = require('./module/outputfile')
http.createServer(function(requset, response) {
	response.writeHead(200, {
		'content-type': 'text/html;charset=utf-8;'
	})
	if (requset.url !== '/favicon.ico') {

		var pathname = url.parse(requset.url).pathname;
		pathname = pathname.replace(/\//, '');
		console.log(pathname);

		router[pathname](response);
		// outputfile['readfileSync']('./views/login.html');
		console.log('主程序执行完毕');


	}
}).listen('5000', function() {
	console.log('hello~~');
})
