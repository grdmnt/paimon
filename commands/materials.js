const Discord = require("discord.js");
const characters = require("../data/characters.json");

module.exports = {
  name: "materials",
  description: "Sends an imgur link of the summary of the materials needed by a character.",
  execute(message, args){
    if(args.length === 0 || (args.length > 0 && !args.join('_').toLowerCase() in characters)) return;
    message.channel.send(characters[args.join('_').toLowerCase()].materials);
  }
}