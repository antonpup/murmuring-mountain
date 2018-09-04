// Discord.js bot
const Discord = require('discord.js');
const client = new Discord.Client();
const Knowledge = require('./knowledge.js');
const Paper = require('./paper.js');

const RandomArray = require('./randomArray.js');

let knowledge = new Knowledge();

let taunts = {};
// Rise of Nations taunts
registerTaunt(1, [{file: './taunts/ron/yes-3.mp3',                                      text: 'Yes.'}], ["ron", "yes"]);
registerTaunt(2, [{file: './taunts/ron/no-2.mp3',                                       text: 'No.'}], ["ron", "no"]);
registerTaunt(3, [{file: './taunts/ron/maybe-2.mp3',                                    text: 'Maybe.'}], ["ron", "maybe"]);
registerTaunt(4, [{file: './taunts/ron/need_food-2.mp3',                                text: 'I need food.'}], ["ron", "need", "food"]);
registerTaunt(5, [{file: './taunts/ron/needtimber-2.mp3',                               text: 'I need timber.'}], ["ron", "need", "timer", "wood"]);
registerTaunt(6, [{file: './taunts/ron/need_metal-1.mp3',                               text: 'I need metal.'}], ["ron", "need", "metal"]);
registerTaunt(7, [{file: './taunts/ron/needwealth-3.mp3',                               text: 'I need wealth, alright?  Wealth.'}], ["ron", "need", "wealth", "money", "coin"]);
registerTaunt(8, [{file: './taunts/ron/needoil-2.mp3',                                  text: 'I need oil.'}], ["ron", "need", "oil"]);
registerTaunt(9, [{file: './taunts/ron/needknowledge-1.mp3',                            text: 'Ha, I need...oh yeah, knowledge.'}], ["ron", "need", "knowledge", "education"]);
registerTaunt(10, [{file: './taunts/ron/ask_resources-2.mp3',                           text: 'Do you need resources?  Speak up boy.'}], ["ron", "offer", "resources"]);
registerTaunt(11, [{file: './taunts/ron/help_here-3.mp3',                               text: 'Uh, hey dude, a little help here?'}], ["ron", "help"]);
registerTaunt(12, [{file: './taunts/ron/noob_rush-1.mp3',                               text: 'Hey, this noob\'s rushin\' me.'}], ["ron", "noob", "rush"]);
registerTaunt(13, [{file: './taunts/ron/buildtroops-1.mp3',                             text: 'Build more troops.'}], ["ron", "build", "troops"]);
registerTaunt(14, [{file: './taunts/ron/build_wonder-3.mp3',                            text: 'Build a wonder boy, quick.'}], ["ron", "build", "wonder"]);
registerTaunt(15, [{file: './taunts/ron/work_econ-1.mp3',                               text: 'Work on your economy, hmm?'}], ["ron", "economy"]);
registerTaunt(16, [{file: './taunts/ron/work_airforce-2.mp3',                           text: 'Hey boy, work on your airforce.'}], ["ron", "airforce"]);
registerTaunt(17, [{file: './taunts/ron/work_navy-3.mp3',                               text: 'Dude, you gotta work on your navy.'}], ["ron", "navy"]);
registerTaunt(18, [{file: './taunts/ron/signal_attack-3.mp3',                           text: 'Wait for my signal to attack.'}], ["ron", "wait"]);
registerTaunt(19, [{file: './taunts/ron/attack-3.mp3',                                  text: 'Attack!'}], ["ron", "attack"]);
registerTaunt(20, [{file: './taunts/ron/get_em-2.mp3',                                  text: 'He he he, let\'s get \'em.'}], ["ron", "get", "em"]);
registerTaunt(21, [{file: './taunts/ron/guard_artillery-2.mp3',                         text: 'Guard my artillery.'}], ["ron", "guard", "artillery"]);
registerTaunt(22, [{file: './taunts/ron/move_troops-2.mp3',                             text: 'Move troops here.'}], ["ron", "move", "troops"]);
registerTaunt(23, [{file: './taunts/ron/grab_territory-1.mp3',                          text: 'Grab some territory.'}], ["ron", "grab", "territorry"]);
registerTaunt(24, [{file: './taunts/ron/gonna_boom-2.mp3',                              text: 'Gonna boom.'}], ["ron", "boom"]);
registerTaunt(25, [{file: './taunts/ron/gonna_rush-1.mp3',                              text: 'Gonna rush.'}], ["ron", "rush"]);
registerTaunt(26, [{file: './taunts/ron/wanna_ally-3.mp3',                              text: 'Huh, wanna ally?'}], ["ron", "ally"]);
registerTaunt(27, [{file: './taunts/ron/wanna_peace-3.mp3',                             text: 'Wanna make peace?'}], ["ron", "peace"]);
registerTaunt(28, [{file: './taunts/ron/means_war-3.mp3',                               text: 'Of course you realize, this means war.'}], ["ron", "war"]);
registerTaunt(29, [{file: './taunts/ron/pay_die-1.mp3',                                 text: 'Pay up, or die.'}], ["ron", "pay", "die"]);
registerTaunt(30, [{file: './taunts/ron/prepare_crushed-1.mp3',                         text: 'Prepare to be crushed.'}], ["ron", "crushed"]);
registerTaunt(31, [{file: './taunts/ron/who_attack-3.mp3',                              text: 'Who we gonna attack?'}], ["ron", "who", "attack"]);
registerTaunt(32, [{file: './taunts/ron/when_attack-2.mp3',                             text: 'Uh, Wh, When shall we attack?'}], ["ron", "when", "attack"]);
registerTaunt(33, [{file: './taunts/ron/where_enemy-1.mp3',                             text: 'Uh, where\'s the enemy?'}], ["ron", "where", "enemy"]);
registerTaunt(34, [{file: './taunts/ron/airpower-3.mp3',                                text: 'They got air power.'}], ["ron", "airpower"]);
registerTaunt(35, [{file: './taunts/ron/ships_ahoy-3.mp3',                              text: 'Ah ga ga, Ships ahoy, heh heh heh.'}], ["ron", "ships"]);
registerTaunt(36, [{file: './taunts/ron/spy_spy-3.mp3',                                 text: 'I spy... a spy.'}], ["ron", "spy"]);
registerTaunt(37, [{file: './taunts/ron/rare_resources-3.mp3',                          text: 'Howdy hi there friends and neighbors, we got rare resources for the taking.'}], ["ron", "rare", "resources"]);
registerTaunt(38, [{file: './taunts/ron/city_down-1.mp3',                               text: 'This city is goin\' down.'}], ["ron", "city"]);
registerTaunt(39, [{file: './taunts/ron/checkouttimer-2.mp3',                           text: 'Hey, check out the timer.'}], ["ron", "timer"]);
registerTaunt(40, [{file: './taunts/ron/setup_shop-2.mp3',                              text: 'Let\'s set up shop.'}], ["ron", "shop"]);
registerTaunt(41, [{file: './taunts/ron/wanna_bet-2.mp3',                               text: 'Wanna bet?'}], ["ron", "bet"]);
registerTaunt(42, [{file: './taunts/ron/itson-1.mp3',                                   text: 'Oh, it\'s on!'}], ["ron", "on", "tf2scout"]);
registerTaunt(43, [{file: './taunts/ron/supposed_hurt-1.mp3',                           text: 'Was that supposed to hurt? Eh heh heh heh heh heh.'}], ["ron", "hurt"]);
registerTaunt(44, [{file: './taunts/ron/fixed_problem-1.mp3',                           text: 'Have you fixed your little problem yet?'}], ["ron", "problem"]);
registerTaunt(45, [{file: './taunts/ron/good_luck-1.mp3',                               text: 'Hey, hey, good luck with that eh, heh.'}], ["ron", "goodluck"]);
registerTaunt(46, [{file: './taunts/ron/works_out-1.mp3',                               text: 'Let me know how that works out for ya.'}], ["ron", "works", "out"]);
registerTaunt(47, [{file: './taunts/ron/slow_ahead-3.mp3',                              text: 'Yeah, yeah, ya know I may be slow but I\'m ahead of you!  Eh, Charlie?  Ha Ha!'}], ["ron", "slows"]);
registerTaunt(48, [{file: './taunts/ron/classy-3.mp3',                                  text: 'Huh, Classy.'}], ["ron", "classy"]);
registerTaunt(49, [{file: './taunts/ron/tutorials_noob-1.mp3',                          text: 'Play the tutorials noob.'}], ["ron", "tutorials", "noob"]);
registerTaunt(50, [{file: './taunts/ron/wake_done-1.mp3',                               text: '*Yawn* Wake me up when you\'re done.'}], ["ron", "wake", "done"]);
registerTaunt(51, [{file: './taunts/ron/get_outta-3.mp3',                               text: 'Get outta my face.'}], ["ron", "outta", "face"]);
registerTaunt(52, [{file: './taunts/ron/leavemealone-2.mp3',                            text: 'Uh, leave me alone, ok.'}], ["ron", "leave", "alone"]);
registerTaunt(53, [{file: './taunts/ron/need_that-3.mp3',                               text: '\'Cause ya need that.'}], ["ron", "need", "that"]);
registerTaunt(54, [{file: './taunts/ron/over_yet-4.mp3',                                text: 'Is it over yet?'}], ["ron", "over"]);
registerTaunt(55, [{file: './taunts/ron/parents_late-2.mp3',                            text: 'Do your parents know you\'re up this late?'}], ["ron", "parents"]);
registerTaunt(56, [{file: './taunts/ron/you_ok-1.mp3',                                  text: 'You ok over there?'}], ["ron", "ok"]);
registerTaunt(57, [{file: './taunts/ron/stayout-1.mp3',                                 text: 'And stay out!'}], ["ron", "stay", "out"]);
registerTaunt(58, [{file: './taunts/ron/bwahaha-1.mp3',                                 text: 'Bwa ha ha ha ha ha ha ha.'}], ["ron", "bwa", "ha", "haha", "laugh"]);
registerTaunt(59, [{file: './taunts/ron/stormin_castle-1.mp3',                          text: 'Have fun stormin\' the castle.'}], ["ron", "storm", "storming", "castle"]);
registerTaunt(60, [{file: './taunts/ron/randomrandom-2.mp3',                            text: 'Random!  Random!  Random!'}], ["ron", "random"]);
registerTaunt(61, [{file: './taunts/ron/randomrandom-4.mp3',                            text: 'RANDOM!  RANDOM!  RANDOM!'}], ["ron", "random"]);
registerTaunt(62, [{file: './taunts/ron/game_begin-3.mp3',                              text: 'Let the game begin!'}], ["ron", "game", "begin"]);
registerTaunt(63, [{file: './taunts/ron/dude_pickem-1.mp3',                             text: 'Dude, we know who you\'re going to take.  Just pick \'em and get on with it.'}], ["ron", "pick", "em"]);
registerTaunt(64, [{file: './taunts/ron/click_understand-2.mp3',                        text: 'Which part of "Click in" didn\'t you understand?'}], ["ron", "click", "in"]);
registerTaunt(65, [{file: './taunts/ron/what_holdup-2.mp3',                             text: 'What\'s the holdup?'}], ["ron", "holdup"]);
registerTaunt(66, [{file: './taunts/ron/ahh-1.mp3',                                     text: 'Ahhh haaa.'}], ["ron", "ha", "haa", "laugh"]);
registerTaunt(67, [{file: './taunts/ron/uhh_uhh-1.mp3',                                 text: 'Unh Unh Unh.'}], ["ron", "unh"]);
registerTaunt(68, [{file: './taunts/ron/ohhh-4.mp3',                                    text: 'Ohhh.'}], ["ron", "oh"]);
registerTaunt(69, [{file: './taunts/ron/uhhh-2.mp3',                                    text: 'Uhhh.'}], ["ron", "uh"]);
registerTaunt(70, [{file: './taunts/ron/unh-3.mp3',                                     text: 'Unh!'}], ["ron", "unh"]);
registerTaunt(71, [{file: './taunts/ron/doomed-1.mp3',                                  text: 'We\'re doomed!'}], ["ron", "doomed"]);
registerTaunt(72, [{file: './taunts/ron/wanngiveup-2.mp3',                              text: 'Wanna give up?'}], ["ron", "giveup"]);
registerTaunt(73, [{file: './taunts/ron/victoryismine-3.mp3',                           text: 'Victory is mine!'}], ["ron", "victory"]);
registerTaunt(74, [{file: './taunts/ron/owmyeye-1.mp3',                                 text: 'Oww!  My eye!'}], ["ron", "eye"]);
registerTaunt(75, [{file: './taunts/ron/notintheface-1.mp3',                            text: 'Not in the face!  Not in the face!'}], ["ron", "not", "face"]);
registerTaunt(76, [{file: './taunts/ron/coming-4.mp3',                                  text: 'Eh, Coming.'}], ["ron", "coming"]);
registerTaunt(77, [{file: './taunts/ron/berightthere-1.mp3',                            text: 'Be right there.'}], ["ron", "coming"]);
registerTaunt(78, [{file: './taunts/ron/onmyway-1.mp3',                                 text: 'On my way.'}], ["ron", "omw", "coming"]);
registerTaunt(79, [{file: './taunts/ron/send_help-1.mp3',                               text: 'I\'m tryin\' to send some help.'}], ["ron", "trying", "send", "help"]);
registerTaunt(80, [{file: './taunts/ron/gotchacovered-3.mp3',                           text: 'Gotcha covered.'}], ["ron", "covered"]);
registerTaunt(81, [{file: './taunts/ron/check-2.mp3',                                   text: 'Check.'}], ["ron", "check"]);
registerTaunt(82, [{file: './taunts/ron/itshallbedone-1.mp3',                           text: 'It shall be done.'}], ["ron", "done"]);
registerTaunt(83, [{file: './taunts/ron/rightonthat-2.mp3',                             text: 'Let me get right on that.'}], ["ron", "on", "that"]);
registerTaunt(84, [{file: './taunts/ron/sweet-3.mp3',                                   text: 'Heh heh heh, Sweet.'}], ["ron", "sweet"]);
registerTaunt(85, [{file: './taunts/ron/youdaman-2.mp3',                                text: 'You da man.'}], ["ron", "man"]);
registerTaunt(86, [{file: './taunts/ron/talking_about-1.mp3',                           text: 'That\'s what I\'m talkin about.'}], ["ron", "talking", "about"]);
registerTaunt(87, [{file: './taunts/ron/takencareof-3.mp3',                             text: 'Consider it taken care of.'}], ["ron", "done"]);
registerTaunt(88, [{file: './taunts/ron/soundslikeaplan-2.mp3',                         text: 'Sounds like a plan.'}], ["ron", "plan"]);
registerTaunt(89, [{file: './taunts/ron/groovy-3.mp3',                                  text: 'Groovy.'}], ["ron", "groovy"]);
registerTaunt(90, [{file: './taunts/ron/color_red-1.mp3',                               text: 'Red.'}], ["ron", "red"]);
registerTaunt(91, [{file: './taunts/ron/color_blue-1.mp3',                              text: 'Blue.'}], ["ron", "blue"]);
registerTaunt(92, [{file: './taunts/ron/color_purple-2.mp3',                            text: 'Purple.'}], ["ron", "purple"]);
registerTaunt(93, [{file: './taunts/ron/color_green-1.mp3',                             text: 'Green.'}], ["ron", "green"]);
registerTaunt(94, [{file: './taunts/ron/color_yellow.mp3',                              text: 'Yellow.'}], ["ron", "yellow"]);
registerTaunt(95, [{file: './taunts/ron/color_ltblue-1.mp3',                            text: 'Light blue.'}], ["ron", "lblue"]);
registerTaunt(96, [{file: './taunts/ron/color_white-3.mp3',                             text: 'White.'}], ["ron", "white"]);
registerTaunt(97, [{file: './taunts/ron/color_orange-2.mp3',                            text: 'Orange.'}], ["ron", "orange"]);
registerTaunt(98, [{file: './taunts/ron/humanity-3.mp3',                                text: 'Aaaaaagh!  The humanity!'}], ["ron", "humanity"]);
registerTaunt(99, [{file: './taunts/ron/getthat-3.mp3',                                 text: 'Let me get that for you.'}], ["ron", "get", "that"]);
registerTaunt(100, [{file: './taunts/ron/keep_risin-1.mp3',                             text: 'They keep on rising!'}], ["ron", "rising"]);

