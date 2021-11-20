const { MessageEmbed } = require("discord.js");
const fetch = require("node-fetch");

module.exports.run = async (client, message, args) => {
  message.delete();
	const shiba = await fetch("http://shibe.online/api/shibes").then((res) => res.json()).then((json) => json[0]);

  let embed = new MessageEmbed()
    .setColor("ffa500")
    .setTitle(":dog: Shiba :dog:")
    .setDescription(`L'image ne s'affiche pas ? [Cliquez-ici](${shiba})`)
    .setImage(shiba)
    .setFooter(
      `Demandé par ${message.author.username}`,
      message.author.avatarURL()
    );

  message.channel.send(embed);
};

module.exports.help = {
  name: 'shiba',
  aliases: ["shiba"],
  category: 'animals',
  description: "Renvoie une image de shiba.",
  cooldown: 2,
  usage: "",
  hide: true,
  args: false,
}