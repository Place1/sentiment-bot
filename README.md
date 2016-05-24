# sentiment-bot

### install:

__from the root directory__
* git submodule update --init
* npm install
* npm link ./hubot-facebook

### usage:
you need to make a configuration file in the project root directory called `privateSettings.js` with contents...

	module.exports = {
		FB_LOGIN_EMAIL: "your facebook login",
		FB_LOGIN_PASSWORD: "your facebook password"
	};
