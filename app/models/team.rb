class Team < ApplicationRecord
    has_many :characters
    has_many :monsters, through: :characters
    validates :team_name, inclusion: { in: %w(HellfireClub ScoopsAhoy HawkinsHigh Starcourt)}
    validates :player_total, numericality: { equal_to: 4 }
end
