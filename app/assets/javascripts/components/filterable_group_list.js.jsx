import { connect } from 'react-redux';
import entitiesDenormalizer from '../helpers/entities_denormalizer.js';
import SearchBar from './search_bar.js.jsx';
import GroupList from './group_list.js.jsx';
import { fetchGroups } from './actions/group_actions.js'

class FilterableGroupList extends React.Component {
  constructor(props) {
    super(props)
    this.handleFilter = this.handleFilter.bind(this);
  }

  componentDidMount() {
    const { dispatch } = this.props
    dispatch(fetchGroups())
  }

  handleFilter(filteredGroups) {
    this.setState({groups: filteredGroups});
  }

  render() {
    const { groups } = this.props
    return (
      <div className="filterableGroupList">
        <SearchBar onUserInput={this.handleFilter} />
        <GroupList groups={groups} />
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
    })
  })
)(FilterableGroupList)

export default FilterableGroupList;
