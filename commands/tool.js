const Discord = require("discord.js")

const options = ["calculator", "planner"];

module.exports = {
  name: "tool",
  description: "Returns links to the specified tool (DMG calculator,  ascension planner, etc.)",
  execute(message, args){
    if(args.length === 0 || !options.includes(args.join(" ").toLowerCase())){
      sendHelpMessage(message);
    } else {
      args = args.join(" ").toLowerCase();
      if(args === "calculator"){
        message.channel.send("https://genshin-center.com/calculator");
      } else if(args === "planner"){
        message.channel.send("https://genshin-center.com/planner");
      }
    }
  }
}

function sendHelpMessage(message){
  var embed = new Discord.MessageEmbed()
                         .setColor("#FF0000");

  embed.addFields(
    {
      name: "Command Usage",
      value: "`?tool [option]`"
    },
    {
      name: "Valid Options",
      value: "`calculator` - damage calculator for build comparisons\n`planner` - character and weapon ascension planner"
    }
  )

  message.channel.send(embed);
}