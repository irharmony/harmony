const voiceDiscord = require(`@discordjs/voice`)
const { Guild, ChannelsID } = require("../data/config.json")
const fs = require('fs')

const { Database } = require('beta.db')
const MICDB = new Database('./data/mic.json')

const moment = require('moment-jalaali')

// const TextOnGif = require('text-on-gif'); //* For Rendering Gif Banner
const Canvas = require('canvas');
Canvas.registerFont('./data/font/OpenSans-ExtraBoldItalic.ttf', { family: 'OpenSans-Regular' })

module.exports = {
    name: 'ready',
    once: false,
    async execute(client) {
        console.log(`CONNECTED TO : ${client.user.username}`)
        let SERVER = client.guilds.cache.get(Guild)

        // -------------------- PRESENCE --------------------

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

        setInterval(async () => {
        const server = client.guilds.cache.get(Guild)
        var date_channel = client.channels.cache.get(ChannelsID.DATE)
        var member_channel = client.channels.cache.get(ChannelsID.MEMBER)

        // -------------------- DATE & MIC DB --------------------

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
        } else {
            var t_ = { date: date_now, tm: alivecount }
            MICDB.set('TocalMIC', t_);
            date_channel.setName('┣︳' + date_now)
        }
        // -------------------- MEMBERCOUNT --------------------

        member_channel.setName('┏︳Users: ' + server.memberCount)
        
        // -------------------- BANNER --------------------

        const canvas = Canvas.createCanvas(1242, 703);
        const context = canvas.getContext('2d');
        let image = [
            'fr.png',
            'j2.png',
            'H4.png',
            '22.png'
        ]
        var img = image[Math.floor(Math.random() * image.length)];
        const background = await Canvas.loadImage(`./data/bg/${img}`);
        context.drawImage(background, 0, 0, canvas.width, canvas.height);
        context.font = '80px OpenSans-Regular';

        if (background.src === './data/bg/H4.png') {
            context.fillStyle = '#e8f6ed';
            context.fillText('Alive Count : ' + alivecount, 110, 620, 300, 250); // alive
            context.fillText('Mic Record : ' + totalm, 520, 620, 300, 250); //tm
        }
        if (background.src === './data/bg/fr.png') {
            context.fillStyle = '#508d7a';
            context.fillText('Alive Count : ' + alivecount, 221, 620, 300, 250); // alive
            context.fillText('Mic Record : ' + totalm, 721, 620, 300, 250); //tm
        }
        if (background.src === './data/bg/j2.png') {
            context.fillStyle = '#016a68';
            context.fillText('Alive Count : ' + alivecount, 221, 680, 300, 250); // alive
            context.fillText('Mic Record: ' + totalm, 721, 680, 300, 250); //tm
        }
        if (background.src === './data/bg/22.png') {
            context.fillStyle = '#016a68';
            context.fillText('Alive Count : ' + alivecount, 221, 680, 300, 250); // alive
            context.fillText('Mic Record: ' + totalm, 721, 680, 300, 250); //tm
        }
        const bannerend = canvas.toBuffer();
        server.setBanner(bannerend).catch(console.error);

        //* Gif Banner 
        // var gif = new TextOnGif({
        //     file_path: "https://cdn.discordapp.com/attachments/854345762325659675/924627881097846834/20211226_150236.gif",
        //     font_color: "white",
        //     font_size: '20px',
        //     position_x: 20,
        //     position_y: 215
        // });
        // var bannerbuffer = await gif.textOnGif({
        //     text: `ALIVE : ${alivecount}                   RECORD : ${totalm}`,
        //     get_as_buffer: true
        // });
        // server.setBanner(bannerbuffer).catch(console.error);


        //* Banner Channel Send (For Test The Position)
        // let bannertest = new Discord.MessageAttachment(canvas.toBuffer(), "banner.png");
        // client.channels.cache.get('899049902909325373').send(bannertest)

        }, 60000);
    },
};