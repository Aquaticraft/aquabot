module.exports = {
    name: 'patreon',
    description: 'patreon to support us',
    execute(message, args, discord){
        const newEmbed = new discord.MessageEmbed()
	.setColor('#000000')
	.setTitle('Patreon to Help us keep these servers running')
	.setURL('https://www.patreon.com/aquaticraftservers')
	.setAuthor('')
	.setDescription('')
	.setThumbnail('https://www.audiosocket.com/wp-content/uploads/2020/11/patreon-creators-patreon.png')
	.addFields(
        {name: 'Benefits For supporting us', value: '↓↓↓'},
        {name: '‎‎‎‎‎‎____', value: '____'},
		{name: 'Tier 1 Turtle $1', value: 'Discord Role, Discord Channels'},
        {name: '‎‎‎‎‎‎____', value: '____'},
        {name: 'Tier 2 Dolphin $3', value: 'Discord Role, Discord Channel, Modded Minecraft server (currently enigmatica 6) '},
        {name: '‎‎‎‎‎‎____', value: '____'},
        {name: 'Tier 3 Drowned $5', value: 'Discord Role, Discord Channel, Donator Modded Server (currently enigmatica 6), Modpack Alpha'},
        {name: '‎‎‎‎‎‎____', value: '____'},
        {name: 'Tier 4 Guardian $10', value: 'Discord Role, Modpack Alpha, Donator Modded Server (currently enigmatica 6), Ark Servers (When Active), Terraria Server (when active)'},
        {name: '‎‎‎‎‎‎____', value: '____'},
        {name: 'Tier 5 Elder Guardian $20', value: 'Discord Role, Discord Channel, Donator Modded Server (currently enigmatica 6), Modpack Alpha, Ark servers (when active), Terraria servers (when active), Guaranteed Modpack Choice for a new server (when applicable)'},

    )
    message.channel.send(newEmbed);


    }
}