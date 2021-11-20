const { MessageEmbed } = require("discord.js");
const fetch = require("node-fetch");

module.exports.run = async (client, message, args) => {
  message.delete();
	const hug = await fetch("https://some-random-api.ml/animu/hug").then((res) => res.json()).then((json) => json.link);

  let embed = new MessageEmbed()
    .setColor("ffa500")
    .setTitle(":hugging: Calin :hugging:")
    .setDescription(`L'image ne s'affiche pas ? [Cliquez-ici](${hug})`)
    .setImage(hug)
    .setFooter(
      `Demandé par ${message.author.username}`,
      message.author.avatarURL()
    );

  message.channel.send(embed);
};

module.exports.help = {
  name: 'câlin',
  aliases: ['calin', 'hug'],
  category: 'images',
  description: "Renvoie une image de calin",
  cooldown: 2,
  usage: "",
  args: false,
}