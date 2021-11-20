const { MessageEmbed } = require('discord.js');

module.exports.run = (client, message, args) =>  {
  // message.delete();
  const membre = message.mentions.members.first() || message.member;
  let embed = new MessageEmbed()
    .setColor("#ffa500")
    .setTitle(`Avatar de **${membre.user.username}**`)
    .setImage(membre.user.avatarURL());

  message.channel.send(embed);
}

module.exports.help = {
  name: 'avatar',
  aliases: ['avatar', 'pp', 'me'],
  category: 'images',
  description: "Permet de recuperer l'avatar d'un membre.",
  cooldown: 2,
  usage: "[@member]",
  args: false,
}