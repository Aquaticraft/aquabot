module.exports = {
    name: 'Vaulthunters',
    description: 'VaultHunters Ip',    
    execute(message, args, discord){
        const newEmbed = new discord.MessageEmbed()
	.setColor('#000000')
	.setTitle('Vault Hunters')
	.setURL('https://vault-hunters.fandom.com/wiki/Vault_Hunters_Wiki')
	.setAuthor('')
	.setDescription('')
	.setThumbnail('https://imgur.com/a/5b3ucDs')
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