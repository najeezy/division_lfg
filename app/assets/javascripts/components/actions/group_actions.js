import { browserHistory } from 'react-router'
import apiCall from '../../helpers/api_call.js'
import { addErrorsOnTimer } from './error_actions.js'
import * as types from './action_types.js'

export function receiveGroups(items) {
  return {
    type: types.RECEIVE_GROUPS,
    items
  }
}

export function replaceGroups(items) {
  return {
    type: types.REPLACE_GROUPS,
    items
  }
}

export function requestGroups() {
  return {
    type: types.REQUEST_GROUPS
  }
}

export function setGroupQuery(query) {
  return {
    type: types.SET_GROUP_QUERY,
    query
  }
}

export function incrementGroupsPage() {
  return {
    type: types.INCREMENT_GROUPS_PAGE
  }
}

export function joinGroup(groupId, playerId) {
  return {
    type: types.JOIN_GROUP,
    groupId,
    playerId
  }
}

export function fetchNextGroups(query, nextPage) {
  return (dispatch) => {
    dispatch(requestGroups())

    return apiCall({
      url: `${_rootURL}/groups.json?q=${query}&page=${nextPage}`,
      success: (data) => {
        dispatch(incrementGroupsPage())
        dispatch(receiveGroups(data))
      }
    })
  }
}

export function fetchSearchGroups(query = null) {
  return (dispatch) => {
    dispatch(requestGroups())
    const url = query ?
      `${_rootURL}/groups.json?q=${query}` :
      `${_rootURL}/groups.json`

    return apiCall({
      url,
      success: (data) => dispatch(replaceGroups(data))
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

    return apiCall({
      url: `${_rootURL}/groups/${groupId}/join`,
      type: 'PUT',
      success: (data) => {
        if (data.success) {
          dispatch(joinGroup(data.group_id, data.player_id))
          browserHistory.push('/')
        } else {
          dispatch(addErrorsOnTimer(data.errors))
        }
      }
    })
  };
}
