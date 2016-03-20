import { Link } from 'react-router'
import { connect } from 'react-redux'

let NavBar = ({ isLoggedIn }) => {
  let remainingLinks
  if (isLoggedIn) {
    remainingLinks = (
      <li>
        <Link
          to="/new_group"
          className={location.pathname == '/new_group' ? 'active' : 'inactive'}
        >
          New Group
        </Link>
      </li>
    )
  }

  return (
    <div className="row navBar">
      <h1 className="col-md-12"><span>The</span>Division<span>LFG</span></h1>
      <div className="navigation col-md-12">
        <ul>
          <li>
            <Link to='/' className={
                location.pathname == '/' ? 'active' : 'inactive'
              }
            >
              Home
            </Link>
          </li>
          {remainingLinks}
        </ul>
      </div>
    </div>
  )
}

NavBar = connect(
  (state) => ({
    isLoggedIn: !!state.user.id
  })
)(NavBar)

export default NavBar
