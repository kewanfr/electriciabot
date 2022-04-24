module.exports = async (client) => {
  client.logger.log(
    `Connecté en tant que ${client.user.tag}!`,
    "ready"
  );

  // var now = new Date();
  // var hour = now.getHours();
  // var minute = now.getMinutes();
  // var second = now.getSeconds();
  // var times = (`[${hour}:${minute}:${second}]/`);


  // console.log(times+`\x1b[33m%s\x1b[0m`,'[WARN]','\x1b[0m','Connexion en cours...');
  // console.log(times+`\x1b[33m%s\x1b[0m`,'[WARN]','\x1b[0m','Connexion à l\'API Discord.js en cours...');
  // console.log(times+`\x1b[32m%s\x1b[0m`,'[OK]','\x1b[0m', 'Connexion à l\'API Discord.js effectuée');
  // console.log(times+`\x1b[36m%s\x1b[0m`,'[INFO]', '\x1b[0m','Connecté sur ' + client.user.username + '#' + client.user.discriminator);
  // console.log(times+`\x1b[32m%s\x1b[0m`,'[OK]','\x1b[0m','Chargement terminé');
  // console.log(times+`\x1b[32m%s\x1b[0m`,'[OK]','\x1b[0m','Prêt et connecté');

  // var users = await client.db.get(`guilds.722322784465977384.users`).value();
  // // console.log(user.username);
  // for (const u in users) {
  //   const user = users[u];
  //   // console.log(u);
  //   // console.log(user.username);
  //   // console.log(user.id);
  //   // console.log(client.users.cache.get(u));
  //   if(!client.users.cache.get(u)){
  //     client.db.unset(`guilds.722322784465977384.users.${u}`).write();
  //     console.log(`${user.username} (${u}) removed from db`);
  //   }

  // }

  const activities = [
      `Electricia ${client.config.bot.bversion}`,
      `${client.config.PREFIX}help | Electricia v${client.config.bot.version}`
  ];
  client.setInterval(() => {
      const index = Math.floor(Math.random() * activities.length);
      client.user.setActivity(activities[index]);
  }, 15000);

  // client.user.setActivity(`Electricia v1.0-beta | par kéwandev`);

  client.guilds.cache.get('722322784465977384').members.cache.get(client.user.id).setNickname(`Éléctricia V${client.config.bot.version}`)

};
