export default class SearchBar extends React.Component {
  constructor(props) {
    super(props)
    this.handleUserInput = this.handleUserInput.bind(this);
  }

  handleUserInput() {
    $.ajax({
      url: '/groups',
      dataType: 'json',
      data: {q: this.refs.textInput.value},
      success: (data) => {
        this.props.onUserInput(data);
      }
    });
  }

  render() {
    return (
      <div className="searchBar">
        <input
          type="text"
          placeholder="Search missions..."
          className="col-md-12"
          ref="textInput"
          onChange={this.handleUserInput}
        />
      </div>
    );
  }
}
