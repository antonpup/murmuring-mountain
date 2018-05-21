// Discord.js bot
const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    client.user.setActivity('Wikipedia', {type: 'WATCHING'});
});

client.on('message', message => {
    if (!message.content.startsWith(process.env.PREFIX) || !message.guild)
    {
        return;
    }
    
    const command = message.content.substr(process.env.PREFIX.length).split(' ')[0];
    const args = message.content.split(' ').slice(1).join(' ');
    if (command === 'guide')
    {
        return message.channel.send('https://git.io/d.js-heroku');
    }
    else if (command === 'invite')
    {
        return message.channel.send(process.env.INVITE);
    }
    else if (message.content === 'ping') {
        message.channel.send('Pong.');
    }
    else
    {
        message.channel.send('Chosen topic was ' + command);
    }
});

client.login(process.env.TOKEN);
