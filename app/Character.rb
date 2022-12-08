class Character < ActiveRecord::Base
    has_many :char_vs_situations
    has_many :situations, through: :char_vs_situations
   
end