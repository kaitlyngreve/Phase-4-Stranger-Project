class CharacterSerializer < ActiveModel::Serializer
  attributes :id, :name, :age, :strength, :intelligence, :image, :team_id
  has_one :team
  has_one :monster
end
