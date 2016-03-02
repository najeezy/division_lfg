App = {
  router(path) {
    if (/\#groups/.test(path))    { return <FilterableGroupList /> }
    if (/\#new_group/.test(path)) { return <NewGroup /> }
  },

  goto(path) {
    window.history.pushState({}, '', path);
    $(window).trigger('pushstate');
  }
};
