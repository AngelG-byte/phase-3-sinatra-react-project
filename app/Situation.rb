class Situation < ActiveRecord::Base
has_many :char_vs_situations
has_many :characters, through: :char_vs_situations

end