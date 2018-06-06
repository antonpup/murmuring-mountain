// Discord.js bot
const Discord = require('discord.js');
const client = new Discord.Client();
const Knowledge = require('./knowledge.js');
const Paper = require('./paper.js');

const RandomArray = require('./randomArray.js');

let knowledge = new Knowledge();

let taunts = {};
// Rise of Nations taunts
registerTaunt(1, [{file: './taunts/ron/yes-3.mp3',                                      text: 'Yes.'}]);
registerTaunt(2, [{file: './taunts/ron/no-2.mp3',                                       text: 'No.'}]);
registerTaunt(3, [{file: './taunts/ron/maybe-2.mp3',                                    text: 'Maybe.'}]);
registerTaunt(4, [{file: './taunts/ron/need_food-2.mp3',                                text: 'I need food.'}]);
registerTaunt(5, [{file: './taunts/ron/needtimber-2.mp3',                               text: 'I need timber.'}]);
registerTaunt(6, [{file: './taunts/ron/need_metal-1.mp3',                               text: 'I need metal.'}]);
registerTaunt(7, [{file: './taunts/ron/needwealth-3.mp3',                               text: 'I need wealth, alright?  Wealth.'}]);
registerTaunt(8, [{file: './taunts/ron/needoil-2.mp3',                                  text: 'I need oil.'}]);
registerTaunt(9, [{file: './taunts/ron/needknowledge-1.mp3',                            text: 'Ha, I need...oh yeah, knowledge.'}]);
registerTaunt(10, [{file: './taunts/ron/ask_resources-2.mp3',                           text: 'Do you need resources?  Speak up boy.'}]);
registerTaunt(11, [{file: './taunts/ron/help_here-3.mp3',                               text: 'Uh, hey dude, a little help here?'}]);
registerTaunt(12, [{file: './taunts/ron/noob_rush-1.mp3',                               text: 'Hey, this noob\'s rushin\' me.'}]);
registerTaunt(13, [{file: './taunts/ron/buildtroops-1.mp3',                             text: 'Build more troops.'}]);
registerTaunt(14, [{file: './taunts/ron/build_wonder-3.mp3',                            text: 'Build a wonder boy, quick.'}]);
registerTaunt(15, [{file: './taunts/ron/work_econ-1.mp3',                               text: 'Work on your economy, hmm?'}]);
registerTaunt(16, [{file: './taunts/ron/work_airforce-2.mp3',                           text: 'Hey boy, work on your airforce.'}]);
registerTaunt(17, [{file: './taunts/ron/work_navy-3.mp3',                               text: 'Dude, you gotta work on your navy.'}]);
registerTaunt(18, [{file: './taunts/ron/signal_attack-3.mp3',                           text: 'Wait for my signal to attack.'}]);
registerTaunt(19, [{file: './taunts/ron/attack-3.mp3',                                  text: 'Attack!'}]);
registerTaunt(20, [{file: './taunts/ron/get_em-2.mp3',                                  text: 'He he he, let\'s get \'em.'}]);
registerTaunt(21, [{file: './taunts/ron/guard_artillery-2.mp3',                         text: 'Guard my artillery.'}]);
registerTaunt(22, [{file: './taunts/ron/move_troops-2.mp3',                             text: 'Move troops here.'}]);
registerTaunt(23, [{file: './taunts/ron/grab_territory-1.mp3',                          text: 'Grab some territory.'}]);
registerTaunt(24, [{file: './taunts/ron/gonna_boom-2.mp3',                              text: 'Gonna boom.'}]);
registerTaunt(25, [{file: './taunts/ron/gonna_rush-1.mp3',                              text: 'Gonna rush.'}]);
registerTaunt(26, [{file: './taunts/ron/wanna_ally-3.mp3',                              text: 'Huh, wanna ally?'}]);
registerTaunt(27, [{file: './taunts/ron/wanna_peace-3.mp3',                             text: 'Wanna make peace?'}]);
registerTaunt(28, [{file: './taunts/ron/means_war-3.mp3',                               text: 'Of course you realize, this means war.'}]);
registerTaunt(29, [{file: './taunts/ron/pay_die-1.mp3',                                 text: 'Pay up, or die.'}]);
registerTaunt(30, [{file: './taunts/ron/prepare_crushed-1.mp3',                         text: 'Prepare to be crushed.'}]);
registerTaunt(31, [{file: './taunts/ron/who_attack-3.mp3',                              text: 'Who we gonna attack?'}]);
registerTaunt(32, [{file: './taunts/ron/when_attack-2.mp3',                             text: 'Uh, Wh, When shall we attack?'}]);
registerTaunt(33, [{file: './taunts/ron/where_enemy-1.mp3',                             text: 'Uh, where\'s the enemy?'}]);
registerTaunt(34, [{file: './taunts/ron/airpower-3.mp3',                                text: 'They got air power.'}]);
registerTaunt(35, [{file: './taunts/ron/ships_ahoy-3.mp3',                              text: 'Ah ga ga, Ships ahoy, heh heh heh.'}]);
registerTaunt(36, [{file: './taunts/ron/spy_spy-3.mp3',                                 text: 'I spy... a spy.'}]);
registerTaunt(37, [{file: './taunts/ron/rare_resources-3.mp3',                          text: 'Howdy hi there friends and neighbors, we got rare resources for the taking.'}]);
registerTaunt(38, [{file: './taunts/ron/city_down-1.mp3',                               text: 'This city is goin\' down.'}]);
registerTaunt(39, [{file: './taunts/ron/checkouttimer-2.mp3',                           text: 'Hey, check out the timer.'}]);
registerTaunt(40, [{file: './taunts/ron/setup_shop-2.mp3',                              text: 'Let\'s set up shop.'}]);
registerTaunt(41, [{file: './taunts/ron/wanna_bet-2.mp3',                               text: 'Wanna bet?'}]);
registerTaunt(42, [{file: './taunts/ron/itson-1.mp3',                                   text: 'Oh, it\'s on!'}]);
registerTaunt(43, [{file: './taunts/ron/supposed_hurt-1.mp3',                           text: 'Was that supposed to hurt? Eh heh heh heh heh heh.'}]);
registerTaunt(44, [{file: './taunts/ron/fixed_problem-1.mp3',                           text: 'Have you fixed your little problem yet?'}]);
registerTaunt(45, [{file: './taunts/ron/good_luck-1.mp3',                               text: 'Hey, hey, good luck with that eh, heh.'}]);
registerTaunt(46, [{file: './taunts/ron/works_out-1.mp3',                               text: 'Let me know how that works out for ya.'}]);
registerTaunt(47, [{file: './taunts/ron/slow_ahead-3.mp3',                              text: 'Yeah, yeah, ya know I may be slow but I\'m ahead of you!  Eh, Charlie?  Ha Ha!'}]);
registerTaunt(48, [{file: './taunts/ron/classy-3.mp3',                                  text: 'Huh, Classy.'}]);
registerTaunt(49, [{file: './taunts/ron/tutorials_noob-1.mp3',                          text: 'Play the tutorials noob.'}]);
registerTaunt(50, [{file: './taunts/ron/wake_done-1.mp3',                               text: '*Yawn* Wake me up when you\'re done.'}]);
registerTaunt(51, [{file: './taunts/ron/get_outta-3.mp3',                               text: 'Get outta my face.'}]);
registerTaunt(52, [{file: './taunts/ron/leavemealone-2.mp3',                            text: 'Uh, leave me alone, ok.'}]);
registerTaunt(53, [{file: './taunts/ron/need_that-3.mp3',                               text: '\'Cause ya need that.'}]);
registerTaunt(54, [{file: './taunts/ron/over_yet-4.mp3',                                text: 'Is it over yet?'}]);
registerTaunt(55, [{file: './taunts/ron/parents_late-2.mp3',                            text: 'Do your parents know you\'re up this late?'}]);
registerTaunt(56, [{file: './taunts/ron/you_ok-1.mp3',                                  text: 'You ok over there?'}]);
registerTaunt(57, [{file: './taunts/ron/stayout-1.mp3',                                 text: 'And stay out!'}]);
registerTaunt(58, [{file: './taunts/ron/bwahaha-1.mp3',                                 text: 'Bwa ha ha ha ha ha ha ha.'}]);
registerTaunt(59, [{file: './taunts/ron/stormin_castle-1.mp3',                          text: 'Have fun stormin\' the castle.'}]);
registerTaunt(60, [{file: './taunts/ron/randomrandom-2.mp3',                            text: 'Random!  Random!  Random!'}]);
registerTaunt(61, [{file: './taunts/ron/randomrandom-4.mp3',                            text: 'RANDOM!  RANDOM!  RANDOM!'}]);
registerTaunt(62, [{file: './taunts/ron/game_begin-3.mp3',                              text: 'Let the game begin!'}]);
registerTaunt(63, [{file: './taunts/ron/dude_pickem-1.mp3',                             text: 'Dude, we know who you\'re going to take.  Just pick \'em and get on with it.'}]);
registerTaunt(64, [{file: './taunts/ron/click_understand-2.mp3',                        text: 'Which part of "Click in" didn\'t you understand?'}]);
registerTaunt(65, [{file: './taunts/ron/what_holdup-2.mp3',                             text: 'What\'s the holdup?'}]);
registerTaunt(66, [{file: './taunts/ron/ahh-1.mp3',                                     text: 'Ahhh haaa.'}]);
registerTaunt(67, [{file: './taunts/ron/uhh_uhh-1.mp3',                                 text: 'Unh Unh Unh.'}]);
registerTaunt(68, [{file: './taunts/ron/ohhh-4.mp3',                                    text: 'Ohhh.'}]);
registerTaunt(69, [{file: './taunts/ron/uhhh-2.mp3',                                    text: 'Uhhh.'}]);
registerTaunt(70, [{file: './taunts/ron/unh-3.mp3',                                     text: 'Unh!'}]);
registerTaunt(71, [{file: './taunts/ron/doomed-1.mp3',                                  text: 'We\'re doomed!'}]);
registerTaunt(72, [{file: './taunts/ron/wanngiveup-2.mp3',                              text: 'Wanna give up?'}]);
registerTaunt(73, [{file: './taunts/ron/victoryismine-3.mp3',                           text: 'Victory is mine!'}]);
registerTaunt(74, [{file: './taunts/ron/owmyeye-1.mp3',                                 text: 'Oww!  My eye!'}]);
registerTaunt(75, [{file: './taunts/ron/notintheface-1.mp3',                            text: 'Not in the face!  Not in the face!'}]);
registerTaunt(76, [{file: './taunts/ron/coming-4.mp3',                                  text: 'Eh, Coming.'}]);
registerTaunt(77, [{file: './taunts/ron/berightthere-1.mp3',                            text: 'Be right there.'}]);
registerTaunt(78, [{file: './taunts/ron/onmyway-1.mp3',                                 text: 'On my way.'}]);
registerTaunt(79, [{file: './taunts/ron/send_help-1.mp3',                               text: 'I\'m tryin\' to send some help.'}]);
registerTaunt(80, [{file: './taunts/ron/gotchacovered-3.mp3',                           text: 'Gotcha covered.'}]);
registerTaunt(81, [{file: './taunts/ron/check-2.mp3',                                   text: 'Check.'}]);
registerTaunt(82, [{file: './taunts/ron/itshallbedone-1.mp3',                           text: 'It shall be done.'}]);
registerTaunt(83, [{file: './taunts/ron/rightonthat-2.mp3',                             text: 'Let me get right on that.'}]);
registerTaunt(84, [{file: './taunts/ron/sweet-3.mp3',                                   text: 'Heh heh heh, Sweet.'}]);
registerTaunt(85, [{file: './taunts/ron/youdaman-2.mp3',                                text: 'You da man.'}]);
registerTaunt(86, [{file: './taunts/ron/talking_about-1.mp3',                           text: 'That\'s what I\'m talkin about.'}]);
registerTaunt(87, [{file: './taunts/ron/takencareof-3.mp3',                             text: 'Consider it taken care of.'}]);
registerTaunt(88, [{file: './taunts/ron/soundslikeaplan-2.mp3',                         text: 'Sounds like a plan.'}]);
registerTaunt(89, [{file: './taunts/ron/groovy-3.mp3',                                  text: 'Groovy.'}]);
registerTaunt(90, [{file: './taunts/ron/color_red-1.mp3',                               text: 'Red.'}]);
registerTaunt(91, [{file: './taunts/ron/color_blue-1.mp3',                              text: 'Blue.'}]);
registerTaunt(92, [{file: './taunts/ron/color_purple-2.mp3',                            text: 'Purple.'}]);
registerTaunt(93, [{file: './taunts/ron/color_green-1.mp3',                             text: 'Green.'}]);
registerTaunt(94, [{file: './taunts/ron/color_yellow.mp3',                              text: 'Yellow.'}]);
registerTaunt(95, [{file: './taunts/ron/color_ltblue-1.mp3',                            text: 'Light blue.'}]);
registerTaunt(96, [{file: './taunts/ron/color_white-3.mp3',                             text: 'White.'}]);
registerTaunt(97, [{file: './taunts/ron/color_orange-2.mp3',                            text: 'Orange.'}]);
registerTaunt(98, [{file: './taunts/ron/humanity-3.mp3',                                text: 'Aaaaaagh!  The humanity!'}]);
registerTaunt(99, [{file: './taunts/ron/getthat-3.mp3',                                 text: 'Let me get that for you.'}]);
registerTaunt(100, [{file: './taunts/ron/keep_risin-1.mp3',                             text: 'They keep on rising!'}]);

