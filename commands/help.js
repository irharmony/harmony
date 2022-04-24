const Discord = require("discord.js")

module.exports = {
    name: "help",
    des: "Commands List",
    aliases: ["h", "cmd", "command"],
    run: async (client, message) => {
        var help = new Discord.MessageEmbed()
            .setTitle(client.user.username + "Commands ")
            .setDescription('\n')
            .setColor("BLURPLE")
        client.commands.forEach(cmd => {
            help.addField(cmd.name + ' [ ' + cmd.aliases + ' ] ', cmd.des, true)
        });

        message.channel.send({ embeds: [help] })
    }
}
