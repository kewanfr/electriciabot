const { MessageEmbed } = require("discord.js");
var randomCat = require('random-cat');

module.exports.run = (client, message, args) => {

    message.delete();
    const answers = [
        "https://media.giphy.com/media/mlvseq9yvZhba/giphy.gif",
        "https://media.giphy.com/media/PekRU0CYIpXS8/giphy.gif",
        "https://media.giphy.com/media/CjmvTCZf2U3p09Cn0h/giphy.gif",
        "https://media.giphy.com/media/26xBEez1vnVb2WgBq/giphy.gif",
        "https://media.giphy.com/media/rWiEbamfqOHrq/giphy.gif",
        `${randomCat.get()}`,
        "https://media.giphy.com/media/cUzJz9NW0tBj95JJPn/giphy.gif",
        "https://media.giphy.com/media/xBAreNGk5DapO/giphy.gif",
        "https://media.giphy.com/media/VOPK1BqsMEJRS/giphy.gif",
        "https://media.giphy.com/media/MDJ9IbxxvDUQM/giphy.gif",
        `${randomCat.get()}`,
        "https://media.giphy.com/media/8vQSQ3cNXuDGo/giphy.gif",
        "https://media.giphy.com/media/MCfhrrNN1goH6/giphy.gif",
        "https://media.giphy.com/media/yFQ0ywscgobJK/giphy.gif",
        "https://media.giphy.com/media/JIX9t2j0ZTN9S/giphy.gif",
        "https://media.giphy.com/media/Q94xQWspTUkShljj8P/giphy.gif",
        `${randomCat.get()}`,
        "https://media.giphy.com/media/11s7Ke7jcNxCHS/giphy.gif",
        "https://media.giphy.com/media/v6aOjy0Qo1fIA/giphy.gif",
        "https://media.giphy.com/media/E0cyxhawhe9dm/giphy.gif",
        "https://media.giphy.com/media/rwCX06Y5XpbLG/giphy.gif",
        `${randomCat.get()}`,
        "https://media.giphy.com/media/11s7Ke7jcNxCHS/giphy.gif",
        "https://media.giphy.com/media/Q94xQWspTUkShljj8P/giphy.gif",
        "https://media.giphy.com/media/3oriO0OEd9QIDdllqo/giphy.gif",
        "https://media.giphy.com/media/CqVNwrLt9KEDK/giphy.gif",
        "https://media.giphy.com/media/PekRU0CYIpXS8/giphy.gif",
        `${randomCat.get()}`,
        "https://media.giphy.com/media/3nbxypT20Ulmo/giphy.gif",
        "https://media.giphy.com/media/PibhPmQYXZ7HO/giphy.gif",
        "https://media.giphy.com/media/1gUn2j2RKcK0yaLKaO/giphy.gif",
        "https://media.giphy.com/media/rwCX06Y5XpbLG/giphy.gif",
        `${randomCat.get()}`,
        "https://media.giphy.com/media/aC45M5Q4D07Pq/giphy.gif",
        "https://media.giphy.com/media/DPiuat0EsqP3a/giphy.gif",
        "https://media.giphy.com/media/12HZukMBlutpoQ/giphy.gif",
        "https://media.giphy.com/media/8hXXilmk33wtmAGJNu/giphy.gif",
        `${randomCat.get()}`,
        "https://media.giphy.com/media/Nm8ZPAGOwZUQM/giphy.gif",
        "https://media.giphy.com/media/nR4L10XlJcSeQ/giphy.gif",
        "https://media.giphy.com/media/jRlP4zbERYW5HoCLvX/giphy.gif",
        "https://media.giphy.com/media/3oEduQAsYcJKQH2XsI/giphy.gif",
        `${randomCat.get()}`,
        "https://media.giphy.com/media/QA0WDnLfpsNo66QyDq/giphy.gif",
        "https://media.giphy.com/media/Lp5wuqMOmLUaAd0jBG/giphy.gif",
        "https://media.giphy.com/media/3oEdvbAVPeVsPDQL5u/giphy.gif",
        `${randomCat.get()}`,
        "https://media.giphy.com/media/TEkr9oBZ57KFmMWScZ/giphy.gif",
        "https://media.giphy.com/media/4TPoYM5nFbBII/giphy.gif",
        "https://media.giphy.com/media/MWSRkVoNaC30A/giphy.gif",
        "https://media.giphy.com/media/nNxT5qXR02FOM/giphy.gif",
        "https://media.giphy.com/media/S6VGjvmFRu5Qk/giphy.gif",
        `${randomCat.get()}`,
        "https://media.giphy.com/media/ghhynvHS4NbDG/giphy.gif",
        "https://media.giphy.com/media/LypkRynk8We7C/giphy.gif",
        "https://media.giphy.com/media/SRO0ZwmImic0/giphy.gif",
        `${randomCat.get()}`,
        "https://media.giphy.com/media/LHZyixOnHwDDy/giphy.gif",
        "https://media.giphy.com/media/6y0KtNGlTyBRcj8GIy/giphy.gif",
        `${randomCat.get()}`,
    ]
    const answer = answers[Math.floor(Math.random() * answers.length)];

    let cat = new MessageEmbed()
        .setColor("ffa500")
        .setTitle(":cat: MIAOU!! :cat:")
        .setDescription(`L'image ne s'affiche pas ? [Cliquez-ici](${answer})`)
        .setImage(answer)
        // .setImage(randomCat.get())
        .setFooter(`Demandé par ${message.author.username}`, message.author.avatarURL());

    message.channel.send(cat);
};

module.exports.help = {
    name: 'cat',
    aliases: ["cat", "chat"],
    category: 'animals',
    description: "Renvoie une image de chat.",
    cooldown: 2,
    usage: "",
    hide: true,
    args: false,
}