// Custom taunts
// Age of Empires 2 taunts - 1xx
registerTaunt(101, [{file: './taunts/aoe2/01_yes.mp3',                                  text: 'Yes.'}]);
registerTaunt(102, [{file: './taunts/aoe2/02_no.mp3',                                   text: 'No.'},
                    {file: './taunts/aoe2/02_no_ru.mp3',                                text: 'Нет.'}]);
registerTaunt(103, [{file: './taunts/aoe2/03_food_please.mp3',                          text: 'Food please.'}]);
registerTaunt(104, [{file: './taunts/aoe2/04_wood_please.mp3',                          text: 'Wood please.'}]);
registerTaunt(105, [{file: './taunts/aoe2/05_gold_please.mp3',                          text: 'Gold please.'}]);
registerTaunt(106, [{file: './taunts/aoe2/06_stone_please.mp3',                         text: 'Stone please.'}]);
registerTaunt(107, [{file: './taunts/aoe2/07_ahh.mp3',                                  text: 'Ahh!'}]);
registerTaunt(108, [{file: './taunts/aoe2/08_all_hail.mp3',                             text: 'All hail, king of the losers!'}]);
registerTaunt(109, [{file: './taunts/aoe2/09_oooh.mp3',                                 text: 'Ooh!'}]);
registerTaunt(110, [{file: './taunts/aoe2/10_back_to_age_1.mp3',                        text: 'I\'ll beat you back to Age of Empires.'}]);
registerTaunt(111, [{file: './taunts/aoe2/11_herb_laugh.mp3',                           text: '*(Herb laugh)*'},
                    {file: './taunts/ds/laugh_1.mp3',                                   text: '*(Laugh)*', chance: 0.05},
                    {file: './taunts/ds/laugh_2.mp3',                                   text: '*(Laugh)*', chance: 0.05},
                    {file: './taunts/ds/laugh_3.mp3',                                   text: '*(Laugh)*', chance: 0.05},
                    {file: './taunts/ds/laugh_4.mp3',                                   text: '*(Laugh)*', chance: 0.05},
                    {file: './taunts/ds/laugh_5.mp3',                                   text: '*(Laugh)*', chance: 0.05},
                    ]);
