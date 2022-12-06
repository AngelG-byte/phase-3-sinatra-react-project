class CharVsSituation < ActiveRecord::Base
    belongs_to :character
    belongs_to :situation
    def strenght_test
        self.character.strength >= self.situation.test_strength
    end
end