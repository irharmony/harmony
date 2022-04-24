const Discord = require("discord.js")
const { Prefix, Emotes, OWNER,ChannelsID } = require("../data/config.json")
const { inspect } = require('util');

module.exports = {
    name: 'messageCreate',
   async execute(message) {
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
                        .setColor("RED")
                    message.reply({ embeds: [evalerr] })
                }
            }
        } else {
            return message.reply(Emotes.Error + ' You Dont Have Enough Permission');
        }

        if (command === 'verify' || command === 'new') {
            message.reply(`${Emotes.Tick} | درخواست شما ثبت شد لطفا در ویس های موجود منتظر ادمین باشید`)
            return client.channels.cache.get(ChannelsID.VerifyID).send(`یک کاربر در ویس منتظر ادمین هست\nUserTag : ${message.author.tag}\n Mention : <@${message.author.id}>`)
        }
    },
};