import { browserHistory } from 'react-router'
import apiCall from '../../helpers/api_call.js'

import {
  RECEIVE_GROUPS,
  REQUEST_GROUPS,
  JOIN_GROUP
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

export function joinGroup(groupId, playerId) {
  return {
    type: JOIN_GROUP,
    groupId,
    playerId
  }
}

export function fetchGroups(query = null) {
  return (dispatch) => {
    dispatch(requestGroups())
    let fetchArgs = null
    const url = query ?
      `${_rootURL}/groups.json?q=${query}` :
      `${_rootURL}/groups.json`

    return apiCall({
      url,
      success: (data) => dispatch(receiveGroups(data))
    })
  }
}

export function fetchCreateGroup(group_params) {
  return (dispatch) => {
    dispatch(requestGroups())

    return apiCall({
      url: `${_rootURL}/groups`,
      type: 'POST',
      data: { group: group_params },
      success: (data) => {
        dispatch(receiveGroups(data))
        browserHistory.push('/')
      }
    })
  }
}

export function fetchJoinGroup(groupId) {
  return (dispatch) => {
    dispatch(requestGroups())
    let fetchArgs = null


    return apiCall({
      url: `${_rootURL}/groups/${groupId}/join`,
      type: 'PUT',
      success: (data) => {
        dispatch(joinGroup(data.group_id, data.player_id))
        browserHistory.push('/')
      }
    })
  };
}
