const Discord = require('discord.js');


exports.run = function(client, message, args) {

	var öneri = args.slice(0).join(' ');
	var guildID = "506409433761447976";
	var channelID = "506440069922553856";
	
	if (!öneri){
		return message.reply("Bir Devlet Belirt! Doğru kullanım: **.dost-devlet <devlet>**");
	} else {
		
		var embed = new Discord.RichEmbed()
			.setTimestamp()
			.addField("Eylem:", "Dost Devlet Ekleme")
			.addField("Ekleyen:", message.author.tag)
			.addField("ID", message.author.id)
			.addField("Devlet", öneri)
		
		client.guilds.get(guildID).channels.get(channelID).send(embed);
		message.channel.send("Dost Devlet Eklenmiştir!");
	};


};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["dost-ekle"], 
  permLevel: 4 
};

exports.help = {
  name: 'dost-devlet', 
  description: "Sunucumuzda Dost Devlet Ekler!", 
  usage: 'dost-devlet <devlet>' 
};
