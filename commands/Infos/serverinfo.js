const { MessageEmbed } = require('discord.js');
const { MESSAGES } = require("../../util/constants");
const moment = require("moment");

module.exports.run = async (client, message, args) =>  {
  const guild = message.guild;

  let embed = new MessageEmbed()
    .setColor("#C016FF")
    .setThumbnail(guild.iconURL())
    .addField(`**Informations à propos de: \`${guild.name}\`**`, 
    `
    ∙ ID: **\`${guild.id}\`**
    ∙ Owner: **${guild.owner.user.tag} (\`${guild.ownerID}\`)**
    ∙ Roles: **${guild.roles.cache.size}**
    ∙ Crée le: **${moment(guild.createdAt).format('DD/MM/YYYY')}**
    `, false
    )
    .addField(`\u200b`, 
    `
    ∙ Membres: **\`${guild.members.cache.filter(mbr => mbr.user.bot === false).size}\`**
    ∙ Bots: **\`${guild.members.cache.filter(mbr => mbr.user.bot === true).size}\`**
    ∙ Catégories: **\`${guild.channels.cache.filter(ch => ch.type === "category").size}\`**
    ∙ Salons Textuels: **\`${guild.channels.cache.filter(ch => ch.type === "text").size}\`**
    ∙ Salons Vocaux: **\`${guild.channels.cache.filter(ch => ch.type === "voice").size}\`**
    `, false
    );
    message.channel.send(embed);
}

module.exports.help = {
  name: "server-info",
  aliases: ["server-info", "serverinfo", "sinfo"],
  category: 'infos',
  description: "Renvoie des informations concernant le serveur.",
  cooldown: 4,
  usage: '',
  args: false,
}