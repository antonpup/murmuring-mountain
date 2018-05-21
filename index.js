// Discord.js bot
const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    client.user.setActivity('Wikipedia', {type: 'WATCHING'});
});

client.on('message', message => {
    if (!message.content.startsWith(process.env.PREFIX) || !message.guild) return;
    const command = message.content.split(' ')[0].substr(process.env.PREFIX.length);
    const args = message.content.split(' ').slice(1).join(' ');
    if (command === 'guide') return message.channel.send('https://git.io/d.js-heroku');
    else if (command === 'invite') return message.channel.send(process.env.INVITE);
    
    if (message.content === 'ping') {
        // send back "Pong." to the channel the message was sent in
        message.channel.send('Pong.');
    }
    else if (message.content === 'hello') {
        message.channel.send('Hi!');
    }
});

client.login(process.env.TOKEN);
