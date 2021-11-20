const { MessageEmbed } = require("discord.js");
const fetch = require("node-fetch");

module.exports.run = async (client, message, args) => {
	const dog = await fetch("https://dog.ceo/api/breeds/image/random").then((res) => res.json()).then((json) => json.message);
  message.delete();
  const answers = [
    "https://media.giphy.com/media/21GCae4djDWtP5soiY/giphy.gif",
    "https://www.petmd.com/sites/default/files/Acute-Dog-Diarrhea-47066074.jpg",
    "https://media.giphy.com/media/26FPqut4lzK3AECEo/giphy.gif",
    "https://media.giphy.com/media/Y4pAQv58ETJgRwoLxj/giphy.gif",
    "https://media.giphy.com/media/ftrPtuqQUIZ5opePYS/giphy.gif",
    "https://media.giphy.com/media/4Zo41lhzKt6iZ8xff9/giphy.gif",
    "https://media.giphy.com/media/pcwaLYOQb3xN6/giphy.gif",
    "https://media.giphy.com/media/3o7abAHdYvZdBNnGZq/giphy.gif",
    "https://media.giphy.com/media/51Uiuy5QBZNkoF3b2Z/giphy.gif",
    "https://media.giphy.com/media/4Zo41lhzKt6iZ8xff9/giphy.gif",
    "https://media.giphy.com/media/dTJd5ygpxkzWo/giphy.gif",
		"https://media.giphy.com/media/QvBoMEcQ7DQXK/giphy.gif",
		`${dog}`,
		`${dog}`,
		`${dog}`,
		`${dog}`,
		`${dog}`,
		`${dog}`,
		`${dog}`,
		`${dog}`,
		`${dog}`,
    "https://media.giphy.com/media/f4HpCDvF84oh2/giphy.gif",
    "https://media.giphy.com/media/3o7527pa7qs9kCG78A/giphy.gif",
    "https://media.giphy.com/media/kiBcwEXegBTACmVOnE/giphy.gif",
    "https://media.giphy.com/media/k2Da0Uzaxo9xe/giphy.gif",
    "https://media.giphy.com/media/BpDYodBlBXFIs/giphy.gif",
    "https://media.giphy.com/media/aCqb9YW7QclN3rtto5/giphy.gif",
    "https://media.giphy.com/media/1rNzWL6GFvGR9epyij/giphy.gif",
    "https://media.giphy.com/media/Qt7ZKXj42izpm/giphy.gif",
    "https://media.giphy.com/media/wjK3YnjoQf0go/giphy.gif",
    "https://media.giphy.com/media/9rtpurjbqiqZXbBBet/giphy.gif",
    "https://media.giphy.com/media/3o7TKSha51ATTx9KzC/giphy.gif",
    "https://media.giphy.com/media/9IRX12VhoXoR2/giphy.gif",
    "https://media.giphy.com/media/eeUJaTwsHh3tswkaYm/giphy.gif",
    "https://media.giphy.com/media/oDK8A6xUNjD2M/giphy.gif",
    "https://media.giphy.com/media/oDLDbBgf0dkis/giphy.gif",
    "https://media.giphy.com/media/fnlXXGImVWB0RYWWQj/giphy.gif",
    "https://media.giphy.com/media/WZP3qaxYj10gU/giphy.gif",
    "https://media.giphy.com/media/Pn1gZzAY38kbm/giphy.gif",
    "https://media.giphy.com/media/qpP7VsPNeBtpC/giphy.gif",
    "https://media.giphy.com/media/9fuvOqZ8tbZOU/giphy.gif",
    "https://media.giphy.com/media/ghAbYUswkmXHq/giphy.gif",
    "https://media.giphy.com/media/54Y38YdCPe58XA0FpJ/giphy.gif",
    "https://media.giphy.com/media/UvvK8rOSHPxgjo9ryD/giphy.gif",
    "https://media.giphy.com/media/RHDL2c1NCMu2c/giphy.gif",
    "https://media.giphy.com/media/xTiTnf9SCIVk8HIvE4/giphy.gif",
    "https://media.giphy.com/media/GXmXd0d9W5IMo/giphy.gif",
    "https://media.giphy.com/media/3o7bu9yMmZGkfPPqN2/giphy.gif",
    "https://media.giphy.com/media/4HeScCadLcoNQkKdaJ/giphy.gif",
    "https://media.giphy.com/media/pjzbionhFdccw/giphy.gif",
    "https://media.giphy.com/media/3o85xsGXVuYh8lM3EQ/giphy.gif",
    "https://media.giphy.com/media/MuztdWJQ4PR7i/giphy.gif",
    "https://media.giphy.com/media/oebOcslmnSXMQ/giphy.gif",
    "https://media.giphy.com/media/1iTItUOuJLsbev28/giphy.gif",
    "https://media.giphy.com/media/1fj7LPAGBMiCfxqtQy/giphy.gif",
    "https://media.giphy.com/media/1rNzWL6GFvGR9epyij/giphy.gif",
		"https://media.giphy.com/media/yJHN2CCfPIw4o/giphy.gif",
		`${dog}`,
		`${dog}`,
		`${dog}`,
		`${dog}`,
		`${dog}`,
		`${dog}`,
		`${dog}`,
		`${dog}`,
		`${dog}`,
		`${dog}`,
		`${dog}`,
		`${dog}`,
		`${dog}`,
		`${dog}`,
		`${dog}`,
  ];
  const answer = answers[Math.floor(Math.random() * answers.length)];

  let embed = new MessageEmbed()
    .setColor("ffa500")
    .setTitle(":dog: WOOF!! WOOF!! :dog:")
    .setDescription(`L'image ne s'affiche pas ? [Cliquez-ici](${answer})`)
    .setImage(answer)
    .setFooter(
      `Demandé par ${message.author.username}`,
      message.author.avatarURL()
    );

  message.channel.send(embed);
};

module.exports.help = {
  name: 'dog',
  aliases: ["dog", "chien"],
  category: 'animals',
  description: "Renvoie une image de chien.",
  cooldown: 2,
  usage: "",
  hide: true,
  args: false,
}