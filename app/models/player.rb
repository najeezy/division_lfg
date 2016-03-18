class Player < ActiveRecord::Base
  # associations
  belongs_to :user
  has_and_belongs_to_many :groups
  has_many :created_groups, class_name: 'Group', foreign_key: 'creator_id'

  # validations
  validates :platform, :username, :level, presence: true
  validates :level, numericality: {
    greater_than: 0,
    less_than: 31
  }
  validates :platform, inclusion: {
    in: %w(ps4 xb1),
    message: '%{value} is not a valid option.'
  }

end
