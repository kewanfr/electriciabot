const { MessageEmbed, MessageAttachment } = require('discord.js');

module.exports.run = async (client, message, args) =>  {
  // message.delete();
  
  let embed = new MessageEmbed()
    .setAuthor(message.author.username, message.author.displayAvatarURL())
    .setColor("#ad14da")
    .setTitle(`Sondage`)
    .setDescription(`${args.join(" ")}`)
    .addField("Répondre à la question ci-sessus à l'aide d'une des réactions:", `
    ✅ - Pour (Oui)
    ➖ - Neutre (Ne sais pas)
    ❌ - Contre (Non)
    `);
  const poll = await message.channel.send(embed);
  await poll.react("✅");
  await poll.react("➖");
  await poll.react("❌");

  client.logger.msg_log(message, `Sondage: ${args.join(" ")}`, true);

  // let arguments = args.join(" ").split(", ");
  // let question = arguments.slice();
  // var field = " ";
  // let i = 1;
  // for(opt in arguments){
  //   let emoji
  // }
  // let embed = new MessageEmbed()
  //   .setAuthor(message.author.username, message.author.displayAvatarURL())
  //   .setColor("#ad14da")
  //   .setTitle(`Sondage`)
  //   .setDescription(`${arguments[1]}`)
  //   .addField("Répondre à la question ci-sessus à l'aide d'une des réactions:", `
  //   ${arguments[1]} - Pour (Oui)
  //   ➖ - Neutre (Ne sais pas)
  //   ❌ - Contre (Non)
  //   `);
  // const poll = await message.channel.send(embed);
  // await poll.react("✅");
  // await poll.react("➖");
  // await poll.react("❌");
}

module.exports.help = {
  name: 'sondage',
  aliases: ['sondage', 'poll'],
  category: 'moderation',
  description: "Permet de creer un sondage simple.",
  cooldown: 10,
  hide: false,
  usage: '[sondage]',
  args: true,
}