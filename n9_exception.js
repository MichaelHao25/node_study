var http = require('http');
var url = require('url');
var router = require('./module/router');
var exception = require('./module/exception');
http.createServer(function(request, response) {
	if (request.url !== '/favicon.ico') {
		var pathname = url.parse(request.url).pathname;
		console.log(request.url);
		pathname = pathname.replace(/\//, '');
		var parameter = url.parse(request.url).query != '' ? url.parse(request.url).query : 'null';
		try {
			router[pathname](response, parameter);
			// 在n10已经用更好的方法处理
			// var data = exception.expfun(0)
			// response.write(data);
			// response.end('');
		} catch (err) {
			console.log('这个人输入的地址好像有问题哇，咋办？' + err);
			response.writeHead(200, {
				'Content-Type': 'text/html;charset=utf-8'
			})
			response.write('老哥，404了，咋办？' + err.toString());
			response.end('');
		}
	}
}).listen(5000)
console.log('http://localhost:5000');