registerTaunt(112, [{file: './taunts/aoe2/12_being_rushed.mp3',                         text: 'Ah! Being rushed.'}]);
registerTaunt(113, [{file: './taunts/aoe2/13_blame_your_isp.mp3',                       text: 'Sure, blame it on your ISP.'}]);
registerTaunt(114, [{file: './taunts/aoe2/14_start_the_game.mp3',                       text: 'Start the game already!'}]);
registerTaunt(115, [{file: './taunts/aoe2/15_dont_point_that_thing.mp3',                text: 'Don\'t point that thing at me!'}]);
registerTaunt(116, [{file: './taunts/aoe2/16_enemy_sighted.mp3',                        text: 'Enemy sighted!'}]);
registerTaunt(117, [{file: './taunts/aoe2/17_it_is_good.mp3',                           text: 'It is good to be the king.'}]);
registerTaunt(118, [{file: './taunts/aoe2/18_i_need_a_monk.mp3',                        text: 'Monk! I need a monk!'}]);
registerTaunt(119, [{file: './taunts/aoe2/19_long_time_no_siege.mp3',                   text: 'Long time, no siege.'}]);
registerTaunt(120, [{file: './taunts/aoe2/20_my_granny.mp3',                            text: 'My granny could scrap better than that.'}]);
registerTaunt(121, [{file: './taunts/aoe2/21_nice_town_ill_take_it.mp3',                text: 'Nice town, I\'ll take it.'}]);
registerTaunt(122, [{file: './taunts/aoe2/22_quit_touchin.mp3',                         text: 'Quit touching me!'}]);
registerTaunt(123, [{file: './taunts/aoe2/23_raiding_party.mp3',                        text: 'Raiding party!'}]);
registerTaunt(124, [{file: './taunts/aoe2/24_dadgum.mp3',                               text: 'Dadgum.'}]);
registerTaunt(125, [{file: './taunts/aoe2/25_smite_me.mp3',                             text: 'Eh, smite me.'}]);
registerTaunt(126, [{file: './taunts/aoe2/26_the_wonder.mp3',                           text: 'The wonder, the wonder, the... no!'}]);
registerTaunt(127, [{file: './taunts/aoe2/27_you_play_2_hours.mp3',                     text: 'You played two hours to die like this?'}]);
registerTaunt(128, [{file: './taunts/aoe2/28_you_should_see_the_other_guy.mp3',         text: 'Yeah, well, you should see the other guy.'}]);
registerTaunt(129, [{file: './taunts/aoe2/29_roggan.mp3',                               text: 'Roggan.'}]);
registerTaunt(130, [{file: './taunts/aoe2/30_wololo.mp3',                               text: 'Wololo.'}]);
registerTaunt(131, [{file: './taunts/aoe2/31_attack_an_enemy_now.mp3',                  text: 'Attack an enemy now.'}]);
registerTaunt(132, [{file: './taunts/aoe2/32_cease_creating_extra_villagers.mp3',       text: 'Cease creating extra villagers.'}]);
registerTaunt(133, [{file: './taunts/aoe2/33_create_extra_villagers.mp3',               text: 'Create extra villagers.'}]);
registerTaunt(134, [{file: './taunts/aoe2/34_build_a_navy.mp3',                         text: 'Build a navy.'}]);
registerTaunt(135, [{file: './taunts/aoe2/35_stop_building_a_navy.mp3',                 text: 'Stop building a navy.'}]);
registerTaunt(136, [{file: './taunts/aoe2/36_wait_for_my_signal_to_attack.mp3',         text: 'Wait for my signal to attack.'}]);
registerTaunt(137, [{file: './taunts/aoe2/37_build_a_wonder.mp3',                       text: 'Build a wonder.'}]);
registerTaunt(138, [{file: './taunts/aoe2/38_give_me_your_extra_resources.mp3',         text: 'Give me your extra resources.'}]);
registerTaunt(139, [{file: './taunts/aoe2/39_ally.mp3',                                 text: '*(Ally sound)*'}]);
registerTaunt(140, [{file: './taunts/aoe2/40_enemy.mp3',                                text: '*(Enemy sound)*'}]);
registerTaunt(141, [{file: './taunts/aoe2/41_neutral.mp3',                              text: '*(Neutral sound)*'}]);
registerTaunt(142, [{file: './taunts/aoe2/42_what_age_are_you_in.mp3',                  text: 'What age are you in?'}]);

