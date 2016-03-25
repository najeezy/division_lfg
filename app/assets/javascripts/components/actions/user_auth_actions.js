import fetch from 'isomorphic-fetch'
import 'babel-polyfill'
import { browserHistory } from 'react-router'
import * as types from './action_types.js'

export const requestUser = () => (
  {
    type: types.REQUEST_USER
  }
)

export const setUser = (id, email) => (
  {
    type: types.SET_USER,
    id,
    email
  }
)

export const invalidateUser = (error) => (
  {
    type: types.INVALIDATE_USER,
    error
  }
)

export const unsetUser = () => (
  {
    type: types.UNSET_USER
  }
)

export function fetchUser() {
  return (dispatch) => {
    dispatch(requestUser())

    fetch(
      `${_rootURL}/sessions`,
      {
        method: 'GET',
        credentials: 'same-origin'
      }
    )
      .then((response) => response.json())
      .then((responseData) => {
        if (responseData.user) {
          const { id, email } = responseData.user
          dispatch(setUser(id, email))
        } else {
          dispatch(unsetUser())
          browserHistory.push('/')
        }
      })
      .catch((ex) => console.log(ex))
  }
}

export function fetchLoginUser(email, password) {
  return (dispatch) => {
    dispatch(requestUser())

    fetch(
      `${_rootURL}/sessions?authenticity_token=${encodeURIComponent(_token)}`,
      {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email: email, password: password }),
        credentials: 'same-origin'
      }
    )
      .then((response) => response.json())
      .then((responseData) => {
        if (responseData.success) {
          let { id, email } = responseData.user
          dispatch(setUser(id, email))
        } else {
          dispatch(invalidateUser(responseData.error))
        }
      })
      .catch((ex) => console.log(ex))
  }
}

export function fetchLogoutUser(id) {
  return (dispatch) => {
    dispatch(requestUser())

    fetch(
      `${_rootURL}/sessions/${id}?authenticity_token=${encodeURIComponent(_token)}`,
      {
        method: 'DELETE',
        credentials: 'same-origin'
      }
    )
      .then((response) => response.json())
      .then((responseData) => {
        dispatch(unsetUser())
        browserHistory.push('/')
      })
      .catch((ex) => console.log(ex))
  }
}

export function fetchSignUpUser(
  email, password, password_confirmation, platform, username, level
) {
  return (dispatch) => {
    dispatch(requestUser())

    fetch(
      `${_rootURL}/users?authenticity_token=${encodeURIComponent(_token)}`,
      {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          user: {
            email,
            password,
            password_confirmation,
            player_attributes: { platform, username, level }
          },
        }),
        credentials: 'same-origin'
      }
    )
      .then((response) => response.json())
      .then((responseData) => {
        if (responseData.success) {
          const { id, email } = responseData.user
          dispatch(setUser(id, email))
          browserHistory.push('/')
        } else {
          console.log(responseData.errors)
        }
      })
      .catch((ex) => console.log(ex))
  }
}
