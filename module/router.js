var outputfile = require('./outputfile')

module.exports = {
	login: function(response) {

		function callback(data) {
			response.write(data);
			response.end('');
		}
		outputfile['readfile']('./views/login.html', callback);
	},
	register: function(response) {
		function callback(data) {
			response.write(data);
			response.end('');
		}
		outputfile['readfile']('./views/register.html', callback);
	},
	writefile: function(response) {
		function callback(data) {
			response.write(data);
			response.end('');
		}
		outputfile.writefile('./views/one.text', '今天天气很不错啊！', callback)
	}
}
