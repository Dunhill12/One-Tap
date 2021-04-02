const { Client, Collection } = require("discord.js");
const { token, prefix } = require("./config");
const client = new Client({ partials: ['MESSAGE', 'CHANNEL', 'REACTION'] });
const fs = require("fs");

client.prefix = prefix



fs.readdir("./events/", (err, files) => {
    if(err) return console.error;
    files.forEach(file => {
        if(!file.endsWith(".js")) return undefined;
        const event = require(`./events/${file}`);
        const eventName = file.split(".")[0];
        console.log(`Event: ${eventName} loaded`);
        client.on(eventName, event.bind(null, client));
    });
});

client.commands = new Collection();
fs.readdir("./commands/", (err, files) => {
    if(err) return console.error;
    files.forEach(file => {
        if(!file.endsWith(".js")) return undefined;
        const props = require(`./commands/${file}`);
        const cmdName = file.split(".")[0];
        console.log(`Command: ${cmdName} loaded`);
        client.commands.set(cmdName, props);
    });
});

client.on("error", console.error);
client.on("warn", console.warn);
//client.on("debug", console.debug);





client.login(token);