const { MessageEmbed } = require('discord.js');

exports.run = (client, message, args, userInfo) => {
  let userssr = client.db.get(`guilds.${message.guild.id}.users`).value();
  let sorted = Object.values(userssr);
  let sortable = sorted.sort((a,b) => {return b.balance - a.balance;});
  let guildUsers = client.db.get(`guilds.${message.guild.id}.users`).value();
  let embed = new MessageEmbed()
    .setTitle(`🏆 Classement Economie **${message.guild.name}** 💸`)
    .setColor("RED")
    // .setDescription(`${sorted.map((sor) => `🎖️ **#${sorted.indexOf(sor) + 1}** - <@!${sor.id}> (**${sor.balance}** électricias)`).join("\n")}`)
    // .setDescription(`${sorted.map((sor) => `🎖️ **#${sorted.indexOf(sor) + 1}** - <@!${sor[0]}> (**${guildUsers[sor[0]].balance}** électricias)`).join("\n")}`)
    .setDescription(`
    ${sortable[0] ? `**#1** 🥇 - <@!${sortable[0].id}> (Niveau **${Math.floor(0.13 * Math.sqrt(sortable[0].experience))}** - **${sortable[0].balance}** électricias)` : ``}
    ${sortable[1] ? `**#2** 🥈 - <@!${sortable[1].id}> (Niveau **${Math.floor(0.13 * Math.sqrt(sortable[1].experience))}** - **${sortable[1].balance}** électricias))` : ``}
    ${sortable[2] ? `**#3** 🥉 - <@!${sortable[2].id}> (Niveau **${Math.floor(0.13 * Math.sqrt(sortable[2].experience))}** - **${sortable[2].balance}** électricias))` : ``}
    ${sortable[3] ? `**#4** 🎖️ - <@!${sortable[3].id}> (Niveau **${Math.floor(0.13 * Math.sqrt(sortable[3].experience))}** - **${sortable[3].balance}** électricias))` : ``}
    ${sortable[4] ? `**#5** 🎖️ - <@!${sortable[4].id}> (Niveau **${Math.floor(0.13 * Math.sqrt(sortable[4].experience))}** - **${sortable[4].balance}** électricias))` : ``}
    ${sortable[5] ? `**#6** 🎖️ - <@!${sortable[5].id}> (Niveau **${Math.floor(0.13 * Math.sqrt(sortable[5].experience))}** - **${sortable[5].balance}** électricias))` : ``}
    ${sortable[6] ? `**#7** 🎖️ - <@!${sortable[6].id}> (Niveau **${Math.floor(0.13 * Math.sqrt(sortable[6].experience))}** - **${sortable[6].balance}** électricias))` : ``}
    ${sortable[7] ? `**#8** 🎖️ - <@!${sortable[7].id}> (Niveau **${Math.floor(0.13 * Math.sqrt(sortable[7].experience))}** - **${sortable[7].balance}** électricias))` : ``}
    ${sortable[8] ? `**#9** 🎖️ - <@!${sortable[8].id}> (Niveau **${Math.floor(0.13 * Math.sqrt(sortable[8].experience))}** - **${sortable[8].balance}** électricias))` : ``}
    ${sortable[9] ? `**#10** 🎖️ - <@!${sortable[9].id}> (Niveau **${Math.floor(0.13 * Math.sqrt(sortable[9].experience))}** - **${sortable[9].balance}** électricias))` : ``}
    ${sortable[10] ? `**#11** 🎖️ - <@!${sortable[10].id}> (Niveau **${Math.floor(0.13 * Math.sqrt(sortable[10].experience))}** - **${sortable[10].balance}** électricias))` : ``}
    ${sortable[11] ? `**#12** 🎖️ - <@!${sortable[11].id}> (Niveau **${Math.floor(0.13 * Math.sqrt(sortable[11].experience))}** - **${sortable[11].balance}** électricias))` : ``}
    ${sortable[12] ? `**#13** 🎖️ - <@!${sortable[12].id}> (Niveau **${Math.floor(0.13 * Math.sqrt(sortable[12].experience))}** - **${sortable[12].balance}** électricias))` : ``}
    ${sortable[13] ? `**#14** 🎖️ - <@!${sortable[13].id}> (Niveau **${Math.floor(0.13 * Math.sqrt(sortable[13].experience))}** - **${sortable[13].balance}** électricias))` : ``}
    ${sortable[14] ? `**#15** 🎖️ - <@!${sortable[14].id}> (Niveau **${Math.floor(0.13 * Math.sqrt(sortable[14].experience))}** - **${sortable[14].balance}** électricias))` : ``}
    ${sortable[15] ? `**#16** 🎖️ - <@!${sortable[15].id}> (Niveau **${Math.floor(0.13 * Math.sqrt(sortable[15].experience))}** - **${sortable[15].balance}** électricias))` : ``}
    ${sortable[16] ? `**#17** 🎖️ - <@!${sortable[16].id}> (Niveau **${Math.floor(0.13 * Math.sqrt(sortable[16].experience))}** - **${sortable[16].balance}** électricias))` : ``}
    ${sortable[17] ? `**#18** 🎖️ - <@!${sortable[17].id}> (Niveau **${Math.floor(0.13 * Math.sqrt(sortable[17].experience))}** - **${sortable[17].balance}** électricias))` : ``}
    ${sortable[18] ? `**#19** 🎖️ - <@!${sortable[18].id}> (Niveau **${Math.floor(0.13 * Math.sqrt(sortable[18].experience))}** - **${sortable[18].balance}** électricias))` : ``}
    ${sortable[19] ? `**#20** 🎖️ - <@!${sortable[19].id}> (Niveau **${Math.floor(0.13 * Math.sqrt(sortable[19].experience))}** - **${sortable[19].balance}** électricias))` : ``}
    `);
    //  - **${guildUsers[sor[0]].balance}** électricias`)
  message.channel.send(embed)
}

module.exports.help = {
  name: 'classementeconomie',
  aliases: ['classementeco', 'classementeconomie'],
  category: 'economy',
  description: "Affiche le classement du serveur par électricias",
  cooldown: 5,
  defaultPerm: "User",
  permissions: "MANAGE_GUILD",
  usage: '',
  args: false,
}
