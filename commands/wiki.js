function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

let exceptions = new Map();
exceptions.set(
  "Lost_Prayer_To_The_Sacred_Winds",
  "Lost_Prayer_to_the_Sacred_Winds"
);
exceptions.set("Lost_Prayer", "Lost_Prayer_to_the_Sacred_Winds");

module.exports = {
  name: "wiki",
  description: "Returns the homepage of the Genshin Impact wiki fandom.",
  execute(message, args) {
    if (args.length === 0) {
      message.channel.send(
        "https://genshin-impact.fandom.com/wiki/Genshin_Impact_Wiki"
      );
    } else if (args.length === 1) {
      message.channel.send(
        `https://genshin-impact.fandom.com/wiki/${capitalize(
          args[0].toLowerCase()
        )}`
      );
    } else {
      let cap = args.map((string) => capitalize(string)).join("_");

      if (exceptions.has(cap)) {
        cap = exceptions.get(cap);
      }

      message.channel.send(`https://genshin-impact.fandom.com/wiki/${cap}`);
    }
  },
};
