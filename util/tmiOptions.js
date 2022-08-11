const { TWITCH_BOT_NAME, TWITCH_OAUTH, TWITCH_CHANNEL } = require('./env');

module.exports = {
	options: { debug: true },
	identity: {
		username: TWITCH_BOT_NAME,
		password: TWITCH_OAUTH
	},
	channels: [ TWITCH_CHANNEL ]
};