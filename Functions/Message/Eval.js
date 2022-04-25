module.exports = async ({ Discord, message, args, OWNER, inspect, Emotes, client }) => {
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