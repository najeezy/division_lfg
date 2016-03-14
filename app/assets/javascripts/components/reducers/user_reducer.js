import * as actions from '../actions/action_types.js'

export default function user(
  state = { id: null, signedIn: false },
  action
) {
  switch (action.type) {
    case actions.USER_SIGN_IN:
      return { id: action.id, signedIn: true }
    default:
      return state
  }
}
