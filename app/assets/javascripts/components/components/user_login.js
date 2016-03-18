let UserLogin = ({ isFetching, invalidated, error, onLogin }) => {
  let emailInput
  let passwordInput

  let loginError
  if (invalidated) { loginError = <p style={{ color: 'red' }}>{error}</p> }

  return (
    <div className="userLogin">
      <a href="#signup">
        <button className="btn btn-primary">
          Sign Up
        </button>
      </a>

      {loginError}
      <input
        type="text"
        placeholder="Email"
        ref={(node) => emailInput = node}
        className="form-control"
      />
      <input
        type="password"
        placeholder="Password"
        ref={(node) => passwordInput = node}
        className="form-control"
      />
      <button
        className="btn btn-success"
        onClick={() => onLogin(emailInput.value, passwordInput.value)}
      >
        {isFetching ? 'Loading...' : 'Log In'}
      </button>
    </div>
  )
}

export default UserLogin
