const { MessageEmbed, MessageAttachment } = require('discord.js');
const randomDice = () => Math.floor(Math.random() * 2);

module.exports.run = (client, message, args) =>  {
  // message.delete();

  let number = randomDice();
  let embed = new MessageEmbed()
    .setColor("#d54e12")
    .setTitle("🥏 Pile ou Face")
    .attachFiles(new MessageAttachment(`./assets/imgs/pile_face/${number === 0  ? "face" : "pile"}.png`))
    .setThumbnail(`attachment://${number === 0  ? "face" : "pile"}.png`)
    .addField("Resultat", number === 0 ? "😐 Face !" : "⓵ Pile !", true);

  message.channel.send(embed);
}

module.exports.help = {
  name: 'pile-ou-face',
  aliases: ["pile-ou-face", "heads-or-tails", 'pof'],
  category: 'jeux',
  description: "Permet de lancer un pile ou face.",
  cooldown: 4,
  usage: '',
  args: false,
}