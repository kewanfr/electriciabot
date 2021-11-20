const { MessageEmbed } = require('discord.js');

module.exports.run = (client, message, args) =>  {
  message.delete();
  const choices = [ { name: "Pierre", emoji: "🤜" }, { name: "Feuille", emoji: "✋" }, { name: "Pierre", emoji: "🤜" },  { name: "Feuille", emoji: "✋" }, { name: "Ciseaux", emoji: "✂️" }, { name: "Ciseaux", emoji: "✂️" } ];
  const returnedResult = { win: { name: "Vous avez gagné !", emoji: "🏆" }, lost: { name: "Vous avez perdu !", emoji: "❌" }, equals: { name: "Egalité !", emoji: "💢" } } 
  const computerChoice = choices[Math.floor(Math.random() * 6)];
  const playerNameChoice = args[0].toLowerCase();
  switch (playerNameChoice) {
    case "pierre":
      var playerChoice = choices[0];
      break;

    case "feuille":
      var playerChoice = choices[1];
      break;

    case "ciseaux":
      var playerChoice = choices[2];
      break;
      
    default:
      var playerChoice = false;
      break;
  }

  switch (computerChoice.name){
    case "Pierre":
      switch (playerNameChoice) {
        case "feuille":
          var result = "win";
          break;
      
        case "ciseaux":
          var result = "lost";
          break;

        default:
          var result = "equals";
          break;
      }
      break;

    case "Feuille":
      switch (playerNameChoice) {
        case "pierre":
          var result = "lost";
          break;
      
        case "ciseaux":
          var result = "win";
          break;

        default:
          var result = "equals";
          break;
      }
      break;

    case "Ciseaux":
      switch (playerNameChoice) {
        case "pierre":
          var result = "win";
          break;
      
        case "feuille":
          var result = "lost";
          break;

        default:
          var result = "equals";
          break;
      }
      break;
  }
  console.log(computerChoice);
  if(playerChoice !== false){
    let embed = new MessageEmbed()
      .setColor("#d54e12")
      .setTitle("Pierre Feuille Ciseaux")
      .addField(`${message.author.username}`, `${playerChoice.emoji}`, true)
      .addField(`VS`, `⚡`, true)
      .addField(`${client.user.username}`, `${computerChoice.emoji}`, true)
      .addField(`Resultat:`, `${returnedResult[result].emoji} ${returnedResult[result].name}`, false)
      .setTimestamp();
    message.channel.send(embed);
  }
}

module.exports.help = {
  name: 'pierre-feuille-ciseaux',
  aliases: ["pierre-feuille-ciseaux", "rps", 'pfc'],
  category: 'jeux',
  description: "Jouer à Pierre Feuille Ciseaux avec le bot.",
  cooldown: 4,
  usage: "[pierre/feuille/ciseau]",
  args: true,
}