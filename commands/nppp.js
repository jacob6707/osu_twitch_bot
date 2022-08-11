const { COMMAND_PREFIX, STREAMCOMPANION_PATH } = require('../util/env');
const fs = require('fs');

module.exports = {
    name: 'nppp',
    usage: `${COMMAND_PREFIX}nppp`,
    execute: async (client, channel, tags, message, self, args) => {
        const file = fs.readFileSync(`${STREAMCOMPANION_PATH}\\nppp.txt`, {encoding: 'utf-8'});
        if (file.length<1) return;
        client.say(channel, `@${tags.username}, ${file}`);
    }
}