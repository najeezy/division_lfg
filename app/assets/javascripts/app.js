import FilterableGroupList from './components/filterable_group_list.js.jsx'
import NewGroup from './components/new_group.js.jsx'
import SignUpPage from './components/containers/sign_up_page.js'

export const App = {
  router(path) {
    if (/\#groups/.test(path))    { return <FilterableGroupList /> }
    if (/\#new_group/.test(path)) { return <NewGroup /> }
    if (/\#signup/.test(path))    { return <SignUpPage /> }
  },

  goto(path) {
    window.history.pushState({}, '', path);
    $(window).trigger('pushstate');
  }
};
