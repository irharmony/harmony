client.on('message', async message => {
    const args = message.content.split(' ');
    const command = args.shift().toLowerCase();

    if (command === prefix + 'eval') {
        if (message.author.id === '490519932292038659' || message.author.id === '916076947157684234' || message.author.id === '220895537207967744' || message.author.id === '925824559804977262') {
            if (!args.length) return;
            let evaled;
            try {
                evaled = await eval(args.join(" "));
                let evalend = new Discord.MessageEmbed()
                    .setTitle('Eval Result : ')
                    .setDescription('INPUT :\n```js\n' + args.join(" ") + '\n```\nOUTPUT :\n```js\n' + inspect(evaled) + '\n```')
                    .setColor("GREEN")
                message.inlineReply(evalend).catch(e => { message.inlineReply('```js\n' + e + '\n```'); });
            }
            catch (error) {
                let evalerr = new Discord.MessageEmbed()
                    .setTitle('Thre Was An Error : ')
                    .setDescription('```js\n' + error + '```')
                    .setColor("red")
                message.inlineReply(evalerr);
            }
        } else {
            return message.inlineReply('sik kon ||kosh khesh|| :/');
        }

    }
});