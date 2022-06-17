class TeamSerializer < ActiveModel::Serializer
  attributes :id, :player_total, :team_name, :team_strength
end
