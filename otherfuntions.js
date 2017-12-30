// function fun2(response) {
// 	response.write('func2')
// 	console.log('I\'m fun2');
// }

// module.exports = fun2;
module.exports = {
	fun2: function(response) {
		response.write('func2')
		console.log('I\'m fun2');
	},
	fun3: function(response) {
		response.write('func23')
		console.log('I\'m fun23');
	}
}
