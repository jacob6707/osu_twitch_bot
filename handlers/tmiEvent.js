const fs = require('fs');

module.exports = (client) => {
    fs.readdir('./events/tmi/', (err, files) => {
        if (err) return console.error;
        files.forEach(file => {
            if (!file.endsWith('.js')) return;
            const evt = require(`../events/tmi/${file}`);
            let evtName = file.split('.')[0];
            console.log(`Loaded event '${evtName}'`);
            client.on(evtName, evt.bind(client));
        });
    });
}