// Dota 2 taunts - 2xx where 2 stands for 2 from dota 2
registerTaunt(201, [{file: './taunts/dota2/Crowd_1.mp3',                                text: 'Applause'},
                    {file: './taunts/dota2/Crowd_2.mp3',                                text: 'Applause'}]);
registerTaunt(202, [{file: './taunts/dota2/Chat_wheel_2017_crybaby.mp3',                text: 'Crybaby'}]);
registerTaunt(203, [{file: './taunts/dota2/Chat_wheel_2017_sad_bone.mp3',               text: 'Sad trombone'}]);
registerTaunt(204, [{file: './taunts/dota2/Chat_wheel_2017_cricket.mp3',                text: 'Crickets'}]);
registerTaunt(205, [{file: './taunts/dota2/Chat_wheel_2017_ehto_g_g.mp3',               text: 'Это ГГ'}]);
registerTaunt(206, [{file: './taunts/dota2/Chat_wheel_2017_wow.mp3',                    text: 'Waow'}]);
registerTaunt(211, [{file: './taunts/dota2/Chat_wheel_2018_that_was_questionable.mp3',  text: 'I...uh...That was questionable at the...at the best.'}]);
registerTaunt(212, [{file: './taunts/dota2/Chat_wheel_2018_what_just_happened.mp3',     text: 'I can\'t believe what we\'re seeing. What just happened?'}]);
registerTaunt(213, [{file: './taunts/dota2/Chat_wheel_2018_next_level.mp3',             text: 'The next level play!'}]);
registerTaunt(221, [{file: './taunts/dota2/Pud_ability_rot_07.mp3',                     text: 'Oops. Was that me?'}]);
registerTaunt(222, [{file: './taunts/dota2/Pud_thanks_02.mp3',                          text: 'That\'s a bit of all right.'}]);
registerTaunt(223, [{file: './taunts/dota2/Tech_kill_23.mp3',                           text: 'He he he, hehe ah ha! Oh ho ho oh oh ha ha ha!'}]);
registerTaunt(224, [{file: './taunts/dota2/Tech_trapgoesoff_10.mp3',                    text: 'Gotcha!'}]);
registerTaunt(225, [{file: './taunts/dota2/Tech_ally_03.mp3',                           text: 'Just have a seat right over there. And let the smart people work.'}]);

