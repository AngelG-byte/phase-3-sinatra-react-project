class CreateGameCharacter < ActiveRecord::Migration[6.1]
  def change
    create_table :characters do |t|
      t.string :name
      t.integer :health
      t.integer :money
      t.integer :age
      t.integer :strength
      t.integer :intelligence
      t.integer :luck
      t.integer :cunningness
      t.boolean :has_plot_armor?
      t.boolean :has_invisibility_cloak?
      t.boolean :has_8_ball?
      t.boolean :has_money_bag?
      t.boolean :has_sword?
      t.boolean :has_perfume?
      t.integer :charisma
    end
  end
end
