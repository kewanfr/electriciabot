const { ROLES } = require('./util/constants');

module.exports = ((client, message) => {
  var user = client.db.get(`guilds.${message.guild.id}.users.${message.author.id}`).value();
  
  if(ROLES[user.level] && !message.member.roles.cache.has(ROLES[user.level])){
    for (r in ROLES) {
      let role = ROLES[r];
      if(message.member.roles.cache.has(role)) message.member.roles.remove(role)
    }
    message.member.roles.add(ROLES[user.level]); 
  }
})