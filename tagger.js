const nlp = require('nlp_compromise');
const sentiment = require('sentiment');
const fs = require('fs');
const path = require('path');
const _ = require('lodash');

function readMessages(logFile, callback) {
	fs.readFile(logFile, 'utf8', function(err, data) {
		if (err) return callback(err);
		const lines = data.split(/\r?\n/);
		_.remove(lines, x => x === "");
		const messages = lines.map(function(line) {
			console.log(line)
			return JSON.parse(line);
		});
		return callback(null, messages);
	});
}

readMessages(path.resolve('./chat_log.txt'), function(err, data) {
	if (err) throw(err);

	const x = data.map(function(msg) {
		return sentiment(msg.message.text);
	});

	console.log(x);

});
