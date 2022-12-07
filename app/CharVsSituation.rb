class CharVsSituation < ActiveRecord::Base
    belongs_to :character
    belongs_to :situation
    def strength_test
        if self.character.strength >= self.situation.test_strength || self.character.has_invisibility_cloak || self.character.has_sword || self.character.has_plot_armor || self.has_troll_army
             "You have overpowered your way through your trial."
            rnd_num = rand(0..1)
                if rnd_num == 0
                    self.character.update(money:self.character.money += 50)
                    "you found 50 gold"
                else
                     "you found nothing"
                end
        else
            self.character.update(health:self.character.health -= 10)
            if self.character.health <= 0
                "Game Over"
            else
             "YOU GOT Destroyed HOMIE, hit the gym."
            end
        end
    end

    def intelligence_test
        if self.character.intelligence >= self.situation.test_intelligence || self.character.has_plot_armor || self.character.has_invisibility_cloak
            "You are smart as hell"
        else
            self.character.update(health:self.character.health -= 10)
            if self.character.health <= 0
                "Game Over"
            else
             "You might be dumber than a bag of bricks, mah boy!!!"
            end
    end
end
    def luck_test
        if self.character.luck >= self.situation.test_luck || self.character.has_8_ball || self.character.has_plot_armor
            "You're luck has carried you"
        else
            self.character.update(health:self.character.health -= 10)
            if self.character.health <= 0
                "Game Over"
            else
             "Sadly the Fates are not on your side"
            end
        end
    end

def cunningness_test
    if self.character.cunningness >= self.situation.test_cunningness || self.character.has_raven
        "You are quite cunning"
        else
            self.character.update(health:self.character.health -= 10)
            if self.character.health <= 0
                "Game Over"
            else
             "You're not cunning enough to decieve this foe"
            end
         end
    end
def charisma_test
    if self.character.charisma >= self.situation.test_charisma || self.character.has_perfume
        self.character.update(has_troll_army: true)
        "You are very charismatic"
    else
        self.character.update(health:self.character.health -= 10)
        if self.character.health <= 0
            "Game Over"
        else
         "Your looks cannot save you for this one"
        end
   end
end

def bribe
    if self.character.money >= self.situation.test_money
        self.character.money.update(money: self.character.money - self.situation.test_money)
    else
        self.character.update(health:self.character.health -= 10)
        if self.character.health <= 0
            "Game Over"
        else
            "How dare you try and bribe me!!"
            end
        end

    end
end