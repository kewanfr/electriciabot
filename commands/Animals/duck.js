const { MessageEmbed } = require("discord.js");
const fetch = require("node-fetch");

module.exports.run = async (client, message, args) => {
  message.delete();
	const fox = await fetch("https://random-d.uk/api/v2/random").then((res) => res.json()).then((json) => json.url);

  let embed = new MessageEmbed()
    .setColor("ffa500")
    .setTitle(":duck: Canard :duck:")
    .setDescription(`L'image ne s'affiche pas ? [Cliquez-ici](${fox})`)
    .setImage(fox)
    .setFooter(
      `Demandé par ${message.author.username}`,
      message.author.avatarURL()
    );

  message.channel.send(embed);
};

module.exports.help = {
  name: 'duck',
  aliases: ["duck", "canard"],
  category: 'animals',
  description: "Renvoie une image de canard.",
  cooldown: 2,
  usage: "",
  hide: true,
  args: false,
}