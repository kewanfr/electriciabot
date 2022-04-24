const { MessageEmbed } = require('discord.js');

exports.run = (client, message, args, userInfo) => {
  let userssr = client.db.get(`guilds.${message.guild.id}.users`).value();
  let sorted = Object.values(userssr);
  let sortable = sorted.sort((a,b) => {return b.experience - a.experience;});

  let guildUsers = client.db.get(`guilds.${message.guild.id}.users`).value();
  // console.log(sortable[0]);
  let embed = new MessageEmbed()
    .setTitle(`🏆 Classement Experience **${message.guild.name}**`)
    .setColor("RED")
    // .setDescription(`${sorted.map((sor) => `🎖️ **#${sorted.indexOf(sor) + 1}** - <@!${sor.id}> (**${sor.experience}** xp - Niveau **${sor.level}**)`).join("\n")}`);
    .setDescription(`
    ${sortable[0] ? `**#1** 🥇 - <@!${sortable[0].id}> (Niveau **${Math.floor(0.13 * Math.sqrt(sortable[0].experience))}** - **${sortable[0].experience}** xp)` : ``}
    ${sortable[1] ? `**#2** 🥈 - <@!${sortable[1].id}> (Niveau **${Math.floor(0.13 * Math.sqrt(sortable[1].experience))}** - **${sortable[1].experience}** xp))` : ``}
    ${sortable[2] ? `**#3** 🥉 - <@!${sortable[2].id}> (Niveau **${Math.floor(0.13 * Math.sqrt(sortable[2].experience))}** - **${sortable[2].experience}** xp))` : ``}
    ${sortable[3] ? `**#4** 🎖️ - <@!${sortable[3].id}> (Niveau **${Math.floor(0.13 * Math.sqrt(sortable[3].experience))}** - **${sortable[3].experience}** xp))` : ``}
    ${sortable[4] ? `**#5** 🎖️ - <@!${sortable[4].id}> (Niveau **${Math.floor(0.13 * Math.sqrt(sortable[4].experience))}** - **${sortable[4].experience}** xp))` : ``}
    ${sortable[5] ? `**#6** 🎖️ - <@!${sortable[5].id}> (Niveau **${Math.floor(0.13 * Math.sqrt(sortable[5].experience))}** - **${sortable[5].experience}** xp))` : ``}
    ${sortable[6] ? `**#7** 🎖️ - <@!${sortable[6].id}> (Niveau **${Math.floor(0.13 * Math.sqrt(sortable[6].experience))}** - **${sortable[6].experience}** xp))` : ``}
    ${sortable[7] ? `**#8** 🎖️ - <@!${sortable[7].id}> (Niveau **${Math.floor(0.13 * Math.sqrt(sortable[7].experience))}** - **${sortable[7].experience}** xp))` : ``}
    ${sortable[8] ? `**#9** 🎖️ - <@!${sortable[8].id}> (Niveau **${Math.floor(0.13 * Math.sqrt(sortable[8].experience))}** - **${sortable[8].experience}** xp))` : ``}
    ${sortable[9] ? `**#10** 🎖️ - <@!${sortable[9].id}> (Niveau **${Math.floor(0.13 * Math.sqrt(sortable[9].experience))}** - **${sortable[9].experience}** xp))` : ``}
    ${sortable[10] ? `**#11** 🎖️ - <@!${sortable[10].id}> (Niveau **${Math.floor(0.13 * Math.sqrt(sortable[10].experience))}** - **${sortable[10].experience}** xp))` : ``}
    ${sortable[11] ? `**#12** 🎖️ - <@!${sortable[11].id}> (Niveau **${Math.floor(0.13 * Math.sqrt(sortable[11].experience))}** - **${sortable[11].experience}** xp))` : ``}
    ${sortable[12] ? `**#13** 🎖️ - <@!${sortable[12].id}> (Niveau **${Math.floor(0.13 * Math.sqrt(sortable[12].experience))}** - **${sortable[12].experience}** xp))` : ``}
    ${sortable[13] ? `**#14** 🎖️ - <@!${sortable[13].id}> (Niveau **${Math.floor(0.13 * Math.sqrt(sortable[13].experience))}** - **${sortable[13].experience}** xp))` : ``}
    ${sortable[14] ? `**#15** 🎖️ - <@!${sortable[14].id}> (Niveau **${Math.floor(0.13 * Math.sqrt(sortable[14].experience))}** - **${sortable[14].experience}** xp))` : ``}
    ${sortable[15] ? `**#16** 🎖️ - <@!${sortable[15].id}> (Niveau **${Math.floor(0.13 * Math.sqrt(sortable[15].experience))}** - **${sortable[15].experience}** xp))` : ``}
    ${sortable[16] ? `**#17** 🎖️ - <@!${sortable[16].id}> (Niveau **${Math.floor(0.13 * Math.sqrt(sortable[16].experience))}** - **${sortable[16].experience}** xp))` : ``}
    ${sortable[17] ? `**#18** 🎖️ - <@!${sortable[17].id}> (Niveau **${Math.floor(0.13 * Math.sqrt(sortable[17].experience))}** - **${sortable[17].experience}** xp))` : ``}
    ${sortable[18] ? `**#19** 🎖️ - <@!${sortable[18].id}> (Niveau **${Math.floor(0.13 * Math.sqrt(sortable[18].experience))}** - **${sortable[18].experience}** xp))` : ``}
    ${sortable[19] ? `**#20** 🎖️ - <@!${sortable[19].id}> (Niveau **${Math.floor(0.13 * Math.sqrt(sortable[19].experience))}** - **${sortable[19].experience}** xp))` : ``}
    `);
    // .setDescription(`${sorted.map((sor) => `🎖️ **#${sorted.indexOf(sor) + 1}** - <@!${sor.id}> (**${sor[1]}** xp - Niveau **${Math.floor(0.13 * Math.sqrt(sor.experience))}**)`).join("\n")}`);

  message.channel.send(embed)
}

module.exports.help = {
  name: 'classementexperience',
  aliases: ['classementexp', 'classementexperience', 'classementxp', 'xprank'],
  category: 'economy',
  description: "Affiche le classement du serveur par experience",
  cooldown: 5,
  defaultPerm: "User",
  permissions: "MANAGE_GUILD",
  usage: '',
  args: false,
}
