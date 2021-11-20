const { MessageEmbed, MessageAttachment } = require('discord.js');

module.exports.run = (client, message, args) =>  {
  // message.delete();
  const replies = ["Oui", "Non", "Peut-être", "J'en suis sur", "C'est certain", "Je ne pense pas", "Sincèrement, non", "Je n'en suis pas sur", "Je n'ai pas compris", "Je ne sais pas", "Franchemenent, je pense que oui", "La vie est dur et il faut faire des choix !"];
  const question = args.join(" ");
  const response = Math.floor(Math.random() * replies.length);

  let embed = new MessageEmbed()
    .setAuthor(message.author.username, message.author.displayAvatarURL())
    .setColor("#FFFFFF")
    .setTitle(`${question}`)
    .setDescription(`:8ball: <@${message.author.id}>, ${replies[response]}`)
    .setThumbnail("https://cdn.discordapp.com/attachments/714910280672608257/720669530585563146/8ball.png");
  client.logger.msg_log(message, `8ball ${question}\n
${replies[response]}`, true);
  message.channel.send(embed);
}

module.exports.help = {
  name: 'question',
  aliases: ["question", "8ball", "8b"],
  category: 'jeux',
  description: "Réponds à ta question.",
  cooldown: 2,
  usage: "[question]",
  args: true,
}