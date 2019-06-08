FactoryBot.define do
  factory :message do
    content {Faker::Lorem.sentence}
    image {File.open("#{Rails.root}/public/images/test_image.jpg")}   # carrier wave関連をテストで実行するとデフォルトのディレクトリにファイルが溜まってしまうため、保存されるディレクトリを保存している
    user
    group
  end
end