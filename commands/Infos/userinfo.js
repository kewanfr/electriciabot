const { MessageEmbed } = require('discord.js');
const { MESSAGES } = require("../../util/constants");
const moment = require("moment");

module.exports.run = async (client, message, args) =>  {
  // member = GuildMember
  // user = User
  let member = message.mentions.members.first() || message.member;
  let user = member.user;

  let embed = new MessageEmbed()
    .setColor("#CCE0B4")
    .setThumbnail(user.displayAvatarURL())
    .addField(
      `Informations à propos de **\`${user.username}\`**`,
      `
      ∙ Nom: **${user.tag}**
      ∙ Bot: **${user.bot ? "🤖 C'est un robot !" : "👨 Ce n'est pas un robot !"}**
      ∙ Compte crée le: **${moment(user.createdAt).format('DD/MM/YYYY | hh:mm')}**
      ∙ Statut: **${user.presence.status.toUpperCase()}**
      `
    )
    .addField(
      `\u200b`,
      `
      ∙ Surnom: **${member.nickname ? member.nickname : user.username}**
      ∙ A rejoint le: **${moment(member.joinedAt).format('DD/MM/YYYY | hh:mm')}**
      ∙ Roles:\n **${member.roles.cache.map(roles => `\`${roles.name}\``).join(", ")}**
      `
    );
    
    message.channel.send(embed);
}

module.exports.help = {
  name: "user-info",
  aliases: ["user-info", "userinfo", "uinfo"],
  category: 'infos',
  description: "Renvoie des informations concernant un utilisateur mentionné (ou vous même).",
  cooldown: 4,
  usage: '([@user])',
  args: false,
}