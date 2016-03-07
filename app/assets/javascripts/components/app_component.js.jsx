class AppComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {pathName: window.location.hash};
    this.pathChange = this.pathChange.bind(this);
  }

  componentDidMount() {
    $(window).on('pushstate popstate', this.pathChange);
  }

  componentWillMount() {
    $(window).off('pushstate popstate', this.pathChange);
  }

  pathChange() {
    this.setState({pathName: window.location.hash})
  }

  render() {
    if (!App.currentUser) {
      loginBox = (
        <div>
          <ActionLink title="Log In" href="#login" />
        </div>
      );
    }

    return (
      <div className="appComponent">
        <div className="heading col-md-2">
          <h1 className="col-md-12"><span>The</span>Division<span>LFG</span></h1>
          <div className="navigation col-md-12">
            <ul>
              <li><ActionLink title="Home" href="#groups" /></li>
              <li><ActionLink title="New Group" href="#new_group" /></li>
              <li>My Groups</li>
            </ul>
          </div>
        </div>
        <div className="col-md-8">
          {App.router(this.state.pathName)}
        </div>
        <div className="col-md-2">
          {loginBox}
        </div>
      </div>
    );
  }
}
