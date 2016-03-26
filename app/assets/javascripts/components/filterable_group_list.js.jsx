import { connect } from 'react-redux';
import entitiesDenormalizer from '../helpers/entities_denormalizer.js';
import SearchBar from './search_bar.js.jsx';
import GroupList from './group_list.js.jsx';
import { fetchGroups, fetchJoinGroup } from './actions/group_actions.js'

class FilterableGroupList extends React.Component {
  constructor(props) {
    super(props)
    this.onJoin = this.onJoin.bind(this)
  }

  componentDidMount() {
    const { dispatch } = this.props
    dispatch(fetchGroups())
  }

  onJoin(id) {
    const { dispatch } = this.props
    dispatch(fetchJoinGroup(id))
  }

  render() {
    const { groups, isLoggedIn } = this.props
    const { onJoin } = this
    return (
      <div className="filterableGroupList">
        <SearchBar />
        <GroupList {...{ groups, isLoggedIn, onJoin }} />
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
