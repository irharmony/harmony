const voiceDiscord = require(`@discordjs/voice`)
const { Guild, ChannelsID } = require("../data/config.json")
const fs = require('fs')

const { Database } = require('beta.db')
const MICDB = new Database('./data/mic.json')

const moment = require('moment-jalaali')

// const TextOnGif = require('text-on-gif'); //* For Rendering Gif Banner
const Canvas = require('canvas');
Canvas.registerFont('./data/font/OpenSans-ExtraBoldItalic.ttf', { family: 'OpenSans-Regular' })

const functions = require('../Functions/handler')

module.exports = {
    name: 'ready',
    once: false,
    async execute(client) {
        console.log(`CONNECTED TO : ${client.user.username}`)
        let SERVER = client.guilds.cache.get(Guild)
        functions.Presence({ SERVER, client })
        functions.Voice({ SERVER, voiceDiscord, Guild, ChannelsID })
        setInterval(async () => {
            const server = client.guilds.cache.get(Guild)
            var date_channel = client.channels.cache.get(ChannelsID.DATE)
            var mic_channel = client.channels.cache.get(ChannelsID.MIC)
            var member_channel = client.channels.cache.get(ChannelsID.MEMBER)
            functions.Data_Mic({ server, date_channel, mic_channel, member_channel, fs, MICDB, moment })
            //functions.Banner({ Canvas, server, MICDB })
        }, 60000);
    },
};