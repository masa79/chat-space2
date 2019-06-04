class GroupUser < ApplicationRecord
  belongs_to :group   # groupを1つだけ所持している関係
  belongs_to :user    # userを1つだけ所持している関係
end
