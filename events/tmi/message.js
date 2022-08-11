const { twitchBot, osuApi, banchoClient } = require('../../index');
const { COMMAND_PREFIX } = require('../../util/env');
const parseBeatmapURL = require('../../util/functions/parseBeatmap');
const { sendBeatmap } = require('../../util/functions/sendBeatmap');

module.exports = async (channel, tags, message, self) => {
	if(self) return;

    if (message.startsWith('https://osu.ppy.sh/')) {
        let beatmap = await parseBeatmapURL(osuApi, message.split(' ')[0]);
        if (beatmap === 1) return;
        if (beatmap?.message) return;
        sendBeatmap(banchoClient, beatmap, tags.username);
    }

    if (!message.startsWith(COMMAND_PREFIX)) return;

    const args = message.slice(COMMAND_PREFIX.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();

    if (cmd.length === 0) return;
    
    let command = twitchBot.commands.get(cmd);
    if (!command) command = twitchBot.commands.get(twitchBot.aliases.get(cmd));
    
    if (command) command.execute(twitchBot, channel, tags, message, self, args);
}