 class CharVsSituation < ActiveRecord::Base
    belongs_to :character
    belongs_to :situation

    def strength_test
        if self.character.health <= 0
            "GAME OVER!!!"
        else

            if self.character.has_sword
                "You slain your foe with your fancy sword"
            elsif self.character.strength >= self.situation.test_strength
                        "You have used your're overwhelming strength to overcome your foe. YOU ShalL PASS "
            else 
                self.character.update(health:self.character.health -= 10)
                    "YOU GOT Destroyed HOMIE, hit the gym."
            end
    end
end
    def intelligence_test
            if self.character.health <= 0
                "GAME OVER!!!"
            else
                if self.character.has_8_ball 
                    "You shake your ball and ask will I pass this trial, it responds 'Shake again'"
                elsif self.character.intelligence >= self.situation.test_intelligence
                    "You spoke jibberish about Active Record , making your enemies submit to you, YOU PASS"
                else
                    self.character.update(health:self.character.health -= 10)
                    "You might be dumber than a bag of bricks, mah boy!!!"
        end
    end
end

        def luck_test
            if self.character.health <= 0
                "GAME OVER!!!"
            else
              if self.character.has_invisibility_cloak
                  "You use your invisibility cloak to sneak by"
              elsif  self.character.luck >= self.situation.test_luck
                "You're luck has carried you, YOU PASS"
              else
                self.character.update(health:self.character.health -= 10)
                 "Sadly the Fates are not on your side"
            end
        end
    end
    def cunningness_test
        if self.character.health <= 0
            "GAME OVER!!!"
        else
            if self.character.has_raven
                "Your raven croaks Edgar Allen Poe"
             elsif self.character.cunningness >= self.situation.test_cunningness
                "You are quite cunning. YOU PASS"
            else
                self.character.update(health:self.character.health -= 10)
                 "You're not cunning enough to deceive this foe"
                end
             end
            end
    def charisma_test
        if self.character.health <= 0
            "GAME OVER!!!"
        else

        if self.character.has_perfume
            "The enemies catch a hint of your perfume and fall in love"
        elsif  self.character.charisma >= self.situation.test_charisma
            self.character.update(has_troll_army: true)
            "You are very charismatic, YOU PASS"
        else
            self.character.update(health:self.character.health -= 10)
             "Your looks cannot save you from this one"
            end
       end
    end
end