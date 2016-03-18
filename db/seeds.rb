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
    password: 'abcd1234',
    password_confirmation: 'abcd1234',
    player: Player.create({
      platform: 'ps4',
      username: 'TruO_',
      level: 23,
      created_groups: Group.create([
        { mission_name: 'Madision Square Hospital', is_active: true }
      ])
    })
  },
  {
    email: 'tatirobinson@gmail.com',
    password: 'abcd1234',
    password_confirmation: 'abcd1234',
    player: Player.create({
      platform: 'ps4',
      username: 'Rinzer_',
      level: 25,
      created_groups: Group.create([
        { mission_name: 'Darkzone Patrol', is_active: true }
      ])
    })
  },
  {
    email: 'ebalfour@gmail.com',
    password: 'abcd1234',
    password_confirmation: 'abcd1234',
    player: Player.create({
      platform: 'ps4',
      username: 'BalCuatro',
      level: 13,
      created_groups: Group.create([
        { mission_name: 'Base of Ops', is_active: true }
      ])
    })
  }
]

User.create(users)
first_group = Group.first
last_group = Group.last

first_group.players << Player.where("id <> #{first_group.creator.id}")
last_group.players << Player.first
