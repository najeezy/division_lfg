class Group < ActiveRecord::Base
  has_and_belongs_to_many :players
  belongs_to :creator, class_name: 'Player'

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
end
