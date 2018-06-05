// Discord.js bot
const Discord = require('discord.js');
const client = new Discord.Client();
const Knowledge = require('./knowledge.js');
const Paper = require('./paper.js');

let knowledge = new Knowledge();

let taunts = {};
// Rise of Nations taunts
taunts[1] = {       file: ['./taunts/ron/yes-3.mp3'],                                   text: '1. Yes.'};
taunts[2] = {       file: ['./taunts/ron/no-2.mp3'],                                    text: '2. No.'};
taunts[3] = {       file: ['./taunts/ron/maybe-2.mp3'],                                 text: '3. Maybe.'};
taunts[4] = {       file: ['./taunts/ron/need_food-2.mp3'],                             text: '4. I need food.'};
taunts[5] = {       file: ['./taunts/ron/needtimber-2.mp3'],                            text: '5. I need timber.'};
taunts[6] = {       file: ['./taunts/ron/need_metal-1.mp3'],                            text: '6. I need metal.'};
taunts[7] = {       file: ['./taunts/ron/needwealth-3.mp3'],                            text: '7. I need wealth, alright?  Wealth.'};
taunts[8] = {       file: ['./taunts/ron/needoil-2.mp3'],                               text: '8. I need oil.'};
taunts[9] = {       file: ['./taunts/ron/needknowledge-1.mp3'],                         text: '9. Ha, I need...oh yeah, knowledge.'};
taunts[10] = {      file: ['./taunts/ron/ask_resources-2.mp3'],                         text: '10. Do you need resources?  Speak up boy.'};
taunts[11] = {      file: ['./taunts/ron/help_here-3.mp3'],                             text: '11. Uh, hey dude, a little help here?'};
taunts[12] = {      file: ['./taunts/ron/noob_rush-1.mp3'],                             text: '12. Hey, this noob\'s rushin\' me.'};
taunts[13] = {      file: ['./taunts/ron/buildtroops-1.mp3'],                           text: '13. Build more troops.'};
taunts[14] = {      file: ['./taunts/ron/build_wonder-3.mp3'],                          text: '14. Build a wonder boy, quick.'};
taunts[15] = {      file: ['./taunts/ron/work_econ-1.mp3'],                             text: '15. Work on your economy, hmm?'};
taunts[16] = {      file: ['./taunts/ron/work_airforce-2.mp3'],                         text: '16. Hey boy, work on your airforce.'};
taunts[17] = {      file: ['./taunts/ron/work_navy-3.mp3'],                             text: '17. Dude, you gotta work on your navy.'};
taunts[18] = {      file: ['./taunts/ron/signal_attack-3.mp3'],                         text: '18. Wait for my signal to attack.'};
taunts[19] = {      file: ['./taunts/ron/attack-3.mp3'],                                text: '19. Attack!'};
taunts[20] = {      file: ['./taunts/ron/get_em-2.mp3'],                                text: '20. He he he, let\'s get \'em.'};
taunts[21] = {      file: ['./taunts/ron/guard_artillery-2.mp3'],                       text: '21. Guard my artillery.'};
taunts[22] = {      file: ['./taunts/ron/move_troops-2.mp3'],                           text: '22. Move troops here.'};
taunts[23] = {      file: ['./taunts/ron/grab_territory-1.mp3'],                        text: '23. Grab some territory.'};
taunts[24] = {      file: ['./taunts/ron/gonna_boom-2.mp3'],                            text: '24. Gonna boom.'};
taunts[25] = {      file: ['./taunts/ron/gonna_rush-1.mp3'],                            text: '25. Gonna rush.'};
taunts[26] = {      file: ['./taunts/ron/wanna_ally-3.mp3'],                            text: '26. Huh, wanna ally?'};
taunts[27] = {      file: ['./taunts/ron/wanna_peace-3.mp3'],                           text: '27. Wanna make peace?'};
taunts[28] = {      file: ['./taunts/ron/means_war-3.mp3'],                             text: '28. Of course you realize, this means war.'};
taunts[29] = {      file: ['./taunts/ron/pay_die-1.mp3'],                               text: '29. Pay up, or die.'};
taunts[30] = {      file: ['./taunts/ron/prepare_crushed-1.mp3'],                       text: '30. Prepare to be crushed.'};
taunts[31] = {      file: ['./taunts/ron/who_attack-3.mp3'],                            text: '31. Who we gonna attack?'};
taunts[32] = {      file: ['./taunts/ron/when_attack-2.mp3'],                           text: '32. Uh, Wh, When shall we attack?'};
taunts[33] = {      file: ['./taunts/ron/where_enemy-1.mp3'],                           text: '33. Uh, where\'s the enemy?'};
taunts[34] = {      file: ['./taunts/ron/airpower-3.mp3'],                              text: '34. They got air power.'};
taunts[35] = {      file: ['./taunts/ron/ships_ahoy-3.mp3'],                            text: '35. Ah ga ga, Ships ahoy, heh heh heh.'};
taunts[36] = {      file: ['./taunts/ron/spy_spy-3.mp3'],                               text: '36. I spy... a spy.'};
taunts[37] = {      file: ['./taunts/ron/rare_resources-3.mp3'],                        text: '37. Howdy hi there friends and neighbors, we got rare resources for the taking.'};
taunts[38] = {      file: ['./taunts/ron/city_down-1.mp3'],                             text: '38. This city is goin\' down.'};
taunts[39] = {      file: ['./taunts/ron/checkouttimer-2.mp3'],                         text: '39. Hey, check out the timer.'};
taunts[40] = {      file: ['./taunts/ron/setup_shop-2.mp3'],                            text: '40. Let\'s set up shop.'};
taunts[41] = {      file: ['./taunts/ron/wanna_bet-2.mp3'],                             text: '41. Wanna bet?'};
taunts[42] = {      file: ['./taunts/ron/itson-1.mp3'],                                 text: '42. Oh, it\'s on!'};
taunts[43] = {      file: ['./taunts/ron/supposed_hurt-1.mp3'],                         text: '43. Was that supposed to hurt? Eh heh heh heh heh heh.'};
taunts[44] = {      file: ['./taunts/ron/fixed_problem-1.mp3'],                         text: '44. Have you fixed your little problem yet?'};
taunts[45] = {      file: ['./taunts/ron/good_luck-1.mp3'],                             text: '45. Hey, hey, good luck with that eh, heh.'};
taunts[46] = {      file: ['./taunts/ron/works_out-1.mp3'],                             text: '46. Let me know how that works out for ya.'};
taunts[47] = {      file: ['./taunts/ron/slow_ahead-3.mp3'],                            text: '47. Yeah, yeah, ya know I may be slow but I\'m ahead of you!  Eh, Charlie?  Ha Ha!'};
taunts[48] = {      file: ['./taunts/ron/classy-3.mp3'],                                text: '48. Huh, Classy.'};
taunts[49] = {      file: ['./taunts/ron/tutorials_noob-1.mp3'],                        text: '49. Play the tutorials noob.'};
taunts[50] = {      file: ['./taunts/ron/wake_done-1.mp3'],                             text: '50. *Yawn* Wake me up when you\'re done.'};
taunts[51] = {      file: ['./taunts/ron/get_outta-3.mp3'],                             text: '51. Get outta my face.'};
taunts[52] = {      file: ['./taunts/ron/leavemealone-2.mp3'],                          text: '52. Uh, leave me alone, ok.'};
taunts[53] = {      file: ['./taunts/ron/need_that-3.mp3'],                             text: '53. \'Cause ya need that.'};
taunts[54] = {      file: ['./taunts/ron/over_yet-4.mp3'],                              text: '54. Is it over yet?'};
taunts[55] = {      file: ['./taunts/ron/parents_late-2.mp3'],                          text: '55. Do your parents know you\'re up this late?'};
taunts[56] = {      file: ['./taunts/ron/you_ok-1.mp3'],                                text: '56. You ok over there?'};
taunts[57] = {      file: ['./taunts/ron/stayout-1.mp3'],                               text: '57. And stay out!'};
taunts[58] = {      file: ['./taunts/ron/bwahaha-1.mp3'],                               text: '58. Bwa ha ha ha ha ha ha ha.'};
taunts[59] = {      file: ['./taunts/ron/stormin_castle-1.mp3'],                        text: '59. Have fun stormin\' the castle.'};
taunts[60] = {      file: ['./taunts/ron/randomrandom-2.mp3'],                          text: '60. Random!  Random!  Random!'};
taunts[61] = {      file: ['./taunts/ron/randomrandom-4.mp3'],                          text: '61. RANDOM!  RANDOM!  RANDOM!'};
taunts[62] = {      file: ['./taunts/ron/game_begin-3.mp3'],                            text: '62. Let the game begin!'};
taunts[63] = {      file: ['./taunts/ron/dude_pickem-1.mp3'],                           text: '63. Dude, we know who you\'re going to take.  Just pick \'em and get on with it.'};
taunts[64] = {      file: ['./taunts/ron/click_understand-2.mp3'],                      text: '64. Which part of "Click in" didn\'t you understand?'};
taunts[65] = {      file: ['./taunts/ron/what_holdup-2.mp3'],                           text: '65. What\'s the holdup?'};
taunts[66] = {      file: ['./taunts/ron/ahh-1.mp3'],                                   text: '66. Ahhh haaa.'};
taunts[67] = {      file: ['./taunts/ron/uhh_uhh-1.mp3'],                               text: '67. Unh Unh Unh.'};
taunts[68] = {      file: ['./taunts/ron/ohhh-4.mp3'],                                  text: '68. Ohhh.'};
taunts[69] = {      file: ['./taunts/ron/uhhh-2.mp3'],                                  text: '69. Uhhh.'};
taunts[70] = {      file: ['./taunts/ron/unh-3.mp3'],                                   text: '70. Unh!'};
taunts[71] = {      file: ['./taunts/ron/doomed-1.mp3'],                                text: '71. We\'re doomed!'};
taunts[72] = {      file: ['./taunts/ron/wanngiveup-2.mp3'],                            text: '72. Wanna give up?'};
taunts[73] = {      file: ['./taunts/ron/victoryismine-3.mp3'],                         text: '73. Victory is mine!'};
taunts[74] = {      file: ['./taunts/ron/owmyeye-1.mp3'],                               text: '74. Oww!  My eye!'};
taunts[75] = {      file: ['./taunts/ron/notintheface-1.mp3'],                          text: '75. Not in the face!  Not in the face!'};
taunts[76] = {      file: ['./taunts/ron/coming-4.mp3'],                                text: '76. Eh, Coming.'};
taunts[77] = {      file: ['./taunts/ron/berightthere-1.mp3'],                          text: '77. Be right there.'};
taunts[78] = {      file: ['./taunts/ron/onmyway-1.mp3'],                               text: '78. On my way.'};
taunts[79] = {      file: ['./taunts/ron/send_help-1.mp3'],                             text: '79. I\'m tryin\' to send some help.'};
taunts[80] = {      file: ['./taunts/ron/gotchacovered-3.mp3'],                         text: '80. Gotcha covered.'};
taunts[81] = {      file: ['./taunts/ron/check-2.mp3'],                                 text: '81. Check.'};
taunts[82] = {      file: ['./taunts/ron/itshallbedone-1.mp3'],                         text: '82. It shall be done.'};
taunts[83] = {      file: ['./taunts/ron/rightonthat-2.mp3'],                           text: '83. Let me get right on that.'};
taunts[84] = {      file: ['./taunts/ron/sweet-3.mp3'],                                 text: '84. Heh heh heh, Sweet.'};
taunts[85] = {      file: ['./taunts/ron/youdaman-2.mp3'],                              text: '85. You da man.'};
taunts[86] = {      file: ['./taunts/ron/talking_about-1.mp3'],                         text: '86. That\'s what I\'m talkin about.'};
taunts[87] = {      file: ['./taunts/ron/takencareof-3.mp3'],                           text: '87. Consider it taken care of.'};
taunts[88] = {      file: ['./taunts/ron/soundslikeaplan-2.mp3'],                       text: '88. Sounds like a plan.'};
taunts[89] = {      file: ['./taunts/ron/groovy-3.mp3'],                                text: '89. Groovy.'};
taunts[90] = {      file: ['./taunts/ron/color_red-1.mp3'],                             text: '90. Red.'};
taunts[91] = {      file: ['./taunts/ron/color_blue-1.mp3'],                            text: '91. Blue.'};
taunts[92] = {      file: ['./taunts/ron/color_purple-2.mp3'],                          text: '92. Purple.'};
taunts[93] = {      file: ['./taunts/ron/color_green-1.mp3'],                           text: '93. Green.'};
taunts[94] = {      file: ['./taunts/ron/color_yellow.mp3'],                            text: '94. Yellow.'};
taunts[95] = {      file: ['./taunts/ron/color_ltblue-1.mp3'],                          text: '95. Light blue.'};
taunts[96] = {      file: ['./taunts/ron/color_white-3.mp3'],                           text: '96. White.'};
taunts[97] = {      file: ['./taunts/ron/color_orange-2.mp3'],                          text: '97. Orange.'};
taunts[98] = {      file: ['./taunts/ron/humanity-3.mp3'],                              text: '98. Aaaaaagh!  The humanity!'};
taunts[99] = {      file: ['./taunts/ron/getthat-3.mp3'],                               text: '99. Let me get that for you.'};
taunts[100] = {     file: ['./taunts/ron/keep_risin-1.mp3'],                            text: '100. They keep on rising!'};

