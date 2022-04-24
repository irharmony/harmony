const Discord = require("discord.js")
const client = new Discord.Client({ intents: [Discord.Intents.FLAGS.GUILDS, Discord.Intents.FLAGS.GUILD_MESSAGES, Discord.Intents.FLAGS.GUILD_VOICE_STATES] })

const { token } = require("./data/config.json")
client.login(token)

const fs = require('fs')

// fs.readdir("./commands", (err, files) => {
//     if (err) return console.log("Could not find any commands!")
//     const jsFiles = files.filter(f => f.split(".").pop() === "js")
//     if (jsFiles.length <= 0) return console.log("Could not find any commands!")
//     jsFiles.forEach(file => {
//         const cmd = require(`./commands/${file}`)
//         console.log(`Loaded ${file}`)
//         client.commands.set(cmd.name, cmd)
//         if (cmd.aliases) cmd.aliases.forEach(alias => client.aliases.set(alias, cmd.name))
//     })
// })

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

// client.on("messageCreate", async message => {
//     if (message.author.bot || !message.guild) return
//     const prefix = client.config.prefix
//     if (!message.content.startsWith(prefix)) return
//     const args = message.content.slice(prefix.length).trim().split(/ +/g)
//     const command = args.shift().toLowerCase()
//     const cmd = client.commands.get(command) || client.commands.get(client.aliases.get(command))

//     if (!cmd) return
//     if (cmd.inVoiceChannel && !message.member.voice.channel) {
//         embedmsg.setTitle(`${client.emotes.error} | You must be in a voice channel!`)
//         embedmsg.setColor('#f67975')
//         return message.channel.send({ embeds: [embedmsg] })
//     }
//     try {
//         cmd.run(client, message, args)
//     } catch (e) {
//         embedmsg.setTitle(`${client.emotes.error} | Error:`)
//         embedmsg.setColor('YELLOW')
//         embedmsg.setDescription('```js\n' + e + '\n```')
//         embedmsg.setTimestamp()
//         client.channels.cache.get(client.config.log).send({ embeds: [embedmsg] })
//         message.channel.send(`${client.emotes.error} | SomeThing Went Wrong`)
//     }
// })

process.on('unhandledRejection', err => {
    console.log(err);
});


