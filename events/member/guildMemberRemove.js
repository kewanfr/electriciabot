module.exports = async (client, member) => {
  let users = client.db.get(`guilds.${member.guild.id}.users`).value()
  delete users[member.id];
  client.db.set(`guilds.${member.id}.users`, users).write();
}