import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers/root_reducer';

export const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);
