class NewGroup extends React.Component {
  constructor(props) {
    super(props)
    this.state = {mission_name: ''};
    this.saveGroup = this.saveGroup.bind(this);
  }

  saveGroup() {
    $.ajax({
      url: '/groups',
      type: 'POST',
      data: {group: {mission_name: this.state.mission_name}},
      success: (data) => App.goto('#groups')
    });
  }

  render() {
    return (
      <div className="newGroup">
        <div className="col-md-12">
          <input
            type="text"
            placeholder="What mission are you playing?..."
            className="col-md-offset-3 col-md-6"
          />
        </div>
        <div className="col-md-12">
          <button
            className="col-md-offset-4 col-md-4 btn btn-success"
            onClick={this.saveGroup}
          ><i className="fa fa-plus-square"></i> Create Group
          </button>
        </div>
      </div>
    );
  }
}
