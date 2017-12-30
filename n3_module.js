var http = require('http');
// var User = require('./module/User')
var Teacher = require('./module/Teacher')
http.createServer(function(request, response) {
	response.writeHead(200, {
		'content-type': 'text/html;charset=utf-8'
	});
	// console.log(request);
	if (request.url !== '/favicon.ico') {
		teacher = new Teacher(1, 'LiGao', 20);
		teacher.enter();
		teacher.teacher(response);
		response.end('')
	}
}).listen(3000);
console.log('server running at http:127.0.0.1:8000');



// var http = require('http');
// var otherfunction = require('./otherfuntions.js');
// http.createServer(function(request, response) {
// 	response.writeHead(500, {
// 		'content-type': 'text/html;charset=utf-8'
// 	})
// 	if (request.url !== "/favicon.ico") {
// 		fun1(response);
// 		var funname = 'fun3';
// 		otherfunction[funname](response);
// 		// otherfunction['fun2'](response);
// 		// otherfunction['fun3'](response);
// 		response.end('');
// 	}
// }).listen(5000);
