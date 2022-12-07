class CreateCharactersTable < ActiveRecord::Migration[6.1]
  def change
    create_table :characters do |t|
      t.string :name
      t.string :image
      t.string :story
      t.integer :health
      t.integer :money
      t.integer :age
      t.integer :strength
      t.integer :intelligence
      t.integer :luck
      t.integer :cunningness
      t.integer :charisma
      t.boolean :has_plot_armor
      t.boolean :has_invisibility_cloak
      t.boolean :has_8_ball
      t.boolean :has_sword
      t.boolean :has_perfume
      t.boolean :has_raven
      t.boolean :has_troll_army
    end
  end
end
