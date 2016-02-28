class Player < ActiveRecord::Base
  belongs_to :user
  has_and_belongs_to_many :groups
  has_many :created_groups, class_name: 'Group', foreign_key: 'creator_id'
end
