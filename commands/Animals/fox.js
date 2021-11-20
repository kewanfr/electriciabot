const { MessageEmbed } = require("discord.js");
const fetch = require("node-fetch");

module.exports.run = async (client, message, args) => {
  message.delete();
	const fox = await fetch("https://randomfox.ca/floof/").then((res) => res.json()).then((json) => json.image);

  let embed = new MessageEmbed()
    .setColor("ffa500")
    .setTitle(":fox: Renard :fox:")
    .setDescription(`L'image ne s'affiche pas ? [Cliquez-ici](${fox})`)
    .setImage(fox)
    .setFooter(
      `Demandé par ${message.author.username}`,
      message.author.avatarURL()
    );

  message.channel.send(embed);
};

module.exports.help = {
  name: 'fox',
  aliases: ["fox", "renard"],
  category: 'animals',
  description: "Renvoie une image de renard",
  cooldown: 2,
  usage: "",
  hide: true,
  args: false,
}