import { Component } from 'react'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'
import NewGroup from '../new_group.js.jsx'
import UserSection from '../containers/user_section'

class NewGroupPage extends Component {

  componentWillMount() {
    const { isLoggedIn } = this.props
    if (!isLoggedIn) {
      browserHistory.push('/')
    }
  }

  render() {
    return (
      <div className="newGroupPage row">
        <div className="col-md-9">
          <NewGroup />
        </div>
        <div className="col-md-3">
          <UserSection />
        </div>
      </div>
    )
  }
}

NewGroupPage = connect(
  (state) => ({
    isLoggedIn: !!state.user.id,
    store: state
  })
)(NewGroupPage)

export default NewGroupPage
