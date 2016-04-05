import { connect } from 'react-redux'
import NavBar from './containers/nav_bar.js'
import ErrorsBox from './containers/errors_box.js'

class AppComponent extends React.Component {
  render() {
    return (
      <div className="appComponent">
        <div className="heading col-md-2">
          <NavBar />
        </div>
        <div className="col-md-10">
          {this.props.children}
        </div>
        <ErrorsBox />
      </div>
    );
  }
}

export default AppComponent
