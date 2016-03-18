import { connect } from 'react-redux'
import SignUp from '../components/sign_up.js'
import { fetchSignUpUser } from '../actions/user_auth_actions.js'

const SignUpPage = connect(
  null,
  (dispatch) => ({
    onSignUp: (...args) => dispatch(fetchSignUpUser(...args))
  })
)(SignUp)
export default SignUpPage
