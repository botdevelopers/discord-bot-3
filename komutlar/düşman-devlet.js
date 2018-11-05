const Discord = require('discord.js');


exports.run = function(client, message, args) {

	var öneri = args.slice(0).join(' ');
	var guildID = "506409433761447976";
	var channelID = "506439823469576196";
	
	if (!öneri){
		return message.reply("Bir mesaj belirtin! Doğru kullanım: **.düşman-devlet <devlet>**");
	} else {
		
		var embed = new Discord.RichEmbed()
			.setTimestamp()
			.addField("Eylem:", "Düşman Devlet Ekleme")
			.addField("Ekleyen:", message.author.tag)
			.addField("ID", message.author.id)
			.addField("Devlet", öneri)
		
		client.guilds.get(guildID).channels.get(channelID).send(embed);
		message.channel.send("Düşman Devlet Eklenmiştir!");
	};


};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["dusman-ekle"], 
  permLevel: 4 
};

exports.help = {
  name: 'düşman-devlet', 
  description: "Sunucumuzda Düşman Devlet Ekler!", 
  usage: 'düşman-devlet <devlet-linki>' 
};
