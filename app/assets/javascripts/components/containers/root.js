// external libraries
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'

// store
import configureStore from '../store/configure_store.js';

// components
import AppComponent from '../app_component.js.jsx';
import GroupsPage from '../components/groups_page.js'
import NewGroupPage from '../components/new_group_page.js'
import SignUpPage from '../containers/sign_up_page.js'


const store = configureStore()
const history = syncHistoryWithStore(browserHistory, store)

const Root = () => {
  return (
    <Provider {...{store}}>
      <Router {...{history}}>
        <Route path='/' component={AppComponent}>
          <IndexRoute component={GroupsPage} />
          <Route path='signup' component={SignUpPage} />
          <Route path='new_group' component={NewGroupPage} />
        </Route>
      </Router>
    </Provider>
  );
};

export default Root;
