module.exports = ({ message, ChannelsID, args }) => {
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