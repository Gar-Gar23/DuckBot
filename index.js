//imports
require('dotenv').config()
const fs = require("fs").promises
var {create} = require("@kit-js/core/js/util");
const Discord = require('discord.js');
const ai = require('@kettlelogic/language-model')

DB_HOST=localhost
DB_USER=root
DB_PASS=s1mpl3
//duck needs to "say"

//procedeures

function say (something){}
function receive (msg){}
function interperet (msg){}
function think(){}
//pull from corpus to generate response    
function respond(stuff){}

//variables

const client = new Discord.Client();
var m = create(ai.Model)();

//event handlers
/// casheing msg, 
client.on('ready', async() => {
    console.log(`Logged in as ${client.user.tag}!`);
    const shakespere = await fs.readFile('shakespere.txt','utf8')
    m.train(2,shakespere.split(/\W+/))
});
client.on('message', async msg => {
    m.train(2,msg.content.split(/\W+/))
    if(msg.author.tag !== "Duck#4445")
    {
        msg.reply(m.generateRandomPhrase(10))
    }
    
});
client.login(process.env.DISCORD_API_KEY);
