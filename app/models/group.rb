class Group < ApplicationRecord
  has_many :group_users   # group_usersを複数所持している関係
  has_many :users, through: :group_users   #group_usersモデルを通して、usersを複数所持している関係
  validates :name, presence: true, uniqueness: true   # nameという値が入っているかどうかを検証する
end
