class Team < ApplicationRecord
    has_many :characters
    has_many :monsters, through: :characters
end
