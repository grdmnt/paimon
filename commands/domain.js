const Discord = require("discord.js")

const domainTypes = ["mastery", "forgery", "blessing"];
const days = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
const characters = require('../data/characters.json');
const talentMaterials = require('../data/talent_materials.json');

module.exports = {
  name: "domain",
  description: "Returns information about domain of forgery, mastery, and blessing.",
  execute(message, args){
    if(args.length === 0 || !domainTypes.includes(args[0].toLowerCase())) return;

    if(args[0].toLowerCase() === domainTypes[0]){
      if(args.length == 1){
        listAllTalentMaterials(message);
      } else if(args.length > 1 && args[1].toLowerCase() in talentMaterials){
        listTalentMaterialByName(message, args[1].toLowerCase());
      } else if(args.length > 1 && args[1].toLowerCase() in characters){
        listTalentMaterialByCharacter(message, args[1].toLowerCase());
      } else if(args.length > 1 && days.includes(args[1].toLowerCase())){
        listTalentMaterialByDay(message, args[1].toLowerCase());
      }
    } else if(args[0].toLowerCase() === domainTypes[1]){
      console.info("weapon to follow");
    } else {
      console.info("Artifact to follow");
    }
  }
}

function generateEmbeddedMessage(filteredTalentMaterials){
  var embed = new Discord.MessageEmbed()
                           .setColor(3447003)
                           .setTitle("Talent Materials");

  for(var key in filteredTalentMaterials){
    embed.addFields(
      {
        name: `${talentMaterials[key].name} | (${talentMaterials[key].schedule.join(', ')}) | ${talentMaterials[key].location}`,
        value: talentMaterials[key].characters.join(', ')
      }      
    )
  }
  return embed;
}

function listAllTalentMaterials(message){
  message.channel.send(generateEmbeddedMessage(talentMaterials));
}

function listTalentMaterialByName(message, materialName){
  var filtered = {}
  Object.entries(talentMaterials)
        .filter(([k,v]) => v.name.toLowerCase() === materialName)
        .map(([k,v]) => Object.assign(filtered, {[k]:v}));
  
  message.channel.send(generateEmbeddedMessage(filtered));
}

function listTalentMaterialByCharacter(message, characterName){
  var filtered = {}
  Object.entries(talentMaterials)
        .filter(([k,v]) => v.characters
                            .map(c => { return c.toLowerCase()})
                            .includes(characterName))
        .map(([k,v]) => Object.assign(filtered, {[k]:v}));

  message.channel.send(generateEmbeddedMessage(filtered));
}

function listTalentMaterialByDay(message, day){
  
  if(day === "sunday"){
    listAllTalentMaterials(message);
  }
  else{
    var filtered = {}
    Object.entries(talentMaterials)
          .filter(([k,v]) => v.schedule
                              .map(d => { return d.toLowerCase()})
                              .includes(day))
          .map(([k,v]) => Object.assign(filtered, {[k]:v}));
  
    message.channel.send(generateEmbeddedMessage(filtered));
  }
}