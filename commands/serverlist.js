module.exports = {
    name: 'serverlist',
    description: 'Lists of servers currently Active',    
    execute(message, args, discord){
        const newEmbed = new discord.MessageEmbed()
	.setColor('#000000')
	.setTitle('Listing of servers currently active')
	.setURL('https://www.twitch.tv/3dd1n')
	.setAuthor('')
	.setDescription('')
	.setThumbnail('https://cdn.discordapp.com/attachments/719853886323687476/856609462629433344/fb703f5c30647e328edf5ee9772b8ca1.png')
	.addFields(
		{name: 'Vault Hunters Ip (Public)', value: '<#754648564038107167> <#843078920256487524>'},
        {name: 'Vanilla Minecraft (Invite only)', value: 'Dm one of these guys! --> <@838098854325780490>'},
        {name: 'Aquatech (Applications)', value: '<#842668705258930186>'},
        {name: 'Enigmatica 6 (Patreon Only)', value: '!patreon'},
	)
	.setImage('')
	.setFooter('');

    message.channel.send(newEmbed);
    
    }
}