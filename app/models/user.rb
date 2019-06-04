class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  has_many :messages   # messageを複数所持している関係
  has_many :group_users   # group_usersを複数所持している関係
  has_many :groups, thorugh: :group_users   # group_usersモデルを通してgroupを複数所持している関係
end
