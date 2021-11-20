const { MESSAGES } = require("../../util/constants");
const { MessageEmbed, MessageAttachment } = require('discord.js');

module.exports.run = async (client, message, args) =>  {
  message.delete();
  let embed = new MessageEmbed()
    .setColor("#d54e12")
    .setTitle("Pong ! 🏓");

  const msg = await message.channel.send(embed);
  embed
    .addField("Latence du bot", `${msg.createdTimestamp - message.createdTimestamp} ms`, true)
    .addField("Latence de l'API", `${Math.round(client.ws.ping)} ms`, true);
  msg.edit(embed).then(msg => {msg.delete({ timeout: 55000 })}).catch(console.error);

}

module.exports.help = {
  name: "ping",
  aliases: ["ping", "latence"],
  category: 'infos',
  description: "Renvoie la latence du bot !",
  cooldown: 4,
  usage: '',
  args: false,
}