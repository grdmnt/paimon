require('dotenv').config();
const Discord = require('discord.js');
const bot = new Discord.Client();
const fs = require('fs');
const TOKEN = process.env.TOKEN;

bot.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
  const command = require(`./commands/${file}`);
  bot.commands.set(command.name, command);
}

bot.on('ready', () => {
    console.info(`Logged in as ${bot.user.tag}!`);
});

const prefix = "!";

bot.on("message", message => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).split(/ +/);
  const commandName = args.shift().toLowerCase();
  
  if (!bot.commands.has(commandName)) return;
  const command = bot.commands.get(commandName);
  command.execute(message, args);
  
});

bot.login(TOKEN);