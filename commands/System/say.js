const { MessageEmbed } = require('discord.js');

exports.run = (client, message, args) => {
  if (!message.member.hasPermission("ADMINISTRATOR")) {
    var error_permissions = new MessageEmbed()
      .setDescription(":x: Vous ne disposez pas les permissions nécessaires pour effectuer cette commande.")
      .setColor("#F43436")
    message.channel.send(error_permissions)
  }
  if (message.member.hasPermission("ADMINISTRATOR")) {
    let args = message.content.split(" ").slice(1);
    if (!args[0]) {
      var error = new MessageEmbed()
        .setDescription(":x: Merci d'entrer un message pour effectuer cette commande.")
        .setColor("#F43436")
      message.channel.send(error)
    } else {
      message.channel.send(args.join(" "))
      message.delete();
    }
  }
}

module.exports.help = {
  name: 'say',
  aliases: ['say', 'repeat', 'rep'],
  category: 'system',
  description: "Répéte le message d'un utilisateur",
  cooldown: 10,
  defaultPerm: "Moderator",
  permissions: "MANAGE_GUILD",
  usage: '[message]',
  args: true,
}
