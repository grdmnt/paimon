require('dotenv').config();
const Discord = require('discord.js');
const bot = new Discord.Client();
const TOKEN = process.env.TOKEN;

const fs = require('fs');

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
	const command = args.shift().toLowerCase();

	if(command === "cook"){
    bot.commands.get('cook').execute(message, args);
	}
});

bot.login(TOKEN);