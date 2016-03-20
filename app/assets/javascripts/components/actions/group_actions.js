import fetch from 'isomorphic-fetch';
import 'babel-polyfill';

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
      `${'http://localhost:3000'}/groups.json?q=${query}` :
      `${'http://localhost:3000'}/groups.json`

    return fetch(url)
      .then((response) => {
        return response.json()
      }).then((responseData) => {
        dispatch(receiveGroups(responseData))
      }).catch(ex => console.log(ex))
  };
}
