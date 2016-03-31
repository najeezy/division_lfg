class Group < ActiveRecord::Base
  has_and_belongs_to_many :players
  belongs_to :creator, class_name: 'Player'

  validates :mission_name, presence: true

  @@pagination_limit = 20

  def self.search(query, page)
    page = (page || 1).to_i
    additional_sql = !query.blank? ?
      " AND LOWER(mission_name) LIKE '%#{query.downcase}%'" :
      ""

    Group
      .where("is_active IS true#{additional_sql}")
      .order(created_at: :desc)
      .offset((page - 1) * @@pagination_limit)
      .limit(@@pagination_limit)
  end

  def add_player(player)
    can_add = true

    if players.count >= 3
      can_add = false
      self.errors[:base] << 'This group is full.'
    elsif players.pluck(:id).include?(player.id)
      can_add = false
      self.errors[:base] << 'You are already in this group.'
    elsif
      can_add = false
      self.errors[:base] << 'You created this group.'
    end
    
    self.players << player if can_add
    can_add
  end

end