// Custom taunts
// Age of Empires 2 taunts - 1xx
registerTaunt(101, [{file: './taunts/aoe2/01_yes.mp3',                                  text: 'Yes.'}], ["aoe2", "yes"]);
registerTaunt(102, [{file: './taunts/aoe2/02_no.mp3',                                   text: 'No.'},
                    {file: './taunts/aoe2/02_no_ru.mp3',                                text: 'Нет.'}], ["aoe2", "no"]);
registerTaunt(103, [{file: './taunts/aoe2/03_food_please.mp3',                          text: 'Food please.'}], ["aoe2", "need", "food"]);
registerTaunt(104, [{file: './taunts/aoe2/04_wood_please.mp3',                          text: 'Wood please.'}], ["aoe2", "need", "wood", "timber"]);
registerTaunt(105, [{file: './taunts/aoe2/05_gold_please.mp3',                          text: 'Gold please.'}], ["aoe2", "need", "gold", "wealth", "money"]);
registerTaunt(106, [{file: './taunts/aoe2/06_stone_please.mp3',                         text: 'Stone please.'}], ["aoe2", "need", "stone"]);
registerTaunt(107, [{file: './taunts/aoe2/07_ahh.mp3',                                  text: 'Ahh!'}], ["aoe2", "ahh"]);
registerTaunt(108, [{file: './taunts/aoe2/08_all_hail.mp3',                             text: 'All hail, king of the losers!'}], ["aoe2", "king", "losers"]);
registerTaunt(109, [{file: './taunts/aoe2/09_oooh.mp3',                                 text: 'Ooh!'}], ["aoe2", "ohh", "oh"]);
registerTaunt(110, [{file: './taunts/aoe2/10_back_to_age_1.mp3',                        text: 'I\'ll beat you back to Age of Empires.'}], ["aoe2", "beat"]);
registerTaunt(111, [{file: './taunts/aoe2/11_herb_laugh.mp3',                           text: '*(Herb laugh)*'},
                    {file: './taunts/ds/laugh_1.mp3',                                   text: '*(Laugh)*', chance: 0.05},
                    {file: './taunts/ds/laugh_2.mp3',                                   text: '*(Laugh)*', chance: 0.05},
                    {file: './taunts/ds/laugh_3.mp3',                                   text: '*(Laugh)*', chance: 0.05},
                    {file: './taunts/ds/laugh_4.mp3',                                   text: '*(Laugh)*', chance: 0.05},
                    {file: './taunts/ds/laugh_5.mp3',                                   text: '*(Laugh)*', chance: 0.05}], ["aoe2", "laugh"]);
registerTaunt(112, [{file: './taunts/aoe2/12_being_rushed.mp3',                         text: 'Ah! Being rushed.'}], ["aoe2", "rush", "rushed"]);
registerTaunt(113, [{file: './taunts/aoe2/13_blame_your_isp.mp3',                       text: 'Sure, blame it on your ISP.'}], ["aoe2", "isp"]);
registerTaunt(114, [{file: './taunts/aoe2/14_start_the_game.mp3',                       text: 'Start the game already!'}], ["aoe2", "start", "game"]);
registerTaunt(115, [{file: './taunts/aoe2/15_dont_point_that_thing.mp3',                text: 'Don\'t point that thing at me!'}], ["aoe2", "point"]);
registerTaunt(116, [{file: './taunts/aoe2/16_enemy_sighted.mp3',                        text: 'Enemy sighted!'}], ["aoe2", "enemy", "sighted", "spotted", "tf2soldier"]);
registerTaunt(117, [{file: './taunts/aoe2/17_it_is_good.mp3',                           text: 'It is good to be the king.'}], ["aoe2", "king", "good"]);
registerTaunt(118, [{file: './taunts/aoe2/18_i_need_a_monk.mp3',                        text: 'Monk! I need a monk!'}], ["aoe2", "need", "monk"]);
registerTaunt(119, [{file: './taunts/aoe2/19_long_time_no_siege.mp3',                   text: 'Long time, no siege.'}], ["aoe2", "siege"]);
registerTaunt(120, [{file: './taunts/aoe2/20_my_granny.mp3',                            text: 'My granny could scrap better than that.'}], ["aoe2", "granny"]);
registerTaunt(121, [{file: './taunts/aoe2/21_nice_town_ill_take_it.mp3',                text: 'Nice town, I\'ll take it.'}], ["aoe2", "nice", "town", "take"]);
registerTaunt(122, [{file: './taunts/aoe2/22_quit_touchin.mp3',                         text: 'Quit touching me!'}], ["aoe2", "quit", "touching"]);
registerTaunt(123, [{file: './taunts/aoe2/23_raiding_party.mp3',                        text: 'Raiding party!'}], ["aoe2", "raid", "party"]);
registerTaunt(124, [{file: './taunts/aoe2/24_dadgum.mp3',                               text: 'Dadgum.'}], ["aoe2", "dad", "gum"]);
registerTaunt(125, [{file: './taunts/aoe2/25_smite_me.mp3',                             text: 'Eh, smite me.'}], ["aoe2", "smite"]);
registerTaunt(126, [{file: './taunts/aoe2/26_the_wonder.mp3',                           text: 'The wonder, the wonder, the... no!'}], ["aoe2", "wonder"]);
registerTaunt(127, [{file: './taunts/aoe2/27_you_play_2_hours.mp3',                     text: 'You played two hours to die like this?'}], ["aoe2", "die"]);
registerTaunt(128, [{file: './taunts/aoe2/28_you_should_see_the_other_guy.mp3',         text: 'Yeah, well, you should see the other guy.'}], ["aoe2", "other", "guy"]);
registerTaunt(129, [{file: './taunts/aoe2/29_roggan.mp3',                               text: 'Roggan.'}], ["aoe2", "roggan", "this_is_not_a_valid_religion"]);
registerTaunt(130, [{file: './taunts/aoe2/30_wololo.mp3',                               text: 'Wololo.'}], ["aoe2", "wolo", "lolo"]);
registerTaunt(131, [{file: './taunts/aoe2/31_attack_an_enemy_now.mp3',                  text: 'Attack an enemy now.'}], ["aoe2", "attack", "now"]);
registerTaunt(132, [{file: './taunts/aoe2/32_cease_creating_extra_villagers.mp3',       text: 'Cease creating extra villagers.'}], ["aoe2", "stop", "making", "villagers"]);
registerTaunt(133, [{file: './taunts/aoe2/33_create_extra_villagers.mp3',               text: 'Create extra villagers.'}], ["aoe2", "make", "villagers"]);
registerTaunt(134, [{file: './taunts/aoe2/34_build_a_navy.mp3',                         text: 'Build a navy.'}], ["aoe2", "build", "navy"]);
registerTaunt(135, [{file: './taunts/aoe2/35_stop_building_a_navy.mp3',                 text: 'Stop building a navy.'}], ["aoe2", "stop", "building", "navy"]);
registerTaunt(136, [{file: './taunts/aoe2/36_wait_for_my_signal_to_attack.mp3',         text: 'Wait for my signal to attack.'}], ["aoe2", "attack", "signal"]);
registerTaunt(137, [{file: './taunts/aoe2/37_build_a_wonder.mp3',                       text: 'Build a wonder.'}], ["aoe2", "build", "wonder"]);
registerTaunt(138, [{file: './taunts/aoe2/38_give_me_your_extra_resources.mp3',         text: 'Give me your extra resources.'}], ["aoe2", "give", "extra", "resources"]);
registerTaunt(139, [{file: './taunts/aoe2/39_ally.mp3',                                 text: '*(Ally sound)*'}], ["aoe2", "ally"]);
registerTaunt(140, [{file: './taunts/aoe2/40_enemy.mp3',                                text: '*(Enemy sound)*'}], ["aoe2", "enemy"]);
registerTaunt(141, [{file: './taunts/aoe2/41_neutral.mp3',                              text: '*(Neutral sound)*'}], ["aoe2", "neutral"]);
registerTaunt(142, [{file: './taunts/aoe2/42_what_age_are_you_in.mp3',                  text: 'What age are you in?'}], ["aoe2", "age"]);

