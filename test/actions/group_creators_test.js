import expect from 'expect';
import * as types from '../../app/assets/javascripts/components/actions/action_types.js';
import * as creators from '../../app/assets/javascripts/components/actions/group_creators.js';
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
        creators.receiveGroups(groups)
      ).toEqual({
        type: types.RECEIVE_GROUPS,
        items: groups
      });
    });
  });

  describe('requestGroups', () => {
    it('should create an action for initiating a request for groups', () => {
      expect(
        creators.requestGroups()
      ).toEqual({
        type: types.REQUEST_GROUPS
      });
    });
  });

  describe('async actions', () => {

      describe('fetchGroups', () => {
        it('creates REQUEST_GROUPS and RECEIVE_GROUPS when fetching groups', (done) => {
          const groups = [group1, group2];
          nock('http://localhost:3000/')
            .get('/groups')
            .reply(200, groups);

          const expectedActions = [
            { type: types.REQUEST_GROUPS },
            { type: types.RECEIVE_GROUPS, items: groups }
          ];

          const store = mockStore({}, expectedActions, done);
          store.dispatch(creators.fetchGroups());
        });

        it('adds a query string to body of request when passed query arguement', (done) => {
          const groups = [group3];
          nock('http://localhost:3000/')
            .get('/groups')
            .query({ q: 'some query' })
            .reply(200, groups);

          const expectedActions = [
            { type: types.REQUEST_GROUPS },
            { type: types.RECEIVE_GROUPS, items: groups }
          ];

          const store = mockStore({}, expectedActions, done);
          store.dispatch(creators.fetchGroups('some query'));
        })
      });
  });

});
