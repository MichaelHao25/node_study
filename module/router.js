var outputfile = require('./outputfile');
var url = require('url');
var querystring = require('querystring');

function getRecall(response) {
	response.writeHead(200, {
		'Content-Type': 'text/html;charset=utf-8'
	})

	function callback(data) {
		response.write(data);
		response.end();
	}
	return callback;
}
module.exports = {
	login: function(request, response) {

		// get 方法接收参数
		// var data = url.parse(request.url, true).query;
		// if (data['username'] != undefined) {
		// 	console.log(data);
		// 	console.log(data['username']);
		// 	console.log(data['password']);
		// }
		// post方法接收参数
		var post = '';
		request.on('data', function(chunk) {
			post += chunk;
			console.log(chunk);
		});
		request.on('end', function() {
			post = querystring.parse(post);
			console.log('username =' + post['username']);
			console.log('password =' + post['password']);
		});
		var callback = getRecall(response);
		outputfile['readfile']('./views/login.html', callback);
		///////////////////////////////////////////////////////////
		// outputfile['readfile']('./views/bbb.html', callback); //
		///////////////////////////////////////////////////////////
	},
	register: function(request, response) {
		var callback = getRecall(response);
		outputfile['readfile']('./views/register.html', callback);
	},
	writefile: function(request, response) {
		var callback = getRecall(response);
		outputfile['writefile']('./views/one.text', '大大', callback)
	},
	showimg: function(request, response) {
		var parameter = url.parse(request.url).query != '' ? url.parse(request.url).query : 'null';
		response.writeHead(200, {
			'Content-Type': 'image/jpeg'
		})
		outputfile.readImg(parameter, response);
	}
}
