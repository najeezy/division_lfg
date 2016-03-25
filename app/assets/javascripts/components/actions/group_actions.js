import { browserHistory } from 'react-router'
import fetch from 'isomorphic-fetch'
import 'babel-polyfill'

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

export function fetchGroups(query = null) {
  return (dispatch) => {
    dispatch(requestGroups())
    let fetchArgs = null
    const url = query ?
      `${_rootURL}/groups.json?q=${query}` :
      `${_rootURL}/groups.json`

    return fetch(url)
      .then((response) => {
        return response.json()
      }).then((responseData) => {
        dispatch(receiveGroups(responseData))
      }).catch(ex => console.log(ex))
  }
}

export function fetchCreateGroup(group_params) {
  return (dispatch) => {
    dispatch(requestGroups())
    let fetchArgs = null

    return fetch(
      `${_rootURL}/groups?authenticity_token=${encodeURIComponent(_token)}`,
      {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ group: group_params }),
        credentials: 'same-origin'
      }
    )
      .then((response) => {
        return response.json()
      }).then((responseData) => {
        dispatch(receiveGroups(responseData))
        browserHistory.push('/')
      }).catch(ex => console.log(ex))
  };
}
