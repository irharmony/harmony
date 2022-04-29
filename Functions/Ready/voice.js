module.exports = ({ SERVER, voiceDiscord, Guild, ChannelsID }) => {
    const connection = voiceDiscord.joinVoiceChannel({
        channelId: ChannelsID.VC,
        guildId: Guild,
        selfDeaf: true,
        adapterCreator: SERVER.voiceAdapterCreator,
    });
}
