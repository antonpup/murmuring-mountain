// Discord.js bot
const Discord = require('discord.js');
const client = new Discord.Client();
const Knowledge = require('./knowledge.js');
const Paper = require('./paper.js');

let knowledge = new Knowledge();

client.on('ready', () => {
    client.user.setActivity('Wikipedia', {type: 'WATCHING'});
});

client.on('message', async message => {
    
    if (!message.guild) return;
    
    if(!isNaN(parseInt(message.content))) {
        var tauntInt = parseInt(message.content);
        var shouldJoinAudio = false;
        
        switch(tauntInt) {
            
            case 100:
                shouldJoinAudio = true;
                break;
                
            default:
        }
        
        if(shouldJoinAudio) {
            if (message.member.voiceChannel) {
                const connection = await message.member.voiceChannel.join();
                
                const dispatcher = connection.play('./taunt_100.wav');
                
            } else {
                message.reply('You need to join a voice channel first!');
                return;
            }
        }
    }
    
    if (!message.content.startsWith(process.env.PREFIX))
    {
        return;
    }

    const command = message.content.substr(process.env.PREFIX.length).split(' ')[0];
    const args = message.content.split(' ').slice(1).join(' ');
    if (command === 'help')
    {
        return message.channel.send('You type "educate me on TOPIC" and I will try to write a small essay about given topic.');
    }
    else if (command === 'invite')
    {
        return message.channel.send(process.env.INVITE);
    }
    else if (command === 'ping') {
      // Calculates ping between sending a message and editing it, giving a nice round-trip latency.
      // The second ping is an average latency between the bot and the websocket server (one-way, not round-trip)
      const m = await message.channel.send("Ping?");
      m.edit(`Pong! Latency is ${m.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(client.ping)}ms`);
    }
    else
    {
        let paper = new Paper(0, 50, knowledge, command);

        //message.channel.send('Chosen topic was ' + command);
        return message.channel.send(paper.writePaper());
    }
});

client.login(process.env.TOKEN);
