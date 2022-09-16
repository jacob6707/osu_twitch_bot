const dotenv = require('dotenv');
dotenv.config();
module.exports = {
    BANCHO_USER: process.env.BANCHO_USER,
    BANCHO_PASS: process.env.BANCHO_PASS,
    BANCHO_APIKEY: process.env.BANCHO_APIKEY,
    REQUESTS_USER: process.env.REQUESTS_USER,
    API_PORT: process.env.API_PORT || 3000,
    TWITCH_OAUTH: process.env.TWITCH_OAUTH,
    TWITCH_BOT_NAME: process.env.TWITCH_BOT_NAME,
    TWITCH_CHANNEL: process.env.TWITCH_CHANNEL,
    COMMAND_PREFIX: process.env.COMMAND_PREFIX || '!',
    STREAMCOMPANION_PATH: process.env.STREAMCOMPANION_PATH
};
