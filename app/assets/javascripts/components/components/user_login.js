const UserLogin = ({ isFetching, invalidated, error, onLogin }) => {
  let emailInput
  let passwordInput

  let loginError
  if (invalidated) { loginError = <p style={{ color: 'red' }}>{error}</p> }

  return (
    <div className="userLogin">
      <button>
        Sign Up
      </button>

      {loginError}
      <input
        type="text"
        placeholder="Email"
        ref={(node) => emailInput = node}
      />
      <input
        type="password"
        placeholder="Password"
        ref={(node) => passwordInput = node}
      />
      <button
        onClick={() => onLogin(emailInput.value, passwordInput.value)}
      >
        {isFetching ? 'Loading...' : 'Log In'}
      </button>
    </div>
  )
}

export default UserLogin
