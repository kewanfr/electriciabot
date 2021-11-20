const ms = require('ms');
const { MessageEmbed } = require('discord.js');

module.exports.run = async (client, message, args) =>  {
  if (!message.member.hasPermission("MANAGE_GUILD")) {
    var error_permissions = new MessageEmbed()
      .setDescription(":x: Vous ne disposez pas les permissions nécessaires pour effectuer cette commande.")
      .setColor("#F43436")
      return  message.channel.send(error_permissions)
  }
  message.delete();
  let settings = {}
  settings.muteRoleName = "muted";
  let user = message.guild.member(message.mentions.users.first());
  let muteRole = message.guild.roles.cache.find(r => r.name === `${settings.muteRoleName}`);
  let muteTime = (args[1]) || '120s';

  if(!muteRole){
    muteRole = await message.guild.roles.create({
      data: {
        name: `${settings.muteRoleName}`,
        color: 'RED',
        permissions: []
      }
    });

    message.guild.channels.cache.forEach(async (channel, id) => {
      await channel.updateOverwrite(muteRole, {
        SEND_MESSAGES: false,
        ADD_REACTIONS: false,
        CONNECT: false
      });
    });
  }

  await user.roles.add(muteRole.id);
  message.channel.send(`:white_check_mark: <@${user.id}> est muté pour ${ms(ms(muteTime))} !`);

  setTimeout(() => {
    user.roles.remove(muteRole.id)
  }, ms(muteTime));

  const embed = new MessageEmbed()
    .setAuthor(`${user.user.username} (${user.id})`, user.user.avatarURL())
    .setColor('#287db5')
    .setDescription(`**Action**: Mute\n **Temps**: ${ms(ms(muteTime))}`)
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
  name: 'mute',
  aliases: ['mute'],
  category: 'moderation',
  description: "Permet de rendre muet un utilisateur",
  cooldown: 10,
  defaultPerm: "Moderator",
  permissions: "MANAGE_GUILD",
  hide: false,
  usage: '[@user]',
  args: true,
}