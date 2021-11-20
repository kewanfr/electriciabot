const { Collection } = require("discord.js");
// const { setUnionDependencies, i } = require("mathjs");

module.exports = async (client, message) => {

  if(message.author.bot) return;
  if(!message.guild.id) return;

  if(message.guild.id === "722322784465977384"){
    if(!client.db.get(`guilds.${message.guild.id}`).value()){
      client.db.set(`guilds.${message.guild.id}`, {
        id: message.guild.id,
        type: "Normal",
        shardID: message.guild.shardID,
        name: message.guild.name,
        icon: message.guild.icon,
        region: message.guild.region,
        memberCount: message.guild.memberCount,
        systemChannelID: message.guild.systemChannelID,
        ownerID: message.guild.ownerID,
        users: {},
        settings: client.config.settings,
        warns: {

        }
      }).write();
    }

    if(!client.db.get(`guilds.${message.guild.id}.users.${message.author.id}`).value()){
      client.db.set(`guilds.${message.guild.id}.users.${message.author.id}`, {
        id: message.member.user.id,
        username: message.member.user.username,
        discriminator: message.member.user.discriminator,
        bot: message.member.user.bot,
        avatar: message.member.user.avatar,
        avatarURL: message.member.user.avatarURL,
        balance: 0,
        experience: 0,
        messages: 0,
        level: 0,
        balance: 10,
        sanctions: {}
      }).write();

    }
    require('../../roles')(client, message);

    // if(!client.db.get(`users.${message.author.id}`).value()){
    //   client.db.set(`users.${message.author.id}`, {
    //     id: message.member.user.id,
    //     username: message.member.user.username,
    //     discriminator: message.member.user.discriminator,
    //     bot: message.member.user.bot,
    //     avatar: message.member.user.avatar,
    //     avatarURL: message.member.user.avatarURL,
    //     balance: 0,
    //     experience: 0,
    //     messages: 0,
    //     level: 1,
    //     balance: 1,
    //   }).write();
    // }

    var user = client.db.get(`guilds.${message.guild.id}.users.${message.author.id}`).value();
    // var globalUser = client.db.get(`users.${message.author.id}`).value();

      // client.db.set(`guilds.${message.guild.id}.users.${message.author.id}.messages`, {
      //   id: message.member.user.id,
      //   username: message.member.user.username,
      //   discriminator: message.member.user.discriminator,
      //   bot: message.member.user.bot,
      //   avatar: message.member.user.avatar,
      //   avatarURL: message.member.user.avatarURL,
      //   balance: 0,
      //   experience: 0,
      //   messages: 0
      // }).write();
    if(client.config.ignorexp != message.channel.id){

      // Système d'exp
      let messages = user.messages + 1;
      client.db.set(`guilds.${message.guild.id}.users.${message.member.id}.messages`, messages).write();
      // let Globalmessages = globalUser.messages + 1;
      // client.db.set(`users.${message.member.id}.messages`, Globalmessages).write();
      const expCd = Math.floor(Math.random() * 19) + 1; // 1 - 20
      const expToAdd = Math.floor(Math.random() * 35) + 10; // 10 - 45
      // const expCdGlobal = Math.floor(Math.random() * 19) + 1; // 1 - 20
      // const expToAddGlobal = Math.floor(Math.random() * 15) + 10; // 10 - 25
      if (expCd >= 8 && expCd >= 11) {
        var expD = user.experience + expToAdd;
        client.db.set(`guilds.${message.guild.id}.users.${message.member.id}.experience`, expD).write();
      }
      // await client.addExp(client, message.member.id, message.guild.id, expToAdd);
      // if (expCdGlobal >= 8 && expCdGlobal >= 11) {
      //   var expG = globalUser.experience + expToAddGlobal;
      //   client.db.set(`users.${message.member.id}.experience`, expG).write();
      // }
      const Level = Math.floor(0.125 * Math.sqrt(expD));
      // const Level = Math.floor(0.13 * Math.sqrt(expD));
      // const GlobalLevel = Math.floor(0.13 * Math.sqrt(expG));

      if (user.level < Level || user.level > Level) {
        let balToAdd = 10 + Level;
        console.log(balToAdd)
        //client.db.get(`guilds.${message.guild.id}.settings.channels.exp`).value()
        client.db.set(`guilds.${message.guild.id}.users.${message.member.id}.level`, Level).write();
        client.db.set(`guilds.${message.guild.id}.users.${message.member.id}.balance`, user.balance + balToAdd).write();

        client.channels.cache.get(client.config.settings.channels.levels).send(`L'utilisateur ${message.author} vient de passer niveau **${Level}** et gagne donc **${balToAdd}** éléctricias !\nIl est donc désormais à : **${user.balance}** éléctricias 💸 !`);
      }

      // if (globalUser.level < GlobalLevel) {
      //   client.channels.cache.get(client.db.get(`guilds.${message.guild.id}.settings.channels.exp`).value()).send(`L'utilisateur ${message.author} vient de passer niveau **${Level}** !`);
      //   client.db.set(`users.${message.member.id}.level`, GlobalLevel).write();
      // }

        // wait client.addGlobalExp(client, message.member.id, expToAddGlobal);
      // Système d'exp

    }


    // Traitement des commandes
    // if (!message.content.startsWith(client.PREFIX)) return;
    // if (!message.content.startsWith(guild.settings.prefix) && !message.content.startsWith(`<@${client.user.id}>`)) return;
    if (!message.content.startsWith(client.config.PREFIX) && !message.content.startsWith(`<@${client.user.id}>`)) return;

    // const args = message.content.slice(client.PREFIX.length).split(/ +/);
    const args = message.content.slice(client.config.PREFIX.length).split(/ +/);
    const commandNme = args.shift().toLowerCase();
    client.accentsTidy = function(s){
      var r=s.toLowerCase();
      r = r.replace(new RegExp(/\s/g),"");
      r = r.replace(new RegExp(/[àáâãäå]/g),"a");
      r = r.replace(new RegExp(/æ/g),"ae");
      r = r.replace(new RegExp(/ç/g),"c");
      r = r.replace(new RegExp(/[èéêë]/g),"e");
      r = r.replace(new RegExp(/[ìíîï]/g),"i");
      r = r.replace(new RegExp(/ñ/g),"n");                
      r = r.replace(new RegExp(/[òóôõö]/g),"o");
      r = r.replace(new RegExp(/œ/g),"oe");
      r = r.replace(new RegExp(/[ùúûü]/g),"u");
      r = r.replace(new RegExp(/[ýÿ]/g),"y");
      r = r.replace(new RegExp(/\W/g),"");
      return r;
    };
    const commandName = client.accentsTidy(commandNme);
    // if (!client.commands.has(commandName)) return;
    const command = client.commands.get(commandName) || client.commands.find(cmd => cmd.help.aliases && cmd.help.aliases.includes(commandName));
    if(!command) return;

    if(command.help.disabled) return false;
    if(command.help.args && !args[0]) return message.channel.send(`:x: Erreur, cette commande nécessite des arguments !\nUtilisation de la commande: \`${client.config.PREFIX}${command.help.name} ${command.help.usage}\``);

    // Système de Cooldown
    if(!client.cooldowns.has(command.help.name)) client.cooldowns.set(command.help.name, new Collection());
    const timeNow = Date.now();
    const tStamps = client.cooldowns.get(command.help.name);
    const cdAmount = (command.help.cooldown || 5) * 1000;

    if(tStamps.has(message.author.id)){
      const cdExpirationTime = tStamps.get(message.author.id) + cdAmount;

      if(timeNow < cdExpirationTime){
        timeLeft = (cdExpirationTime - timeNow) / 1000;
        message.reply(`:x: Merci d'attendre ${timeLeft.toFixed(0)} seconde(s) avant de ré-utiliser la commande \`${command.help.name}\` !`).then((msg) => { msg.delete({ timeout: timeLeft.toFixed(0) * 1000 }); }).catch(console.error);
        return false;
      }
    }
    tStamps.set(message.author.id, timeNow);
    setTimeout(() => tStamps.delete(message.author.id), cdAmount);
    // Système de Cooldown



    // if(client.verifCommand(client, message, command, args, guild, user) === true){
      client.logger.log(
        `(${message.guild.name}) L'utilisateur ${message.author.tag} lance la commande : ${command.help.name} (${args}) !`,
        "cmd"
      );
      command.run(client, message, args, user);
    // }
    // Traitement des commandes
  }

  
};
