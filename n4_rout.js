var http = require('http');
var url = require('url');
var router = require('./module/router');

http.createServer(function(requset, response) {
		response.writeHead(200, {
			'content-type': 'text/html;charset=utf-8;'
		})
		if (requset.url !== '/favicon.ico') {
			var pathname = url.parse(requset.url).pathname;
			pathname = pathname.replace(/\//, '');
			console.log(pathname);

			router[pathname](response);

			response.write('hello,word;');
			response.end('');
		}
	})
	.listen(5000);
console.log('server run at 5000 port;')
