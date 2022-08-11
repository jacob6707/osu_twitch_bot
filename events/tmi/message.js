const { twitchBot } = require('../../index');
const { COMMAND_PREFIX } = require('../../util/env');

module.exports = (channel, tags, message, self) => {
	if(self) return;

    if (!message.startsWith(COMMAND_PREFIX)) return;

    const args = message.slice(COMMAND_PREFIX.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();

    if (cmd.length === 0) return;
    
    let command = twitchBot.commands.get(cmd);
    if (!command) command = twitchBot.commands.get(twitchBot.aliases.get(cmd));
    
    if (command) command.execute(twitchBot, channel, tags, message, self, args);
}