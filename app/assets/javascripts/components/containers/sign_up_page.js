import { connect } from 'react-redux'
import SignUp from '../components/sign_up.js'
import { fetchSignUpUser } from '../actions/user_auth_actions.js'
import { addErrorsOnTimer } from '../actions/error_actions.js'
import { signUpValidationAndErrors } from '../../helpers/validators.js'

const SignUpPage = connect(
  null,
  (dispatch) => ({
    onSignUp: (...args) => {
      const validation = signUpValidationAndErrors(...args)
      if (validation.valid) {
        dispatch(fetchSignUpUser(...args))
      } else {
        dispatch(addErrorsOnTimer(validation.errors))
      }
    }
  })
)(SignUp)
export default SignUpPage
