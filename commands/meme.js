function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

module.exports = {
  name: "sucrose",
  description: "Praises Sucrose, our one true anemo archon.",
  execute(message, _) {
    let messages = ["Yes.", "Tama 'yan.", "Yes! Tama 'yan"];
    message.channel.send(messages[getRandomInt(messages.length)]);
  },
};
