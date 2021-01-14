const Discord = require("discord.js");

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

module.exports = {
  commands: [
    {
      name: "sucrose",
      description: "A bunch of meme commands",
      execute(message, _) {
        let messages = ["Yes.", "Tama 'yan.", "Yes! Tama 'yan"];
        message.channel.send(messages[getRandomInt(messages.length)]);
      },
    },
    {
      name: "zhongli",
      description: "A bunch of meme commands",
      execute(message, _) {
        let images = [
          "https://media1.tenor.com/images/373c80cfb4498d2b043572ef58ceb516/tenor.gif",
          "https://i.imgur.com/1EON1kN.png",
        ];
        const image = images[getRandomInt(images.length)];
        const embeddedMessage = new Discord.MessageEmbed().setImage(image);
        message.channel.send(embeddedMessage);
      },
    },
    {
      name: "ganyu",
      description: "A bunch of meme commands",
      execute(message, _) {
        let image;
        let embeddedMessage;
        let prob = getRandomInt(1000);
        //1.6% incl. pity 5* rates btw
        if (prob < 16) {
          image =
            "https://media1.tenor.com/images/5405bb7f7415fe21cc5163f52a56f6f3/tenor.gif?itemid=19917573";
          embeddedMessage = new Discord.MessageEmbed()
            .setImage(image)
            .setTitle("Already home");
        } else {
          let images = [
            "https://i.imgur.com/f5bMIO8.png",
            "https://i.imgur.com/TEVaf9f.png",
          ];
          image = images[getRandomInt(images.length)];
          embeddedMessage = new Discord.MessageEmbed()
            .setImage(image)
            .setTitle("Come home");
        }
        message.channel.send(embeddedMessage);
      },
    },
  ],
};
