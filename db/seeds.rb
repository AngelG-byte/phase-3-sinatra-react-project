puts "🌱 Seeding spices..."

chett = Character.create(name: "Chett", health:30, money: 100, age: 37, strength: 2, intelligence: 7, luck: 1, cunningness: 5, charisma: 5, has_invisibility_cloak: false, has_8_ball: true, has_sword: false, has_raven: false, has_perfume: false, image: "IMAGES/knight.png")
alina = Character.create(name: "Alina", health:30, money: 100, age: 30, strength: 7, intelligence: 5, luck: 2, cunningness: 2, charisma: 4, has_invisibility_cloak: false, has_8_ball: false, has_sword: true, has_raven: false, has_perfume: false, image: "IMAGES/8bitgirlnobg (1).png")
maxim = Character.create(name: "Maxim", health:30, money: 100, age: 18, strength: 3, intelligence: 6, luck: 2, cunningness: 7, charisma: 7, has_invisibility_cloak: false, has_8_ball: false, has_sword: false, has_raven: false, has_perfume: true, image: "IMAGES/knight.png")
angel = Character.create(name: "Angel", health:30, money: 100, age: 3, strength: 4, intelligence: 4, luck: 4, cunningness: 4, charisma: 4, has_invisibility_cloak: false, has_8_ball: false, has_sword: false, has_raven: true, has_perfume: false, has_plot_armor: true, image: "IMAGES/knight.png")
emily = Character.create(name: "Emily", health:30, money: 100, age: 27, strength: 4, intelligence: 2, luck: 7, cunningness: 0, charisma: 7, has_invisibility_cloak: true, has_8_ball: false, has_sword: false, has_raven: false, has_perfume: false, image: "IMAGES/8bitgirlnobg (1).png")

trolls = Situation.create(situation: "You approach a bridge and just as you think you can safely pass…a gang of trolls emerges from the shadows underneath the bridge! They want to duel you! How will you surpass this challenge?", test_health: 10, test_strength: 5, test_intelligence: 3, test_luck: 0, test_cunningness: 1, test_charisma: 5)
forest = Situation.create(situation: "As you wander through the forest, the trees are getting larger and closer together. Suddenly, you see a large creature in front of you! A centaur had met you in your path. He challenges you and offers you a riddle. How will you face this challenge? He asks you a riddle… What disappears as soon as you say its name?", test_health: 10, test_strength: 6, test_intelligence: 5,  test_luck: 4, test_cunningness: 5, test_charisma: 6)
dragon = Situation.create(situation: "You reach a barren land and hope that no challenges lay ahead. There is nothing in sight…suddenly, all light from above is blocked! You look up to see a dragon flying ahead and watch in fear as it lands right in front of you! How will you face this challenge?", test_health: 10, test_strength: 7, test_intelligence: 4, test_luck: 7, test_cunningness: 5, test_charisma: 5)
#lake = Situation.create(situation: "You are approaching a mystery lake  ", test_health: 30, test_strength: 7, test_intelligence: 7, test_luck: 7, test_cunningness: 7, test_charisma: 7)

CharVsSituation.create(character_id:chett.id, situation_id:trolls.id)
CharVsSituation.create(character_id:chett.id, situation_id:forest.id)
CharVsSituation.create(character_id:chett.id, situation_id:dragon.id)

CharVsSituation.create(character_id:alina.id, situation_id:trolls.id)
CharVsSituation.create(character_id:alina.id, situation_id:dragon.id)
CharVsSituation.create(character_id:alina.id, situation_id:forest.id)

CharVsSituation.create(character_id:maxim.id, situation_id:trolls.id)
CharVsSituation.create(character_id:maxim.id, situation_id:forest.id)
CharVsSituation.create(character_id:maxim.id, situation_id:dragon.id)

CharVsSituation.create(character_id:angel.id, situation_id:trolls.id)
CharVsSituation.create(character_id:angel.id, situation_id:forest.id)
CharVsSituation.create(character_id:angel.id, situation_id:dragon.id)

CharVsSituation.create(character_id:emily.id, situation_id:trolls.id)
CharVsSituation.create(character_id:emily.id, situation_id:forest.id)
CharVsSituation.create(character_id:emily.id, situation_id:dragon.id)

puts "✅ Done seeding!"
