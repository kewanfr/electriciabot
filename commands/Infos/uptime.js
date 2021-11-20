const { MESSAGES } = require("../../util/constants");
const { MessageEmbed, MessageAttachment } = require('discord.js');

module.exports.run = (client, message, args) =>  {
  message.delete();
  let totalSeconds = (client.uptime / 1000);
  let days = Math.floor(totalSeconds / 86400);
  let hours = Math.floor(totalSeconds / 3600);
  totalSeconds %= 3600;
  let minutes = Math.floor(totalSeconds / 60);
  let seconds = totalSeconds % 60;
  let embed = new MessageEmbed()
    .setColor("#d54e12")
    .setTitle("Uptime du bot !")
    .addField("Uptime", `${days} d ${hours} hrs, ${minutes} min and ${Math.floor(seconds)} seconds`, true);

  message.channel.send(embed);
}

module.exports.help = {
  name: "uptime",
  aliases: ["uptime"],
  category: 'infos',
  description: "Renvoie l'uptime du bot.",
  cooldown: 4,
  usage: '',
  args: false,
}