// Killing Floor taunts - 3xx
registerTaunt(301, [{file: './taunts/kf/Yes_1.mp3',                                     text: 'Yeah, ok.'},
                    {file: './taunts/kf/Yes_2.mp3',                                     text: 'Sure, mate.'},
                    {file: './taunts/kf/Yes_3.mp3',                                     text: 'Yep, will do.'},
                    {file: './taunts/kf/Yes_4.mp3',                                     text: 'No problem.'},
                    {file: './taunts/kf/Yes_5.mp3',                                     text: 'Yeah, roger that.'},
                    {file: './taunts/kf/Yes_6.mp3',                                     text: 'Affirmative.'},
                    {file: './taunts/kf/Yes_7.mp3',                                     text: 'Okay, gov\'na!'}]);
registerTaunt(302, [{file: './taunts/kf/No_1.mp3',                                      text: 'Hell no!'},
                    {file: './taunts/kf/No_2.mp3',                                      text: 'No chance, pal.'},
                    {file: './taunts/kf/No_3.mp3',                                      text: 'Nob off, you tosspot!'},
                    {file: './taunts/kf/No_4.mp3',                                      text: 'Bog off, you wanker!'},
                    {file: './taunts/kf/No_5.mp3',                                      text: 'Don\'t be bloody stupid!'},
                    {file: './taunts/kf/No_6.mp3',                                      text: 'Bugger that.'}]);
