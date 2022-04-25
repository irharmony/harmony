const Discord = require("discord.js")
const { Prefix, Emotes, OWNER, ChannelsID, ServerBanRole } = require("../data/config.json")
const reasons = require('../data/reason.json')
const { inspect } = require('util');
const { readFile } = require('fs')
const functions = require('../Functions/handler')

module.exports = {
    name: 'messageCreate',
    async execute(message) {
        if (!message.content.startsWith(Prefix) || message.author.bot) return;

        const args = message.content.slice(Prefix.length).trim().split(' ');
        const command = args.shift().toLowerCase();

        if (command === 'eval') {
            functions.Eval({ Discord, message, args, OWNER, inspect, Emotes })
        }

        if (command === 'verify' || command === 'new') {
            functions.New({ message, ChannelsID, Emotes })
        }

        if (command === 'bug') {
            functions.Bug({ message, ChannelsID, args })
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


// if (command === 'bax') {
//     if (!message.member.hasPermission("ADMINISTRATOR")) return message.inlineReply("🤙");
//     if (!args.length) {
//         return message.inlineReply(`لطفا اسم بکس رو وارد کنید ${message.author}!`);
//     }

//     harmony.roles.create({
//         data: {
//             name: args.join(" "),
//         },
//         reason: `Created By ${message.author}`,
//     }).then(r =>
//         harmony.channels.create('═══════• ' + r.name + ' •═══════', {
//             type: 'category',
//             permissionOverwrites: [
//                 {
//                     id: harmony.id,
//                     deny: ['VIEW_CHANNEL', 'MANAGE_CHANNELS', 'MANAGE_WEBHOOKS', 'MANAGE_MESSAGES', 'VIEW_CHANNEL', 'CONNECT', 'MUTE_MEMBERS', 'MOVE_MEMBERS', 'DEAFEN_MEMBERS', 'MENTION_EVERYONE'],
//                 },
//                 {
//                     id: r.id,
//                     allow: ['VIEW_CHANNEL', 'CONNECT', 'EMBED_LINKS', 'ATTACH_FILES', 'ADD_REACTIONS', 'USE_EXTERNAL_EMOJIS', 'READ_MESSAGE_HISTORY', 'CONNECT', 'SPEAK', 'STREAM'],
//                     deny: ['MANAGE_CHANNELS', 'MANAGE_WEBHOOKS', 'MENTION_EVERYONE', 'MANAGE_MESSAGES', 'MOVE_MEMBERS', 'MUTE_MEMBERS', 'DEAFEN_MEMBERS']
//                 },
//                 {
//                     id: "889790617327108106",
//                     allow: ['VIEW_CHANNEL', 'CONNECT', 'EMBED_LINKS', 'ATTACH_FILES', 'ADD_REACTIONS', 'USE_EXTERNAL_EMOJIS', 'READ_MESSAGE_HISTORY', 'CONNECT', 'SPEAK', 'STREAM', 'MANAGE_CHANNELS', 'MANAGE_WEBHOOKS', 'MENTION_EVERYONE', 'MANAGE_MESSAGES', 'MOVE_MEMBERS', 'MUTE_MEMBERS', 'DEAFEN_MEMBERS']
//                 },
//                 {
//                     id: '899049713087680512',
//                     allow: ['VIEW_CHANNEL', 'CONNECT', 'SPEAK', 'MOVE_MEMBERS', 'DEAFEN_MEMBERS', 'MANAGE_CHANNELS', 'MANAGE_MESSAGES']
//                 },
//                 {
//                     id: '899049721971220511',
//                     deny: ['VIEW_CHANNEL'],
//                 },
//                 {
//                     id: '899049713809100810',
//                     deny: ['VIEW_CHANNEL'],
//                 },
//                 {
//                     id: '933684801158909982',
//                     deny: ['VIEW_CHANNEL'],
//                 },
//                 {
//                     id: '899049707828047893',
//                     allow: ['VIEW_CHANNEL', 'CONNECT', 'SPEAK']
//                 },
//                 {
//                     id: '943726829074800643',
//                     deny: ['VIEW_CHANNEL']
//                 },
//                 {
//                     id: '943726830068854824',
//                     deny: ['VIEW_CHANNEL']
//                 },
//                 {
//                     id:'961876249804955648',
//                     deny:['VIEW_CHANNEL']
//                 },
//                 {
//                     id: '930963052457787403',
//                     allow: [
//                         'CREATE_INSTANT_INVITE',
//                         'KICK_MEMBERS',
//                         'BAN_MEMBERS',
//                         'ADMINISTRATOR',
//                         'MANAGE_CHANNELS',
//                         'MANAGE_GUILD',
//                         'ADD_REACTIONS',
//                         'VIEW_AUDIT_LOG',
//                         'PRIORITY_SPEAKER',
//                         'STREAM',
//                         'VIEW_CHANNEL',
//                         'SEND_MESSAGES',
//                         'SEND_TTS_MESSAGES',
//                         'MANAGE_MESSAGES',
//                         'EMBED_LINKS',
//                         'ATTACH_FILES',
//                         'READ_MESSAGE_HISTORY',
//                         'MENTION_EVERYONE',
//                         'USE_EXTERNAL_EMOJIS',
//                         'VIEW_GUILD_INSIGHTS',
//                         'CONNECT',
//                         'SPEAK',
//                         'MUTE_MEMBERS',
//                         'DEAFEN_MEMBERS',
//                         'MOVE_MEMBERS',
//                         'USE_VAD',
//                         'CHANGE_NICKNAME',
//                         'MANAGE_NICKNAMES',
//                         'MANAGE_ROLES',
//                         'MANAGE_WEBHOOKS',
//                         'MANAGE_EMOJIS'
//                     ]
//                 }
//             ]
//         }),
//     ).then(r =>
//         harmony.channels.create('┌💬│ᴄʜᴀᴛ ʀᴏᴏᴍ⌟', {
//             type: 'text',
//             parent: r.id
//         })).then(r =>
//             harmony.channels.create('│🤖│ᴍᴜꜱɪᴄ ꜱᴇᴀʀᴄʜ⌟', {
//                 type: 'text',
//                 parent: r.parentID,
//             }))
//         .then(r =>
//             harmony.channels.create('│🕯️│ᴩᴜʙʟɪᴄ ʜᴀʟʟ', {
//                 type: 'voice',
//                 parent: r.parentID,
//             })).then(r =>
//                 harmony.channels.create('│🍹│ʜᴏᴜꜱᴇ ʜᴏʟᴅ', {
//                     type: 'voice',
//                     parent: r.parentID,
//                 })).then(r =>
//                     harmony.channels.create('└🔒│ᴩʀɪᴠᴀᴛᴇ ʀᴏᴏᴍ', {
//                         type: 'voice',
//                         parent: r.parentID,
//                     })).then(message.inlineReply('Section Is Ready'))
// }