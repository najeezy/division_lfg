import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducers/root_reducer';

export default function configureStore() {
  return createStore(
    rootReducer,
    compose(
      applyMiddleware(thunk),
      window.devToolsExtension ? window.devToolsExtension() : f => f
    )
  )
}

// possible redux state
// {
//   entities: {
//     groups: {},
//     players: {}
//   },
//
//   groups: {
//     items: []
//   },
//
//   user: {
//     id: null,
//     email: null
//   },
//
//   fetchStates: [
//     {
//       fetchType: 'TYPE',
//       complete: false,
//       success: true,
//       errors: []
//     }
//   ]
// }