// Custom taunts
// Age of Empires 2 taunts - 1xx
taunts[101] = {     file: ['./taunts/aoe2/01_yes.mp3'],                                 text: '101. Yes.'};
taunts[102] = {     file: [ './taunts/aoe2/02_no.mp3', 
                            './taunts/aoe2/02_no_ru.mp3'],                              text: '102. No.'};
taunts[103] = {     file: ['./taunts/aoe2/03_food_please.mp3'],                         text: '103. Food please.'};
taunts[104] = {     file: ['./taunts/aoe2/04_wood_please.mp3'],                         text: '104. Wood please.'};
taunts[105] = {     file: ['./taunts/aoe2/05_gold_please.mp3'],                         text: '105. Gold please.'};
taunts[106] = {     file: ['./taunts/aoe2/06_stone_please.mp3'],                        text: '106. Stone please.'};
taunts[107] = {     file: ['./taunts/aoe2/07_ahh.mp3'],                                 text: '107. Ahh!'};
taunts[108] = {     file: ['./taunts/aoe2/08_all_hail.mp3'],                            text: '108. All hail, king of the losers!'};
taunts[109] = {     file: ['./taunts/aoe2/09_oooh.mp3'],                                text: '109. Ooh!'};
taunts[110] = {     file: ['./taunts/aoe2/10_back_to_age_1.mp3'],                       text: '110. I\'ll beat you back to Age of Empires.'};
taunts[111] = {     file: ['./taunts/aoe2/11_herb_laugh.mp3'],                          text: '111. *(Herb laugh)*'};
taunts[112] = {     file: ['./taunts/aoe2/12_being_rushed.mp3'],                        text: '112. Ah! Being rushed.'};
taunts[113] = {     file: ['./taunts/aoe2/13_blame_your_isp.mp3'],                      text: '113. Sure, blame it on your ISP.'};
taunts[114] = {     file: ['./taunts/aoe2/14_start_the_game.mp3'],                      text: '114. Start the game already!'};
taunts[115] = {     file: ['./taunts/aoe2/15_dont_point_that_thing.mp3'],               text: '115. Don\'t point that thing at me!'};
taunts[116] = {     file: ['./taunts/aoe2/16_enemy_sighted.mp3'],                       text: '116. Enemy sighted!'};
taunts[117] = {     file: ['./taunts/aoe2/17_it_is_good.mp3'],                          text: '117. It is good to be the king.'};
taunts[118] = {     file: ['./taunts/aoe2/18_i_need_a_monk.mp3'],                       text: '118. Monk! I need a monk!'};
taunts[119] = {     file: ['./taunts/aoe2/19_long_time_no_siege.mp3'],                  text: '119. Long time, no siege.'};
taunts[120] = {     file: ['./taunts/aoe2/20_my_granny.mp3'],                           text: '120. My granny could scrap better than that.'};
taunts[121] = {     file: ['./taunts/aoe2/21_nice_town_ill_take_it.mp3'],               text: '121. Nice town, I\'ll take it.'};
taunts[122] = {     file: ['./taunts/aoe2/22_quit_touchin.mp3'],                        text: '122. Quit touching me!'};
taunts[123] = {     file: ['./taunts/aoe2/23_raiding_party.mp3'],                       text: '123. Raiding party!'};
taunts[124] = {     file: ['./taunts/aoe2/24_dadgum.mp3'],                              text: '124. Dadgum.'};
taunts[125] = {     file: ['./taunts/aoe2/25_smite_me.mp3'],                            text: '125. Eh, smite me.'};
taunts[126] = {     file: ['./taunts/aoe2/26_the_wonder.mp3'],                          text: '126. The wonder, the wonder, the... no!'};
taunts[127] = {     file: ['./taunts/aoe2/27_you_play_2_hours.mp3'],                    text: '127. You played two hours to die like this?'};
taunts[128] = {     file: ['./taunts/aoe2/28_you_should_see_the_other_guy.mp3'],        text: '128. Yeah, well, you should see the other guy.'};
taunts[129] = {     file: ['./taunts/aoe2/29_roggan.mp3'],                              text: '129. Roggan.'};
taunts[130] = {     file: ['./taunts/aoe2/30_wololo.mp3'],                              text: '130. Wololo.'};
taunts[131] = {     file: ['./taunts/aoe2/31_attack_an_enemy_now.mp3'],                 text: '131. Attack an enemy now.'};
taunts[132] = {     file: ['./taunts/aoe2/32_cease_creating_extra_villagers.mp3'],      text: '132. Cease creating extra villagers.'};
taunts[133] = {     file: ['./taunts/aoe2/33_create_extra_villagers.mp3'],              text: '133. Create extra villagers.'};
taunts[134] = {     file: ['./taunts/aoe2/34_build_a_navy.mp3'],                        text: '134. Build a navy.'};
taunts[135] = {     file: ['./taunts/aoe2/35_stop_building_a_navy.mp3'],                text: '135. Stop building a navy.'};
taunts[136] = {     file: ['./taunts/aoe2/36_wait_for_my_signal_to_attack.mp3'],        text: '136. Wait for my signal to attack.'};
taunts[137] = {     file: ['./taunts/aoe2/37_build_a_wonder.mp3'],                      text: '137. Build a wonder.'};
taunts[138] = {     file: ['./taunts/aoe2/38_give_me_your_extra_resources.mp3'],        text: '138. Give me your extra resources.'};
taunts[139] = {     file: ['./taunts/aoe2/39_ally.mp3'],                                text: '139. *(Ally sound)*'};
taunts[140] = {     file: ['./taunts/aoe2/40_enemy.mp3'],                               text: '140. *(Enemy sound)*'};
taunts[141] = {     file: ['./taunts/aoe2/41_neutral.mp3'],                             text: '141. *(Neutral sound)*'};
taunts[142] = {     file: ['./taunts/aoe2/42_what_age_are_you_in.mp3'],                 text: '142. What age are you in?'};

