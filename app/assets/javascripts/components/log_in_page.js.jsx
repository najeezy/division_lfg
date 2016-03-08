export default class LogInPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {loggedIn: false};
    this.logIn = this.logIn.bind(this);
  }

  logIn() {
    $.ajax({
      url: '/sessions',
      type: 'POST',
      data: {
        email: this.refs.email.value,
        password: this.refs.password.value
      },
      success(data) {
        this.setState({loggedIn: true});
        App.goto('#groups');
      }
    });
  }

  render() {
    return (
      <div className="logInPage">
        <div className="col-md-6 col-md-offset-3">
          <i className="fa fa-user col-md-1"></i>
          <input
            type="text"
            ref="email"
            placeholder="Email"
            className="col-md-11"
          />
        </div>
        <div className="col-md-6 col-md-offset-3">
          <i className="fa fa-lock col-md-1"></i>
          <input
            type="password"
            ref="password"
            placeholder="Password"
            className="col-md-11"
          />
        </div>
        <div className="col-md-6 col-md-offset-3">
          <button
            className="col-md-12 btn btn-success"
            onClick={this.logIn}
          >Log In
          </button>
        </div>
      </div>
    );
  }
}
