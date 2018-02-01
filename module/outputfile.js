var fs = require('fs')
module.exports = {
	readfile: function(path, callback) {
		fs.readFile(path, function(error, data) {
			if (error) {
				console.log(error)
				callback(error.toString());
			} else {
				console.log(data.toString());
				callback(data);
			}

		})
		console.log('异步方法执行完毕。');
	},
	readfileSync: function(path, callback) {
		var data = fs.readFileSync(path, 'utf-8');
		console.log(data);
		console.log('同步方法执行完毕');
		callback(data);
		// return data;
	},
	writefile: function(path, data, callback) {
		fs.writeFile(path, data, function(error) {
			if (error) {
				throw error;
			} else {
				console.log('save file.')
				callback('异步文件写入成功！');
			}
		})
	},
	writefileSync: function(path, data, callback) {
		fs.writeFileSync(path, data);
		callback(data);
		console.log('sync save file.同步文件写入成功！')
	},
	readImg: function(path, response) {
		fs.readFile(path, 'binary', function(err, filedata) {
			if (err) {
				console.log(err)
				return;
			} else {
				console.log('输出文件');
				response.write(filedata, 'binary');
				response.end();
			}
		})
	}
}
