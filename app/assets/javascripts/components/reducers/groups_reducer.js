import { uniq } from 'lodash'
import * as types from '../actions/action_types.js'

export default function groups(
  state = { isFetching: false, query: '', page: 1, items: [] }, action
) {
  switch (action.type) {
    case types.RECEIVE_GROUPS:
      return {
        ...state,
        isFetching: false,
        items: uniq(state.items.concat(action.items.map((item) => item.id)))
      }
    case types.REPLACE_GROUPS:
      return {
        ...state,
        isFetching: false,
        items: action.items.map((item) => item.id)
      }
    case types.REQUEST_GROUPS:
      return { ...state, isFetching: true };

    case types.SET_GROUP_QUERY:
      return { ...state, page: 1, query: action.query }

    case types.INCREMENT_GROUPS_PAGE:
      return { ...state, page: state.page + 1 }

    default:
      return state;
  }
}
