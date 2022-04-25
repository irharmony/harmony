module.exports = ({ SERVER,client }) => {
    client.user.setPresence({
        status: 'dnd',
        activities: [{
            type: 'WATCHING',
            name: SERVER.name,
        }]
    });
}