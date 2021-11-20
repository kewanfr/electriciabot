const { MessageEmbed, MessageAttachment } = require("discord.js");

module.exports.run = (client, message, args) => {
    message.delete();
    const answers = [
        "https://media.giphy.com/media/aFTt8wvDtqKCQ/giphy.gif",
        "https://media.giphy.com/media/l4Jz3a8jO92crUlWM/giphy.gif",
        "https://media.giphy.com/media/LTpmRMNSmZgIw/giphy.gif",
        "https://media.giphy.com/media/xL7PDV9frcudO/giphy.gif",
        "https://media.giphy.com/media/3o72F8t9TDi2xVnxOE/giphy.gif",
        "https://media.giphy.com/media/26n6Wb0bIuuWY0yXK/giphy.gif",
        "https://media.giphy.com/media/l3q2K5jinAlChoCLS/giphy.gif",
        "https://media.giphy.com/media/e5EcjjJx3dCFi/giphy.gif",
        "https://media.giphy.com/media/AuIvUrZpzBl04/giphy.gif",
        "https://media.giphy.com/media/VGuAZNdkPUpEY/giphy.gif",
        "https://media.giphy.com/media/qaaSZMnWkufRu/giphy.gif",
        "https://media.giphy.com/media/XIqCQx02E1U9W/giphy.gif",
        "https://media.giphy.com/media/puOukoEvH4uAw/giphy.gif",
        "https://media.giphy.com/media/XDAY1NNG2VvobAp9o0/giphy.gif",
        "https://media.giphy.com/media/mCRJDo24UvJMA/giphy.gif",
        "https://media.giphy.com/media/XbxZ41fWLeRECPsGIJ/giphy.gif",
        "https://media.giphy.com/media/UWyaQUFFPf1MXYqsgf/giphy.gif",
        "https://media.giphy.com/media/wE63f26x4nlYY/giphy.gif",
        "https://media.giphy.com/media/JEVqknUonZJWU/giphy.gif",
        "https://media.giphy.com/media/3kzJvEciJa94SMW3hN/giphy.gif",
        "https://media.giphy.com/media/l4FGpPki5v2Bcd6Ss/giphy.gif",
        "https://media.giphy.com/media/lNAMYHamP23axVmi3C/giphy.gif",
        "https://media.giphy.com/media/dsuDmM5HbJa3oL1Phf/giphy.gif",
        "https://media.giphy.com/media/eHElnqYjLScj7nyxYY/giphy.gif",
        "https://media.giphy.com/media/3oKIP8Eg8l52mZ4i7m/giphy.gif",
        "https://media.giphy.com/media/ZEU9ryYGZzttn0Cva7/giphy.gif",
        "https://media.giphy.com/media/26xBI73gWquCBBCDe/giphy.gif",
        "https://media.giphy.com/media/mBF2V0JGqnOyk/giphy.gif",
        "https://media.giphy.com/media/1k2TqYjyKXYnmtDq3m/giphy.gif",
        "https://media.giphy.com/media/cgRTVEIKVX8AM/giphy.gif",
        "https://media.giphy.com/media/4PT6v3PQKG6Yg/giphy.gif",
        "https://media.giphy.com/media/xULW8jLxnHL9wcYsko/giphy.gif",
        "https://media.giphy.com/media/ZJqPtMjmHbNN6/giphy.gif",
        "https://media.giphy.com/media/USxvsVthGt6H36lhHm/giphy.gif",
        "https://media.giphy.com/media/dYoceNWjX7qes/giphy.gif",
        "https://media.giphy.com/media/g85bOX8TwaSMU/giphy.gif",
        "https://media.giphy.com/media/a0Lgc1JvbfS4o/giphy.gif",
        "https://media.giphy.com/media/bxlLaYqgzrRug/giphy.gif",
        "https://media.giphy.com/media/wZWKSfPaFhNSw/giphy.gif",
        "https://media.giphy.com/media/zzkSC5qHFwBpK/giphy.gif",
        "https://media.giphy.com/media/sCunacryU9Qis/giphy.gif",
        "https://media.giphy.com/media/cQTrAPW7GGzkI/giphy.gif",
        "https://media.giphy.com/media/3o6gE4sYR8gxW6CLW8/giphy.gif",
        "https://media.giphy.com/media/xUPGcDXpSOMH475JQI/giphy.gif",
        "https://media.giphy.com/media/VHh8vqt8wldhm/giphy.gif",
        "https://media.giphy.com/media/77xrxjer0slgc/giphy.gif",
        "https://media.giphy.com/media/xUNen16DFqlM6v6DEQ/giphy.gif",
        "https://media.giphy.com/media/l0Extsf1R5YuFXkpG/giphy.gif",
        "https://media.giphy.com/media/PoK1bzB3PetXeU6brA/giphy.gif",
        "https://media.giphy.com/media/iGSEDmbqxxlle/giphy.gif",
    ]
    const answer = answers[Math.floor(Math.random() * answers.length)];

    let meme = new MessageEmbed()
    .setColor("ffa500")
    // .setTitle("VOILA TON MÊME !!😎🤣")
    .setImage(answer)
    .setFooter(`Demandé par ${message.author.username}`, message.author.displayAvatarURL);

    message.channel.send(meme);
};

module.exports.help = {
    name: 'meme',
    aliases: ['meme'],
    category: 'images',
    description: "Renvoie un même.",
    cooldown: 2,
    usage: "",
    args: false,
}