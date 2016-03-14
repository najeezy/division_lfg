import expect from 'expect'
import reducer from '../../app/assets/javascripts/components/reducers/user_reducer.js'
import * as actions from '../../app/assets/javascripts/components/actions/action_types.js'

describe('userReducer', () => {
  it('returns the initial state', () => {
    expect(reducer(undefined, {})).toEqual({ id: null, signedIn: false })
  })

  it('handles USER_SIGN_IN action', () => {
    expect(
      reducer(
        { id: null, signedIn: false },
        { type: actions.USER_SIGN_IN, id: 1 }
      )
    ).toEqual(
      { id: 1, signedIn: true }
    )
  })
})
