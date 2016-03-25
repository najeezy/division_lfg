import expect from 'expect';
import reducer from '../../app/assets/javascripts/components/reducers/entities_reducer.js';
import * as types from '../../app/assets/javascripts/components/actions/action_types.js'
import GroupFactory from '../factories/group_factory.js';
import PlayerFactory from '../factories/player_factory.js';

describe('entities reducer', () => {
  const group1 = GroupFactory();
  const group2 = GroupFactory();
  const group3 = GroupFactory();

  const player1 = PlayerFactory();
  const player2 = PlayerFactory();
  const player3 = PlayerFactory();

  // set the players and creators
  group1.players = [player1];
  group1.creator = player2;
  group2.players = [player2];
  group2.creator = player3;
  group3.players = [player3];
  group3.creator = player1;

  it('returns the initial state', () => {
    expect(
      reducer(undefined, {})
    ).toEqual(
      { groups: {}, players: {} }
    );
  });

  it('should handle RECEIVE_GROUPS', () => {
    // from initial state
    expect(
      reducer(
        { groups: {}, players: {} },
        { type: types.RECEIVE_GROUPS, items: [group1, group2, group3] }
      )
    ).toEqual(
      {
        groups: {
          [group1.id]: {
            ...group1,
            players: group1.players.map(player => player.id),
            creator: group1.creator.id
          },
          [group2.id]: {
            ...group2,
            players: group2.players.map(player => player.id),
            creator: group2.creator.id
          },
          [group3.id]: {
            ...group3,
            players: group3.players.map(player => player.id),
            creator: group3.creator.id
          }
        },
        players: {
          [player1.id]: player1, [player2.id]: player2, [player3.id]: player3
        }
      }
    )

    // from non initial state
    expect(
      reducer(
        {
          groups: {
            [group1.id]: {
              ...group1,
              players: group1.players.map(player => player.id),
              creator: group1.creator.id
            }
          },
          players: {
            [player1.id]: player1
          }
        },
        { type: types.RECEIVE_GROUPS, items: [group2, group3] }
      )
    ).toEqual(
      {
        groups: {
          [group1.id]: {
            ...group1,
            players: group1.players.map(player => player.id),
            creator: group1.creator.id
          },
          [group2.id]: {
            ...group2,
            players: group2.players.map(player => player.id),
            creator: group2.creator.id
          },
          [group3.id]: {
            ...group3,
            players: group3.players.map(player => player.id),
            creator: group3.creator.id
          }
        },
        players: {
          [player1.id]: player1, [player2.id]: player2, [player3.id]: player3
        }
      }
    );
  });
});
