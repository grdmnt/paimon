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
        let images = ["https://media1.tenor.com/images/373c80cfb4498d2b043572ef58ceb516/tenor.gif", "https://i.imgur.com/1EON1kN.png"];
        const image = images[getRandomInt(images.length)];
        const broke = new Discord.MessageEmbed().setImage(image);
        message.channel.send(broke);
      },
    },
    {
      name: "ganyu",
      description: "A bunch of meme commands",
      execute(message, _) {
        const broke = new Discord.MessageEmbed()
          .setImage("https://i.imgur.com/f5bMIO8.png")
          .setTitle("Come home");
        message.channel.send(broke);
      },
    },
  ],
};
