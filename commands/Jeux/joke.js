const { MessageEmbed } = require("discord.js");
const fetch = require("node-fetch");

module.exports.run = async (client, message, args) => {
  message.delete();
  if(!args.length) {
    var url = "https://www.blagues-api.fr/api/random";
  }else {
    if(!args[0] || (args[0] !== "global" && args[0] !== "dev" && args[0] !== "dark" && args[0] !== "limit" && args[0] !== "beauf" && args[0] !== "blondes")) return message.channel.send(":x: Si vous souhaitez définir le type de blague, veuillez choisir entre **global, dev, dark, limit, beauf, blondes**");
    var url = `https://www.blagues-api.fr/api/type/${args[0]}/random`;
  }
	const blague = await fetch(url, {headers: {'Authorization': `Bearer ${client.config.apis.BLAGUES_API}`}}).then((res) => res.json()).then((json) => json);

  let embed = new MessageEmbed()
    .setColor("ffa500")
    .setTitle("Blague :sweat_smile:")
    .setDescription(`Type: ${blague.type}\nBlague: **${blague.joke}**\n**${blague.answer}**`)
    .setFooter(
      `Demandé par ${message.author.username}`,
      message.author.avatarURL()
    );

  message.channel.send(embed);
};

module.exports.help = {
  name: 'blague',
  aliases: ['blague', 'joke'],
  category: 'jeux',
  description: "Renvoie une blague.",
  cooldown: 2,
  usage: "([categorie:global/dev/dark/limit/beauf/blondes])",
  args: false,
}