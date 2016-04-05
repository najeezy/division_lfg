import { connect } from 'react-redux'
import ErrorsBoxComponent from '../components/errors_box_component.js'

const ErrorsBox = connect(
  (state) => ({
    errors: state.errors,
    hasErrors: state.errors.length > 0
  })
)(ErrorsBoxComponent)
export default ErrorsBox
