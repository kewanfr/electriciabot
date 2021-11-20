const { MessageEmbed } = require("discord.js");
const fetch = require("node-fetch");

module.exports.run = async (client, message, args) => {
  message.delete();
  if(!args.length) {
    var url = "https://picsum.photos/1920/1080";
  }else {
    if(!args[0] || !args[1] || isNaN(args[0]) || isNaN(args[1])) return message.channel.send(":x: Si vous souhaitez définir une résolution, vous devez faire suivre la commande de deux nombres !");
    var url = `https://picsum.photos/${args[0]}/${args[1]}`;
  }
	const wallpaper = await fetch(url).then((res) => res).then((json) => json);

  let embed = new MessageEmbed()
    .setColor("ffa500")
    .setTitle(":paperclip: Image :paperclip:")
    .setDescription(`L'image ne s'affiche pas ? [Cliquez-ici](${wallpaper.url})`)
    .setImage(wallpaper.url)
    .setFooter(
      `Demandé par ${message.author.username}`,
      message.author.avatarURL()
    );

  message.channel.send(embed);
};

module.exports.help = {
  name: 'image',
  aliases: ["fond-ecran", "wallpaper"],
  category: 'images',
  description: "Renvoie un fond d'écran aléatoire.",
  cooldown: 2,
  usage: "([hauteur]) ([largeur])",
  args: false,
}