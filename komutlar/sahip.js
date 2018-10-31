const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message, args) => {
	message.channel.send('Benim Yapımcım: Osman Tunahan Arıkan#4848');
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'sahip',
  description: 'Botun Yapımcısını Gösterir.',
  usage: 'sahip'
};