const { MessageEmbed } = require('discord.js');

exports.run = (client, message, args) => {
  if (message.author.id !== "497057985688895489") {
    var error_permissions = new MessageEmbed()
      .setDescription(":x: Vous ne disposez pas les permissions nécessaires pour effectuer cette commande.")
      .setColor("#F43436")
    return message.channel.send(error_permissions);
  }
  if (message.author.id === "497057985688895489") {
    client.db.set('guilds', {}).write();
    client.db.set('users', {}).write();
    return message.channel.send(`:white_check_mark: La base de données a été réinitialisé avec succès !`);
  }
}

module.exports.help = {
  name: 'purgealldb',
  aliases: ['purgealldb'],
  category: 'system',
  description: "Permet de purger la db entière",
  cooldown: 10,
  defaultPerm: "Moderator",
  permissions: "MANAGE_GUILD",
  usage: '',
  args: false,
}
