const { MessageEmbed } = require('discord.js');
const { readdirSync } = require('fs');  // lib permettant de lire des fichiers locaux
const categoryList = readdirSync('./commands'); 
const { CATEGORIES } = require('../../util/constants');

exports.run = (client, message, args) => {
  // if (!message.member.hasPermission("ADMINISTRATOR")) {
  //   var error_permissions = new MessageEmbed()
  //     .setDescription(":x: Vous ne disposez pas les permissions nécessaires pour effectuer cette commande.")
  //     .setColor("#F43436")
  //   message.channel.send(error_permissions)
  // }
  // if (message.member.hasPermission("ADMINISTRATOR")) {
  //   let args = message.content.split(" ").slice(1);
  //   if (!args[0]) {
  //     var error = new MessageEmbed()
  //       .setDescription(":x: Merci d'entrer un message pour effectuer cette commande.")
  //       .setColor("#F43436")
  //     message.channel.send(error)
  //   } else {
  //     message.channel.send(args.join(" "))
  //     message.delete();
  //   }
  // }
  var embed = new MessageEmbed();
  if(!args[0]){
    embed.setColor('RED').setTitle(`Menu d'aide`).setDescription(`Voici la liste des commandes disponibles sur le serveur.\nSi vous souhaitez obtenir plus d'informations, vous pouvez executer la commande: \`${client.config.PREFIX}help [command]\``)
    for(category in categoryList){
      let categorie = CATEGORIES[categoryList[category].toLowerCase()];
      if(categorie.hide){} else {
        let catcommands = [];
        client.commands.filter(cat => {
          if(cat.help.category === categoryList[category].toLowerCase() && !cat.help.hide){
            catcommands.push(cat.help.name);
          }
        });
        // console.log(catcommands)
        embed.addField(`${categorie.name} ${categorie.emoji}`, `${catcommands.map((cmd) => `${cmd}`).join(", ")}`);
      }
    }
  }else {
    let cmdname = client.accentsTidy(args[0].toLowerCase());
    const command = client.commands.get(cmdname) || client.commands.find(cmd => cmd.help.aliases && cmd.help.aliases.includes(cmdname));
    if(!command) return message.channel.send(':x: Erreur, cette commande n\'existe pas ! ');
    embed.setColor("RED")
    .setTitle(`Commande \`${command.help.name}\``)
    .addField("Description", `${command.help.description}`) //(cooldown: ${command.help.cooldown} secs)
    .addField("Categorie", `${CATEGORIES[command.help.category].name}`, true)
    .addField("Cooldown", `${command.help.cooldown} secs\n`, true)
    if(command.help.aliases.length > 1) embed.addField("Alias", `${command.help.aliases.join(', ')}`, true);
    embed.addField("Utilisation", command.help.usage ? `${client.config.PREFIX}${command.help.name} ${command.help.usage}` : `${client.config.PREFIX}${command.help.name}`, true);
  }
  message.channel.send(embed);


}

module.exports.help = {
  name: 'help',
  aliases: ['help', 'aide', 'commands'],
  category: 'misc',
  description: "Affiche les commandes disponibles",
  cooldown: 4,
  usage: '[message]',
  args: false,
}
