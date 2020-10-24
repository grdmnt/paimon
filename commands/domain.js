const Discord = require("discord.js")

const daysOfTheWeek = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
const talentDomainMats = require('../data/domain_talent_materials.json');
const weaponDomainMats = require('../data/domain_weapon_materials.json');

module.exports = {
  name: "domain",
  description: "Returns the schedule of the domain materials based on input day.",
  execute(message, args){
    if(args.length === 1 && args[0] != "today" && !daysOfTheWeek.includes(args[0].toLowerCase())) return;

    if(args.length === 0 || (args.length === 1 && args[0].toLowerCase() === "today")){
      var d = new Date();
      var currentDay = daysOfTheWeek[d.getDay()];
      listSchedule(message, currentDay);
    } else if(args.length === 1 && daysOfTheWeek.includes(args[0].toLowerCase())){
      listSchedule(message, args[0].toLowerCase());
    }
  }
}

function createTalentScheduleMessage(filteredTalentMats, day){
  var embed = new Discord.MessageEmbed()
                         .setColor(3447003)
                         .setTitle(`DOMAIN TALENT MATERIALS - ${day.toUpperCase()} SCHEDULE`);
  
  for(var key in filteredTalentMats){
    embed.addFields(
      {
        name: `${talentDomainMats[key].name} | (${talentDomainMats[key].schedule.join(', ')}) | ${talentDomainMats[key].location}`,
        value: talentDomainMats[key].characters.join(', ')
      }
    )
  }
  return embed;
}

function createWeaponScheduleMessage(filteredWeaponMats, day){
  var embed = new Discord.MessageEmbed()
                         .setColor(3453003)
                         .setTitle(`DOMAIN WEAPON MATERIALS - ${day.toUpperCase()} SCHEDULE`);

  for(var key in filteredWeaponMats){
    embed.addFields(
      {
        name: `${weaponDomainMats[key].name} | (${weaponDomainMats[key].schedule.join(', ')}) | ${weaponDomainMats[key].location}`,
        value: `[View Related Weapons](${weaponDomainMats[key].wiki})`
      }
    )
  }
  return embed;
}

function listSchedule(message, queriedDay){
  var filteredTalentMats = {}
  var filteredWeaponMats = {}

  Object.entries(talentDomainMats)
        .filter(([k,v]) => v.schedule
                            .map(day => { return day.toLowerCase()})
                            .includes(queriedDay))
        .map(([k,v]) => Object.assign(filteredTalentMats, {[k]:v}));
  message.channel.send(createTalentScheduleMessage(filteredTalentMats, queriedDay));

  Object.entries(weaponDomainMats)
        .filter(([k,v]) => v.schedule
                            .map(day => { return day.toLowerCase()})
                            .includes(queriedDay))
        .map(([k,v]) => Object.assign(filteredWeaponMats, {[k]:v}));

  message.channel.send(createWeaponScheduleMessage(filteredWeaponMats, queriedDay));
}