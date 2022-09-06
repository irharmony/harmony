const Discord = require("discord.js")
const client = new Discord.Client({ intents: [Discord.Intents.FLAGS.GUILDS, Discord.Intents.FLAGS.GUILD_MESSAGES, Discord.Intents.FLAGS.GUILD_VOICE_STATES] })

const { token } = require("./data/config.json")
client.login(token)

const { readdirSync } = require('fs')

console.log('-------------- LOADING EVENTS --------------');
const eventFiles = readdirSync('./events').filter(file => file.endsWith('.js'));
for (const file of eventFiles) {
    const event = require(`./events/${file}`);
    if (event.once) {
        client.once(event.name, (...args) => event.execute(...args));
    } else {
        client.on(event.name, (...args) => event.execute(...args));
    }
    console.log(event.name + ' LOADED');
}
console.log('-------------- LOADING READY FUNCTIONS --------------');
const RFunctionFiles = readdirSync('./Functions/Ready').filter(file => file.endsWith('.js'));
for (const file of RFunctionFiles) {
    console.log(file + ' LOADED');
}
console.log('-------------- LOADING MESSAGE FUNCTIONS --------------');
const MFunctionFiles = readdirSync('./Functions/Message').filter(file => file.endsWith('.js'));
for (const file of MFunctionFiles) {
    console.log(file + ' LOADED');
}

process.on('unhandledRejection', err => {
    console.log(err);
});