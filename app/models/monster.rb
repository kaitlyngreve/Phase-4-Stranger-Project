class Monster < ApplicationRecord
    has_many :characters
    has_many :teams, through: :characters
end
