import expect from 'expect';
import reducer from '../../app/assets/javascripts/components/reducers/entities_reducer.js';
import * as types from '../../app/assets/javascripts/components/actions/action_types.js'
import {
  group1,
  group2,
  group3,
  player1,
  player2,
  player3
} from '../factories/immutable_groups_with_associations.js'

describe('entities reducer', () => {

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

  it('should handle JOIN_GROUP', () => {
    expect(
      reducer(
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
            }
          },
          players: {
            [player1.id]: player1,
            [player2.id]: player2
          }
        },
        { type: types.JOIN_GROUP, groupId: group2.id, playerId: player1.id }
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
            players: group2.players.map(player => player.id).concat([player1.id]),
            creator: group2.creator.id
          }
        },
        players: {
          [player1.id]: player1,
          [player2.id]: player2
        }
      }
    );
  });
});
