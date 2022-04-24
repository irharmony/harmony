const Discord = require("discord.js")
const client = new Discord.Client({ intents: [Discord.Intents.FLAGS.GUILDS, Discord.Intents.FLAGS.GUILD_MESSAGES, Discord.Intents.FLAGS.GUILD_VOICE_STATES] })

const { token, Prefix, Emotes, ChannelsID } = require("./data/config.json")
client.login(token)

const fs = require('fs')

const embedmsg = new Discord.MessageEmbed()
client.commands = new Discord.Collection()
client.aliases = new Discord.Collection()

console.log('------------- LOADING COMMANDS -------------');
fs.readdir("./commands", (err, files) => {
    if (err) return console.log("Could not find any commands!")
    const jsFiles = files.filter(f => f.split(".").pop() === "js")
    if (jsFiles.length <= 0) return console.log("Could not find any commands!")
    jsFiles.forEach(file => {
        const cmd = require(`./commands/${file}`)
        console.log(`Loaded ${file}`)
        client.commands.set(cmd.name, cmd)
        if (cmd.aliases) cmd.aliases.forEach(alias => client.aliases.set(alias, cmd.name))
    })
})

console.log('-------------- LOADING EVENTS --------------');
const eventFiles = fs.readdirSync('./events').filter(file => file.endsWith('.js'));
for (const file of eventFiles) {
    const event = require(`./events/${file}`);
    if (event.once) {
        client.once(event.name, (...args) => event.execute(...args));
    } else {
        client.on(event.name, (...args) => event.execute(...args));
    }
    console.log((event.name + ' LOADED'));
}

client.on("messageCreate", async message => {
    if (message.author.bot || !message.guild) return
    if (!message.content.startsWith(Prefix)) return
    const args = message.content.slice(Prefix.length).trim().split(/ +/g)
    const command = args.shift().toLowerCase()
    const cmd = client.commands.get(command) || client.commands.get(client.aliases.get(command))

    if (!cmd) return

    try {
        cmd.run(client, message, args)
    } catch (e) {
        embedmsg.setTitle(`${Emotes.Error} | Error:`)
        embedmsg.setColor('YELLOW')
        embedmsg.setDescription('```js\n' + e + '\n```')
        embedmsg.setTimestamp()
        client.channels.cache.get(ChannelsID.ErrLog).send({ embeds: [embedmsg] })
        message.channel.send({ embeds: [embedmsg] })
    }
})


process.on('unhandledRejection', err => {
    console.log(err);
});


