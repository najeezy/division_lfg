import { Component } from 'react'

class SignUp extends Component {

  render() {
    const { onSignUp } = this.props

    let emailInput
    let passwordInput
    let passwordConfirmationInput
    let platformSelect
    let usernameInput
    let levelInput

    return (
      <form className="signUp text-center col-md-12">

        <div className="col-md-6 col-md-offset-3">
          <p>Create your account</p>
          <input
            type="text"
            placeholder="Email"
            className="form-control"
            ref={(node) => emailInput = node}
          />

          <input
            type="password"
            placeholder="Password"
            className="form-control"
            ref={(node) => passwordInput = node}
          />

          <input
            type="password"
            placeholder="Password Confirmation"
            className="form-control"
            ref={(node) => passwordConfirmationInput = node}
          />

          <p className="col-md-12">Create your player</p>

          <select
            className="form-control"
            ref={(node) => platformSelect = node}
            defaultValue={"Choose A Platform"}
          >
            <option disabled value="Choose A Platform">Choose A Platform</option>
            <option value="ps4">Playstation 4</option>
            <option value="xb1">Xbox One</option>
          </select>

          <input
            placeholder="Username on Platform"
            className="form-control"
            ref={(node) => usernameInput = node}
          />

          <input
            placeholder="Level"
            className="form-control"
            ref={(node) => levelInput = node}
          />

          <button
            className="btn btn-success"
            onClick={() => onSignUp(
              emailInput.value,
              passwordInput.value,
              passwordConfirmationInput.value,
              platformSelect.value,
              usernameInput.value,
              levelInput.value
            ) }
          >
            Create Account
          </button>

        </div>

      </form>
    )
  }
}

export default SignUp
