const { MessageEmbed } = require('discord.js');

module.exports.run = (client, message, args) =>  {
  if (!message.member.hasPermission("MANAGE_GUILD")) {
    var error_permissions = new MessageEmbed()
    .setDescription(":x: Vous ne disposez pas les permissions nécessaires pour effectuer cette commande.")
    .setColor("#F43436")
    return message.channel.send(error_permissions)
  }
  message.delete();
  let user = message.mentions.users.first();
  if(user.id === message.author.id) return message.channel.send( new MessageEmbed().setDescription(":x: Erreur, vous ne pouvez pas executer cette action sur vous-même !").setColor("#F43436"));
  let reason = (args.splice(1).join(" ")) || "Aucune raison spécifiée !";
  user ? message.guild.member(user).ban(reason) : message.channel.send(":x: L'utilisateur n'existe pas !");
  user ? message.channel.send(":white_check_mark: L'utilisateur a bien été banni !") : "";

  const embed = new MessageEmbed()
    .setAuthor(`${user.username} (${user.id})`, user.avatarURL())
    .setColor('#dc143c')
    .setDescription(`**Action**: Ban\n **Raison**: ${reason}`)
    .setTimestamp()
    .setFooter(message.author.username, message.author.avatarURL())
  
  if(client.config.settings.logs){
    const log_channel = client.channels.cache.get(client.config.settings.logs);
    log_channel.send(embed);
  }
  // if(settings.logChannel){
  //   const log_channel = client.channels.cache.get(settings.logChannel);
  //   log_channel.send(embed);
  // }
}

module.exports.help = {
  name: 'ban',
  aliases: ['ban', 'bannir'],
  category: 'moderation',
  description: "Permet de bannir un utilisateur",
  cooldown: 10,
  defaultPerm: "Moderator",
  permissions: "MANAGE_GUILD",
  usage: '[@user]',
  args: true,
}