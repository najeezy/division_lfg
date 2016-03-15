import * as actions from '../actions/action_types.js'

export default function user(
  state = {
    id: null,
    email: null,
    isFetching: false,
    invalidated: false,
    error: null
  },
  action
) {
  switch (action.type) {
    case actions.REQUEST_USER:
      return { ...state, isFetching: true }
    case actions.INVALIDATE_USER:
      const { error } = action
      return { ...state, isFetching: false, invalidated: true, error }
    case actions.SET_USER:
      const { id, email } = action
      return { id, email, isFetching: false, invalidated: false, error: null }
    case actions.UNSET_USER:
      return {
        id: null,
        email: null,
        isFetching: false,
        invalidated: false,
        error: null 
      }
    default:
      return state
  }
}
