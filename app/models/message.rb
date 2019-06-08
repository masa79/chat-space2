class Message < ApplicationRecord
  belongs_to :group
  belongs_to :user
  mount_uploader :image, ImageUploader   # image_uploaderをマウントする記述
  validates :content, presence: true, unless: :image?   # contentカラムに値が入っていて、それがimageでないかどうかを検証する
end
