class MonsterSerializer < ActiveModel::Serializer
  attributes :id, :monster_strength, :name, :image, :monster_description
end
