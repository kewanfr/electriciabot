require("dotenv").config();

module.exports = {
  ID: "719620333518454794",
  TOKEN: process.env.TOKEN,
  PREFIX: process.env.PREFIX,
  settings: {
    logs: false,
  },
  apis: {
    BLAGUES_API: process.env.BLAGUES_API_TOKEN,
  },
  bot: {
    website: "https://dimensionbot.ml",
    docs: "https://docs.stargaming.ml",
    Owner: '495944179755515904',
    BotOwner: '497057985688895489',
    version: "1.0.0",
    bversion: "1.0.0-20210310"
  },
  ignorexp: "787637423886696488",
  perms: {
    Owner: 6,
    BotOwner: 5,
    Administrator: 3,
    Moderator: 2,
    User: 1,
    Visitor: 0,
  },
  plugins: {
    MAX_PLAYLIST_SIZE: 200,
    MAX_REACTIONS: {
      Normal: 5,
      Partenaire: 7,
      Booster: 12,
      Premium: 20,
      Owner: 40,
    },
    MAX_AUTOROLES: {
      Normal: 1,
      Partenaire: 2,
      Booster: 3,
      Premium: 5,
      Owner: 10,
    },
  },
  settings: {
    type: "Normal",
    prefix: "//",
    channels: {
      logs: "776866791838318633",
      exp: "",
      banque: "",
      levels: "789900817901158410"
    },
    reactions: {
      1: "not",
    },
    lastreact: 0,
    disabledCommands: {},
    plugins: {
      warns:{
        warns: 3,
        banPeriod: false,
      }
    }
  },
  GLOBALSETTINGS: {
    Djsversion: "discord.js@12.5.1",
    github: "https://github.com/StarGamingFr/StarGaming-bot",
    sgBotServer: "https://discord.gg/aed3x8G",
    sgServer: "https://discord.gg/CNhGBqQ",
  },
}
