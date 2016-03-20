import { connect } from 'react-redux'
import NavBar from './containers/nav_bar.js'

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
    return (
      <div className="appComponent">
        <div className="heading col-md-2">
          <NavBar />
        </div>
        <div className="col-md-10">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default AppComponent
