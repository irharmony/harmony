const Discord = require("discord.js")
const { Prefix, Emotes, OWNER, ChannelsID, ServerBanRole } = require("../data/config.json")
const reasons = require('../data/reason.json')
const { inspect } = require('util');
const { readFile } = require('fs')
const functions = require('../Functions/handler')
const { Database } = require('beta.db')
const MICDB = new Database('./data/mic.json')

module.exports = {
    name: 'messageCreate',
    async execute(message) {
        if (!message.guild || message.author.bot) return;

        const args = message.content.slice(Prefix.length).trim().split(' ');
        const command = args.shift().toLowerCase();

        if (command === 'eval') {
            functions.Eval({ Discord, message, args, OWNER, inspect, Emotes, MICDB })
        }

        if (command === 'verify' || command === 'new') {
            functions.New({ message, ChannelsID, Emotes })
        }

        if (command === 'bug') {
            functions.Bug({ message, ChannelsID, args, Discord })
        }

        if (command === 'ban') {
            functions.Ban({ message, readFile, Discord, ServerBanRole, args, reasons })

        }

        if (command === 'bax') {
            functions.Bax({ message, Emotes, args, Discord })
        }

        if (message.content.startsWith(`${Prefix}unban`)) {
            functions.Unban({ message, ServerBanRole })
        }

        // ------------------------------------

        if (message.channel.id === ChannelsID.Channels.bot) {
            message.react('🤖')
        }
        if (message.channel.id === ChannelsID.Channels.meme) {
            message.react('😂')
            message.react('😐')
        }
        if (message.channel.id === ChannelsID.Channels.challenge) {
            message.react('🥇')
            message.react('✔️')
        }
        if (message.channel.id === ChannelsID.Channels.fun) {
            message.react('😂')
            message.react('😐')
        }
        if (message.channel.id === ChannelsID.Channels.lovely) {
            message.react('💖')
            message.react('💔')
        }
        if (message.channel.id === ChannelsID.Channels.adult_post) {
            message.react('🔞')
        }
        if (message.channel.id === ChannelsID.Channels.grate_post) {
            message.react('🧒')
        }
        if (message.channel.id === ChannelsID.Channels.food) {
            message.react('🍔')
        }
        if (message.channel.id === ChannelsID.Channels.speak_your_heart) {
            message.react('🖤')
        }
        if (message.channel.id === ChannelsID.Channels.ig) {
            message.react('✔️')
        }
        if (message.channel.id === ChannelsID.Channels.shop) {
            message.react('💰')
        }
        if (message.channel.id === ChannelsID.Channels.soti) {
            message.react('😂')
            message.react('😐')
        }
    },
};