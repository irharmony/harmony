const Discord = require("discord.js")
const { Prefix, Emotes, OWNER } = require("../data/config.json")

module.exports = {
    name: 'messageCreate',
    execute(message) {
        if (!message.content.startsWith(Prefix) || message.author.bot) return;

        const args = message.content.slice(Prefix.length).trim().split(' ');
        const command = args.shift().toLowerCase();

        if (OWNER.includes(message.author.id)) {
            if (command === 'eval') {
                if (!args.length) return;
                let evaled;
                try {
                    evaled = await eval(args.join(" "));
                    let evalend = new Discord.MessageEmbed()
                        .setTitle('Eval Result : ')
                        .setDescription('INPUT :\n```js\n' + args.join(" ") + '\n```\nOUTPUT :\n```js\n' + inspect(evaled) + '\n```')
                        .setColor("GREEN")
                    message.reply({ embeds: [evalend] })
                }
                catch (error) {
                    let evalerr = new Discord.MessageEmbed()
                        .setTitle('Thre Was An Error : ')
                        .setDescription('```js\n' + error + '```')
                        .setColor("red")
                    message.reply({ embeds: [evalerr] })
                }
            }
        } else {
            return message.inlineReply(Emotes.Error + ' You Dont Have Enough Permission');
        }
    },
};