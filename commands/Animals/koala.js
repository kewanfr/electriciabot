const { MessageEmbed } = require("discord.js");
const fetch = require("node-fetch");

module.exports.run = async (client, message, args) => {
  message.delete();
	const koala = await fetch("https://some-random-api.ml/img/koala").then((res) => res.json()).then((json) => json.link);

  let embed = new MessageEmbed()
    .setColor("ffa500")
    .setTitle(":koala: Koala :koala:")
    .setDescription(`L'image ne s'affiche pas ? [Cliquez-ici](${koala})`)
    .setImage(koala)
    .setFooter(
      `Demandé par ${message.author.username}`,
      message.author.avatarURL()
    );

  message.channel.send(embed);
};

module.exports.help = {
  name: 'koala',
  aliases: ["koala"],
  category: 'animals',
  description: "Renvoie une image de koala",
  cooldown: 2,
  usage: "",
  hide: true,
  args: false,
}