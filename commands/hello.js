module.exports = {
    name: 'hello',
    execute: async (client, channel, tags, message, self, args) => {
        client.say(channel, `@${tags.username}, heya!`);
    }
}