// Dota 2 taunts - 2xx where 2 stands for 2 from dota 2
registerTaunt(201, [{file: './taunts/dota2/Crowd_1.mp3',                                text: 'Applause'},
                    {file: './taunts/dota2/Crowd_2.mp3',                                text: 'Applause'}], ["dota", "applause"]);
registerTaunt(202, [{file: './taunts/dota2/Chat_wheel_2017_crybaby.mp3',                text: 'Crybaby'}], ["dota", "cry"]);
registerTaunt(203, [{file: './taunts/dota2/Chat_wheel_2017_sad_bone.mp3',               text: 'Sad trombone'}], ["dota", "sad", "trombone"]);
registerTaunt(204, [{file: './taunts/dota2/Chat_wheel_2017_cricket.mp3',                text: 'Crickets'}], ["dota", "crickets"]);
registerTaunt(205, [{file: './taunts/dota2/Chat_wheel_2017_ehto_g_g.mp3',               text: 'Это ГГ'}], ["dota", "gg"]);
registerTaunt(206, [{file: './taunts/dota2/Chat_wheel_2017_wow.mp3',                    text: 'Waow'}], ["dota", "wow"]);
registerTaunt(211, [{file: './taunts/dota2/Chat_wheel_2018_that_was_questionable.mp3',  text: 'I...uh...That was questionable at the...at the best.'}], ["dota", "questionable"]);
registerTaunt(212, [{file: './taunts/dota2/Chat_wheel_2018_what_just_happened.mp3',     text: 'I can\'t believe what we\'re seeing. What just happened?'}], ["dota", "what"]);
registerTaunt(213, [{file: './taunts/dota2/Chat_wheel_2018_next_level.mp3',             text: 'The next level play!'}], ["dota", "next", "level"]);
registerTaunt(221, [{file: './taunts/dota2/Pud_ability_rot_07.mp3',                     text: 'Oops. Was that me?'}], ["dota", "pudge", "oops"]);
registerTaunt(222, [{file: './taunts/dota2/Pud_thanks_02.mp3',                          text: 'That\'s a bit of all right.'}], ["dota", "pudge", "thanks"]);
registerTaunt(223, [{file: './taunts/dota2/Tech_kill_23.mp3',                           text: 'He he he, hehe ah ha! Oh ho ho oh oh ha ha ha!'}], ["dota", "techies", "kill", "ha", "haha", "he", "hehe", "laugh" ]);
registerTaunt(224, [{file: './taunts/dota2/Tech_trapgoesoff_10.mp3',                    text: 'Gotcha!'}], ["dota", "techies", "gotcha"]);
registerTaunt(225, [{file: './taunts/dota2/Tech_ally_03.mp3',                           text: 'Just have a seat right over there. And let the smart people work.'}], ["dota", "techies", "smart", "work", "seat"]);
registerTaunt(226, [{file: './taunts/dota2/Gaben_ann_kill_triple_02.mp3',               text: 'Impossible kill.'},
                    {file: './taunts/dota2/Gaben_ann_kill_triple_03.mp3',               text: 'More than two kills, but less than four kills.'},
                    {file: './taunts/dota2/Gaben_ann_kill_no_01.mp3',                   text: 'I\'m not reading this.', chance: 0.15}], ["dota", "gaben", "triple", "3kill", "3kills"]);
registerTaunt(227, [{file: './taunts/dota2/Gaben_ann_kill_no_01.mp3',                   text: 'I\'m not reading this.'}], ["dota", "gaben", "no", "notreading"]);
registerTaunt(228, [{file: './taunts/dota2/Gaben_ann_kill_followup_42.mp3',             text: 'The entire team was an ass, and we won\'t be working with them again.'}], ["dota", "gaben", "followup", "ass", "team"]);
registerTaunt(229, [{file: './taunts/dota2/Gaben_ann_kill_followup_46.mp3',             text: 'Just ALT F4.'}], ["dota", "gaben", "followup", "alt", "f4"]);
registerTaunt(230, [{file: './taunts/dota2/Gaben_ann_kill_followup_48.mp3',             text: 'Um, this isn\'t working.'}], ["dota", "gaben", "followup", "isnt", "working"]);
registerTaunt(231, [{file: './taunts/dota2/Gaben_ann_kill_followup_52.mp3',             text: 'By far the most advanced scam I\'ve ever encountered.'}], ["dota", "gaben", "followup", "scam"]);


// Killing Floor taunts - 3xx
registerTaunt(301, [{file: './taunts/kf/Yes_1.mp3',                                     text: 'Yeah, ok.'},
                    {file: './taunts/kf/Yes_2.mp3',                                     text: 'Sure, mate.'},
                    {file: './taunts/kf/Yes_3.mp3',                                     text: 'Yep, will do.'},
                    {file: './taunts/kf/Yes_4.mp3',                                     text: 'No problem.'},
                    {file: './taunts/kf/Yes_5.mp3',                                     text: 'Yeah, roger that.'},
                    {file: './taunts/kf/Yes_6.mp3',                                     text: 'Affirmative.'},
                    {file: './taunts/kf/Yes_7.mp3',                                     text: 'Okay, gov\'na!'}], ["kf", "yes"]);
registerTaunt(302, [{file: './taunts/kf/No_1.mp3',                                      text: 'Hell no!'},
                    {file: './taunts/kf/No_2.mp3',                                      text: 'No chance, pal.'},
                    {file: './taunts/kf/No_3.mp3',                                      text: 'Nob off, you tosspot!'},
                    {file: './taunts/kf/No_4.mp3',                                      text: 'Bog off, you wanker!'},
                    {file: './taunts/kf/No_5.mp3',                                      text: 'Don\'t be bloody stupid!'},
                    {file: './taunts/kf/No_6.mp3',                                      text: 'Bugger that.'}], ["kf", "no"]);
registerTaunt(303, [{file: './taunts/kf/Help_1.mp3',                                    text: 'A little help would be appreciated!'},
                    {file: './taunts/kf/Help_2.mp3',                                    text: 'I\'m in deep crap here!'},
                    {file: './taunts/kf/Help_3.mp3',                                    text: 'Help!'},
                    {file: './taunts/kf/Help_4.mp3',                                    text: 'Help me like now!'},
                    {file: './taunts/kf/Help_5.mp3',                                    text: 'Give me a hand over here.'},
                    {file: './taunts/kf/Help_6.mp3',                                    text: 'For God\'s sake, help me!'},
                    {file: './taunts/kf/Help_7.mp3',                                    text: 'Bugger it! Help me!'},
                    {file: './taunts/kf/Help_8.mp3',                                    text: 'Hey gov\'na, I\'m up to my bloody neck in it over here!'},
                    {file: './taunts/kf/Help_9.mp3',                                    text: 'Any time, no rush! Help!'}], ["kf", "help"]);
registerTaunt(304, [{file: './taunts/kf/Drop_Weapon_1.mp3',                             text: 'I need a bloody shooter!'},
                    {file: './taunts/kf/Drop_Weapon_2.mp3',                             text: 'Tool me up, you tight gits!'},
                    {file: './taunts/kf/Drop_Weapon_3.mp3',                             text: 'Come on, someone kit me out.'},
                    {file: './taunts/kf/Drop_Weapon_4.mp3',                             text: 'Pass me a piece will ya, pal?'}], ["kf", "need", "ammo", "weapon"]);
registerTaunt(305, [{file: './taunts/kf/Need_money_1.mp3',                              text: 'Can you give us some money?'},
                    {file: './taunts/kf/Need_money_2.mp3',                              text: 'I need some dosh right now.'},
                    {file: './taunts/kf/Need_money_3.mp3',                              text: 'Can anyone lend me a tenner?'},
                    {file: './taunts/kf/Need_money_4.mp3',                              text: 'Can you sub me a few, mate?'},
                    {file: './taunts/kf/Need_money_5.mp3',                              text: 'Give us some bloody money, will ya?'},
                    {file: './taunts/kf/Need_Money_6.mp3',                              text: 'I\'m a bit brasic. Can you help me out?'},
                    {file: './taunts/kf/Need_Money_7.mp3',                              text: 'Can I scrounge some cash?'},
                    {file: './taunts/kf/Need_Money_8.mp3',                              text: 'Give us a few quid, gov\'na.'},
                    {file: './taunts/kf/Need_Money_9.mp3',                              text: 'Where\'s my bloody benefits cheque?'}], ["kf", "need", "money", "gold", "wealth"]);
registerTaunt(306, [{file: './taunts/kf/Medic_1.mp3',                                   text: 'Patch me up for God\'s sake!'},
                    {file: './taunts/kf/Medic_2.mp3',                                   text: 'Jesus, I\'m bleeding! Help me!'},
                    {file: './taunts/kf/Medic_3.mp3',                                   text: 'I\'m hit! Bloody well do something!'},
                    {file: './taunts/kf/Medic_4.mp3',                                   text: 'Jesus, I\'m bleeding like a stuck pig!'},
                    {file: './taunts/kf/Medic_5.mp3',                                   text: 'Where\'s the bloody quack when you want one?'},
                    {file: './taunts/kf/Medic_6.mp3',                                   text: 'That bloody well hurts!'},
                    {file: './taunts/kf/Medic_7.mp3',                                   text: 'I want drugs! Now!'}], ["kf", "medic", "need", "health"]);
