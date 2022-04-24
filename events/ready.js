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
    },
};