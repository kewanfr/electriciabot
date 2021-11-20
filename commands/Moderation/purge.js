const { MessageEmbed } = require('discord.js');

module.exports.run = async (client, message, args ) =>  {
  if (!message.member.hasPermission("MANAGE_MESSAGES")) {
    var error_permissions = new MessageEmbed()
      .setDescription(":x: Vous ne disposez pas les permissions nécessaires pour effectuer cette commande.")
      .setColor("#F43436")
      return message.channel.send(error_permissions)
  }
  message.delete();
  if(args[0]){
    if(isNaN(args[0]) || (args[0] < 1 || args[0] > 100)) return message.channel.send(':x: Vous devez spécifier un **nombre** entre 1 et 100 !');
    var number = args[0];
  }else {
    var number = 100;
  }

  // const messages = await message.channel.messages.fetch({
  //   limit: Math.min(number, 100),
  //   before: message.id,
  // });

  // await message.channel.bulkDelete(messages);
  await message.channel.messages.fetch({ limit: number }).then(messages => { // Fetches the messages
    message.channel.bulkDelete(messages); // Bulk deletes all messages that have been fetched and are not older than 14 days (due to the Discord API)
  });

  const embed = new MessageEmbed()
    .setAuthor(message.author.username, message.author.avatarURL())
    .setColor('#287db5')
    .setDescription(`**Action**: Purge\n**Nbr de messages**: ${args[0]}\n**Salon**: ${message.channel}`)
    .setTimestamp()

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
  name: 'clear',
  aliases: ['clear', 'purge'],
  category: 'moderation',
  description: "Permet de supprimer un nombre de messages défini",
  cooldown: 5,
  defaultPerm: "Moderator",
  permissions: "MANAGE_GUILD",
  usage: '[messages]',
  args: false,
}