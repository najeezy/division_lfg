import expect from 'expect'
import reducer from '../../app/assets/javascripts/components/reducers/errors_reducer.js'
import * as types from '../../app/assets/javascripts/components/actions/action_types.js'

describe('errors reducer', () => {

  it('should return the initial state', () => {
    expect(
      reducer(undefined, {})
    ).toEqual([])
  })

  it('should handle ADD_ERRORS', () => {
    // handles from initial state
    expect(
      reducer([], { type: types.ADD_ERRORS, errors: ['error 1', 'error 2'] })
    ).toEqual(
      ['error 1', 'error 2']
    )

    // handles from non initial state
    expect(
      reducer(
        ['error 1'],
        { type: types.ADD_ERRORS, errors: ['error 2', 'error 3'] }
      )
    ).toEqual(
      ['error 1', 'error 2', 'error 3']
    )
  })

  it('should handle CLEAR_ERRORS', () => {
    expect(
      reducer(
        ['error 1', 'error 2'],
        { type: types.CLEAR_ERRORS }
      )
    ).toEqual(
      []
    )
  })
})
