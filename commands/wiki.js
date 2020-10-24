const util = require('../utils/utils.js');

module.exports = {
  name: "wiki",
  description: "Returns the homepage of the Genshin Impact wiki fandom.",
  execute(message, args){
    if(args.length === 0){
      message.channel.send("https://genshin-impact.fandom.com/wiki/Genshin_Impact_Wiki");
    } else if(args.length === 1){
      message.channel.send(`https://genshin-impact.fandom.com/wiki/${util.capitalize(args[0].toLowerCase())}`);
    } else {
      message.channel.send(`https://genshin-impact.fandom.com/wiki/${args.map(string => (util.capitalize(string))).join("_")}`);
    }
  }
}