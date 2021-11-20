const { MessageEmbed } = require("discord.js");
const fetch = require("node-fetch");

module.exports.run = async (client, message, args) => {
  message.delete();
	const birb = await fetch("https://some-random-api.ml/img/birb").then((res) => res.json()).then((json) => json.link);

  let embed = new MessageEmbed()
    .setColor("ffa500")
    .setTitle(":bird: Oiseau :bird:")
    .setDescription(`L'image ne s'affiche pas ? [Cliquez-ici](${birb})`)
    .setImage(birb)
    .setFooter(
      `Demandé par ${message.author.username}`,
      message.author.avatarURL()
    );

  message.channel.send(embed);
};

module.exports.help = {
  name: 'bird',
  aliases: ["bird", "birb", "oiseau"],
  category: 'animals',
  description: "Renvoie une image d'oiseau.",
  cooldown: 2,
  usage: "",
  hide: true,
  args: false,
}