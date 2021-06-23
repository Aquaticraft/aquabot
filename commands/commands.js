module.exports = {
    name: 'commands',
    description: 'list of commands bot can do',
    execute(message, args){
        message.channel.send('Ping, Twitch, Patreon, Aquatech, Serverlist, Vaulthunters, mcservers');
    }
}
