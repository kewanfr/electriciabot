const { MessageEmbed } = require('discord.js');
const { ROLES } = require('../../util/constants');

exports.run = (client, message, args, userInfo) => {
  let sorted = Object.values(client.db.get(`guilds.${message.guild.id}.users`).value());
  sorted.sort((a,b) => {return b.experience - a.experience;});
  let user = message.guild.member(message.mentions.users.first());
  if(user){
    userInfo = client.db.get(`guilds.${message.guild.id}.users.${user.id}`).value();
    var positionXP = (parseInt(sorted.indexOf(userInfo)) + 1);
    if(!userInfo || !userInfo.experience) return message.channel.send(":x: Cet utilisateur n'a pas encore envoyé de messages !");
    
  }else {
    var positionXP = (parseInt(sorted.indexOf(userInfo)) + 1);
    if(!userInfo.experience) return message.channel.send(":x: Vous n'avez pas encore envoyé assez de messages !");
    user = {};
    user.user = message.author;
  }
  if(userInfo){
    var embed = new MessageEmbed()
      .setColor("#d54e12")
      .setTitle(`Niveau de ${user.user.tag}`)
      .setAuthor(`${user.user.username}`, `${user.user.avatarURL()}`)
      .addField("Experience", `**${userInfo.experience}** xp (Level: **${userInfo.level}**)`)
      .addField("Messages", `**${userInfo.messages}** messages envoyés`)
      .addField("Grade", `${message.guild.roles.cache.get(ROLES[userInfo.level])}`, true)
      .addField("Classement", `**#${positionXP}**`, true);
  }
  message.channel.send(embed);
}

module.exports.help = {
  name: 'experience',
  aliases: ['rank', 'level', 'exp', 'experience', 'xp'],
  category: 'economy',
  description: "Affiche le niveau et l'argent d'un utilisateur",
  cooldown: 5,
  defaultPerm: "Moderator",
  permissions: "MANAGE_GUILD",
  usage: '([@user])',
  args: false,
}
