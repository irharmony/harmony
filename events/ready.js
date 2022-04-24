const voiceDiscord = require(`@discordjs/voice`)
const { Guild, ChannelsID } = require("../data/config.json")
const fs = require('fs')

const { Database } = require('beta.db')
const db = new Database('./data/mic.json')

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

        // -------------------- VOICE CONNECTION --------------------
        const connection = voiceDiscord.joinVoiceChannel({
            channelId: ChannelsID.VC,
            guildId: Guild,
            adapterCreator: SERVER.voiceAdapterCreator,
            selfDeaf: true,
        });
        const player = voiceDiscord.createAudioPlayer();
        connection.subscribe(player);

        // setInterval(async () => {
            const server = client.guilds.cache.get(Guild)

            var date_channel = client.channels.cache.get(ChannelsID.DATE)
            var member_channel = client.channels.cache.get(ChannelsID.MEMBER)
            // -------------------- VOICE CONNECTION --------------------

            const voiceChannels = server.channels.cache.filter(c => c.type === 'voice');

            let alivecount = 0;
            for (const [id, voiceChannel] of voiceChannels) alivecount += voiceChannel.members.size;

            let totalmـ = JSON.parse(fs.readFileSync("./mic.json"));
            let totalm = totalmـ.TocalMIC.tm;
            let date_ = totalmـ.TocalMIC.date;
            let date_now = moment2().format('jYYYY/jM/jD');



            let now_db = JSON.parse(
                fs.readFileSync("./mic.json")
            );



            if (now_db.TocalMIC.date == moment2().format('jYYYY/jM/jD')) {
                if (totalm < alivecount) {
                    var t = { date: date_, tm: alivecount }
                    db.set('TocalMIC', t);
                }
                date_channel.setName('┣︳' + date_)
            } else {
                var t_ = { date: date_now, tm: alivecount }
                db.set('TocalMIC', t_);
                date_channel.setName('┣︳' + date_now)
            }
        // }, 60000);
    },
};