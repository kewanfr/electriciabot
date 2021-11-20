const { MessageEmbed, MessageAttachment } = require('discord.js');
const randomDice = () => Math.floor(Math.random() * 6) + 1;

module.exports.run = (client, message, args) =>  {
  // message.delete();
  let number = randomDice();
  let embed = new MessageEmbed()
    .setColor("#d54e12")
    .setTitle("🎲 Lancé de dé")
    .attachFiles(new MessageAttachment(`./assets/imgs/dice/${number}.png`))
    .setThumbnail(`attachment://${number}.png`)
    .addField("Resultat", number, true);
  
  message.channel.send(embed);
}

module.exports.help = {
  name: 'dé',
  aliases: ['de', 'dice'],
  category: 'jeux',
  description: "Permet de lancer un dé.",
  cooldown: 4,
  usage: '',
  args: false,
}
