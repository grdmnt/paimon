module.exports = {
  name: "map",
  description: "Returns a link of the Genshin Impact interactive map.",
  execute(message, args){
    message.channel.send('https://genshin-impact-map.appsample.com/#/');
  }
}