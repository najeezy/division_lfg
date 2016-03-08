import FilterableGroupList from './components/filterable_group_list.js.jsx';
import NewGroup from './components/new_group.js.jsx';
import LogInPage from './components/log_in_page.js.jsx';

export const App = {
  router(path) {
    if (/\#groups/.test(path))    { return <FilterableGroupList /> }
    if (/\#new_group/.test(path)) { return <NewGroup /> }
    if (/\#login/.test(path))    { return <LogInPage /> }
  },

  goto(path) {
    window.history.pushState({}, '', path);
    $(window).trigger('pushstate');
  }
};
