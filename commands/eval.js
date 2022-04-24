const Discord = require("discord.js")
const { Emotes } = require("../data/config.json")
const { inspect } = require('util');

module.exports = {
    name: "eval",
    des: "run any code",
    aliases: [],
    run: async (message, args) => {
        // const args = message.content.split(' ');

        if (message.author.id === '490519932292038659' || message.author.id === '916076947157684234' || message.author.id === '220895537207967744' || message.author.id === '925824559804977262') {
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
        } else {
            return message.inlineReply(Emotes.Error + ' You Dont Have Enough Permission');
        }

    }
}
