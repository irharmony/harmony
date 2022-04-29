const logs = require('discord-logs');
logs(client);


module.exports = {
    name: 'guildMemberUpdate',
    async execute(oldMember,newMember) {
    // let difference = oldMember._roles.filter(x => !newMember._roles.includes(x));
    let entry1 = await newMember.guild
        .fetchAuditLogs({
            type: "MEMBER_ROLE_UPDATE"
        })
        .then(audit => audit.entries.first());
    console.log(entry1)
    let us = entry1.executor;
    let tar = entry1.target;
    let role = entry1.changes[0].key;
    let executorInGuild = await newMember.guild.members.fetch(us.id);
    let uqmemberid = tar.id
    let uqmember = oldMember.guild.members.cache.get(uqmemberid)
    let uqrole = oldMember.guild.roles.cache.get("Quarantine Role") //@Quarantine Role
    let role_hand = oldMember.guild.roles.cache.get("Hiidein All Role") //Hidden All ||
    if (oldMember.roles.cache.get(uqrole.id)) {
        // Whitelist Wick & (Developer & Mechanism) Role
        if (newMember.id == "USER-ID" || newMember.roles.cache.get("Developer") || newMember.roles.cache.get("Mechansim") || newMember.roles.cache.get("Head") || newMember.roles.cache.get("Paramount")) {
            return console.log('Its Trusted User');
        }
        let embed = new Discord.MessageEmbed()
            .setColor("#ce0000")
            .setAuthor(oldMember.user.username, oldMember.user.avatarURL({ dynamic: true }))
            .addFields({
                name: "User :",
                value: `╰୨ ${executorInGuild.user.username} (${executorInGuild.id})`,
                inline: false
            }, {
                name: "Q member :",
                value: `╰୨ ${oldMember.user.username} (${uqmember.user.id})`,
                inline: false
            },
                //  {
                //     name: "Role",
                //     value: `╰୨ ${difference} (${chnagerole.id})`,
                //     inline: false
                // }
            )
            .setThumbnail(oldMember.guild.iconURL({
                dynamic: true
            }))
            .setFooter(client.user.username, client.user.avatarURL())
        let tarroles = newMember.roles.cache
        let exroles = executorInGuild.roles.cache
        client.channels.cache.get("Log Channel").send({ embeds: [embed] }).catch((e) => { //Log Channel
            console.log(e)
        })
        await executorInGuild.roles.remove(exroles)
        await newMember.roles.remove(tarroles)
        await executorInGuild.roles.add(role_hand)
        await newMember.roles.add(role_hand)
    } else {
        return;
    }
    }
}
