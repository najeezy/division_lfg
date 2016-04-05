class Group < ActiveRecord::Base
  has_and_belongs_to_many :players
  belongs_to :creator, class_name: 'Player'

  validates :mission_name, presence: true

  @@pagination_limit = 20

  def self.search(query, page, current_player)
    page = (page || 1).to_i
    additional_sql = !query.blank? ?
      "AND LOWER(groups.mission_name) LIKE '%#{query.downcase}%'" :
      ""

    Group
      .joins("LEFT JOIN groups_players ON groups_players.group_id = groups.id")
      .group("groups.id")
      .having("
        count(groups_players.player_id) < #{2} AND
        groups.is_active IS true #{additional_sql} AND
        groups.creator_id <> #{current_player.id}
      ")
      .where("groups_players.player_id <> #{current_player.id}")
      .order('groups.created_at DESC')
      .offset((page - 1) * @@pagination_limit)
      .limit(@@pagination_limit)
      .select('groups.*, count(groups_players.player_id) as players_count')
  end

  def add_player(player)
    can_add = true

    if players.count >= 3
      can_add = false
      self.errors[:base] << 'This group is full.'
    elsif players.pluck(:id).include?(player.id)
      can_add = false
      self.errors[:base] << 'You are already in this group.'
    elsif self.creator_id == player.id
      can_add = false
      self.errors[:base] << 'You created this group.'
    end

    self.players << player if can_add
    can_add
  end

end
