# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

users = [
  {
    email: 'najee_gardner@me.com',
    password: 'Abcd1234',
    password_confirmation: 'Abcd1234',
    player: Player.create({
      platform: 'ps4',
      username: 'TruO_',
      level: (1..30).to_a.sample,
      has_mic: true,
      created_groups: Group.create([
        { mission_name: 'Madision Square Hospital', is_active: true }
      ])
    })
  },
  {
    email: 'tatirobinson@gmail.com',
    password: 'Abcd1234',
    password_confirmation: 'Abcd1234',
    player: Player.create({
      platform: 'ps4',
      username: 'Rinzer_',
      level: (1..30).to_a.sample,
      has_mic: true,
      created_groups: Group.create([
        { mission_name: 'Darkzone Patrol', is_active: true }
      ])
    })
  },
  {
    email: 'ebalfour@gmail.com',
    password: 'Abcd1234',
    password_confirmation: 'Abcd1234',
    player: Player.create({
      platform: 'ps4',
      username: 'BalCuatro',
      level: (1..30).to_a.sample,
      has_mic: false,
      created_groups: Group.create([
        { mission_name: 'Base of Ops', is_active: true }
      ])
    })
  },
  {
    email: 'criscorprew@gmail.com',
    password: 'Abcd1234',
    password_confirmation: 'Abcd1234',
    player: Player.create({
      platform: 'ps4',
      username: 'Copastetik',
      level: (1..30).to_a.sample,
      has_mic: false,
      created_groups: Group.create([
        { mission_name: 'Base of Ops', is_active: true }
      ])
    })
  }
]

def fake_user_data
  {
    email: Faker::Internet.email,
    password: 'Abcd1234',
    password_confirmation: 'Abcd1234',
    player: Player.create({
      platform: ['ps4', 'xb1'].sample,
      username: Faker::Internet.user_name,
      level: (1..30).to_a.sample,
      has_mic: [true, false].sample,
      created_groups: Group.create([
        { mission_name: Faker::Lorem.sentence, is_active: true }
      ])
    })
  }
end

fake_users = (1..30).to_a.map { |num| fake_user_data }

User.create(users + fake_users)

# create random group/player associations
Group.all.each do |group|
  group.players << Player.where("id <> #{group.creator.id}").order('RANDOM()').limit([0,1,2].sample)
end
