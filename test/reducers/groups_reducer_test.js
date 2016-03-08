import expect from 'expect';
import reducer from '../../app/assets/javascripts/components/reducers/groups_reducer.js';
import GroupFactory from '../factories/group_factory.js';

describe('groups reducer', () => {
  const group1 = GroupFactory();
  const group2 = GroupFactory();
  const group3 = GroupFactory();

  it('should return the initial state', () => {
    expect(
      reducer(undefined, {})
    ).toEqual({
      isFetching: false,
      items: []
    });
  });


  it('should handle RECEIVE_GROUPS', () => {
    // testing with no initial groups
    expect(
      reducer(
        {
          isFetching: true,
          items: []
        },
        {
          type: 'RECEIVE_GROUPS',
          items: [group1, group2, group3]
        }
      )
    ).toEqual(
      {
        isFetching: false,
        items: [group1.id, group2.id, group3.id]
      }
    );

    // testing with initial groups
    expect(
      reducer(
        {
          isFetching: true,
          items: [group1.id, group2.id]
        },
        {
          type: 'RECEIVE_GROUPS',
          items: [group3]
        }
      )
    ).toEqual(
      {
        isFetching: false,
        items: [group3.id]
      }
    );
  });


  it('should handle REQUEST_GROUPS', () => {
    // handles initial state with no groups
    expect(
      reducer(
        {
          isFetching: false,
          items: []
        },
        {
          type: 'REQUEST_GROUPS',
          query: ''
        }
      )
    ).toEqual(
      {
        isFetching: true,
        items: []
      }
    );

    // handles initial state with groups
    expect(
      reducer(
        {
          isFetching: false,
          items: [group1.id, group2.id]
        },
        {
          type: 'REQUEST_GROUPS',
          query: ''
        }
      )
    ).toEqual(
      {
        isFetching: true,
        items: [group1.id, group2.id]
      }
    );
  });
});
