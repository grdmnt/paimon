module.exports = {
  name: "github",
  description: "Returns the github link of the bot project.",
  execute(message, args){
    message.channel.send('https://github.com/CjayBillones/paimon');
  }
}