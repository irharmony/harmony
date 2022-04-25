module.exports = ({ message }) => {
    if (message.member.roles.cache.find(r => r.id === '930971681441325117') || message.member.roles.cache.find(r => r.id === '899049712294965329')) {
        let BanRole = message.guild.roles.cache.get(ServerBanRole);
        let BanUser = message.mentions.members.first();
        if (!BanUser) return message.reply("Please Mention Someone Else!").then((declineMsg) => { declineMsg.delete({ timeout: 5000 }); });

        BanUser.roles.remove(BanRole);
        BanUser.setNickname(BanUser.user.username)
        message.reply(`Removed the role **Server Ban** from ${BanUser} by <@${message.author.id}>.`)
    }
}