registerTaunt(307, [{file: './taunts/kf/Thanks_1.mp3',                                  text: 'Thanks pal!'},
                    {file: './taunts/kf/Thanks_2.mp3',                                  text: 'Cheers, big ears!'},
                    {file: './taunts/kf/Thanks_3.mp3',                                  text: 'Ta very much!'},
                    {file: './taunts/kf/Thanks_4.mp3',                                  text: 'Thanks.'},
                    {file: './taunts/kf/Thanks_5.mp3',                                  text: 'You\'re too kind.'},
                    {file: './taunts/kf/Thanks_6.mp3',                                  text: 'Nice one, geezer.'},
                    {file: './taunts/kf/Thanks_7.mp3',                                  text: 'Nice one, Cyril!'}], ["kf", "thanks"]);
registerTaunt(308, [{file: './taunts/kf/Sorry_1.mp3',                                   text: 'Oh, my mistake.'},
                    {file: './taunts/kf/Sorry_2.mp3',                                   text: 'Oh... sorry.'},
                    {file: './taunts/kf/Sorry_3.mp3',                                   text: 'Oh, did that hurt?'},
                    {file: './taunts/kf/Sorry_4.mp3',                                   text: 'Whoopsie...'},
                    {file: './taunts/kf/Sorry_5.mp3',                                   text: 'Oh, so sorry.'}], ["kf", "sorry"]);
registerTaunt(309, [{file: './taunts/kf/Look_Out_1.mp3',                                text: 'Look out, you plonker!'},
                    {file: './taunts/kf/Look_Out_2.mp3',                                text: 'Man on!'},
                    {file: './taunts/kf/Look_Out_3.mp3',                                text: 'Behind you, idiot!'},
                    {file: './taunts/kf/Look_Out_4.mp3',                                text: 'Watch it!'},
                    {file: './taunts/kf/Look_Out_5.mp3',                                text: 'Behind you, you tosser!'},
                    {file: './taunts/kf/Look_Out_6.mp3',                                text: 'Wake up, you pillock!'},
                    {file: './taunts/kf/Look_Out_7.mp3',                                text: 'Watch you back, mate!'}], ["kf", "lookout"]);
registerTaunt(310, [{file: './taunts/kf/Run_1.mp3',                                     text: 'Oh crap, run!'},
                    {file: './taunts/kf/Run_2.mp3',                                     text: 'We\'re screwed! Leg it!'},
                    {file: './taunts/kf/Run_3.mp3',                                     text: 'Damn it! Bulls up, boys!'},
                    {file: './taunts/kf/Run_4.mp3',                                     text: 'Burn rubber, you pillocks!'},
                    {file: './taunts/kf/Run_5.mp3',                                     text: 'Scarper!'}], ["kf", "run"]);
registerTaunt(311, [{file: './taunts/kf/Wait_for_me_1.mp3',                             text: 'Slow down, you arseholes!'},
                    {file: './taunts/kf/Wait_for_me_2.mp3',                             text: 'Wait up! I\'m coming!'},
                    {file: './taunts/kf/Wait_for_me_3.mp3',                             text: 'Hold on for Christ\'s sake!'},
                    {file: './taunts/kf/Wait_for_me_4.mp3',                             text: 'I\'m bricking meself! Wait up!'},
                    {file: './taunts/kf/Wait_for_me_5.mp3',                             text: 'Hang about! I\'m coming!'}], ["kf", "wait"]);
registerTaunt(312, [{file: './taunts/kf/Weld_the_doors_1.mp3',                          text: 'Get those doors welded.'},
                    {file: './taunts/kf/Weld_the_doors_2.mp3',                          text: 'Weld them tight.'},
                    {file: './taunts/kf/Weld_the_doors_3.mp3',                          text: 'Seal the doors, quick!'},
                    {file: './taunts/kf/Weld_the_doors_4.mp3',                          text: 'Get the doors, you muppets!'},
                    {file: './taunts/kf/Weld_the_doors_5.mp3',                          text: 'One of you pikeys weld those bloody doors!'}], ["kf", "weld", "doors"]);
registerTaunt(313, [{file: './taunts/kf/Hole_up_1.mp3',                                 text: 'God, remember the bleedin\' alamo?'},
                    {file: './taunts/kf/Hole_up_2.mp3',                                 text: 'This\'ll do. I need a breather anyway.'},
                    {file: './taunts/kf/Hole_up_3.mp3',                                 text: 'Thin red line, right here boys.'},
                    {file: './taunts/kf/Hole_up_4.mp3',                                 text: 'Nice bolt-hole. This will do.'},
                    {file: './taunts/kf/Hole_up_5.mp3',                                 text: 'Hunker down in here.'}], ["kf", "holeup"]);
registerTaunt(314, [{file: './taunts/kf/Follow_me_1.mp3',                               text: 'With me!'},
                    {file: './taunts/kf/Follow_me_2.mp3',                               text: 'Oi, plonkers! Follow me!'},
                    {file: './taunts/kf/Follow_me_3.mp3',                               text: 'On me!'},
                    {file: './taunts/kf/Follow_me_4.mp3',                               text: 'Get fell in!'}], ["kf", "follow"]);
registerTaunt(315, [{file: './taunts/kf/Insult_Specimens_1.mp3',                        text: 'Bloody hell! You stink!'},
                    {file: './taunts/kf/Insult_Specimens_2.mp3',                        text: 'Wankers!'},
                    {file: './taunts/kf/Insult_Specimens_3.mp3',                        text: 'Oooh! Thats just nasty!'},
                    {file: './taunts/kf/Insult_Specimens_4.mp3',                        text: 'You\'re pathetic, like a bunch of bloody Millwall fans!'},
                    {file: './taunts/kf/Insult_Specimens_5.mp3',                        text: 'Reminds me of a bunch of pikies!'},
                    {file: './taunts/kf/Insult_Specimens_6.mp3',                        text: 'Come on! Ya\' want some, ya\' poncies?!'},
                    {file: './taunts/kf/Insult_Specimens_7.mp3',                        text: 'You\'re all fur-coat, no knickers, bitches!'}], ["kf", "insult", "specimen"]);
registerTaunt(316, [{file: './taunts/kf/Insult_players_1.mp3',                          text: 'You muppet!'},
                    {file: './taunts/kf/Insult_players_2.mp3',                          text: 'You gormless tosser!'},
                    {file: './taunts/kf/Insult_players_3.mp3',                          text: 'Smeghead!'},
                    {file: './taunts/kf/Insult_players_4.mp3',                          text: 'Need to borrow my specs, mate?'},
                    {file: './taunts/kf/Insult_players_5.mp3',                          text: 'Wayne Rooney\'s smarter than you!'},
                    {file: './taunts/kf/Insult_players_6.mp3',                          text: 'Oh, get on with it! Plod!'},
                    {file: './taunts/kf/Insult_players_7.mp3',                          text: 'Who do you think you are? Bleedin\' action man?'}], ["kf", "insult", "player"]);

// Dungeons of Dreadmore taunts - 5xx
registerTaunt(500, [{file: './taunts/dredmor/caketown.mp3',                             text: 'This is caketown.'}], ["dredmor", "cake", "town", "caketown"]);
registerTaunt(501, [{file: './taunts/dredmor/combo.mp3',                                text: 'Cccccombo breaker.'},
                    {file: './taunts/dredmor/combo1.mp3',                               text: 'Ccccccombo!'}], ["dredmor", "combo", "breaker"]);
registerTaunt(502, [{file: './taunts/dredmor/crit1.mp3',                                text: 'Cccccritical hit!'}], ["dredmor", "crit", "critical", "hit"]);
registerTaunt(503, [{file: './taunts/dredmor/full_inventory_1.mp3',                     text: 'Your inventory is full.'},
                    {file: './taunts/dredmor/full_inventory_2.mp3',                     text: 'YOUR INVENTORY IS FULL.'}], ["dredmor", "full", "inventory"]);
registerTaunt(504, [{file: './taunts/dredmor/heroic_vandalism.mp3',                     text: 'Heroic vandalism!'},
                    {file: './taunts/dredmor/vox_heroic_vandalism01.mp3',               text: 'Heroic vandalism!'},
                    {file: './taunts/dredmor/vox_heroic_vandalism02.mp3',               text: 'Heroic vandalism!'},
                    {file: './taunts/dredmor/vox_heroic_vandalism03.mp3',               text: 'Heroic vandalism!'}], ["dredmor", "heroic", "vandalism"]);
registerTaunt(505, [{file: './taunts/dredmor/item_is_purchased_or_sold.mp3',            text: '*Ka-Ching*'}], ["dredmor", "purchase", "moneysound", "kaching"]);
registerTaunt(506, [{file: './taunts/dredmor/momentum.mp3',                             text: 'Momentum.'},
                    {file: './taunts/dredmor/momentum01more.mp3',                       text: 'More momentum.'},
                    {file: './taunts/dredmor/momentum02mega.mp3',                       text: 'Mega momentum.'},
                    {file: './taunts/dredmor/momentum03masterful.mp3',                  text: 'Masterful momentum.'},
                    {file: './taunts/dredmor/momentum04marvelous.mp3',                  text: 'Marvelous momentum.'},
                    {file: './taunts/dredmor/momentum05magnificent.mp3',                text: 'Magnificent momentum.'},
                    {file: './taunts/dredmor/momentum06multitudinous.mp3',              text: 'Multitudinous momentum.'},
                    {file: './taunts/dredmor/momentum07morbid.mp3',                     text: 'Morbid momentum.'},
                    {file: './taunts/dredmor/momentum08machiavellian.mp3',              text: 'Machiavellian momentum.'}], ["dredmor", "momentum"]);
registerTaunt(507, [{file: './taunts/dredmor/nonchalant_whistling.mp3',                 text: '*Nonchalant whistling*'}], ["dredmor", "whistle", "whistling"]);
registerTaunt(508, [{file: './taunts/dredmor/paranormal0.mp3',                          text: '*Paranormal sound*'},
                    {file: './taunts/dredmor/paranormal1.mp3',                          text: '*Paranormal sound*'}], ["dredmor", "paranormal", "spooky"]);
registerTaunt(509, [{file: './taunts/dredmor/player_levels_up.mp3',                     text: '*Level up*'}], ["dredmor", "levelup", "level"]);
registerTaunt(510, [{file: './taunts/dredmor/player_screams.mp3',                       text: 'AAAAAAAAAAHHHH!'},
                    {file: './taunts/dredmor/players_head_explodes_via_poison.mp3',     text: 'AAAAAAAAAAHHHH! *Head pop*'}], ["dredmor", "scream", "aaaahhhh"]);
registerTaunt(511, [{file: './taunts/dredmor/vox_about_to_die01a.mp3',                  text: 'You\'re about to die.'},
                    {file: './taunts/dredmor/vox_about_to_die02a.mp3',                  text: 'You\'re about to die.'},
                    {file: './taunts/dredmor/vox_about_to_die02b.mp3',                  text: 'You\'re about to die.'}], ["dredmor", "die"]);
registerTaunt(512, [{file: './taunts/dredmor/vox_brain_too_dumb01a.mp3',                text: 'No. Your brain is too dumb.'},
                    {file: './taunts/dredmor/vox_brain_too_dumb02a.mp3',                text: 'No. Your brain is too dumb.'},
                    {file: './taunts/dredmor/vox_brain_too_dumb02b.mp3',                text: 'No. Your brain is too dumb.'}], ["dredmor", "dumb", "brain"]);
