import { connect } from 'react-redux'
import { fetchGroups } from './actions/group_actions.js'

let SearchBar = ({ dispatch }) => {
  let input
  return (
    <div className="searchBar">
      <input
        type="text"
        placeholder="Search missions..."
        className="col-md-12"
        ref={node => input = node}
        onChange={() => {
          dispatch(fetchGroups(input.value))
        }}
      />
    </div>
  )
}
SearchBar = connect()(SearchBar)
export default SearchBar
