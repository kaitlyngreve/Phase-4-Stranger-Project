class Team < ApplicationRecord
    has_many :characters
    has_many :monsters, through: :characters
    validates :team_name, inclusion: { in: ['Hellfire Club', 'Scoops Ahoy', 'Hawkins High', 'Starcourt']}
    validates :player_total, numericality: { equal_to: 4 }
end
