import expect from 'expect'
import * as actions from '../../app/assets/javascripts/components/actions/action_types.js'

describe('actions types', () => {
  it('has set RECEIVE_GROUPS', () => {
    expect(actions.RECEIVE_GROUPS).toEqual('RECEIVE_GROUPS')
  })

  it('has set REQUEST_GROUPS', () => {
    expect(actions.REQUEST_GROUPS).toEqual('REQUEST_GROUPS')
  })

  it('has set FETCH_GROUPS', () => {
    expect(actions.FETCH_GROUPS).toEqual('FETCH_GROUPS')
  })

  it('has set USER_SIGN_IN', () => {
    expect(actions.USER_SIGN_IN).toEqual('USER_SIGN_IN')
  })
})