registerTaunt(303, [{file: './taunts/kf/Help_1.mp3',                                    text: 'A little help would be appreciated!'},
                    {file: './taunts/kf/Help_2.mp3',                                    text: 'I\'m in deep crap here!'},
                    {file: './taunts/kf/Help_3.mp3',                                    text: 'Help!'},
                    {file: './taunts/kf/Help_4.mp3',                                    text: 'Help me like now!'},
                    {file: './taunts/kf/Help_5.mp3',                                    text: 'Give me a hand over here.'},
                    {file: './taunts/kf/Help_6.mp3',                                    text: 'For God\'s sake, help me!'},
                    {file: './taunts/kf/Help_7.mp3',                                    text: 'Bugger it! Help me!'},
                    {file: './taunts/kf/Help_8.mp3',                                    text: 'Hey gov\'na, I\'m up to my bloody neck in it over here!'},
                    {file: './taunts/kf/Help_9.mp3',                                    text: 'Any time, no rush! Help!'}]);
registerTaunt(304, [{file: './taunts/kf/Drop_Weapon_1.mp3',                             text: 'I need a bloody shooter!'},
                    {file: './taunts/kf/Drop_Weapon_2.mp3',                             text: 'Tool me up, you tight gits!'},
                    {file: './taunts/kf/Drop_Weapon_3.mp3',                             text: 'Come on, someone kit me out.'},
                    {file: './taunts/kf/Drop_Weapon_4.mp3',                             text: 'Pass me a piece will ya, pal?'}]);
registerTaunt(305, [{file: './taunts/kf/Need_money_1.mp3',                              text: 'Can you give us some money?'},
                    {file: './taunts/kf/Need_money_2.mp3',                              text: 'I need some dosh right now.'},
                    {file: './taunts/kf/Need_money_3.mp3',                              text: 'Can anyone lend me a tenner?'},
                    {file: './taunts/kf/Need_money_4.mp3',                              text: 'Can you sub me a few, mate?'},
                    {file: './taunts/kf/Need_money_5.mp3',                              text: 'Give us some bloody money, will ya?'},
                    {file: './taunts/kf/Need_Money_6.mp3',                              text: 'I\'m a bit brasic. Can you help me out?'},
                    {file: './taunts/kf/Need_Money_7.mp3',                              text: 'Can I scrounge some cash?'},
                    {file: './taunts/kf/Need_Money_8.mp3',                              text: 'Give us a few quid, gov\'na.'},
                    {file: './taunts/kf/Need_Money_9.mp3',                              text: 'Where\'s my bloody benefits cheque?'}]);
