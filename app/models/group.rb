class Group < ActiveRecord::Base
  has_and_belongs_to_many :players
  belongs_to :creator, class_name: 'Player'

  def self.search(query)
    if query
      Group.where("is_active IS true AND LOWER(mission_name) LIKE '%#{query.downcase}%'")
    else
      Group.where(is_active: true)
    end
  end
end
