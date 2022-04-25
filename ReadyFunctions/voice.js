module.exports = ({SERVER}) => {
    const connection = voiceDiscord.joinVoiceChannel({
        channelId: ChannelsID.VC,
        guildId: Guild,
        adapterCreator: SERVER.voiceAdapterCreator,
        selfDeaf: true,
    });
    const player = voiceDiscord.createAudioPlayer();
    connection.subscribe(player);
}