registerTaunt(306, [{file: './taunts/kf/Medic_1.mp3',                                   text: 'Patch me up for God\'s sake!'},
                    {file: './taunts/kf/Medic_2.mp3',                                   text: 'Jesus, I\'m bleeding! Help me!'},
                    {file: './taunts/kf/Medic_3.mp3',                                   text: 'I\'m hit! Bloody well do something!'},
                    {file: './taunts/kf/Medic_4.mp3',                                   text: 'Jesus, I\'m bleeding like a stuck pig!'},
                    {file: './taunts/kf/Medic_5.mp3',                                   text: 'Where\'s the bloody quack when you want one?'},
                    {file: './taunts/kf/Medic_6.mp3',                                   text: 'That bloody well hurts!'},
                    {file: './taunts/kf/Medic_7.mp3',                                   text: 'I want drugs! Now!'}]);
registerTaunt(307, [{file: './taunts/kf/Thanks_1.mp3',                                  text: 'Thanks pal!'},
                    {file: './taunts/kf/Thanks_2.mp3',                                  text: 'Cheers, big ears!'},
                    {file: './taunts/kf/Thanks_3.mp3',                                  text: 'Ta very much!'},
                    {file: './taunts/kf/Thanks_4.mp3',                                  text: 'Thanks.'},
                    {file: './taunts/kf/Thanks_5.mp3',                                  text: 'You\'re too kind.'},
                    {file: './taunts/kf/Thanks_6.mp3',                                  text: 'Nice one, geezer.'},
                    {file: './taunts/kf/Thanks_7.mp3',                                  text: 'Nice one, Cyril!'}]);
registerTaunt(308, [{file: './taunts/kf/Sorry_1.mp3',                                   text: 'Oh, my mistake.'},
                    {file: './taunts/kf/Sorry_2.mp3',                                   text: 'Oh... sorry.'},
                    {file: './taunts/kf/Sorry_3.mp3',                                   text: 'Oh, did that hurt?'},
                    {file: './taunts/kf/Sorry_4.mp3',                                   text: 'Whoopsie...'},
                    {file: './taunts/kf/Sorry_5.mp3',                                   text: 'Oh, so sorry.'}]);
registerTaunt(309, [{file: './taunts/kf/Look_Out_1.mp3',                                text: 'Look out, you plonker!'},
                    {file: './taunts/kf/Look_Out_2.mp3',                                text: 'Man on!'},
                    {file: './taunts/kf/Look_Out_3.mp3',                                text: 'Behind you, idiot!'},
                    {file: './taunts/kf/Look_Out_4.mp3',                                text: 'Watch it!'},
                    {file: './taunts/kf/Look_Out_5.mp3',                                text: 'Behind you, you tosser!'},
                    {file: './taunts/kf/Look_Out_6.mp3',                                text: 'Wake up, you pillock!'},
                    {file: './taunts/kf/Look_Out_7.mp3',                                text: 'Watch you back, mate!'}]);
registerTaunt(310, [{file: './taunts/kf/Run_1.mp3',                                     text: 'Oh crap, run!'},
                    {file: './taunts/kf/Run_2.mp3',                                     text: 'We\'re screwed! Leg it!'},
                    {file: './taunts/kf/Run_3.mp3',                                     text: 'Damn it! Bulls up, boys!'},
                    {file: './taunts/kf/Run_4.mp3',                                     text: 'Burn rubber, you pillocks!'},
                    {file: './taunts/kf/Run_5.mp3',                                     text: 'Scarper!'}]);
registerTaunt(311, [{file: './taunts/kf/Wait_for_me_1.mp3',                             text: 'Slow down, you arseholes!'},
                    {file: './taunts/kf/Wait_for_me_2.mp3',                             text: 'Wait up! I\'m coming!'},
                    {file: './taunts/kf/Wait_for_me_3.mp3',                             text: 'Hold on for Christ\'s sake!'},
                    {file: './taunts/kf/Wait_for_me_4.mp3',                             text: 'I\'m bricking meself! Wait up!'},
                    {file: './taunts/kf/Wait_for_me_5.mp3',                             text: 'Hang about! I\'m coming!'}]);
registerTaunt(312, [{file: './taunts/kf/Weld_the_doors_1.mp3',                          text: 'Get those doors welded.'},
                    {file: './taunts/kf/Weld_the_doors_2.mp3',                          text: 'Weld them tight.'},
                    {file: './taunts/kf/Weld_the_doors_3.mp3',                          text: 'Seal the doors, quick!'},
                    {file: './taunts/kf/Weld_the_doors_4.mp3',                          text: 'Get the doors, you muppets!'},
                    {file: './taunts/kf/Weld_the_doors_5.mp3',                          text: 'One of you pikeys weld those bloody doors!'}]);
