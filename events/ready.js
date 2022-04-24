const voiceDiscord = require(`@discordjs/voice`)
const {Guild,
ChannelID} = require("../data/config.json")

module.exports = {
    name: 'ready',
    once: false,
    execute(client) {
        console.log(`CONNECTED TO : ${client.user.username}`)
        let SERVER = client.guilds.cache.get(Guild)

        client.user.setPresence({
            status: 'dnd',
            activities: [{
                type: 'WATCHING',
                name: SERVER.name,
            }]
        });

        const connection = voiceDiscord.joinVoiceChannel({
            channelId: ChannelID,
            guildId: Guild,
            adapterCreator: SERVER.voiceAdapterCreator,
            selfDeaf: true,
        });
        const player = voiceDiscord.createAudioPlayer();
        connection.subscribe(player);
    },
};







// player.on(voiceDiscord.AudioPlayerStatus.Idle, () => {
//     const EMBED = new MessageEmbed()
//         .setTitle('There is currently no resource for the player to be playing (Trying to replay the resource)')
//         .setThumbnail(client.user.displayAvatarURL({ format: 'png', size: 2048 }))
//         .setDescription(`Powered By : [${name}](${homepage})`)
//         .setTimestamp()

//     player.play(resource);
//     connection.subscribe(player);
//     client.channels.cache.get(logID).send({ embeds: [EMBED] });
// });

