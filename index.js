const Discord = require("discord.js")
const client = new Discord.Client({ intents: [Discord.Intents.FLAGS.GUILDS, Discord.Intents.FLAGS.GUILD_MESSAGES, Discord.Intents.FLAGS.GUILD_VOICE_STATES] })

const { token } = require("./data/config.json")
client.login(token)

const chalk = require('chalk')

const { readdirSync } = require('fs')

console.log(chalk.red('-------------- LOADING EVENTS --------------'));
const eventFiles = readdirSync('./events').filter(file => file.endsWith('.js'));
for (const file of eventFiles) {
    const event = require(`./events/${file}`);
    if (event.once) {
        client.once(event.name, (...args) => event.execute(...args));
    } else {
        client.on(event.name, (...args) => event.execute(...args));
    }
    console.log(chalk.blue(event.name + ' LOADED'));
}

process.on('unhandledRejection', err => {
    console.log(err);
});