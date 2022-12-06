puts "🌱 Seeding spices..."

chett = Character.create(name: "Chett", health:30, money: 100, age: 37, strength: 2, intelligence: 7, luck: 1, cunningness: 5, charisma: 5, has_invisibility_cloak?: false, has_8_ball?: false, has_sword?: false, has_money_bag?: false, has_perfume?: false)
alina = Character.create(name: "Alina", health:30, money: 100, age: 30, strength: 7, intelligence: 5, luck: 2, cunningness: 2, charisma: 4, has_invisibility_cloak?: false, has_8_ball?: false, has_sword?: false, has_money_bag?: false, has_perfume?: false)
maxim = Character.create(name: "Maxim", health:30, money: 100, age: 18, strength: 3, intelligence: 6, luck: 2, cunningness: 2, charisma: 7, has_invisibility_cloak?: false, has_8_ball?: false, has_sword?: false, has_money_bag?: false, has_perfume?: false)
angel = Character.create(name: "Angel", health:30, money: 100, age: 3, strength: 4, intelligence: 4, luck: 4, cunningness: 4, charisma: 4, has_invisibility_cloak?: false, has_8_ball?: false, has_sword?: false, has_money_bag?: false, has_perfume?: false, has_plot_armor?: true)
emily = Character.create(name: "Emily", health:30, money: 100, age: 27, strength: 4, intelligence: 2, luck: 7, cunningness: 0, charisma: 7, has_invisibility_cloak?: false, has_8_ball?: false, has_sword?: false, has_money_bag?: false, has_perfume?: false)
puts "Chars done"
trolls = Situation.create(situation: "troll gang", test_health: 10, test_money: 30, test_strength: 5, test_intelligence: 3, test_luck: 0, test_cunningness: 1, test_charisma: 5)
forest = Situation.create(situation: "forest", test_health: 10, test_money: nil, test_strength: 6, test_intelligence: 5,  test_luck: 4, test_cunningness: 5, test_charisma: 6)
dragon = Situation.create(situation: "dragon", test_health: 10, test_money: 100, test_strength: 7, test_intelligence: 4, test_luck: 7, test_cunningness: 5, test_charisma: 5)
lake = Situation.create(situation: "lake", test_health: 30, test_money: 100, test_strength: 7, test_intelligence: 7, test_luck: 7, test_cunningness: 7, test_charisma: 7)
puts "Sits done"
CharVsSituation.create(character_id:chett.id, situation_id:trolls.id)
CharVsSituation.create(character_id:chett.id, situation_id:forest.id)
CharVsSituation.create(character_id:chett.id, situation_id:dragon.id)
CharVsSituation.create(character_id:chett.id, situation_id:lake.id)

CharVsSituation.create(character_id:alina.id, situation_id:trolls.id)
CharVsSituation.create(character_id:alina.id, situation_id:dragon.id)
CharVsSituation.create(character_id:alina.id, situation_id:lake.id)
CharVsSituation.create(character_id:alina.id, situation_id:forest.id)

CharVsSituation.create(character_id:maxim.id, situation_id:trolls.id)
CharVsSituation.create(character_id:maxim.id, situation_id:forest.id)
CharVsSituation.create(character_id:maxim.id, situation_id:dragon.id)
CharVsSituation.create(character_id:maxim.id, situation_id:lake.id)

CharVsSituation.create(character_id:angel.id, situation_id:trolls.id)
CharVsSituation.create(character_id:angel.id, situation_id:forest.id)
CharVsSituation.create(character_id:angel.id, situation_id:dragon.id)
CharVsSituation.create(character_id:angel.id, situation_id:lake.id)

CharVsSituation.create(character_id:emily.id, situation_id:trolls.id)
CharVsSituation.create(character_id:emily.id, situation_id:forest.id)
CharVsSituation.create(character_id:emily.id, situation_id:dragon.id)
CharVsSituation.create(character_id:emily.id, situation_id:lake.id)
puts "Battles done"

puts "✅ Done seeding!"
