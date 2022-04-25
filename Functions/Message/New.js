module.exports = async ({ message, ChannelsID, Emotes }) => {
    message.reply(`${Emotes.Tick} | درخواست شما ثبت شد لطفا در ویس های موجود منتظر ادمین باشید`)
    return message.guild.channels.cache.get(ChannelsID.VerifyID).send(`یک کاربر در ویس منتظر ادمین هست\nUserTag : ${message.author.tag}\nMention : <@${message.author.id}>`)
}