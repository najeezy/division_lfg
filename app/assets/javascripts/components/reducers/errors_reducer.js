import { uniq } from 'lodash'
import { ADD_ERRORS, CLEAR_ERRORS } from '../actions/action_types.js'

const errors = (state = [], action) => {
  switch(action.type) {
    case ADD_ERRORS:
      return uniq([...state, ...action.errors])
    case CLEAR_ERRORS:
      return []
    default:
      return state
  }
}

export default errors
