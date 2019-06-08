FactoryBot.define do
  factory :group do   # groupのfactory_botを使用する記述
    name {Faker::Team.name}   # Fakerによってチーム名のダミーデータを作成
  end
end