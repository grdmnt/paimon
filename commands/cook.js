module.exports = {
    name: 'cook',
    description: 'This is for cooking Paimon.',
    execute(message, args){
      if(args.length === 0){
        message.channel.send('Would you like to cook some Sticky Honey Roast? :drool:');
      } else if(args.length === 1 && args[0].toLowerCase() === "paimon"){
        message.channel.send('No! Paimon is NOT EMERGENCY FOOD! :face_with_symbols_over_mouth:');
      }
                 
    }
}