import {
  RECEIVE_GROUPS,
  REQUEST_GROUPS
} from './action_types.js'

export function receiveGroups(items) {
  return {
    type: RECEIVE_GROUPS,
    items
  }
}

export function requestGroups() {
  return {
    type: REQUEST_GROUPS
  }
}
