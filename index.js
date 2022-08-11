const tmi = require('tmi.js');
const bjs = require('bancho.js');
const osu = require('node-osu');
const { BANCHO_USER, BANCHO_PASS, BANCHO_APIKEY } = require('./util/env');

const banchoClient = new bjs.BanchoClient({ username: BANCHO_USER, password: BANCHO_PASS, apiKey: BANCHO_APIKEY });
const osuApi = new osu.Api(BANCHO_APIKEY);
const options = require('./util/tmiOptions');
const twitchBot = new tmi.Client(options);

module.exports = { banchoClient, osuApi, twitchBot };

twitchBot.connect();

twitchBot.commands = new Map();
twitchBot.aliases = new Map();

require('./handlers/command')(twitchBot);
require('./handlers/tmiEvent')(twitchBot);

banchoClient.connect().then(() => {
    banchoClient.getSelf().fetchFromAPI().then((bot) => {
        console.log(`Connected to Bancho as ${bot.username}`);
        console.log(`Global rank: ${bot.ppRank}\tCountry rank: ${bot.ppCountryRank}`);
    }).catch(console.error);
    banchoClient.getSelf().sendMessage('Bot is online!');
}).catch(console.error);