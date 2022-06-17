class Character < ApplicationRecord
  belongs_to :team, optional: true
  belongs_to :monster, optional: true
end
