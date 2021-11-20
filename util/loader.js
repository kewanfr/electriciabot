const { readdirSync } = require('fs');  // lib permettant de lire des fichiers locaux

const loadCommands = (client, dir = "./commands") => {
  readdirSync(dir).forEach(dirs => {
    const commands = readdirSync(`${dir}/${dirs}`).filter(files => files.endsWith(".js"));

    for (const file of commands){

      const getFileName = require(`../${dir}/${dirs}/${file}`);
      // console.log(MESSAGES.COMMANDS[dirs.toUpperCase()][file.substring(0, file.length - 3).toUpperCase()]);
      // getFileName.help = MESSAGES.COMMANDS[dirs.toUpperCase()][file.substring(0, file.length - 3).toUpperCase()];
      client.commands.set(getFileName.help.name, getFileName);
      // console.log(getFileName);
      client.logger.log(
        `Chargement de la commande ${getFileName.help.name}`,
        "log"
      );
    };
  });
}

const execCommand = (client, message, args) => {
  command.run(client, message, args);
}
  
const loadEvents = (client, dir = "./events") => {
  readdirSync(dir).forEach(dirs => {
    const events = readdirSync(`${dir}/${dirs}/`).filter(files => files.endsWith(".js"));
  
    for (const event of events){
        const evt = require(`../${dir}/${dirs}/${event}`);
        const evtName = event.split(".")[0];
        client.logger.log(
          `Chargement de l'évenement ${evtName}`,
          "log"
        );
        client.on(evtName, evt.bind(null, client));
    };
  });
}

module.exports = {
  loadCommands,
  execCommand,
  loadEvents,
}