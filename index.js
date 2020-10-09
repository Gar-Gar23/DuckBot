//imports
require('dotenv').config()
const fs = require("fs").promises
var {create} = require("@kit-js/core/js/util");
const Discord = require('discord.js');
const ai = require('@kettlelogic/language-model');
const { readFile } = require('fs');

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
    async function readCorpusFromFile(filename){
        const shakespere = await fs.readFile(filename ,'utf8')
        m.train(2,shakespere.split(/\W+/)) 
    } 
    async function readCorpusFromFiles(fileNames){
        for(let name of fileNames) {
            await readCorpusFromFile(name);
        }
    }
    await readCorpusFromFiles(['shakespere.txt', 'hacker-howto.txt'])
    console.log('done reading corpus files')
    

});
client.on('message', async msg => {
    console.log(msg.author.tag, ':', msg.channel.name, ':', msg.channel.guild.name, ':',msg.content)
    m.train(2,msg.content.split(/\W+/))
    if(msg.author.tag !== "Duck#4445")
    {
        msg.reply(m.generateRandomPhrase(20))
    }
    
});
client.login(process.env.DISCORD_API_KEY);
/// add function async , remove calls read Corpus From file, add singular call to the  function corpus