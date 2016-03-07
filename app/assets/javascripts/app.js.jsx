App = {
  currentUser: null,

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