registerTaunt(513, [{file: './taunts/dredmor/vox_cast_req_booze01a.mp3',                text: 'Casting spells requires booze.'},
                    {file: './taunts/dredmor/vox_cast_req_booze02a.mp3',                text: 'Casting spells requires booze!'}], ["dredmor", "spells", "booze"]);
registerTaunt(514, [{file: './taunts/dredmor/vox_drink_more_booze01a.mp3',              text: 'Drink more booze.'},
                    {file: './taunts/dredmor/vox_drink_more_booze02a.mp3',              text: 'Drink more booze!'}], ["dredmor", "drink", "booze"]);
registerTaunt(515, [{file: './taunts/dredmor/vox_economy_doesnt_run02a.mp3',            text: 'This economy doesn\'t run on hopes and dreams.'},
                    {file: './taunts/dredmor/vox_financial_solvency02a.mp3',            text: 'You better work on your financial solvency.'}], ["dredmor", "economy", "financial"]);
registerTaunt(516, [{file: './taunts/dredmor/vox_health_critical01a.mp3',               text: 'Your health is critial.'},
                    {file: './taunts/dredmor/vox_health_critical01b.mp3',               text: 'Your health is critial.'},
                    {file: './taunts/dredmor/vox_health_critical02a.mp3',               text: 'Your health is critial!'}], ["dredmor", "health", "critical"]);
registerTaunt(517, [{file: './taunts/dredmor/vox_health_low01a.mp3',                    text: 'Your health is low.'},
                    {file: './taunts/dredmor/vox_health_low02a.mp3',                    text: 'Your health is low!'}], ["dredmor", "health", "low"]);
registerTaunt(518, [{file: './taunts/dredmor/vox_need_food_badly01a.mp3',               text: 'You need food, badly!'},
                    {file: './taunts/dredmor/vox_need_food_badly02a.mp3',               text: 'You need food, badly!'},
                    {file: './taunts/dredmor/vox_need_food_badly02b.mp3',               text: 'You need food, badly!'}], ["dredmor", "need", "food"]);
registerTaunt(519, [{file: './taunts/dredmor/vox_please_dont_go03.mp3',                 text: 'Please don\'t go.'}], ["dredmor", "dont_go"]);
registerTaunt(520, [{file: './taunts/dredmor/vox_too_sober01a.mp3',                     text: 'You are too sober.'},
                    {file: './taunts/dredmor/vox_too_sober02a.mp3',                     text: 'You are too sober!'}], ["dredmor", "sober"]);

// Duty Calls taunts - 6xx
registerTaunt(600, [{file: './taunts/duty_calls/snd_bloody_screen.mp3',                 text: 'Bbbbloddy screen. So real.'}], ["dutycalls", "bloody", "screen"]);
registerTaunt(601, [{file: './taunts/duty_calls/snd_rank_up_01.mp3',                    text: 'Rank up! Master sergeant shooter person!'}], ["dutycalls", "rankup", "rankup1"]);
registerTaunt(602, [{file: './taunts/duty_calls/snd_rank_up_02.mp3',                    text: 'Rank up! Master sergeant shooter sergeant person!'}], ["dutycalls", "rankup", "rankup2"]);
registerTaunt(603, [{file: './taunts/duty_calls/snd_rank_up_03.mp3',                    text: 'Rank up! Master sergeant shooter sergeant important person of sergeants extreme!'}], ["dutycalls", "rankup", "rankup3"]);
registerTaunt(604, [{file: './taunts/duty_calls/snd_rank_up_04.mp3',                    text: 'Rank up! Sergeant sergeant master sergeant shooter person!'}], ["dutycalls", "rankup", "rankup4"]);
registerTaunt(605, [{file: './taunts/duty_calls/snd_rank_up_05.mp3',                    text: 'Rank up! Sergeant of the master sergeant most important person of extreme sergeants to the max!'}], ["dutycalls", "rankup", "rankup5"]);
registerTaunt(606, [{file: './taunts/duty_calls/snd_slomo_start.mp3',                   text: '*Slow*'}], ["dutycalls", "slow", "slowdown"]);
registerTaunt(607, [{file: './taunts/duty_calls/snd_slomo_end.mp3',                     text: '*Fast*'}], ["dutycalls", "fast", "speedup"]);
registerTaunt(608, [{file: './taunts/duty_calls/vox_crateenemy2_hi.mp3',                text: 'I am an enemy two.'},
                    {file: './taunts/duty_calls/vox_crateenemy3_hi.mp3',                text: 'I am also an enemy.'},
                    {file: './taunts/duty_calls/vox_woodenemy1_hi.mp3',                 text: 'I\'m yet another enemy.'},
                    {file: './taunts/duty_calls/vox_woodenemy2_hi.mp3',                 text: 'I am also an enemy.'}], ["dutycalls", "enemy_hi"]);
registerTaunt(609, [{file: './taunts/duty_calls/vox_crateenemy2_ow.mp3',                text: 'Ow.'},
                    {file: './taunts/duty_calls/vox_crateenemy3_ow.mp3',                text: 'Oww.'},
                    {file: './taunts/duty_calls/vox_woodenemy1_ow.mp3',                 text: 'Ow.'},
                    {file: './taunts/duty_calls/vox_woodenemy2_ow.mp3',                 text: 'Ow.'}], ["dutycalls", "enemy_ow", "ow"]);
registerTaunt(610, [{file: './taunts/duty_calls/vox_player_boring_01.mp3',              text: 'Boring.'},
                    {file: './taunts/duty_calls/vox_player_boring_02.mp3',              text: 'Boring.'},
                    {file: './taunts/duty_calls/vox_player_boring_03.mp3',              text: 'Boring.'},
                    {file: './taunts/duty_calls/vox_player_boring_04.mp3',              text: 'Boring.'},
                    {file: './taunts/duty_calls/vox_player_boring_05.mp3',              text: 'Boring.'},
                    {file: './taunts/duty_calls/vox_player_boring_06.mp3',              text: 'Boring.'}], ["dutycalls", "boring"]);

// iDubbbz taunts - 7xx 
registerTaunt(700, [{file: './taunts/idubbbz/I_want_to_die.mp3',                        text: 'I want to die.'}], ["idubbbz", "want", "die"]);
registerTaunt(701, [{file: './taunts/idubbbz/pretty_good.mp3',                          text: 'Hey, that\'s pretty good.'}], ["idubbbz", "pretty", "good"]);

// Pit People taunts - 8xx
registerTaunt(800, [{file: './taunts/pp/sound_2kill.mp3',                               text: 'Double kill. Yessss.'}], ["pit_people", "pp", "narrator", "double", "kill", "2kills"]);
registerTaunt(801, [{file: './taunts/pp/sound_3kill.mp3',                               text: 'Double kill. Yessssss!'}], ["pit_people", "pp", "narrator", "triple", "kill", "3kills"]);
registerTaunt(802, [{file: './taunts/pp/sound_applause01.mp3',                          text: 'Applause.'},
                    {file: './taunts/pp/sound_applause02.mp3',                          text: 'Applause.'},
                    {file: './taunts/pp/sound_applause03.mp3',                          text: 'Applause.'},
                    {file: './taunts/pp/sound_applause04.mp3',                          text: 'Applause.'},
                    {file: './taunts/pp/sound_applause05.mp3',                          text: 'Applause.'},
                    {file: './taunts/pp/sound_applause06.mp3',                          text: 'Applause.'}], ["pit_people", "pp", "applause"]);
registerTaunt(803, [{file: './taunts/pp/sound_arena_hornintro.mp3',                     text: '*Horn intro*'}], ["pit_people", "pp", "horn", "intro"]);
registerTaunt(804, [{file: './taunts/pp/sound_horatio_speak01.mp3',                     text: '*Horatio speaking*'},
                    {file: './taunts/pp/sound_horatio_speak02.mp3',                     text: '*Horatio speaking*'},
                    {file: './taunts/pp/sound_horatio_speak03.mp3',                     text: '*Horatio speaking*'},
                    {file: './taunts/pp/sound_horatio_speak04.mp3',                     text: '*Horatio speaking*'},
                    {file: './taunts/pp/sound_horatio_speak05.mp3',                     text: '*Horatio speaking*'},
                    {file: './taunts/pp/sound_horatio_speak06.mp3',                     text: '*Horatio speaking*'},
                    {file: './taunts/pp/sound_horatio_speak07.mp3',                     text: '*Horatio speaking*'},
                    {file: './taunts/pp/sound_horatio_speak08.mp3',                     text: '*Horatio speaking*'},
                    {file: './taunts/pp/sound_horatio_speak09.mp3',                     text: '*Horatio speaking*'},
                    {file: './taunts/pp/sound_horatio_speak10.mp3',                     text: '*Horatio speaking*'},
                    {file: './taunts/pp/sound_horatio_speak11.mp3',                     text: '*Horatio speaking*'},
                    {file: './taunts/pp/sound_horatio_speak12.mp3',                     text: '*Horatio speaking*'},
                    {file: './taunts/pp/sound_horatio_speak13.mp3',                     text: '*Horatio speaking*'},
                    {file: './taunts/pp/sound_horatio_speak14.mp3',                     text: '*Horatio speaking*'},
                    {file: './taunts/pp/sound_horatio_speak15.mp3',                     text: '*Horatio speaking*'},
                    {file: './taunts/pp/sound_horatio_speak16.mp3',                     text: '*Horatio speaking*'},
                    {file: './taunts/pp/sound_horatio_speak17.mp3',                     text: '*Horatio speaking*'},
                    {file: './taunts/pp/sound_horatio_speak18.mp3',                     text: '*Horatio speaking*'},
                    {file: './taunts/pp/sound_horatio_speak19.mp3',                     text: '*Horatio speaking*'},
                    {file: './taunts/pp/sound_horatio_speak20.mp3',                     text: '*Horatio speaking*'},
                    {file: './taunts/pp/sound_horatio_speak21.mp3',                     text: '*Horatio speaking*'},
                    {file: './taunts/pp/sound_horatio_speak22.mp3',                     text: '*Horatio speaking*'},
                    {file: './taunts/pp/sound_horatio_speak23.mp3',                     text: '*Horatio speaking*'},
                    {file: './taunts/pp/sound_horatio_speak24.mp3',                     text: '*Horatio speaking*'},
                    {file: './taunts/pp/sound_horatio_speak25.mp3',                     text: '*Horatio speaking*'},
                    {file: './taunts/pp/sound_horatio_speak26.mp3',                     text: '*Horatio speaking*'},
                    {file: './taunts/pp/sound_horatio_speak27.mp3',                     text: '*Horatio speaking*'},
                    {file: './taunts/pp/sound_horatio_speak28.mp3',                     text: '*Horatio speaking*'},
                    {file: './taunts/pp/sound_horatio_speak29.mp3',                     text: '*Horatio speaking*'},
                    {file: './taunts/pp/sound_horatio_speak30.mp3',                     text: '*Horatio speaking*'},
                    {file: './taunts/pp/sound_horatio_speak31.mp3',                     text: '*Horatio speaking*'},
                    {file: './taunts/pp/sound_horatio_speak32.mp3',                     text: '*Horatio speaking*'},
                    {file: './taunts/pp/sound_horatio_speak33.mp3',                     text: '*Horatio speaking*'},
                    {file: './taunts/pp/sound_horatio_speak34.mp3',                     text: '*Horatio speaking*'},
                    {file: './taunts/pp/sound_horatio_speak35.mp3',                     text: '*Horatio speaking*'},
                    {file: './taunts/pp/sound_horatio_speak36.mp3',                     text: '*Horatio speaking*'},
                    {file: './taunts/pp/sound_horatio_speak37.mp3',                     text: '*Horatio speaking*'},
                    {file: './taunts/pp/sound_horatio_speak38.mp3',                     text: '*Horatio speaking*'},
                    {file: './taunts/pp/sound_horatio_speak39.mp3',                     text: '*Horatio speaking*'},
                    {file: './taunts/pp/sound_horatio_speak40.mp3',                     text: '*Horatio speaking*'},
                    {file: './taunts/pp/sound_horatio_speak41.mp3',                     text: '*Horatio speaking*'},
                    {file: './taunts/pp/sound_horatio_speak42.mp3',                     text: '*Horatio speaking*'},
                    {file: './taunts/pp/sound_horatio_speak43.mp3',                     text: '*Horatio speaking*'},
                    {file: './taunts/pp/sound_horatio_speak44.mp3',                     text: '*Horatio speaking*'},
                    {file: './taunts/pp/sound_horatio_speak45.mp3',                     text: '*Horatio speaking*'},
                    {file: './taunts/pp/sound_horatio_speak46.mp3',                     text: '*Horatio speaking*'},
                    {file: './taunts/pp/sound_horatio_speak47.mp3',                     text: '*Horatio speaking*'},
                    {file: './taunts/pp/sound_horatio_speak48.mp3',                     text: '*Horatio speaking*'},
                    {file: './taunts/pp/sound_horatio_speak49.mp3',                     text: '*Horatio speaking*'},
                    {file: './taunts/pp/sound_horatio_speak50.mp3',                     text: '*Horatio speaking*'},
                    {file: './taunts/pp/sound_horatio_speak51.mp3',                     text: '*Horatio speaking*'},
                    {file: './taunts/pp/sound_horatio_speak52.mp3',                     text: '*Horatio speaking*'},
                    {file: './taunts/pp/sound_horatio_speak53.mp3',                     text: '*Horatio speaking*'},
                    {file: './taunts/pp/sound_horatio_speak54.mp3',                     text: '*Horatio speaking*'},
                    {file: './taunts/pp/sound_horatio_speak55.mp3',                     text: '*Horatio speaking*'},
                    {file: './taunts/pp/sound_horatio_speak56.mp3',                     text: '*Horatio speaking*'},
                    {file: './taunts/pp/sound_horatio_speak57.mp3',                     text: '*Horatio speaking*'},
                    {file: './taunts/pp/sound_horatio_speak58.mp3',                     text: '*Horatio speaking*'},
                    {file: './taunts/pp/sound_horatio_speak59.mp3',                     text: '*Horatio speaking*'},
                    {file: './taunts/pp/sound_horatio_speak60.mp3',                     text: '*Horatio speaking*'}], ["pit_people", "pp", "horatio", "speak"]);
