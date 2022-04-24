const voiceDiscord = require(`@discordjs/voice`)

module.exports = {
    name: 'ready',
    once: false,
    execute(client) {
        console.log(`CONNECTED TO : ${client.user.username}`)
        client.user.setPresence({
            status: 'dnd',
            activities: [{
                type: 'WATCHING',
                name: 'HARMONY',
            }]
        });

        let SERVER = client.guilds.cache.get('578558255392096256')
        const connection = voiceDiscord.joinVoiceChannel({
            channelId: '899049887788834917',
            guildId: '578558255392096256',
            adapterCreator: SERVER.voiceAdapterCreator,
            selfDeaf: true,
        });

        const player = voiceDiscord.createAudioPlayer();
        const resource = voiceDiscord.createAudioResource('http://stream.laut.fm/happyfmdance');

        // player.play(resource);
        connection.subscribe();
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

