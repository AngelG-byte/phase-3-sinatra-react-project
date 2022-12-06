# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2022_12_05_161923) do

  create_table "char_vs_situations", force: :cascade do |t|
    t.integer "character_id"
    t.integer "situation_id"
  end

  create_table "characters", force: :cascade do |t|
    t.string "name"
    t.integer "health"
    t.integer "money"
    t.integer "age"
    t.integer "strength"
    t.integer "intelligence"
    t.integer "luck"
    t.integer "cunningness"
    t.boolean "has_plot_armor?"
    t.boolean "has_invisibility_cloak?"
    t.boolean "has_8_ball?"
    t.boolean "has_money_bag?"
    t.boolean "has_sword?"
    t.boolean "has_perfume?"
    t.integer "charisma"
  end

  create_table "situations", force: :cascade do |t|
    t.string "situation"
    t.integer "test_health"
    t.integer "test_money"
    t.integer "test_strength"
    t.integer "test_intelligence"
    t.integer "test_luck"
    t.integer "test_cunningness"
    t.integer "test_charisma"
  end

end
