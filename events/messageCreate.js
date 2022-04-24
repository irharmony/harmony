const Discord = require("discord.js")
const { Prefix, Emotes, OWNER, ChannelsID, ServerBanRole } = require("../data/config.json")
const reasons = require('../data/reason.json')
const { inspect } = require('util');
const { readFile } = require('fs')

module.exports = {
    name: 'messageCreate',
    async execute(message, client) {
        if (!message.content.startsWith(Prefix) || message.author.bot) return;

        const args = message.content.slice(Prefix.length).trim().split(' ');
        const command = args.shift().toLowerCase();

        if (command === 'eval') {
            if (OWNER.includes(message.author.id)) {
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
            } else {
                return message.reply(Emotes.Error + ' You Dont Have Enough Permission');
            }
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
                message.guild.channels.cache.get('901665723552788521').send({ content: `<@${message.author.id}>`, embeds: [bugembed] })
                    .then(embedMessage => {
                        embedMessage.react('👍');
                        embedMessage.react('👎');
                    })
            }
            else {
                message.reply(`این دستور تنها در چنل <#${ChannelsID.BugChannel}> دردسترس است`).then(message.react('❌'));
            }
        }


        if (command === 'ban') {
            if (message.member.roles.cache.find(r => r.id === '930971681441325117') || message.member.roles.cache.find(r => r.id === '899049712294965329')) {
                let BanRole = message.guild.roles.cache.get(ServerBanRole);
                let BanUser = message.mentions.members.first();
                if (!BanUser) return message.reply("Please Mention Someone Else!").then((declineMsg) => {

                    declineMsg.delete({ timeout: 5000 });
                });

                if (!args[1]) {
                    readFile('./data/reason.json', 'utf8', function (err, contents) {
                        const banhelptable = new Discord.MessageEmbed()
                            .setColor('RED')
                            .setTitle('لطفا یکی از متغییر ها را تعریف کنید')
                            .setDescription('```json\n' + contents + '\n```')
                        message.reply({ embeds: [banhelptable] })
                    })
                }

                if (args[1] === '1') {
                    const logmsg = new Discord.MessageEmbed()
                        .setColor('GREEN')
                        .addFields(
                            { name: 'توسط', value: `<@${message.author.id}>`, inline: true },
                            { name: 'به', value: `${BanUser}`, inline: true },
                            { name: 'به دلیله', value: reasons.one, inline: false },
                            { name: 'توضیحات اضافه', value: args.join(" "), inline: false },
                        )

                    message.guild.channels.cache.get('899050010950389800').send({ embeds: [logmsg] })
                    BanUser.roles.add(BanRole);
                    BanUser.setNickname(reasons.one)
                    message.reply(`Added the role **Server Ban** to ${BanUser} by <@${message.author.id}>.`)
                }


                if (args[1] === '2') {
                    const logmsg = new Discord.MessageEmbed()
                        .setColor('GREEN')
                        .addFields(
                            { name: 'توسط', value: `<@${message.author.id}>`, inline: true },
                            { name: 'به', value: `${BanUser}`, inline: true },
                            { name: 'به دلیله', value: reasons.two, inline: false },
                            { name: 'توضیحات اضافه', value: args.join(" "), inline: false },
                        )

                    message.guild.channels.cache.get('899050010950389800').send({ embeds: [logmsg] })
                    BanUser.roles.add(BanRole);
                    BanUser.setNickname(reasons.two)
                    message.reply(`Added the role **Server Ban** to ${BanUser} by <@${message.author.id}>.`)
                }

                if (args[1] === '3') {
                    const logmsg = new Discord.MessageEmbed()
                        .setColor('GREEN')
                        .addFields(
                            { name: 'توسط', value: `<@${message.author.id}>`, inline: true },
                            { name: 'به', value: `${BanUser}`, inline: true },
                            { name: 'به دلیله', value: reasons.three, inline: false },
                            { name: 'توضیحات اضافه', value: args.join(" "), inline: false },
                        )

                    message.guild.channels.cache.get('899050010950389800').send({ embeds: [logmsg] })
                    BanUser.roles.add(BanRole);
                    BanUser.setNickname(reasons.three)
                    message.reply(`Added the role **Server Ban** to ${BanUser} by <@${message.author.id}>.`)
                }

                if (args[1] === '4') {
                    const logmsg = new Discord.MessageEmbed()
                        .setColor('GREEN')
                        .addFields(
                            { name: 'توسط', value: `<@${message.author.id}>`, inline: true },
                            { name: 'به', value: `${BanUser}`, inline: true },
                            { name: 'به دلیله', value: reasons.four, inline: false },
                            { name: 'توضیحات اضافه', value: args.join(" "), inline: false },
                        )

                    message.guild.channels.cache.get('899050010950389800').send({ embeds: [logmsg] })
                    BanUser.roles.add(BanRole);
                    BanUser.setNickname(reasons.four)
                    message.reply(`Added the role **Server Ban** to ${BanUser} by <@${message.author.id}>.`)
                }

                if (args[1] === '5') {
                    const logmsg = new Discord.MessageEmbed()
                        .setColor('GREEN')
                        .addFields(
                            { name: 'توسط', value: `<@${message.author.id}>`, inline: true },
                            { name: 'به', value: `${BanUser}`, inline: true },
                            { name: 'به دلیله', value: reasons.five, inline: false },
                            { name: 'توضیحات اضافه', value: args.join(" "), inline: false },
                        )

                    message.guild.channels.cache.get('899050010950389800').send({ embeds: [logmsg] })
                    BanUser.roles.add(BanRole);
                    BanUser.setNickname(reasons.five)
                    message.reply(`Added the role **Server Ban** to ${BanUser} by <@${message.author.id}>.`)
                }

                if (args[1] === '6') {
                    const logmsg = new Discord.MessageEmbed()
                        .setColor('GREEN')
                        .addFields(
                            { name: 'توسط', value: `<@${message.author.id}>`, inline: true },
                            { name: 'به', value: `${BanUser}`, inline: true },
                            { name: 'به دلیله', value: reasons.six, inline: false },
                            { name: 'توضیحات اضافه', value: args.join(" "), inline: false },
                        )

                    message.guild.channels.cache.get('899050010950389800').send({ embeds: [logmsg] })
                    BanUser.roles.add(BanRole);
                    BanUser.setNickname(reasons.six)
                    message.reply(`Added the role **Server Ban** to ${BanUser} by <@${message.author.id}>.`)
                }


                if (args[1] === '7') {

                    const logmsg = new Discord.MessageEmbed()
                        .setColor('GREEN')
                        .addFields(
                            { name: 'توسط', value: `<@${message.author.id}>`, inline: true },
                            { name: 'به', value: `${BanUser}`, inline: true },
                            { name: 'به دلیله', value: res.other, inline: false },
                            { name: 'توضیحات اضافه', value: args.join(" "), inline: false },
                        )

                    message.guild.channels.cache.get('899050010950389800').send({ embeds: [logmsg] })
                    BanUser.roles.add(BanRole);
                    BanUser.setNickname(res.other)
                    message.reply(`Added the role **Server Ban** to ${BanUser} by <@${message.author.id}>.`)
                }
            }
        }


        if (message.content.startsWith(`${Prefix}unban`)) {

            if (message.member.roles.cache.find(r => r.id === '930971681441325117') || message.member.roles.cache.find(r => r.id === '899049712294965329')) {
                let BanRole = message.guild.roles.cache.get(ServerBanRole);
                let BanUser = message.mentions.members.first();
                if (!BanUser) return message.reply("Please Mention Someone Else!").then((declineMsg) => { declineMsg.delete({ timeout: 5000 }); });

                BanUser.roles.remove(BanRole);
                BanUser.setNickname(BanUser.user.username)
                message.reply(`Removed the role **Server Ban** from ${BanUser} by <@${message.author.id}>.`)
            }
        }

        // ------------------------------------

        if (message.channel.id === ChannelsID.Channels.bot) {
            message.react('🤖')
        }
        if (message.channel.id === ChannelsID.Channels.meme) {
            message.react('😂')
            message.react('😐')
        }
        if (message.channel.id === ChannelsID.Channels.challenge) {
            message.react('🥇')
            message.react('✔️')
        }
        if (message.channel.id === ChannelsID.Channels.fun) {
            message.react('😂')
            message.react('😐')
        }
        if (message.channel.id === ChannelsID.Channels.lovely) {
            message.react('💖')
            message.react('💔')
        }
        if (message.channel.id === ChannelsID.Channels.adult_post) {
            message.react('🔞')
        }
        if (message.channel.id === ChannelsID.Channels.grate_post) {
            message.react('🧒')
        }
        if (message.channel.id === ChannelsID.Channels.food) {
            message.react('🍔')
        }
        if (message.channel.id === ChannelsID.Channels.speak_your_heart) {
            message.react('🖤')
        }
        if (message.channel.id === ChannelsID.Channels.ig) {
            message.react('✔️')
        }
        if (message.channel.id === ChannelsID.Channels.shop) {
            message.react('💰')
        }
        if (message.channel.id === ChannelsID.Channels.soti) {
            message.react('😂')
            message.react('😐')
        }
    },
};