registerTaunt(805, [{file: './taunts/pp/sound_man_speak01.mp3',                         text: '*Man speaking*'},
                    {file: './taunts/pp/sound_man_speak02.mp3',                         text: '*Man speaking*'},
                    {file: './taunts/pp/sound_man_speak03.mp3',                         text: '*Man speaking*'},
                    {file: './taunts/pp/sound_man_speak04.mp3',                         text: '*Man speaking*'},
                    {file: './taunts/pp/sound_man_speak05.mp3',                         text: '*Man speaking*'},
                    {file: './taunts/pp/sound_man_speak06.mp3',                         text: '*Man speaking*'},
                    {file: './taunts/pp/sound_man_speak07.mp3',                         text: '*Man speaking*'},
                    {file: './taunts/pp/sound_man_speak08.mp3',                         text: '*Man speaking*'},
                    {file: './taunts/pp/sound_man_speak09.mp3',                         text: '*Man speaking*'},
                    {file: './taunts/pp/sound_man_speak10.mp3',                         text: '*Man speaking*'},
                    {file: './taunts/pp/sound_man_speak11.mp3',                         text: '*Man speaking*'},
                    {file: './taunts/pp/sound_man_speak12.mp3',                         text: '*Man speaking*'},
                    {file: './taunts/pp/sound_man_speak13.mp3',                         text: '*Man speaking*'},
                    {file: './taunts/pp/sound_man_speak14.mp3',                         text: '*Man speaking*'},
                    {file: './taunts/pp/sound_man_speak15.mp3',                         text: '*Man speaking*'},
                    {file: './taunts/pp/sound_man_speak16.mp3',                         text: '*Man speaking*'},
                    {file: './taunts/pp/sound_man_speak17.mp3',                         text: '*Man speaking*'},
                    {file: './taunts/pp/sound_man_speak18.mp3',                         text: '*Man speaking*'},
                    {file: './taunts/pp/sound_man_speak19.mp3',                         text: '*Man speaking*'},
                    {file: './taunts/pp/sound_man_speak20.mp3',                         text: '*Man speaking*'},
                    {file: './taunts/pp/sound_man_speak21.mp3',                         text: '*Man speaking*'},
                    {file: './taunts/pp/sound_man_speak22.mp3',                         text: '*Man speaking*'},
                    {file: './taunts/pp/sound_man_speak23.mp3',                         text: '*Man speaking*'},
                    {file: './taunts/pp/sound_man_speak24.mp3',                         text: '*Man speaking*'},
                    {file: './taunts/pp/sound_man_speak25.mp3',                         text: '*Man speaking*'},
                    {file: './taunts/pp/sound_man_speak26.mp3',                         text: '*Man speaking*'},
                    {file: './taunts/pp/sound_man_speak27.mp3',                         text: '*Man speaking*'},
                    {file: './taunts/pp/sound_man_speak28.mp3',                         text: '*Man speaking*'},
                    {file: './taunts/pp/sound_man_speak29.mp3',                         text: '*Man speaking*'},
                    {file: './taunts/pp/sound_man_speak30.mp3',                         text: '*Man speaking*'},
                    {file: './taunts/pp/sound_man_speak31.mp3',                         text: '*Man speaking*'},
                    {file: './taunts/pp/sound_man_speak32.mp3',                         text: '*Man speaking*'},
                    {file: './taunts/pp/sound_man_speak33.mp3',                         text: '*Man speaking*'},
                    {file: './taunts/pp/sound_man_speak34.mp3',                         text: '*Man speaking*'},
                    {file: './taunts/pp/sound_man_speak35.mp3',                         text: '*Man speaking*'},
                    {file: './taunts/pp/sound_man_speak36.mp3',                         text: '*Man speaking*'},
                    {file: './taunts/pp/sound_man_speak37.mp3',                         text: '*Man speaking*'},
                    {file: './taunts/pp/sound_man_speak38.mp3',                         text: '*Man speaking*'},
                    {file: './taunts/pp/sound_man_speak39.mp3',                         text: '*Man speaking*'},
                    {file: './taunts/pp/sound_man_speak40.mp3',                         text: '*Man speaking*'},
                    {file: './taunts/pp/sound_man_speak41.mp3',                         text: '*Man speaking*'},
                    {file: './taunts/pp/sound_man_speak42.mp3',                         text: '*Man speaking*'},
                    {file: './taunts/pp/sound_man_speak43.mp3',                         text: '*Man speaking*'},
                    {file: './taunts/pp/sound_man_speak44.mp3',                         text: '*Man speaking*'},
                    {file: './taunts/pp/sound_man_speak45.mp3',                         text: '*Man speaking*'},
                    {file: './taunts/pp/sound_man_speak46.mp3',                         text: '*Man speaking*'},
                    {file: './taunts/pp/sound_man_speak47.mp3',                         text: '*Man speaking*'},
                    {file: './taunts/pp/sound_man_speak48.mp3',                         text: '*Man speaking*'},
                    {file: './taunts/pp/sound_man_speak49.mp3',                         text: '*Man speaking*'},
                    {file: './taunts/pp/sound_man_speak50.mp3',                         text: '*Man speaking*'},
                    {file: './taunts/pp/sound_man_speak51.mp3',                         text: '*Man speaking*'},
                    {file: './taunts/pp/sound_man_speak52.mp3',                         text: '*Man speaking*'},
                    {file: './taunts/pp/sound_man_speak53.mp3',                         text: '*Man speaking*'},
                    {file: './taunts/pp/sound_man_speak54.mp3',                         text: '*Man speaking*'},
                    {file: './taunts/pp/sound_man_speak55.mp3',                         text: '*Man speaking*'},
                    {file: './taunts/pp/sound_man_speak56.mp3',                         text: '*Man speaking*'},
                    {file: './taunts/pp/sound_man_speak57.mp3',                         text: '*Man speaking*'},
                    {file: './taunts/pp/sound_man_speak58.mp3',                         text: '*Man speaking*'},
                    {file: './taunts/pp/sound_man_speak59.mp3',                         text: '*Man speaking*'}], ["pit_people", "pp", "man"]);
registerTaunt(806, [{file: './taunts/pp/sound_narrator_chaoticjobz.mp3',                text: 'Chaotic job gentlemen. Go wreck havoc elsewhere. Oh... sorry Pip. Are you upset? ;)'}], ["pit_people", "pp", "narrator", "chaotic", "job"]);
registerTaunt(807, [{file: './taunts/pp/sound_narrator_hatefester.mp3',                 text: 'Yes! Let the hatred fester!'}], ["pit_people", "pp", "narrator", "hatered", "fester"]);
registerTaunt(808, [{file: './taunts/pp/sound_narrator_movecity01.mp3',                 text: 'I think you\'ve gotten a little too, comfortable here.'},
                    {file: './taunts/pp/sound_narrator_movecity02.mp3',                 text: 'Let\' go elsewhere mkay? Upsie daisy.'},
                    {file: './taunts/pp/sound_narrator_movecity03.mp3',                 text: 'Are you familiar with fun shuave? Why would you be. Shut up and let me work!'},
                    {file: './taunts/pp/sound_narrator_movecity04.mp3',                 text: 'Let\'s see... Then I move my pawns over here and... check.'},
                    {file: './taunts/pp/sound_narrator_movecity05.mp3',                 text: 'How do you feel about relocating against your will? Hmm?'},
                    {file: './taunts/pp/sound_narrator_movecity06.mp3',                 text: 'I think I found a way more dangerous area. Let\'t go check it out, shall we?'},
                    {file: './taunts/pp/sound_narrator_movecity07.mp3',                 text: 'You guys don\'t seem very miserable here. Let\'s see if we can change that. Yes?'},
                    {file: './taunts/pp/sound_narrator_movecity08.mp3',                 text: 'I think it\'s time to gather some new bearings my doey little goons.'},
                    {file: './taunts/pp/sound_narrator_movecity09.mp3',                 text: 'Aww, you were just getting comfortable with your surroundings hmm?'},
                    {file: './taunts/pp/sound_narrator_movecity10.mp3',                 text: 'Oh, I\'m sorry. Were you content with your surroundings?'},
                    {file: './taunts/pp/sound_narrator_movecity11.mp3',                 text: 'This is old, let\'t try something new shall we? I get bored easy.'},
                    {file: './taunts/pp/sound_narrator_movecity12.mp3',                 text: 'We will be flying at an altidue of who cares, destination unknown.'},
                    {file: './taunts/pp/sound_narrator_movecity13.mp3',                 text: 'Doesn\'t this area bore you? No? WELL IT BORES ME!'},
                    {file: './taunts/pp/sound_narrator_movecity14.mp3',                 text: 'And he plucked the city up like a dying rose to replant it upon a more fertile grounds.'},
                    {file: './taunts/pp/sound_narrator_movecity15.mp3',                 text: 'I pick you up and I put you over here. If you don\'t like it, well, tough tatter tots.'},
                    {file: './taunts/pp/sound_narrator_movecity16.mp3',                 text: 'I\'m going to put you somewhere now. Somewhere you might not like.'},
                    {file: './taunts/pp/sound_narrator_movecity17.mp3',                 text: 'Time to go. Why? Because I can. That\'s all you need to know.'},
                    {file: './taunts/pp/sound_narrator_movecity18.mp3',                 text: 'I think this would look better over there. What do you think? Who cares. Not me. Ever.'},
                    {file: './taunts/pp/sound_narrator_movecity19.mp3',                 text: 'And the hand of the handsome god reaches down to move an entire city.'},
                    {file: './taunts/pp/sound_narrator_movecity20.mp3',                 text: 'Hold onto your butts and your babies. This will be a bumpy ride to a new frontier.'},
                    {file: './taunts/pp/sound_narrator_movecity21.mp3',                 text: 'I think it\'s time to relocate to a less boring area.'},
                    {file: './taunts/pp/sound_narrator_movecity22.mp3',                 text: 'Let\'s move this over... here. That should be nice and confusing for you.'},
                    {file: './taunts/pp/sound_narrator_movecity23.mp3',                 text: 'I\'m going to move the entire city to a new place now. And there\'s nothing you can do about it. How hopeless. How. Hopeless.'},
                    {file: './taunts/pp/sound_narrator_movecity24.mp3',                 text: 'It\'s time to dispose of this roach trap once and for all. Kidding.'},
                    {file: './taunts/pp/sound_narrator_movecity25.mp3',                 text: 'Oh no, he\'s going to throw us into the ocean and watch us all drown. '}], ["pit_people", "pp", "narrator", "movecity"]);
