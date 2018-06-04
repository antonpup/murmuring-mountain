// Discord.js bot
const Discord = require('discord.js');
const client = new Discord.Client();
const Knowledge = require('./knowledge.js');
const Paper = require('./paper.js');

let knowledge = new Knowledge();

let taunts = {};
// Rise of Nations taunts
taunts[1] = {       file: './taunts/yes-3.mp3',                     text: '1. Yes.'};
taunts[2] = {       file: './taunts/no-2.mp3',                      text: '2. No.'};
taunts[3] = {       file: './taunts/maybe-2.mp3',                   text: '3. Maybe.'};
taunts[4] = {       file: './taunts/need_food-2.mp3',               text: '4. I need food.'};
taunts[5] = {       file: './taunts/needtimber-2.mp3',              text: '5. I need timber.'};
taunts[6] = {       file: './taunts/need_metal-1.mp3',              text: '6. I need metal.'};
taunts[7] = {       file: './taunts/needwealth-3.mp3',              text: '7. I need wealth, alright?  Wealth.'};
taunts[8] = {       file: './taunts/needoil-2.mp3',                 text: '8. I need oil.'};
taunts[9] = {       file: './taunts/needknowledge-1.mp3',           text: '9. Ha, I need...oh yeah, knowledge.'};
taunts[10] = {      file: './taunts/ask_resources-2.mp3',           text: '10. Do you need resources?  Speak up boy.'};
taunts[11] = {      file: './taunts/help_here-3.mp3',               text: '11. Uh, hey dude, a little help here?'};
taunts[12] = {      file: './taunts/noob_rush-1.mp3',               text: '12. Hey, this noob\'s rushin\' me.'};
taunts[13] = {      file: './taunts/buildtroops-1.mp3',             text: '13. Build more troops.'};
taunts[14] = {      file: './taunts/build_wonder-3.mp3',            text: '14. Build a wonder boy, quick.'};
taunts[15] = {      file: './taunts/work_econ-1.mp3',               text: '15. Work on your economy, hmm?'};
taunts[16] = {      file: './taunts/work_airforce-2.mp3',           text: '16. Hey boy, work on your airforce.'};
taunts[17] = {      file: './taunts/work_airforce-2.mp3',           text: '17. Dude, you gotta work on your navy.'};
taunts[18] = {      file: './taunts/signal_attack-3.mp3',           text: '18. Wait for my signal to attack.'};
taunts[19] = {      file: './taunts/attack-3.mp3',                  text: '19.  Attack!'};
taunts[20] = {      file: './taunts/get_em-2.mp3',                  text: '20. He he he, let\'s get \'em.'};
taunts[21] = {      file: './taunts/guard_artillery-2.mp3',         text: '21. Guard my artillery.'};
taunts[22] = {      file: './taunts/move_troops-2.mp3',             text: '22. Move troops here.'};
taunts[23] = {      file: './taunts/grab_territory-1.mp3',          text: '23. Grab some territory.'};
taunts[24] = {      file: './taunts/gonna_boom-2.mp3',              text: '24. Gonna boom.'};
taunts[25] = {      file: './taunts/gonna_rush-1.mp3',              text: '25. Gonna rush.'};
taunts[26] = {      file: './taunts/wanna_ally-3.mp3',              text: '26. Huh, wanna ally?'};
taunts[27] = {      file: './taunts/wanna_peace-3.mp3',             text: '27. Wanna make peace?'};
taunts[28] = {      file: './taunts/means_war-3.mp3',               text: '28. Of course you realize, this means war.'};
taunts[29] = {      file: './taunts/pay_die-1.mp3',                 text: '29. Pay up, or die.'};
taunts[30] = {      file: './taunts/prepare_crushed-1.mp3',         text: '30. Prepare to be crushed.'};
taunts[31] = {      file: './taunts/who_attack-3.mp3',              text: '31. Who we gonna attack?'};
taunts[32] = {      file: './taunts/when_attack-2.mp3',             text: '32. Uh, Wh, When shall we attack?'};
taunts[33] = {      file: './taunts/where_enemy-1.mp3',             text: '33. Uh, where\'s the enemy?'};
taunts[34] = {      file: './taunts/airpower-3.mp3',                text: '34. They got air power.'};
taunts[35] = {      file: './taunts/ships_ahoy-3.mp3',              text: '35. Ah ga ga, Ships ahoy, heh heh heh.'};
taunts[36] = {      file: './taunts/spy_spy-3.mp3',                 text: '36. I spy... a spy.'};
taunts[37] = {      file: './taunts/rare_resources-3.mp3',          text: '37. Howdy hi there friends and neighbors, we got rare resources for the taking.'};
taunts[38] = {      file: './taunts/city_down-1.mp3',               text: '38. This city is goin\' down.'};
taunts[39] = {      file: './taunts/checkouttimer-2.mp3',           text: '39. Hey, check out the timer.'};
taunts[40] = {      file: './taunts/setup_shop-2.mp3',              text: '40. Let\'s set up shop.'};
taunts[41] = {      file: './taunts/wanna_bet-2.mp3',               text: '41. Wanna bet?'};
taunts[42] = {      file: './taunts/itson-1.mp3',                   text: '42. Oh, it\'s on!'};
taunts[43] = {      file: './taunts/supposed_hurt-1.mp3',           text: '43. Was that supposed to hurt? Eh heh heh heh heh heh.'};
taunts[44] = {      file: './taunts/fixed_problem-1.mp3',           text: '44. Have you fixed your little problem yet?'};
taunts[45] = {      file: './taunts/good_luck-1.mp3',               text: '45. Hey, hey, good luck with that eh, heh.'};
taunts[46] = {      file: './taunts/works_out-1.mp3',               text: '46. Let me know how that works out for ya.'};
taunts[47] = {      file: './taunts/slow_ahead-3.mp3',              text: '47. Yeah, yeah, ya know I may be slow but I\'m ahead of you!  Eh, Charlie?  Ha Ha!'};
taunts[48] = {      file: './taunts/classy-3.mp3',                  text: '48. Huh, Classy.'};
taunts[49] = {      file: './taunts/tutorials_noob-1.mp3',          text: '49. Play the tutorials noob.'};
taunts[50] = {      file: './taunts/wake_done-1.mp3',               text: '50. *Yawn* Wake me up when you\'re done.'};
taunts[51] = {      file: './taunts/get_outta-3.mp3',               text: '51. Get outta my face.'};
taunts[52] = {      file: './taunts/leavemealone-2.mp3',            text: '52. Uh, leave me alone, ok.'};
taunts[53] = {      file: './taunts/need_that-3.mp3',               text: '53. \'Cause ya need that.'};
taunts[54] = {      file: './taunts/over_yet-4.mp3',                text: '54. Is it over yet?'};
taunts[55] = {      file: './taunts/parents_late-2.mp3',            text: '55. Do your parents know you\'re up this late?'};
taunts[56] = {      file: './taunts/you_ok-1.mp3',                  text: '56. You ok over there?'};
taunts[57] = {      file: './taunts/stayout-1.mp3',                 text: '57. And stay out!'};
taunts[58] = {      file: './taunts/bwahaha-1.mp3',                 text: '58. Bwa ha ha ha ha ha ha ha.'};
taunts[59] = {      file: './taunts/stormin_castle-1.mp3',          text: '59. Have fun stormin\' the castle.'};
taunts[60] = {      file: './taunts/randomrandom-2.mp3',            text: '60. Random!  Random!  Random!'};
taunts[61] = {      file: './taunts/randomrandom-4.mp3',            text: '61. RANDOM!  RANDOM!  RANDOM!'};
taunts[62] = {      file: './taunts/game_begin-3.mp3',              text: '62. Let the game begin!'};
taunts[63] = {      file: './taunts/dude_pickem-1.mp3',             text: '63. Dude, we know who you\'re going to take.  Just pick \'em and get on with it.'};
taunts[64] = {      file: './taunts/click_understand-2.mp3',        text: '64. Which part of "Click in" didn\'t you understand?'};
taunts[65] = {      file: './taunts/what_holdup-2.mp3',             text: '65. What\'s the holdup?'};
taunts[66] = {      file: './taunts/ahh-1.mp3',                     text: '66. Ahhh haaa.'};
taunts[67] = {      file: './taunts/uhh_uhh-1.mp3',                 text: '67. Unh Unh Unh.'};
taunts[68] = {      file: './taunts/ohhh-4.mp3',                    text: '68. Ohhh.'};
taunts[69] = {      file: './taunts/uhhh-2.mp3',                    text: '69. Uhhh.'};
taunts[70] = {      file: './taunts/unh-3.mp3',                     text: '70. Unh!'};
taunts[71] = {      file: './taunts/doomed-1.mp3',                  text: '71. We\'re doomed!'};
taunts[72] = {      file: './taunts/wanngiveup-2.mp3',              text: '72. Wanna give up?'};
taunts[73] = {      file: './taunts/victoryismine-3.mp3',           text: '73. Victory is mine!'};
taunts[74] = {      file: './taunts/owmyeye-1.mp3',                 text: '74. Oww!  My eye!'};
taunts[75] = {      file: './taunts/notintheface-1.mp3',            text: '75. Not in the face!  Not in the face!'};
taunts[76] = {      file: './taunts/coming-4.mp3',                  text: '76. Eh, Coming.'};
taunts[77] = {      file: './taunts/berightthere-1.mp3',            text: '77. Be right there.'};
taunts[78] = {      file: './taunts/onmyway-1.mp3',                 text: '78. On my way.'};
taunts[79] = {      file: './taunts/send_help-1.mp3',               text: '79. I\'m tryin\' to send some help.'};
taunts[80] = {      file: './taunts/gotchacovered-3.mp3',           text: '80. Gotcha covered.'};
taunts[81] = {      file: './taunts/check-2.mp3',                   text: '81. Check.'};
taunts[82] = {      file: './taunts/itshallbedone-1.mp3',           text: '82. It shall be done.'};
taunts[83] = {      file: './taunts/rightonthat-2.mp3',             text: '83. Let me get right on that.'};
taunts[84] = {      file: './taunts/sweet-3.mp3',                   text: '84. Heh heh heh, Sweet.'};
taunts[85] = {      file: './taunts/youdaman-2.mp3',                text: '85. You da man.'};
taunts[86] = {      file: './taunts/talking_about-1.mp3',           text: '86. That\'s what I\'m talkin about.'};
taunts[87] = {      file: './taunts/takencareof-3.mp3',             text: '87. Consider it taken care of.'};
taunts[88] = {      file: './taunts/soundslikeaplan-2.mp3',         text: '88. Sounds like a plan.'};
taunts[89] = {      file: './taunts/groovy-3.mp3',                  text: '89. Groovy.'};
taunts[90] = {      file: './taunts/color_red-1.mp3',               text: '90. Red.'};
taunts[91] = {      file: './taunts/color_blue-1.mp3',              text: '91. Blue.'};
taunts[92] = {      file: './taunts/color_purple-2.mp3',            text: '92. Purple.'};
taunts[93] = {      file: './taunts/color_green-1.mp3',             text: '93. Green.'};
taunts[94] = {      file: './taunts/color_yellow.mp3',              text: '94. Yellow.'};
taunts[95] = {      file: './taunts/color_ltblue-1.mp3',            text: '95. Light blue.'};
taunts[96] = {      file: './taunts/color_white-3.mp3',             text: '96. White.'};
taunts[97] = {      file: './taunts/color_orange-2.mp3',            text: '97. Orange.'};
taunts[98] = {      file: './taunts/humanity-3.mp3',                text: '98. Aaaaaagh!  The humanity!'};
taunts[99] = {      file: './taunts/getthat-3.mp3',                 text: '99. Let me get that for you.'};
taunts[100] = {     file: './taunts/keep_risin-1.mp3',              text: '100. They keep on rising!'};
// Custom taunts
taunts[420] = {     file: './taunts/do_you_have_the_time.mp3',      text: '420. Do you have the time? 420. Nice!'};
taunts[1010] = {    file: './taunts/hes_thicc.mp3',                 text: '1010. Oh yeah. Damn. Damn boy! DAMN BOY! HE\'S THICC!'};
taunts[1011] = {    file: './taunts/what_a_gamer.mp3',              text: '1011. Get the fuck outta my room. I\'m playing min- What a fucking GAMER. [*Uncontrollable laughter*] [*seinfeld theme*]'};


client.on('ready', () => {
    client.user.setActivity('Wikipedia', {type: 'WATCHING'});
});

client.on('message', async message => {
    
    if (message.author.bot) return;
    if (!message.guild) return;
    
    if(!isNaN(parseInt(message.content))) {
        var tauntInt = parseInt(message.content);
        var shouldJoinAudio = false;
        
        if(typeof taunts[tauntInt] != 'undefined') {
            shouldJoinAudio = true;
        }
        
        if(shouldJoinAudio) {
            if (message.member.voiceChannel) {
                const connection = await message.member.voiceChannel.join();
                const dispatcher = connection.playFile(taunts[tauntInt].file, {volume: 0.30});
                message.channel.send(taunts[tauntInt].text);
                dispatcher.on("end", end => {message.member.voiceChannel.leave();});
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
