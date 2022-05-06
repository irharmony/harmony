module.exports = ({ message, Emotes, args, Discord }) => {
    if (!message.member.permissions.has(Discord.Permissions.FLAGS.ADMINISTRATOR)) return message.reply(Emotes.Error + ' You Dont Have Enough Permission');
    if (!args.length) return message.reply(`لطفا اسم بکس رو وارد کنید !`);
    message.guild.roles.create({
        name: args.join(" "), reason: `Created By ${message.author.username}`,
    }).then(r =>
        message.guild.channels.create('═══════• ' + r.name + ' •═══════', {
            type: 'GUILD_CATEGORY',
            permissionOverwrites: [
                {
                    id: message.guild.id,
                    deny: ['VIEW_CHANNEL', 'MANAGE_CHANNELS', 'MANAGE_WEBHOOKS', 'MANAGE_MESSAGES', 'VIEW_CHANNEL', 'CONNECT', 'MUTE_MEMBERS', 'MOVE_MEMBERS', 'DEAFEN_MEMBERS', 'MENTION_EVERYONE'],
                },
                {
                    id: r.id,
                    allow: ['VIEW_CHANNEL', 'CONNECT', 'EMBED_LINKS', 'ATTACH_FILES', 'ADD_REACTIONS', 'USE_EXTERNAL_EMOJIS', 'READ_MESSAGE_HISTORY', 'CONNECT', 'SPEAK', 'STREAM'],
                    deny: ['MANAGE_CHANNELS', 'MANAGE_WEBHOOKS', 'MENTION_EVERYONE', 'MANAGE_MESSAGES', 'MOVE_MEMBERS', 'MUTE_MEMBERS', 'DEAFEN_MEMBERS']
                },
                {
                    id: "889790617327108106",
                    allow: ['VIEW_CHANNEL', 'CONNECT', 'EMBED_LINKS', 'ATTACH_FILES', 'ADD_REACTIONS', 'USE_EXTERNAL_EMOJIS', 'READ_MESSAGE_HISTORY', 'CONNECT', 'SPEAK', 'STREAM', 'MANAGE_CHANNELS', 'MANAGE_WEBHOOKS', 'MENTION_EVERYONE', 'MANAGE_MESSAGES', 'MOVE_MEMBERS', 'MUTE_MEMBERS', 'DEAFEN_MEMBERS']
                },
                {
                    id: '969139461361381376',
                    allow: ['VIEW_CHANNEL', 'CONNECT', 'EMBED_LINKS', 'ATTACH_FILES', 'ADD_REACTIONS', 'USE_EXTERNAL_EMOJIS', 'READ_MESSAGE_HISTORY', 'CONNECT', 'SPEAK', 'STREAM', 'MANAGE_CHANNELS', 'MANAGE_WEBHOOKS', 'MENTION_EVERYONE', 'MANAGE_MESSAGES', 'MOVE_MEMBERS', 'MUTE_MEMBERS', 'DEAFEN_MEMBERS']
                },
                {
                    id: '899049721971220511',
                    deny: ['VIEW_CHANNEL'],
                },
                {
                    id: '933684801158909982',
                    deny: ['VIEW_CHANNEL'],
                },
                {
                    id: '899049707828047893',
                    allow: ['VIEW_CHANNEL', 'CONNECT', 'SPEAK']
                },
                {
                    id: '943726829074800643',
                    deny: ['VIEW_CHANNEL']
                },
                {
                    id: '943726830068854824',
                    deny: ['VIEW_CHANNEL']
                }
            ]
        }),
    ).then((category) => {
        message.guild.channels.create(`┌💬│ᴄʜᴀᴛ ʀᴏᴏᴍ⌟`, {
            type: "GUILD_TEXT",
            parent: category.id,
        }).then((c) => (harmonyCategory = c.id));

        message.guild.channels.create(`│🤖│ᴍᴜꜱɪᴄ ꜱᴇᴀʀᴄʜ⌟`, {
            type: "GUILD_TEXT",
            parent: category.id,
        })
        message.guild.channels.create(`│🕯️│ᴩᴜʙʟɪᴄ ʜᴀʟʟ`, {
            type: "GUILD_VOICE",
            parent: category.id,
        })
        message.guild.channels.create(`│🍹│ʜᴏᴜꜱᴇ ʜᴏʟᴅ`, {
            type: "GUILD_VOICE",
            parent: category.id,
        })
        message.guild.channels.create(`└🔒│ᴩʀɪᴠᴀᴛᴇ ʀᴏᴏᴍ`, {
            type: "GUILD_VOICE",
            parent: category.id,
        }).then(() => {
            message.reply(`بکس **${args.join(" ")}** با موفقیت ساخته شد | <#${harmonyCategory}> ${Emotes.Tick}`);
        });
    })
}