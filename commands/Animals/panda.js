const { MessageEmbed } = require("discord.js");
const fetch = require("node-fetch");

module.exports.run = async (client, message, args) => {
  message.delete();
	const panda = await fetch("https://some-random-api.ml/img/panda").then((res) => res.json()).then((json) => json.link);

  let embed = new MessageEmbed()
    .setColor("ffa500")
    .setTitle(":panda_face: Panda :panda_face: ")
    .setDescription(`L'image ne s'affiche pas ? [Cliquez-ici](${panda})`)
    .setImage(panda)
    .setFooter(
      `Demandé par ${message.author.username}`,
      message.author.avatarURL()
    );

  message.channel.send(embed);
};

module.exports.help = {
  name: 'panda',
  aliases: ["panda"],
  category: 'animals',
  description: "Renvoie une image de panda.",
  cooldown: 2,
  usage: "",
  hide: true,
  args: false,
}