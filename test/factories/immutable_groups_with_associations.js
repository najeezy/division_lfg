import GroupFactory from './group_factory.js';
import PlayerFactory from './player_factory.js';

export const group1 = GroupFactory({
  id: 1,
  mission_name: 'First Mission',
});
export const group2 = GroupFactory({
  id: 2,
  mission_name: 'Second Mission'
});
export const group3 = GroupFactory({
  id: 3,
  mission_name: 'Third Mission'
});

export const player1 = PlayerFactory({
  id: 1,
  platform: 'Playstation Network',
  username: 'some_username',
  level: 3
});
export const player2 = PlayerFactory({
  id: 2,
  platform: 'Playstation Network',
  username: 'another_username',
  level: 15
});
export const player3 = PlayerFactory({
  id: 3,
  platform: 'Xbox Live',
  username: 'one_more_username',
  level: 25
});

group1.players = [player1]
group2.players = [player2]
group3.players = [player3]

group1.creator = player2;
group2.creator = player3;
group3.creator = player1;
