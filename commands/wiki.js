function capitalize(string){
  return string.charAt(0).toUpperCase() + string.slice(1);
}

module.exports = {
  name: "wiki",
  description: "Returns the homepage of the Genshin Impact wiki fandom.",
  execute(message, args){
    if(args.length === 0){
      message.channel.send("https://genshin-impact.fandom.com/wiki/Genshin_Impact_Wiki");
    } else if(args.length === 1){
      message.channel.send(`https://genshin-impact.fandom.com/wiki/${capitalize(args[0].toLowerCase())}`);
    } else {
      message.channel.send(`https://genshin-impact.fandom.com/wiki/${args.map(string => (capitalize(string))).join("_")}`);
    }
  }
}