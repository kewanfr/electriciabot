const { MessageEmbed, MessageReaction } = require("discord.js");

module.exports.run = (client, message, args, userInfo, settings) => {
  return;
  if (!message.member.hasPermission("MANAGE_GUILD")) {
    var error_permissions = new MessageEmbed()
      .setDescription(":x: Vous ne disposez pas les permissions nécessaires pour effectuer cette commande.")
      .setColor("#F43436")
      return message.channel.send(error_permissions)
  }
  message.delete();
  const reportedUser = message.mentions.users.first();
  let raison = args.slice(1).join(" ");

  if(!raison) return message.reply(":x: Vous devez indiquer une raison détaillée !");

  const embed = new MessageEmbed()
    .setTitle(`🚨 Warn Utilisateur`)
    .setColor("#dc143C")
    .setDescription(`Utilisateur mis en garde: ${reportedUser} (${reportedUser.id})\n\nRaison: \n\`${raison}\``)
    .setAuthor(`${reportedUser.tag}`, reportedUser.avatarURL())
    .setTimestamp()
    // .setFooter("StarGaming", "https://skybot.fr/uploads/1587855310.png");
    .setFooter(`${message.guild.name}`, message.guild.iconURL());

  // var report_channel = client.channels.cache.get(settings.warnsChannel);
  if(client.config.settings.logs){
    const log_channel = client.channels.cache.get(client.config.settings.logs);
    log_channel.send(embed);
  }
  // console.log(settings.warnsChannel);
  // if(report_channel){
  //   report_channel.send(embed);
  // }
  // client.logger.msg_log(message, `🚨 Report Utilisateur ${reportedUser.tag}\n${raison}`, true);
};

module.exports.help = {
  name: 'warn',
  aliases: ['warn', 'avertir'],
  category: 'moderation',
  description: "Permet d'avertir un utilisateur",
  cooldown: 10,
  defaultPerm: "Moderator",
  permissions: "MANAGE_GUILD",
  hide: true,
  usage: '[@user]',
  args: true,
}