const tmi = require('tmi.js');
const express = require('express');
const bjs = require('bancho.js');
const osu = require('node-osu');
const { BANCHO_USER, BANCHO_PASS, BANCHO_APIKEY, API_PORT } = require('./util/env');

const app = express();
const banchoClient = new bjs.BanchoClient({ username: BANCHO_USER, password: BANCHO_PASS, apiKey: BANCHO_APIKEY });
const osuApi = new osu.Api(BANCHO_APIKEY);
const options = require('./util/tmiOptions');
const twitchBot = new tmi.Client(options);

twitchBot.connect();

twitchBot.commands = new Map();
twitchBot.aliases = new Map();

require('./handlers/command')(twitchBot);
require('./handlers/tmiEvent')(twitchBot);

app.use(express.json());

app.listen(API_PORT, () => {
    console.log(`API listening on port ${API_PORT}`);
});

module.exports = { banchoClient, osuApi, twitchBot };