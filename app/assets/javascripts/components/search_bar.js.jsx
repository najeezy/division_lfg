import { connect } from 'react-redux'
import { fetchSearchGroups, setGroupQuery } from './actions/group_actions.js'

let SearchBar = ({ dispatch }) => {
  let input
  return (
    <div className="searchBar">
      <input
        type="text"
        placeholder="Search missions..."
        className="form-control"
        ref={node => input = node}
        onChange={() => {
          dispatch(setGroupQuery(input.value))
          dispatch(fetchSearchGroups(input.value))
        }}
      />
    </div>
  )
}
SearchBar = connect()(SearchBar)
export default SearchBar
