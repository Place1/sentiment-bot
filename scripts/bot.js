'use strict';

const fs = require("fs");
const path = require('path');

module.exports = function(robot) {

	robot.catchAll((res) => {
		fs.appendFile(
			path.join(__dirname, '..', 'chat_log', 'log.txt'),
			JSON.stringify({
				id: res.message.user.id,
				user: res.message.user.name,
				text: res.message.text,
				date: new Date()
			}) + '\n',
			function(err) {
				if (err) console.log('error:');
		});
	});

	return robot;
}
