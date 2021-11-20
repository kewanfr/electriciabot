const { MessageEmbed } = require('discord.js');

exports.run = (client, message, args, userInfo) => {
  let sorted = Object.values(client.db.get(`guilds.${message.guild.id}.users`).value());
  sorted.sort((a,b) => {return b.balance - a.balance;});
  let user = message.guild.member(message.mentions.users.first());
  if(user){
    userInfo = client.db.get(`guilds.${message.guild.id}.users.${user.id}`).value();
    var position = (parseInt(sorted.indexOf(userInfo)) + 1);
    if(!userInfo || !userInfo.experience) return message.channel.send(":x: Cet utilisateur n'a pas encore envoyé de messages !");
    
  }else {
    var position = (parseInt(sorted.indexOf(userInfo)) + 1);
    if(!userInfo.experience) return message.channel.send(":x: Vous n'avez pas encore envoyé assez de messages !");
    user = {};
    user.user = message.author;
  }
  if(userInfo){
    var embed = new MessageEmbed()
      .setColor("#d54e12")
      .setTitle(`Argent de ${user.user.tag}`)
      .setAuthor(`${user.user.username}`, `${user.user.avatarURL()}`)
      .addField("Monnaie 💸", `**${userInfo.balance}** Electricias`)
      .addField("Classement", `**#${position}**`);
  }
  message.channel.send(embed);
}

module.exports.help = {
  name: 'economie',
  aliases: ['economie', 'eco', 'economy'],
  category: 'economy',
  description: "Affiche l'argent d'un utilisateur",
  cooldown: 5,
  defaultPerm: "Moderator",
  permissions: "MANAGE_GUILD",
  usage: '([@user])',
  args: false,
}
