const Discord = require("discord.js")
const { Prefix, Emotes, OWNER, ChannelsID } = require("../data/config.json")
const { inspect } = require('util');

module.exports = {
    name: 'messageCreate',
    async execute(message, client) {
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
            return message.guild.channels.cache.get(ChannelsID.VerifyID).send(`یک کاربر در ویس منتظر ادمین هست\nUserTag : ${message.author.tag}\nMention : <@${message.author.id}>`)
        }

        if (command === 'bug') {
            if (message.channel.id === ChannelsID.BugChannel) {
                if (!args.length) return;
                message.react('✅')
                const bugembed = new Discord.MessageEmbed()
                    .setColor('RED')
                    .setTitle('باگ گزارش شده توسط : ' + message.author.username)
                    .setThumbnail(message.author.displayAvatarURL({ size: 2048, dynamic: true }))
                    .setDescription(args.join(" "))
                    .setTimestamp()
                message.guild.channels.cache.get('901665723552788521').send('<@' + message.author.id + '>', { embed: bugembed })
                    .then(embedMessage => {
                        embedMessage.react('👍');
                        embedMessage.react('👎');
                    })
            }
            else {
                message.reply(`این دستور تنها در چنل <#${ChannelsID.BugChannel}> دردسترس است`).then(message.react('❌'));
            }

        }
    },
};