const { MessageEmbed } = require('discord.js');

module.exports.run = async (client, message, args) =>  {
  if (!message.member.hasPermission("MANAGE_GUILD")) {
    var error_permissions = new MessageEmbed()
      .setDescription(":x: Vous ne disposez pas les permissions nécessaires pour effectuer cette commande.")
      .setColor("#F43436")
      return message.channel.send(error_permissions)
  }
  message.delete();
  try {
    var user = await client.users.fetch(args[0]);
    if(!user) return message.channel.send(":x: L'utilisateur n'existe pas !");
  } catch (error) {
    return message.channel.send(":x: L'utilisateur n'existe pas !")
  }
  try {
    message.guild.members.unban(args[0])
    message.channel.send(":white_check_mark: L'utilisateur a bien été débanni !");
  } catch (error) {
    return message.channel.send(":x: Impossible de bannir l'utilisateur !")
  }


  const embed = new MessageEmbed()
    .setAuthor(`${user.username} (${user.id})`, user.avatarURL())
    .setColor('#35f092')
    .setDescription(`**Action**: Déban`)
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
  name: 'unban',
  aliases: ['unban', 'débannir'],
  category: 'moderation',
  description: "Permet de débannir un utilisateur",
  cooldown: 10,
  defaultPerm: "Moderator",
  permissions: "MANAGE_GUILD",
  usage: '[@user]',
  args: true,
}