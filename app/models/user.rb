class User < ActiveRecord::Base
  has_secure_password

  # associations
  has_one :player
  accepts_nested_attributes_for :player

  # validations
  validates :email, presence: true
  validates :email, format: {
    multiline: true,
    with: /^[A-Za-z0-9\.\-\_]{1,}\@[A-Za-z0-9\.\-\_]{1,}\.[A-Za-z]{1,}$/
  }
  validates :password, format: {
    multiline: true,
    with: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
    message: 'Password must be at least 8 characters long and contain one uppercase letter, one lowercase letter, and one number.'
  }

end
