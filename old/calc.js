const { MessageEmbed } = require('discord.js');
const math = require("mathjs");

module.exports.run = (client, message, args) =>  {
  let calcul;
  let arg = args.join(" ")
  let rg1 = arg.replace(new RegExp("π", 'g'), "pi");

  let rg2 = rg1.replace(new RegExp("√", 'g'), "sqrt");
  let rg3 = rg2.replace(new RegExp("φ", 'g'), "phi");
  let rg4 = rg3.replace(new RegExp("Δ", 'g'), "1.55160211752992");//pi-(((sqrt(pi))+(sqrt(e))+(sqrt(phi))))
  let rg5 = rg4.replace(new RegExp("delta", 'g'), "1.55160211752992");

  try {
    calcul = math.evaluate(rg5);
  } catch (e) {
    client.logger.msg_log(message, `Impossible d'executer la commande Mathematiques ${args.join("")}`, true);
    return message.channel.send(new MessageEmbed().setTitle(":pencil: Règles de calcul").setDescription("Voici les differentes règles de calcul.").addField("Addition", "+", true).addField("Soustraction", "-", true).addField("Multiplication", "*", true).addField("Division", "/", true).addField("Puissance", "^2",true).addField("Racine Carré", "√(25)", true).addField("π", "π ou PI", true).addField("Phi, ou le nombre d'or", "φ ou phi", true));
    // .addField("Delta", "Δ ou delta", true)
  }

  let embed = new MessageEmbed()
    .setColor(0xffffff)
    .setTitle(":pencil: Resultat du Calcul")
    .addField("Calcul", `\`\`\`js\n${args.join(' ')}\`\`\``)
    .addField("Resultat", `\`\`\`js\n${calcul}\`\`\``);
  
  message.channel.send(embed);
}

module.exports.help = {
  name: 'calculatrice',
  aliases: ["calc", "calculatrice","maths"],
  category: 'misc',
  description: "Permet d'executer un calcul mathématique.",
  cooldown: 2,
  usage: "[calcul]",
  args: true,
}