// Dota 2 taunts - 2xx where 2 stands for 2 from dota 2
taunts[201] = {     file: [ './taunts/dota2/Crowd_1.mp3', 
                            './taunts/dota2/Crowd_2.mp3'],                              text: '201. Applause'};
taunts[202] = {     file: ['./taunts/dota2/Chat_wheel_2017_crybaby.mp3'],               text: '202. Crybaby'};
taunts[203] = {     file: ['./taunts/dota2/Chat_wheel_2017_sad_bone.mp3'],              text: '203. Sad trombone'};
taunts[204] = {     file: ['./taunts/dota2/Chat_wheel_2017_cricket.mp3'],               text: '204. Crickets'};
taunts[205] = {     file: ['./taunts/dota2/Chat_wheel_2017_ehto_g_g.mp3'],              text: '205. Это ГГ'};
taunts[206] = {     file: ['./taunts/dota2/Chat_wheel_2017_wow.mp3'],                   text: '206. Waow'};
taunts[211] = {     file: ['./taunts/dota2/Chat_wheel_2018_that_was_questionable.mp3'], text: '211. I...uh...That was questionable at the...at the best.'};
taunts[212] = {     file: ['./taunts/dota2/Chat_wheel_2018_what_just_happened.mp3'],    text: '212. I can\'t believe what we\'re seeing. What just happened?'};
taunts[213] = {     file: ['./taunts/dota2/Chat_wheel_2018_next_level.mp3'],            text: '213. The next level play!'};
taunts[221] = {     file: ['./taunts/dota2/Pud_ability_rot_07.mp3'],                    text: '221. Oops. Was that me?'};
taunts[222] = {     file: ['./taunts/dota2/Pud_thanks_02.mp3'],                         text: '222. That\'s a bit of all right.'};
taunts[223] = {     file: ['./taunts/dota2/Tech_kill_23.mp3'],                          text: '223. He he he, hehe ah ha! Oh ho ho oh oh ha ha ha!'};
taunts[224] = {     file: ['./taunts/dota2/Tech_trapgoesoff_10.mp3'],                   text: '224. Gotcha!'};
taunts[225] = {     file: ['./taunts/dota2/Tech_ally_03.mp3'],                          text: '225. Just have a seat right over there. And let the smart people work.'};