registerTaunt(809, [{file: './taunts/pp/sound_narrator_story01b_butterfingers.mp3',     text: 'OUPS! BUTTERFINGERS!'}], ["pit_people", "pp", "narrator", "butterfinger", "butterfingers"]);
registerTaunt(810, [{file: './taunts/pp/sound_narrator_story01b_HoratioDies.mp3',       text: 'I SAID HORATIO DIES!!'},
                    {file: './taunts/pp/sound_narrator_story01b_HoratioDies2.mp3',      text: 'I said Horatio dies.'}], ["pit_people", "pp", "narrator", "horatio", "dies"]);
registerTaunt(811, [{file: './taunts/pp/sound_narrator_story01b_Naughty.mp3',           text: 'Naughty boys who don\'t listen get punished.'}], ["pit_people", "pp", "narrator", "naughty"]);
registerTaunt(812, [{file: './taunts/pp/sound_narrator_sd-die01.mp3',                   text: 'Good. Bye!'},
                    {file: './taunts/pp/sound_narrator_sd-die02.mp3',                   text: 'Bye bye!'},
                    {file: './taunts/pp/sound_narrator_sd-die03.mp3',                   text: 'Bye bye.'},
                    {file: './taunts/pp/sound_narrator_sd-die04.mp3',                   text: 'Sayonara.'},
                    {file: './taunts/pp/sound_narrator_sd-die05.mp3',                   text: 'Time to die.'},
                    {file: './taunts/pp/sound_narrator_sd-die06.mp3',                   text: 'Oh are you sad?'},
                    {file: './taunts/pp/sound_narrator_sd-die07.mp3',                   text: 'Is baby sad?'},
                    {file: './taunts/pp/sound_narrator_sd-die08.mp3',                   text: 'Is baby gonna cry?'},
                    {file: './taunts/pp/sound_narrator_sd-die09.mp3',                   text: 'And bye!'},
                    {file: './taunts/pp/sound_narrator_sd-die10.mp3',                   text: 'Ding! Bye bye!'},
                    {file: './taunts/pp/sound_narrator_sd-die11.mp3',                   text: 'Weak!'},
                    {file: './taunts/pp/sound_narrator_sd-die12.mp3',                   text: '*something something Michael please help transcribe this tahnk ye*'},
                    {file: './taunts/pp/sound_narrator_sd-die13.mp3',                   text: 'Wonderful!'},
                    {file: './taunts/pp/sound_narrator_sd-die14.mp3',                   text: 'Absolutely wonderful!'},
                    {file: './taunts/pp/sound_narrator_sd-die15.mp3',                   text: 'Well, that\'t dead now.'},
                    {file: './taunts/pp/sound_narrator_sd-die16.mp3',                   text: 'Oh dead good.'},
                    {file: './taunts/pp/sound_narrator_sd-die17.mp3',                   text: 'Go bye bye now.'},
                    {file: './taunts/pp/sound_narrator_sd-die18.mp3',                   text: 'Bye!'},
                    {file: './taunts/pp/sound_narrator_sd-die19.mp3',                   text: 'Bye bye!'},
                    {file: './taunts/pp/sound_narrator_sd-die20.mp3',                   text: 'Boom!'},
                    {file: './taunts/pp/sound_narrator_sd-die21.mp3',                   text: 'Splat!'},
                    {file: './taunts/pp/sound_narrator_sd-die22.mp3',                   text: 'Hmmm.'},
                    {file: './taunts/pp/sound_narrator_sd-die23.mp3',                   text: 'It\'s like a geyser. It\'t disgusting.'},
                    {file: './taunts/pp/sound_narrator_sd-die24.mp3',                   text: 'That\'s fair.'},
                    {file: './taunts/pp/sound_narrator_sd-die25.mp3',                   text: 'Oh that\'s fair... I guess...'},
                    {file: './taunts/pp/sound_narrator_sd-die26.mp3',                   text: 'Yes. Keep doing that!'},
                    {file: './taunts/pp/sound_narrator_sd-die27.mp3',                   text: 'Keep it up!'},
                    {file: './taunts/pp/sound_narrator_sd-die28.mp3',                   text: 'Huh...'},
                    {file: './taunts/pp/sound_narrator_sd-die29.mp3',                   text: 'Interesting...'},
                    {file: './taunts/pp/sound_narrator_sd-die30.mp3',                   text: 'More.. MORE!'},
                    {file: './taunts/pp/sound_narrator_sd-die31.mp3',                   text: 'More!'},
                    {file: './taunts/pp/sound_narrator_sd-die32.mp3',                   text: 'That was just upsetting and gross.'},
                    {file: './taunts/pp/sound_narrator_sd-die33.mp3',                   text: 'He\'s out.'},
                    {file: './taunts/pp/sound_narrator_sd-die34.mp3',                   text: 'Sayonara.'},
                    {file: './taunts/pp/sound_narrator_sd-die35.mp3',                   text: 'Aaahhh!'},
                    {file: './taunts/pp/sound_narrator_sd-die36.mp3',                   text: 'Well then...'},
                    {file: './taunts/pp/sound_narrator_sd-die37.mp3',                   text: 'Ah who cares?'},
                    {file: './taunts/pp/sound_narrator_sd-die38.mp3',                   text: 'Oh. Boo hoo!'},
                    {file: './taunts/pp/sound_narrator_sd-die39.mp3',                   text: 'Oh no!'},
                    {file: './taunts/pp/sound_narrator_sd-die40.mp3',                   text: 'Good stuff!'},
                    {file: './taunts/pp/sound_narrator_sd-die41.mp3',                   text: 'Bang! Splat!'},
                    {file: './taunts/pp/sound_narrator_sd-die42.mp3',                   text: 'Excellent!'},
                    {file: './taunts/pp/sound_narrator_sd-die43.mp3',                   text: 'What a surprising turn of events. Not really.'},
                    {file: './taunts/pp/sound_narrator_sd-die44.mp3',                   text: 'HHHMMM'},
                    {file: './taunts/pp/sound_narrator_sd-die45.mp3',                   text: 'That was hilarious.'},
                    {file: './taunts/pp/sound_narrator_sd-die46.mp3',                   text: 'Goodness gracious.'},
                    {file: './taunts/pp/sound_narrator_sd-die47.mp3',                   text: 'Didn\'t see that one coming.'},
                    {file: './taunts/pp/sound_narrator_sd-die48.mp3',                   text: 'Uuuhhhhaahhh!'},
                    {file: './taunts/pp/sound_narrator_sd-die49.mp3',                   text: 'OOOoohhhh!'},
                    {file: './taunts/pp/sound_narrator_sd-die50.mp3',                   text: 'That was kinda cheap.'},
                    {file: './taunts/pp/sound_narrator_sd-die51.mp3',                   text: 'Wait. What happened? I wasn\'t paying attention.'},
                    {file: './taunts/pp/sound_narrator_sd-die52.mp3',                   text: 'Surprise!'},
                    {file: './taunts/pp/sound_narrator_sd-die53.mp3',                   text: 'Surprise surprise!'},
                    {file: './taunts/pp/sound_narrator_sd-die54.mp3',                   text: 'Go on...'},
                    {file: './taunts/pp/sound_narrator_sd-die55.mp3',                   text: 'Umm I can taste it.'},
                    {file: './taunts/pp/sound_narrator_sd-die56.mp3',                   text: 'I can taste it. I CAN TASTE IT!'},
                    {file: './taunts/pp/sound_narrator_sd-die57.mp3',                   text: 'I didn\'t see that one coming.'},
                    {file: './taunts/pp/sound_narrator_sd-die58.mp3',                   text: 'Oooh!'},
                    {file: './taunts/pp/sound_narrator_sd-die59.mp3',                   text: 'Oh!'},
                    {file: './taunts/pp/sound_narrator_sd-die60.mp3',                   text: 'Ooh!'},
                    {file: './taunts/pp/sound_narrator_sd-die61.mp3',                   text: 'Well...'},
                    {file: './taunts/pp/sound_narrator_sd-die62.mp3',                   text: 'Well...'},
                    {file: './taunts/pp/sound_narrator_sd-die63.mp3',                   text: 'Oh ooohh!'},
                    {file: './taunts/pp/sound_narrator_sd-die64.mp3',                   text: 'Yes!'},
                    {file: './taunts/pp/sound_narrator_sd-die65.mp3',                   text: 'Yess.. YESS!'},
                    {file: './taunts/pp/sound_narrator_sd-die66.mp3',                   text: 'YES!'},
                    {file: './taunts/pp/sound_narrator_sd-die67.mp3',                   text: 'It\'s about time.'},
                    {file: './taunts/pp/sound_narrator_sd-die68.mp3',                   text: 'Good!'},
                    {file: './taunts/pp/sound_narrator_sd-die69.mp3',                   text: 'Good.'},
                    {file: './taunts/pp/sound_narrator_sd-die70.mp3',                   text: 'Good. GOOD.'},
                    {file: './taunts/pp/sound_narrator_sd-die71.mp3',                   text: 'Dead!'},
                    {file: './taunts/pp/sound_narrator_sd-die72.mp3',                   text: 'Dead.'},
                    {file: './taunts/pp/sound_narrator_sd-die73.mp3',                   text: 'You\'re dead.'},
                    {file: './taunts/pp/sound_narrator_sd-die74.mp3',                   text: 'Good. Dead. I don\'t care.'},
                    {file: './taunts/pp/sound_narrator_sd-die75.mp3',                   text: 'Dead. Good.'},
                    {file: './taunts/pp/sound_narrator_sd-die76.mp3',                   text: 'Oh. That was kinda messed up.'},
                    {file: './taunts/pp/sound_narrator_sd-die77.mp3',                   text: 'Well done!'}], ["pit_people", "pp", "narrator", "die"]);


