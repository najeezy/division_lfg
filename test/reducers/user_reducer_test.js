import expect from 'expect'
import reducer from '../../app/assets/javascripts/components/reducers/user_reducer.js'
import * as types from '../../app/assets/javascripts/components/actions/action_types.js'

describe('userReducer', () => {
  it('returns the initial state', () => {
    expect(
      reducer(undefined, {})
    ).toEqual(
      {
        id: null,
        email: null,
        isFetching: false,
        invalidated: false,
        errors: null
      }
    )
  })

  it('handles REQUEST_USER', () => {
    expect(
      reducer(
        {
          id: null,
          email: null,
          isFetching: false,
          invalidated: false,
          error: null
        },
        {
          type: types.REQUEST_USER
        }
      )
    ).toEqual(
      {
        id: null,
        email: null,
        isFetching: true,
        invalidated: false,
        error: null
      }
    )
  })

  context('handles INVALIDATE_USER action', () => {
    it('from initial state', () => {
      const error = 'some error'
      expect(
        reducer(
          {
            id: null,
            email: null,
            isFetching: false,
            invalidated: false,
            error: null
          },
          {
            type: types.INVALIDATE_USER,
            error: 'some error'
          }
        )
      ).toEqual(
        {
          id: null,
          email: null,
          isFetching: false,
          invalidated: true,
          error: 'some error'
        }
      )
    })

    it('from fetching state', () => {
      expect(
        reducer(
          {
            id: null,
            email: null,
            isFetching: true,
            invalidated: false,
            error: null
          },
          {
            type: types.INVALIDATE_USER,
            error: 'some error'
          }
        )
      ).toEqual(
        {
          id: null,
          email: null,
          isFetching: false,
          invalidated: true,
          error: 'some error'
        }
      )
    })
  })

  context('handles SET_USER action', () => {

    it('from initial state', () => {
      expect(
        reducer(
          {
            id: null,
            email: null,
            isFetching: false,
            invalidated: false,
            error: null
          },
          {
            type: types.SET_USER,
            id: 1,
            email: 'someemail@email.com'
          }
        )
      ).toEqual(
        {
          id: 1,
          email: 'someemail@email.com',
          isFetching: false,
          invalidated: false,
          error: null
        }
      )
    })

    it('from invalidated and fetching state', () => {
      expect(
        reducer(
          {
            id: null,
            email: null,
            isFetching: true,
            invalidated: true,
            error: 'some error'
          },
          {
            type: types.SET_USER,
            id: 1,
            email: 'someemail@email.com'
          }
        )
      ).toEqual(
        {
          id: 1,
          email: 'someemail@email.com',
          isFetching: false,
          invalidated: false,
          error: null
        }
      )
    })
  })

  it('handles UNSET_USER', () => {
    expect(
      reducer(
        {
          id: 1,
          email: 'someemail@email.com',
          isFetching: true,
          invalidated: true,
          error: 'some error'
        },
        {
          type: types.UNSET_USER
        }
      )
    ).toEqual(
      {
        id: null,
        email: null,
        isFetching: false,
        invalidated: false,
        error: null
      }
    )
  })
})
