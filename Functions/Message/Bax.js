module.exports = ({ message, Emotes, args, Discord }) => {
    if (!message.member.permissions.has(Discord.Permissions.FLAGS.ADMINISTRATOR)) return message.reply(Emotes.Error + ' You Dont Have Enough Permission');
    if (!args.length) return message.reply(`لطفا اسم بکس رو وارد کنید !`);

}