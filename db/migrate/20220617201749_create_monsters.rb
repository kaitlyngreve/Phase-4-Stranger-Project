class CreateMonsters < ActiveRecord::Migration[7.0]
  def change
    create_table :monsters do |t|
      t.integer :monster_strength
      t.string :name
      t.string :image
      t.text :monster_description

      t.timestamps
    end
  end
end
