class CreateCharacters < ActiveRecord::Migration[7.0]
  def change
    create_table :characters do |t|
      t.string :name
      t.integer :age
      t.integer :strength
      t.integer :intelligence
      t.string :image
      t.integer :team_id
      t.integer :monster_id

      t.timestamps
    end
  end
end
