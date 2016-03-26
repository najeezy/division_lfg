import expect from 'expect'
import * as types from '../../app/assets/javascripts/components/actions/action_types.js'

describe('actions types', () => {
  it('has set RECEIVE_GROUPS', () => {
    expect(types.RECEIVE_GROUPS).toEqual('RECEIVE_GROUPS')
  })

  it('has set REQUEST_GROUPS', () => {
    expect(types.REQUEST_GROUPS).toEqual('REQUEST_GROUPS')
  })

  it('has set JOIN_GROUP', () => {
    expect(types.JOIN_GROUP).toEqual('JOIN_GROUP')
  })

  it('has set REQUEST_USER', () => {
    expect(types.REQUEST_USER).toEqual('REQUEST_USER')
  })

  it('has set SET_USER', () => {
    expect(types.SET_USER).toEqual('SET_USER')
  })

  it('has set INVALIDATE_USER', () => {
    expect(types.INVALIDATE_USER).toEqual('INVALIDATE_USER')
  })

  it('has set UNSET_USER', () => {
    expect(types.UNSET_USER).toEqual('UNSET_USER')
  })
})
