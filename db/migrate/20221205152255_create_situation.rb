class CreateSituation < ActiveRecord::Migration[6.1]
  def change
    create_table :situations do |t|
        t.string :situation
        t.integer :test_health
        t.integer :test_money
        t.integer :test_strength
        t.integer :test_intelligence
        t.integer :test_luck
        t.integer :test_cunningness
        t.integer :test_charisma
    end
  end
end
