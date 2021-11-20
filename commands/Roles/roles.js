const { MessageEmbed } = require('discord.js');
const { ROLES } = require('../../util/constants');

exports.run = (client, message, args) => {

  let embed = new MessageEmbed().setColor('RED').setTitle(`Liste des roles disponibles`).setDescription(`Voici la liste des roles disponibles par niveau ou dans le shop.`);
  let roles = ``;
  for (r in ROLES) {
    let role = ROLES[r];
    roles = `${roles} Niveau **${r}** : ${message.guild.roles.cache.get(role) ? `<@&${role}>` : ' '}\n`;
  }
  embed.addField(`Roles par niveau`, roles);
  message.channel.send(embed);
}

module.exports.help = {
  name: 'roleslist',
  aliases: ['rolesls', 'rolesls'],
  category: 'roles',
  description: "Affiche la liste des roles et des niveaux",
  cooldown: 4,
  usage: '',
  args: false,
}
