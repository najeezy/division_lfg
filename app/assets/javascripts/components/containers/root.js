import { Provider } from 'react-redux';
import AppComponent from '../app_component.js.jsx';
import store from '../store/configure_store.js';


const Root = () => {
  return (
    <Provider store={store}>
      <AppComponent />
    </Provider>
  );
};

export default Root;
