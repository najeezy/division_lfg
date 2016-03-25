import { normalize, arrayOf } from 'normalizr'
import { merge } from 'lodash'
import { group, player } from '../store/store_normalizer.js'
import * as types from '../actions/action_types.js'

export default function entities(
  state = { groups: {}, players: {} },
  action
) {
  switch (action.type) {
    case types.RECEIVE_GROUPS:
      if (action.items.length > 0) {
        return merge(state, normalize(action.items, arrayOf(group)).entities)
      } else {
        return state
      }
    default:
      return state;
  }
}
