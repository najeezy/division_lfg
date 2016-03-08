import expect from 'expect';
import * as types from '../../app/assets/javascripts/components/actions/action_types.js';
import * as creators from '../../app/assets/javascripts/components/actions/group_creators.js';
import GroupFactory from '../factories/group_factory.js';

// async testing dependencies
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import nock from 'nock'

describe('group action creators', () => {
  describe('receiveGroups', () => {
    it('should create an action to receive groups', () => {
      const groups = [GroupFactory(), GroupFactory()];
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

});
