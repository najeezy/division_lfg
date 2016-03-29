import { connect } from 'react-redux';
import entitiesDenormalizer from '../helpers/entities_denormalizer.js';
import SearchBar from './search_bar.js.jsx';
import GroupList from './group_list.js.jsx';
import {
  fetchNextGroups,
  fetchSearchGroups,
  fetchJoinGroup
} from './actions/group_actions.js'

class FilterableGroupList extends React.Component {
  constructor(props) {
    super(props)
    this.onJoin = this.onJoin.bind(this)
    this.addOnScroll = this.addOnScroll.bind(this)
  }

  componentDidMount() {
    const { dispatch } = this.props
    dispatch(fetchSearchGroups())
    this.addOnScroll()
  }

  componentWillUnmount() {
    $(window).off('.groups_pagination')
  }

  onJoin(id) {
    const { dispatch } = this.props
    dispatch(fetchJoinGroup(id))
  }

  addOnScroll() {
    let scrollTimer = null
    $(window).on('scroll.groups_pagination', () => {
      // throttle scroll event triggering by waiting for scrolling to stop.
      if (scrollTimer) {
        clearTimeout(scrollTimer)
      }

      scrollTimer = setTimeout(
        () => {
          // let us know that we can start listening for scroll event again
          scrollTimer = null

          if (window.scrollY > (document.body.scrollHeight - 2000)) {
            const { dispatch, query, currentPage } = this.props
            dispatch(fetchNextGroups(query, currentPage + 1))
          }
        },
        // time between throttled scroll events
        200
      )
    })
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
    isLoggedIn: !!state.user.id,
    query: state.groups.query,
    currentPage: state.groups.page
  })
)(FilterableGroupList)

export default FilterableGroupList;
