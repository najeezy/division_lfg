const UserInfo = ({ id, email, onLogout }) => (
  <div>
    <p>You are logged in:</p>
    <p>{email}</p>
    <button
      onClick={() => onLogout(id) }
    >
      Logout
    </button>
  </div>
)

export default UserInfo
