module.exports = ({ server, date_channel, mic_channel, member_channel, fs, MICDB, moment }) => {
    const voiceChannels = server.channels.cache.filter(c => c.type === 'GUILD_VOICE');
    let alivecount = 0;
    for (const [id, voiceChannel] of voiceChannels) alivecount += voiceChannel.members.size;
    let totalmـ = JSON.parse(fs.readFileSync("./data/mic.json"));
    let totalm = totalmـ.TocalMIC.tm;
    let date_ = totalmـ.TocalMIC.date;
    let date_now = moment().format('jYYYY/jM/jD');
    let now_db = JSON.parse(fs.readFileSync("./data/mic.json"));
    if (now_db.TocalMIC.date == moment().format('jYYYY/jM/jD')) {
        if (totalm < alivecount) {
            var t = { date: date_, tm: alivecount }
            MICDB.set('TocalMIC', t);
        }
        date_channel.setName('┣︳' + date_)
        mic_channel.setName('┣︳Total Mic: ' + alivecount)
    } else {
        var t_ = { date: date_now, tm: alivecount }
        MICDB.set('TocalMIC', t_);
        date_channel.setName('┣︳' + date_now)
        mic_channel.setName('┣︳Total Mic: ' + alivecount)
    }
    member_channel.setName('┏︳Users: ' + server.memberCount)
}