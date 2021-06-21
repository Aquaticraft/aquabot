const discord = require('discord.js')

const client = new discord.Client();

const prefix = '!';

const fs = require ('fs');

client.commands = new discord.Collection();
 
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);
 
    client.commands.set(command.name, command);
}


client.once('ready', () => {
    console.log('AquaBot is online!')
});

client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'ping'){
        client.commands.get('ping').execute(message, args);

    } else if (command == 'twitch'){
        client.commands.get('twitch').execute(message, args);

    } else if (command == 'commands'){
        client.commands.get('commands').execute(message, args);

    } else if (command == 'vaultip'){
        client.commands.get('vaultip').execute(message, args);

    } else if (command == 'patreon'){
        client.commands.get('patreon').execute(message, args);

    } else if (command == 'commands'){
        client.commands.get('commands').execute(message, args);

    }  else if (command == 'serverlist'){ 
        client.commands.get('serverlist').execute(message, args);

    }
});



client.login('');
