import { connect } from 'react-redux'
import { fetchCreateGroup } from '../actions/group_actions.js'
import NewGroup from '../components/new_group.js'
import UserSection from '../containers/user_section.js'

let NewGroupPage = ({ onCreateGroup }) => (
  <div className="newGroupPage row">
    <div className="col-md-9">
      <NewGroup {...{ onCreateGroup }} />
    </div>
    <div className="col-md-3">
      <UserSection />
    </div>
  </div>
)

NewGroupPage = connect(
  null,
  (dispatch) => ({
    onCreateGroup: (group_params) => dispatch(fetchCreateGroup(group_params))
  })
)(NewGroupPage)

export default NewGroupPage
