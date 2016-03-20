import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import groups from './groups_reducer.js'
import entities from './entities_reducer.js'
import user from './user_reducer.js'

const rootReducer = combineReducers({
  entities,
  groups,
  user,
  routing: routerReducer
})
export default rootReducer
