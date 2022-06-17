class CreateTeams < ActiveRecord::Migration[7.0]
  def change
    create_table :teams do |t|
      t.integer :player_total
      t.string :team_name
      t.integer :team_strength

      t.timestamps
    end
  end
end
