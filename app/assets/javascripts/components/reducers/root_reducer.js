import { combineReducers } from 'redux';
import groups from './groups_reducer.js';
import entities from './entities_reducer.js';

const initialRootState = combineReducers({entities, groups});

export default function rootReducer(state = initialRootState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
