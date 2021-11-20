const { MessageEmbed } = require('discord.js');
const { MESSAGES } = require("../../util/constants");

module.exports.run = async (client, message, args) =>  {
  let embed = new MessageEmbed()
    .setColor("#B4E0E0")
    .setAuthor(`Informations ${client.user.username} v${client.config.bot.bversion}`, client.user.avatarURL())
    .addFields(
      { name: "OS", value: `\`${process.platform}\``, inline: true},
      { name: 'Mémoire utilisée', value: `\`${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB\``, inline: true},
      { name: '\u200b', value: `\u200b`, inline: true},

      { name: 'Serveurs', value: `\`${client.guilds.cache.size.toString() - 1}\``, inline: true},
      { name: 'Salons', value: `\`${client.channels.cache.size.toString()}\``, inline: true},
      { name: 'Utilisateurs', value: `\`${client.guilds.cache.map(g => g.memberCount).reduce((a, b) => a + b)}\``, inline: true},
    );
  const msg = await message.channel.send(embed);
  embed
    .addField("Uptime", `\`${Math.floor(client.uptime / 1000 / 60).toString()} minutes\``, true)
    .addField("Latence du bot", `${msg.createdTimestamp - message.createdTimestamp} ms`, true)
    .addField("Latence de l'API", `${Math.round(client.ws.ping)} ms`, true)
    // .addField("\u200b", `\u200b`, true)
    //       { name: 'Source', value: `**[GitHub](${client.config.GLOBALSETTINGS.github})**`, inline: true},
    .addFields(
      { name: 'Version du bot', value: `v**${client.config.bot.bversion}**`, inline: true},
      { name: 'Version nodejs', value: `**${process.version}**`, inline: true},
      { name: 'Version Discord.js', value: `**${client.config.GLOBALSETTINGS.Djsversion}**`, inline: true},
      
      { name: '\u200b', value: `\u200b`, inline: true},
      // { name: 'Serveur Support', value: `**[StarGaming - Bot Support Server](${client.config.GLOBALSETTINGS.sgBotServer})**`, inline: true},
      { name: 'Serveur Communautaire StarGaming', value: `**[StarGaming - Community Server](${client.config.GLOBALSETTINGS.sgServer})**`, inline: true},
      { name: '\u200b', value: `\u200b`, inline: true},
    );
  let guilds = '';
  client.guilds.cache.forEach(guild => {
    if(guild.name !== "StarGaming"){
      guilds = `${guilds}\n\`${guild.name}\` - **${guild.members.cache.filter(mbr => mbr.user.bot === false).size}** Membres (\`${guild.id}\`)`;
    }
  })
  if(guilds !== ""){
    embed
      .addField("Liste des Serveurs: ", `${guilds}`, false)
  }
  msg.edit(embed);
      
  // .then(msg => {msg.delete({ timeout: 55000 })}).catch(console.error);
}

module.exports.help = {
  name: "bot-info",
  aliases: ["bot-info", "botinfo", "binfo"],
  category: 'infos',
  description: "Renvoie des informations concernant le bot.",
  cooldown: 4,
  usage: '',
  args: false,
}