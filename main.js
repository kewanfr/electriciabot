const { Client, Collection, MessageEmbed } = require("discord.js");
const client = new Client({ partials: ["MESSAGE", "CHANNEL", "REACTION"] });
const { loadCommands, execCommand, loadEvents } = require("./util/loader");
const fs = require("fs");
const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');

// const defdb = require("data/db.json");
const { log } = require("console");
let dats = fs.readFileSync('./data');
console.log(dats);
// let defdata = JSON.stringify(defdb);
// fs.writeFileSync('data/newdb.json', defdata);

const adapter = new FileSync('data/newdb.json');
client.db = low(adapter);

client.db.defaults({ guilds: {}, users: {}, config: {}, blacklist: []}).write()

client.commands = new Collection();
client.cooldowns = new Collection();
client.config = require("./config.js");
client.PREFIX = client.config.PREFIX;
client.logger = require("./util/logger");


client.on("warn", (info) => console.log(info));
client.on("error", console.error);
loadCommands(client);
loadEvents(client);

client.login(client.config.TOKEN);
