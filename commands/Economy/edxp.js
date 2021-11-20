const { MessageEmbed } = require('discord.js');

exports.run = (client, message, args, userInfo) => {
  if(!message.member.hasPermission("MANAGE_GUILD")) return message.channel.send(":x: Erreur, vous n'avez pas la permission d'utiliser cette commande !");
    let user = message.guild.member(message.mentions.users.first());
    if(user){
      if(isNaN(args[1])) return message.channel.send(":x: Erreur, veuillez spécifier une valeur !");
      let userInfo = client.db.get(`guilds.${message.guild.id}.users.${user.id}`).value();
      switch (args[0]) {
        case "set":
          client.db.set(`guilds.${message.guild.id}.users.${user.id}.experience`, parseInt(args[1])).write();
          client.db.set(`guilds.${message.guild.id}.classement.exp.${user.id}`, parseInt(args[1])).write();
          message.channel.send(`L'utilisateur ${user} est désormais à ${userInfo.experience} exp !`);
          break;

        case "remove":
          client.db.set(`guilds.${message.guild.id}.users.${user.id}.experience`, (userInfo.experience - parseInt(args[1]))).write();
          client.db.set(`guilds.${message.guild.id}.classement.exp.${user.id}`, (userInfo.experience - parseInt(args[1]))).write();
          message.channel.send(`L'utilisateur ${user} est désormais à ${userInfo.experience} exp !`);
          break;

        case "add":
          client.db.set(`guilds.${message.guild.id}.users.${user.id}.experience`, (userInfo.experience + parseInt(args[1]))).write();
          client.db.set(`guilds.${message.guild.id}.classement.exp.${user.id}`, (userInfo.experience + parseInt(args[1]))).write();
          message.channel.send(`L'utilisateur ${user} est désormais à ${userInfo.experience} exp !`);
          break;
      
        default:
          message.channel.send(`:x: Erreur, veuillez utiliser la commande comme suite : \`editxp [add/remove/set] [exp] [@user]\` `);
          break;
      }
      // var User = client.db.get(`guilds.${message.guild.id}.users.${user.id}`).value();
      // if(!User.experience) return message.channel.send(":x: Cet utilisateur n'a pas encore envoyé de messages !")
      // var embed = new MessageEmbed()
      //   .setColor("#d54e12")
      //   .setTitle(`Niveau de ${user.user.tag}`)
      //   .setAuthor(`${user.user.username}`, `${user.user.avatarURL()}`)
      //   .addField("Experience", `**${User.experience}** xp (Level: **${User.level}**)`)
      //   .addField("Monnaie", `**${User.balance}** Electricias`)
      //   .addField("Messages", `**${User.messages}** envoyés`);
      // if(User) embed.addField("Serveur", `**${User.experience}** xp (Level **${User.level}**)`, true);
      // if(GlobalUser.experience) embed.addField("Global", `**${GlobalUser.experience}** xp (Level **${GlobalUser.level}**)`, true);
    }else return message.channel.send(":x: Erreur, veuillez mentionner un utilisateur !");
  
  // message.channel.send(embed);
}

module.exports.help = {
  name: 'edit-xp',
  aliases: ['edit-xp', 'edxp', 'editxp'],
  category: 'economy',
  description: "Permet d'ajouter ou de définir l'experience d'un utilisateur",
  cooldown: 10,
  defaultPerm: "Moderator",
  permissions: "MANAGE_GUILD",
  usage: '[set/add/remove] [exp] [@user]',
  hide: true,
  args: true,
}
