import expect from 'expect';
import * as types from '../../app/assets/javascripts/components/actions/action_types.js';
import * as actions from '../../app/assets/javascripts/components/actions/error_actions.js';

describe('error action creators', () => {

  describe('addErrors', () => {
    it('should create an action to add errors', () => {
      expect(
        actions.addErrors(['error 1', 'error 2'])
      ).toEqual({
        type: types.ADD_ERRORS,
        errors: ['error 1', 'error 2']
      })
    })
  })

  describe('clearErrors', () => {
    it('should create an action to clear errors', () => {
      expect(
        actions.clearErrors()
      ).toEqual({
        type: types.CLEAR_ERRORS
      })
    })
  })
})
