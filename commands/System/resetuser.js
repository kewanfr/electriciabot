const { MessageEmbed } = require('discord.js');

exports.run = (client, message, args) => {
  let user = message.guild.member(message.mentions.users.first());
  if (message.author.id !== "497057985688895489") {
    var error_permissions = new MessageEmbed()
      .setDescription(":x: Vous ne disposez pas les permissions nécessaires pour effectuer cette commande.")
      .setColor("#F43436")
    return message.channel.send(error_permissions);
  }
  if(!user) return message.channel.send(':x: Erreur, veuillez mentionnez un utilisateur !');
  if (message.author.id === "497057985688895489") {
    client.db.set(`guilds.${message.guild.id}.users.${user.id}`, {}).write();
    return message.channel.send(`:white_check_mark: L'utilisateur ${user} à été reset de la base de données avec succès !`);
  }
}

module.exports.help = {
  name: 'resetuser',
  aliases: ['resetuser'],
  category: 'system',
  description: "Permet de reset un utilisateur",
  cooldown: 5,
  defaultPerm: "Moderator",
  permissions: "MANAGE_GUILD",
  usage: '[@user]',
  args: true,
}
