const { COMMAND_PREFIX, STREAMCOMPANION_PATH } = require('../util/env');
const fs = require('fs');

module.exports = {
    name: 'np',
    usage: `${COMMAND_PREFIX}np`,
    execute: async (client, channel, tags, message, self, args) => {
        if (fs.existsSync(`${STREAMCOMPANION_PATH}/np.txt`)) {
            const file = fs.readFileSync(`${STREAMCOMPANION_PATH}\\np.txt`, {encoding: 'utf-8'});
            if (file.length<1) return;
            client.say(channel, `@${tags.username}, ${file}`);
        }
    }
}