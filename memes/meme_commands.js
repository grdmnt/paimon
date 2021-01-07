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
        const broke = new Discord.MessageEmbed().setImage(
          "https://media1.tenor.com/images/373c80cfb4498d2b043572ef58ceb516/tenor.gif"
        );
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
