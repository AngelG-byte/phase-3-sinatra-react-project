class CreateCharVsSituation < ActiveRecord::Migration[6.1]
  def change
    create_table :char_vs_situations do |t|
      t.integer :character_id
      t.integer :situation_id
    end
  end
end
