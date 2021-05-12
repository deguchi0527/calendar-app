FactoryBot.define do
  factory :user do
    email { Faker::Internet.free_email }
    password { '1a' + Faker::Internet.password(min_length: 4) }
    password_confirmation { password }
    nickname { Faker::Name.initials }
  end
end