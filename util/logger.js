const chalk = require("chalk");
const moment = require("moment");

class logger {
  static log(content, type = "log") {
    const timestamp = `[${moment().format("YYYY-MM-DD HH:mm:ss")}]:`;
    switch (type) {
      case "log": {
        return console.log(
          `${timestamp} ${chalk.bgBlue(type.toUpperCase())} ${content} `
        );
      }
      case "warn": {
        return console.log(
          `${timestamp} ${chalk.black.bgYellow(type.toUpperCase())} ${content} `
        );
      }
      case "error": {
        return console.log(
          `${timestamp} ${chalk.bgRed(type.toUpperCase())} ${content} `
        );
      }
      case "debug": {
        return console.log(
          `${timestamp} ${chalk.green(type.toUpperCase())} ${content} `
        );
      }
      case "cmd": {
        return console.log(
          `${timestamp} ${chalk.black.bgWhite(type.toUpperCase())} ${content}`
        );
      }
      case "ready": {
        return console.log(
          `${timestamp} ${chalk.black.bgGreen(type.toUpperCase())} ${content}`
        );
      }
      default:
        throw new TypeError(
          "Le type de logger doit être warn, debug, log, ready, cmd ou error."
        );
    }
  }

  static msg_log(message, content, noMsg = false) {
    if(message === "") return console.log('erreur msg log');
    const timestamp = `[${moment().format("YYYY-MM-DD HH:mm:ss")}]:`;
    let cmd = message.command ? `[Cmd: ${message.command.help.name}]` : "";
    console.log(
      `${timestamp} ${chalk.black.bgWhite("Commande Action")} (${message.guild.name} - ${message.author.tag}${cmd}) ${content}`
    );
    if(noMsg !== true){
      if(message.replyed && message.replyed === true){
        return message.reply(`${content}`);
      }else {
        message.channel.send(`${content}`);
      }
    }
    // return console.log(
    //   `${timestamp} LOG COMMANDE: ${content} `
    // );
  }

  static msg_log_reply(message, content, noMsg = false) {
    if(message === "") return console.log('erreur msg log');
    const timestamp = `[${moment().format("YYYY-MM-DD HH:mm:ss")}]:`;
    if(noMsg !== true){
      message.reply(`${content}`);
    }
    // return console.log(
    //   `${timestamp} LOG COMMANDE: ${content} `
    // );
    let cmd = message.command ? `[Cmd: ${message.command.help.name}]` : "";
    return console.log(
      `${timestamp} ${chalk.black.bgWhite("Commande Action")} (${message.guild.name} - ${message.author.tag}${cmd}) ${content}`
    );
  }

  static error(content) {
    return this.log(content, "error");
  }

  static warn(content) {
    return this.log(content, "warn");
  }

  static debug(content) {
    return this.log(content, "debug");
  }

  static cmd(content) {
    return this.log(content, "cmd");
  }
}

module.exports = logger;