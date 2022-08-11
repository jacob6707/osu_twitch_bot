const { COMMAND_PREFIX, STREAMCOMPANION_PATH } = require('../util/env');
const fs = require('fs');

module.exports = {
    name: 'np',
    usage: `${COMMAND_PREFIX}np`,
    execute: async (client, channel, tags, message, self, args) => {
        const file = fs.readFileSync(`${STREAMCOMPANION_PATH}\\np_playing_DL.txt`, {encoding: 'utf-8'});
        if (file.length<1) return;
        client.say(channel, `@${tags.username}, ${file}`);
    }
}