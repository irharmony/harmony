module.exports = ({ message, Emotes, args, Discord }) => {
    if (!message.member.permissions.has(Discord.Permissions.FLAGS.ADMINISTRATOR)) return message.reply(Emotes.Error + ' You Dont Have Enough Permission');
    if (!args.length) return message.reply(`لطفا اسم بکس رو وارد کنید !`);
    harmony.roles.create({
        data: {
            name: args.join(" "),
        },
        reason: `Created By ${message.user.tag}`,
    }).then(r =>
        harmony.channels.create('═══════• ' + r.name + ' •═══════', {
            type: 'category',
            permissionOverwrites: [
                {
                    id: harmony.id,
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
                    id: '899049713087680512',
                    allow: ['VIEW_CHANNEL', 'CONNECT', 'SPEAK', 'MOVE_MEMBERS', 'DEAFEN_MEMBERS', 'MANAGE_CHANNELS', 'MANAGE_MESSAGES']
                },
                {
                    id: '899049721971220511',
                    deny: ['VIEW_CHANNEL'],
                },
                {
                    id: '899049713809100810',
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
                },
                {
                    id: '961876249804955648',
                    deny: ['VIEW_CHANNEL']
                },
                {
                    id: '930963052457787403',
                    allow: [
                        'CREATE_INSTANT_INVITE',
                        'KICK_MEMBERS',
                        'BAN_MEMBERS',
                        'ADMINISTRATOR',
                        'MANAGE_CHANNELS',
                        'MANAGE_GUILD',
                        'ADD_REACTIONS',
                        'VIEW_AUDIT_LOG',
                        'PRIORITY_SPEAKER',
                        'STREAM',
                        'VIEW_CHANNEL',
                        'SEND_MESSAGES',
                        'SEND_TTS_MESSAGES',
                        'MANAGE_MESSAGES',
                        'EMBED_LINKS',
                        'ATTACH_FILES',
                        'READ_MESSAGE_HISTORY',
                        'MENTION_EVERYONE',
                        'USE_EXTERNAL_EMOJIS',
                        'VIEW_GUILD_INSIGHTS',
                        'CONNECT',
                        'SPEAK',
                        'MUTE_MEMBERS',
                        'DEAFEN_MEMBERS',
                        'MOVE_MEMBERS',
                        'USE_VAD',
                        'CHANGE_NICKNAME',
                        'MANAGE_NICKNAMES',
                        'MANAGE_ROLES',
                        'MANAGE_WEBHOOKS',
                        'MANAGE_EMOJIS'
                    ]
                }
            ]
        }),
    ).then(r =>
        harmony.channels.create('┌💬│ᴄʜᴀᴛ ʀᴏᴏᴍ⌟', {
            type: 'text',
            parent: r.id
        })).then(r =>
            harmony.channels.create('│🤖│ᴍᴜꜱɪᴄ ꜱᴇᴀʀᴄʜ⌟', {
                type: 'text',
                parent: r.parentID,
            }))
        .then(r =>
            harmony.channels.create('│🕯️│ᴩᴜʙʟɪᴄ ʜᴀʟʟ', {
                type: 'voice',
                parent: r.parentID,
            })).then(r =>
                harmony.channels.create('│🍹│ʜᴏᴜꜱᴇ ʜᴏʟᴅ', {
                    type: 'voice',
                    parent: r.parentID,
                })).then(r =>
                    harmony.channels.create('└🔒│ᴩʀɪᴠᴀᴛᴇ ʀᴏᴏᴍ', {
                        type: 'voice',
                        parent: r.parentID,
                    })).then(message.inlineReply('Section Is Ready'))
}