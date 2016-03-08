import faker from 'faker';
import PlayerFactory from './player_factory.js';

let nextGroupId = 1;
export default function GroupFactory(groupAttributes = {}) {
  let group = {
    id: nextGroupId++,
    mission_name: faker.lorem.sentence(),
    is_active: true,
    creator: PlayerFactory(),
    players: [PlayerFactory(), PlayerFactory(), PlayerFactory()]
  };

  const { id, mission_name, is_active, creator, players } = groupAttributes

  group.id = id || group.id;
  group.mission_name = mission_name || group.mission_name;
  group.is_active = is_active || group.is_active;
  group.creator = creator || group.creator;
  group.players = players || group.players;

  return group
}
