import { connect } from 'react-redux';
import entitiesDenormalizer from '../helpers/entities_denormalizer.js';
import SearchBar from './search_bar.js.jsx';
import GroupList from './group_list.js.jsx';
import { fetchGroups } from './actions/group_actions.js'

class FilterableGroupList extends React.Component {
  componentDidMount() {
    const { dispatch } = this.props
    dispatch(fetchGroups())
  }

  render() {
    const { groups, isLoggedIn } = this.props
    return (
      <div className="filterableGroupList">
        <SearchBar />
        <GroupList groups={groups} isLoggedIn={isLoggedIn} />
      </div>
    )
  }
}

FilterableGroupList = connect(
  (state) => ({
    groups:  entitiesDenormalizer({
      ids: state.groups.items,
      entityType: 'groups',
      entities: state.entities
    }),
    isLoggedIn: !!state.user.id
  })
)(FilterableGroupList)

export default FilterableGroupList;
