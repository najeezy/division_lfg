import { normalize, arrayOf } from 'normalizr'
import { merge } from 'lodash'
import { group, player } from '../store/store_normalizer.js'
import * as types from '../actions/action_types.js'

export default function entities(
  state = { groups: {}, players: {} },
  action
) {
  switch (action.type) {
    case types.REPLACE_GROUPS:
    case types.RECEIVE_GROUPS:
      if (action.items.length > 0) {
        return merge(state, normalize(action.items, arrayOf(group)).entities)
      } else {
        return state
      }
    case types.JOIN_GROUP:
      const { playerId, groupId } = action
      let groups = { ...state.groups }
      groups[groupId].players.push(playerId)
      let new_state = { ...state, groups }
      return new_state
    default:
      return state;
  }
}
