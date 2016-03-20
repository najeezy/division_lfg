import FilterableGroupList from '../filterable_group_list.js.jsx'
import UserSection from '../containers/user_section.js'

const GroupsPage = () => (
  <div className="mainPage row">
    <div className="col-md-9">
      <FilterableGroupList />
    </div>
    <div className="col-md-3">
      <UserSection />
    </div>
  </div>
)
export default GroupsPage