// Misc
taunts[420] = {     file: ['./taunts/do_you_have_the_time.mp3'],                        text: '420. Do you have the time? 420. Nice!'};
taunts[1010] = {    file: ['./taunts/hes_thicc.mp3'],                                   text: '1010. Oh yeah. Damn. Damn boy! DAMN BOY! HE\'S THICC!'};
taunts[1011] = {    file: ['./taunts/what_a_gamer.mp3'],                                text: '1011. Get the fuck outta my room. I\'m playing min- What a fucking GAMER. [*Uncontrollable laughter*] [*seinfeld theme*]'};
taunts[1012] = {    file: ['./taunts/fortnite/wiggle.mp3'],                             text: '1012. *THICC*'};
taunts[1013] = {    file: ['./taunts/thats_cheating.mp3'],                              text: '1013. That\'s cheating!'};
taunts[1014] = {    file: ['./taunts/i_dont_get_it.mp3'],                               text: '1014. I don\'t get it.'};



// Utility functions
function getRandomInt(max)
{
    return Math.floor(Math.random() * Math.floor(max));
}

var tauntsQueue = [];

function playTauntAudio(connection) {
    return new Promise(resolve => {
        var currentTaunt = tauntsQueue[0];
        var isPlaying = true;
        
        const dispatcher = connection.playFile(currentTaunt.file);
        dispatcher.setVolume(0.50);
        currentTaunt.message.channel.send(currentTaunt.text);
        dispatcher.on("end", end => {tauntsQueue.splice(0, 1); resolve();});
    });
}

client.on('ready', () => {
    client.user.setActivity('Wikipedia', {type: 'WATCHING'});
});

client.on('message', async message => {
    
    if (message.author.bot) return;
    if (!message.guild) return;
    
    if(!isNaN(parseInt(message.content))) {
        var tauntInt = parseInt(message.content);
        var shouldJoinAudio = false;
        var fileIndex = 0;
        
        if(typeof taunts[tauntInt] != 'undefined') {
            shouldJoinAudio = true;
            
            if(taunts[tauntInt].file.length > 1) {
                fileIndex = getRandomInt(taunts[tauntInt].file.length);
            }
            
            tauntsQueue.push({file: taunts[tauntInt].file[fileIndex], text: taunts[tauntInt].text, message: message});
        }
        
        if(shouldJoinAudio) {
            if (message.member.voiceChannel) {
                
                if(tauntsQueue.length > 1)
                {
                    return;
                }                    
                
                const connection = await message.member.voiceChannel.join();
                
                while (tauntsQueue.length > 0) {
                    await playTauntAudio(connection);
                }
                
                message.member.voiceChannel.leave();
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
        var text = paper.writePaper();
        console.log(text);
        return message.channel.send(text);
    }
});

client.login(process.env.TOKEN);
