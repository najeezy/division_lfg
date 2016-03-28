import apiCall from '../../helpers/api_call.js'
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

    return apiCall({
      url: `${_rootURL}/sessions`,
      success: (data) => {
        if (data.user) {
          const { id, email } = data.user
          dispatch(setUser(id, email))
        } else {
          dispatch(unsetUser())
          browserHistory.push('/')
        }
      }
    })
  }
}

export function fetchLoginUser(email, password) {
  return (dispatch) => {
    dispatch(requestUser())

    return apiCall({
      url: `${_rootURL}/sessions`,
      type: 'POST',
      data: { email, password },
      success: (data) => {
        if (data.success) {
          const { id, email } = data.user
          dispatch(setUser(id, email))
        } else {
          dispatch(invalidateUser(data.error))
        }
      }
    })
  }
}

export function fetchLogoutUser(id) {
  return (dispatch) => {
    dispatch(requestUser())

    return apiCall({
      url: `${_rootURL}/sessions/${id}`,
      type: 'DELETE',
      success: (data) => {
        dispatch(unsetUser())
        browserHistory.push('/')
      }
    })
  }
}

export function fetchSignUpUser(
  email, password, password_confirmation, platform, username, level
) {
  return (dispatch) => {
    dispatch(requestUser())

    return apiCall({
      url: `${_rootURL}/users`,
      type: 'POST',
      data: {
        user: {
          email, password, password_confirmation,
          player_attributes: {
            platform, username, level
          }
        }
      },
      success: (data) => {
        if (data.success) {
          const { id, email } = data.user
          dispatch(setUser(id, email))
          browserHistory.push('/')
        } else {
          console.log(data.errors)
        }
      }
    })
  }
}
