

import expect from 'expect';
import * as types from '../../app/assets/javascripts/components/actions/action_types.js';
import * as actions from '../../app/assets/javascripts/components/actions/group_actions.js';
import { group1, group2, group3 } from '../factories/immutable_groups_with_associations.js';

// async testing dependencies
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import nock from 'nock'

const middleWares = [thunk];
const mockStore = configureMockStore(middleWares);



describe('group action creators', () => {

  describe('receiveGroups', () => {
    it('should create an action to receive groups', () => {
      const groups = [group1, group2];
      expect(
        actions.receiveGroups(groups)
      ).toEqual({
        type: types.RECEIVE_GROUPS,
        items: groups
      });
    });
  });

  describe('requestGroups', () => {
    it('should create an action for initiating a request for groups', () => {
      expect(
        actions.requestGroups()
      ).toEqual({
        type: types.REQUEST_GROUPS
      });
    });
  });

  describe('joinGroup', () => {
    it('should create an action for initiating a request for groups', () => {
      expect(
        actions.joinGroup(1, 2)
      ).toEqual({
        type: types.JOIN_GROUP,
        groupId: 1,
        playerId: 2
      });
    });
  });

  describe('async actions', () => {

    describe('fetchGroups', () => {
      it('creates REQUEST_GROUPS and RECEIVE_GROUPS when fetching groups', (done) => {
        const groups = [group1, group2];
        nock('http://localhost:3000/')
          .get('/groups.json')
          .reply(200, groups);

        const expectedActions = [
          { type: types.REQUEST_GROUPS },
          { type: types.RECEIVE_GROUPS, items: groups }
        ];

        const store = mockStore({}, expectedActions, done);
        store.dispatch(actions.fetchGroups());
      });

      it('adds a query string to body of request when passed query arguement', (done) => {
        const groups = [group3];
        nock('http://localhost:3000/')
          .get('/groups.json')
          .query({ q: 'some query' })
          .reply(200, groups);

        const expectedActions = [
          { type: types.REQUEST_GROUPS },
          { type: types.RECEIVE_GROUPS, items: groups }
        ];

        const store = mockStore({}, expectedActions, done);
        store.dispatch(actions.fetchGroups('some query'));
      })
    });

    describe('fetchCreateGroup', () => {
      it('creates REQUEST_GROUPS and RECEIVE_GROUPS when creating a group', (done) => {
        const groups = [group3]
        nock('http://localhost:3000/')
          .post('/groups', { group: { mission_name: 'some_name' } })
          .query({ authenticity_token: global._token })
          .reply(200, groups)

        const expectedActions = [
          { type: types.REQUEST_GROUPS },
          { type: types.RECEIVE_GROUPS, items: groups }
        ]

        const store = mockStore({}, expectedActions, done)
        store.dispatch(actions.fetchCreateGroup({ mission_name: 'some_name' }))
      })
    })

    describe('fetchJoinGroup', () => {
      it('creates REQUEST_GROUPS and RECEIVE_GROUPS when creating a group', (done) => {
        nock('http://localhost:3000/')
          .put('/groups/1/join')
          .query({ authenticity_token: global._token })
          .reply(200, { group_id: 1, player_id: 2 })

        const expectedActions = [
          { type: types.REQUEST_GROUPS },
          { type: types.JOIN_GROUP, groupId: 1, playerId: 2 }
        ]

        const store = mockStore({}, expectedActions, done)
        store.dispatch(actions.fetchJoinGroup(1))
      })
    })
  })
})
