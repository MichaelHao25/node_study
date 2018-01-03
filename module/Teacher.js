var User = require('./User');

function Teacher(id, name, age) {
	User.call(this, id, name, age);
	this.teacher = function(response) {
		response.write(this.name + '讲课');
	}
}
module.exports = Teacher;
