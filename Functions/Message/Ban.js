module.exports = ({ message, readFile, Discord, ServerBanRole, args,reasons }) => {
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
                    { name: 'به دلیله', value: reasons.seven, inline: false },
                    { name: 'توضیحات اضافه', value: args.join(" "), inline: false },
                )

            message.guild.channels.cache.get('899050010950389800').send({ embeds: [logmsg] })
            BanUser.roles.add(BanRole);
            BanUser.setNickname(reasons.seven)
            message.reply(`Added the role **Server Ban** to ${BanUser} by <@${message.author.id}>.`)
        }
        
        
        if (args[1] === '8') {

            const logmsg = new Discord.MessageEmbed()
                .setColor('GREEN')
                .addFields(
                    { name: 'توسط', value: `<@${message.author.id}>`, inline: true },
                    { name: 'به', value: `${BanUser}`, inline: true },
                    { name: 'به دلیله', value: reasons.eight, inline: false },
                    { name: 'توضیحات اضافه', value: args.join(" "), inline: false },
                )

            message.guild.channels.cache.get('899050010950389800').send({ embeds: [logmsg] })
            BanUser.roles.add(BanRole);
            BanUser.setNickname(reasons.eight)
            message.reply(`Added the role **Server Ban** to ${BanUser} by <@${message.author.id}>.`)
        }
    }
}
