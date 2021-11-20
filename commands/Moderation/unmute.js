const { MessageEmbed } = require('discord.js');

module.exports.run = async (client, message, args, userInfo, settings) =>  {
  if (!message.member.hasPermission("MANAGE_GUILD")) {
    var error_permissions = new MessageEmbed()
      .setDescription(":x: Vous ne disposez pas les permissions nécessaires pour effectuer cette commande.")
      .setColor("#F43436")
      return message.channel.send(error_permissions)
  }
  message.delete();
  let user = message.guild.member(message.mentions.users.first());
  let muteRole = message.guild.roles.cache.find(r => r.name === 'muted');

  if(!muteRole.id) return message.reply(":x: Aucun utilisateur n'est muté sur ce serveur !")
  if(!user.roles.cache.has(muteRole.id)) return message.reply(":x: L'utilisateur mentionné n'est pas muté !")

  await user.roles.remove(muteRole.id);
  message.channel.send(`:white_check_mark: <@${user.id}> à été démuté !`);

  const embed = new MessageEmbed()
    .setAuthor(`${user.user.username} (${user.id})`, user.user.avatarURL())
    .setColor('#35f092')
    .setDescription(`**Action**: Unmute`)
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
  name: 'unmute',
  aliases: ['unmute'],
  category: 'moderation',
  description: "Permet de démuter un utilisateur",
  cooldown: 10,
  defaultPerm: "Moderator",
  permissions: "MANAGE_GUILD",
  hide: false,
  usage: '[@user]',
  args: true,
}