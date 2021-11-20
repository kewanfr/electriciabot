const { MessageEmbed } = require('discord.js');
const { ROLES } = require('../../util/constants');

exports.run = (client, message, args) => {
  // if (!message.member.hasPermission("MANAGE_GUILD")) {
  //   var error_permissions = new MessageEmbed()
  //     .setDescription(":x: Vous ne disposez pas les permissions nécessaires pour effectuer cette commande.")
  //     .setColor("#F43436")
  //     return message.channel.send(error_permissions)
  // }
  let role = message.guild.roles.resolve(args[0].replace("<", "").replace(">", "").replace("@", "").replace("&", ""));
  if(!role) return message.channel.send(':x: Erreur, le role n\'existe pas ! ');
  message.guild.members.cache.filter(m => !m.user.bot).forEach(member => member.roles.remove(role))
  message.channel.send(`:white_check_mark: Le role **${role.name}** a bien été retiré à tout les membres du serveur !`)
}

module.exports.help = {
  name: 'roleuneveryone',
  aliases: ['roleuneveryone'],
  category: 'moderation',
  permissions: "MANAGE_GUILD",
  description: "Permet de retirer un role à tout le serveur",
  cooldown: 4,
  usage: '',
  args: false,
}