// Misc
registerTaunt(420, [{file: './taunts/do_you_have_the_time.mp3',                         text: 'Do you have the time? 420. Nice!'}], []);
registerTaunt(1010, [{file: './taunts/hes_thicc.mp3',                                   text: 'Oh yeah. Damn. Damn boy! DAMN BOY! HE\'S THICC!'}], ["thick", "thicc"]);
registerTaunt(1011, [{file: './taunts/what_a_gamer.mp3',                                text: 'Get the fuck outta my room. I\'m playing min- What a fucking GAMER. [*Uncontrollable laughter*] [*seinfeld theme*]'}], ["gamer"]);
registerTaunt(1012, [{file: './taunts/fortnite/wiggle.mp3',                             text: '*THICC*'}], ["fortnite", "thick", "thicc", "wiggle"]);
registerTaunt(1013, [{file: './taunts/thats_cheating.mp3',                              text: 'That\'s cheating!'}], ["limmy", "cheating"]);
registerTaunt(1014, [{file: './taunts/i_dont_get_it.mp3',                               text: 'I don\'t get it.'}], ["limmy", "i_dont_get_it"]);
registerTaunt(1015, [{file: './taunts/untenable.mp3',                                   text: 'Untenable!'}], ["limmy", "untenable", "!10"]);
registerTaunt(1016, [{file: './taunts/vsauce_or_is_it.mp3',                             text: 'Or is it? [*meme music*]'}], ["vsauce", "ponder"]);
registerTaunt(1017, [{file: './taunts/no_laugh.mp3',                                    text: '[*Laughter*] No no no no.'}], ["no", "laugh"]);
registerTaunt(1018, [{file: './taunts/he_fucked_up.mp3',                                text: 'It was at this moment that he knew. He fucked up.'}], ["fucked"]);
registerTaunt(1019, [{file: './taunts/tyrone_re.mp3',                                   text: 'Reeeeeeee'}], ["tyrone", "re"]);
registerTaunt(1020, [{file: './taunts/tyrone_e.mp3',                                    text: 'Eeeee'}], ["tyrone", "e"]);
registerTaunt(1021, [{file: './taunts/tyrone_normies.mp3',                              text: 'Normies, get out!'}], ["tyrone", "normies"]);
registerTaunt(1022, [{file: './taunts/why_bully.mp3',                                   text: 'Why you bully me?'}], ["bully", "why"]);
registerTaunt(1023, [{file: './taunts/we_got_him.mp3',                                  text: 'Ladies and gentlemen. We got him.'},
                     {file: './taunts/gottem.mp3',                                      text: 'HA! Gottem!', chance: 0.05}], ["got", "him", "gottem"]);
registerTaunt(1024, [{file: './taunts/fbi_open.mp3',                                    text: 'FBI OPEN UP!'}], ["fbi", "open"]);
registerTaunt(1025, [{file: './taunts/fbi_entry.mp3',                                   text: '*FBI Agents entering*'}], ["fbi", "entry", "enter"]);
registerTaunt(1026, [{file: './taunts/xfiles.mp3',                                      text: '*X-Files theme song*'}], ["xfiles", "illuminati"]);
registerTaunt(1027, [{file: './taunts/fail.mp3',                                        text: '*Fail*'},
                     {file: './taunts/fail_2.mp3',                                      text: '*Fail*'}], ["fail"]);
registerTaunt(1028, [{file: './taunts/inception_horn.mp3',                              text: '*Horn*'}], ["inception", "horn"]);
registerTaunt(1029, [{file: './taunts/msg_alert.mp3',                                   text: '*Alert!*'}], ["alert", "mgs"]);
registerTaunt(1030, [{file: './taunts/record_scratch.mp3',                              text: '*Record Scratch*'},
                     {file: './taunts/record_scratch_2.mp3',                            text: '*Record Scratch*'}], ["record", "scratch"]);
registerTaunt(1031, [{file: './taunts/sad_music.mp3',                                   text: '*Sad Music*'},
                     {file: './taunts/sad_music_2.mp3',                                 text: '*Sad Music*'}], ["sad", "music"]);
registerTaunt(1032, [{file: './taunts/who_invited.mp3',                                 text: 'Fuck off! Who invited you?'}], ["fuck_off", "invited", "fuck"]);

registerTaunt(69690, [{file: './taunts/adult_swim/bird_up.mp3',                         text: 'Bird up!'}], ["birdup"]);
registerTaunt(69691, [{file: './taunts/adult_swim/bird_up_end.mp3',                     text: '*Bird Up Theme*'},
                      {file: './taunts/adult_swim/bird_up_end2.mp3',                    text: '*Bird Up Theme*'},
                      {file: './taunts/adult_swim/bird_up_end3.mp3',                    text: '*Bird Up Theme*'},
                      {file: './taunts/adult_swim/bird_up_end4.mp3',                    text: '*Speedy Bird Up Theme*'}], ["birdupend"]);
registerTaunt(69692, [{file: './taunts/adult_swim/free_realestate.mp3',                 text: 'This is free realestate!'},
                      {file: './taunts/adult_swim/free_realestate2.mp3',                text: 'The house is free!'},
                      {file: './taunts/adult_swim/free_realestate3.mp3',                text: 'Free realestate. I\'ll pee my pants.'},
                      {file: './taunts/adult_swim/free_realestate4.mp3',                text: 'IT\'S A FREE HOUSE!'},
                      {file: './taunts/adult_swim/free_realestate5.mp3',                text: 'THE HOUSE IS FREEE!'},
                      {file: './taunts/adult_swim/free_realestate6.mp3',                text: 'It\'s free realestate.'}], ["free", "realestate"]);
registerTaunt(69693, [{file: './taunts/adult_swim/hannibal.mp3',                        text: 'Who killed hannibal?'}], ["hannibal"]);


// Utility functions
function registerTaunt(id, tauntData, tauntTags) {
    if(typeof taunts[id] != 'undefined') {
        // It already exists
        console.log("Taunt id, " + id + ", already exists!");
    } else {
        var tauntElements = [];

        for(var i = 0; i < tauntData.length; i++) {
            var element = tauntData[i];

            element.text = id + ". " + element.text;

            var newTauntElement = {value: element};

            if (typeof element.chance !== 'undefined') {
                newTauntElement.chance = element.chance;
                delete newTauntElement.value.chance;
            }

            tauntElements.push(newTauntElement);
        }

        taunts[id] = {taunt: new RandomArray(tauntElements), tags: tauntTags};
    }

}

var tauntsQueue = [];
var previousTaunt = 0;

function playTauntAudio(connection) {
    return new Promise(resolve => {
        var currentTaunt = tauntsQueue[0];

        const dispatcher = connection.playFile(currentTaunt.file);
        dispatcher.setVolume(0.25);

        if (previousTaunt !== currentTaunt.tauntID) {
            currentTaunt.message.channel.send(currentTaunt.text);
            previousTaunt = currentTaunt.tauntID;
        }
        dispatcher.on("end", end => {tauntsQueue.splice(0, 1); resolve();});
    });
}

client.on('ready', () => {
    client.user.setActivity('Wikipedia', {type: 'WATCHING'});
});

client.on('message', async message => {

    if (message.author.bot) return;
    if (!message.guild) return;

    /*
    Valid taunt requests:
    1
    1 100
    1,100
    [laugh]
    [kf laugh]
    [kf laugh, 100]

    Special commands:
    -1
    [resetqueue]
    [disconnect]
    [tauntslist]
    */

    if(!isNaN(parseInt(message.content)) || (message.content.startsWith('[') && message.content.endsWith(']'))) {
        var requestedIDs = [];
        var multipleRequests = [];
        
        if (message.content.startsWith('[') && message.content.endsWith(']')) {
            var tagEntries = message.content.slice(1,-1).split(',');
            
            for (var i = 0; i < tagEntries.length; i++) {
                var tagEntry = tagEntries[i].trim();
                var tagTauntInt = parseInt(tagEntry);
                
                if(/^\d+$/.test(tagEntry) && !isNaN(tagTauntInt) && typeof taunts[tagTauntInt] !== 'undefined') {
                    requestedIDs.push(tagTauntInt);
                } else {
                    var subTags = tagEntry.split(' ');
                    var applicableIndexes = [];
                    
                    if (tagEntry === "-1" || tagEntry === "resetqueue") {
                        // Clear the queue
                        tauntsQueue = [];
                        return;
                    }
                    
                    // This would be better if I used SQL DB
                    for (var taunt_key in taunts) {
                        if (!taunts.hasOwnProperty(taunt_key)) continue;

                        var taunt_element = taunts[taunt_key];
                        var isApplicable = true;
                        
                        for (var tagi = 0; tagi < subTags.length; tagi++) {
                            if (typeof taunt_element.tags === 'undefined') {
                                console.log("[ERROR] Tag: " + taunt_key + " has undefined tags!!!");
                                continue;
                            }
                            
                            if (!taunt_element.tags.includes(subTags[tagi])) {
                                isApplicable = false;
                                break;
                            }
                        }
                        
                        if (isApplicable) {
                            applicableIndexes.push({value: taunt_key});
                        }
                    }
                    
                    if (applicableIndexes.length === 0) {
                        return;
                    }
                    
                    var chosenTaunt = (new RandomArray(applicableIndexes)).get();
                    requestedIDs.push(chosenTaunt);
                }
            }
        }
        else
        {
            multipleRequests = message.content.split(' ');
        }

        for (var i = 0; i < multipleRequests.length; i++) {
            var tauntInt = parseInt(multipleRequests[i]);

            if (tauntInt === -1) {
                // Clear the queue
                tauntsQueue = [];
                return;
            }

            if(isNaN(tauntInt) || typeof taunts[tauntInt] === 'undefined') {
                // One of the requests is NaN, invalid.
                return;
            } else {
                requestedIDs.push(tauntInt);
            }
        }

        for (var i = 0; i < requestedIDs.length; i++) {
            var tauntInt = requestedIDs[i];
            var shouldJoinAudio = false;

            if(typeof taunts[tauntInt] !== 'undefined') {
                shouldJoinAudio = true;

                var chosenTaunt = taunts[tauntInt].taunt.get();
                chosenTaunt.tauntID = tauntInt;
                chosenTaunt.message = message;

                tauntsQueue.push(chosenTaunt);
            }
        }

        if(tauntsQueue.length > requestedIDs.length)
        {
            return;
        }

        if(shouldJoinAudio) {
            if (message.member.voiceChannel) {
                var voiceChannel = message.member.voiceChannel;
                const connection = await voiceChannel.join();

                while (tauntsQueue.length > 0) {
                    await playTauntAudio(connection);
                }

                voiceChannel.leave();
                previousTaunt = 0;
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
        let paper = new Paper(0, 100, knowledge, command);
        await paper.researchPaper();
        
        var text = paper.writePaper();
        
        for(var i = 0; i < (text.length / 2000); i++)
        {
            message.channel.send(text.substring(i, i + 2000));
        }
        return;
    }
});

client.login(process.env.TOKEN);
