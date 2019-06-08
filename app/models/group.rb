class Group < ApplicationRecord
  has_many :group_users   # group_usersを複数所持している関係
  has_many :users, through: :group_users   #group_usersモデルを通して、usersを複数所持している関係
  has_many :messages   #messagesを複数所持している関係

  validates :name, presence: true, uniqueness: true   # nameという値が入っているかどうかを検証する

  def show_last_message   # モデルにインスタンスメソッドを定義することで、ビューの記述をシンプルにする
    if (last_message = messages.last).present?
      last_message.content? ? last_message.content : '画像が投稿されています'
    else
      'まだメッセージはありません'
    end
  end
end