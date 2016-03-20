import { connect } from 'react-redux'
import { Component } from 'react'
import { fetchUser, fetchLoginUser, fetchLogoutUser } from '../actions/user_auth_actions.js'
import UserInfo from '../components/user_info.js'
import UserLogin from '../components/user_login.js'

class UserSection extends Component {

  componentWillMount() {
    const { id, dispatch } = this.props
    if (!id) {
      dispatch(fetchUser())
    }
  }

  render() {
    const {
      id, email, isFetching, invalidated, error, onLogin, onLogout
    } = this.props

    let userSection
    if (id) {
      userSection = (
        <UserInfo {...{
            id, email, onLogout
          }}
          />
      )
    } else {
      userSection = (
        <UserLogin {...{
            isFetching, invalidated, error, onLogin
          }}
          />
      )
    }

    return (
      <div>
        {userSection}
      </div>
    )
  }
}

UserSection = connect(
  (state) => {
    const { id, email, isFetching, invalidated, error } = state.user
    return { id, email, isFetching, invalidated, error }
  },
  (dispatch) => ({
    onLogin: (email, password) => dispatch(fetchLoginUser(email, password)),
    onLogout: (id) => dispatch(fetchLogoutUser(id)),
    dispatch: dispatch
   })
)(UserSection)

export default UserSection
