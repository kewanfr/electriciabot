const { MessageEmbed } = require("discord.js");

module.exports.run = async (client, message, args) => {
  // message.delete();
  function clean(text) {
    if (typeof text === "string")
      return text
        .replace(/`/g, "`" + String.fromCharCode(8203))
        .replace(/@/g, "@" + String.fromCharCode(8203));
    return text;
  }
  // let msgFetch = await message.channel.messages.fetch("741364267454038066");
  // if(msgFetch){
  //   // msgFetch.edit("Deux nouveaux roles disponibles: <@&741362696716288102>, pour les abonnés de <@!697485150585618482> (<:eloigne:741369562423099554>) et <@&741368821859876954>, pour les vidéos de la chaîne Youtube (<:yt:741371433355313193>)");
  //   msgFetch.react('741371433355313193');
  // }

  if (message.author.id !== "497057985688895489" && message.author.id !== "495944179755515904")
    return message.channel.send(
      ":x: Vous n'avez pas la permission d'utiliser cette commande !"
    );
  if (message.author.id === "497057985688895489" || message.author.id === "495944179755515904"){
    const code = args.join(" ");
    const evaled = eval(code);
    const cleanCode = await clean(evaled);
    message.channel.send(cleanCode, { code: "js" });
    client.logger.msg_log(message, `Code eval ${cleanCode}`, true);
  }
};

module.exports.help = {
  name: 'eval',
  aliases: ['eval'],
  category: 'system',
  description: "Evalue une commande",
  cooldown: 10,
  defaultPerm: "Moderator",
  permissions: "MANAGE_GUILD",
  usage: '[message]',
  args: true,
}
