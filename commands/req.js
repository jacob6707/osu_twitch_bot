const { COMMAND_PREFIX } = require('../util/env');
const { osuApi, banchoClient } = require('../index');
const { sendBeatmap } = require('../util/functions/sendBeatmap');
const parseBeatmapURL = require('../util/functions/parseBeatmap');

module.exports = {
    name: 'req',
    usage: `${COMMAND_PREFIX}req <beatmap link>`,
    execute: async (client, channel, tags, message, self, args) => {
        if (args.length < 1) return client.say(channel, `@${tags.username}, please specify a beatmap link.`);
        let beatmap = await parseBeatmapURL(osuApi, args[0]);
        if (beatmap === 1) return client.say(channel, `@${tags.username}, beatmap link is invalid.`);
        if (beatmap?.message) return client.say(channel, `@${tags.username}, There was an error parsing your beatmap: ${beatmap.message}`);
        if (sendBeatmap(banchoClient, beatmap, tags.username)) client.say(channel, `@${tags.username}, map sent!`);
        else client.say(channel, `@${tags.username}, an error has occured whilst sending your map.`);
    }
}