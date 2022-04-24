const { MessageEmbed } = require('discord.js');

exports.run = (client, message, args) => {
  if (message.author.id !== "497057985688895489") {
    var error_permissions = new MessageEmbed()
      .setDescription(":x: Vous ne disposez pas les permissions nécessaires pour effectuer cette commande.")
      .setColor("#F43436")
    return message.channel.send(error_permissions);
  }
  if (message.author.id === "497057985688895489") {
    var users = await client.db.get(`guilds.722322784465977384.users`).value();
    for (const u in users) {
      const user = users[u];
      if(!client.users.cache.get(u)){
        client.db.unset(`guilds.722322784465977384.users.${u}`).write();
        console.log(`${user.username} (${u}) removed from db`);
      }
    }
    return message.channel.send(`:white_check_mark: La base de données du serveur a bien été nettoyée !`);
  }
}

module.exports.help = {
  name: 'cleandb',
  aliases: ['cleandb'],
  category: 'system',
  description: "Permet de clean la db du serv",
  cooldown: 10,
  defaultPerm: "Moderator",
  permissions: "MANAGE_GUILD",
  usage: '',
  args: false,
}
