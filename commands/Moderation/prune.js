const { MessageEmbed } = require('discord.js');

module.exports.run = async (client, message, args) =>  {
  if (!message.member.hasPermission("MANAGE_GUILD")) {
    var error_permissions = new MessageEmbed()
      .setDescription(":x: Vous ne disposez pas les permissions nécessaires pour effectuer cette commande.")
      .setColor("#F43436")
      return message.channel.send(error_permissions)
  }
  message.delete();
  let user = message.guild.member(message.mentions.users.first());
  if(args[1]){
    if(isNaN(args[1]) || (args[1] < 1 || args[1] > 100)) return message.channel.send(':x: Vous devez spécifier un **nombre** entre 1 et 100 !');
    var number = args[1];
  }else {
    var number = 100;
  }

  const messages = (await message.channel.messages.fetch({
    limit: 100,
    before: message.id,
  })).filter(a => a.author.id === user.id).array();

  messages.length = Math.min(number, messages.length);

  if(messages.length === 0 || !user) return message.channel.send(":x: Aucun message à supprimer sur cet utilisateur ou cet utilisateur n'existe pas !");

  if(messages.length === 1) await messages[0].delete();
  else await message.channel.bulkDelete(messages);


  const embed = new MessageEmbed()
    .setAuthor(message.author.username, message.author.avatarURL())
    .setColor('#287db5')
    .setDescription(`**Action**: Prune\n**Nbr de messages**: ${args[1]}\n**Utilisateur**: ${args[0]}\n**Salon**: ${message.channel}`)
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
  name: 'prune',
  aliases: ['prune'],
  category: 'moderation',
  description: "Permet de supprimer des messages sur un utilisateur défini",
  cooldown: 10,
  defaultPerm: "Moderator",
  permissions: "MANAGE_GUILD",
  usage: '[@user]',
  args: true,
}