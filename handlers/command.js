const { readdirSync } = require('fs');
const ascii = require('ascii-table');
const table = new ascii().setHeading('Command', 'Status');

module.exports = (client) => {
    const commands = readdirSync(`./commands`).filter(f => f.endsWith('.js'));

    for (let file of commands) {
        let cmd = require(`../commands/${file}`);

        if (cmd.name && typeof cmd.execute === 'function') {
            client.commands.set(cmd.name, cmd);
            table.addRow(file, '✅ Loaded!');
        } else {
            table.addRow(file, '❌ -> Command failed to load, please check your work again!');
            continue;
        }

        if (cmd.aliases && Array.isArray(cmd.aliases))
            cmd.aliases.forEach(alias => {
                return client.aliases.set(alias, cmd.name);
            });
    }

    console.log(table.toString());
}