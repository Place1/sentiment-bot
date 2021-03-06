'use strict';

require('coffee-script/register'); // so we can require hubot;
const Hubot = require('hubot');
const path = require('path');

const adapterPath = path.resolve(__dirname);
const adapterName = process.env.ADAPTER || 'facebook'; // from hubot-facebook
const enableHttpd = true;
const botName = 'sentiment-bot';
const botAlias = '/';
const privateSettings = require('./privateSettings');

process.env.FB_LOGIN_EMAIL = privateSettings.FB_LOGIN_EMAIL;
process.env.FB_LOGIN_PASSWORD = privateSettings.FB_LOGIN_PASSWORD;
process.env.FB_SELF_LISTEN = true;

// create the bot with the above settigns
const robot = new Hubot.Robot(adapterPath, adapterName, enableHttpd, botName, botAlias);

// load the scripts directory into the bot
robot.adapter.once('connected', function() {
	robot.load(path.resolve(__dirname, 'scripts'));
});

// run the bot
robot.run();
