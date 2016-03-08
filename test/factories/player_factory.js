import faker from 'faker';

let nextPlayerId = 1;
export default function GroupFactory(playerAttributes = {}) {
  let player = {
    id: nextPlayerId++,
    platform: ['Playstation Network', 'Xbox Live'][faker.random.number(1)],
    username: faker.internet.userName(),
    level: faker.random.number({min: 1, max: 30})
  };

  const { id, platform, username, level } = playerAttributes;

  player.id = id || player.id;
  player.platform = platform || player.platform;
  player.username = username || player.username;
  player.level = level || player.level;

  return player
}