registerTaunt(313, [{file: './taunts/kf/Hole_up_1.mp3',                                 text: 'God, remember the bleedin\' alamo?'},
                    {file: './taunts/kf/Hole_up_2.mp3',                                 text: 'This\'ll do. I need a breather anyway.'},
                    {file: './taunts/kf/Hole_up_3.mp3',                                 text: 'Thin red line, right here boys.'},
                    {file: './taunts/kf/Hole_up_4.mp3',                                 text: 'Nice bolt-hole. This will do.'},
                    {file: './taunts/kf/Hole_up_5.mp3',                                 text: 'Hunker down in here.'}]);
registerTaunt(314, [{file: './taunts/kf/Follow_me_1.mp3',                               text: 'With me!'},
                    {file: './taunts/kf/Follow_me_2.mp3',                               text: 'Oi, plonkers! Follow me!'},
                    {file: './taunts/kf/Follow_me_3.mp3',                               text: 'On me!'},
                    {file: './taunts/kf/Follow_me_4.mp3',                               text: 'Get fell in!'}]);
registerTaunt(315, [{file: './taunts/kf/Insult_Specimens_1.mp3',                        text: 'Bloody hell! You stink!'},
                    {file: './taunts/kf/Insult_Specimens_2.mp3',                        text: 'Wankers!'},
                    {file: './taunts/kf/Insult_Specimens_3.mp3',                        text: 'Oooh! Thats just nasty!'},
                    {file: './taunts/kf/Insult_Specimens_4.mp3',                        text: 'You\'re pathetic, like a bunch of bloody Millwall fans!'},
                    {file: './taunts/kf/Insult_Specimens_5.mp3',                        text: 'Reminds me of a bunch of pikies!'},
                    {file: './taunts/kf/Insult_Specimens_6.mp3',                        text: 'Come on! Ya\' want some, ya\' poncies?!'},
                    {file: './taunts/kf/Insult_Specimens_7.mp3',                        text: 'You\'re all fur-coat, no knickers, bitches!'}]);
registerTaunt(316, [{file: './taunts/kf/Insult_players_1.mp3',                          text: 'You muppet!'},
                    {file: './taunts/kf/Insult_players_2.mp3',                          text: 'You gormless tosser!'},
                    {file: './taunts/kf/Insult_players_3.mp3',                          text: 'Smeghead!'},
                    {file: './taunts/kf/Insult_players_4.mp3',                          text: 'Need to borrow my specs, mate?'},
                    {file: './taunts/kf/Insult_players_5.mp3',                          text: 'Wayne Rooney\'s smarter than you!'},
                    {file: './taunts/kf/Insult_players_6.mp3',                          text: 'Oh, get on with it! Plod!'},
                    {file: './taunts/kf/Insult_players_7.mp3',                          text: 'Who do you think you are? Bleedin\' action man?'}]);

// Misc
registerTaunt(420, [{file: './taunts/do_you_have_the_time.mp3',                         text: 'Do you have the time? 420. Nice!'}]);
registerTaunt(1010, [{file: './taunts/hes_thicc.mp3',                                   text: 'Oh yeah. Damn. Damn boy! DAMN BOY! HE\'S THICC!'}]);
registerTaunt(1011, [{file: './taunts/what_a_gamer.mp3',                                text: 'Get the fuck outta my room. I\'m playing min- What a fucking GAMER. [*Uncontrollable laughter*] [*seinfeld theme*]'}]);
registerTaunt(1012, [{file: './taunts/fortnite/wiggle.mp3',                             text: '*THICC*'}]);
registerTaunt(1013, [{file: './taunts/thats_cheating.mp3',                              text: 'That\'s cheating!'}]);
registerTaunt(1014, [{file: './taunts/i_dont_get_it.mp3',                               text: 'I don\'t get it.'}]);


// Utility functions
function registerTaunt(id, tauntData) {
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
        
        taunts[id] = new RandomArray(tauntElements);
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
    
    if(!isNaN(parseInt(message.content))) {
        var requestedIDs = [];
        var multipleRequests = message.content.split(' ');
        
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
                
                var chosenTaunt = taunts[tauntInt].get();
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
        let paper = new Paper(0, 50, knowledge, command);

        //message.channel.send('Chosen topic was ' + command);
        var text = paper.writePaper();
        console.log(text);
        return message.channel.send(text);
    }
});

client.login(process.env.TOKEN);
